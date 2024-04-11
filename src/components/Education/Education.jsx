import { useEffect, useState } from "react";
import NavLine from "../NavLine/NavLine";
import Card from "../Card/Card";

export default function Education({ education, sectionLength }) {
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
        <h5>home/education</h5>
        <NavLine cardAmount={education} activeSection={scrollAmount} />
        {education.map((educationCard, index) => {
          const isActive = index + 1 === scrollAmount;
          if (isActive) return <Card key={index} data={educationCard} />;
        })}
        {/* <div className="content-area">
          <ul>
            {data.education.map((edu, index) => {
              const isActive = index + 1 === scrollAmount;

              if (isActive) {
                return (
                  <div key={index}>
                    <h3>{edu.institutionName}</h3>
                    <p>
                      {edu.degreeType} / {edu.degreeScore}
                    </p>
                    <p>
                      {edu.date.start} - {edu.date.end}
                    </p>
                    <p>{edu.summary}</p>
                    {edu.photos.map((url, index) => {
                      return (
                        <li className="photo-cont" key={index} onClick={activatePhotoHandle}>
                          <img src={url} alt="" />
                        </li>
                      );
                    })}
                  </div>
                );
              }
            })}
          </ul>
        </div> */}
      </section>
    </>
  );
}
