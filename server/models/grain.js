export default (sequelize, DataTypes) => {
  const Grain = sequelize.define('Grain', {
    pkGrain:{
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    signal: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    fkUser: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    //here to allow read
    createdAt: {
      allowNull: true,
      type: DataTypes.DATE
    }
  }, {freezeTableName: true,timestamps: false})
  Grain.associate = function(models) {
    // associations can be defined here
  }
  return Grain;
}