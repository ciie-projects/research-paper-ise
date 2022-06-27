import { useContext } from "react";
import firebase from "firebase";
import { UserContext } from "../../../../App";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
export default function LandingPage() {
  let { user, setUser } = useContext(UserContext);
  const uiConfig = {
    // Popup signin flow rather than redirect flow.
    signInFlow: "popup",
    // Redirect to /signedIn after sign in is successful. Alternatively you can provide a callbacks.signInSuccess function.
    signInSuccessUrl: "/dashboard",
    // We will display Google and Facebook as auth providers.
    signInOptions: [
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      //   firebase.auth.EmailAuthProvider.PROVIDER_ID,
    ],
  };

  return (
    <>
      <header className="header-style-1">
        <div className="header-navbar navbar-sticky" id="login">
          <div className="container">
            <div
              className="d-flex align-items-center justify-content-between"
              style={{ height: "3rem" }}
            >
              <div className="site-logo">
                <a href="/">
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdQSlOvTLEF-ECpJwcCsjE_PWONr-NxH0av0NrONY932eu82vXJyJ4rK-yEqP3n-xRsSw&usqp=CAU"
                    alt=""
                    className="img-fluid"
                    style={{ width: "5rem", height: "5rem" }}
                  />
                </a>
              </div>
              <div>
                <ul className="primary-menu">
                  <li>
                    <StyledFirebaseAuth
                      uiConfig={uiConfig}
                      firebaseAuth={firebase.auth()}
                    />
                  </li>
                </ul>
              </div>

              {/* <div className="offcanvas-icon d-block d-lg-none">
                <li>
                    <StyledFirebaseAuth
                    uiConfig={uiConfig}
                    firebaseAuth={firebase.auth()}
                  />
            
                </li>
              </div> */}

              {/* <div className="header-category-menu d-none d-xl-block">
                <ul>
                    <li className="has-submenu">
                        <a href="https://bmsce.ac.in/home/Information-Science-and-Engineering-Faculty">BMSCE-ISE</a>
                        
                    </li>
                </ul>
            </div> */}

              {/* <nav className="site-navbar ms-auto">
                <ul className="primary-menu">

                    <li>
                    <StyledFirebaseAuth
                    uiConfig={uiConfig}
                    firebaseAuth={firebase.auth()}
                  />
            
                    </li>
                </ul>
              </nav> */}
            </div>
          </div>
        </div>
      </header>

      <section className="banner-style-4 banner-padding">
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div className="col-md-12 col-xl-6 col-lg-6">
              <div className="banner-content ">
                <span className="subheading">BMSCE-ISE</span>
                <h1>Online-Research-Paper Submission Portal</h1>
                <p className="mb-40"> Publish Your Publications Here</p>
              </div>
            </div>
            <div className="col-md-12 col-xl-6 col-lg-6">
              <div className="banner-img-round mt-5 mt-lg-0 ps-5">
                <img
                  src="assets/images/banner/banner_img.png"
                  alt=""
                  className="img-fluid"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="counter-section4">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-12 counter-inner">
              <div className="row">
                <div className="col-lg-3 col-md-6">
                  <div className="counter-item mb-5 mb-lg-0">
                    <div className="count">
                      <span className="counter h2">2000</span>
                      <span>+</span>
                    </div>
                    <p>Students</p>
                  </div>
                </div>

                <div className="col-lg-3 col-md-6">
                  <div className="counter-item mb-5 mb-lg-0">
                    <div className="count">
                      <span className="counter h2">1200</span>
                    </div>
                    <p>Faculties</p>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6">
                  <div className="counter-item mb-5 mb-lg-0">
                    <div className="count">
                      <span className="counter h2">2256</span>
                    </div>
                    <p>Publications</p>
                  </div>
                </div>

                <div className="col-lg-3 col-md-6">
                  <div className="counter-item">
                    <div className="count">
                      <span className="counter h2">100</span>
                      <span>%</span>
                    </div>
                    <p>Satisfaction</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="course-category-3 section-padding">
        <div className="container">
          <div className="row mb-70 justify-content-center">
            <div className="col-xl-8">
              <div className="section-heading text-center">
                <h2 className="font-lg">Topics on which you can publish</h2>
                <p></p>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-xl col-lg-4 col-sm-6">
              <div className="single-course-category style-3 bg-1">
                <div className="course-cat-icon">
                  <img
                    src="assets/images/icon/icon1.png"
                    alt=""
                    className="img-fluid"
                  />
                </div>
                <div className="course-cat-content">
                  <h4 className="course-cat-title">
                    <a href="#">Data Science & Analytics</a>
                  </h4>
                </div>
              </div>
            </div>

            <div className="col-xl col-lg-4 col-sm-6">
              <div className="single-course-category style-3 bg-2">
                <div className="course-cat-icon">
                  <img
                    src="assets/images/icon/icon2.png"
                    alt=""
                    className="img-fluid"
                  />
                </div>
                <div className="course-cat-content">
                  <h4 className="course-cat-title">
                    <a href="#">Artificial Intellegence</a>
                  </h4>
                </div>
              </div>
            </div>

            <div className="col-xl col-lg-4 col-sm-6">
              <div className="single-course-category style-3 bg-3">
                <div className="course-cat-icon">
                  <img
                    src="assets/images/icon/icon3.png"
                    alt=""
                    className="img-fluid"
                  />
                </div>
                <div className="course-cat-content">
                  <h4 className="course-cat-title">
                    <a href="#">networking, CyberSecurity</a>
                  </h4>
                </div>
              </div>
            </div>

            <div className="col-xl col-lg-4 col-sm-6">
              <div className="single-course-category style-3 bg-4">
                <div className="course-cat-icon">
                  <img
                    src="assets/images/icon/icon4.png"
                    alt=""
                    className="img-fluid"
                  />
                </div>
                <div className="course-cat-content">
                  <h4 className="course-cat-title">
                    <a href="#">Web Development</a>
                  </h4>
                </div>
              </div>
            </div>

            <div className="col-xl col-lg-4 col-sm-6">
              <div className="single-course-category style-3 bg-5">
                <div className="course-cat-icon">
                  <img
                    src="assets/images/icon/icon6.png"
                    alt=""
                    className="img-fluid"
                  />
                </div>
                <div className="course-cat-content">
                  <h4 className="course-cat-title">
                    <a href="#"> And Many more!!</a>
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="work-process section-padding">
        <div className="container">
          <div className="row mb-40">
            <div className="col-xl-8">
              <div className="section-heading ">
                <h2 className="font-lg">How To Pubish In this Portal</h2>
                <p></p>
              </div>
            </div>
          </div>

          <div className="row align-items-center">
            <div className="col-xl-7 pe-xl-5 col-lg-12">
              <div className="row">
                <div className="col-xl-6 col-lg-6 col-md-6">
                  <div className="step-item ">
                    <div className="step-number bg-1">01</div>
                    <div className="step-text">
                      <h5>Sign In/Sign Up</h5>
                      <p>Sign In With Official Mail Id</p>
                    </div>
                  </div>
                </div>

                <div className="col-xl-6 col-lg-6 col-md-6">
                  <div className="step-item">
                    <div className="step-number bg-2">02</div>
                    <div className="step-text">
                      <h5>Set Up Your Profile</h5>
                      <p>After the sucessfull sign-In,Set up your Profile .</p>
                    </div>
                  </div>
                </div>

                <div className="col-xl-6 col-lg-6 col-md-6 ">
                  <div className="step-item">
                    <div className="step-number bg-3">03</div>
                    <div className="step-text">
                      <h5>Pubish</h5>
                      <p>Fill Up the Form To Publish</p>
                    </div>
                  </div>
                </div>

                <div className="col-xl-6 col-lg-6 col-md-6">
                  <div className="step-item">
                    <div className="step-number bg-1">04</div>
                    <div className="step-text">
                      <h5>Get Mail</h5>
                      <p>
                        After the successfull publishing,recieve the published
                        paper link through the mail
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-xl-5">
              <img
                src="https://files.jotform.com/jotformapps/d214c530881c224975ae274a32741d4c.png"
                alt=""
                className="img-fluid"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="cta-5 mb--120 bg-gray">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-12">
              <div className="cta-inner4">
                <div className="row align-items-center justify-content-center">
                  <div className="col-xl-4 col-lg-5">
                    <div className="cta-img mb-4 mb-lg-0">
                      <img
                        src="https://webcampus.bmsce.in/assets/img/img15.png"
                        alt=""
                        className="img-fluid"
                      />
                    </div>
                  </div>
                  <div className="col-xl-6 col-lg-6">
                    <div className="cta-content ps-lg-4">
                      <span className="subheading mb-10">
                        Sign-In to Publish
                      </span>
                      <h2 className="mb-20">
                        Sign In through Your Offcial email id
                      </h2>
                      <a href="#" className="btn btn-main rounded">
                        Sign-In
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        class="footer footer-3"
        style={{ marginBottom: "0rem; paddingTop:140px !important" }}
      >
        <div class="footer-mid">
          <div
            class="container"
            style={{
              height: "4rem",
              overflow: "hidden",
              marginBottom: "0",
              padding: "0",
            }}
          >
            <div class="row">
              <div class="col-xl-12 col-sm-12 me-auto">
                <div class="widget footer-widget mb-5 mb-lg-0">
                  <div class="footer-logo">
                    <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdQSlOvTLEF-ECpJwcCsjE_PWONr-NxH0av0NrONY932eu82vXJyJ4rK-yEqP3n-xRsSw&usqp=CAU"
                      alt=""
                      style={{ width: "4rem", height: "4rem" }}
                      class="img-fluid"
                    />
                    <p
                      class="mb-0 copyright  "
                      style={{ color: "black", lineHeight: 1.4 }}
                    >
                      © 2022 rights reserved & developed by{" "}
                      <a href="" rel="nofollow">
                        CIIE-Developers Wing
                      </a>{" "}
                    </p>
                  </div>

                  {/* <p class="mt-4">BMSCE-ISE</p> */}
                </div>
              </div>
              {/* <div class="col-m-2 col-sm-6">
                    <div class="footer-widget mb-5 mb-lg-0">
                    
                    </div>
              </div> */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
