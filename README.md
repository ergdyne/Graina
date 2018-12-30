Simple display for Simple "Game."

install nvm via github instruction
nvm install 11.2.0

npm install

set up a database
add values to config.json.example and rename config.json for db:migrate to work
sequelize db:migrate
run scripts from dbSetup.sql to create views/functions
better to delete config data at this point

add values to .env (rename example.env) for dev mode or actual env for production
change apiURL variable in App.js

should npm start should work at this point (untested on clean build)
