import { faker } from "@faker-js/faker";

const inventoryData = Array.from({ length: 100 }).map(() => ({
  id: faker.database.mongodbObjectId(),
  image: faker.image.urlLoremFlickr(),
  name: faker.commerce.productName(),
  description: faker.lorem.paragraph(),
  stock: faker.number.int({ min: 0, max: 100 }),
  price: faker.number.int({ min: 100, max: 5000 }),
}));

export default inventoryData;
