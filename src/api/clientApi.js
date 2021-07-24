const logger = require('../utils/logger');
const { entryLog } = require('../utils/commons');

const health = (apiVersion, req, res, next) => {
  logger.info(entryLog(req));
  res.send(`Api ${apiVersion} is running`);
}

module.exports = {
  health
};