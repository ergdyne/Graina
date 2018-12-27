export default (sequelize, DataTypes) => {
  const SettingVersion = sequelize.define('setting_version', {
    pk_setting_version:{
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    created_at: {
      allowNull: true,
      type: DataTypes.DATE
    }
  }, {freezeTableName: true,timestamps: false})
  return SettingVersion
}