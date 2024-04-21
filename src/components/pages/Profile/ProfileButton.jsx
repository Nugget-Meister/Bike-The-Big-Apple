import React from "react";
import { Link } from "react-router-dom";
import { useAuthContext } from "../../../Providers/AuthProvider";

const ProfileButton = () => {

  const userData = useAuthContext()


  return (
    <div className="z-10 ProfileButton absolute bottom-0 right-0 bg-bike-blue text-white p-2 m-2 my-4 rounded-full w-[4rem] h-[4rem]">
      <Link to="/profile">
        {/* <Button
          style={{
            backgroundColor: "black",
            color: "white",
            borderRadius: "15px",
          }}
        > */}
        <img
        src={userData?.photoURL}
        alt="profile"
        className="object-cover rounded-full md:w-64 md:h-64"
      />
        {/* </Button> */}
      </Link>
    </div>
  );
};

export default ProfileButton;
