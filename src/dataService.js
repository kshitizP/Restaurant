import axios from "axios"

export const getData = async (url, data) => {
  return await axios.get(process.env.REACT_APP_BACKEND_URL + url, data ? {params: data} : {})
    .then((res) => {
      return res.data;
    })
    .catch((error) => {
      return null;
    })
}