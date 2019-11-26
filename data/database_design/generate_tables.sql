-- see ER diagram at https://drive.google.com/file/d/1oEBwBVsq94VZssCmFlKziv3_6xqUpn0c/view?usp=sharing

-- this table should also probably be indexed
CREATE OR REPLACE TABLE words (
    id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    spelling VARCHAR(100),
    type VARCHAR(100)
);

CREATE OR REPLACE TABLE madlibs (
    id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    contents VARCHAR,
    -- reference the words it uses?
    -- reference the template it used?
);

CREATE OR REPLACE TABLE templates (
    id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    contents BLOB
    -- reference the madlibs generated from this template?
);

-- insert dictionary from dictionary.xml,
-- assuming mysql client is being run from this file's directory.
LOAD XML LOCAL INFILE '../dictionary/full/dictionary.xml'
INTO TABLE automadlibs.words
ROWS IDENTIFIED BY '<word>';