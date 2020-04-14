import React from 'react'
import { connect } from 'react-redux'
import { removeProduct } from '../actions/removeAction'
import { addQuantity } from '../actions/addQuantity'
import { subtractQuantity } from '../actions/subQuantity'

import tee from '../images/tee.jfif'
import shirt from '../images/shirt.jfif'
import sweater from '../images/sweater.jfif'
import jacket from '../images/jacket.jfif'
import trousers from '../images/trousers.jfif'
import jeans from '../images/jeans.jfif'


class Cart extends React.Component {

  handleRemove = (id) => {
    this.props.removeProduct(id)
  }

  handleAddQuantity = (id) => {
    this.props.addQuantity(id)
  }

  handleSubtractQuantity = (id) => {
    this.props.subtractQuantity(id)
  }

  render() {

    const { basketProps } = this.props

    let productsInCart = []

    Object.keys(basketProps.products).forEach(function(item) {
      console.log(item)
      console.log(basketProps.products[item].inCart)
      if(basketProps.products[item].inCart) {
        productsInCart.push(basketProps.products[item])
      }
    })

    // const productImages = [tee, shirt, sweater, jacket, trousers, jeans]

    productsInCart = productsInCart.map((product, index) => {
      return(
        <>
          <div className="product">
            <span className="sm-hide">{product.name}</span>
          {/* <img src={productImages[index]} /> */}
          </div>

          <div className="delete">
            <ion-icon name="trash-outline" onClick={()=>{this.handleRemove(product.id)}}></ion-icon>
          </div>

          <div className="price sm-hide">€{product.price}</div>

          <div className="quantity">
            <ion-icon className="decrease" name="remove-circle-outline" onClick={()=>{this.handleSubtractQuantity(product.id)}}></ion-icon>
              <span>{product.quantity}</span>
            <ion-icon className="increase" name="add-circle-outline" onClick={()=>{this.handleAddQuantity(product.id)}}></ion-icon>
          </div>

          <div className="total">€{product.quantity * product.price}</div>
          
        </>
      )
    })

    return(
      <div className="container-products">

        <div className="product-header">
          <h5 className="product-title">product</h5>
          <h5 className="price sm-hide">price</h5>
          <h5 className="quantity">quantity</h5>
          <h5 className="total">total</h5>
        </div>

        <div className="products">
          {productsInCart}
        </div>

        <div className="basket-total-container">
          <h4 className="basket-total-title">Basket Total:</h4>
          <h4 className="basket-total">€{basketProps.cartCost}</h4>
        </div>

      </div>
    )
  }
}

const mapStateToProps = state => ({
  basketProps: state.basketState
})

const mapDispatchToProps = (dispatch) => ({
    removeProduct: (id)=>{dispatch(removeProduct(id))},
    addQuantity: (id)=>{dispatch(addQuantity(id))},
    subtractQuantity: (id)=>{dispatch(subtractQuantity(id))}
})

export default connect(mapStateToProps, mapDispatchToProps)(Cart)