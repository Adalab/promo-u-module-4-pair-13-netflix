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




