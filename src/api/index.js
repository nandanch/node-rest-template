const router = require('express').Router();
const {health} = require('./clientApi');
const totoro = require('totoro-node');

router.use('/api', totoro.rain({
  v1: {
    active: true,
    endpoints: [{
      route: "/health",
      method: "GET",
      active: true,
      implementation: health
    }]
  }
}));

module.exports = router;