drop database if exists React;
create database if not exists React;
use React;
create table if not exists usuario(usuario varchar(30) not null,pass varchar(16) not null,correo varchar(50) not null)
engine=InnoDB;

insert into usuario value("Samuel Cano","159875321","canosamuel87@gmail.com");
select * from usuario;
