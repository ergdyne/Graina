export default(sequelize, DataTypes) =>{
  //Read Only
  const MoveGrain = sequelize.define('move_grain',{
    pk_grain:{
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    x:{
      type: DataTypes.INTEGER
    },
    y:{
      type: DataTypes.INTEGER
    }
  }, {freezeTableName: true,timestamps: false})
  return MoveGrain
}