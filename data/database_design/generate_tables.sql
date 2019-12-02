-- see ER diagram at https://drive.google.com/file/d/1oEBwBVsq94VZssCmFlKziv3_6xqUpn0c/view?usp=sharing

-- this table should also probably be indexed
CREATE TABLE words (
    id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    spelling VARCHAR(100),
    type VARCHAR(100)
);

-- create index on the column spelling 
CREATE INDEX ORDER ON automadlibs.words(spelling);

CREATE TABLE madlibs (
    id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    contents json
    -- reference the words it uses?
    -- reference the template it used?
);

CREATE TABLE templates (
    id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    contents BLOB
    -- reference the madlibs generated from this template?
);

-- insert dictionary from dictionary.xml,
-- assuming mysql client is being run from this file's directory.
LOAD XML LOCAL INFILE '../dictionary/full/dictionary.xml'
INTO TABLE automadlibs.words
ROWS IDENTIFIED BY '<word>';


--insert mabslibs from madlib-1.json
-- assuming mysql client is being run from this file's directory.
--LOAD DATA INFILE "../madlibs/madlib-1.json"
--INTO TABLE automadlibs.madlibs
--FIELDS TERMINATED BY '\0' ESCAPED BY ''
--LINES TERMINATED BY '\0';