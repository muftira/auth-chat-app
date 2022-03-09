import axios from 'axios';

  const url = 'https://api.chatengine.io/users/'
  const projectID = 'cc792c4e-12e1-4449-982d-15e042dd24be'
  
  export const getUser = () => {
    return axios.get(url, {
      headers : {
        'PRIVATE-KEY' : projectID
      }
    });
  };

  export const putUser = (data) => {
    return axios.put(url, data, {
      headers : {
        'PRIVATE-KEY' : projectID
      }
    })
  };

