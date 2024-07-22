import React, { useState } from "react";
import "./Reservation.css";

function Reservation() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [occasion, setOccasion] = useState("");
  const [guests, setGuests] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  const [errors, setErrors] = useState({});

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    if (name === "name") {
      setName(value);
    } else if (name === "email") {
      setEmail(value);
    } else if (name === "occasion") {
      setOccasion(value);
    } else if (name === "guests") {
      setGuests(value);
    } else if (name === "date") {
      setDate(value);
    } else if (name === "time") {
      setTime(value);
    }

    setErrors((prevErrors) => ({ ...prevErrors, [name]: "" }));
  };

  const handleKeyPress = (event) => {
    const regex = /^[a-zA-Zа-яА-ЯёЁїЇіІєЄґҐ' ']+$/;
    if (!regex.test(event.key)) {
      event.preventDefault();
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const newErrors = {};
    if (!name) newErrors.name = "Name is required";
    if (!email) newErrors.email = "Email is required";
    if (!occasion) newErrors.occasion = "Occasion is required";
    if (!guests) newErrors.guests = "Number of Guests is required";
    if (!date) newErrors.date = "Event Date is required";
    if (!time) newErrors.time = "Time is required";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Occasion:", occasion);
    console.log("Number of Guests:", guests);
    console.log("Event Data:", date);
    console.log("Time:", time);

    setName("");
    setEmail("");
    setOccasion("");
    setGuests("");
    setDate("");
    setTime("");
  };

  return (
    <div className="BackgroundFormReservation">
      <form className="FormForReservation" onSubmit={handleSubmit}>
        <div className="ReservationFormText">
          <h2>Reservation form</h2>
        </div>
        <div>
          <label className="LablesText" htmlFor="name">
            Name:
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={handleInputChange}
            onKeyPress={handleKeyPress}
            maxLength={40}
          />
          {errors.name && <div className="error">{errors.name}</div>}
        </div>
        <div>
          <label className="LablesText" htmlFor="email">
            Email:
          </label>
          <input type="email" id="email" name="email" value={email} onChange={handleInputChange} />
          {errors.email && <div className="error">{errors.email}</div>}
        </div>
        <div>
          <label className="LablesText" htmlFor="occasion">
            Occasion:
          </label>
          <select id="occasion" name="occasion" value={occasion} onChange={handleInputChange}>
            <option value="">Select an occasion</option>
            <option value="birthday">Birthday</option>
            <option value="casual">Casual</option>
            <option value="anniversary">Anniversary</option>
            <option value="business">Business Meeting</option>
            <option value="other">Other</option>
          </select>
          {errors.occasion && <div className="error">{errors.occasion}</div>}
        </div>
        <div>
          <label className="LablesText" htmlFor="guests">
            Number of Guests:
          </label>
          <input type="number" id="guests" name="guests" value={guests} onChange={handleInputChange} min={1} max={10} />
          {errors.guests && <div className="error">{errors.guests}</div>}
        </div>
        <div>
          <label className="LablesText" htmlFor="date">
            Event Data:
          </label>
          <input type="date" id="date" name="date" value={date} onChange={handleInputChange} />
          {errors.date && <div className="error">{errors.date}</div>}
        </div>
        <div>
          <label className="LablesText" htmlFor="time">
            Time:
          </label>
          <input type="time" id="time" name="time" value={time} onChange={handleInputChange} />
          {errors.time && <div className="error">{errors.time}</div>}
        </div>
        <button className="BookATableButton" type="submit">
          Book a table
        </button>
      </form>
    </div>
  );
}

export default Reservation;
