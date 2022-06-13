import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import PageTitle from "../../../layouts/PageTitle";
import { useEffect, useState } from "react";
import axios from "axios";
import { useAuth0 } from "@auth0/auth0-react";
import { useContext } from "react";
import { UserContext } from "../../../../App";

function Review() {
  let { user, setUser } = useContext(UserContext);
  const [info, setinfo] = useState([]);

  // const {user,isAuthenticated,isLoading}=useAuth0();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`/api/profiles/`);
        // console.log(res.data);
        setinfo(res.data);
      } catch (error) {
        //  console.log(error);
      }
    };

    // console.log(info);
    // console.log(user && info[0].email);
    // console.log(user && info[0].experience);
    fetchData();
  }, []);
  return (
    <>
      <PageTitle activeMenu="Submissions" motherMenu="Dashboard" />

      <Fragment>
        <div className="form-head d-flex mb-3 mb-lg-5 align-items-start"></div>
        <div className="row">
          <div className="col-xl-12">
            <div className="card review-table p-0 border-0">
              {info.map((member, key) => (
                <div className="row align-items-center p-4  border-bottom">
                  <div className="col-xl-4 col-xxl-4 col-lg-5 col-md-12">
                    <div className="media align-items-center">
                      <div className="custom-control custom-checkbox mr-4"></div>
                      <Link to={`/faculty/${user && member.email}`}>
                        <img
                          className="mr-3 img-fluid rounded-circle"
                          width="75"
                          src={user && member.pic}
                          alt="DexignZone"
                        />
                      </Link>
                      <div className="card-body p-0">
                        <h3 className="fs-20 text-black font-w600 mb-2">
                          <Link
                            to={`/faculty/${user && member.email}`}
                            className="text-black"
                          >
                            {user && member.username}
                          </Link>
                        </h3>
                        <span className="text-dark">
                          {" "}
                          {user && member.email}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-5 col-xxl-4 col-lg-7 col-md-12 mt-3 mt-lg-0">
                    <p className="mb-0 text-dark">
                      <div>Designation: {user && member.desgination} </div>
                      Research Interests: {user && member.researchInt}{" "}
                    </p>
                  </div>
                  <div className="col-xl-3 col-xxl-4 col-lg-7 col-md-12 offset-lg-5 offset-xl-0 media-footer mt-xl-0 mt-3">
                    <div className="row">
                      <div className="text-xl-center col-xl-7 col-sm-9 col-lg-8 col-6">
                        <p className="text-black font-w600">
                          {user && member.experience}Years
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Fragment>
    </>
  );
}

export default Review;
