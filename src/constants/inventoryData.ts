import { faker } from "@faker-js/faker";

const inventoryData = Array.from({ length: 100 }).map(() => ({
  image: faker.image.urlPicsumPhotos({
    height: 90,
    width: 320,
  }),
  name: faker.commerce.productName(),
  stock: faker.number.int({ min: 0, max: 100 }),
}));

export default inventoryData;