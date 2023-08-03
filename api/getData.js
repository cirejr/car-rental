import { createClient } from "@sanity/client";

const client = createClient({
  projectId: "nf5r3it9",
  dataset: "production",
  apiVersion: "2023-06-12",
  useCdn: true,
});

const query = `*[_type == "car"] | order(_createdAt desc) {
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

export const getData = async () => {
  const data = await client.fetch(query).then((cars) => {
    return cars;
  });
  console.log(data);
  return data;
};
