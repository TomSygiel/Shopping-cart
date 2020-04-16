import { ADD_PRODUCT_TO_BASKET, GET_NUMBERS_IN_BASKET, INCREASE_QUANTITY, DECREASE_QUANTITY } from "../actions/types"

import tee from '../images/tee.jfif'
import shirt from '../images/shirt.jfif'
import sweater from '../images/sweater.jfif'
import jacket from '../images/jacket.jfif'
import trousers from '../images/trousers.jfif'
import jeans from '../images/jeans.jfif'

const initialState = {
  basketNumbers: 0,
  cartCost: 0,
  products: {
    tee: {
      id: 1,
      name: "T-shirt in premium cotton",
      description: "A lot of self-importance goes on in the fashion industry. I'm not like that.",
      image: tee,
      price: 14.99,
      quantity: 0,
      inCart: false,
      tagName: 'tee'
    },
    shirt: {
      id: 2,
      name: "Shirt in linnen mix",
      description: "Some people think luxury is the opposite of poverty. It is not. It is the opposite of vulgarity.",
      image: shirt,
      price: 29.99,
      quantity: 0,
      inCart: false,
      tagName: 'shirt'
    },
    sweater: {
      id: 3,
      name: "Sweater in merino wool",
      description: "I think in the darkest moments, we need a break. Clothes mean nothing until someone lives in them.",
      image: sweater,
      price: 39.99,
      quantity: 0,
      inCart: false,
      tagName: 'sweater'
    },
    jacket: {
      id: 4,
      name: "Biker jacket in leather",
      description: "Awkwardness gives me great comfort. I've never been cool, but I've felt cool.",
      image: jacket,
      price: 299,
      quantity: 0,
      inCart: false,
      tagName: 'jacket'
    },
    trousers: {
      id: 5,
      name: "Wool suit trousers",
      description: "I have a fantastic relationship with money. I use it to buy my freedom.",
      image: trousers,
      price: 69.99,
      quantity: 0,
      inCart: false,
      tagName: 'trousers'
    },
    jeans: {
      id: 6,
      name: "Slim jeans in tech stretch",
      description: "I always loved aesthetics. Not particularly fashion, but an idea of beauty.",
      image: jeans,
      price: 49.99,
      quantity: 0,
      inCart: false,
      tagName: 'jeans'
    }
  }
  // products: {
  //   tee: {
  //     name: "T-shirt in premium cotton",
  //     price: 14.99,
  //     quantity: 0,
  //     inCart: false
  //   },
  //   shirt: {
  //     name: "Shirt in linnen mix",
  //     price: 29.99,
  //     quantity: 0,
  //     inCart: false
  //   },
  //    sweater: {
  //     name: "Sweater in merino wool",
  //     price: 39.99,
  //     quantity: 0,
  //     inCart: false
  //   },
  //   jacket: {
  //     name: "Biker jacket in leather",
  //     price: 299,
  //     quantity: 0,
  //     inCart: false
  //   },
  //   trousers: {
  //     name: "Wool suit trousers",
  //     price: 69.99,
  //     quantity: 0,
  //     inCart: false
  //   },
  //   jeans: {
  //     name: "Slim jeans in tech stretch",
  //     price: 49.99,
  //     quantity: 0,
  //     inCart: false
  //   }
  // }
}

export default (state = initialState, action) => {
  let productSelected = '';
  switch(action.type) {
    case ADD_PRODUCT_TO_BASKET:
      productSelected = {...state.products[action.payload]}
      productSelected.quantity += 1;
      productSelected.inCart = true;
      console.log('What is this: ', productSelected);
      return {
        ...state,
        basketNumbers: state.basketNumbers + 1,
        cartCost: state.cartCost + state.products[action.payload].price,
        products: {
          ...state.products,
          [action.payload]: productSelected  
        }
      }
    case INCREASE_QUANTITY: 
      productSelected = { ...state.products[action.payload]}
      productSelected.quantity += 1;
      return {
        ...state,
        cartCost: state.cartCost + state.products[action.payload].price,
        products: {
          ...state.products,
          [action.payload]: productSelected
        }
      }
    case DECREASE_QUANTITY:
      productSelected = { ...state.products[action.payload]}
      let newCartCost = 0;
      if (productSelected.quantity === 0) {
        productSelected.quantity = 0;
        newCartCost = state.cartCost;
      } else {
        productSelected.quantity -= 1
        newCartCost = state.cartCost - state.products[action.payload].price;
      }
      return {
        ...state,
        cartCost: newCartCost,
        products: {
          ...state.products,
          [action.payload]: productSelected
        }
      }
    case GET_NUMBERS_IN_BASKET:
      return {
        ...state
      }
    default: 
      return state;
  }
}
