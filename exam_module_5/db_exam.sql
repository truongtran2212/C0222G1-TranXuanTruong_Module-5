drop DATABASE exam_module5;

create database if not EXISTS exam_module5;
use exam_module5;
CREATE TABLE home (
id int AUTO_INCREMENT PRIMARY KEY,
`name` VARCHAR(45)
);

create table ticket (
id int auto_increment primary  key,
  cost int,
  start varchar(45),
  end varchar(45),
  dayStart date,
  time varchar(45),
  id_home int,
  foreign key (id_home) REFERENCES home (id),
  quantity int
);

INSERT INTO home (`name`) VALUES ('Phương Trang'),('Trung Nguyên'),('Trung Tín');

insert into ticket VALUES 
(1,100000, 'Đà Nẵng','Huế','2022-07-28','20:00',1,10),
(2,450000, 'Đà Nẵng','Hải Phòng','2022-07-20','22:00',2,10),
(3,50000, 'Đà Nẵng','Sài Gòn','2022-07-25','17:00',3,10),
(4,20000, 'Đà Nẵng','Hà Nội','2022-07-10','10:00',2,10);
