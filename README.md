Graina is an communal art project / difficult to use, weird chat webapp built using PosgreSQL, Express, React, and Node. It was inspired by Numberphile's Sandpiles video: https://youtu.be/1MtEUErz7Gg 

install nvm via github instruction
nvm install 11.2.0

npm install

npm install pg pg-h

set up a database
create the database
add values to config.json.example and rename config.json for db:migrate to work
node_modules/.bin/sequelize db:migrate
run scripts from dbSetup.sql to create views/functions (on the created database)
confirm with 'select * from current_settings;' in psql -> should provide base settings

add values to .env (rename example.env)
change apiURL variable in App.js (if needed)
get credentials from Google's developer console for login with google component

for dev mode need the server.key and server.crt to have https on localhost
for production use letsencrypt and certbot

should npm start should work at this point (untested on clean build)
