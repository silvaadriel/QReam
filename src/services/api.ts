import axios from 'axios';

export default axios.create({
  baseURL: 'https://qream-api.herokuapp.com'
});
