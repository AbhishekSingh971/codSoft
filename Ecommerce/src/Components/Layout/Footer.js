import React from 'react'
import '../Css/Footer.css'

const Footer = () => {
  return (
    <footer className="footer-06" style={{backgroundColor: "rgba(0,0,0,1)",marginTop: "10vh"}}>
			<div className="container">
				<div className="row align-items-center align-items-stretch mb-5">
					<div className="col-md-4 py-4 py-md-5 aside-stretch d-flex align-items-center">
						<div className="w-100">
							<span className="subheading ">Subscribe to our</span>
							<h3 className="heading-section text-warning">Kharido</h3>
						</div>
					</div>
					<div className="col-md-8 py-4 py-md-5 d-flex align-items-center pl-md-5 aside-stretch-right">
						<form action="/" className="subscribe-form w-100">
              <div className="form-group row">
                <div className='col-8'>
                <input type="text" className="form-control rounded-left" placeholder="Enter email address"/>
                </div>
                <div className='col'>
                <button type="submit" className="form-control submit btn btn-outline-warning"><span>Submit</span></button>
                </div>
              </div>
            </form>
					</div>
				</div>
				<div className="row pt-4">
					<div className="col-md-3 col-lg-6 order-md-last">
						<div className="row justify-content-end">
							<div className="col-md-12 col-lg-9 text-md-right mb-md-0 mb-4">
								<h2 className="footer-heading"><a href="/" className="logo text-warning footer-link-decoration">Kharido</a></h2>
								<p className="copyright">
                   <i className="ion-ios-heart footer-link-decoration" aria-hidden="true"></i> by <a href="/" target="_blank" className=' footer-link-decoration'>Kharido.com</a>
							 </p>
							</div>
						</div>
					</div>
					<div className="col-md-9 col-lg-6">
						<div className="row">
							<div className="col-md-4 mb-md-0 mb-4">
								<h2 className="footer-heading" style={{color: "rgba(9, 106, 119,0.9)"}}>Information</h2>
								<ul className="list-unstyled">
		              <li><a href="/" className="py-1 d-block footer-link-decoration footer-link-color"><span className="ion-ios-checkmark-circle-outline mr-2"></span>Our Company</a></li>
		              <li><a href="/" className="py-1 d-block footer-link-decoration footer-link-color"><span className="ion-ios-checkmark-circle-outline mr-2"></span>Data</a></li>
		              <li><a href="/" className="py-1 d-block footer-link-decoration footer-link-color"><span className="ion-ios-checkmark-circle-outline mr-2"></span>Pricing</a></li>
		              <li><a href="/" className="py-1 d-block footer-link-decoration footer-link-color"><span className="ion-ios-checkmark-circle-outline mr-2"></span>Contact Us</a></li>
		              <li><a href="/" className="py-1 d-block footer-link-decoration footer-link-color"><span className="ion-ios-checkmark-circle-outline mr-2"></span>Support</a></li>
		            </ul>
							</div>
							<div className="col-md-4 mb-md-0 mb-4">
								<h2 className="footer-heading" style={{color: "rgba(9, 106, 119,0.9)"}}>Application</h2>
								<ul className="list-unstyled">
		              <li><a href="/" className="py-1 d-block footer-link-decoration footer-link-color"><span className="ion-ios-checkmark-circle-outline mr-2"></span>Download</a></li>
		              <li><a href="/" className="py-1 d-block footer-link-decoration footer-link-color"><span className="ion-ios-checkmark-circle-outline mr-2"></span>Bike Provider</a></li>
		              <li><a href="/" className="py-1 d-block footer-link-decoration footer-link-color"><span className="ion-ios-checkmark-circle-outline mr-2"></span>How to Used</a></li>
		            </ul>
							</div>
							<div className="col-md-4 mb-md-0 mb-4">
								<h2 className="footer-heading" style={{color: "rgba(9, 106, 119,0.9)"}}>API</h2>
								<ul className="list-unstyled">
		              <li><a href="/" className="py-1 d-block footer-link-decoration footer-link-color"><span className="ion-ios-checkmark-circle-outline mr-2"></span>Documentation</a></li>
		              <li><a href="/" className="py-1 d-block footer-link-decoration footer-link-color"><span className="ion-ios-checkmark-circle-outline mr-2"></span>Credential</a></li>
		              <li><a href="/" className="py-1 d-block footer-link-decoration footer-link-color"><span className="ion-ios-checkmark-circle-outline mr-2"></span>Developer info</a></li>
		            </ul>
							</div>
						</div>
					</div>
				</div>
			</div>
		</footer>
  )
}

export default Footer