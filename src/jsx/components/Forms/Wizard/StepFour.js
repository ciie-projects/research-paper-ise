import React, { useState, useContext } from "react";
import "react-router-dom";
//import Rte from "../Summernote/Rte";
//import { Link } from "react-router-dom";
//import Summernote from "../Summernote/SummerNote";
//import StepOne from "./StepOne";

import axios from "axios";
import { FirstStep } from "./StepOne";
import { Secondstep } from "./StepTwo";
import { Thirdstep } from "./StepThree";
//import { useForm } from "react-hook-form";
// import {useAuth0} from "@auth0/auth0-react";
import { UserContext } from "../../../../App";

var Desc;
const StepFour = (props) => {
  let { user, setUser } = useContext(UserContext);
  const [description, setdescription] = useState("");
  /* const { handleSubmit } = useForm({
    defaultValues: {
      description,
    }, 
  });*/
  // conosle.log({props.state.author});
  // const [email, setemail] = useState("");
  // const {user,isAuthenticated,isLoading}=useAuth0();
  Desc = description;
  // setemail(isAuthenticated && user.email);
  const par = FirstStep();

  const Author = par.Author;
  const Publication = par.Publication;
  const PaperTitle = par.TItle;
  const IF = par.If;
  const DOI = par.Doi;

  const par2 = Secondstep();

  const PP = par2.FirstName;
  const year = par2.Date;
  const vol = par2.Phonenumber;
  const IISN = par2.Place;
  const par3 = Thirdstep();
  const Link = par3.link;
  var email = user && user.email;

  async function onSignUp(e) {
    e.preventDefault();
    await axios.post("http://localhost:3001/api/posts/", {
      Author,
      Publication,
      PaperTitle,
      IF,
      DOI,
      PP,
      year,
      vol,
      IISN,
      Link,
      Desc,
      email,
    });
    // const history=
    // location.replace("http://localhost:3000/react/demo/login");
    // history.back();
    window.location.replace("/submissions");
  }

  return (
    <section className="form-group">
      <div className="h-80">
        {/* <PageTitle activeMenu="Summernote" motherMenu="Form" /> */}
        <div className="row">
          <div className="col-xl-12 col-xxl-12">
            <div className="card">
              <div className="card-header">
                <h4 className="card-title">Note on your Publication</h4>
              </div>
              <div className="card-body">
                <div className="summernote">
                  <textarea
                    // type="textarea"
                    className="form-control"
                    value={description}
                    name="description"
                    onChange={(e) => setdescription(e.target.value)}
                    required
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <input
        type="submit"
        class="btn btn-primary"
        onClick={onSignUp}
        value="Submit"
      />
    </section>
  );
};

export { StepFour };
