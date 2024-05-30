import axios from 'axios'
import { signup, getScheludes } from '../slices/userSlices.js'

export const signupUser = (user) => async (dispatch) => {
  try {
    const { data } = await axios.post('/signupruta', user)
    if (data && data.tkn) {
      localStorage.setItem('tkn', data.tkn)
      dispatch(signup(data))
    }
    else localStorage.setItem('tkn', 'tkn')
  } catch (error) {
    console.log(error);
  }
}

export const getUserScheludes = (id) => async (dispatch) => {
  try {
    const { data } = await axios.post(`/user/scheludes/${id}`, {
      Headers: {
        credentials: localStorage.getItem('tkn')
      }
    }) 
    dispatch(getScheludes(data))
  } catch (error) {
    console.log(error);
  }
}
