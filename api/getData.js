import { createClient } from "@sanity/client";

const client = createClient({
  projectId: "nf5r3it9",
  dataset: "production",
  apiVersion: "2023-06-12",
  useCdn: true,
});

export const getData = async () => {
  const cars = await client.fetch('*[_type == "car"]');
  console.log(cars);
  return cars;
};
