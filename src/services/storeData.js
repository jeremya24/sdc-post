const fs = require('fs').promises;
const path = require('path');

const storeData = async (newData) => {
  const dataPath = path.join(__dirname, '..', 'data', 'data.json');
  let data = await fs.readFile(dataPath, 'utf-8');
  data = JSON.parse(data);

  data.push(newData);
  await fs.writeFile(dataPath, JSON.stringify(data, null, 2), 'utf-8');
};

module.exports = storeData;
