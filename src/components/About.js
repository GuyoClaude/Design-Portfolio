import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import Footer from './Footer'

 class About extends Component {
    render() {
        return (
            <div>
                <section className="banner_area">
            <div className="banner_inner d-flex align-items-center">
            	<div className="overlay bg-parallax" data-stellar-ratio="0.9" data-stellar-vertical-offset="0" data-background=""></div>
				<div className="container">
					<div className="banner_content text-center">
						<h2>About Us</h2>
						<div className="page_link">
							<Link to="#">Home</Link>
							<Link to="#">About Me</Link>
						</div>
					</div>
				</div>
            </div>
        </section>
        <section className="find_view_area p_120">
        	<div className="container">
        		<div className="find_inner">
        			<img className="img-fluid" src="img/find-1.jpg" alt="" />
        			<div className="find_text">
        				<div className="find_text_inner">
        					<h4>Know More About Me</h4>
							<p>I am a graphic designer and a Web developer based in Nairobi, Kenya.</p>
							<p>I learnt designing from the best tutors and am always trying to get better and learn more. I offer quality services to all of my client's at an affordable rate using the best softwares to achieve desired results.</p>
        				</div>
        			</div>
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
        					<Link to="#"><h4>Simplicity</h4></Link>
        					<p>Less is More. When it comes to effective website design, I prefer to keep it simple.The simpler the design, the more recognizable it will be.</p>
        				</div>
        			</div>
        			<div className="col-lg-4 col-md-6">
        				<div className="service_item">
        					<Link to="#"><h4>Professional Service</h4></Link>
        					<p>I usually try to understand what my client needs to my best capability and come up this an eye catching design.</p>
        				</div>
        			</div>
        			<div className="col-lg-4 col-md-6">
        				<div className="service_item">
        					<Link to="#"><h4>Great Support</h4></Link>
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
        					<Link to="#"><h4>Highly Recommended</h4></Link>
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
            </div>
        )
    }
}

export default About
