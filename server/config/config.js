function config(){
  if (process.env.NODE_ENV !== 'production') {
    require('dotenv').load();
  }
  
  return {
    username:process.env.GC_USERNAME,
    password:process.env.GC_PASSWORD,
    database:process.env.GC_DATA_BASE,
    host:process.env.GC_DB_HOST,
    port:process.env.GC_DB_PORT,
    dialect:process.env.GC_DB_DIALECT,
    operatorsAliases:false
  }
}

module.exports={config}