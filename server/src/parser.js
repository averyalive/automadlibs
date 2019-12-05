const {promisify} = require('util');

class Parser {
    constructor(db) {
        this.db = db;
        this.query = promisify(this.db.query.bind((this.db)));
    }
    
    parse (s) {
        return this.replaceAllOfType(s, 'noun')
            .then(s => {
                return this.replaceAllOfType(s, 'verb');
            })
            .then(s => {
                return this.replaceAllOfType(s, 'adjective');
            })
            .then(s => {
                return this.replaceAllOfType(s, 'adverb');
            });
    }

    replaceAllOfType(s, type) {
        return this.query(`SELECT * FROM ${type}`)
            .then(data => {
                s = s.replace(`$${type}`, data[0]['spelling']);
                if (s.indexOf(`$${type}`) < 0) {
                    return s;
                } else {
                    return this.replaceAllOfType(s, type);
                }
            })
            .catch(err => console.log(err));
    }
    
    getWord(type) {
        return this.query(`SELECT * FROM ${type}`);
    }
}
module.exports = Parser;