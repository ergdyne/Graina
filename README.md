Simple display for Simple "Game."

install nvm via github instruction
nvm install 11.2.0

npm install

npm install pg pg-h

set up a database
create the database
add values to config.json.example and rename config.json for db:migrate to work
node_modules/.bin/sequelize db:migrate
run scripts from dbSetup.sql to create views/functions
confirm with 'select * from current_settings;' in psql -> should provide base settings
better to delete config data at this point

add values to .env (rename example.env) for dev mode or actual env for production
change apiURL variable in App.js (if needed)

for dev mode need the server.key and server.crt
for production use letsencrypt and certbot

should npm start should work at this point (untested on clean build)
