import axios from 'axios';

const instance = axios.create({
   baseURL: 'https://facebook-mern-app.herokuapp.com'
})

export default instance

//axios.post('/upload/image');