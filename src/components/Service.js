import React, { Component } from 'react'
import { Link } from "react-router-dom";
import Footer from './Footer'

class Service extends Component {
    render() {
        return (
            <>
                   <section className="banner_area">
            <div className="banner_inner d-flex align-items-center">
            	<div className="overlay bg-parallax" data-stellar-ratio="0.9" data-stellar-vertical-offset="0" data-background=""></div>
				<div className="container">
					<div className="banner_content text-center">
						<h2>Services</h2>
						<div className="page_link">
							<Link to="#">Home</Link>
							<Link to="#">Services</Link>
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
        )
    }
}

export default Service
