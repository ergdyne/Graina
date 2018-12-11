export default (sequelize, DataTypes)=>{
  const WorldMap = sequelize.define('world_map_420',{
    x: {
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    y: {
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
    }
  },{freezeTableName: true,timestamps: false})
  return WorldMap
}