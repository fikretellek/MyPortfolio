import { useEffect, useState } from "react";
import NavLine from "../NavLine/NavLine";
import "./Experience.scss";
import Card from "../Card/Card";

export default function Experience({ experience, sectionLength }) {
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

  // function activatePhotoHandle(e) {
  //   const activePhotos = document.querySelectorAll(".photo-cont");
  //   activePhotos.forEach((photo) => {
  //     photo.classList.remove("active-photo");
  //   });

  //   e.target.classList.add("active-photo");
  // }

  return (
    <>
      <section className="main-section">
        <h5>home/experience</h5>
        <NavLine cardAmount={experience} activeSection={scrollAmount} />

        {experience.map((experienceCard, index) => {
          const isActive = index + 1 === scrollAmount;
          if (isActive) return <Card key={index} data={experienceCard} />;
        })}
      </section>
    </>
  );
}
