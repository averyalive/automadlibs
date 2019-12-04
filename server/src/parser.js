var db;

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
}

module.exports = init, parse;