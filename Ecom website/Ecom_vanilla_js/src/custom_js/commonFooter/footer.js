
export const dynamicFooter = () => {

    const footer = `
      <footer class="footer">
        <div class="footer-container">
          <!-- Logo and Description -->
          <div class="footer-logo">
            <img src = "../../../../public/images/navbarLogo.png" />
            <p>Welcome to Thapa EcomStore, your ultimate destination for cutting-edge gadgets!</p>
            <div class="payment-icons">
              <img src = "../../../../public/images/cards.png"/>
            </div>
          </div>
  
          <!-- Shopping Links -->
          <div class="footer-section">
            <h3>SHOPPING</h3>
            <ul>
              <li><a href="#">Computer Store</a></li>
              <li><a href="#">Laptop Store</a></li>
              <li><a href="#">Accessories</a></li>
              <li><a href="#">Sales & Discount</a></li>
            </ul>
          </div>
  
          <!-- Experience Links -->
          <div class="footer-section">
            <h3>Experience</h3>
            <ul>
              <li><a href="#">Contact Us</a></li>
              <li><a href="#">Payment Method</a></li>
              <li><a href="#">Delivery</a></li>
              <li><a href="#">Return and Exchange</a></li>
            </ul>
          </div>
  
          <!-- Newsletter -->
          <div class="footer-section">
            <h3>NEWSLETTER</h3>
            <p>Be the first to know about new arrivals, sales & promos!</p>
            <form>
              <input type="email" placeholder="Your Email" required>
            </form>
          </div>
        </div>
        <!-- Footer Bottom -->
        <div class="footer-bottom">
          <p>Design and Code by Mayank Deep</p>
        </div>
      </footer>
    `;

    const footerParent = document.querySelector("#footerParent");
    console.log(footerParent);
    
    // need to convert footer that is in string to actual DOM 
    const parser = new DOMParser();
    const parsedFooter = parser.parseFromString(footer , "text/html");

    const footerElement = parsedFooter.body.firstChild;
    console.log(typeof footerElement);

    footerParent.insertAdjacentElement("beforeend" , footerElement);
};