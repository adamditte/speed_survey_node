var pgp = require('pg-promise')();

module.exports = {
    getClient: function () {
        if (!this._client) {
            var cn = {
                host: process.env.db_host,
                port: process.env.db_port,
                database: process.env.db_dbname,
                user: process.env.db_user,
                password: process.env.db_password
            };
            console.log(cn);
            this._client = pgp(cn);
        }
        return this._client;
    }

};