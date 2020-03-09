import React from 'react'
import moment from 'moment'
import momentTimezone from 'moment-timezone'
import Button from './Button'
import { findRoomInfo } from '../helpers/bookingForm.js'

function BookingElement({
  bookingData,
  onDeleteBooking,
  roomData,
  getUserById
}) {

  const roomInfo = findRoomInfo(bookingData.roomId, roomData)
  const startTime = momentTimezone.tz(bookingData.bookingStart, 'Asia/Bangkok').format('h.mma')
  const endTime = momentTimezone.tz(bookingData.bookingEnd, 'Asia/Bangkok').format('h.mma')

  

  return (
    <div className="booking__box">
      <div className="booking__innerbox--left">
        <h3 className="header__heading--sub--alt header__heading--small">{moment(bookingData.bookingStart).format('dddd, MMMM Do YYYY')}</h3>
        <p>{bookingData.subject}</p>
        <p>{bookingData.purpose}</p>
      </div>
      <div className="booking__innerbox--middle">
        <p>From {startTime} to {endTime}</p>
        <p>Duration {bookingData.duration}hrs</p>
        <p>Building {roomInfo.building}, {roomInfo.name}</p>
      </div>
      {/* <div className="booking__innerbox--right">
        <Button
          onClick={() => onDeleteBooking(bookingData.roomId, bookingData._id)}
          text={`Delete`}
        />
      </div> */}
    </div>
  )
}

export default BookingElement