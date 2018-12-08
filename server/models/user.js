export default (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    pkUser:{
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
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
    //here to allow read
    createdAt: {
      allowNull: true,
      type: DataTypes.DATE
    }
  }, {freezeTableName: true,timestamps: false})
  User.associate = function(models) {
    // associations can be defined here
  }
  return User;
}