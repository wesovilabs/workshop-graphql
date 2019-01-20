const convict = require('convict');
// Define schema
var config = convict({
  env: {
    doc: "The application environment.",
    format: ["production", "development", "local"],
    default: "development",
    env: "NODE_ENV"
  },
  db: {
    host: {
      doc: "Database host name/IP",
      format: '*',
      default: 'localhost'
    },
    port: {
      doc: "Database port",
      format: 'port',
      default: '27017'
    },
    name: {
      doc: "Database name",
      format: String,
      default: 'movies'
    }
  },
  server: {
    port: {
      doc: "Server port",
      format: 'port',
      default: '8000'
    }
  }
});
// Load environment dependent configuration
const env = config.get('env');
config.loadFile(process.env.APP_CONFIG_DIR +'/'+ env + '.json');

// Perform validation
config.validate({allowed: 'strict'});
module.exports = config;
