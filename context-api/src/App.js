import "./App.css";
import AddBooking from "./components/addbooking/AddBooking";
import { BookingProvider } from "./components/context/BookingContext";
import Header from "./components/Header/Header";
import ShowBooking from "./components/showbooking/ShowBooking";

function App() {
  return (
    <div className="App">
      <BookingProvider>
        <Header />
        <AddBooking />
        <ShowBooking />
      </BookingProvider>
    </div>
  );
}

export default App;
