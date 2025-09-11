drop database if exists PeTAG;
create database PeTAG;
use PeTAG;

create table Usuario(
	userID INT AUTO_INCREMENT primary key,
	email varchar(40),
	senha varchar(40)
);

create table Coleira(
	idColeira INT AUTO_INCREMENT primary key,
	nomeColeira varchar(40),
	longitude float(20),
	latitude float(20)
);

create table HistoricoCoordenadas (
idHistorico INT AUTO_INCREMENT PRIMARY KEY,
idColeira INT,
latitude FLOAT(20),
longitude FLOAT(20),
timestamp DATETIME DEFAULT CURRENT_TIMESTAMP,
FOREIGN KEY (idColeira) REFERENCES Coleira(idColeira)
);

INSERT INTO Usuario (userID, email, senha) 
VALUES 
(5, 'joao@gmail.com', 'senha123');

INSERT INTO Coleira	 (idColeira,nomeColeira, latitude, longitude) 
VALUES 
(1,'Rex', 0, 0);

update Coleira set latitude = -22.8880, longitude = -46.4136 where idColeira = 1;
update Coleira set latitude = 48.85286423416817 , longitude = 2.370712607481553 where idColeira = 1;
update Coleira set latitude = 0 , longitude = 0 where idColeira = 1;
COMMIT;


select * from Usuario;
select * from Coleira;
select * from HistoricoCoordenadas	;