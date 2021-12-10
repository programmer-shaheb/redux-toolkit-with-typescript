import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import "./App.css";
import { RootState } from "./app/store";
import { addReservation } from "./features/reservationSlice";

function App() {
  const dispatch = useDispatch();
  const [reservationNameInput, setReservationNameInput] = useState<string>("");

  const reservations = useSelector(
    (state: RootState) => state.reservations.value
  );

  const handleAddReservations = () => {
    dispatch(addReservation(reservationNameInput));
  };

  return (
    <div className="App">
      <div className="container">
        <div className="reservation-container">
          <div>
            <h5 className="reservation-header">Reservations</h5>
            <div className="reservation-cards-container">
              {/* {reservations.map((name, index) => {
                return <ReservationCard name={name} index={index} />;
              })} */}
            </div>
          </div>
          <div className="reservation-input-container">
            <input
              value={reservationNameInput}
              onChange={(e) => {
                setReservationNameInput(e.target.value);
              }}
            />
            <button onClick={handleAddReservations}>Add</button>
          </div>
        </div>
        <div className="customer-food-container">
          {/* {customers.map((customer) => {
            return (
              <CustomerCard
                id={customer.id}
                name={customer.name}
                food={customer.food}
                key={customer.id}
              />
            );
          })} */}
        </div>
      </div>
    </div>
  );
}

export default App;
