import Hero from "../components/ui/Hero";
import ScrollTextAnimation from "../components/ui/ScrollTextAnimation";

import Photos from '../components/ui/Photos';
import WorkImage1 from "../assets/images/cidade/PW-D&D-7.jpg";
import WorkImage2 from "../assets/images/cidade/PW-D&D-8 (1).jpg";
import WorkImage3 from "../assets/images/cidade/PW-D&D-11.jpg";
import WorkImage4 from "../assets/images/cidade/PW-D&D-16.jpg";
import WorkImage5 from "../assets/images/cidade/PW-D&D-17.jpg";
import WorkImage6 from "../assets/images/cidade/PW-D&D-19.jpg";
import WorkImage7 from "../assets/images/cidade/PW-D&D-23.jpg";
import WorkImage8 from "../assets/images/cidade/PW-D&D-24.jpg";
import WorkImage9 from "../assets/images/cidade/PW-D&D-28.jpg";
import WorkImage10 from "../assets/images/cidade/PW-D&D-32.jpg";
import WorkImage11 from "../assets/images/cidade/PW-D&D-31.jpg";
import WorkImage12 from "../assets/images/cidade/PW-D&D-34.jpg";
import WorkImage13 from "../assets/images/cidade/PW-D&D-38.jpg";
import WorkImage14 from "../assets/images/cidade/PW-D&D-39.jpg";
import WorkImage15 from "../assets/images/cidade/PW-D&D-43.jpg";
import WorkImage16 from "../assets/images/cidade/PW-D&D-44.jpg";

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
  WorkImage16
];

const Cidade = () => {
  return (
    <div className="page-content">
       <Hero title="Cidade Amor" 
  subtitle="Amor pelas ruas de Floripa"/>



      <div className="album-content">
         <Photos images={imageArray} />
      </div>
    </div>
  );
};

export default Cidade;