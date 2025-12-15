import { useState } from "react";
import { guests as initialGuestData } from "../data.js";
import "../Stylesheets/index.css";

export default function App() {
  // State to hold the list of guests and the selected guest
  const [guestList] = useState(initialGuestData);
  const [selectedGuest, setSelectedGuest] = useState(null);
  const [hoveredGuestId, setHoveredGuestId] = useState(null);

  // Handle mouse enter event
  const handleMouseEnter = (guestId) => {
    setHoveredGuestId(guestId);
  };

  // Handle mouse leave event
  const handleMouseLeave = () => {
    setHoveredGuestId(null);
  };

  return (
    <div>
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
        <main>
          <h1 className="title">Guest List</h1>
          <div className="guest-names">
            <h2>Name</h2>
            {guestList.map((guest) => (
              <section
                key={guest.id}
                className={`guest-name ${
                  hoveredGuestId === guest.id ? "row-hover" : ""
                }`} // Apply hover class conditionally
                onClick={() => setSelectedGuest(guest)}
                onMouseEnter={() => handleMouseEnter(guest.id)} // Add hover handlers
                onMouseLeave={handleMouseLeave}
              >
                {guest.name}
              </section>
            ))}
          </div>

          <div className="guest-emails">
            <h2>Email</h2>
            {guestList.map((guest) => (
              <section
                key={guest.id}
                className={`guest-email ${
                  hoveredGuestId === guest.id ? "row-hover" : ""
                }`}
                onClick={() => setSelectedGuest(guest)}
                onMouseEnter={() => handleMouseEnter(guest.id)}
                onMouseLeave={handleMouseLeave}
              >
                {guest.email}
              </section>
            ))}
          </div>

          <div className="guest-phones">
            <h2>Phone</h2>
            {guestList.map((guest) => (
              <section
                key={guest.id}
                className={`guest-phone ${
                  hoveredGuestId === guest.id ? "row-hover" : ""
                }`}
                onClick={() => setSelectedGuest(guest)}
                onMouseEnter={() => handleMouseEnter(guest.id)}
                onMouseLeave={handleMouseLeave}
              >
                {guest.phone}
              </section>
            ))}
          </div>
          <p>Select a guest to see more details.</p>
        </main>
      )}
    </div>
  );
}
