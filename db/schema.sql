DROP DATABASE IF EXISTS `burgers_db`;
CREATE DATABASE `burgers_db`;
USE `burgers_db`;

CREATE TABLE `burgers`(
`id` INTEGER primary key AUTO_INCREMENT NOT NULL,
`burger_name` VARCHAR(255) NOT NULL,
`devoured` BOOLEAN NOT NULL DEFAULT false

);

-- Jaws Schema
use kh8l00e6sksdkkqx;


CREATE TABLE `burgers`(
`id` INTEGER AUTO_INCREMENT NOT NULL,
`burger_name` VARCHAR(255) NOT NULL,
`devoured` BOOLEAN NOT NULL DEFAULT false,
`createdAt` timestamp not null,
PRIMARY KEY (ID)
);

