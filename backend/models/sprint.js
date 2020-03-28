module.exports = (sequelize, DataTypes) => {
  const Sprint = sequelize.define('Sprint', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      trim: true
    },
    startDate: {
      type: DataTypes.DATE
    },
    endDate: {
      type: DataTypes.DATE
    },
    status: {
      type: DataTypes.STRING
    }
  });

  // Sprint.belongsTo(User);
  Sprint.associate = models => {
    Sprint.hasMany(models.Todo, {});
    Sprint.belongsTo(models.User, {
      foreignKey: {
        allowNull: false
      }
    });
  };

  // Sprint.associate = models => {

  // };

  return Sprint;
};
