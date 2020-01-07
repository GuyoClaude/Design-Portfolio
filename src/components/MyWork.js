import React, { Component } from 'react'
import Footer from './Footer'
import {Link} from 'react-router-dom'

 class MyWork extends Component {
    render() {
        return (
            <>
            <section className="banner_area">
            <div className="banner_inner d-flex align-items-center">
            	<div className="overlay bg-parallax" data-stellar-ratio="0.9" data-stellar-vertical-offset="0" data-background=""></div>
				<div className="container">
					<div className="banner_content text-center">
						<h2>My Work</h2>
						<div className="page_link">
							<Link to="index.html">Home</Link>
							<Link to="gallery.html">Projects</Link>
						</div>
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
              <div className="col-lg-3 col-md-4 col-sm-6 unv">
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
              <div className="col-lg-3 col-md-4 col-sm-6 unp ap">
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
              <div className="col-lg-3 col-md-4 col-sm-6 unp">
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
              <div className="col-lg-3 col-md-4 col-sm-6 ap">
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
              <div className="col-lg-3 col-md-4 col-sm-6 unp">
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
              <div className="col-lg-3 col-md-4 col-sm-6 unv">
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
              <div className="col-lg-3 col-md-4 col-sm-6 unp">
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
               <Footer /> 
            </>
        )
    }
}

export default MyWork
