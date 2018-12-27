export default (sequelize, DataTypes) => {
  const CurrentSetting = sequelize.define('current_settings', {
    name: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.STRING
    },
    quantity:{
      allowNull: false,
      type: DataTypes.FLOAT
    }
  }, {freezeTableName: true, timestamps: false})
  return CurrentSetting
}