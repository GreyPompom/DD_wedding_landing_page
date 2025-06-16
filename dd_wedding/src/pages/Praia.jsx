

import Hero from '../components/ui/Hero'
// import { useLocation } from 'react-router-dom';
import Photos from '../components/ui/Photos';
import WorkImage1 from "../assets/images/praia/PW-D&D-74.jpg";
import WorkImage2 from "../assets/images/praia/PW-D&D-77.jpg";
import WorkImage3 from "../assets/images/praia/PW-D&D-79.jpg";
import WorkImage4 from "../assets/images/praia/PW-D&D-81.jpg";
import WorkImage5 from "../assets/images/praia/PW-D&D-84.jpg";
import WorkImage6 from "../assets/images/praia/PW-D&D-88.jpg";
import WorkImage7 from "../assets/images/praia/PW-D&D-89.jpg";
import WorkImage8 from "../assets/images/praia/PW-D&D-100.jpg";
import WorkImage9 from "../assets/images/praia/PW-D&D-104.jpg";
import WorkImage10 from "../assets/images/praia/PW-D&D-104.jpg";
import WorkImage11 from "../assets/images/praia/PW-D&D-107.jpg";
import WorkImage12 from "../assets/images/praia/PW-D&D-110 (2).jpg";
import WorkImage13 from "../assets/images/praia/PW-D&D-113.jpg";
import WorkImage14 from "../assets/images/praia/PW-D&D-117.jpg";
import WorkImage15 from "../assets/images/praia/PW-D&D-119 (1).jpg";
import WorkImage16 from "../assets/images/praia/PW-D&D-122.jpg";
import WorkImage17 from "../assets/images/praia/PW-D&D-128.jpg";
import WorkImage18 from "../assets/images/praia/PW-D&D-131.jpg";
import WorkImage19 from "../assets/images/praia/PW-D&D-137.jpg";
import WorkImage20 from "../assets/images/praia/PW-D&D-139.jpg";
import WorkImage21 from "../assets/images/praia/PW-D&D-142.jpg";
import WorkImage22 from "../assets/images/praia/PW-D&D-146.jpg";
import WorkImage23 from "../assets/images/praia/PW-D&D-154.jpg";
import WorkImage24 from "../assets/images/praia/PW-D&D-155.jpg";


const imageArray = [
  WorkImage1,
  WorkImage2,
  WorkImage3,
  WorkImage4,
  WorkImage5,
  WorkImage6,
  WorkImage7,
  WorkImage8,
  WorkImage9,
  WorkImage10,
  WorkImage11,
  WorkImage12,
  WorkImage13,
  WorkImage14,
  WorkImage15,
  WorkImage16,
  WorkImage17,
  WorkImage18,
  WorkImage19,
  WorkImage20,
  WorkImage21,
  WorkImage22,
  WorkImage23,
  WorkImage24
];

const Praia = () => {


  return (
    <div className="page-transition">
      <Hero title="Amor Praia" 
  subtitle="Uma manifestação de amor à beira-mar"/>
      
      {/* Restante do conteúdo do álbum */}
      <div className="album-content">
        <Photos images={imageArray} />
      </div>
    </div>
  );
};

export default Praia;