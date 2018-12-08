create view grain_state as
select pk_grain, signal, r, g, b, x, y, last_date from
  grain as g
  inner join player on player.pk_player = g.fk_player
  inner join 
    (select gl.fk_grain, x,y,last_date from 
      (select fk_grain, max(created_at) as last_date from
        grain_location
        group by fk_grain
      )as gcl
      left join grain_location as gl
      on gcl.fk_grain = gl.fk_grain and gcl.last_date = gl.created_at
    )as cgl
  on pk_grain = cgl.fk_grain;


--create or replace function nthGrain(xC integer, yC integer, n integer) returns timestamp as $nthDate$
--declare nthDate