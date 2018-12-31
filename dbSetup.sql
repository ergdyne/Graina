create view grain_state as
select pk_grain, signal, r, g, b, x, y, last_date, g.created_at from
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

create view fifth_grain as
  select x,y from 
    (select x, y, count(*) as n from 
      grain_state group by x, y
    ) as g 
  where n > 4;

create view move_grain as
  select pk_grain, x, y from grain_state
  where (x,y) in (select x,y from fifth_grain)
  order by x,y,last_date;

create or replace function world_map (d integer)
  returns table(
    x integer,
    y integer,
    r smallint,
    g smallint,
    b smallint
  ) as $$
  declare
    tx integer;
    ty integer;
    n integer;
  begin
    select 
      0-lx,
      0-ly,
      ceiling((greatest(hx-lx,hy-ly)::decimal/d))
    into tx,ty,n
    from 
      (select max(gs.x) as hx, max(gs.y) as hy, min(gs.x) as lx, min(gs.y) as ly from grain_state as gs) as gsm;

    return query select
      (gsl.x+tx)/n,(gsl.y+ty)/n,avg(gsl.r)::smallint,avg(gsl.g)::smallint,avg(gsl.b)::smallint
    from grain_state as gsl
    group by (gsl.x+tx)/n,(gsl.y+ty)/n;
  end; $$ language 'plpgsql';

--in honor of Tesla
create view world_map_420 as select * from world_map(420);

insert into setting_version (created_at) values (current_timestamp);
insert into setting (fk_setting_version, "name", quantity) values 
(1, 'RED', 50),
(1, 'ORANGE', 50),
(1, 'YELLOW', 50),
(1, 'GREEN', 50),
(1, 'BLUE', 50),
(1, 'VIOLET', 50),
(1, 'COOL_DOWN', 60*60*1000),
(1, 'MAX_CLICKS', 300),
(1, 'GRID_SIZE_X', 5),
(1, 'GRID_SIZE_Y', 5),
(1, 'MOVE_COST', 1),
(1, 'GRAIN_COST', 1);


create view current_settings as
select "name", quantity from
setting 
where fk_setting_version = 
  (select max(pk_setting_version) from setting_version);

insert into player (r,g,b) values (0,255,255);
insert into grain (signal,fk_player) values ('I am the start of the game.',1);
insert into grain_location (fk_grain,x,y) values (1,0,0);
insert into grain (signal,fk_player) values ('I am at the start of the game.',1);
insert into grain_location (fk_grain,x,y) values (2,1,1);
insert into grain (signal,fk_player) values ('And I am the End.',1);
insert into grain_location (fk_grain,x,y) values (3,2,3);