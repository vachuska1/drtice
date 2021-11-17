import * as React from "react";
import { useState, useEffect } from "react";
import { Carousel } from "react-responsive-carousel";
import "./Content.less";
import "./ReactSlider.less";

const images = [
  { url: "./src/images/flag/rusko5.jpg" },
  { url: "./src/images/flag/rusko4.jpg" },
  { url: "./src/images/flag/rusko2.jpg" },
  { url: "./src/images/flag/rusko3.jpg" },
];
const images2 = [
  { url: "./src/images/flag/ruskoTab5.jpg" },
  { url: "./src/images/flag/ruskoTab4.jpg" },
  { url: "./src/images/flag/ruskoTab2.jpg" },
  { url: "./src/images/flag/ruskoTab3.jpg" },
];

export const Content: React.FC = () => {
  const [desktop, setDesktop] = useState<boolean>(false);
  // return (
  //   <div className="Content">
  //     <SimpleImageSlider
  //       images={images}
  //       width={"100%"}
  //       height={"100vh"}
  //       showBullets={true}
  //       showNavs={true}
  //       navSize={100}
  //       slideDuration={0.8}
  //       useGPURender={true}
  //     />
  //   </div>
  // );

  useEffect(() => {
    handleResizeViewport();
  }, []);

  window.addEventListener("resize", () => {
    handleResizeViewport();
  });

  const handleResizeViewport = () => {
    setDesktop(document.body.offsetWidth > 768);
  };

  return desktop ? (
    <div className="comps">
      <Carousel showStatus={false} showThumbs={false}>
        {images.map((image) => {
          return (
            <div>
              <img src={image.url} />
            </div>
          );
        })}
      </Carousel>
    </div>
  ) : (
    <div className="tabs">
      <Carousel showStatus={false} showThumbs={false}>
        {images2.map((images2) => {
          return (
            <div>
              <img src={images2.url} />
            </div>
          );
        })}
      </Carousel>
    </div>
  );
};
