--Day 1.

CREATE DATABASE netflix;

USE netflix;

CREATE TABLE movies (
idMovies int primary key auto_increment NOT NULL,
title varchar(45) not null,
genre varchar(45) not null,
image varchar(1000) not null,
category varchar(45) not null, 
year int
);

CREATE TABLE users (
idUser int primary key auto_increment NOT NULL,
user varchar(45) not null,
password varchar(45) not null,
name varchar(45) not null,
email varchar(45) not null,
plan_details varchar(45) not null
);

CREATE TABLE actors (
idActor int primary key auto_increment NOT NULL,
name varchar(45) not null,
lastname varchar(45) not null,
country varchar(45) not null,
birthday date
);

INSERT INTO movies(
title, genre, image, category, year
) VALUES ("Pulp Fiction", "Crimen", "https://pics.filmaffinity.com/pulp_fiction-210382116-large.jpg", "Top 10", 1994);



--DAY 2.

USE netflix;
SELECT * from actors;
INSERT INTO movies (title,genre,image, category,year)
VALUES ("La vita è bella","Comedia", "https://pics.filmaffinity.com/la_vita_e_bella-646167341-mmed.jpg","Top 10", 1996), 
("Forrest Gump","Comedia", "https://pics.filmaffinity.com/forrest_gump-212765827-mmed.jpg","Top 10",1994);

INSERT INTO users (user, password, name, email,plan_details)
VALUES ("laura_dev", "laura","Laura", "laura@gmail.com","Standard"), 
("maria_dev","maria", "Maria","maria@gmail.com", "Standard"),
("ester_dev", "ester", "Ester","ester@gmail.com", "Standard");
INSERT INTO users (user, password, name, email,plan_details)
VALUES ("amparo_dev", "amparo","Amparo", "amparo@gmail.com","Standard");
INSERT INTO actors (name,lastname,country,birthday)
VALUES ("Tom", "Hanks", "Estados Unidos","1956-07-09"),
("Roberto", "Benigni", "Italia","1952-10-27"),
("John", "Travolta", "Estados Unidos", "1954-02-18");
DELETE FROM actors ;

SELECT title,genre from movies WHERE year>1990;
SELECT * FROM movies WHERE category = "Top 10";
UPDATE movies SET year = 1997 WHERE title = "La vita è bella";
SELECT name FROM actors WHERE birthday BETWEEN "1950-01-01" AND "1960-01-01";
SELECT name, lastname FROM actors WHERE country = "Estados Unidos";
SELECT * FROM users WHERE name LIKE "m%";
DELETE FROM users WHERE name LIKE "M%";
ALTER TABLE actors ADD image VARCHAR(100);
ALTER TABLE actors DROP COLUMN image;

-- DAY 3

USE netflix;

CREATE TABLE rel_movies_users(
id INT auto_increment primary KEY,
fk_users INT, 
fk_movies INT, 
FOREIGN KEY(fk_users) REFERENCES users(idUser),
FOREIGN KEY(fk_movies) REFERENCES movies(idMovies)
);

CREATE TABLE rel_movies_actors(
id INT auto_increment primary KEY,
fk_actors INT, 
fk_movies INT, 
FOREIGN KEY(fk_actors) REFERENCES actors(idActor),
FOREIGN KEY(fk_movies) REFERENCES movies(idMovies)
);

INSERT INTO rel_movies_users (fk_users, fk_movies)
VALUES (1, 1), (1, 2), (3, 2);

INSERT INTO rel_movies_actors (fk_actors, fk_movies)
VALUES (9,1), (7,3), (8,2);

ALTER TABLE rel_movies_users ADD score float;

UPDATE rel_movies_users
SET score = 5
WHERE id=4;

UPDATE rel_movies_users
SET score = 8
WHERE id=5;

UPDATE rel_movies_users
SET score = 2.7
WHERE id=6;