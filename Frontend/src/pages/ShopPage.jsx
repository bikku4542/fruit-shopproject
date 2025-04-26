import React from "react";
import NavBar from "../components/NavBar";
import Spinner from "../components/Spinner";
import Footer from "../components/Footer";
import ModalSearch from "../components/ModalSearch";
import Categories from "../components/Categories";
import SideFeaturedProducts from "../components/SideFeaturedProducts";
import { Link } from "react-router-dom";
import FruitShop from "../components/FruitShop";

export default function ShopPage() {
  return (
    <div>
      <Spinner />

      <NavBar />

      <ModalSearch />

      {/* Single Page Header start */}
      <div className="container-fluid page-header py-5">
        <h1 className="text-center text-white display-6">Shop</h1>
        <ol className="breadcrumb justify-content-center mb-0">
          <li className="breadcrumb-item">
            <Link to="/">Home</Link>
          </li>
          <li className="breadcrumb-item">
            <a href="#">Pages</a>
          </li>
          <li className="breadcrumb-item active text-white">Shop</li>
        </ol>
      </div>
      {/* Single Page Header End */}

      {/* Fruits Shop Start*/}
      <div className="container-fluid fruite py-5">
        <div className="container py-5">
          <h1 className="mb-4">Fresh fruits shop</h1>
          <div className="row g-4">
            <div className="col-lg-12">
              <div className="row g-4">
                <div className="col-lg-3">
                  <div className="row g-4">
                    <div className="col-lg-12">
                      <Categories />
                    </div>

                    {/* Price slider starts */}
                    <div className="col-lg-12">
                      <div className="mb-3">
                        <h4 className="mb-2">Price</h4>
                        <input
                          type="range"
                          className="form-range w-100"
                          id="rangeInput"
                          name="rangeInput"
                          min={0}
                          max={500}
                          defaultValue={0}
                          onInput="amount.value=rangeInput.value"
                        />
                        <output
                          id="amount"
                          name="amount"
                          min-value={0}
                          max-value={500}
                          htmlFor="rangeInput"
                        >
                          ₹{0}
                        </output>
                      </div>
                    </div>

                    <SideFeaturedProducts />
                  </div>
                </div>

                <div className="col-lg-9">
                  <div className="row g-4 justify-content-center">
                    <FruitShop />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Fruits Shop End*/}

      <Footer />
    </div>
  );
}
