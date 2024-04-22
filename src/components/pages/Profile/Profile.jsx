import RiderStatisticBoxes from "../../subcomponents/RiderStatistics/RiderStatisticsBoxes";
import UserCard from "../../subcomponents/UserCard/UserCard";
import React from "react";
import { useAuthContext } from "../../../Providers/AuthProvider";
import "./Profile.css";
import Logout from "../../subcomponents/Login/logout";
import userIcon from '../../../../public/user.svg'

const Profile = () => {
  const userData = useAuthContext();
  return (
    <div className="min-h-screen bg-bike-blue flex flex-col items-center px-4 py-8">
      <img
        src={userData?.photoURL || userIcon}
        alt="profile"
        className="w-48 h-48 object-cover rounded-full md:w-64 md:h-64 border-4 border-bike-off-white"
      />

      <h1 className="text-5xl md:text-3xl font-semibold mt-4 text-bike-off-white">
        {userData?.displayName}
      </h1>

      <p className="text-xl md:text-lg text-gray-300 mt-2">{userData?.email}</p>

      <div className="w-11/12 h-0.5 bg-bike-off-white mt-5"></div>

      <div className="w-11/12 mt-3 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <a
            href="/saved"
            className="text-2xl font-semibold text-bike-off-white flex items-center"
          >
            Saved Routes (3)
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="rgba(252,254,231,255)" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
            </svg>
          </a>
        </div>
        <div className="flex items-center">
          <Logout />
        </div>
      </div>

      <div className="w-11/12 h-0.5 bg-bike-off-white mt-3"></div>

      <h2 className="self-start text-lg font-semibold mt-5 text-bike-off-white">
        Statistics
      </h2>

      <div className="grid grid-cols-2 gap-12 mt-5">
        <div            className="p-8 bg-bike-off-white rounded-lg shadow-md"
          >
            <h3 className="text-md font-semibold">
              Distance Traveled
            </h3>
            <p className="text-sm text-gray-500">3.0 mi</p>
        </div>
        <div            className="p-8 bg-bike-off-white rounded-lg shadow-md"
          >
            <h3 className="text-md font-semibold">
              Checkpoints Completed
            </h3>
            <p className="text-sm text-gray-500">23</p>
        </div>
        <div            className="p-8 bg-bike-off-white rounded-lg shadow-md"
          >
            <h3 className="text-md font-semibold">
              Routes Completed
            </h3>
            <p className="text-sm text-gray-500">3</p>
        </div>
        <div            className="p-8 bg-bike-off-white rounded-lg shadow-md"
          >
            <h3 className="text-md font-semibold">
              Account Created
            </h3>
            <p className="text-sm text-gray-500">March 14th, 2024</p>
        </div>
      </div>

      <div className="w-11/12 h-1 bg-white mt-5"></div>
    </div>
  );
};

export default Profile;