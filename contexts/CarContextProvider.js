import { View, Text, Dimensions } from "react-native";
import React, { createContext, useEffect, useState } from "react";
import { createClient } from "@sanity/client";

export const CarsContext = createContext(null);

const client = createClient({
  projectId: "nf5r3it9",
  dataset: "production",
  apiVersion: "2023-06-12",
  useCdn: true,
});

const url = "/api/db.json";

const CarContextProvider = ({ children }) => {
  const [carData, setcarData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [carBrand, setcarBrand] = useState({
    brand: [],
    brandImage: [],
  });
  const [randomCars, setRandomCars] = useState([]);
  const [cartItems, setCartItems] = useState([]);

  const height = Dimensions.get("screen").height;
  const width = Dimensions.get("screen").width;

  /*   const query = `*[_type == "car"] | order(_createdAt desc) {
  description,
  pricing,
  carName,
  carImage {
    asset -> {
      url
    }
  },
  _id,
  seats
}`;

  const getData = async () => {
    const data = await client.fetch(query).then((cars) => {
      return cars;
    });
    console.log(data);
    return data;
  }; */

  const fetchData = async () => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      //console.log(data.cars);
      if (data.cars && data.cars.length > 0) {
        setcarData(data.cars);
        //getting random cars to put in the Best Cars section
        const selectedCars = [];
        while (selectedCars.length < 2) {
          const randomIndex = Math.floor(Math.random() * data.cars.length);
          const randomCar = data.cars[randomIndex];
          if (!selectedCars.includes(randomCar)) {
            selectedCars.push(randomCar);
          }
        }
        setRandomCars(selectedCars);

        const uniqueBrands = [...new Set(data.cars.map((car) => car.brand))];
        const uniqueBrandImages = [
          ...new Set(data.cars.map((car) => car.brandImage)),
        ];

        // Set carBrand with unique brands and brand images
        setcarBrand({
          brand: uniqueBrands,
          brandImage: uniqueBrandImages,
        });
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (!carData) {
      fetchData();
    }

    setIsLoading(false);
    //console.log("carData in useEffect is : ", carData);
    // console.log("random cars is : ", randomCars);
  }, [carData]);

  const value = {
    carData,
    randomCars,
    isLoading,
    setIsLoading,
    carBrand,
    height,
    width,
  };

  return <CarsContext.Provider value={value}>{children}</CarsContext.Provider>;
};

export default CarContextProvider;
