/**
 * @see http://marak.github.io/faker.js/
 */
const fs = require('fs')
const path = require('path')
const faker = require('faker')

const runNTimes = (count = 1) => funcToRun => {
  const result = []
  for (let i = 0; i < count; i++) {
    result.push(funcToRun())
  }
  return result
}
const getRandomNumber = count => Math.floor(Math.random() * count)
const generateUUID = () => faker.fake('{{random.uuid}}')

const generateCatalogItem = () => {
  return {
    id: generateUUID(),
    image: faker.fake('{{image.image}}'),
    text: faker.fake('{{lorem.paragraphs}}'),
    name: faker.fake('{{commerce.productName}}'),
    price: faker.fake('{{commerce.price}}'),
    productAdjective: faker.fake('{{commerce.productAdjective}}'),
    department: faker.fake('{{commerce.department}}'),
    date: faker.fake('{{date.past}}'),
  }
}

const catalog = runNTimes(10)(generateCatalogItem)

const generateUser = () => {
  return {
    id: generateUUID(),
    avatar: faker.fake('{{image.avatar}}'),
    name: faker.fake('{{name.lastName}}, {{name.firstName}}'),
    email: faker.fake('{{internet.email}}'),
    password: faker.fake('{{internet.password}}'),
    phoneNumber: faker.fake('{{phone.phoneNumber}}'),
  }
}

const users = runNTimes(10)(generateUser)

const generateProfile = () => {
  return {
    ...(users[getRandomNumber(10)]),
    favorites: [
      catalog[getRandomNumber(10)].id,
      catalog[getRandomNumber(10)].id,
    ],
  }
}

const data = {
  catalog,
  users,
  profile: runNTimes(1)(generateProfile),
}

fs.writeFileSync(path.join(__dirname, 'db.json'), JSON.stringify(data))
