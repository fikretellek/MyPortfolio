import "./NavLine.scss";
export default function NavLine({ cardAmount, activeSection }) {
  return (
    <>
      <div id="nav-line">
        {cardAmount.map((section, index) => {
          const isActive = index + 1 === activeSection;
          return <div key={index} className={`nav-section ${isActive ? "active" : ""}`}></div>;
        })}
      </div>
    </>
  );
}
