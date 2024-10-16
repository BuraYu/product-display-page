import "./product.css";
import fullStar from "../../assets/fullStar.svg";
import emptyStar from "../../assets/emptyStar.svg";
import measure from "../../assets/measure.svg";
import amex from "../../assets/payment/amex.svg";
import mastercard from "../../assets/payment/mastercard.svg";
import paypal from "../../assets/payment/paypal.svg";
import visa from "../../assets/payment/visa.svg";

const Product = () => {
  const home = "Home";
  const category = "Category";
  const productPage = "Product page";

  // const rating = 4;
  // const totalStars = 5;

  return (
    <div className="product-wrapper">
      <div className="product-container">
        <nav aria-label="breadcrumb">
          <ol class="breadcrumb">
            <li>
              <a href="#">{home}</a>
            </li>
            <li>
              <span>&gt;</span>
            </li>
            <li>
              <a href="#">{category}</a>
            </li>
            <li>
              <span>&gt;</span>
            </li>
            <li>
              <a href="#">{productPage}</a>
            </li>
          </ol>
        </nav>

        <div className="product__content-container">
          <div className="product__images">
            <img
              src="https://picsum.photos/500"
              alt="A random 500px picture"
              loading="lazy"
            />
            <div className="product__thumbnail-container">
              <img
                src="https://picsum.photos/150/115"
                alt="a random 150x115 pictre"
                loading="lazy"
              />
              <img
                src="https://picsum.photos/150/115"
                alt="a random 150x115 pictre"
                loading="lazy"
              />
              <img
                src="https://picsum.photos/150/115"
                alt="a random 150x115 pictre"
                loading="lazy"
              />
            </div>
          </div>
          <div className="product__rating">
            <h1>Product name</h1>
            <div className="product__reviews">
              {/* Change to numbers at top, to iterate over them */}

              <img src={fullStar} alt="icon of a filled star" />
              <img src={fullStar} alt="icon of a filled star" />
              <img src={fullStar} alt="icon of a filled star" />
              <img src={fullStar} alt="icon of a filled star" />
              <img src={emptyStar} alt="icon of a empty star" />
              <a href="#">Read reviews</a>
            </div>
            <div className="product__price">
              <span className="product__old-price">$259</span>
              <span>|</span>
              <span className="percentage-off">40% off</span>
              <h2>$155.40</h2>
            </div>
            <span>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
              totam adipisci necessitatibus alias officia corrupti qui.
            </span>
            <div className="product__size-selector">
              <label for="size-selector">Choose size</label>
              <select class="product__size-select">
                <option value="someOption">Some option</option>
                <option value="otherOption">Other option</option>
              </select>

              <div className="product__size-guide">
                <img src={measure} alt="" />
                <a href="#">
                  <span>Size guide</span>
                </a>
              </div>
            </div>

            <div className="product__choose-color">
              <span>Choose Color</span>
              <div className="product__color-options">
                <div className="product__color-circle--gray"></div>
                <div className="product__color-circle--grayer"></div>
                <div className="product__color-circle--the-grayest"></div>
                <div className="product__color-circle--grayhole"></div>
              </div>
            </div>
            <span className="product__to-cart">Add to cart</span>
            <div className="product__checkout">
              <span>Checkout safety</span>
              <div className="product__checkout-line"></div>
              <div className="product__payment-methods">
                <img
                  src={paypal}
                  alt="paypal logo"
                  aria-label="PayPal Payment Methode"
                />
                <img
                  src={visa}
                  alt="visa logo"
                  aria-label="Visa Payment Methode"
                />
                <img
                  src={mastercard}
                  alt="mastercard logo"
                  aria-label="Visa Payment Methode"
                />
                <img
                  src={amex}
                  alt="amex logo"
                  aria-label="Amex Payment Methode"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
