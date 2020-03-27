const bcrypt = require('bcrypt');
// const { sequelize, DataTypes } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  const Todo = sequelize.define(
    'Todo',
    {
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
    },
    {
      timestamps: true,
      hooks: {
        beforeValidate: function(user) {
          if (user.changed('password')) {
            return bcrypt.hash(user.password, 10).then(password => {
              user.password = password;
            });
          }
        }
      }
    }
  );

  return Todo;
};
