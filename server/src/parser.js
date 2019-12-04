var db;

function init(db) {
    this.db = db;
}

function parse (s) {
    s = s.replace(/$noun/, getWord('noun'));
    s = s.replace(/$verb/, getWord('verb'));
    s = s.replace(/$adjective/, getWord('adjective'));
    s = s.replace(/$adverb/, getWord('adverb'));
}

function getWord(type) {
    this.db.query(`SELECT * FROM ${type}`,
    (err, data) => {
        if (err) {
            console.log(err);
        } else {
            return data;
        }
    });
}

module.exports = init, parse;