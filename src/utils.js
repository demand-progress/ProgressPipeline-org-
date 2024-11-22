import axios from 'axios'

// export const APPLY_URL = 'https://progressivetalentpipeline.applytojob.com/apply/BFlTRQV7hB/2023-Progressive-Talent-Pipeline-Application'
export const APPLY_URL = 'https://progressivetalentpipeline.applytojob.com/apply/'

export const getPage = id => {
  return axios({
      method: 'get',
      url: 'https://api.demandprogress.org/wp-json/wp/v2/pages/' + id,
      headers: {
        'Content-Type': 'application/json',
      }
    })
    .then(res => {
      return res.data 
    })
}