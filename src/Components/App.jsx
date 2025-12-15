import { useState, useEffect } from "react";
import GuestRow from "./GuestRow.jsx";
import "../Stylesheets/index.css";

export default function App() {
  // State to hold the list of guests and the selected guest
  const [guestList, setGuestList] = useState([]);
  const [selectedGuest, setSelectedGuest] = useState(null);
  const [hoveredGuestId, setHoveredGuestId] = useState(null);
  const [isLoading, setIsLoading] = useState(true); // State for loading status
  const [error, setError] = useState(null); // State for error handling

  useEffect(() => {
    const API_ENDPOINT =
      "https://fsa-crud-2aa9294fe819.herokuapp.com/api/2509-FTB-CT-WEB-PT/guests";

    const fetchGuests = async () => {
      try {
        const response = await fetch(API_ENDPOINT);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();

        if (data.data && Array.isArray(data.data)) {
          setGuestList(data.data);
        } else if (Array.isArray(data)) {
          setGuestList(data);
        } else {
          console.error("API response is not an array:", data);
          setError("Received data in an unexpected format.");
          setGuestList([]);
        }

        setError(null);
      } catch (e) {
        console.error("Fetching guests failed:", e);
        setError("Failed to load guest list. Please try again.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchGuests();
  }, []);

  if (isLoading) {
    return <h1>Loading guest list...</h1>;
  }
  if (error) {
    return <h1 style={{ color: "red" }}>Error: {error}</h1>;
  }

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

          {/* Headers */}
          <h2 className="header-names">Name</h2>
          <h2 className="header-emails">Email</h2>
          <h2 className="header-phones">Phone</h2>

          {/* // Iterate over list once and render the GuestRow component. */}
          {guestList.map((guest, i) => (
            <GuestRow
              key={guest.id}
              guest={guest}
              index={i}
              setSelectedGuest={setSelectedGuest}
              hoveredGuestId={hoveredGuestId}
              setHoveredGuestId={setHoveredGuestId}
            />
          ))}
          <p>Select a guest to see more details.</p>
        </main>
      )}
    </div>
  );
}
