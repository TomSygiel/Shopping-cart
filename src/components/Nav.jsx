import React from 'react'
import cart from '../images/basket-white.png'
import { connect } from 'react-redux'
import { getNumbers } from '../actions/getAction'
import { Link } from 'react-router-dom'
// import { useEffect } from 'react'


// function Nav (props) {

//   useEffect(() => {
//     getNumbers()
//   }, [])

//   return(
//     <header>
//       <div className="overlay">
//       <nav>
//         <h2>brand.</h2>
//         <ul>
//           <li><a href="#">Home
//           <span></span><span></span><span></span><span></span>
//           </a></li>
//           <li><a href="#">About
//           <span></span><span></span><span></span><span></span></a></li>
//           <li className="cart" ><a href="#">
//             {/* <ion-icon name="basket-outline"></ion-icon> */}
//           <img src={cart} />Cart <span>{props.basketProps.basketNumbers}</span></a>
//           <span></span><span></span><span></span><span></span>
//           </li>
//         </ul>
//       </nav>
//       </div>
//     </header>
//   )
// }

// const mapStateToPros = state => ({
//   basketProps: state.basketState
// })

// export default connect(mapStateToPros, { getNumbers })(Nav)


class Nav extends React.Component {

  render() {

    const { props } = this

    return(
      <header>
        <div className="overlay">
        <nav>
          <h2><Link to="/" >brand.</Link></h2>
          <ul>
            <li><Link to="/" >Home
            <span></span><span></span><span></span><span></span>
            </Link></li>
            <li><Link to="/" >About
            <span></span><span></span><span></span><span></span></Link></li>
            <li className="cart" ><Link to="/cart" >
              {/* <ion-icon name="basket-outline"></ion-icon> */}
            <img src={cart} /><span className="cart-count">{props.basketProps.basketNumbers}</span></Link>
            <span></span><span></span><span></span><span></span>
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