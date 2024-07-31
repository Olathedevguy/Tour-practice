import { useState } from "react";

const Tour = ({ id, name, info, image, price, handleInterest }) => {
  const [readMore, setReadMore] = useState(false);

  return (
    <article className="single-tour">
      <img src={image} className="img" alt="" />
      <span className="tour-price ">{price}</span>
      <div>
        <h5>{name}</h5>
        <p>{readMore ? info : `${info.substring(0, 200)}...`}</p>
        <button className="info-btn" onClick={() => setReadMore(!readMore)}>
          {readMore ? `Show Less` : `Read More`}
        </button>
        <button className="btn btn-block delete-btn" onClick={() => handleInterest(id)}>not interested</button>
      </div>
    </article>
  );
};
export default Tour;
