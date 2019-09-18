const fs = require('fs');

/**
 * Should be used once since it is synchronous
 * @param {string} path - Path to directory
 */
const createDirectoryIfItDoesntExist = (path) => {
  if (!fs.existsSync(path)) {
    fs.mkdirSync(path);
  };
};

module.exports = createDirectoryIfItDoesntExist;