import { useEffect, useState } from "react";
import "./About.scss";
import NavLine from "../NavLine/NavLine";
import Card from "../Card/Card";

export default function About({ about, sectionLength }) {
  const [scrollAmount, setScrollAmount] = useState(1);
  const [listenerActive, setListenerActive] = useState(true);

  useEffect(() => {
    const handleWheel = (event) => {
      if (listenerActive) {
        setScrollAmount((prevScrollAmount) => {
          const newScrollAmount = prevScrollAmount + Math.sign(event.deltaY);
          return Math.min(sectionLength, Math.max(1, newScrollAmount));
        });
        setListenerActive(false);
        setTimeout(() => {
          setListenerActive(true);
        }, 1000);
      }
    };

    document.addEventListener("wheel", handleWheel);

    return () => {
      document.removeEventListener("wheel", handleWheel);
    };
  }, [listenerActive, sectionLength]);

  return (
    <>
      <section className="main-section">
        <h5>home/about</h5>
        <NavLine cardAmount={about} activeSection={scrollAmount} />
        {about.map((aboutCard, index) => {
          const isActive = index + 1 === scrollAmount;
          if (isActive) return <Card key={index} data={aboutCard} />;
        })}
      </section>
    </>
  );
}
