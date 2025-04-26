import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

export default function Testimonial() {
  const owlOptions = {
    autoplay: true,
    smartSpeed: 2000,
    center: false,
    dots: true,
    loop: true,
    margin: 25,
    nav: true,
    navText: [
      '<i class="bi bi-arrow-left"></i>',
      '<i class="bi bi-arrow-right"></i>',
    ],
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
      },
      576: {
        items: 1,
      },
      768: {
        items: 1,
      },
      992: {
        items: 2,
      },
      1200: {
        items: 2,
      },
    },
  };

  return (
    <div>
      {/* Testimonial Start */}
      <div className="container-fluid testimonial py-5">
        <div className="container py-5">
          <div className="testimonial-header text-center">
            <h4 className="text-primary">Our Testimonial</h4>
            <h1 className="display-5 mb-5 text-dark">What Our Clients Say!</h1>
          </div>
          <OwlCarousel className="owl-theme testimonial-carousel" {...owlOptions}>
            <div className="testimonial-item img-border-radius bg-light rounded p-4">
              <div className="position-relative">
                <i className="fa fa-quote-right fa-2x text-secondary position-absolute" style={{ bottom: '30px', right: '0' }} />
                <div className="mb-4 pb-4 border-bottom border-secondary">
                  <p className="mb-0">
                    "The quality of the products is outstanding, and the service is always prompt. Highly recommend this store!"
                  </p>
                </div>
                <div className="d-flex align-items-center flex-nowrap">
                  <div className="bg-secondary rounded">
                    <img src="img/male-1.jpg" className="img-fluid rounded" style={{ width: '100px', height: '100px' }} alt="Kushagra Goswami" />
                  </div>
                  <div className="ms-4 d-block">
                    <h4 className="text-dark">Kushagra Goswami</h4>
                    <p className="m-0 pb-3">Software Engineer</p>
                    <div className="d-flex pe-5">
                      <i className="fas fa-star text-primary" />
                      <i className="fas fa-star text-primary" />
                      <i className="fas fa-star text-primary" />
                      <i className="fas fa-star text-primary" />
                      <i className="fas fa-star" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="testimonial-item img-border-radius bg-light rounded p-4">
              <div className="position-relative">
                <i className="fa fa-quote-right fa-2x text-secondary position-absolute" style={{ bottom: '30px', right: '0' }} />
                <div className="mb-4 pb-4 border-bottom border-secondary">
                  <p className="mb-0">
                    "I love the variety of fresh produce available here. The prices are reasonable, and the staff is very friendly."
                  </p>
                </div>
                <div className="d-flex align-items-center flex-nowrap">
                  <div className="bg-secondary rounded">
                    <img src="img/male-2.jpg" className="img-fluid rounded" style={{ width: '100px', height: '100px' }} alt="Tanishk Vaze" />
                  </div>
                  <div className="ms-4 d-block">
                    <h4 className="text-dark">Tanishk Vaze</h4>
                    <p className="m-0 pb-3">Marketing Specialist</p>
                    <div className="d-flex pe-5">
                      <i className="fas fa-star text-primary" />
                      <i className="fas fa-star text-primary" />
                      <i className="fas fa-star text-primary" />
                      <i className="fas fa-star text-primary" />
                      <i className="fas fa-star text-primary" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="testimonial-item img-border-radius bg-light rounded p-4">
              <div className="position-relative">
                <i className="fa fa-quote-right fa-2x text-secondary position-absolute" style={{ bottom: '30px', right: '0' }} />
                <div className="mb-4 pb-4 border-bottom border-secondary">
                  <p className="mb-0">
                    "The delivery service is quick and reliable. I always receive my orders on time and in perfect condition."
                  </p>
                </div>
                <div className="d-flex align-items-center flex-nowrap">
                  <div className="bg-secondary rounded">
                    <img src="img/male-3.jpg" className="img-fluid rounded" style={{ width: '100px', height: '100px' }} alt="Dhruv Gadge" />
                  </div>
                  <div className="ms-4 d-block">
                    <h4 className="text-dark">Dhruv Gadge</h4>
                    <p className="m-0 pb-3">Entrepreneur</p>
                    <div className="d-flex pe-5">
                      <i className="fas fa-star text-primary" />
                      <i className="fas fa-star text-primary" />
                      <i className="fas fa-star text-primary" />
                      <i className="fas fa-star text-primary" />
                      <i className="fas fa-star" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="testimonial-item img-border-radius bg-light rounded p-4">
              <div className="position-relative">
                <i className="fa fa-quote-right fa-2x text-secondary position-absolute" style={{ bottom: '30px', right: '0' }} />
                <div className="mb-4 pb-4 border-bottom border-secondary">
                  <p className="mb-0">
                    "This store has become my go-to place for fresh fruits and vegetables. The quality is unmatched!"
                  </p>
                </div>
                <div className="d-flex align-items-center flex-nowrap">
                  <div className="bg-secondary rounded">
                    <img src="img/male-4.jpg" className="img-fluid rounded" style={{ width: '100px', height: '100px' }} alt="Mihir Aryan" />
                  </div>
                  <div className="ms-4 d-block">
                    <h4 className="text-dark">Mihir Aryan</h4>
                    <p className="m-0 pb-3">Chef</p>
                    <div className="d-flex pe-5">
                      <i className="fas fa-star text-primary" />
                      <i className="fas fa-star text-primary" />
                      <i className="fas fa-star text-primary" />
                      <i className="fas fa-star text-primary" />
                      <i className="fas fa-star text-primary" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="testimonial-item img-border-radius bg-light rounded p-4">
              <div className="position-relative">
                <i className="fa fa-quote-right fa-2x text-secondary position-absolute" style={{ bottom: '30px', right: '0' }} />
                <div className="mb-4 pb-4 border-bottom border-secondary">
                  <p className="mb-0">
                    "Amazing customer service and top-notch products. I highly recommend this store to everyone!"
                  </p>
                </div>
                <div className="d-flex align-items-center flex-nowrap">
                  <div className="bg-secondary rounded">
                    <img src="img/male-5.jpg" className="img-fluid rounded" style={{ width: '100px', height: '100px' }} alt="Rishabh Kothari" />
                  </div>
                  <div className="ms-4 d-block">
                    <h4 className="text-dark">Rishabh Kothari</h4>
                    <p className="m-0 pb-3">Business Analyst</p>
                    <div className="d-flex pe-5">
                      <i className="fas fa-star text-primary" />
                      <i className="fas fa-star text-primary" />
                      <i className="fas fa-star text-primary" />
                      <i className="fas fa-star text-primary" />
                      <i className="fas fa-star text-primary" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </OwlCarousel>
        </div>
      </div>
      {/* Testimonial End */}
    </div>
  );
}