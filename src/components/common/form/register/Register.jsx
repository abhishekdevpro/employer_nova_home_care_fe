import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import LoginWithSocial from "./LoginWithSocial";
import Form from "./FormContent";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="form-inner">
      <h3>Create a Free SentrySpot Account</h3>

      {/* <Tabs>
        <div className="form-group register-dual">
          <TabList className="btn-box row">
            <Tab className="col-lg-6 col-md-12">
              <button className="theme-btn btn-style-four">
                <i className="la la-user"></i> Candidate
              </button>
            </Tab>

            <Tab className="col-lg-6 col-md-12">
              <button className="theme-btn btn-style-four">
                <i className="la la-briefcase"></i> Employer
              </button>
            </Tab>
          </TabList>
        </div>

        <TabPanel>
          <Form />
        </TabPanel>

        <TabPanel>
        </TabPanel>
      </Tabs> */}
      <Form />

      <div className="bottom-box">
        <div className="text">
          Already have an account?{" "}
          <Link
            to="#"
            className="call-modal login"
            data-bs-toggle="modal"
            data-bs-dismiss="modal"
            data-bs-target="#loginPopupModal"
          >
            LogIn
          </Link>
        </div>
        <div className="divider">
          <span>or</span>
        </div>
        <LoginWithSocial />
      </div>
      {/* End bottom-box LoginWithSocial */}
    </div>
  );
};

export default Register;