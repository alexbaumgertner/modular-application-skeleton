/**
 * @see http://marak.github.io/faker.js/
 */
const fs = require('fs')
const path = require('path')
const faker = require('faker')

const generateUUID = () => faker.fake('{{random.uuid}}')

const generateCatalogItem = () => {
  return {
    id: generateUUID(),
  }
}

const generateUser = () => {
  return {
    id: generateUUID(),
    name: faker.fake('{{name.lastName}}, {{name.firstName}}'),
  }
}

const generateFavorite = () => {
  return {
    id: generateUUID(),
  }
}

const generateProfile = () => {
  return {
    id: generateUUID(),
  }
}

const runNTimes = (count = 1) => funcToRun => {
  const result = []
  for (let i = 0; i < count; i++) {
    result.push(funcToRun())
  }
  return result
}

const data = {
  catalog: runNTimes(10)(generateCatalogItem),
  users: runNTimes(10)(generateUser),
  favorites: runNTimes(10)(generateFavorite),
  profile: runNTimes(3)(generateProfile),
}

fs.writeFileSync(path.join(__dirname, 'db.json'), JSON.stringify(data))
