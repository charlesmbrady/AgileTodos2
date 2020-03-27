const db = require('../models');
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser'); // for the auth token

// Defining methods for the sprintsController
module.exports = {
  create: function(req, res) {
    db.Sprint.create(req.body)
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

    db.Sprint.findAll({
      where: {
        UserId: user.id
      },
      include: [
        {
          model: db.Todo
        }
      ]
    }).then((dbSprints, err) => {
      if (err) {
        res.status(500).send(err);
      }
      let newDbSprints = dbSprints.filter(sprint => sprint.id == req.params.id);

      res.json(newDbSprints[0]);
    });
  },
  getAllForUser: function(req, res) {
    const decoded = jwt.decode(req.cookies.token);
    const user = { id: decoded.id };

    db.Sprint.findAll({
      where: {
        UserId: user.id
      },
      include: [
        {
          model: db.Todo
        }
      ]
    }).then((dbSprints, err) => {
      if (err) {
        res.status(500).send(err);
      }
      res.json(dbSprints);
    });
  },
  updateById: function(req, res) {
    const decoded = jwt.decode(req.cookies.token);
    const user = { id: decoded.id };

    db.Sprint.findAll({
      where: {
        UserId: user.id
      },
      include: [
        {
          model: db.Todo
        }
      ]
    }).then((dbSprints, err) => {
      if (err) {
        res.status(500).send(err);
      }
      dbSprints.filter(sprint => sprint.id == req.params.id);
      if (dbSprints[0]) {
        db.Sprint.update(req.body, {
          where: {
            id: req.params.id
          }
        })
          .then(newDbSprint => {
            if (newDbSprint) {
              res.json(newDbSprint);
            }
          })
          .catch(err => res.json(err));
      }
    });
  },
  deleteById: async function(req, res) {
    db.Sprint.findAll({
      where: {
        UserId: user.id
      }
    }).then((dbSprints, err) => {
      if (err) {
        res.status(500).send(err);
      }
      dbSprints.filter(sprint => sprint.id == req.params.id);
      if (dbSprints[0]) {
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
