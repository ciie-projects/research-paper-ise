
import React, { Fragment, useContext } from "react";
// import {Link} from 'react-router-dom';
import { MDBDataTable } from "mdbreact";
// import Dropdownblog1 from './Dropdownblog1';
import PageTitle from "../../../layouts/PageTitle";
import { useState, useEffect } from "react";
import axios from "axios";
// import {useAuth0} from "@auth0/auth0-react";
import { UserContext } from "../../../../App";
const Customerlist = () => {
  let { user, setUser } = useContext(UserContext);
  var sun = [];
  // const {user,isAuthenticated}=useAuth0();
  const [info, setinfo] = useState([]);
  // console.log(isAuthenticated && rec[36].email);
  const [arr, setarr] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`http://localhost:3001/api/profiles/`);
        //console.log(res.data[0].work);
        setinfo(res.data);
        res.data.map((objres)=>{
          objres.work.map((workres)=>{
            arr.push(workres)
          })
          // setarr(objres.work)
        })
        console.log(arr);
      } catch (error) {
        console.log(error);
      }
    };
    // console.log(isLoading);

    fetchData();
    // console.log(info);
    // var i;
    // for (i = 0; i < info.length; i++) {
    //   // eslint-disable-next-line no-unused-expressions
    //   if (info[i].work != 0) {
    //     arr[i] = info[i].work;
    //     sun[i] = info[i].work;
    //   }
    // }
  },[]);

  const data = {
    columns: [
      {
        label: (
          <div className="sorting_1 p-0 text-center">
            <div className="custom-control custom-checkbox ml-2"></div>
          </div>
        ),
      },

      { label: "Articles Published", field: "status", sort: "asc" },
    ],

    rows: [
      ...arr.map((member, key) => ({
        status: (
          <a href={user && member} className="btn bgl-light text-black btn-sm">
            {user && member}
          </a>
        ),
      })),
    ],
  };
  const options = {
    filterType: "checkbox",
  };
  return (
    <Fragment>
      <PageTitle activeMenu="Submissions" motherMenu="Dashboard" />

      <div className="row">
        <div className="col-xl-12">
          <div className="table-responsive">
            <div className="display mb-4 dataTablesCard customer-list-table">
              <MDBDataTable data={data} />
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
export default Customerlist;
