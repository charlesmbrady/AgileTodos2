const db = require('../models');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
require('dotenv').config();
const cookieParser = require('cookie-parser'); // for the auth token
const moment = require('moment');

// Defining methods for the usersController
module.exports = {
  register: function(req, res) {
    const {
      firstName,
      lastName,
      email,
      password,
      passwordConfirmation
    } = req.body;
    db.User.create({
      firstName,
      lastName,
      email,
      password,
      passwordConfirmation
    })
      .then(result => {
        res.json(result);
      })
      .catch(err => {
        res.json(err);
        console.log('ERROR: ' + err.errors[0].message);
      });
  },
  authenticate: function(req, res) {
    const { password } = req.body;
    db.User.find({ where: { id: req.body.id } }).then(userMatch => {
      //check username
      if (!userMatch) {
        res.status(401).json({ message: 'Error: Invalid username' });
      }

      //check password
      else if (!bcrypt.compareSync(password, userMatch.password)) {
        res.status(401).json({ message: 'Error: Incorrect password' });
      } else {
        const payload = {
          email: userMatch.email,
          firstName: userMatch.firstName,
          lastName: userMatch.lastName,
          id: userMatch.id
        };
        const signOptions = {
          expiresIn: '2h'
        };
        const token = jwt.sign(payload, 'secret', signOptions);
        res.cookie('token', token, { httpOnly: true }).sendStatus(200);
      }
    });
  },
  checkToken: function(req, res) {
    const decoded = jwt.decode(req.cookies.token);
    const user = {
      firstName: decoded.firstName,
      lastName: decoded.lastName,
      email: decoded.email,
      id: decoded.id
    };
    res.status(200).send(user);
  },
  getUser: function(req, res) {
    db.find({
      where: {
        id: req.params.id
      }
    }).then((user, err) => {
      if (err) {
        res.status(500).send(err);
      }
      res.status(200).send(user);
    });
  },
  getUsers: function(req, res) {
    db.User.findAll({})
      .then(data => {
        res.json(data);
      })
      .catch(err => {
        res.json(err);
      });
  },
  logout: function(req, res) {
    res.clearCookie('token');
    res.send('cookie cleared');
  },
  update: function(req, res) {
    db.User.update(user, {
      where: {
        id: req.params.id
      }
    });
  },
  delete: async function(req, res) {
    await db.User.destroy({
      where: {
        id: req.params.id
      }
    });
    res.status(200).send({ message: 'Successfully deleted the user.' });
  }
};
