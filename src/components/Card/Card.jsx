import { useState } from "react";
import "./Card.scss";

export default function Card({ data }) {
  const [activeImage, setActiveImage] = useState(null);

  function handleClick(e, index) {
    if (e.currentTarget.classList.contains("activeImage")) {
      setActiveImage(null);
    } else {
      setActiveImage(index);
    }
  }

  return (
    <section className="card">
      {data.title && <h3>{data.title}</h3>}
      {data.subTitle && (
        <div className="subTitle">
          <div className="innerTitle">
            <p className="subTitle">{data.subTitle}</p>
            {data.degreeType && (
              <p className="degree">
                {data.degreeType} - {data.degreeScore}
              </p>
            )}
          </div>

          <p className="dates">
            {data.date.start} - {data.date.end}
          </p>
        </div>
      )}
      {data.texts && (
        <div className="text-cont">
          {data.texts.map((text, index) => (
            <p key={index}>{text}</p>
          ))}
        </div>
      )}
      {data.images && (
        <div className="image-cont">
          {data.images.map((url, index) => (
            <div
              key={index}
              className={`image-frame ${activeImage === index ? "activeImage" : ""}`}
              onClick={(e) => handleClick(e, index)}
            >
              <img className="image" src={url} alt="" />
            </div>
          ))}
        </div>
      )}
      {data.list && (
        <ul className="list-cont">
          {data.list.map((liContent, index) => (
            <li key={index}>{liContent}</li>
          ))}
        </ul>
      )}
      {data.email && (
        <div>
          <div>
            <h3>email: </h3> <p>{data.email}</p>
          </div>
          <div>
            <h3>phone: </h3> <p>{data.phone}</p>
          </div>
          <div>
            <h3>linkedIn: </h3> <p>{data.linkedIn}</p>
          </div>
          <div>
            <h3>instagram: </h3> <p>{data.instagram}</p>
          </div>
        </div>
      )}
    </section>
  );
}
