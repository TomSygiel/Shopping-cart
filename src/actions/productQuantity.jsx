import { INCREASE_QUANTITY, DECREASE_QUANTITY } from './types'

export const productQuantity = (action, name) => {
  return (dispatch) => {
    console.log('inside the action')
    dispatch({
      type: action === 'increase' ? INCREASE_QUANTITY : DECREASE_QUANTITY,
      payload: name
    })
  }
}