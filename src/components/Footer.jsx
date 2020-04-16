import React from 'react'

class Footer extends React.Component {

  render() {
    return(
      <div className="footer">
        <p>
          <div className="footer-link">
            <a href="#">Terms of Service</a>
          </div>
          <span className="divider">|</span> 
          <div className="footer-link">
            <a href="#">Privacy Policy</a>
          </div>
          <span className="divider">|</span> 
          <div className="footer-link"> 
            <a href="#">Careers</a>
          </div>
          <span className="divider">|</span>  
          <div className="footer-link">
          <a href="#">About</a>
          </div>
        </p>
      </div>
    )
  }
}

export default Footer