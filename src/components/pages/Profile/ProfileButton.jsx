import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuthContext } from "../../../Providers/AuthProvider";
import defaultUserIcon from '../../../../public/user.svg'
import LoadingScreen from "../../common/loadingScreen";


const ProfileButton = () => {

  const navigate = useNavigate()
  const userData = useAuthContext()
  const [isAnimating, setIsAnimating] = useState(false)

  const animateToProfile = async (duration) => {
    setIsAnimating(true)
    setTimeout(() => {
      navigate('/profile')
    }, duration)
  }


  return (
    <div className="z-10 ProfileButton absolute bottom-0 right-0 bg-bike-blue text-white p-2 m-2 my-4 rounded-full w-[4rem] h-[4rem]">
      {/* <Link to="/profile"> */}
      <img
        src={userData?.photoURL || defaultUserIcon}
        alt="profile"
        className="object-cover w-full rounded-full md:w-64 md:h-64"
        onClick={()=> {animateToProfile(1000)}}
      />
        {/* </Button> */}
      {/* </Link> */}
      {isAnimating ? (
      <>
        <LoadingScreen animationName={'expandFromCircle'}/>
      </>) : null}
    </div>
  );
};

export default ProfileButton;
