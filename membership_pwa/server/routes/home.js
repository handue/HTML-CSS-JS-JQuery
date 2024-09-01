const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth').default;

// @route   GET api/home
// @desc    Get home page data
// @access  Private
router.get('/', auth, (req, res) => {
  try {
   
    res.json(homeData);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;