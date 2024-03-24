import React from 'react';
import './UserCard.css'; // Import your CSS file

const UserCard = () => {
    return (
        <div className="userCard">
            <div className="userCardImg">
                <img variant="top" src={"src/components/assets/62718fed342b4e7b99c25c4995154d72.jpg"} alt="Card Image" />
            </div>
            <div className="userCardInfo">
                <h5 className="userCardMaidenName">Card title</h5>
                <p className="userCardUserName">
                    This is a wider card with supporting text below as a natural lead-in
                    to additional content. This content is a little bit longer.
                </p>
            </div>
        </div>
    );
}

export default UserCard;