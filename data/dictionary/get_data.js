var fs = require('fs');

var path = 'fragments/';
var resultPath = 'full/dictionary.xml';
var results = fs.createWriteStream(resultPath, {flags: 'a'});
var rowOpenTag = '\t<word>';
var rowCloseTag = '\n\t</word>\n';

fs.readdir(path, function(err, files) {
  results.write('<dictionary>\n');

  files.forEach(function (file, index) {
    var dictionaryFragment = JSON.parse(fs.readFileSync(path + file, 'utf8'));
    for (var p in dictionaryFragment) {
      var meanings = dictionaryFragment[p]['MEANINGS'];
      if (Object.keys(meanings).length > 0) {
        for (var m in meanings) {
          var row =
            rowOpenTag +
            '\n\t\t<spelling>' + p + '</spelling>' +
            '\n\t\t<type>' + meanings[m][0] + '</type>' +
            rowCloseTag;
          console.log(row);
          results.write(row);
        }
      }
    }
  });

  results.write('</dictionary>');
  results.end();
});