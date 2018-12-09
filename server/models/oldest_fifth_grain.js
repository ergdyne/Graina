export default(sequelize, DataTypes) =>{
  //Read Only
  const OldestFifthGrain = sequelize.define('oldest_fifth_grain',{
    x:{
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    y:{
      type: DataTypes.INTEGER
    }
  }, {freezeTableName: true,timestamps: false})
  return OldestFifthGrain
}