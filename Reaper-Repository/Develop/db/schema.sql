DROP DATABASE IF EXISTS reapers_db;
CREATE DATABASE reapers_db;

USE reapers_db;

CREATE TABLE battles (
    id INT PRIMARY KEY
    weapons TEXT NOT NULL
    trench_warfare TEXT NOT NULL
    chemical_weapons TEXT NOT NULL
    deaths INT NOT NULL

)
CREATE TABLE disease (
    id INT PRIMARY KEY
    spanish_flu TEXT NOT NULL
    trench_foot TEXT NOT NULL
    Typhoid TEXT NOT NULL
    deaths INT NOT NULL
)
CREATE TABLE lasting_effects (
    id INT PRIMARY KEY
    bolsheviks TEXT NOT NULL
    world_war_two TEXT NOT NULL
    league_of_nations TEXT NOT NULL
    deaths INT NOT NULL
)
