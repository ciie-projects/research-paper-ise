import React ,{ Fragment } from 'react';
import {Link} from 'react-router-dom';
import PageTitle from "../../../layouts/PageTitle";
import {useEffect,useState} from 'react';
import axios from 'axios';
import {useAuth0} from "@auth0/auth0-react";

function Review(){
	
		const [rec,setrec]=useState({});

		useEffect(()=>
		{const getdata=async()=>{
			const res=await axios.get("api/profiles/");
			// console.log(res.data);
			var d=res.data;
          console.log(d);
		  setrec(d);
		}
		getdata();
		
		})
		console.log(rec);

		const {user,isAuthenticated,isLoading}=useAuth0();
		return(

			
			<>
                    <PageTitle activeMenu="Submissions" motherMenu="Dashboard" />


			<Fragment>
				
				<div className="form-head d-flex mb-3 mb-lg-5 align-items-start">
					
				</div>
				<div className="row">
					<div className="col-xl-12">
						<div className="card review-table p-0 border-0">

					     <div className="row align-items-center p-4  border-bottom">
								<div className="col-xl-4 col-xxl-4 col-lg-5 col-md-12">
									<div className="media align-items-center">
										<div className="custom-control custom-checkbox mr-4">
											
										</div>
										<Link to={"/ecom-product-detail"}>
											<img className="mr-3 img-fluid rounded-circle" width="100" src={require("../../../../images/profile/first.jpeg").default} alt="DexignZone" />
										</Link>	
										<div className="card-body p-0">
											<h3 className="fs-20 text-black font-w600 mb-2"><Link to={"/app-profile"} className="text-black">rec[3].username</Link></h3>
											<span className="text-dark">26/04/2020, 12:42 AM</span>
										</div>
									</div>
								</div>
								<div className="col-xl-5 col-xxl-4 col-lg-7 col-md-12 mt-3 mt-lg-0">
									<p className="mb-0 text-dark">Professor

                                       Ph.D.

                                        dakshayini.ise@bmsce.ac.in

                                        Research Interests: Computer Networks, Algorithms, Cloud computing, Ad-hoc Networks, IoT and Data Analytics and Blockchain Technology </p>
								</div>
								<div className="col-xl-3 col-xxl-4 col-lg-7 col-md-12 offset-lg-5 offset-xl-0 media-footer mt-xl-0 mt-3">
									<div className="row">
										<div className="text-xl-center col-xl-7 col-sm-9 col-lg-8 col-6">
											<h2 className="text-black font-w600">rec[3].experience</h2>
											<span className="star-review d-inline-block">
												<i className="fa fa-star text-orange"></i>
												<i className="fa fa-star text-orange"></i>
												<i className="fa fa-star text-orange"></i>
												<i className="fa fa-star text-orange"></i>
												<i className="fa fa-star text-gray"></i>
											</span>
										</div>
									</div>
								</div>
							</div>
							<div className="row align-items-center p-4  border-bottom">
								<div className="col-xl-4 col-xxl-4 col-lg-5 col-md-12">
									<div className="media align-items-center">
										<div className="custom-control custom-checkbox mr-4">
										</div>
										<Link to={"/ecom-product-detail"}>
											<img className="mr-3 img-fluid rounded-circle" width="100" src={require("../../../../images/profile/third.jpeg").default} alt="DexignZone" />
										</Link>	
										<div className="card-body p-0">
											<h3 className="fs-20 text-black font-w600 mb-2"><Link to={"/app-profile"} className="text-black">
                                      Dr. P JAYAREKHA</Link></h3>
											<span className="text-dark">26/04/2020, 12:42 AM</span>
										</div>
									</div>
								</div>
								<div className="col-xl-5 col-xxl-4 col-lg-7 col-md-12 mt-3 mt-lg-0">
									<p className="mb-0 text-dark">Professor & HOD

                                         Ph.D.

                                    jayarekha.ise@bmsce.ac.in

                                    Research Interests: 1.Computer communications and Networks 2. Algorithms 3. Cloud Computing</p>
								</div>
								<div className="col-xl-3 col-xxl-4 col-lg-7 col-md-12 offset-lg-5 offset-xl-0 media-footer mt-xl-0 mt-3">
									<div className="row">
										<div className="text-xl-center col-xl-7 col-sm-9 col-lg-8 col-6">
											<h2 className="text-black font-w600">4.2</h2>
											<span className="star-review d-inline-block">
												<i className="fa fa-star text-orange"></i>
												<i className="fa fa-star text-orange"></i>
												<i className="fa fa-star text-orange"></i>
												<i className="fa fa-star text-orange"></i>
												<i className="fa fa-star text-gray"></i>
											</span>
										</div>
									</div>
								</div>
							</div>
							<div className="row align-items-center p-4  border-bottom">
								<div className="col-xl-4 col-xxl-4 col-lg-5 col-md-12">
									<div className="media align-items-center">
										<div className="custom-control custom-checkbox mr-4">
										</div>
										<Link to={"/ecom-product-detail"}>
											<img className="mr-3 img-fluid rounded-circle" width="100" src={require("../../../../images/profile/fifth.jpeg").default} alt="DexignZone" />
										</Link>	
										<div className="card-body p-0">
											
											<h3 className="fs-20 text-black font-w600 mb-2"><Link to={"/app-profile"} className="text-black">
                                         RASHMI R</Link></h3>
											<span className="text-dark">26/04/2020, 12:42 AM</span>
										</div>
									</div>
								</div>
								<div className="col-xl-5 col-xxl-4 col-lg-7 col-md-12 mt-3 mt-lg-0">
									<p className="mb-0 text-dark">Assistant Professor

                                       M.Tech

                                   rashmir.ise@bmsce.ac.in

                                       Research Interests: 1) Computer Network 2) Data Science</p>
								</div>
								<div className="col-xl-3 col-xxl-4 col-lg-7 col-md-12 offset-lg-5 offset-xl-0 media-footer mt-xl-0 mt-3">
									<div className="row">
										<div className="text-xl-center col-xl-7 col-sm-9 col-lg-8 col-6">
											<h2 className="text-black font-w600">4.2</h2>
											<span className="star-review d-inline-block">
												<i className="fa fa-star text-orange"></i>
												<i className="fa fa-star text-orange"></i>
												<i className="fa fa-star text-orange"></i>
												<i className="fa fa-star text-orange"></i>
												<i className="fa fa-star text-gray"></i>
											</span>
										</div>
									</div>
								</div>
							</div>
							<div className="row align-items-center p-4  border-bottom">
								<div className="col-xl-4 col-xxl-4 col-lg-5 col-md-12">
									<div className="media align-items-center">
										<div className="custom-control custom-checkbox mr-4">
										</div>
										<Link to={"/ecom-product-detail"}>
											<img className="mr-3 img-fluid rounded-circle" width="100" src={require("../../../../images/profile/second.jpeg").default} alt="DexignZone" />
										</Link>	
										<div className="card-body p-0">
											<h3 className="fs-20 text-black font-w600 mb-2"><Link to={"/app-profile"} className="text-black">
                                        GURURAJA H S</Link></h3>
											<span className="text-dark">26/04/2020, 12:42 AM</span>
										</div>
									</div>
								</div>
								<div className="col-xl-5 col-xxl-4 col-lg-7 col-md-12 mt-3 mt-lg-0">
									<p className="mb-0 text-dark">Assistant Professor

                                     M.Tech.

                                     gururajhs.ise@bmsce.ac.in

                                   Research Interests: Cryptography & Network Security, Informatics & Computing, Robotics Process Automation</p>
								</div>
								<div className="col-xl-3 col-xxl-4 col-lg-7 col-md-12 offset-lg-5 offset-xl-0 media-footer mt-xl-0 mt-3">
									<div className="row">
										<div className="text-xl-center col-xl-7 col-sm-9 col-lg-8 col-6">
											<h2 className="text-black font-w600">4.5</h2>
											<span className="star-review d-inline-block">
												<i className="fa fa-star text-orange"></i>
												<i className="fa fa-star text-orange"></i>
												<i className="fa fa-star text-orange"></i>
												<i className="fa fa-star text-orange"></i>
												<i className="fa fa-star text-gray"></i>
											</span>
										</div>
								
									</div>
								</div>
							</div>
							<div className="row align-items-center p-4  border-bottom">
								<div className="col-xl-4 col-xxl-4 col-lg-5 col-md-12">
									<div className="media align-items-center">
										<div className="custom-control custom-checkbox mr-4">
										</div>
										<Link to={"#"}>
											<img className="mr-3 img-fluid rounded-circle" width="100" src={require("../../../../images/profile/fourth.jpeg").default} alt="DexignZone" />
										</Link>	
										<div className="card-body p-0">
											{/* <p className="text-primary fs-14 mb-0">#C01234</p> */}
											<h3 className="fs-20 text-black font-w600 mb-2"><Link to={"/app-profile"} className="text-black">
                                           Dr. SHEELA S V</Link></h3>
											<span className="text-dark">26/04/2020, 12:42 AM</span>
										</div>
									</div>
								</div>
								<div className="col-xl-5 col-xxl-4 col-lg-7 col-md-12 mt-3 mt-lg-0">
									<p className="mb-0 text-dark">Professor

                                       Ph.D.

                                        ssv.ise@bmsce.ac.in

                                       Research Interests: Biometrics, Human Computer Interaction</p>
								</div>
								<div className="col-xl-3 col-xxl-4 col-lg-7 col-md-12 offset-lg-5 offset-xl-0 media-footer mt-xl-0 mt-3">
									<div className="row">
										<div className="text-xl-center col-xl-7 col-sm-9 col-lg-8 col-6">
											<h2 className="text-black font-w600">4.2</h2>
											<span className="star-review d-inline-block">
												<i className="fa fa-star text-orange"></i>
												<i className="fa fa-star text-orange"></i>
												<i className="fa fa-star text-orange"></i>
												<i className="fa fa-star text-orange"></i>
												<i className="fa fa-star text-gray"></i>
											</span>
										</div>
									</div>
								</div>
							</div>
							<div className="row align-items-center p-4  border-bottom">
								<div className="col-xl-4 col-xxl-4 col-lg-5 col-md-12">
									<div className="media align-items-center">
										<div className="custom-control custom-checkbox mr-4">
										</div>
										<Link to={"/ecom-product-detail"}>
											<img className="mr-3 img-fluid rounded-circle" width="100" src={require("../../../../images/profile/sixth.jpeg").default} alt="DexignZone" />
										</Link>	
										<div className="card-body p-0">
											<p className="text-primary fs-14 mb-0"></p>
											<h3 className="fs-20 text-black font-w600 mb-2"><Link to={"/app-profile"} className="text-black">PALLAVI B</Link></h3>
											<span className="text-dark">26/04/2020, 12:42 AM</span>
										</div>
									</div>
								</div>
								<div className="col-xl-5 col-xxl-4 col-lg-7 col-md-12 mt-3 mt-lg-0">
									<p className="mb-0 text-dark">Assistant Professor

                                   M.Tech

                                   pallavib.ise@bmsce.ac.in

                                         Research Interests: Machine learning,Data analytics,</p>
								</div>
								<div className="col-xl-3 col-xxl-4 col-lg-7 col-md-12 offset-lg-5 offset-xl-0 media-footer mt-xl-0 mt-3">
									<div className="row">
										<div className="text-xl-center col-xl-7 col-sm-9 col-lg-8 col-6">
											<h2 className="text-black font-w600">4.2</h2>
											<span className="star-review d-inline-block">
												<i className="fa fa-star text-orange"></i>
												<i className="fa fa-star text-orange"></i>
												<i className="fa fa-star text-orange"></i>
												<i className="fa fa-star text-orange"></i>
												<i className="fa fa-star text-gray"></i>
											</span>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
					
			</Fragment>
			</>
			 
		)
	}

export default Review;