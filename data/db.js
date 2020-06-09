var Datastore = require('nedb'), db = new Datastore(
    { filename: './data/notes', autoload: true }
);

export default db;