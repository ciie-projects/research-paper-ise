import React, { Fragment, useState } from "react";
import { Button, Dropdown, Modal } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { SRLWrapper } from "simple-react-lightbox";
//** Import Image */
import profile01 from "../../../../images/profile/1.jpg";
import profile02 from "../../../../images/profile/2.jpg";
import profile03 from "../../../../images/profile/3.jpg";
import profile04 from "../../../../images/profile/4.jpg";
import profile05 from "../../../../images/profile/5.jpg";
import profile06 from "../../../../images/profile/6.jpg";
import profile07 from "../../../../images/profile/7.jpg";
import profile08 from "../../../../images/profile/8.jpg";
import profile09 from "../../../../images/profile/9.jpg";
import profile from "../../../../images/profile/profile.png";
import PageTitle from "../../../layouts/PageTitle";


var json;
const AppProfile = () => {
  const [activeToggle, setActiveToggle] = useState("posts");
  const [sendMessage, setSendMessage] = useState(false);
  const [postModal, setPostModal] = useState(false);
  const [cameraModal, setCameraModal] = useState(false);
  const [linkModal, setLinkModal] = useState(false);

  const [replayModal, setReplayModal] = useState(false);
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [aboutme, setaboutme] = useState("");
  const [researchInt, setresearchInt] = useState("");
  const [desgination, setdesignation] = useState("");
  const [experience, setexperience] = useState("");
  const [userData , setuserData] = useState("");
  const history = useHistory();
 
  async function onSave(e){
    e.preventDefault();
   
	try {
		const res = await axios.post("/api/profiles/profile", {
		  email,
		  password,
		  aboutme,
          researchInt,
		  desgination,
		  experience
		});
		console.log(res.data);
	  } catch (err) {
		console.log(err);
	  }
  }
  console.log("HEre");
  console.log(email);


  const fetchData = async () => {
	try {
	  const response = await fetch("/api/profiles/");
	  json = await response.json();

	  console.log("Inside");
	  console.log(json);

	} catch (error) {
	  console.log("error", error);
	}
  };

   console.log("REached after");
   
   console.log("read");

 
   fetchData();

  return (
    <Fragment>
      <PageTitle  activeMenu="Profile" motherMenu="App" />

      <div className="row">
        <div className="col-lg-12">
          <div className="profile card card-body px-3 pt-3 pb-0">
            <div className="profile-head">
              <div className="photo-content">
                {/* <div className="cover-photo"></div> */}
				<img src="https://www.easytourz.com/uploads/Businesslogo/1565164968.jpg"></img>
              </div>
              <div className="profile-info">
                <div className="profile-photo">
                  <img
                    src="https://ciie-backend.s3.amazonaws.com/profile-images/fifth.jpeg"
                    className="img-fluid rounded-circle"
                    alt="profile"
                  />
                </div>
                <div className="profile-details">
                  <div className="profile-name px-3 pt-2">
                    <h4 className="text-primary mb-0">Rashmi R</h4>
                    <p>Assistant Professor</p>
                  </div>
                  <div className="profile-email px-2 pt-2">
                    <h4 className="text-muted mb-0">rashmi@bmsce.ac.in</h4>
                    <p>Email</p>
                  </div>
                  
                </div>
              </div>
            </div>
          </div>
          </div>
          </div>
         <div className="row">
                  <div className="col-xl-4">
			  <div className="row"> 
				
			</div>	
		   </div>
        <div className="col-xl-12">
          <div className="card">
            <div className="card-body">
              <div className="profile-tab">
                <div className="custom-tab-1">
						<ul className="nav nav-tabs">
							
							<li className="nav-item" onClick={() => setActiveToggle("aboutMe")}>
								<Link to="#about-me"  data-toggle="tab" className={`nav-link ${ activeToggle === "aboutMe" ? "active show" : ""}`}>About Me</Link>
							</li>
							<li className="nav-item">
								<Link to="#profile-settings" data-toggle="tab" onClick={() => setActiveToggle("setting")} className={`nav-link ${ activeToggle === "setting" ? "active show" : ""}`}>Setting</Link>
							</li>
						</ul>
					     <div className="tab-content">
					     
						 <div id="about-me" className={`tab-pane fade ${ activeToggle === "aboutMe" ? "active show" : ""}`}>
							<div className="profile-about-me">
								<div className="pt-4 border-bottom-1 pb-3">
									<h4 className="text-primary">About Me</h4>
									<p className="mb-2">
										A wonderful serenity has taken possession of my
										entire soul, like these sweet mornings of spring
										which I enjoy with my whole heart. I am alone, and
										feel the charm of existence was created for the
										bliss of souls like mine.I am so happy, my dear
										friend, so absorbed in the exquisite sense of mere
										tranquil existence, that I neglect my talents.
									</p>
									<p>
										A collection of textile samples lay spread out on
										the table - Samsa was a travelling salesman - and
										above it there hung a picture that he had recently
										cut out of an illustrated magazine and housed in a
										nice, gilded frame.
									</p>
								</div>
							</div>
							<div className="profile-skills mb-5">
								<h4 className="text-primary mb-2">Skills</h4>
								<Link to="/app-profile" className="btn btn-primary light btn-xs mb-1 mr-1"> Admin</Link>
								<Link to="/app-profile" className="btn btn-primary light btn-xs mb-1 mr-1" > Dashboard</Link>
								<Link to="/app-profile" className="btn btn-primary light btn-xs mb-1 mr-1">Photoshop</Link>
								<Link to="/app-profile" className="btn btn-primary light btn-xs mb-1 mr-1">Bootstrap</Link>
								<Link to="/app-profile" className="btn btn-primary light btn-xs mb-1 mr-1">Responsive</Link>
								<Link to="/app-profile" className="btn btn-primary light btn-xs mb-1 mr-1">Crypto</Link>
							</div>
							<div className="profile-lang  mb-5">
								<h4 className="text-primary mb-2">Research Interest</h4>
								<Link to="/app-profile" className="text-muted pr-3 f-s-16">
									<i className="flag-icon flag-icon-us" />AI and ML
								</Link>
								<Link to="/app-profile" className="text-muted pr-3 f-s-16">
									<i className="flag-icon flag-icon-fr" />Python
								</Link>
								<Link to="/app-profile" className="text-muted pr-3 f-s-16">
									<i className="flag-icon flag-icon-bd" />Networking
								</Link>
							</div>
							<div className="profile-personal-info">
								<h4 className="text-primary mb-4">
									Personal Information
								</h4>
								<div className="row mb-2">
									<div className="col-3">
										<h5 className="f-w-500"> Name<span className="pull-right">:</span></h5>
									</div>
									<div className="col-9">
										<span>Mitchell C.Shay</span>
									</div>
								</div>
								<div className="row mb-2">
									<div className="col-3">
										<h5 className="f-w-500">Email<span className="pull-right">:</span></h5>
									</div>
									<div className="col-9">
										<span>example@gmail.com</span>
									</div>
								</div>
								<div className="row mb-2">
									<div className="col-3">
										<h5 className="f-w-500">Designation<span className="pull-right">:</span></h5>
									</div>
									<div className="col-9">
										<span>Assistant professor</span>
									</div>
								</div>

								<div className="row mb-2">
									<div className="col-3">
										<h5 className="f-w-500">Number of publications<span className="pull-right">:</span></h5>
									</div>
									<div className="col-9">
										<span>10</span>
									</div>
								</div>
								<div className="row mb-2">
									<div className="col-3">
										<h5 className="f-w-500">Year Experience<span className="pull-right">:</span></h5>
									</div>
									<div className="col-9">
										<span>07 Year Experiences</span>
									</div>
								</div>
							</div>
						</div>
						<div id="profile-settings" className={`tab-pane fade ${ activeToggle === "setting" ? "active show" : ""}`}>
							<div className="pt-3">
								<div className="settings-form">
									<h4 className="text-primary">Account Setting</h4>
									<form onSubmit={onSave } >
										<div className="form-row">
											<div className="form-group col-md-6">
												<label>Email</label>
												<input type="email" placeholder="Email" 
												value={email}
												onChange={(e) => setemail(e.target.value)}
												className="form-control"/>
											</div>
										</div>
										<div className="form-group">
											<label>About Me</label>
											<input type="text" placeholder="" 
											value={aboutme}
											onChange={(e) => setaboutme(e.target.value)}
											className="form-control"/>
										</div>
										<div className="form-group">
											<label>Research Intersets</label>
											<input type="text" placeholder=" " 
											value={researchInt}
											onChange={(e) => setresearchInt(e.target.value)}
											className="form-control"/>
										</div>
									
										<div className="form-group">
											<label>Designation</label>
											<input type="text" placeholder=" " 
											value={desgination}
											onChange={(e) => setdesignation(e.target.value)}
											className="form-control"/>
										</div>
										<div className="form-group">
											<label>Years of Experience</label>
											<input type="text" placeholder=" " 
											value={experience}
											onChange={(e) => setexperience(e.target.value)}
											className="form-control"/>
										</div>
										<div className="form-group">
											<div className="custom-control custom-checkbox">
												<input
												  type="checkbox"
												  className="custom-control-input"
												  id="gridCheck"
												/>
												<label
												  className="custom-control-label"
												  htmlFor="gridCheck"
												>
												  Check me out
												</label>
											</div>
										</div>
										<button className="btn btn-primary" type="submit">save</button>
									</form>
								</div>
							</div>
						</div>
					</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
	
    </Fragment>
  );
};

export default AppProfile;
