import React from 'react';
import './style.css';

 
function EducationComponent() {
  return(
  	<div id="education">
  		<div className="text-center mt-4">
  			<h1 className="font-blue heading-border"><span className="border-bottom-dark">Education</span></h1>
		</div>
		<div className="timeline p-4 block">
            <div className="tl-item">
                <div className="tl-dot b-tl pb-5" />
                <div className="tl-content"/>
            </div>
            <div className="tl-item active">
                <div className="tl-dot b-tl" />
                <div className="tl-content">
                    <div className="fb-6">MBA (Information Technology) </div>
                    <div className=" mt-1">Guru Jambheshwar University Directorate of Distance Education, Hisar</div>
                    <div className="tl-date text-muted mt-1">2021 - Present</div>
                </div>
            </div>
            <div className="tl-item active">
                <div className="tl-dot b-tl" />
                <div className="tl-content">
                    <div className="fb-6">Bachelor Of Technology (CSE) </div>
                    <div className=" mt-1">The Technological Institute Of Textile & Sciences, Bhiwani(Haryana)</div>
                    <div className="tl-date text-muted mt-1">2016 - 2020</div>
                </div>
            </div>
            <div className="tl-item active">
                <div className="tl-dot b-tl"/>
                <div className="tl-content">
                    <div className="fb-6">XII (Higher Secondary Education)</div>
                    <div className=" mt-1">Vaish Senior Secondary School, Charkhi Dadri(Haryana)</div>
                    <div className="tl-date text-muted mt-1">2015 - 2016</div>
                </div>
            </div>
            <div className="tl-item active">
                <div className="tl-dot b-tl"/>
                <div className="tl-content">
                    <div className="fb-6">X (Secondary Education)</div>
                    <div className=" mt-1">Vaish Senior Secondary School, Charkhi Dadri(Haryana)</div>
                    <div className="tl-date text-muted mt-1">2013 - 2014</div>
                </div>
            </div>
            <div className="tl-item">
                <div className="b-tl" />
            </div>
        </div>
  	</div>

 	)
}
 
export default EducationComponent;