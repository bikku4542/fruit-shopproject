import React from 'react'

export default function Contact() {
  return (
    <div>
      {/* Contact Start */}
      <div className="container-fluid contact py-5">
        <div className="container py-5">
          <div className="p-5 bg-light rounded">
            <div className="row g-4">
              <div className="col-12">
                <div className="text-center mx-auto" style={{ "max-width": "700px" }}>
                  <h1 className="text-primary">Get in touch</h1>
                  <p className="mb-4">
                    Feel free to reach out to us via email or phone for any inquiries. We are here to assist you with your needs.
                  </p>
                </div>
              </div>
              <div className="col-lg-12">
                <div className="h-100 rounded">
                  <iframe
                    className="rounded w-100"
                    style={{ "height": "400px" }}
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3783.723379666835!2d73.807716!3d18.507372!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bf1c8b8b8b8b%3A0x2b8e9e5b8b9b7b7!2sMIT%20World%20Peace%20University%2C%20Kothrud%2C%20Pune!5e0!3m2!1sen!2sin!4v1694259649153!5m2!1sen!2sin"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </div>
              <div className="col-lg-7">
                <form action className>
                  <input type="text" className="w-100 form-control border-0 py-3 mb-4" placeholder="Your Name" />
                  <input type="email" className="w-100 form-control border-0 py-3 mb-4" placeholder="Enter Your Email" />
                  <textarea className="w-100 form-control border-0 mb-4" rows={5} cols={10} placeholder="Your Message" defaultValue={""} />
                  <button className="w-100 btn form-control border-secondary py-3 bg-white text-primary " type="submit">Submit</button>
                </form>
              </div>
              <div className="col-lg-5">
                <div className="d-flex p-4 rounded mb-4 bg-white">
                  <i className="fas fa-map-marker-alt fa-2x text-primary me-4" />
                  <div>
                    <h4>Address</h4>
                    <p className="mb-2">MIT WPU, Kothrud, Pune</p>
                  </div>
                </div>
                <div className="d-flex p-4 rounded mb-4 bg-white">
                  <i className="fas fa-envelope fa-2x text-primary me-4" />
                  <div>
                    <h4>Mail Us</h4>
                    <p className="mb-2">bikku.ias@gmail.com</p>
                  </div>
                </div>
                <div className="d-flex p-4 rounded bg-white">
                  <i className="fa fa-phone-alt fa-2x text-primary me-4" />
                  <div>
                    <h4>Telephone</h4>
                    <p className="mb-2"> +91 8210308101</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Contact End */}
    </div>
  )
}