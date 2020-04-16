import React, { Fragment } from 'react'
import { connect } from 'react-redux'
import { productQuantity } from '../actions/productQuantity'
import { productDelete } from '../actions/productDelete'

import tee from '../images/tee.jfif'
import shirt from '../images/shirt.jfif'
import sweater from '../images/sweater.jfif'
import jacket from '../images/jacket.jfif'
import trousers from '../images/trousers.jfif'
import jeans from '../images/jeans.jfif'


class Cart extends React.Component {

  render() {

    const { basketProps, productQuantity, productDelete } = this.props

    let productsInCart = []

    Object.keys(basketProps.products).forEach(function(item) {
      console.log(item)
      console.log(basketProps.products[item].inCart)
      if(basketProps.products[item].inCart) {
        productsInCart.push(basketProps.products[item])
      }
    })

    const productImages = (product) => {
      if (product.tagName === 'tee') {
        return tee
      }
      if (product.tagName === 'shirt') {
        return shirt
      }
      if (product.tagName === 'sweater') {
        return sweater
      }
      if (product.tagName === 'jacket') {
        return jacket
      }
      if (product.tagName === 'trouers') {
        return trousers
      }
      if (product.tagName === 'jeans') {
        return jeans
      }
    }

    productsInCart = productsInCart.map((product, index) => {
      return(
        <Fragment key={index}>
          <div className="product">
            <span className="sm-hide">{product.name}</span>
          <img src={productImages(product)} />
          </div>

          <div className="delete">
            <ion-icon name="trash-outline" onClick={()=>{productDelete(product.tagName)}}></ion-icon>
          </div>

          <div className="price sm-hide">€{product.price}</div>

          <div className="quantity">
            <ion-icon className="decrease" name="remove-circle-outline" onClick={()=>{productQuantity('decrease', product.tagName)}}></ion-icon>
              <span>{product.quantity}</span>
            <ion-icon className="increase" name="add-circle-outline" onClick={()=>{productQuantity('increase', product.tagName)}}></ion-icon>
          </div>

          <div className="total">€{product.quantity * product.price}</div>
          
        </Fragment >
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
          <h4 className="basket-total">€{parseFloat(basketProps.cartCost).toFixed(2)}</h4>
        </div>

      </div>
    )
  }
}

const mapStateToProps = state => ({
  basketProps: state.basketState
})

export default connect(mapStateToProps, { productQuantity, productDelete })(Cart)