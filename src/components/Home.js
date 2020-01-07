import React, { Component } from "react";
import { Link } from "react-router-dom";
import Footer from './Footer'

class Home extends Component {
  render() {
    return (
      <>
        <section className="home_banner_area">
          <div className="banner_inner d-flex align-items-center">
            <div
              className="overlay bg-parallax"
              data-stellar-ratio="0.9"
              data-stellar-vertical-offset="0"
              data-background=""
            ></div>
            <div className="container">
              <div className="banner_content text-center">
                <h2>Claude Guyo</h2>
                <h4>GRAPHIC DESIGNER</h4>
                <p>
                  Whether you’re looking to redesign your website or just need
                  printed materials like business cards, brochures, or posters;
                  or undertaking a logo or identity rework—I’m here to help.{" "}
                </p>
                <Link to="#" className="btn theme_btn">
                  Explore Profile
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="home_gallery_area p_120">
          <div className="container">
            <div className="isotope_fillter">
              <ul className="gallery_filter list">
                <li className="active" data-filter="*">
                  <Link to="#">All</Link>
                </li>
                <li data-filter=".ap">
                  <Link to="#">LOGO</Link>
                </li>
                <li data-filter=".unp">
                  <Link to="#">BROCHURE</Link>
                </li>
                <li data-filter=".unv">
                  <Link to="#">POSTERS</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="container box_1620">
            <div className="gallery_f_inner row imageGallery1">
              <div className="col-lg-3 col-md-4 col-sm-6 unp">
                <div className="h_gallery_item">
                  <img src="img/gallery/brochure-proj.png" alt="project1" />
                  <div className="hover">
                    <Link to="#">
                      <h4>Brochure Design</h4>
                    </Link>
                    <Link className="light" to="img/gallery/brochure-proj.png">
                      <i className="fa fa-expand"></i>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-4 col-sm-6 ap">
                <div className="h_gallery_item">
                  <img src="img/gallery/Myso.png" alt="" />
                  <div className="hover">
                    <Link to="#">
                      <h4>Logo Design</h4>
                    </Link>
                    <Link className="light" to="img/gallery/Myso.png">
                      <i className="fa fa-expand"></i>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-4 col-sm-6  ap">
                <div className="h_gallery_item">
                  <img src="img/gallery/finnlogo.png" alt="" />
                  <div className="hover">
                    <Link to="#">
                      <h4>Logo Design</h4>
                    </Link>
                    <Link className="light" to="img/gallery/finnlogo.png">
                      <i className="fa fa-expand"></i>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-4 col-sm-6 unv">
                <div className="h_gallery_item">
                  <img src="img/gallery/flyer.png" alt="" />
                  <div className="hover">
                    <Link to="#">
                      <h4>Estates Flyer</h4>
                    </Link>
                    <Link className="light" to="img/gallery/flyer.png">
                      <i className="fa fa-expand"></i>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-4 col-sm-6 unv">
                <div className="h_gallery_item">
                  <img src="img/gallery/flyer-2.png" alt="" />
                  <div className="hover">
                    <Link to="#">
                      <h4>Co-operate Flyer</h4>
                    </Link>
                    <Link className="light" to="img/gallery/flyer-2.png">
                      <i className="fa fa-expand"></i>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-4 col-sm-6 unv">
                <div className="h_gallery_item">
                  <img src="img/gallery/pizza-flyer.png" alt="" style={{height: "350px" }}/>
                  <div className="hover">
                    <Link to="#">
                      <h4>Fast-food Flyer</h4>
                    </Link>
                    <Link className="light" to="img/gallery/pizza-flyer.png">
                      <i className="fa fa-expand"></i>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-4 col-sm-6 unv">
                <div className="h_gallery_item">
                  <img src="img/gallery/posetr-1.png" alt="" style={{height: "350px" }}/>
                  <div className="hover">
                    <Link to="#">
                      <h4>Poster-Design</h4>
                    </Link>
                    <Link className="light" to="img/gallery/posetr-1.png">
                      <i className="fa fa-expand"></i>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-4 col-sm-6 unp">
                <div className="h_gallery_item">
                  <img src="img/gallery/roll-up-banner.png" alt="" style={{height: "350px" }} />
                  <div className="hover">
                    <Link to="#">
                      <h4>Roll-up Banner</h4>
                    </Link>
                    <Link className="light" to="img/gallery/roll-up-banner.png" >
                      <i className="fa fa-expand"></i>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-4 col-sm-6 unp">
                <div className="h_gallery_item">
                  <img src="img/gallery/DTE-Brochure.jpg" alt=""  style={{height: "350px" }}/>
                  <div className="hover">
                    <Link to="#">
                      <h4>Brochure Design</h4>
                    </Link>
                    <Link className="light" to="img/gallery/DTE-Brochure.jpg" >
                      <i className="fa fa-expand"></i>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-4 col-sm-6 ap">
                <div className="h_gallery_item">
                  <img src="img/gallery/bilmine.png" alt="" style={{marginTop: "30px" }}/>
                  <div className="hover">
                    <Link to="#">
                      <h4>Logo Design</h4>
                    </Link>
                    <Link className="light" to="img/gallery/bilmine.png" >
                      <i className="fa fa-expand"></i>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-4 col-sm-6 ap">
                <div className="h_gallery_item ">
                  <img style={{marginTop: "130px" }} src="img/gallery/bilmine-cover-8.png" alt="" />
                  <div className="hover">
                    <Link to="#">
                      <h4>Cover Image</h4>
                    </Link>
                    <Link className="light " to="img/gallery/bilmine-cover-8.png">
                      <i className="fa fa-expand"></i>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-4 col-sm-6 unv">
                <div className="h_gallery_item">
                  <img src="img/gallery/business-card.png" alt="" style={{height: "350px" }} />
                  <div className="hover">
                    <Link to="#">
                      <h4>Business Card</h4>
                    </Link>
                    <Link className="light" to="img/gallery/business-card.png">
                      <i className="fa fa-expand"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="button_more">
              <Link className="btn theme_btn" to="/projects">
                Load More
              </Link>
            </div>
          </div>
        </section>


        <section className="testimonials_area p_120">
        	<div className="container">
        		<div className="row testimonials_inner">
        			<div className="col-lg-6">
        				<div className="c_feedback_text">
        					<h4>Famous Quotes</h4>
        					<p> I now focus all of my time on helping clients of my own. Here is what inspires me.</p>
        				</div>
        			</div>
        			<div className="col-lg-6">
        				<div className="t_slider owl-carousel">
        					<div className="item">
        						<div className="media">
        							<div className="d-flex">
        							</div>
        							<div className="media-body">
        								<p>"If you do good work for good clients, it will lead to other good work for other good clients. If you do bad work for bad clients, it will lead to other bad work for other bad clients."</p>
        								<h6> Michael Bierut</h6>
        							</div>
        						</div>
        					</div>
        					<div className="item">
        						<div className="media">
        							<div className="d-flex">
        							</div>
        							<div className="media-body">
        								<p>"A designer knows he has achieved perfection not when there is nothing left to add, but when there is nothing left to take away."</p>
        								<h6>Antoine de Saint-Exupéry</h6>
        							</div>
        						</div>
        					</div>
        				</div>
        			</div>
        		</div>
        	</div>
        </section>

        <section className="service_area p_120">
        	<div className="container">
        		<div className="main_title">
        			<h2>Why choose me?</h2>
        			<p>I strive for two things in design: simplicity and clarity</p>
        		</div>
        		<div className="row service_inner">
        			<div className="col-lg-4 col-md-6">
        				<div className="service_item">
        					<Link to=""><h4>Simplicity</h4></Link>
        					<p>Less is More. When it comes to effective website design, I prefer to keep it simple.The simpler the design, the more recognizable it will be.</p>
        				</div>
        			</div>
        			<div className="col-lg-4 col-md-6">
        				<div className="service_item">
        					<Link to=""><h4>Professional Service</h4></Link>
        					<p>I usually try to understand what my client needs to my best capability and come up this an eye catching design.</p>
        				</div>
        			</div>
        			<div className="col-lg-4 col-md-6">
        				<div className="service_item">
        					<Link to=""><h4>Great Support</h4></Link>
        					<p>Wether my client wants to change or add anything to the design,am always here to help at no cost.</p>
        				</div>
        			</div>
        			<div className="col-lg-4 col-md-6">
        				<div className="service_item">
        					<Link to="#"><h4>More Research</h4></Link>
        					<p>Before doing any design work I always try to find out more about the company's interest to come up with suitable design</p>
        				</div>
        			</div>
        			<div className="col-lg-4 col-md-6">
        				<div className="service_item">
        					<Link to=""><h4>Highly Recommended</h4></Link>
        					<p>Most of my client's love my services, design and my approach of things. I bet you also will.</p>
        				</div>
        			</div>
        			<div className="col-lg-4 col-md-6">
        				<div className="service_item">
        					<Link to="#"><h4>Web Developer</h4></Link>
        					<p>My added advantage is of being a great web developer having the skills to lovingly hand code all of my client's projects</p>
        				</div>
        			</div>
        		</div>
        	</div>
        </section>

        
        <Footer />
      </>
    );
  }
}

export default Home;
