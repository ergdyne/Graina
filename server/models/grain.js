export default (sequelize, DataTypes) => {
  const Grain = sequelize.define('grain', {
    pk_grain:{
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    signal: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    fk_player: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    //here to allow read
    created_at: {
      allowNull: true,
      type: DataTypes.DATE
    }
  }, {freezeTableName: true,timestamps: false})
  Grain.associate = function(models) {
    // associations can be defined here
  }
  return Grain
}