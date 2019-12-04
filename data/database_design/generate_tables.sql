-- see ER diagram at https://drive.google.com/file/d/1oEBwBVsq94VZssCmFlKziv3_6xqUpn0c/view?usp=sharing

-- this table should also probably be indexed
CREATE TABLE IF NOT EXISTS words (
    id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    spelling VARCHAR(100),
    type VARCHAR(100)
);

-- create index on the column spelling 
 CREATE INDEX index1 ON automadlibs.words(spelling);

CREATE OR REPLACE TABLE madlibs (
    id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    contents TEXT,
    html TEXT
    -- reference the words it uses?
    -- reference the template it used?
);

CREATE OR REPLACE TABLE templates (
    id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    name VARCHAR(100),
    contents TEXT
    -- reference the madlibs generated from this template?
);

INSERT templates (name, contents) VALUES (
    'From A $adjective Steemit Poster',
    "source: https://steemit.com/steemit/@cashbandicoot/madlibs-steemit-edition-come-participate-in-the-first-ever-community-madlib-on-steemit-com\n\nThoughts From A $adjective Steemit Poster.\nAnother hour passes as I $verb and $verb my post.\n\n\"Do my $adjective eyes deceive me? Is that an upvote?\n\nAfter refreshing the page $adjective times, this was a $adjective sight.\n\n\"Wow!\" I say. \" $adjective Steem Dollars (SBD)! $verb you whales!\"\n\nI close my browser tab as I $verb about Steemit.\n\n\"I might not be an anarchist, but at least I\'ve got my posts!\"\n\nFeeling $adjective, I decide to take a break from Steemit, and head into the kitchen to make a cup of $noun.\n\n\"I can\'t believe it happened again! After all the $verb I did when writing my post...\"\n\nWhile $verb my $noun, I began to think.\n\n\"Where did I go $adjective ? I made sure to write about $noun, because that\'s totally $adjective right now. I don\'t really understand it, but everyone on Steemit seems to like $noun. Maybe that\'s why I\'ve been doing so $adjective!?\"\n\nConfused as usual, I decided to go back and $verb my post.\n\n\"What happened?! Just a second ago I had $adjective upvotes, and now I have $adjective?! This website is so $adjective!\"\n\nA few seconds passed before I realized what had happened.\n\n\"Ohhhh, that\'s what happened! It\'s all thanks to $adjective$adjective$noun!\""
);

DELIMITER //
CREATE FUNCTION randomWord (requestedType VARCHAR(10)) RETURNS INT
    BEGIN
        SET @numWords = (SELECT count(*) FROM words);
        SET @randomId = FLOOR(RAND() * (@numWords + 1)) + 0;
        -- there is a problem here; the word at specified id is not guaranteed to have correct type. This often returns null.
        RETURN (SELECT spelling FROM words
                WHERE id = @randomId
                AND type = requestedType
                LIMIT 1);
    END //
DELIMITER ;

-- insert dictionary from dictionary.xml,
-- assuming mysql client is being run from this file's directory.
-- LOAD XML LOCAL INFILE '../dictionary/full/dictionary.xml'
-- INTO TABLE automadlibs.words
-- ROWS IDENTIFIED BY '<word>';


--insert mabslibs from madlib-1.json
-- assuming mysql client is being run from this file's directory.
--LOAD DATA INFILE "../madlibs/madlib-1.json"
--INTO TABLE automadlibs.madlibs
--FIELDS TERMINATED BY '\0' ESCAPED BY ''
--LINES TERMINATED BY '\0';