import RiderStatisticBoxes from "../../subcomponents/RiderStatistics/RiderStatisticsBoxes";

import UserCard from "../../subcomponents/UserCard/UserCard";
import React from "react";
import { useAuthContext } from "../../../Providers/AuthProvider";
import "./Profile.css";

const Profile = () => {
  const userData = useAuthContext;
  return (
    <div className="min-h-screen bg-blue-500 flex flex-col items-center px-4 py-8">
      <img
        src="https://unsplash.com/photos/man-in-blue-tank-top-riding-on-bicycle-during-daytime-spjyZ9btsSE"
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
          <h2 className="text-2xl font-semibold text-white">Saved Routes</h2>
          <div className="flex items-center">
            <p className="text-2xl text-white">(3)</p>
            <svg /*ADD ICON HERE!!!-JJ*/ className="ml-2 w-6 h-6 text-gray-500" />
          </div>
        </div>
      </div>

      <div className="w-11/12 h-1 bg-white mt-3"></div>

      <h2 className="self-start text-lg font-semibold mt-5 text-white">
        Statistics
      </h2>

      <div className="grid grid-cols-2 gap-4 mt-4">
        {Array.from({ length: 4 }).map((_, index) => (
          <div key={index} className="p-8 bg-white rounded-lg shadow-md">
            <h3 className="text-md font-semibold">Header {index + 1}</h3>
            <p className="text-sm text-gray-500">Subheader {index + 1}</p>
          </div>
        ))}
      </div>

      <div className="w-11/12 h-1 bg-white mt-5"></div>

      <div className="flex mt-5">
        {Array.from({ length: 5 }).map((_, index) => (
          <svg
            /*ADD STAR SVG HERE!!-JJ*/ key={index}
            className="w-6 h-6 text-yellow-500"
          />
        ))}
      </div>
    </div>
  );
};

export default Profile;
