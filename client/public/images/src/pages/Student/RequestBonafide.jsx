import React, { useContext, useState } from "react";
import AuthContext from "../../components/context/auth/authContext";
import UserContext from "../../components/context/user/userContext";
import AlertContext from "../../components/context/alert/alertContext";

const RequestBonafide = () => {
  const [bonafideDetails, setBonafideDetails] = useState({
    reason: "",
    purpose: "",
  });
  const { reason, purpose } = bonafideDetails;

  //auth Context
  const authContext = useContext(AuthContext);
  const { user, isAuthenticated } = authContext;

  //user Context
  const userContext = useContext(UserContext);
  const { requestBonafide } = userContext;

  //alert context
  const alertContext = useContext(AlertContext);
  const { setAlert } = alertContext;

  const onChange = (e) =>
    setBonafideDetails({ ...bonafideDetails, [e.target.name]: e.target.value });
  const handleChange = (e) => {
    setBonafideDetails({ ...bonafideDetails, purpose: e.target.value });
  };
  const onSubmit = (e) => {
    e.preventDefault();
    if (reason === "" || purpose === "") {
      setAlert("All the fields are mandatory", "danger");
    } else {
      requestBonafide(bonafideDetails);
      //name mis dept year academic-year
    }
  };
  return (
    <div className="">
      <div className="bg-white m-2 flex flex-1 flex-col h-screen">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Request for bonafide
          </h2>
        </div>

        <div className="px-2 mt-10 sm:mx-auto sm:w-full sm:max-w-xl">
          <form className="space-y-6" id="loginform" onSubmit={onSubmit}>
            <fieldset>
              <legend className="text-md font-bold leading-6 text-gray-900">
                Bonafide certificate is issued for following
              </legend>
              <p className="mt-1 text-sm leading-6 text-gray-600">
                This certificate should be only for mentioned process.
              </p>
              <div className="mt-6 space-y-3">
                <div className="flex items-center gap-x-3">
                  <input
                    id="push-everything"
                    type="radio"
                    className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                    onChange={handleChange}
                    name="push-notifications"
                    value="Buspass"
                  />
                  <label
                    htmlFor="push-everything"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Buspass
                  </label>
                </div>
                <div className="flex items-center gap-x-3">
                  <input
                    id="push-email"
                    name="push-notifications"
                    onChange={handleChange}
                    type="radio"
                    value="Scholarship"
                    className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                  />
                  <label
                    htmlFor="push-email"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Scholarship
                  </label>
                </div>
                <div className="flex items-center gap-x-3">
                  <input
                    id="push-nothing"
                    name="push-notifications"
                    onChange={handleChange}
                    value="Educational Loan"
                    type="radio"
                    className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                  />
                  <label
                    htmlFor="push-nothing"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Educational Loan
                  </label>
                </div>
                <div className="flex items-center gap-x-3">
                  <input
                    id="push-nothing"
                    name="push-notifications"
                    onChange={handleChange}
                    type="radio"
                    value="Verification"
                    className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                  />
                  <label
                    htmlFor="push-nothing"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Verification{" "}
                  </label>
                </div>
                <div className="flex items-center gap-x-3">
                  <input
                    id="push-nothing"
                    name="push-notifications"
                    onChange={handleChange}
                    type="radio"
                    value="Job"
                    className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                  />
                  <label
                    htmlFor="push-nothing"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Job
                  </label>
                </div>
                <div className="flex items-center gap-x-3">
                  <input
                    id="push-nothing"
                    name="push-notifications"
                    onChange={handleChange}
                    value="Internship"
                    type="radio"
                    className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                  />
                  <label
                    htmlFor="push-nothing"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Internship
                  </label>
                </div>
                <div className="flex items-center gap-x-3">
                  <input
                    id="push-nothing"
                    name="push-notifications"
                    onChange={handleChange}
                    value="Caste Validity Process "
                    type="radio"
                    className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                  />
                  <label
                    htmlFor="push-nothing"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Caste Validity Process
                  </label>
                </div>
              </div>
            </fieldset>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Reason For Certificate
              </label>
              <div className="mt-2">
                <input
                  id="reason"
                  type="text"
                  name="reason"
                  value={reason}
                  onChange={onChange}
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Send Request
              </button>
            </div>
          </form>

          {/* <p className="mt-10 text-center text-sm text-gray-500">
              Not a member?{' '}
              <a href="#" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
                Start a 14 day free trial
              </a>
            </p> */}
        </div>
      </div>
    </div>
  );
};

export default RequestBonafide;
