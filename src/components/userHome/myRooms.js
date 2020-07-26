import React from 'react'

const MyRooms = props => {
    return (
        <>
            <div class="search-container">
                <input type="text" placeholder="Search..." />
                    <div class="search"></div>
            </div>
            <div>
                <h3>My Rooms:</h3>
            </div>
        </>
    );
}
export default MyRooms;