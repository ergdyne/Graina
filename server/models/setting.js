export default (sequelize, DataTypes) => {
  const Setting = sequelize.define('setting', {
    pk_setting:{
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    fk_setting_version :{
      allowNull: false,
      type: DataTypes.INTEGER
    },
    name: {
      allowNull: false,
      type: DataTypes.STRING
    },
    quantity:{
      allowNull: false,
      type: DataTypes.FLOAT
    },
    created_at: {
      allowNull: true,
      type: DataTypes.DATE
    }
  }, {freezeTableName: true,timestamps: false})
  return Setting
}