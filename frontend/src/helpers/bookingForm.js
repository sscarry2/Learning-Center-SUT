import React from 'react'

// the <option> elements for the startTime and endTime <select> dropdowns
export const startTimeSelectOptions = [
         <option value='8:00'>8:00am</option>,
         <option value='9:00'>9:00am</option>,
         <option value='10:00'>10:00am</option>,
         <option value='11:00'>11:00am</option>,
         <option value='12:00'>12:00pm</option>,
         <option value='13:00'>1:00pm</option>,
         <option value='14:00'>2:00pm</option>,
         <option value='15:00'>3:00pm</option>,
         <option value='16:00'>4:00pm</option>,
         <option value='17:00'>5:00pm</option>,
         <option value='18:00'>6:00pm</option>,
         <option value='19:00'>7:00pm</option>,
         <option value='20:00'>8:00pm</option>,
         <option value='21:00'>9:00pm</option>,
         <option value='22:00'>10:00pm</option>,
         <option value='23:00'>11:00pm</option>
       ];

export const endTimeSelectOptions = [
         <option value='8:00'>8:00am</option>,
         <option value='9:00'>9:00am</option>,
         <option value='10:00'>10:00am</option>,
         <option value='11:00'>11:00am</option>,
         <option value='12:00'>12:00pm</option>,
         <option value='13:00'>1:00pm</option>,
         <option value='14:00'>2:00pm</option>,
         <option value='15:00'>3:00pm</option>,
         <option value='16:00'>4:00pm</option>,
         <option value='17:00'>5:00pm</option>,
         <option value='18:00'>6:00pm</option>,
         <option value='19:00'>7:00pm</option>,
         <option value='20:00'>8:00pm</option>,
         <option value='21:00'>9:00pm</option>,
         <option value='22:00'>10:00pm</option>,
         <option value='23:00'>11:00pm</option>,
         <option value='00:00'>12:00am</option>
       ];

// formats the time extracted from the time inputs into an array, eg 8:30 => [8, 30]
export const formatTime = (time) => {
  let formatedTimeArray = []
  formatedTimeArray = time.split(':').map((item) => parseInt(item, 10))
  return formatedTimeArray
}

// Find the Room and building number from the booking ID
export const findRoomInfo = (roomId, roomData) => {
  let roomInfo
  roomData.forEach(room => {
    if (room._id === roomId) {
      roomInfo = room
    }
  })
  return roomInfo
}

