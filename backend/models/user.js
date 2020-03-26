const bcrypt = require('bcrypt');
// const { sequelize, DataTypes } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    'User',
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      firstName: {
        type: DataTypes.STRING,
        allowNull: false,
        len: [2, 20],
        trim: true
      },
      lastName: {
        type: DataTypes.STRING,
        allowNull: false,
        len: [1, 30],
        trim: true
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: {
          args: true,
          msg: 'That email is already in use.'
        },
        len: [2, 30],
        trim: true
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
        len: [7, 30],
        trim: true
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

  // This will check if an unhashed password can be compared to the hashed password stored in our database
  User.prototype.validPassword = function(password) {
    return bcrypt.compareSync(password, this.password);
  };

  // Compares passwords
  User.prototype.comparePasswords = function(password, callback) {
    bcrypt.compare(password, this.password, (error, isMatch) => {
      if (error) {
        return callback(error);
      }
      return callback(null, isMatch);
    });
  };

  User.prototype.toJSON = function() {
    const values = Object.assign({}, this.get());
    delete values.password;
    return values;
  };

  return User;
};
