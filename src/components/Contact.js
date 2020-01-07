import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import Footer from './Footer'

 class Contact extends Component {
    render() {
        return (
            <>
            <section className="banner_area">
            <div className="banner_inner d-flex align-items-center">
            	<div className="overlay bg-parallax" data-stellar-ratio="0.9" data-stellar-vertical-offset="0" data-background=""></div>
				<div className="container">
					<div className="banner_content text-center">
						<h2>Contact Me</h2>
						<div className="page_link">
							<Link to="index.html">Home</Link>
							<Link to="contact.html">Contact</Link>
						</div>
					</div>
				</div>
            </div>
        </section>


                <section className="contact_area p_120">
            <div className="container">
                
                <div className="row">
                    <div className="col-lg-3">
                        <div className="contact_info">
                            <div className="info_item">
                                <i className="lnr lnr-home"></i>
                                <h6>Nairobi, Kenya</h6>
                                <p>Ongata Rongai</p>
                            </div>
                            <div className="info_item">
                                <i className="lnr lnr-phone-handset"></i>
                                <h6><Link to="#">+(254) 717 956 609</Link></h6>
                                <p>Mon to Fri 7am to 6 pm</p>
                            </div>
                            <div className="info_item">
                                <i className="lnr lnr-envelope"></i>
                                <h6><Link to="#">guyo.claude@outlook.com</Link></h6>
                                <p>Send me your query anytime!</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-9">
                        <form className="row contact_form" action="contact_process.php" method="post" id="contactForm" novalidate="novalidate">
                            <div className="col-md-6">
                                <div className="form-group">
                                    <input type="text" className="form-control" id="name" name="name" placeholder="Enter your name" />
                                </div>
                                <div className="form-group">
                                    <input type="email" className="form-control" id="email" name="email" placeholder="Enter email address" />
                                </div>
                                <div className="form-group">
                                    <input type="text" className="form-control" id="subject" name="subject" placeholder="Enter Subject" />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-group">
                                    <textarea className="form-control" name="message" id="message" rows="1" placeholder="Enter Message"></textarea>
                                </div>
                            </div>
                            <div className="col-md-12 text-right">
                                <button type="submit" value="submit" className="btn theme_btn button_hover">Send Message</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
        <Footer />
                
            </>
        )
    }
}

export default Contact
