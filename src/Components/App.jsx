import { useState } from "react";
import { guests as initialGuestData } from "../data.js";

export default function App() {
  // State to hold the list of guests and the selected guest
  const [guestList, setGuestList] = useState(initialGuestData);
  const [selectedGuest, setSelectedGuest] = useState(null);

  return (
    <div>
      <h1>Guest List</h1>

      {selectedGuest ? (
        // === VIEW SELECTED GUEST DETAILS ===
        <div>
          <button onClick={() => setSelectedGuest(null)}>Back to List</button>
          <h2>{selectedGuest.name}</h2>
          <p>Email: {selectedGuest.email}</p>
          <p>Phone: {selectedGuest.phone}</p>
          <p>Bio: {selectedGuest.bio}</p>
          <p>Job: {selectedGuest.job}</p>
        </div>
      ) : (
        // === VIEW GUEST LIST ===
        <div>
          {guestList.map((guest) => (
            <div
              key={guest.id}
              onClick={() => setSelectedGuest(guest)} // Click to select.
              style={{
                border: "1px solid black",
                margin: "10px",
                padding: "10px",
                cursor: "pointer",
              }}
            >
              <h3>{guest.name}</h3>
              <p>{guest.email}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
