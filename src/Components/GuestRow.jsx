import "../Stylesheets/index.css";
export default function GuestRow({
  guest,
  index,
  setSelectedGuest,
  hoveredGuestId,
  setHoveredGuestId,
}) {
  const handleMouseEnter = () => setHoveredGuestId(guest.id);
  const handleMouseLeave = () => setHoveredGuestId(null);
  const handleClick = () => setSelectedGuest(guest);

  const isHovered = hoveredGuestId === guest.id;
  const rowClass = index % 2 === 0 ? "even-row" : "odd-row";

  return (
    <>
      <section
        className={`guest-name ${rowClass} ${isHovered ? "row-hover" : ""}`}
        onClick={handleClick}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {guest.name}
      </section>

      <section
        className={`guest-email ${rowClass} ${isHovered ? "row-hover" : ""}`}
        onClick={handleClick}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {guest.email}
      </section>

      <section
        className={`guest-phone ${rowClass} ${isHovered ? "row-hover" : ""}`}
        onClick={handleClick}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {guest.phone}
      </section>
    </>
  );
}
