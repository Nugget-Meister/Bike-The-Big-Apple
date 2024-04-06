import RiderStatisticBoxes from "../../subcomponents/RiderStatistics/RiderStatisticsBoxes";

import UserCard from "../../subcomponents/UserCard/UserCard";
import React from "react";
import { useAuthContext } from "../../../Providers/AuthProvider";
import "./Profile.css";

const Profile = () => {
  const userData = useAuthContext;
  return (
    <div className="min-h-screen bg-bike-blue flex flex-col items-center px-4 py-8">
      <img
        src="https://images.unsplash.com/photo-1593057902358-68cfcd1d4872?q=80&w=2952&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="profile"
        className="w-48 h-48 object-cover rounded-full md:w-64 md:h-64 border-4 border-white"
      />

      <h1 className="text-5xl md:text-3xl font-semibold mt-4 text-white">
        Albert
      </h1>

      <p className="text-xl md:text-lg text-gray-300 mt-2">user1234</p>

      <div className="w-11/12 h-1 bg-white mt-5"></div>

      <div className="w-11/12 mt-3">
        <div className="flex items-center justify-start space-x-12">
          <a href="/saved" className="text-2xl font-semibold text-bike-off-white">
            Saved Routes
          </a>
          <div className="flex items-center">
            <p className="text-2xl text-white">(3)</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="rgba(252,254,231,255)"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
              />
            </svg>
          </div>
        </div>
      </div>

      <div className="w-11/12 h-1 bg-white mt-3"></div>

      <h2 className="self-start text-lg font-semibold mt-5 text-white">
        Statistics
      </h2>

      <div className="grid grid-cols-2 gap-4 mt-4">
        {Array.from({ length: 4 }).map((_, index) => (
          <div
            key={index}
            className="p-8 bg-bike-off-white rounded-lg shadow-md"
          >
            <h3 className="text-md font-semibold">
              Achievement Header {index + 1}
            </h3>
            <p className="text-sm text-gray-500">Achievement {index + 1}</p>
          </div>
        ))}
      </div>

      <div className="w-11/12 h-1 bg-white mt-5"></div>
      <h2 className="self-start text-lg font-semibold mt-5 text-white">
        Acheivements
      </h2>
      <div className="flex mt-5 space-x-12">
        {Array.from({ length: 5 }).map((_, index) => (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="rgba(254,207,91,255)"
            class="w-10 h-10"
          >
            <path
              fill-rule="evenodd"
              d="M12.516 2.17a.75.75 0 0 0-1.032 0 11.209 11.209 0 0 1-7.877 3.08.75.75 0 0 0-.722.515A12.74 12.74 0 0 0 2.25 9.75c0 5.942 4.064 10.933 9.563 12.348a.749.749 0 0 0 .374 0c5.499-1.415 9.563-6.406 9.563-12.348 0-1.39-.223-2.73-.635-3.985a.75.75 0 0 0-.722-.516l-.143.001c-2.996 0-5.717-1.17-7.734-3.08Zm3.094 8.016a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
              clip-rule="evenodd"
            />
          </svg>
        ))}
      </div>
    </div>
  );
};

export default Profile;
