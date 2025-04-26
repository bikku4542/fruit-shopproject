import React from 'react'

export default function RelatedProducts() {
  return (
    <div>
      <div>
        <h1 className="fw-bold mb-0">Related Products</h1>
        <div className="vesitable">
          <div className="owl-carousel vegetable-carousel justify-content-center">
            <div className="border border-primary rounded position-relative vesitable-item">
              <div className="vesitable-img">
                <img src="img/vegetable-item-6.jpg" className="img-fluid w-100 rounded-top" alt="Parsley" />
              </div>
              <div className="text-white bg-primary px-3 py-1 rounded position-absolute" style={{ top: "10px", right: "10px" }}>Vegetable</div>
              <div className="p-4 pb-0 rounded-bottom">
                <h4>Parsley</h4>
                <p>Fresh parsley, perfect for garnishing and adding flavor to your dishes. Packed with nutrients and a vibrant aroma.</p>
                <div className="d-flex justify-content-between flex-lg-wrap">
                  <p className="text-dark fs-5 fw-bold">$4.99 / kg</p>
                  <a href="#" className="btn border border-secondary rounded-pill px-3 py-1 mb-4 text-primary"><i className="fa fa-shopping-bag me-2 text-primary" /> Add to cart</a>
                </div>
              </div>
            </div>
            <div className="border border-primary rounded position-relative vesitable-item">
              <div className="vesitable-img">
                <img src="img/vegetable-item-1.jpg" className="img-fluid w-100 rounded-top" alt="Carrots" />
              </div>
              <div className="text-white bg-primary px-3 py-1 rounded position-absolute" style={{ top: "10px", right: "10px" }}>Vegetable</div>
              <div className="p-4 pb-0 rounded-bottom">
                <h4>Carrots</h4>
                <p>Crunchy and sweet carrots, rich in beta-carotene and perfect for snacking, cooking, or juicing.</p>
                <div className="d-flex justify-content-between flex-lg-wrap">
                  <p className="text-dark fs-5 fw-bold">$3.99 / kg</p>
                  <a href="#" className="btn border border-secondary rounded-pill px-3 py-1 mb-4 text-primary"><i className="fa fa-shopping-bag me-2 text-primary" /> Add to cart</a>
                </div>
              </div>
            </div>
            <div className="border border-primary rounded position-relative vesitable-item">
              <div className="vesitable-img">
                <img src="img/vegetable-item-3.png" className="img-fluid w-100 rounded-top bg-light" alt="Bananas" />
              </div>
              <div className="text-white bg-primary px-3 py-1 rounded position-absolute" style={{ top: "10px", right: "10px" }}>Fruit</div>
              <div className="p-4 pb-0 rounded-bottom">
                <h4>Bananas</h4>
                <p>Sweet and ripe bananas, a great source of energy and potassium. Ideal for snacks and smoothies.</p>
                <div className="d-flex justify-content-between flex-lg-wrap">
                  <p className="text-dark fs-5 fw-bold">$1.99 / kg</p>
                  <a href="#" className="btn border border-secondary rounded-pill px-3 py-1 mb-4 text-primary"><i className="fa fa-shopping-bag me-2 text-primary" /> Add to cart</a>
                </div>
              </div>
            </div>
            <div className="border border-primary rounded position-relative vesitable-item">
              <div className="vesitable-img">
                <img src="img/vegetable-item-4.jpg" className="img-fluid w-100 rounded-top" alt="Bell Peppers" />
              </div>
              <div className="text-white bg-primary px-3 py-1 rounded position-absolute" style={{ top: "10px", right: "10px" }}>Vegetable</div>
              <div className="p-4 pb-0 rounded-bottom">
                <h4>Bell Peppers</h4>
                <p>Colorful and crisp bell peppers, perfect for salads, stir-fries, and grilling. Packed with vitamins.</p>
                <div className="d-flex justify-content-between flex-lg-wrap">
                  <p className="text-dark fs-5 fw-bold">$5.99 / kg</p>
                  <a href="#" className="btn border border-secondary rounded-pill px-3 py-1 mb-4 text-primary"><i className="fa fa-shopping-bag me-2 text-primary" /> Add to cart</a>
                </div>
              </div>
            </div>
            <div className="border border-primary rounded position-relative vesitable-item">
              <div className="vesitable-img">
                <img src="img/vegetable-item-5.jpg" className="img-fluid w-100 rounded-top" alt="Potatoes" />
              </div>
              <div className="text-white bg-primary px-3 py-1 rounded position-absolute" style={{ top: "10px", right: "10px" }}>Vegetable</div>
              <div className="p-4 pb-0 rounded-bottom">
                <h4>Potatoes</h4>
                <p>Versatile and hearty potatoes, ideal for baking, mashing, or frying. A kitchen staple for every meal.</p>
                <div className="d-flex justify-content-between flex-lg-wrap">
                  <p className="text-dark fs-5 fw-bold">$2.99 / kg</p>
                  <a href="#" className="btn border border-secondary rounded-pill px-3 py-1 mb-4 text-primary"><i className="fa fa-shopping-bag me-2 text-primary" /> Add to cart</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}