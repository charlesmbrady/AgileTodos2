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
    // const { email, password } = req.body;
    db.User.findAll({
      where: {
        email: req.body.email
      }
    }).then(userMatch => {
      //check username
      if (!userMatch[0]) {
        res.status(401).json({ message: 'Error: Invalid username' });
      }

      //check password
      else if (!bcrypt.compareSync(req.body.password, userMatch[0].password)) {
        res.status(401).json({ message: 'Error: Incorrect password' });
      } else {
        const payload = {
          email: userMatch[0].email,
          firstName: userMatch[0].firstName,
          lastName: userMatch[0].lastName,
          id: userMatch[0].id
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
    db.User.findAll({
      where: {
        id: req.params.id
      }
    }).then((user, err) => {
      if (err) {
        res.status(500).send(err);
      }
      res.json(user);
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
    db.User.update(req.body, {
      where: {
        id: req.params.id
      }
    })
      .then(data => {
        if (data) {
          res.json(data);
        }
      })
      .catch(err => res.json(err));
  },
  delete: async function(req, res) {
    db.User.destroy({
      where: {
        id: req.params.id
      }
    }).then(destroyed => {
      res.sendStatus(200);
    });
  }
};
