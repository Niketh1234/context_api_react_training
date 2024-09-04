import React, { useContext } from "react";
import { BookingContext } from "../context/BookingContext";
const ShowBooking = () => {
  const bookcontext = useContext(BookingContext);
  const { booking } = bookcontext;
  return (
    <div>
      <table>
        <thead>
          <th>Venue Name</th>
          <th>Slot Code</th>
          <th>Mobile</th>

          {booking.map((book, i) => {
            return (
              <tr key={i}>
                <td>{book.venue}</td>
                <td>{book.slotcode}</td>
                <td>{book.cmobile}</td>
              </tr>
            );
          })}
        </thead>
      </table>
    </div>
  );
};

export default ShowBooking;
