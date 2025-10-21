CREATE DATABASE casa_cultural_db;
USE casa_cultural_db;

CREATE TABLE filme (
  id BIGINT AUTO_INCREMENT PRIMARY KEY,
  titulo VARCHAR(100),
  sinopse TEXT,
  genero VARCHAR(50),
  ano_lancamento INT
);

CREATE TABLE analise (
  id BIGINT AUTO_INCREMENT PRIMARY KEY,
  texto TEXT,
  nota INT,
  filme_id BIGINT,
  FOREIGN KEY (filme_id) REFERENCES filme(id)
);



