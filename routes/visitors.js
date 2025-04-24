const express = require('express');
const router = express.Router();
const Visitor = require('../models/Visitor');

// GET /api/visitors - Increment and return visitor count
router.get('/', async (req, res) => {
  try {
    let counter = await Visitor.findOne();

    if (!counter) {
      counter = new Visitor({ count: 1 });
    } else {
      counter.count += 1;
    }

    await counter.save();
    res.json({ count: counter.count });
  } catch (err) {
    res.status(500).json({ error: 'Could not count visitor' });
  }
});

module.exports = router;
