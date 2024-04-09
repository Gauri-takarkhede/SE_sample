import React, { useContext, useEffect, useState } from "react";
import AuthContext from "../../components/context/auth/authContext";
import Avatar from "../../components/Avatar";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { initialLoadUser } from "../../redux/actions/logActions";
import "../../css/Modal.css";
const Navbar = ({ initialLoadUser }) => {
  const authContext = useContext(AuthContext);
  const { user, logout } = authContext;
  useEffect(() => {
    // initialLoadUser();
    // eslint-disable-next-line
  }, []);
  const handleLogout = () => {
    console.log("LOgout");
    logout();
  };
  const [showModal, setShowModal] = useState(false);

  // Function to toggle the modal visibility
  const toggleModal = () => {
    setShowModal(!showModal);
  };
  const notification = ["hello", "today deadline", "today holiday"];

  return (
    <div className="flex flex-row  p-2 bg-white justify-between ">
      <div></div>
      {/*  <div className="">
        <input
          type="search"
          className="relative m-0 block  min-w-0 flex-auto rounded border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none dark:border-neutral-600 dark:text-black-800 dark:placeholder:text-black-200 dark:focus:border-primary"
          id="exampleSearch"
          placeholder="Type a Search"
        />
      </div>
      */}
      <div className="flex">
        <div>
          {/* Button to toggle the modal */}
          <button className="rounded-full" onClick={toggleModal}>
            <ion-icon
              className=" border border-gray-500  rounded-full hover:bg-custom-hover"
              style={{
                height: "2.2rem",
                width: "2.2rem",
                cursor: "pointer",
              }}
              name="notifications-circle-outline"
            ></ion-icon>
          </button>

          {/* Modal container */}
          {showModal && (
            <div className="modal">
              {/* Modal content */}
              <div className="modal-content">
                {/* Close button */}
                <span className="close" onClick={toggleModal}>
                  close
                </span>
                {/* Modal body */}
                <div className="modal-body">
                  <h2>Notifications</h2>
                  <p>
                    {notification.map((element, index) => (
                      <div key={index}>
                        <p>{element}</p>
                      </div>
                    ))}
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="flex ml-5">
          <div>
            <img
              src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
              className="w-8 mr-2 rounded-full"
              alt="Avatar"
            />
          </div>
          <button className="relative group hover:bg-transparent">
            {/* <Avatar/> */}
            <h3 className="mr-2 mt-1 font-medium">{user && user.name}</h3>
            <div
              className="z-10 hidden absolute shadow w-32 group-focus:block 
            top-full right-0"
            >
              <ul className=" text-sm bg-black rounded-lg text-white">
                <div className="w-32 py-2" onClick={handleLogout}>
                  Logout
                </div>
              </ul>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};
Navbar.propTypes = {
  initialLoadUser: PropTypes.func.isRequired,
};
export default connect(null, { initialLoadUser })(Navbar);
