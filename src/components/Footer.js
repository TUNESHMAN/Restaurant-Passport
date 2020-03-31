import React from 'react'

function Footer() {
    return (
        <div>
            <footer>
          <div class="footer">
            <div class="con">
              <h3>Contact Us</h3>
              <p>House 98, Funsho Williams Avenue</p>
              <p>Victoria Island, Lagos</p>
              <p><i class="fas fa-tty"></i>+2348066695472</p>
              <p><i class="fas fa-phone-alt"></i></p>
            </div>
  
            <div class="join">
              <h3>Join Us</h3>
              <ul>
                <li><i class="fab fa-facebook-square"></i>&nbsp;Facebook</li>
                <li><i class="fab fa-twitter-square"></i>&nbsp;Twitter</li>
                <li><i class="fab fa-instagram"></i>&nbsp;Instagram</li>
              </ul>
            </div>
      
            <div class="company">
              <h3>Company</h3>
              <ul>
                <li>About</li>
                <li>Blog</li>
                <li>Partners</li>
                <li>Privacy</li>
                {/* <li>Terms and conditions</li>  */}
              </ul>
            </div>
      
            <div class="help">
              <h3>Help</h3>
              <ul>
                <li>Contact</li>
                <li>FAQ</li>
                <li>Add a city</li>
                <li>Find restaurant</li>
                 {/* <li>Email Us: info@ChorePeep.com</li>  */}
              </ul>
            </div>
          </div>
      
          <div class="copyright">
            <p>&copy;2020.Use Restaurant Passport. All right reserved</p>
          </div>
        </footer>
            
        </div>
    )
}

export default Footer
