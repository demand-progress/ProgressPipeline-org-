import axios from 'axios'

export const getPage = id => {
  return axios({
      method: 'get',
      url: '//api.demandprogressaction.org/wp-json/wp/v2/pages/' + id,
      headers: {
        'Content-Type': 'application/json',
      }
    })
    .then(res => {
      return res.data 
    })
}