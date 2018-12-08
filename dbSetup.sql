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
      inner join grain_location as gl
      on gcl.fk_grain = gl.fk_grain and gcl.last_date = gl.created_at
    )as cgl
  on pk_grain = cgl.fk_grain;

create view player_location as
select p.fk_player, p.x, p.y, lp.last_date from
  (select fk_player, max(created_at) as last_date from
    play
    group by fk_player) as lp
  inner join play as p 
  on lp.last_date = p.created_at and lp.fk_player = p.fk_player;

create view player_data as
select pk_player, r, g, b, x, y, last_date from
player
inner join player_location
on pk_player = fk_player;

create or replace function nth_grain(xC integer, yC integer, n integer) returns timestamp as $nthDate$
declare nthDate timestamp;
begin
  select last_date into nthDate from
  grain_state as gs
  where gs.x=xC and gs.y=yC
  order by last_date
  limit 1
  offset n-1;
return nthDate;
end;
$nthDate$ language plpgsql;

create view oldest_fifth_grain as
  select x,y from 
    (select x, y, count(*) as n from 
      grain_state group by x, y
    ) as g 
  where n > 4
  order by nth_grain(x,y,5)
  limit 1;