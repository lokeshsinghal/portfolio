import React from 'react';
import T2B from './t2b.png';
import Negwen from './newgen-logo.svg';

import './style.css';

import ScrollAnimation from 'react-animate-on-scroll';


 
function WorkExpComponent() {
  return(
  	<div id="experience" className="bg pb-3">
  		<div className="text-center mt-4 pt-2">
  			<h1 className="font-blue heading-border"><span className="border-bottom-white">Work</span > <span className="font-dark border-bottom-light text-white"> Experience</span></h1>
		  </div>
      <div className="card text-center exp-card mt-3">
        <div className="card-header"><img src={Negwen} alt="company-icon" width="180" height="100"/></div>
        <div className="card-body">
                <ScrollAnimation animateIn='bounce'
  initiallyVisible={true}><h4>Software Design Engineer-1</h4></ScrollAnimation>
          <div>
            <span className="font-bold">Domain :</span> <span>Frontend Developer</span>
          </div>
          <div>
            <span className="font-bold">Technology :</span> <span>React JS</span>
          </div>
          <div>
            <span className="font-bold">Duration :</span> <span>Aug 2021 - Present</span>
          </div>
        </div>
      </div>
      <div className="card text-center exp-card mt-3">
        <div className="card-header"><img src={T2B} alt="company-icon" width="180" height="100"/></div>
        <div className="card-body">
                <ScrollAnimation animateIn='bounce'
  initiallyVisible={true}><h4>Associate Software Developer</h4></ScrollAnimation>
          <div>
            <span className="font-bold">Domain :</span> <span>Frontend Developer</span>
          </div>
          <div>
            <span className="font-bold">Technology :</span> <span>React JS</span>
          </div>
          <div>
            <span className="font-bold">Duration :</span> <span>Jan 2020 - Aug 2021</span>
          </div>
        </div>
      </div>
  	</div>

 	)
}
 
export default WorkExpComponent;