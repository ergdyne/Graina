Graina is an communal art project / difficult to use, weird chat webapp built using PosgreSQL, Express, React, and Node. It was inspired by Numberphile's Sandpiles video: https://youtu.be/1MtEUErz7Gg

Live version running at https://jimsdumb.com

Code on live version is slightly off from code in repo due to last minute changes to get things running (quickly). Best practices not in place for same reasons.

Roughly how to get code running:

install postgres and basic setup (see offical postgres docs)

install nvm via github instruction
-nvm install 11.2.0 to install node version that runs code

npm install

npm install pg pg-h

set up a database (postgres docs)
-create the database
-add values to config.json.example and rename config.json for db:migrate to work
-run node_modules/.bin/sequelize db:migrate
-run scripts from dbSetup.sql to create views/functions (on the created database in psql)
-confirm with 'select * from current_settings;' in psql -> should provide base settings

add values to .env (rename example.env)
-get credentials from Google's developer console for login with google component

change apiURL variable in App.js (if needed)

for dev mode need a server.key and server.crt (main directory) to have https on localhost
for production use letsencrypt and certbot

should npm start should work at this point
