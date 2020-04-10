import React from 'react'
import tee from '../images/tee.jfif'
import shirt from '../images/shirt.jfif'
import sweater from '../images/sweater.jfif'
import jacket from '../images/jacket.jfif'
import trousers from '../images/trousers.jfif'
import jeans from '../images/jeans.jfif'

class Home extends React.Component {

  render() {
    return(
      <div className="container">

        <div className="image">
          <figure>
            <img src={tee} alt="tee" />
          </figure>
          <h4>T-shirt in premium cotton</h4>
          <div className="paragraph">
          <p>A lot of self-importance goes on in the fashion industry. I'm not like that.</p>
          </div>
          <h4>€16,50</h4>
          <a className="add-to-cart cart1" href="">Add to cart</a>
        </div>

        <div className="image">
          <figure>
            <img src={shirt} alt="shirt" />
          </figure>
          <h4>Shirt in linnen mix</h4>
          <div className="paragraph">
          <p>Some people think luxury is the opposite of poverty. It is not. It is the opposite of vulgarity.</p>
          </div>
          <h4>€29,99</h4>
          <a className="add-to-cart cart2" href="">Add to cart</a>
        </div>

        <div className="image">
          <figure>
            <img src={sweater} alt="sweater" />
          </figure>
          <h4>Sweater in merino wool</h4>
          <div className="paragraph">
          <p>I think in the darkest moments, we need a break. Clothes mean nothing until someone lives in them.</p>
          </div>
          <h4>€39,99</h4>
          <a className="add-to-cart cart3" href="">Add to cart</a>
        </div>

        <div className="image">
          <figure>
            <img src={jacket} alt="jacket" />
          </figure>
          <h4>Biker jacket in leather</h4>
          <div className="paragraph">
          <p>Awkwardness gives me great comfort. I've never been cool, but I've felt cool.</p>
          </div>
          <h4>€299</h4>
          <a className="add-to-cart cart4" href="">Add to cart</a>
        </div>

        <div className="image">
          <figure>
            <img src={trousers} alt="trousers" />
          </figure>
          <h4>Wool suit trousers</h4>
          <div className="paragraph">
          <p>I have a fantastic relationship with money. I use it to buy my freedom.</p>
          </div>
          <h4>€69,99</h4>
          <a className="add-to-cart cart5" href="">Add to cart</a>
        </div>

        <div className="image">
          <figure>
            <img src={jeans} alt="jeans" />
          </figure>
          <h4>Slim jeans in tech stretch</h4>
          <div className="paragraph">
          <p>I always loved aesthetics. Not particularly fashion, but an idea of beauty.</p>
          </div>
          <h4>€49,99</h4>
          <a className="add-to-cart cart6" href="">Add to cart</a>
        </div>

      </div>
    )
  }
}

export default Home