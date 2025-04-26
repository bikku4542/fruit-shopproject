import React, { useEffect } from "react";
import NavBar from "../components/NavBar";
import Spinner from "../components/Spinner";
import Footer from "../components/Footer";
import ModalSearch from "../components/ModalSearch";
import ButtonToTop from "../components/ButtonToTop";
import initializeMainScript from "../script/mainFunction";
import { Link, useNavigate } from "react-router-dom";
import { useCart } from "react-use-cart";

export default function Cart() {
  const navigate = useNavigate();
  const { items, updateItemQuantity, removeItem } = useCart();

  const subtotal = items.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const shippingCost = 3.0;
  const total = subtotal + shippingCost;

  const handleProceedToCheckout = () => {
    navigate("/checkout", { state: { items: items } });
  };

  return (
    <div>
      <Spinner />
      <NavBar />
      <ModalSearch />

      {/* Page Title */}
      <div className="container-fluid page-header py-5">
        <h1 className="text-center text-white display-6">Your Basket - GreenCart</h1>
        <ol className="breadcrumb justify-content-center mb-0">
          <li className="breadcrumb-item">
            <Link to="/">Home</Link>
          </li>
          <li className="breadcrumb-item">
            <a href="#">Shop</a>
          </li>
          <li className="breadcrumb-item active text-white">Basket</li>
        </ol>
      </div>

      {/* Cart Items */}
      <div className="container-fluid py-5">
        <div className="container py-5">
          <div className="table-responsive">
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">Product Image</th>
                  <th scope="col">Title</th>
                  <th scope="col">Unit Price</th>
                  <th scope="col">Qty</th>
                  <th scope="col">Amount</th>
                  <th scope="col">Remove</th>
                </tr>
              </thead>
              <tbody>
                {items.map((item) => (
                  <tr key={item.id}>
                    <th scope="row">
                      <div className="d-flex align-items-center">
                        <img
                          src={item.image}
                          className="img-fluid me-5 rounded-circle"
                          style={{ width: "80px", height: "80px" }}
                          alt={item.name}
                        />
                      </div>
                    </th>
                    <td>
                      <p className="mb-0 mt-4">{item.name}</p>
                    </td>
                    <td>
                      <p className="mb-0 mt-4">₹{item.price}</p>
                    </td>
                    <td>
                      <div className="input-group quantity mt-4" style={{ width: "100px" }}>
                        <div className="input-group-btn">
                          <button
                            className="btn btn-sm btn-minus rounded-circle bg-light border"
                            onClick={() => updateItemQuantity(item.id, item.quantity - 1)}
                          >
                            <i className="fa fa-minus" />
                          </button>
                        </div>
                        <input
                          type="text"
                          className="form-control form-control-sm text-center border-0"
                          value={item.quantity}
                          readOnly
                        />
                        <div className="input-group-btn">
                          <button
                            className="btn btn-sm btn-plus rounded-circle bg-light border"
                            onClick={() => updateItemQuantity(item.id, item.quantity + 1)}
                          >
                            <i className="fa fa-plus" />
                          </button>
                        </div>
                      </div>
                    </td>
                    <td>
                      <p className="mb-0 mt-4">₹{(item.quantity * item.price).toFixed(2)}</p>
                    </td>
                    <td>
                      <button
                        className="btn btn-md rounded-circle bg-light border mt-4"
                        onClick={() => removeItem(item.id)}
                      >
                        <i className="fa fa-times text-danger" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Coupon Area */}
          <div className="mt-5">
            <input
              type="text"
              className="border-0 border-bottom rounded me-5 py-3 mb-4"
              placeholder="Promo Code"
            />
            <button className="btn border-secondary rounded-pill px-4 py-3 text-primary" type="button">
              Redeem
            </button>
          </div>

          {/* Cart Summary */}
          <div className="row g-4 justify-content-end">
            <div className="col-8" />
            <div className="col-sm-8 col-md-7 col-lg-6 col-xl-4">
              <div className="bg-light rounded">
                <div className="p-4">
                  <h1 className="display-6 mb-4">
                    GreenCart <span className="fw-normal">Summary</span>
                  </h1>
                  <div className="d-flex justify-content-between mb-4">
                    <h5 className="mb-0 me-4">Items Total:</h5>
                    <p className="mb-0">₹{subtotal.toFixed(2)}</p>
                  </div>
                  <div className="d-flex justify-content-between">
                    <h5 className="mb-0 me-4">Delivery Fee</h5>
                    <div>
                      <p className="mb-0">Fixed: ₹{shippingCost.toFixed(2)}</p>
                    </div>
                  </div>
                  <p className="mb-0 text-end">Shipping inside your region.</p>
                </div>
                <div className="py-4 mb-4 border-top border-bottom d-flex justify-content-between">
                  <h5 className="mb-0 ps-4 me-4">Grand Total</h5>
                  <p className="mb-0 pe-4">₹{total.toFixed(2)}</p>
                </div>
                <button
                  className="btn border-secondary rounded-pill px-4 py-3 text-primary text-uppercase mb-4 ms-4"
                  type="button"
                  onClick={handleProceedToCheckout}
                >
                  Continue to Payment
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
      <ButtonToTop />
    </div>
  );
}
