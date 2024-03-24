import PROFILESTOCKPIC from '/Users/davonbridgett/Documents/BIKE_THE_BIG_APPLE/Bike-The-Big-Apple/src/components/assets/ProfileStockPic.jpg'
import React from 'react';
import { AuthContext } from '../../../Providers/AuthProvider';
import './UserCard.css';

// Import your CSS file

const UserCard = () => {
    return (
        <div className="userCard">
            <div className="userCardImg">
                <img variant="top" src={PROFILESTOCKPIC} alt="Card Image" />
            </div>
            <div className="userCardInfo">
                <h5 className="userCardMaidenName">Albert</h5>
                <p className="userCardUserName">
                    "I'm Here to Ride SAFE & FREE!"
                </p>
            </div>
        </div>
    );
}

export default UserCard;