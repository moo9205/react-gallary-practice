import React, { useState } from "react";
import "./Gallary.css";
import images from "../static/dummyData";

const Gallary = () => {
  const [selectedImg, setSelectedImg] = useState(images[2].picture);
  const [selectedName, setSelectedName] = useState(images[2].picName);
  console.log(selectedImg);
  return (
    <div className="Gallary">
      <div className="container">
        <img src={selectedImg} alt="Selected" className="selected" />
        <div className="selectedName">{selectedName}</div>
        <div className="imgContainer">
          {images.map((img, index) => (
            <img
              style={{
                border: selectedImg === img.picture ? "4px solid purple" : "",
              }}
              key={index}
              src={img.picture}
              alt="Dog"
              onClick={() => {
                setSelectedImg(img.picture);
                setSelectedName(img.picName);
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallary;
