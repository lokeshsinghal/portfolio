import React,{Component} from 'react';
import './style.css';
import Resume from './Resume.pdf';
import ScrollAnimation from 'react-animate-on-scroll';

class About extends Component{
	render(){
		return(
			
			<div className="text-center about-style" id="about">
				<div class="custom-shape-divider-top-1611677730">
				    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
				        <path d="M1200 120L0 16.48 0 0 1200 0 1200 120z" class="shape-fill"></path>
				    </svg>
				</div>
				<ScrollAnimation animateIn='fadeIn'>
				<h1 className="font-blue heading-border"><span className="border-bottom-dark">About</span > <span className="font-dark border-bottom-light"> Me</span></h1>
				</ScrollAnimation>
				<ScrollAnimation animateIn='fadeIn'>
				<div className="font-dark about-content-container">
					Hi I'm Lokesh Singal.I am Front End developer in Thoughts2Binary Consultation and Solutions.I have experience of more than 1 year working as a full time frontend developer.I can describe my personality as approachable, social and assertive.I Love to convert design into code.I prefer to strive for excellence not for perfection.Being the Society head of the technical society of my college I have developed leadership skills and can work with team efficiently and in a customised manner.
				</div>
				</ScrollAnimation>

					<ScrollAnimation animateIn='flipInY' animateOut='flipOutY'><a href={Resume} download="My_Resume.pdf"><button type="button" className="resume-button mt-3">Download Resume</button></a></ScrollAnimation>
				
			</div>
			
			);
	}
}

export default About;