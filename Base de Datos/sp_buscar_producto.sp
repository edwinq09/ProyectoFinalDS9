use proyecto_final
go
if exists
          (
             Select 1
               from sysobjects
              where name = 'sp_buscar_producto'
          )
    drop procedure sp_buscar_producto
go
create procedure sp_buscar_producto
 (
  @i_operacion      char ( 2 ),
  @i_trn            int = null,
  @i_pr_id          int = null,
  @i_pr_producto    varchar ( 25 ) = null,
  @i_pr_descripcion varchar ( 255 ) = null,
  @i_pr_cantidad    int = null,
  @i_pr_monto       money = null,
  @i_pr_imagen      varchar ( 255 ) = null
 )
as
  if @i_operacion = 'Q'
     begin
       Select 'NOOMBRE_PRODUCTO' = pr_producto,
              'DESCRIPCION'      = pr_descripcion,
              'RUTA_IMAGEN'      = pr_imagen
         from producto
  end

  if @i_operacion = 'QI'
     begin
       Select 'NOOMBRE_PRODUCTO' = pr_producto,
              'DESCRIPCION'      = pr_descripcion,
              'CANTIDAD'         = pr_cantidad,
              'MONTO'            = pr_monto,
              'RUTA_IMAGEN'      = pr_imagen
         from producto
        where pr_id = @i_pr_id
  end

  if @i_operacion = 'I'
     begin
       insert into producto
       (
         pr_id,
         pr_producto,
         pr_descripcion,
         pr_cantidad,
         pr_monto,
         pr_imagen
       )
            values
       (
         @i_pr_id,
         @i_pr_producto,
         @i_pr_descripcion,
         @i_pr_cantidad,
         @i_pr_monto,
         @i_pr_imagen
       )
  end

  return 0
go
