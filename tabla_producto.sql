use proyecto_final
go

if exists (Select 1 from sysobjects where name = 'producto')
drop table producto
go

create table producto
(
pr_id int,
pr_producto varchar(25),
pr_descripcion varchar(255),
pr_cantidad int,
pr_monto money,
pr_imagen varchar(255)
)
go
