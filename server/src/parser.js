const {promisify} = require('util');

<<<<<<< HEAD
function init(db) {
    this.db = db;
}

function parse (s) {
    s = s.replace(/$noun/, getWord('nouns'));
    s = s.replace(/$verb/, getWord('verbs'));
    s = s.replace(/$adjective/, getWord('adjectives'));
    s = s.replace(/$adverb/, getWord('adverbs'));
}

function getWord(type) {
    this.db.query(`SELECT * FROM ${type} LIMIT 1`,
    (err, data) => {
        if (err) {
            console.log(err);
        } else {
            return data;
        }
    });
=======
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
                var word = data[0]['spelling'].toLowerCase();
                s = s.replace(`$${type}`, word);
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
>>>>>>> 582b4dce368a9eed198a8d60d0102d61265fa1bf
}
module.exports = Parser;