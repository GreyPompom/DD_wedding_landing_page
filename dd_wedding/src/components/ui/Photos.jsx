import React from "react";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import "../../style/components/photos.css";
gsap.registerPlugin(useGSAP);
const Photos = ({ images }) => {
  const container = useRef();
  
  // Divide as imagens em 3 colunas
  const getColumns = () => {
    const columnCount = 3;
    const columns = Array.from({ length: columnCount }, () => []);
    
    images.forEach((image, index) => {
      columns[index % columnCount].push(image);
    });
    
    return columns;
  };

  const columns = getColumns();

  useGSAP(
    () => {
      gsap.from(".photos-col img", { y: 300, stagger: 0.025, opacity: 0 });
    },
    { scope: container }
  );

  return (
    <div className="container page-photos" ref={container}>
      {columns.map((columnImages, columnIndex) => (
        <div className="photos-col" key={`column-${columnIndex}`}>
          {columnImages.map((image, imageIndex) => (
            <img 
              src={image} 
              alt="" 
              key={`image-${columnIndex}-${imageIndex}`} 
              loading="lazy" // Adicionado lazy loading
            />
          ))}
        </div>
      ))}
    </div>
  );
};

export default Photos;