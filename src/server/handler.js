const fs = require('fs');
const loadData = require('../services/loadData');

const validateData = async (req, res) => {
  try {
    const { id, kode } = req.query; // Use req.query for query parameters
    const data = await loadData();

    const isValid = data.some(item => item.id === id && item.kode === kode);

    if (isValid) {
      res.status(200).json({ message: 'ID and Kode are valid' });
    } else {
      res.status(400).json({ message: 'ID or Kode is invalid' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Internal Server Error', error: error.message });
  }
};

const handleDoorStatus = async (req, res) => {
  try {
    const { id, kode } = req.body; // Get data from POST body
    const data = await loadData();

    const isValid = data.some(item => item.id === id && item.kode === kode);

    if (isValid) {
      res.status(200).json({ message: 'ID and Kode are valid' });
    } else {
      res.status(400).json({ message: 'ID or Kode is invalid' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Internal Server Error', error: error.message });
  }
};

module.exports = {
  validateData,
  handleDoorStatus,
};
