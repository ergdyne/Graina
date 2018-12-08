export default (sequelize, DataTypes) => {
  const Move = sequelize.define('Move', {
    pkMove:{
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    fkUser: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    x: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    y: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    //here to allow read
    createdAt: {
      allowNull: true,
      type: DataTypes.DATE
    }
  }, {freezeTableName: true,timestamps: false})
  Move.associate = function(models) {
    // associations can be defined here
  }
  return Move;
}