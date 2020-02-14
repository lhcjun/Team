import React from "react";

const Card = ({ name, email, bs, id }) => {
  return (
    <div className="tc grow br3 pa3 ma2 dib bw2 shadow-5">
      <img alt="member" src={`../img/1.png`} />
      <div>
        <h2>{name}</h2>
      </div>
    </div>
  );
};

export default Card;
