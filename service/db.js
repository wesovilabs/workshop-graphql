const mongoose = require('mongoose');

const config = require('./../config.js');

const dbUrl = `mongodb://${config.get('db.host')}:${config.get('db.port')}/${config.get('db.name')}`;

mongoose.Promise = global.Promise;

module.exports = {
    connect,
    ObjectId: mongoose.Types.ObjectId
};

async function connect() {
    try {
        let ret = await mongoose.connect(dbUrl, {
            useNewUrlParser: true
        })
    } catch (e) {
        console.log(e)
    }
}
