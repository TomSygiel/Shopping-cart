import { REMOVE_PRODUCT } from './types'

export const productDelete = (name) => {
  return(dispatch) => {
    console.log('hello from delete function')
    dispatch({
      type: REMOVE_PRODUCT,
      payload: name
    })
  }
}