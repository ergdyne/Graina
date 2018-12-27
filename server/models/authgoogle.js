export default (sequelize, DataTypes) => {
  const AuthGoogle = sequelize.define('auth_google', {
    pk_auth_google:{
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    fk_player: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    google_id:{
      type: DataTypes.STRING,
      allowNull: false,
    },
    created_at: {
      allowNull: true,
      type: DataTypes.DATE
    }
  }, {freezeTableName: true,timestamps: false})
  return AuthGoogle
}