import React from 'react'
import cart from '../images/basket-white.png'
import { connect } from 'react-redux'
import { getNumbers } from '../actions/getAction'
import { Link } from 'react-router-dom'

class Nav extends React.Component {

  render() {

    const { props } = this

    return(
      <header>
        <div className="overlay">
        <nav>
          <h2><Link to="/" >brand.</Link></h2>
          <ul>
            <li>
              <Link to="/" >Home</Link>
            </li>

            <li>
              <Link to="/about" >About</Link>
            </li>

            <li className="cart" >
              <Link to="/cart" >
                <img src={cart} />
                <span className="cart-count">{props.basketProps.basketNumbers}</span>
              </Link>
            </li>
            
          </ul>
        </nav>
        </div>
      </header>
    )
  }
}

const mapStateToPros = state => ({
  basketProps: state.basketState
})

export default connect(mapStateToPros, { getNumbers })(Nav)