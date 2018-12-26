'use strict';
module.exports = (sequelize, DataTypes) => {
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
  }, {freezeTableName: true,timestamps: false});
  SettingVersion.associate = function(models) {
    // associations can be defined here
  };
  return SettingVersion;
};