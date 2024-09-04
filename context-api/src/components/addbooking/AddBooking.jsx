import React, { useContext, useState } from "react";
import { BookingContext } from "../context/BookingContext";

const AddBooking = () => {
  const bookcontext = useContext(BookingContext);
  const [venueName, setVenueName] = useState();
  const [slotCode, setSlotCode] = useState();
  const [mobile, setMobile] = useState();
  const { booking, setBooking } = bookcontext;
  const addDetailsHandler = () => {
    setBooking([
      ...booking,
      { venue: venueName, slotcode: slotCode, cmobile: mobile },
    ]);
    alert("Data added successfully");
    setVenueName("");
    setSlotCode("");
    setMobile("");
  };
  return (
    <div>
      venue name :{" "}
      <input
        type="text"
        value={venueName}
        onChange={(e) => {
          setVenueName(e.target.value);
        }}
      />{" "}
      <br />
      slot code :{" "}
      <input
        type="text"
        value={slotCode}
        onChange={(e) => {
          setSlotCode(e.target.value);
        }}
      />{" "}
      <br />
      mobile :{" "}
      <input
        type="text"
        value={mobile}
        onChange={(e) => {
          setMobile(e.target.value);
        }}
      />{" "}
      <br />
      <button onClick={addDetailsHandler}>Add Details</button>
    </div>
  );
};

export default AddBooking;
