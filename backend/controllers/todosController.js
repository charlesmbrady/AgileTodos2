const db = require('../models');
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser'); // for the auth token

// Defining methods for the usersController
module.exports = {
  create: function(req, res) {
    db.Todo.create(req.body)
      .then(result => {
        res.json(result);
      })
      .catch(err => {
        res.json(err);
        console.log('ERROR: ' + err.errors[0].message);
      });
  },
  getById: function(req, res) {
    const decoded = jwt.decode(req.cookies.token);
    const user = { id: decoded.id };

    db.Todo.findAll({
      where: {
        user_id: user.id
      }
    }).then((dbTodos, err) => {
      if (err) {
        res.status(500).send(err);
      }
      const dbTodo = dbTodos.filter(todo => todo.id === req.params.id);
      res.json(dbTodo);
    });
  },
  getAllForUser: function(req, res) {
    const decoded = jwt.decode(req.cookies.token);
    const user = { id: decoded.id };

    db.Todo.findAll({
      where: {
        user_id: user.id
      }
    }).then((dbTodos, err) => {
      if (err) {
        res.status(500).send(err);
      }
      res.json(dbTodos);
    });
  },
  updateById: function(req, res) {
    const decoded = jwt.decode(req.cookies.token);
    const user = { id: decoded.id };

    db.Todo.findAll({
      where: {
        user_id: user.id
      }
    }).then((dbTodos, err) => {
      if (err) {
        res.status(500).send(err);
      }
      const dbTodo = dbTodos.filter(todo => todo.id === req.params.id);
      if (dbTodo) {
        db.Todo.update(req.body, {
          where: {
            id: req.params.id
          }
        })
          .then(newDbTodo => {
            if (newDbTodo) {
              res.json(newDbTodo);
            }
          })
          .catch(err => res.json(err));
      }
    });
  },
  deleteById: async function(req, res) {
    db.Todo.findAll({
      where: {
        user_id: user.id
      }
    }).then((dbTodos, err) => {
      if (err) {
        res.status(500).send(err);
      }
      const dbTodo = dbTodos.filter(todo => todo.id === req.params.id);
      if (dbTodo) {
        db.Todo.destroy({
          where: {
            id: req.params.id
          }
        }).then(destroyed => {
          res.sendStatus(200);
        });
      }
    });
  }
};
