import React ,{ Fragment } from 'react';
import {Link} from 'react-router-dom';
import PageTitle from "../../../layouts/PageTitle";

class Review extends React.Component{
	render(){
		return(
			<>
                    <PageTitle activeMenu="Submissions" motherMenu="Dashboard" />


			<Fragment>
				
				<div className="form-head d-flex mb-3 mb-lg-5 align-items-start">
					{/* <div className="mr-auto d-none d-lg-block">
						<Link className="text-primary d-flex align-items-center mb-3 font-w500" to="/">
						<svg className="mr-3" width="24" height="12" viewBox="0 0 24 12" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M0.274969 5.14888C0.27525 5.1486 0.275484 5.14827 0.275812 5.14799L5.17444 0.272997C5.54142 -0.0922061 6.135 -0.090847 6.5003 0.276184C6.86555 0.643168 6.86414 1.23675 6.49716 1.60199L3.20822 4.87499H23.0625C23.5803 4.87499 24 5.29471 24 5.81249C24 6.33027 23.5803 6.74999 23.0625 6.74999H3.20827L6.49711 10.023C6.86409 10.3882 6.8655 10.9818 6.50025 11.3488C6.13495 11.7159 5.54133 11.7171 5.17439 11.352L0.275764 6.47699C0.275483 6.47671 0.27525 6.47638 0.274921 6.4761C-0.0922505 6.10963 -0.0910778 5.51413 0.274969 5.14888Z" fill="#EA4989"/>
						</svg>
						Back</Link>
						<Link to={"#"} className="mb-0 text-secondary fs-18 font-w500" >Dashboard  /</Link>
						<Link to={"#"} className="mb-0 font-w500 fs-18" >Submisions </Link>
					</div> */}
					{/* <Link to={"#"} className="btn btn-success ml-auto btn-rounded d-md-flex align-items-center d-inline-block">
					<svg className="mr-2 scale5" width="16" height="16" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M16.0007 1.33334C13.0999 1.33334 10.2642 2.19353 7.85229 3.80512C5.44037 5.41672 3.56051 7.70734 2.45042 10.3873C1.34034 13.0673 1.04989 16.0163 1.61581 18.8613C2.18172 21.7064 3.57859 24.3198 5.62976 26.3709C7.68093 28.4221 10.2943 29.819 13.1393 30.3849C15.9844 30.9508 18.9334 30.6603 21.6133 29.5503C24.2933 28.4402 26.584 26.5603 28.1955 24.1484C29.8071 21.7365 30.6673 18.9008 30.6673 16C30.6627 12.1116 29.116 8.38372 26.3665 5.63418C23.617 2.88464 19.8891 1.33793 16.0007 1.33334ZM16.0007 28C13.6273 28 11.3072 27.2962 9.33381 25.9777C7.36042 24.6591 5.82235 22.7849 4.9141 20.5922C4.00585 18.3995 3.76821 15.9867 4.23123 13.6589C4.69426 11.3312 5.83715 9.19296 7.51538 7.51473C9.19361 5.8365 11.3318 4.69361 13.6596 4.23059C15.9873 3.76757 18.4001 4.00521 20.5929 4.91346C22.7856 5.82171 24.6597 7.35978 25.9783 9.33317C27.2969 11.3066 28.0007 13.6266 28.0007 16C27.9971 19.1815 26.7317 22.2317 24.482 24.4814C22.2324 26.7311 19.1822 27.9965 16.0007 28Z" fill="white"/>
						<path d="M20.3901 11.724L14.6661 17.448L11.6088 14.3907C11.4858 14.2633 11.3387 14.1617 11.176 14.0919C11.0133 14.022 10.8384 13.9852 10.6613 13.9837C10.4843 13.9821 10.3087 14.0159 10.1449 14.0829C9.98099 14.1499 9.83212 14.2489 9.70693 14.3741C9.58174 14.4993 9.48274 14.6482 9.41569 14.8121C9.34865 14.9759 9.31492 15.1515 9.31646 15.3285C9.318 15.5056 9.35478 15.6805 9.42466 15.8432C9.49453 16.0059 9.59611 16.153 9.72346 16.276L13.7235 20.276C13.9735 20.5259 14.3126 20.6664 14.6661 20.6664C15.0197 20.6664 15.3587 20.5259 15.6088 20.276L22.2754 13.6093C22.5183 13.3579 22.6527 13.0211 22.6497 12.6715C22.6466 12.3219 22.5064 11.9875 22.2592 11.7402C22.012 11.493 21.6776 11.3528 21.328 11.3498C20.9784 11.3467 20.6416 11.4811 20.3901 11.724Z" fill="white"/>
					</svg>
					PUBLISH</Link>
					<Link to={"#"} className="btn btn-danger ml-3 btn-rounded d-md-flex align-items-center d-inline-block">
					<svg className="mr-2 scale5" width="16" height="16" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M16.0007 1.33334C13.0999 1.33334 10.2642 2.19353 7.85229 3.80512C5.44037 5.41672 3.56051 7.70734 2.45042 10.3873C1.34034 13.0673 1.04989 16.0163 1.61581 18.8613C2.18172 21.7064 3.57859 24.3198 5.62976 26.3709C7.68093 28.4221 10.2943 29.819 13.1393 30.3849C15.9844 30.9508 18.9334 30.6603 21.6133 29.5503C24.2933 28.4402 26.584 26.5603 28.1955 24.1484C29.8071 21.7365 30.6673 18.9008 30.6673 16C30.6627 12.1116 29.116 8.38372 26.3665 5.63418C23.617 2.88464 19.8891 1.33793 16.0007 1.33334ZM16.0007 28C13.6273 28 11.3072 27.2962 9.33381 25.9777C7.36042 24.6591 5.82235 22.7849 4.9141 20.5922C4.00585 18.3995 3.76821 15.9867 4.23123 13.6589C4.69426 11.3312 5.83715 9.19296 7.51538 7.51473C9.19361 5.8365 11.3318 4.69361 13.6596 4.23059C15.9873 3.76757 18.4001 4.00521 20.5929 4.91346C22.7856 5.82171 24.6597 7.35978 25.9783 9.33317C27.2969 11.3066 28.0007 13.6266 28.0007 16C27.9971 19.1815 26.7317 22.2317 24.482 24.4814C22.2324 26.7311 19.1822 27.9965 16.0007 28Z" fill="white"/>
						<path d="M21.6556 10.3427C21.4055 10.0927 21.0665 9.95228 20.7129 9.95228C20.3594 9.95228 20.0203 10.0927 19.7702 10.3427L15.9996 14.1147L12.2289 10.3427C12.1059 10.2153 11.9588 10.1137 11.7961 10.0439C11.6334 9.97398 11.4585 9.9372 11.2814 9.93566C11.1044 9.93412 10.9288 9.96786 10.765 10.0349C10.6011 10.1019 10.4522 10.2009 10.327 10.3261C10.2019 10.4513 10.1029 10.6002 10.0358 10.7641C9.96877 10.9279 9.93504 11.1035 9.93657 11.2805C9.93811 11.4576 9.97489 11.6325 10.0448 11.7952C10.1147 11.9579 10.2162 12.105 10.3436 12.228L14.1142 16L10.3436 19.772C10.2162 19.895 10.1147 20.0421 10.0448 20.2048C9.97489 20.3675 9.93811 20.5424 9.93657 20.7195C9.93504 20.8965 9.96877 21.0721 10.0358 21.2359C10.1029 21.3998 10.2019 21.5487 10.327 21.6739C10.4522 21.799 10.6011 21.898 10.765 21.9651C10.9288 22.0321 11.1044 22.0659 11.2814 22.0643C11.4585 22.0628 11.6334 22.026 11.7961 21.9561C11.9588 21.8863 12.1059 21.7847 12.2289 21.6573L15.9996 17.8853L19.7702 21.6573C19.8932 21.7847 20.0404 21.8863 20.203 21.9561C20.3657 22.026 20.5407 22.0628 20.7177 22.0643C20.8947 22.0659 21.0703 22.0321 21.2342 21.9651C21.398 21.898 21.5469 21.799 21.6721 21.6739C21.7973 21.5487 21.8963 21.3998 21.9633 21.2359C22.0304 21.0721 22.0641 20.8965 22.0626 20.7195C22.061 20.5424 22.0243 20.3675 21.9544 20.2048C21.8845 20.0421 21.7829 19.895 21.6556 19.772L17.8849 16L21.6556 12.228C21.9055 11.978 22.046 11.6389 22.046 11.2853C22.046 10.9318 21.9055 10.5927 21.6556 10.3427Z" fill="white"/>
					</svg>
					DELETE</Link> */}
					{/* <div className="input-group search-area ml-3 d-inline-flex">
						<input type="text" className="form-control" placeholder="Search here" />
						<div className="input-group-append">
							<span className="input-group-text"><Link><i className="flaticon-381-search-2"></i></Link></span>
						</div>
					</div> */}
					{/* <div className="dropdown ml-3 d-inline-block">
						<div className="btn btn-outline-primary btn-rounded dropdown-toggle d-flex align-items-center" data-toggle="dropdown">
							<svg className="mr-3 scale5" width="14" height="14" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
								<g clipPath="url(#clip0)">
								<path d="M22.4276 2.856H21.8676V1.428C21.8676 0.56 21.2796 0 20.4396 0C19.5996 0 19.0116 0.56 19.0116 1.428V2.856H9.71557V1.428C9.71557 0.56 9.15557 0 8.28757 0C7.41957 0 6.85957 0.56 6.85957 1.428V2.856H5.57157C2.85557 2.856 0.55957 5.152 0.55957 7.868V23.016C0.55957 25.732 2.85557 28.028 5.57157 28.028H22.4276C25.1436 28.028 27.4396 25.732 27.4396 23.016V7.868C27.4396 5.152 25.1436 2.856 22.4276 2.856ZM5.57157 5.712H22.4276C23.5756 5.712 24.5836 6.72 24.5836 7.868V9.856H3.41557V7.868C3.41557 6.72 4.42357 5.712 5.57157 5.712ZM22.4276 25.144H5.57157C4.42357 25.144 3.41557 24.136 3.41557 22.988V12.712H24.5556V22.988C24.5836 24.136 23.5756 25.144 22.4276 25.144Z" fill="#EA4989"/>
								</g>
								<defs>
								<clipPath id="clip0">
								<rect width="28" height="28" fill="white"/>
								</clipPath>
								</defs>
							</svg>
							Filter
						</div>
						<div className="dropdown-menu dropdown-menu-left">
							<Link className="dropdown-item" to={"#"}>A To Z List</Link>
							<Link className="dropdown-item" to={"#"}>Z To A List</Link>
						</div>
					</div> */}
				</div>
				<div className="row">
					<div className="col-xl-12">
						<div className="card review-table p-0 border-0">
							<div className="row align-items-center p-4  border-bottom">
								<div className="col-xl-4 col-xxl-4 col-lg-5 col-md-12">
									<div className="media align-items-center">
										<div className="custom-control custom-checkbox mr-4">
											
										</div>
										<Link to={"#"}>
											<img className="mr-3 img-fluid rounded-circle" width="100" src={require("../../../../images/profile/first.jpeg").default} alt="DexignZone" />
										</Link>	
										<div className="card-body p-0">
											<h3 className="fs-20 text-black font-w600 mb-2"><Link to={"/app-profile"} className="text-black">Dr. M DAKSHAYINI</Link></h3>
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
											<h2 className="text-black font-w600">4.5</h2>
											<span className="star-review d-inline-block">
												<i className="fa fa-star text-orange"></i>
												<i className="fa fa-star text-orange"></i>
												<i className="fa fa-star text-orange"></i>
												<i className="fa fa-star text-orange"></i>
												<i className="fa fa-star text-gray"></i>
											</span>
										</div>
										{/* <div className="edit ml-auto col-xl-5 col-sm-3 col-lg-4 col-6">
											<Link to={"#"} className="mr-4">
											<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
												<path d="M16.0007 1.33333C13.0999 1.33333 10.2642 2.19351 7.85229 3.80511C5.44037 5.4167 3.56051 7.70732 2.45042 10.3873C1.34034 13.0673 1.04989 16.0163 1.61581 18.8613C2.18172 21.7064 3.57859 24.3197 5.62976 26.3709C7.68093 28.4221 10.2943 29.8189 13.1393 30.3849C15.9844 30.9508 18.9334 30.6603 21.6133 29.5502C24.2933 28.4402 26.584 26.5603 28.1955 24.1484C29.8071 21.7365 30.6673 18.9008 30.6673 16C30.6627 12.1116 29.116 8.38371 26.3665 5.63416C23.617 2.88462 19.8891 1.33792 16.0007 1.33333ZM16.0007 28C13.6273 28 11.3072 27.2962 9.33381 25.9776C7.36042 24.6591 5.82235 22.7849 4.9141 20.5922C4.00585 18.3995 3.76821 15.9867 4.23123 13.6589C4.69426 11.3311 5.83715 9.19295 7.51538 7.51472C9.19361 5.83649 11.3318 4.6936 13.6596 4.23057C15.9873 3.76755 18.4001 4.00519 20.5929 4.91344C22.7856 5.82169 24.6597 7.35977 25.9783 9.33316C27.2969 11.3065 28.0007 13.6266 28.0007 16C27.9971 19.1815 26.7317 22.2317 24.482 24.4814C22.2324 26.7311 19.1822 27.9965 16.0007 28Z" fill="#2BC155"/>
												<path d="M20.3901 11.724L14.6661 17.448L11.6088 14.3907C11.4858 14.2633 11.3387 14.1617 11.176 14.0919C11.0133 14.022 10.8384 13.9852 10.6613 13.9837C10.4843 13.9821 10.3087 14.0159 10.1449 14.0829C9.98099 14.1499 9.83212 14.2489 9.70693 14.3741C9.58174 14.4993 9.48274 14.6482 9.41569 14.8121C9.34865 14.9759 9.31492 15.1515 9.31646 15.3285C9.318 15.5056 9.35478 15.6805 9.42466 15.8432C9.49453 16.0059 9.59611 16.153 9.72346 16.276L13.7235 20.276C13.9735 20.5259 14.3126 20.6664 14.6661 20.6664C15.0197 20.6664 15.3587 20.5259 15.6088 20.276L22.2754 13.6093C22.5183 13.3579 22.6527 13.0211 22.6497 12.6715C22.6466 12.3219 22.5064 11.9875 22.2592 11.7402C22.012 11.493 21.6776 11.3528 21.328 11.3498C20.9784 11.3467 20.6416 11.4811 20.3901 11.724Z" fill="#2BC155"/>
											</svg>
											</Link>
											<Link to={"#"}>
											<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
												<path d="M16.0007 1.33333C13.0999 1.33333 10.2642 2.19351 7.85229 3.80511C5.44037 5.4167 3.56051 7.70732 2.45042 10.3873C1.34034 13.0673 1.04989 16.0163 1.61581 18.8613C2.18172 21.7064 3.57859 24.3197 5.62976 26.3709C7.68093 28.4221 10.2943 29.8189 13.1393 30.3849C15.9844 30.9508 18.9334 30.6603 21.6133 29.5502C24.2933 28.4402 26.584 26.5603 28.1955 24.1484C29.8071 21.7365 30.6673 18.9008 30.6673 16C30.6627 12.1116 29.116 8.38371 26.3665 5.63416C23.617 2.88462 19.8891 1.33792 16.0007 1.33333ZM16.0007 28C13.6273 28 11.3072 27.2962 9.33381 25.9776C7.36042 24.6591 5.82235 22.7849 4.9141 20.5922C4.00585 18.3995 3.76821 15.9867 4.23123 13.6589C4.69426 11.3311 5.83715 9.19295 7.51538 7.51472C9.19361 5.83649 11.3318 4.6936 13.6596 4.23057C15.9873 3.76755 18.4001 4.00519 20.5929 4.91344C22.7856 5.82169 24.6597 7.35977 25.9783 9.33316C27.2969 11.3065 28.0007 13.6266 28.0007 16C27.9971 19.1815 26.7317 22.2317 24.482 24.4814C22.2324 26.7311 19.1822 27.9965 16.0007 28Z" fill="#F44C62"/>
												<path d="M21.6556 10.3427C21.4055 10.0927 21.0665 9.95228 20.7129 9.95228C20.3594 9.95228 20.0203 10.0927 19.7702 10.3427L15.9996 14.1147L12.2289 10.3427C12.1059 10.2153 11.9588 10.1137 11.7961 10.0439C11.6334 9.97399 11.4585 9.9372 11.2814 9.93567C11.1044 9.93413 10.9288 9.96786 10.765 10.0349C10.6011 10.1019 10.4522 10.2009 10.327 10.3261C10.2019 10.4513 10.1029 10.6002 10.0358 10.7641C9.96877 10.9279 9.93504 11.1035 9.93657 11.2805C9.93811 11.4576 9.97489 11.6325 10.0448 11.7952C10.1147 11.9579 10.2162 12.105 10.3436 12.228L14.1142 16L10.3436 19.772C10.2162 19.895 10.1147 20.0421 10.0448 20.2048C9.97489 20.3675 9.93811 20.5424 9.93657 20.7195C9.93504 20.8965 9.96877 21.0721 10.0358 21.2359C10.1029 21.3998 10.2019 21.5487 10.327 21.6739C10.4522 21.7991 10.6011 21.8981 10.765 21.9651C10.9288 22.0321 11.1044 22.0659 11.2814 22.0643C11.4585 22.0628 11.6334 22.026 11.7961 21.9561C11.9588 21.8863 12.1059 21.7847 12.2289 21.6573L15.9996 17.8853L19.7702 21.6573C19.8932 21.7847 20.0404 21.8863 20.203 21.9561C20.3657 22.026 20.5407 22.0628 20.7177 22.0643C20.8947 22.0659 21.0703 22.0321 21.2342 21.9651C21.398 21.8981 21.5469 21.7991 21.6721 21.6739C21.7973 21.5487 21.8963 21.3998 21.9633 21.2359C22.0304 21.0721 22.0641 20.8965 22.0626 20.7195C22.061 20.5424 22.0243 20.3675 21.9544 20.2048C21.8845 20.0421 21.7829 19.895 21.6556 19.772L17.8849 16L21.6556 12.228C21.9055 11.978 22.046 11.6389 22.046 11.2853C22.046 10.9318 21.9055 10.5927 21.6556 10.3427Z" fill="#F44C62"/>
											</svg>
											</Link>
										</div> */}
									</div>
								</div>
							</div>
							<div className="row align-items-center p-4  border-bottom">
								<div className="col-xl-4 col-xxl-4 col-lg-5 col-md-12">
									<div className="media align-items-center">
										<div className="custom-control custom-checkbox mr-4">
											{/* <input type="checkbox" className="custom-control-input" id="customCheckBox2" required="" />
											<label className="custom-control-label" forHtml="customCheckBox2"></label> */}
										</div>
										<Link to={"#"}>
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
											{/* <input type="checkbox" className="custom-control-input" id="customCheckBox3" required="" />
											<label className="custom-control-label" htmlFor="customCheckBox3"></label> */}
										</div>
										<Link to={"#"}>
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
											{/* <input type="checkbox" className="custom-control-input" id="customCheckBox4" required="" />
											<label className="custom-control-label" htmlFor="customCheckBox4"></label> */}
										</div>
										<Link to={"#"}>
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
											{/* <input type="checkbox" className="custom-control-input" id="customCheckBox5" required="" />
											<label className="custom-control-label" htmlFor="customCheckBox5"></label> */}
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
										{/* <div className="edit ml-auto col-xl-5 col-sm-3 col-lg-4 col-6">
											<Link to={"#"} className="mr-4">
											<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
												<path d="M16.0007 1.33333C13.0999 1.33333 10.2642 2.19351 7.85229 3.80511C5.44037 5.4167 3.56051 7.70732 2.45042 10.3873C1.34034 13.0673 1.04989 16.0163 1.61581 18.8613C2.18172 21.7064 3.57859 24.3197 5.62976 26.3709C7.68093 28.4221 10.2943 29.8189 13.1393 30.3849C15.9844 30.9508 18.9334 30.6603 21.6133 29.5502C24.2933 28.4402 26.584 26.5603 28.1955 24.1484C29.8071 21.7365 30.6673 18.9008 30.6673 16C30.6627 12.1116 29.116 8.38371 26.3665 5.63416C23.617 2.88462 19.8891 1.33792 16.0007 1.33333ZM16.0007 28C13.6273 28 11.3072 27.2962 9.33381 25.9776C7.36042 24.6591 5.82235 22.7849 4.9141 20.5922C4.00585 18.3995 3.76821 15.9867 4.23123 13.6589C4.69426 11.3311 5.83715 9.19295 7.51538 7.51472C9.19361 5.83649 11.3318 4.6936 13.6596 4.23057C15.9873 3.76755 18.4001 4.00519 20.5929 4.91344C22.7856 5.82169 24.6597 7.35977 25.9783 9.33316C27.2969 11.3065 28.0007 13.6266 28.0007 16C27.9971 19.1815 26.7317 22.2317 24.482 24.4814C22.2324 26.7311 19.1822 27.9965 16.0007 28Z" fill="#2BC155"/>
												<path d="M20.3901 11.724L14.6661 17.448L11.6088 14.3907C11.4858 14.2633 11.3387 14.1617 11.176 14.0919C11.0133 14.022 10.8384 13.9852 10.6613 13.9837C10.4843 13.9821 10.3087 14.0159 10.1449 14.0829C9.98099 14.1499 9.83212 14.2489 9.70693 14.3741C9.58174 14.4993 9.48274 14.6482 9.41569 14.8121C9.34865 14.9759 9.31492 15.1515 9.31646 15.3285C9.318 15.5056 9.35478 15.6805 9.42466 15.8432C9.49453 16.0059 9.59611 16.153 9.72346 16.276L13.7235 20.276C13.9735 20.5259 14.3126 20.6664 14.6661 20.6664C15.0197 20.6664 15.3587 20.5259 15.6088 20.276L22.2754 13.6093C22.5183 13.3579 22.6527 13.0211 22.6497 12.6715C22.6466 12.3219 22.5064 11.9875 22.2592 11.7402C22.012 11.493 21.6776 11.3528 21.328 11.3498C20.9784 11.3467 20.6416 11.4811 20.3901 11.724Z" fill="#2BC155"/>
											</svg>
											</Link>
											<Link to={"#"}>
											<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
												<path d="M16.0007 1.33333C13.0999 1.33333 10.2642 2.19351 7.85229 3.80511C5.44037 5.4167 3.56051 7.70732 2.45042 10.3873C1.34034 13.0673 1.04989 16.0163 1.61581 18.8613C2.18172 21.7064 3.57859 24.3197 5.62976 26.3709C7.68093 28.4221 10.2943 29.8189 13.1393 30.3849C15.9844 30.9508 18.9334 30.6603 21.6133 29.5502C24.2933 28.4402 26.584 26.5603 28.1955 24.1484C29.8071 21.7365 30.6673 18.9008 30.6673 16C30.6627 12.1116 29.116 8.38371 26.3665 5.63416C23.617 2.88462 19.8891 1.33792 16.0007 1.33333ZM16.0007 28C13.6273 28 11.3072 27.2962 9.33381 25.9776C7.36042 24.6591 5.82235 22.7849 4.9141 20.5922C4.00585 18.3995 3.76821 15.9867 4.23123 13.6589C4.69426 11.3311 5.83715 9.19295 7.51538 7.51472C9.19361 5.83649 11.3318 4.6936 13.6596 4.23057C15.9873 3.76755 18.4001 4.00519 20.5929 4.91344C22.7856 5.82169 24.6597 7.35977 25.9783 9.33316C27.2969 11.3065 28.0007 13.6266 28.0007 16C27.9971 19.1815 26.7317 22.2317 24.482 24.4814C22.2324 26.7311 19.1822 27.9965 16.0007 28Z" fill="#F44C62"/>
												<path d="M21.6556 10.3427C21.4055 10.0927 21.0665 9.95228 20.7129 9.95228C20.3594 9.95228 20.0203 10.0927 19.7702 10.3427L15.9996 14.1147L12.2289 10.3427C12.1059 10.2153 11.9588 10.1137 11.7961 10.0439C11.6334 9.97399 11.4585 9.9372 11.2814 9.93567C11.1044 9.93413 10.9288 9.96786 10.765 10.0349C10.6011 10.1019 10.4522 10.2009 10.327 10.3261C10.2019 10.4513 10.1029 10.6002 10.0358 10.7641C9.96877 10.9279 9.93504 11.1035 9.93657 11.2805C9.93811 11.4576 9.97489 11.6325 10.0448 11.7952C10.1147 11.9579 10.2162 12.105 10.3436 12.228L14.1142 16L10.3436 19.772C10.2162 19.895 10.1147 20.0421 10.0448 20.2048C9.97489 20.3675 9.93811 20.5424 9.93657 20.7195C9.93504 20.8965 9.96877 21.0721 10.0358 21.2359C10.1029 21.3998 10.2019 21.5487 10.327 21.6739C10.4522 21.7991 10.6011 21.8981 10.765 21.9651C10.9288 22.0321 11.1044 22.0659 11.2814 22.0643C11.4585 22.0628 11.6334 22.026 11.7961 21.9561C11.9588 21.8863 12.1059 21.7847 12.2289 21.6573L15.9996 17.8853L19.7702 21.6573C19.8932 21.7847 20.0404 21.8863 20.203 21.9561C20.3657 22.026 20.5407 22.0628 20.7177 22.0643C20.8947 22.0659 21.0703 22.0321 21.2342 21.9651C21.398 21.8981 21.5469 21.7991 21.6721 21.6739C21.7973 21.5487 21.8963 21.3998 21.9633 21.2359C22.0304 21.0721 22.0641 20.8965 22.0626 20.7195C22.061 20.5424 22.0243 20.3675 21.9544 20.2048C21.8845 20.0421 21.7829 19.895 21.6556 19.772L17.8849 16L21.6556 12.228C21.9055 11.978 22.046 11.6389 22.046 11.2853C22.046 10.9318 21.9055 10.5927 21.6556 10.3427Z" fill="#F44C62"/>
											</svg>
											</Link>
										</div> */}
									</div>
								</div>
							</div>
							<div className="row align-items-center p-4  border-bottom">
								<div className="col-xl-4 col-xxl-4 col-lg-5 col-md-12">
									<div className="media align-items-center">
										<div className="custom-control custom-checkbox mr-4">
											{/* <input type="checkbox" className="custom-control-input" id="customCheckBox6" required="" />
											<label className="custom-control-label" htmlFor="customCheckBox6"></label> */}
										</div>
										<Link to={"#"}>
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
										{/* <div className="edit ml-auto col-xl-5 col-sm-3 col-lg-4 col-6">
											<Link to={"#"} className="mr-4">
											<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
												<path d="M16.0007 1.33333C13.0999 1.33333 10.2642 2.19351 7.85229 3.80511C5.44037 5.4167 3.56051 7.70732 2.45042 10.3873C1.34034 13.0673 1.04989 16.0163 1.61581 18.8613C2.18172 21.7064 3.57859 24.3197 5.62976 26.3709C7.68093 28.4221 10.2943 29.8189 13.1393 30.3849C15.9844 30.9508 18.9334 30.6603 21.6133 29.5502C24.2933 28.4402 26.584 26.5603 28.1955 24.1484C29.8071 21.7365 30.6673 18.9008 30.6673 16C30.6627 12.1116 29.116 8.38371 26.3665 5.63416C23.617 2.88462 19.8891 1.33792 16.0007 1.33333ZM16.0007 28C13.6273 28 11.3072 27.2962 9.33381 25.9776C7.36042 24.6591 5.82235 22.7849 4.9141 20.5922C4.00585 18.3995 3.76821 15.9867 4.23123 13.6589C4.69426 11.3311 5.83715 9.19295 7.51538 7.51472C9.19361 5.83649 11.3318 4.6936 13.6596 4.23057C15.9873 3.76755 18.4001 4.00519 20.5929 4.91344C22.7856 5.82169 24.6597 7.35977 25.9783 9.33316C27.2969 11.3065 28.0007 13.6266 28.0007 16C27.9971 19.1815 26.7317 22.2317 24.482 24.4814C22.2324 26.7311 19.1822 27.9965 16.0007 28Z" fill="#2BC155"/>
												<path d="M20.3901 11.724L14.6661 17.448L11.6088 14.3907C11.4858 14.2633 11.3387 14.1617 11.176 14.0919C11.0133 14.022 10.8384 13.9852 10.6613 13.9837C10.4843 13.9821 10.3087 14.0159 10.1449 14.0829C9.98099 14.1499 9.83212 14.2489 9.70693 14.3741C9.58174 14.4993 9.48274 14.6482 9.41569 14.8121C9.34865 14.9759 9.31492 15.1515 9.31646 15.3285C9.318 15.5056 9.35478 15.6805 9.42466 15.8432C9.49453 16.0059 9.59611 16.153 9.72346 16.276L13.7235 20.276C13.9735 20.5259 14.3126 20.6664 14.6661 20.6664C15.0197 20.6664 15.3587 20.5259 15.6088 20.276L22.2754 13.6093C22.5183 13.3579 22.6527 13.0211 22.6497 12.6715C22.6466 12.3219 22.5064 11.9875 22.2592 11.7402C22.012 11.493 21.6776 11.3528 21.328 11.3498C20.9784 11.3467 20.6416 11.4811 20.3901 11.724Z" fill="#2BC155"/>
											</svg>
											</Link>
											<Link to={"#"}>
											<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
												<path d="M16.0007 1.33333C13.0999 1.33333 10.2642 2.19351 7.85229 3.80511C5.44037 5.4167 3.56051 7.70732 2.45042 10.3873C1.34034 13.0673 1.04989 16.0163 1.61581 18.8613C2.18172 21.7064 3.57859 24.3197 5.62976 26.3709C7.68093 28.4221 10.2943 29.8189 13.1393 30.3849C15.9844 30.9508 18.9334 30.6603 21.6133 29.5502C24.2933 28.4402 26.584 26.5603 28.1955 24.1484C29.8071 21.7365 30.6673 18.9008 30.6673 16C30.6627 12.1116 29.116 8.38371 26.3665 5.63416C23.617 2.88462 19.8891 1.33792 16.0007 1.33333ZM16.0007 28C13.6273 28 11.3072 27.2962 9.33381 25.9776C7.36042 24.6591 5.82235 22.7849 4.9141 20.5922C4.00585 18.3995 3.76821 15.9867 4.23123 13.6589C4.69426 11.3311 5.83715 9.19295 7.51538 7.51472C9.19361 5.83649 11.3318 4.6936 13.6596 4.23057C15.9873 3.76755 18.4001 4.00519 20.5929 4.91344C22.7856 5.82169 24.6597 7.35977 25.9783 9.33316C27.2969 11.3065 28.0007 13.6266 28.0007 16C27.9971 19.1815 26.7317 22.2317 24.482 24.4814C22.2324 26.7311 19.1822 27.9965 16.0007 28Z" fill="#F44C62"/>
												<path d="M21.6556 10.3427C21.4055 10.0927 21.0665 9.95228 20.7129 9.95228C20.3594 9.95228 20.0203 10.0927 19.7702 10.3427L15.9996 14.1147L12.2289 10.3427C12.1059 10.2153 11.9588 10.1137 11.7961 10.0439C11.6334 9.97399 11.4585 9.9372 11.2814 9.93567C11.1044 9.93413 10.9288 9.96786 10.765 10.0349C10.6011 10.1019 10.4522 10.2009 10.327 10.3261C10.2019 10.4513 10.1029 10.6002 10.0358 10.7641C9.96877 10.9279 9.93504 11.1035 9.93657 11.2805C9.93811 11.4576 9.97489 11.6325 10.0448 11.7952C10.1147 11.9579 10.2162 12.105 10.3436 12.228L14.1142 16L10.3436 19.772C10.2162 19.895 10.1147 20.0421 10.0448 20.2048C9.97489 20.3675 9.93811 20.5424 9.93657 20.7195C9.93504 20.8965 9.96877 21.0721 10.0358 21.2359C10.1029 21.3998 10.2019 21.5487 10.327 21.6739C10.4522 21.7991 10.6011 21.8981 10.765 21.9651C10.9288 22.0321 11.1044 22.0659 11.2814 22.0643C11.4585 22.0628 11.6334 22.026 11.7961 21.9561C11.9588 21.8863 12.1059 21.7847 12.2289 21.6573L15.9996 17.8853L19.7702 21.6573C19.8932 21.7847 20.0404 21.8863 20.203 21.9561C20.3657 22.026 20.5407 22.0628 20.7177 22.0643C20.8947 22.0659 21.0703 22.0321 21.2342 21.9651C21.398 21.8981 21.5469 21.7991 21.6721 21.6739C21.7973 21.5487 21.8963 21.3998 21.9633 21.2359C22.0304 21.0721 22.0641 20.8965 22.0626 20.7195C22.061 20.5424 22.0243 20.3675 21.9544 20.2048C21.8845 20.0421 21.7829 19.895 21.6556 19.772L17.8849 16L21.6556 12.228C21.9055 11.978 22.046 11.6389 22.046 11.2853C22.046 10.9318 21.9055 10.5927 21.6556 10.3427Z" fill="#F44C62"/>
											</svg>
											</Link>
										</div> */}
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
}
export default Review;