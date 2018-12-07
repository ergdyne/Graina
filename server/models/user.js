export default (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    pkUser:{
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER
    },
    r: {
      type: DataTypes.SMALLINT,
      allowNull: false,
    },
    g: {
      type: DataTypes.SMALLINT,
      allowNull: false,
    },
    b: {
      type: DataTypes.SMALLINT,
      allowNull: false,
    },
  }, {})
  User.associate = function(models) {
    // associations can be defined here
  }
  return User;
}