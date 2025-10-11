create database projeto_integrador_db;

use projeto_integrador_db;

create table usuario (
id INT AUTO_INCREMENT PRIMARY KEY,
login VARCHAR(200) NOT NULL,
senha VARCHAR(100) NOT NULL,
tipo VARCHAR(100) NOT NULL
);

create table musica (
id INT AUTO_INCREMENT PRIMARY KEY,
titulo VARCHAR(100) NOT NULL,
banda VARCHAR(100) NOT NULL,
tom VARCHAR(50) NOT NULL,
genero VARCHAR(100) NOT NULL,
semestre_iniciado VARCHAR(100) NOT NULL,
url VARCHAR(500) NOT NULL
);

INSERT INTO usuario (login, senha, tipo)
VALUES ("aluno@exemplo.com", "alunoexemplo", "aluno"),
       ("professor@exemplo.com", "professorexemplo", "professor");

INSERT INTO musica (titulo, banda, tom, genero, semestre_iniciado, url)
VALUES ("The Offering", "Sleep Token", "Eb", "Rock", "1° semestre de 2025", "https://open.spotify.com/intl-pt/track/0NFeRdBUSsnDqZy5dtZBf0?si=1e2cf1de7d9046e6"),
	   ("Scissors", "Jinjer", "A", "Rock", "1° semestre de 2025", "https://open.spotify.com/intl-pt/track/2ds0VNIq4cIkwVLcEeqscw?si=3313adb8e9a749c6");


