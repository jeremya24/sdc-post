const fs = require('fs').promises;
const path = require('path');

const loadData = async () => {
  const dataPath = path.join(__dirname, '..', '..', 'data', 'data.json');
  const data = await fs.readFile(dataPath, 'utf-8');
  return JSON.parse(data);
};

module.exports = loadData;
