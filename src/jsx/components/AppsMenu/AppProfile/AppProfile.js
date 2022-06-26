import React, { Fragment, useEffect, useState, useContext } from "react";

import { Link } from "react-router-dom";
import axios from "axios";
import { useHistory } from "react-router-dom";

import PageTitle from "../../../layouts/PageTitle";

import { UserContext } from "../../../../App";
const AppProfile = () => {
  let { user, setUser } = useContext(UserContext);

  const [activeToggle, setActiveToggle] = useState("aboutMe");
  const [sendMessage, setSendMessage] = useState(false);
  const [postModal, setPostModal] = useState(false);
  const [cameraModal, setCameraModal] = useState(false);
  const [linkModal, setLinkModal] = useState(false);
  const [replayModal, setReplayModal] = useState(false);
  const [email, setemail] = useState("");
  const [status, setstatus] = useState(false);
  const [aboutme, setaboutme] = useState("");
  const [researchInt, setresearchInt] = useState("");
  const [desgination, setdesignation] = useState("");
  const [experience, setexperience] = useState("");
  const [username, setusername] = useState("");
  const [nopublications, setnopublications] = useState("");
  const history = useHistory();
  const [info, setinfo] = useState("");

  // const [filE, setFile] = useState();
  const [file, setfile] = useState(null);
  const [filename, setFileName] = useState("");
  let about;

  // console.log(user.email);

  const saveFile = (e) => {
    setfile(e.target.files[0]);
    setFileName(e.target.files[0].name);
  };
  const uploadFile = async (e) => {
    const formData = new FormData();
    formData.append("data", file);
    formData.append("name", filename);

    try {
      await axios.post(`http://localhost:3001/api/profiles/${user && user.email}`, formData).then((res)=>{
                     console.log(res);
                     if(res.status==200){
                      setstatus(true);
                      location.reload();
                     }
      });
    } catch (ex) {
      console.log("Error: " + ex);
    }
  };

  async function onSave(e) {
    e.preventDefault();
    setemail(user && user.email);

    try {
      const res = await axios
        .put("http://localhost:3001/api/profiles/edit", {
          email,
          aboutme,
          researchInt,
          desgination,
          experience,
          username,
        })
        .then((res) => {
          console.log(res);
          if (res.status == 200) {
             
          }
        });
      if (file) {
        // const data=new FormData();
        // console.log(data);
        const data = Date.now() + file.name;
        data.append("file", file);
        data.append("name", data);

        try {
          await axios
            .post(`http://localhost:3001/api/profiles/${user && user.email}`, data)
            .then((res) => {
            
            });
        } catch (err) {
          console.log(err);
        }
      }
 
      window.location.replace("http://localhost:3000/faculty-list");
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`http://localhost:3001/api/profiles/${user && user.email}`);
        // console.log(res.data);
        setinfo(res.data);

        setnopublications(info.work.length);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  });
  return (
    <Fragment>
      <PageTitle activeMenu="Profile" motherMenu="App" />

      <div className="row">
        <div className="col-lg-12">
          <div className="profile card card-body px-3 pt-3 pb-0">
            <div className="profile-head">
              <div className="profile-info">
                <div className="profile-photo rounded-circle">
                  <center>
                    <img
                      src={user && info.pic}
                      className="img-fluid rounded-circle"
                      alt="profile"
                      style={{
                        marginTop: "2rem",
                        objectFit: " contain",
                        height: "7rem",
                        width: "6rem",
                      }}
                    />
                  </center>
                </div>

                <div className="profile-details">
                  <div className="profile-name px-3 pt-2">
                    <h4 className="text-primary mb-0">
                      {user && info.username}
                    </h4>
                    <p>{user && info.desgination}</p>
                  </div>
                  <div className="profile-email px-2 pt-2">
                    <h4 className="text-muted mb-0">{user && user.email}</h4>
                    <p>Email</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="form-group ">
        <br></br>
        <br></br>
        <h4 className="text-primary">Update Profile Picture</h4>
        <input
          className="form-control col-lg-9 mb-2"
          type="file"
          onChange={saveFile}
          name="data"
          style={{ padding: "0.75rem" }}
        />
        <button className="btn btn-primary" onClick={uploadFile}>
          Upload
        </button>
        <br></br>
        <br></br>
        {status && <span style={{color:"inherit",marginTop:"10px"}}> Profile pic Updated sucessfully! </span>}
      </div>
      <div className="row">
        <div className="col-xl-4">
          <div className="row"></div>
        </div>
        <div className="col-xl-12">
          <div className="card">
            <div className="card-body">
              <div className="profile-tab">
                <div className="custom-tab-1">
                  <ul className="nav nav-tabs">
                    <li
                      className="nav-item"
                      onClick={() => setActiveToggle("aboutMe")}
                    >
                      <Link
                        to="#about-me"
                        data-toggle="tab"
                        className={`nav-link ${
                          activeToggle === "aboutMe" ? "active show" : ""
                        }`}
                      >
                        About Me
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link
                        to="#profile-settings"
                        data-toggle="tab"
                        onClick={() => setActiveToggle("setting")}
                        className={`nav-link ${
                          activeToggle === "setting" ? "active show" : ""
                        }`}
                      >
                        Edit
                      </Link>
                    </li>
                  </ul>
                  <div className="tab-content">
                    <div
                      id="about-me"
                      className={`tab-pane fade ${
                        activeToggle === "aboutMe" ? "active show" : ""
                      }`}
                    >
                      <div className="profile-about-me">
                        <div className="pt-4 border-bottom-1 pb-3">
                          <h4 className="text-primary">About Me</h4>
                          <p className="mb-2">{user && info.aboutme}</p>
                        </div>
                      </div>

                      <div className="profile-lang  mb-5">
                        <h4 className="text-primary mb-2">Research Interest</h4>
                        <Link
                          to="/app-profile"
                          className="text-muted pr-3 f-s-16"
                        >
                          <i className="flag-icon flag-icon-us" />
                          {user && info.researchInt}
                        </Link>
                      </div>
                      <div className="profile-personal-info">
                        <h4 className="text-primary mb-4">
                          Personal Information
                        </h4>
                        <div className="row mb-2">
                          <div className="col-3">
                            <h5 className="f-w-500">
                              {" "}
                              Name<span className="pull-right">:</span>
                            </h5>
                          </div>
                          <div className="col-9">
                            <span>{user && info.username}</span>
                          </div>
                        </div>
                        <div className="row mb-2">
                          <div className="col-3">
                            <h5 className="f-w-500">
                              Email<span className="pull-right">:</span>
                            </h5>
                          </div>
                          <div className="col-9">
                            <span>{user && info.email}</span>
                          </div>
                        </div>
                        <div className="row mb-2">
                          <div className="col-3">
                            <h5 className="f-w-500">
                              Designation<span className="pull-right">:</span>
                            </h5>
                          </div>
                          <div className="col-9">
                            <span>{user && info.desgination}</span>
                          </div>
                        </div>

                        <div className="row mb-2">
                          <div className="col-3">
                            <h5 className="f-w-500">
                              Number of publications
                              <span className="pull-right">:</span>
                            </h5>
                          </div>
                          <div className="col-9">
                            <span>{user && nopublications}</span>
                          </div>
                        </div>
                        <div className="row mb-2">
                          <div className="col-3">
                            <h5 className="f-w-500">
                              Year Experience
                              <span className="pull-right">:</span>
                            </h5>
                          </div>
                          <div className="col-9">
                            <span>{user && info.experience}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      id="profile-settings"
                      className={`tab-pane fade ${
                        activeToggle === "setting" ? "active show" : ""
                      }`}
                    >
                      <div className="pt-3">
                        <div className="settings-form">
                          <h4 className="text-primary">Account Setting</h4>
                          <form onSubmit={onSave}>
                            {/* <div className="form-row">
                              <div className="form-group col-md-6">
                                <label>Email</label>
                                <input
                                  type="email"
                                  placeholder="Official Email id"
                                  value={email}
                                  onChange={(e) => setemail(e.target.value)}
                                  className="form-control"
                                />
                              </div>
                              <div className="form-group col-md-6">
                                <label>Name</label>
                                <input
                                  type="text"
                                  placeholder="Name"
                                  value={username}
                                  onChange={(e) => setusername(e.target.value)}
                                  className="form-control"
                                />
                              </div>
                            </div> */}
                            <div className="form-group">
                              <label>Name</label>
                              <input
                                type="text"
                                placeholder={info.username}
                                value={username}
                                onChange={(e) => setusername(e.target.value)}
                                className="form-control"
                              />
                            </div>
                            <div className="form-group">
                              <label>About Me</label>
                              <input
                                type="text"
                                placeholder={info.aboutme}
                                value={about}
                                onChange={(e) => setaboutme(e.target.value)}
                                className="form-control"
                              />
                            </div>
                            <div className="form-group">
                              <label>Research Intersets</label>
                              <input
                                type="text"
                                placeholder={info.researchInt}
                                value={researchInt}
                                onChange={(e) => setresearchInt(e.target.value)}
                                className="form-control"
                              />
                            </div>

                            <div className="form-group">
                              <label>Designation</label>
                              <input
                                type="text"
                                placeholder={info.desgination}
                                value={desgination}
                                onChange={(e) => setdesignation(e.target.value)}
                                className="form-control"
                              />
                            </div>
                            <div className="form-group">
                              <label>Years of Experience</label>
                              <input
                                type="text"
                                placeholder={info.experience}
                                value={experience}
                                onChange={(e) => setexperience(e.target.value)}
                                className="form-control"
                              />
                            </div>
                            <div className="form-group">
                              <div className="custom-control custom-checkbox">
                                <input
                                  type="checkbox"
                                  className="custom-control-input"
                                  id="gridCheck"
                                />
                              </div>
                            </div>
                            <button className="btn btn-primary" type="submit">
                              save
                            </button>
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
