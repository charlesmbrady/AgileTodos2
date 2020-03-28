module.exports = (sequelize, DataTypes) => {
  const Todo = sequelize.define('Todo', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    subject: {
      type: DataTypes.STRING,
      allowNull: false,
      trim: true
    },
    description: {
      type: DataTypes.STRING,
      trim: true
    },
    points: {
      type: DataTypes.INTEGER
    },
    status: {
      type: DataTypes.STRING
    },
    type: {
      type: DataTypes.STRING
    },
    priority: {
      type: DataTypes.STRING
    }
  });

  // Todo.belongsTo(Sprint);
  // Todo.associate = models => {

  // };

  Todo.associate = models => {
    Todo.belongsTo(models.User, {
      foreignKey: {
        allowNull: false
      }
    });
    Todo.belongsTo(models.Sprint, {
      foreignKey: {
        allowNull: false
      }
    });
  };

  return Todo;
};
