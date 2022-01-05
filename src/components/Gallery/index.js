import React from "react";
//This was moved to PhotoList in 20.3
// import photo from "../../assets/small/commercial/0.jpg";
import PhotoList from "../PhotoList";
import { capitalizeFirstLetter } from '../../utils/helper';

function Gallery(props) {
  const { currentCategory } = props;
  return (
    <section>
      <h1 data-testid="h1tag">{capitalizeFirstLetter(currentCategory.name)}</h1>
      <p>{currentCategory.description}</p>
      {/* This was changed in 20.3
      <p>{currentCategory.name}</p>
      <div className="flex-row">
          <img
            src={photo}
            alt="Commercial Example"
            className="img-thumbnail mx-1"
          />
      </div> */}
      {/* <PhotoList /> */}
      <PhotoList category={currentCategory.name} />
    </section>
  );
}
export default Gallery;