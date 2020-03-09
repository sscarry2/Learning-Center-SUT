import React, { useState, useEffect } from 'react';
import BookingElement from './BookingElement';
import { UsersById } from '../api/user';

function MyBookings({ user, userBookings, onDeleteBooking, roomData }) {
  const [users, setUsers] = useState('');

  useEffect(() => {
    UsersById().then(users => {
      setUsers(users)
    });
  }, []);
  return (
    <div className='wrapper__bookings'>
      <div className='booking__user-info'>
        <div className='img-resize'>
          <img
            src={'http://localhost:5000/user/image/' + users.userImage}
            alt='pic'
          />
        </div>
        <h2>{`${users.firstName} ${users.lastName}`}</h2>
      </div>
      <div className='user-booking-container'>
        {!!userBookings ? (
          Object.keys(userBookings).map(key => (
            <BookingElement
              key={key}
              roomData={roomData}
              bookingData={userBookings[key]}
              onDeleteBooking={onDeleteBooking}
            />
          ))
        ) : (
          <p>You have not yet made any bookings</p>
        )}
      </div>
    </div>
  );
}

export default MyBookings;
