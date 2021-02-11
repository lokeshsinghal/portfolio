import React,{Component} from 'react';
import * as ReactBootStrap from 'react-bootstrap';
import {Navbar,Nav} from 'react-bootstrap';
import {Link} from 'react-scroll';

class NavbarComponenet extends Component{
	render(){
		return(
			<ReactBootStrap.Navbar collapseOnSelect expand="lg" className="bg" variant="dark" fixed="top">
				<Navbar.Brand href="#home">LS</Navbar.Brand>
				<Navbar.Toggle aria-controls="responsive-navbar-nav" />
				<Navbar.Collapse id="responsive-navbar-nav">
				 	<Nav className="mr-auto">
				    	<Link
						    activeClass="active"
						    to="about"
						    spy={true}
						    smooth={true}
						    offset={-70}
						    duration={500}
						>
							<Nav.Link className="text-white" href="#about">About Me</Nav.Link>
						</Link>
						<Link
						    activeClass="active"
						    to="experience"
						    spy={true}
						    smooth={true}
						    offset={-70}
						    duration={500}
						>
				      		<Nav.Link className="text-white" href="#experience">Experience</Nav.Link>
				      	</Link>
				      	<Link
						    activeClass="active"
						    to="education"
						    spy={true}
						    smooth={true}
						    offset={-70}
						    duration={500}
						>
				      		<Nav.Link className="text-white" href="#education">Education</Nav.Link>
				      	</Link>
				      	<Link
						    activeClass="active"
						    to="skills"
						    spy={true}
						    smooth={true}
						    offset={-70}
						    duration={500}
						>
				      		<Nav.Link className="text-white" href="#skills">Skills</Nav.Link>
				      	</Link>
				      	<Link
						    activeClass="active"
						    to="projects"
						    spy={true}
						    smooth={true}
						    offset={-70}
						    duration={500}
						>
				      		<Nav.Link className="text-white" href="#projects">Project</Nav.Link>
				      	</Link>
				      	<Link
						    activeClass="active"
						    to="contact"
						    spy={true}
						    smooth={true}
						    offset={-70}
						    duration={500}
						>
				      		<Nav.Link className="text-white" href="#contact">Contact</Nav.Link>
				      	</Link>
				    </Nav>
				</Navbar.Collapse>
			</ReactBootStrap.Navbar>
		);
	}
}

export default NavbarComponenet;