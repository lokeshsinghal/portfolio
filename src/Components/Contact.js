import React from 'react';
import Phone from './phone.png';
import Pin from './pin.png';
import Message from './message.png';

import './style.css';

 
function ContactComponent() {
  return(
  	<div id="contact" className="bg pb-3">
  		<div className="text-center mt-4 pt-2">
  			<h1 className="font-blue heading-border"><span className="border-bottom-white">Contact</span > <span className="font-dark border-bottom-light text-white"> Me</span></h1>
		  </div>
      <div className="text-center mt-3">
        <div className="contact-flex">
          <img src={Phone} alt="phone" width="50" height="50"/>
          <p className=" ml-2 contact-text"><a href="tel:+918950437091" className="text-white">+91-8950437091</a></p>
        </div>
        <div className="contact-flex">
          <img src={Message} alt="message" width="50" height="50"/>
          <p className="ml-2 contact-text"><a href="mailto:lokeshsinghal98@gmail.com" className="text-white">lokeshsinghal98@gmail.com</a></p>
        </div>
        <div className="contact-flex">
          <img src={Pin} width="50" height="50" alt="location"/>
          <p className="text-white ml-2 contact-text">Back Side Geeta Bhawan, Charkhi Dadri, Haryana</p>
        </div>
      </div>
  	</div>

 	)
}
 
export default ContactComponent;