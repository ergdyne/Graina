export default (sequelize, DataTypes) => {
  const Player = sequelize.define('player', {
    pk_player:{
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
    created_at: {
      allowNull: true,
      type: DataTypes.DATE
    }
  }, {freezeTableName: true,timestamps: false})
  Player.associate = function(models) {
    // associations can be defined here
  }
  return Player;
}