const db = require('../models');

module.exports = () => {
  db.User.create({
    firstName: 'Joe',
    lastName: 'Gates',
    email: 'j@g.co',
    password: process.env.ADMIN_USER_PWD,
    isAdmin: true
  });
  db.User.create({
    firstName: 'Jane',
    lastName: 'Jobs',
    email: 'j@j.co',
    password: process.env.USER_PWD,
    isAdmin: false
  });
  db.User.create({
    firstName: 'Charles',
    lastName: 'Brady',
    email: 'charlesmbrady@gmail.com',
    password: 'Password1!',
    isAdmin: false
  });
  db.Sprint.create({
    subject: 'Alpha',
    description: 'sprint1',
    points: 3,
    UserId: 3
  });
  db.Sprint.create({
    subject: 'Bravo',
    description: 'sprint2',
    points: 3,
    UserId: 3
  });
  db.Todo.create({
    subject: 'Get Laundry',
    description: 'need to do my laundry and fold it',
    points: 3,
    UserId: 3,
    SprintId: 1
  });
  db.Todo.create({
    subject: 'Do dishes',
    description: 'need to do the dishes',
    points: 2,
    UserId: 3,
    SprintId: 1
  });
  db.Todo.create({
    subject: 'Clean car',
    description: 'take car to carwash and vacuum inside',
    points: 5,
    UserId: 3,
    SprintId: 2
  });
};
