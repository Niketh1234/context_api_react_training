import React, { createContext, useState } from "react";
export const BookingContext = createContext();
export const BookingProvider = ({ children }) => {
  const [booking, setBooking] = useState([
    { venue: "sr", slotcode: "srk", cmobile: "9087654123" },
  ]);
  return (
    <BookingContext.Provider value={{ booking, setBooking }}>
      {children}
    </BookingContext.Provider>
  );
};
