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
					Hi I'm Lokesh Singal.I am Front End developer and have experience in React Js and JavascriptLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
				</div>
				</ScrollAnimation>

					<ScrollAnimation animateIn='flipInY' animateOut='flipOutY'><a href={Resume} download="My_Resume.pdf"><button type="button" className="resume-button mt-3">Download Resume</button></a></ScrollAnimation>
				
			</div>
			
			);
	}
}

export default About;