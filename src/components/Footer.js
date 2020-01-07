import React, { Component } from "react";
import { Link } from "react-router-dom";

class Footer extends Component {
  render() {
    return (
      <>
        <section className="instagram_area">
          <div className="container box_1620">
            
            <div className="instagram_image row m0">
              <Link to="#">
                <img src="img/gallery/business-card.png" alt="" style={{height: "240px" }}/>
              </Link>
              <Link to="#">
                <img src="img/gallery/posetr-1.png" alt="" style={{height: "240px" }}/>
              </Link>
              <Link to="#">
                <img src="img/gallery/pizza-flyer.png" alt="" style={{height: "240px" }}/>
              </Link>
              <Link to="#">
                <img src="img/gallery/Myso.png" alt="" style={{height: "240px" }}/>
              </Link>
              <Link to="#">
                <img src="img/gallery/flyer.png" alt="" style={{height: "240px" }}/>
              </Link>
              <Link to="#">
                <img src="img/gallery/bilmine.png" alt="" style={{height: "240px" }}/>
              </Link>
            </div>
          </div>
        </section>
        <footer className="footer_area p_120">
          <div className="container">
            <div className="row footer_inner">
              <div className="col-lg-5 col-sm-6">
                <aside className="f_widget ab_widget">
                  <div className="f_title">
                    <h3>About Me</h3>
                  </div>
                  <p>
                    I am a graphic designer/Web developer striving to create
                    beautiful and eye catching designs for my client's.My aim is
                    customer satisfaction above any other thing. My work speaks
                    for itself.
                  </p>
                  <p>
                    Copyright &copy;
                    <script>document.write(new Date().getFullYear());</script>{" "}
                    All rights reserved | Claude Guyo.
                  </p>
                </aside>
              </div>
              <div className="col-lg-5 col-sm-6">
                <aside className="f_widget news_widget">
                  <div className="f_title">
                    <h3>Get in touch</h3>
                  </div>
                  <h4>Email: </h4>
                  <strong>guyo.claude@outlook.com</strong> <br/>
                  <h4>Phone: </h4>
                  <strong>0717 956 609</strong> <br/>
                </aside>
              </div>
              <div className="col-lg-2">
                <aside className="f_widget social_widget">
                  <div className="f_title">
                    <h3>Follow Me</h3>
                  </div>
                  <p>Let us be social</p>
                  <ul className="list">
                    <li>
                      <Link to="#">
                        <i className="fa fa-facebook"></i>
                      </Link>
                    </li>
                    <li>
                      <Link target="_blank" to="https://github.com/GuyoClaude">
                        <i className="fa fa-github"></i>
                      </Link>
                    </li>
                    <li>
                      <Link to="#">
                        <i className="fa fa-dribbble"></i>
                      </Link>
                    </li>
                    <li>
                      <Link to="#">
                        <i className="fa fa-behance"></i>
                      </Link>
                    </li>
                  </ul>
                </aside>
              </div>
            </div>
          </div>
        </footer>
      </>
    );
  }
}

export default Footer;
