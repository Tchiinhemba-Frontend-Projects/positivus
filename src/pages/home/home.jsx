import React from "react";
import { Header, Button } from "../../components";
import { assets } from "../../assets";

export function Home() {
  return (
    <React.Fragment>
      <section>
        <Header />
        <main>
          <Hero />
        </main>
        <Partners />
      </section>
    </React.Fragment>
  );
}

function Hero() {
  const { ilustrations } = assets;

  return (
    <React.Fragment>
      <div className="hero_wrapper">
        <div className="hero_info-container">
          <div className="hero_tittle">
            <span>
              Navigating the <br /> digital landscape <br /> for success
            </span>
          </div>
          <div className="hero_description">
            Our digital marketing agency helps businesses grow and succeed
            online through a range of services including SEO, PPC, social media
            marketing, and content creation.
          </div>
          <div className="hero_btn-container">
            <Button type="primary">Book a consultation</Button>
          </div>
        </div>
        <div className="hero_image-container">
          <img src={ilustrations.megaphone} alt="" />
        </div>
      </div>
    </React.Fragment>
  );
}

function Partners() {
  const { partners } = assets;
  return (
    <React.Fragment>
      <div className="partners_wrapper">
        <div className="partners_container">
          {
            partners.map((value, index) => {
              return (<img key={index} src={value}/>)
            })
          }
        </div>
      </div>
    </React.Fragment>
  );
}
