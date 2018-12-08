export default (sequelize, DataTypes) => {
  const GrainLocation = sequelize.define('GrainLocation', {
    pkGrainLocation:{
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    fkGrain: {
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
  GrainLocation.associate = function(models) {
    // associations can be defined here
  }
  return GrainLocation;
}