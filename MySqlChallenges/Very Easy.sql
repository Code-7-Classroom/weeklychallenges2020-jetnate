CREATE DATABASE MysqlChallenges;
USE MysqlChallenges;
CREATE TABLE cars (
	id INT AUTO_INCREMENT PRIMARY KEY,
    make VARCHAR(99), 
    model VARCHAR(99), 
    year YEAR
);
INSERT INTO cars (make, model, year)
VALUES ('Lamborghini', 'Gallardo', 2020), ('Mercedes', 'Beinz', 2019), ('Nissan', 'Altima', 1995), ('Ford', 'Focus', 2015), ('Hyundai', 'Sonata', 2019);
DROP TABLE cars;
#Easy
CREATE TABLE books (
id INT AUTO_INCREMENT PRIMARY KEY,
title VARCHAR (300),
PublishDate year,
authorfirst VARCHAR(300),
authorlast VARCHAR(300)
);
INSERT INTO books (title, publishdate, authorfirst, authorlast)
VALUES ('Goosebumps', 1994, 'RL', 'Stine'), ('Facing Mt. Kenya', 1938, 'Jomo', 'Kenyatta'), ('How to win Friends and Influence People', 1936, 'Dale ', 'Carnegie'), ('Matagari', 1945, 'Ngugi', 'Wathiongo'), ('Long Walk to Freedom', 1965, 'Nelson', 'Mandela');
DROP TABLE books;
#Medium
CREATE TABLE Movies (
	id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255), 
    releasedate year, 
    rating VARCHAR(255)
);
INSERT INTO movies (title, releasedate, rating)
VALUES ('Frozen', '2013', 'G'), ('Lionking', 1994, 'G'), ('American Gangster', 2013, 'R'), ('SpaceJam', 1993, 'G'), ('Major Payne', 1990, 'G'), ('Avatar', 2010, 'PG'), ('Hereditary', 2017, 'R'), ('Step Brothers', 2010, 'R'), ('Goodfellas', 1985, 'R'), ('Wall Street', 2013, 'PG-13');
SELECT * FROM movies 
WHERE title LIKE '%s%' ORDER BY releasedate ASC;
DROP TABLE movies;

#Hard
CREATE TABLE movies (
	id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255), 
    releasedate year, 
    rating VARCHAR(255),
    directorfirst VARCHAR(255), 
    directorlast VARCHAR(255)
);
INSERT INTO movies (title, releasedate, rating)
VALUES ('Frozen', '2013', 'G','Chris','Buck'), ('Lionking', 1994, 'G','John','Favreau'), ('American Gangster', 2013, 'Ridley','Scott'), ('SpaceJam', 1993, 'G','Joe','Pytka'), ('Major Payne', 1990, 'G','Nick','Castle'), ('Avatar', 2010, 'PG','James','Cameron'), ('Hereditary', 2017, 'R','Ari','Shaster'), ('Step Brothers', 2010, 'R','Jon','Gooden'), ('Goodfellas', 1985, 'R','Martin','Scorcesie'), ('Wall Street', 2013, 'PG-13','Martin','Scorcesie');
SELECT * FROM movies ORDER by fullname;

DELETE FROM movies WHERE REGEXP_LIKE(director_last, '[r-z]$');

SELECT * FROM movies LIMIT 3;
DROP TABLE movies;

#Very Hard


CREATE TABLE cars (
	id INT AUTO_INCREMENT PRIMARY KEY,
    make VARCHAR(99), 
    model VARCHAR(99), 
    year YEAR
);

INSERT INTO cars (make, model, year)
VALUES ('Lamborghini', 'Gallardo', 2020), ('Mercedes', 'Beinz', 2019), ('Nissan', 'Altima', 1995);
ALTER TABLE cars ADD COLUMN prices INT;
ALTER TABLE cars ADD COLUMN colors VARCHAR(255);
UPDATE cars SET prices=250000,  colors='Red, Blue, Yellow' WHERE make = 'Lamborghini';
UPDATE cars SET prices=50000,  colors='Black, Grey, Green' WHERE make = 'Mercedes';
UPDATE cars SET prices=79000,  colors='Blue,Black, Orange' WHERE make = 'Nissan';
ALTER TABLE cars ADD COLUMN makemodel VARCHAR(70);
UPDATE cars SET makemodel = CONCAT(make, ' ', model);
SELECT make, COUNT(1) FROM cars GROUP BY make;
DROP TABLE cars;

#Utility
DROP TABLE cars;
DESCRIBE movies;
SELECT * FROM movies;

