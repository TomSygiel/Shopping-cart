import React from 'react'
import cart from '../images/basket-white.png'

class Nav extends React.Component {

  render() {

    return(
      <header>
        <div className="overlay">
        <nav>
          <h2>brand.</h2>
          <ul>
            <li><a href="#">Home
            <span></span><span></span><span></span><span></span>
            </a></li>
            <li><a href="#">About
            <span></span><span></span><span></span><span></span></a></li>
            <li className="cart" ><a href="#">
              {/* <ion-icon name="basket-outline"></ion-icon> */}
            <img src={cart} />Cart <span>0</span></a>
            <span></span><span></span><span></span><span></span>
            </li>
          </ul>
        </nav>
        </div>
      </header>
    )
  }
}

export default Nav