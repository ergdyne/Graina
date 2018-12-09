export default(sequelize, DataTypes) =>{
  //Read Only
  const PlayerData = sequelize.define('player_data',{
    pk_player:{
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    r: {
      type: DataTypes.SMALLINT
    },
    g: {
      type: DataTypes.SMALLINT
    },
    b: {
      type: DataTypes.SMALLINT
    },
    x:{
      type: DataTypes.INTEGER
    },
    y:{
      type: DataTypes.INTEGER
    },
    last_date: {
      type: DataTypes.DATE
    }
  }, {freezeTableName: true,timestamps: false})
  return PlayerData
}