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
    }
  });

  return Todo;
};
