import axios from 'axios';

export default {
  healthcheck: function() {
    return axios.get('/healthcheck').catch(err => {
      throw err;
    });
  },
  updateUser: function(user) {
    return axios.put(`/auth/user/${user.id}`, user).catch(err => {
      throw err;
    });
  },
  getUser: function(id) {
    return axios.get(`/auth/user/${id}`).catch(err => {
      throw err;
    });
  },
  createUser: function(user) {
    return axios.post('/auth/user', user).catch(err => {
      throw err;
    });
  },
  deleteUser: function(id) {
    return axios.delete(`/auth/user/${id}`).catch(err => {
      throw err;
    });
  }
};
