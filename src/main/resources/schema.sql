CREATE TABLE IF NOT EXISTS Galleries(
    id INT PRIMARY KEY,
    name VARCHAR(255),
    address VARCHAR(255),
    image_Url VARCHAR(255),
    founder VARCHAR(255),
    location VARCHAR(50),
    url VARCHAR(255)
);

CREATE TABLE IF NOT EXISTS Cafes(
    id INT PRIMARY KEY,
    name VARCHAR(255),
    address VARCHAR(255),
    beverage VARCHAR(255),
    image_Url VARCHAR(255),
    location VARCHAR(50),
    url VARCHAR(255)
);

CREATE TABLE IF NOT EXISTS JuiceBars(
    id INT PRIMARY KEY,
    name VARCHAR(255),
    address VARCHAR(255),
    beverage VARCHAR(255),
    image_Url VARCHAR(255),
    location VARCHAR(50),
    url VARCHAR(255)
);

CREATE TABLE IF NOT EXISTS Bars(
    id INT PRIMARY KEY,
    name VARCHAR(255),
    address VARCHAR(255),
    location VARCHAR(50),
    beverage VARCHAR(255),
    image_Url VARCHAR(255),
    url VARCHAR(255)
);

CREATE TABLE IF NOT EXISTS Restaurants(
    id INT PRIMARY KEY,
    name VARCHAR(255),
    address VARCHAR(255),
    image_Url VARCHAR(255),
    cuisine VARCHAR(255),
    category VARCHAR(255),
    location VARCHAR(50),
    url VARCHAR(255),
    per_person VARCHAR(255)
);

CREATE TABLE IF NOT EXISTS Therapists(
    id INT PRIMARY KEY,
    name VARCHAR(255),
    certified VARCHAR(255),
    image_Url VARCHAR(255),
    bio VARCHAR(65000),
    location VARCHAR(255),
    url VARCHAR(255)
);

CREATE TABLE IF NOT EXISTS Lawyers(
    id INT PRIMARY KEY,
    name VARCHAR(255),
    image_Url VARCHAR(255),
    practice VARCHAR (255),
    location VARCHAR(255),
    url VARCHAR(255)
);