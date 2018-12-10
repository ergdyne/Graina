export default (sequelize, DataTypes) =>{
  const GrainState = sequelize.define('grain_state', {
    pk_grain:{
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    signal: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    x: {
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
    },
    last_date: {
      type: DataTypes.DATE
    },
    created_at: {
      type: DataTypes.DATE
    }
  }, {freezeTableName: true,timestamps: false})
  return GrainState
}