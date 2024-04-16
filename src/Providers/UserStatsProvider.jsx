import React, { useEffect, useState, createContext, useContext } from "react";
//noice here we are refrenceing the service we set up earlier
import { getSingleRiderStatistic } from "../components/subcomponents/RiderStatistics/RiderStatisticsHelper/apiCallsRiderStatisitics";
export const userStatisticsContext = createContext(null);
export function useUserStatisticsContext(){
  return useContext(userStatisticsContext)
}

export const UserStatsProvider = () => {
    const [statsProvider, setStatsProvider] = useState([]);
  
    useEffect(() => {
      getSingleRiderStatistic()
        .then((data) => {
          if (data) {
            setStatsProvider(data);
          }
        })
        .catch((error) => console.error("There was an error loading user rider statistics.", error));
    }, []);
  
    return (
        <userStatisticsContext.Provider value={statsProvider}>
        {/* props.children will render any nested child components */}           
              <div>{props.children}</div>
         </userStatisticsContext.Provider>
  );};
  