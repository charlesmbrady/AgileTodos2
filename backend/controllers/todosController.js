const db = require('../models');
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser'); // for the auth token

// Defining methods for the todosController
module.exports = {
  create: function(req, res) {
    const decoded = jwt.decode(req.cookies.token);
    const todo = req.body;
    todo.UserId = decoded.id;

    db.Todo.create(req.body)
      .then(result => {
        res.json(result);
      })
      .catch(err => {
        res.json(err);
      });
  },
  getById: function(req, res) {
    const decoded = jwt.decode(req.cookies.token);
    const user = { id: decoded.id };

    db.Todo.findAll({
      where: {
        UserId: user.id
      }
    }).then((dbTodos, err) => {
      if (err) {
        res.status(500).send(err);
      }
      dbTodos.filter(todo => todo.id == req.params.id);
      res.json(dbTodos[0]);
    });
  },
  getAllForUser: function(req, res) {
    const decoded = jwt.decode(req.cookies.token);
    const user = { id: decoded.id };

    db.Todo.findAll({
      where: {
        UserId: user.id
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
        UserId: user.id
      }
    }).then((dbTodos, err) => {
      if (err) {
        res.status(500).send(err);
      }
      dbTodos.filter(todo => todo.id == req.params.id);
      if (dbTodos[0]) {
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
        UserId: user.id
      }
    }).then((dbTodos, err) => {
      if (err) {
        res.status(500).send(err);
      }
      dbTodos.filter(todo => todo.id == req.params.id);
      if (dbTodos[0]) {
        db.Sprint.destroy({
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
