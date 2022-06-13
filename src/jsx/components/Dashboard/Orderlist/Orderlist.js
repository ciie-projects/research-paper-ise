// // import React,{Fragment} from 'react';
// // import {Link} from 'react-router-dom';
// // import { MDBDataTable } from 'mdbreact';
// // import Dropdownblog2 from './Dropdownblog2';

// // const DatatablePstatus = () => {
// //   const data = {
// //     columns: [
// // 		{label: 'Order ID', field: 'id', sort: 'asc',  width: 100},
// // 		{label: 'date', field: 'date',   sort: 'asc', },
// // 		{label: 'Customer Name', field: 'customer',	sort: 'asc', 	},
// // 		{label: 'Location', field: 'location', sort: 'asc', 	},
// // 		{label: 'Amount', field: 'amount', sort: 'asc', 	},
// // 		{label: 'Status', field: 'status',  sort: 'asc',	},
// // 		{label: 'Action', field: 'dropdown',sort: 'asc',	},
// //     ],
// //     rows: [
// // 		{	id: '#5552311',	date: '26 March 2020 ',	customer: 'David Horison',	location: '11 Church Road',	amount: '$320',
// // 			status: <Link to={""} className="btn bgl-warning text-warning btn-sm">PENDING</Link>,
// // 			dropdown: <Dropdownblog2 />,
// // 		},
// // 		{
// // 			id: '#5552322',	date: '27 March 2020',	customer: '21 King Street London',location: 'Tokyo', amount: '$170',
// // 			status: <Link to={""} className="btn bgl-light btn-sm">CANCLED</Link>,
// // 			dropdown: <Dropdownblog2 />,
// // 		},
// // 		{
// // 			id: '#5552323',	date: '28 March 2020',	customer: 'Franky Sihotang',location: '32 The Green London',amount: '$86',
// // 			status: <Link to={""} className="btn bgl-success text-success  btn-sm">DELIVERED</Link>,
// // 			dropdown: <Dropdownblog2 />,
// // 		},
// // 		{
// // 			id: '#5552349',	date: '21 March 2020',	customer: 'James WItcwicky',location: '32 The Green London',amount: '$433',
// // 			status: <Link to={""} className="btn bgl-warning text-warning btn-sm">PENDING</Link>,
// // 			dropdown: <Dropdownblog2 />,
// // 		},
// // 		{
// // 			id: '#5552356',	date: '12 March 2020',	customer: 'Jessica Wong',location: 'Tokyo',	amount: '$162',
// // 			status: <Link to={""} className="btn bgl-light btn-sm">CANCLED</Link>,
// // 			dropdown: <Dropdownblog2 />,
// // 		},
// // 		{
// // 			id: '#5552358',	date: '15 March 2020',	customer: 'Olivia Shine',location: 'New York',	amount: '$372',
// // 			status: <Link to={""} className="btn bgl-success text-success  btn-sm">DELIVERED</Link>,
// // 			dropdown: <Dropdownblog2 />,
// // 		},
// // 		{
// // 			id: '#5552375',	date: '17 March 2020',	customer: 'Rendy Greenlee',	location: 'San Francisco',	amount: '$137',
// // 			status: <Link to={""} className="btn bgl-light btn-sm">CANCLED</Link>,
// // 			dropdown: <Dropdownblog2 />,
// // 		},
// // 		{
// // 			id: '#5552388',	date: '18 March 2020',	customer: 'Rendy Greenlee',	location: 'Tokyo',	amount: '$327',
// // 			status: <Link to={""} className="btn bgl-warning text-warning btn-sm">PENDING</Link>,
// // 			dropdown: <Dropdownblog2 />,
// // 		},
// // 		{
// // 			id: '#5552397',	date: '11 March 2020',	customer: '544 Manor Road London',	location: 'San Francisco',	amount: '$205',
// // 			status:<Link to={""} className="btn bgl-light btn-sm">CANCLED</Link>,
// // 			dropdown: <Dropdownblog2 />,
// // 		},
// // 		{
// // 			id: '#5552397',	date: '10 March 2020',	customer: '35 Station Road London',	location: 'Edinburgh',	amount: '$103',
// // 			status: <Link to={""} className="btn bgl-warning text-warning btn-sm">PENDING</Link>,
// // 			dropdown: <Dropdownblog2 />,
// // 		},
// // 		{
// // 			id: '#5552388',	date: '05 March 2020',	customer: 'Samantha Bake',	location: '981 St. John’s Road London',	amount: '$90',
// // 			status: <Link to={""} className="btn bgl-success text-success  btn-sm">DELIVERED</Link>,
// // 			dropdown: <Dropdownblog2 />,
// // 		},
// // 		{
// // 			id: '#5552375',	date: '30 March 2020',	customer: 'Roberto Carlo',	location: 'Corner Street 5th London',	amount: '$342',
// // 			status: <Link to={""} className="btn bgl-light btn-sm">CANCLED</Link>,
// // 			dropdown: <Dropdownblog2 />,
// // 		},
// // 		{
// // 			id: '#5552358',	date: '20 March 2020',	customer: 'Rendy Greenlee',	location: '981 St. John’s Road London',	amount: '$470',
// // 			status: <Link to={""} className="btn bgl-warning text-warning btn-sm">PENDING</Link>,
// // 			dropdown: <Dropdownblog2 />,
// // 		},
// // 		{
// // 			id: '#5552356',	date: '07 March 2020',	customer: 'Olivia Shine',	location: 'London',	amount: '$313',
// // 			status: <Link to={""} className="btn bgl-success text-success  btn-sm">DELIVERED</Link>,
// // 			dropdown: <Dropdownblog2 />,
// // 		},
// // 		{
// // 			id: '#5552322',	date: '06 March 2020',	customer: 'Franky Sihotang',	location: 'London',	amount: '$385',
// // 			status: <Link to={""} className="btn bgl-warning text-warning btn-sm">PENDING</Link>,
// // 			dropdown: <Dropdownblog2 />,
// // 		},
// // 		{
// // 			id: '#5552388',	date: '05 March 2020',	customer: 'Samantha Bake',	location: '981 St. John’s Road London',	amount: '$90',
// // 			status: <Link to={""} className="btn bgl-success text-success  btn-sm">DELIVERED</Link>,
// // 			dropdown: <Dropdownblog2 />,
// // 		},
// // 		{
// // 			id: '#5552375',	date: '30 March 2020',	customer: 'Roberto Carlo',	location: 'Corner Street 5th London',	amount: '$342',
// // 			status: <Link to={""} className="btn bgl-light btn-sm">CANCLED</Link>,
// // 			dropdown: <Dropdownblog2 />,
// // 		},
// // 		{
// // 			id: '#5552358',	date: '20 March 2020',	customer: 'Rendy Greenlee',	location: '981 St. John’s Road London',	amount: '$470',
// // 			status: <Link to={""} className="btn bgl-warning text-warning btn-sm">PENDING</Link>,
// // 			dropdown: <Dropdownblog2 />,
// // 		},
// // 		{
// // 			id: '#5552356',	date: '07 March 2020',	customer: 'Olivia Shine',	location: 'London',	amount: '$313',
// // 			status: <Link to={""} className="btn bgl-success text-success  btn-sm">DELIVERED</Link>,
// // 			dropdown: <Dropdownblog2 />,
// // 		},
// // 		{
// // 			id: '#5552311',	date: '26 March 2020 ',	customer: 'David Horison',	location: '11 Church Road',		amount: '$320',
// // 			status: <Link to={""} className="btn bgl-warning text-warning btn-sm">PENDING</Link>,
// // 			dropdown: <Dropdownblog2 />,
// // 		},
// // 		{
// // 			id: '#5552322',	date: '27 March 2020',	customer: '21 King Street London',	location: 'Tokyo',	amount: '$170',
// // 			status: <Link to={""} className="btn bgl-light btn-sm">CANCLED</Link>,
// // 			dropdown: <Dropdownblog2 />,
// // 		},
// // 		{
// // 			id: '#5552323',	date: '28 March 2020',	customer: 'Franky Sihotang',location: '32 The Green London',amount: '$86',
// // 			status: <Link to={""} className="btn bgl-success text-success  btn-sm">DELIVERED</Link>,
// // 			dropdown: <Dropdownblog2 />,
// // 		},
// // 		{
// // 			id: '#5552349',	date: '21 March 2020',	customer: 'James WItcwicky',location: '32 The Green London',	amount: '$433',
// // 			status: <Link to={""} className="btn bgl-warning text-warning btn-sm">PENDING</Link>,
// // 			dropdown: <Dropdownblog2 />,
// // 		},
// // 	]
// // };

// // 	return (
// // 		<Fragment>
// // 			<div className="row">
// // 				<div className="col-xl-12">
// // 					<div className="table-responsive">
// // 						<div  className="display mb-4 dataTablesCard no-footer">
// // 							<MDBDataTable  striped 	small	data={data}	/>
// // 						</div>
// // 					</div>
// // 				</div>
// // 			</div>
// // 		</Fragment>

// // 	);
// // }
// // export default DatatablePstatus;

// import React,{Fragment} from 'react';
// import {Link} from 'react-router-dom';
// import { MDBDataTable } from 'mdbreact';
// // import Dropdownblog1 from './Dropdownblog1';
// import PageTitle from "../../../layouts/PageTitle";
// import { useState,useEffect } from 'react';
// import axios from 'axios';
// import {useAuth0} from "@auth0/auth0-react";
// import { UserContext } from "../../../../App";
// import { useContext } from "react";

// const Customerlist = () => {
// 	let { user, setUser } = useContext(UserContext);
// 	var sun=[];
// 	// const {user,isAuthenticated}=useAuth0();

// 	const [info,setinfo]=useState([]);
// 		// console.log(isAuthenticated && rec[36].email);
// 		const [arr,setarr]=useState([]);

// 		useEffect(()=>{

// 			const fetchData = async () => {
// 			  try {
// 				const res=await axios.get(`/api/profiles/`);
// 				//console.log(res.data);
// 				setinfo(res.data);

// 			  } catch (error) {
// 				 console.log(error);
// 			  }
// 			  };
// 			// console.log(isLoading);

// 			     fetchData();
//                // console.log(info);
// 				 var i;
// 				 for( i=0;i<info.length;i++)
// 				 {
// 					 // eslint-disable-next-line no-unused-expressions
// 					 if((info[i].work)!==0){
// 					 arr[i]=(info[i].work);
// 					 sun[i]=(info[i].work);
// 					 }
// 				 }
// 				 console.log("Here@@@ PLease");
// 				 console.log(sun);
// 				 console.log("After ##");
// 				 console.log(arr);
// 				 console.log("Finally PLEASE");
// 			})

// const data = {
//      columns: [
// 		{label:
// 			<div className="sorting_1 p-0 text-center">
// 				<div className="custom-control custom-checkbox ml-2">
// 					{/* <input type="checkbox" className="custom-control-input" id="checkAll" required="" />
// 					<label className="custom-control-label" htmlFor="checkAll"></label>*/}
// 				</div>
// 			</div>
// 		, },
// 		// {label: 'Faculty Name', field: 'customer',	sort: 'asc', 	},
// 		{label: 'Articles Published', field: 'status',  sort: 'asc',	},
//     ],

//    rows:
//         [...arr.map((member,key)=>(

// 			{
// 			// customer:<div >{isAuthenticated && member.username}</div>,
// 			status: <Link className="btn bgl-light text-black btn-sm">{user && member}</Link>,

// 		    }

// 		   )),

// 		]
// };
// 	const options = {
// 		filterType: 'checkbox',
// 	};
// 	return (
// 		<Fragment>
// 			<PageTitle activeMenu="Faculty List" motherMenu="Dashboard" />

// 			<div className="row">
// 				<div className="col-xl-12">
// 					<div className="table-responsive">
// 						<div  className="display mb-4 dataTablesCard customer-list-table">
// 							<MDBDataTable data={data} />
// 						</div>
// 					</div>
// 				</div>
// 			</div>
// 		</Fragment>

// 	);
// }
// export default Customerlist;

import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { MDBDataTable } from "mdbreact";
// import Dropdownblog1 from './Dropdownblog1';
import PageTitle from "../../../layouts/PageTitle";
import { useState, useEffect } from "react";
import { useContext } from "react";
import { UserContext } from "../../../../App";
import axios from "axios";

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
        //console.log(res.data);
        setinfo(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    // console.log(isLoading);

    fetchData();
    // console.log(info);
    var i;
    for (i = 0; i < info.length; i++) {
      // eslint-disable-next-line no-unused-expressions
      if (info[i].work != 0) {
        arr[i] = info[i].work;
        sun[i] = info[i].work;
      }
    }
  });

  const data = {
    columns: [
      {
        label: (
          <div className="sorting_1 p-0 text-center">
            <div className="custom-control custom-checkbox ml-2">
              {/* <input type="checkbox" className="custom-control-input" id="checkAll" required="" />	
					<label className="custom-control-label" htmlFor="checkAll"></label>*/}
            </div>
          </div>
        ),
      },
      // {label: 'Faculty Name', field: 'customer',	sort: 'asc', 	},
      { label: "Articles Published", field: "status", sort: "asc" },
    ],

    rows: [
      ...arr.map((member, key) => ({
        // customer:<div >{isAuthenticated && member.username}</div>,
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
      <PageTitle activeMenu="Faculty List" motherMenu="Dashboard" />

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
