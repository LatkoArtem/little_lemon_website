import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="AboutPage">
      <div className="AboutUsText ">
        <h1>About us</h1>
      </div>
      <div className="LittleLemonHistory SectionAbout">
        <div className="Bookmark" />
        <h2>History</h2>
        <div className="DescriptionSectionAbout">
          <p className="AllAboutText">
            Little Lemon was founded in 2020 with the aim of creating a unique place for true gourmets. Our founder,
            Oleksiy Petrov, dreamed of creating a restaurant where every dish is a work of art, and every guest is part
            of our family.
          </p>
        </div>
      </div>
      <div className="LittleLemonMission SectionAbout">
        <div className="Bookmark" />
        <h2>Philosophy and Mission</h2>
        <div className="DescriptionSectionAbout">
          <img src="/images/LittleLemonMissions.png" alt="" className="AllAboutPhotos" />
          <p className="AllAboutText">
            Our main principle is quality and freshness. We use only the best local ingredients to ensure the highest
            standard of taste. Our mission is to provide unforgettable gastronomic experiences to every guest.
          </p>
        </div>
      </div>
      <div className="LittleLemonTeam SectionAbout">
        <div className="Bookmark" />
        <h2>Team</h2>
        <div className="DescriptionSectionAbout">
          <p className="AllAboutText">
            Our team consists of professionals in their field. Chef Maria Ivanova has over 15 years of experience in
            culinary arts and has won numerous awards for her creations. Every member of our team strives to make your
            visit special.
          </p>
          <img src="/images/LittleLemonTeam.jpg" alt="" className="AllAboutPhotos" />
        </div>
      </div>
      <div className="LittleLemonTraditions SectionAbout">
        <div className="Bookmark" />
        <h2>Culinary Traditions and Style</h2>
        <div className="DescriptionSectionAbout">
          <img src="/images/LittleLemonTraditions.jpg" alt="" className="AllAboutPhotos" />
          <p className="AllAboutText">
            We specialize in modern Ukrainian cuisine with an original approach. All dishes are prepared with the
            freshest products grown on local farms.
          </p>
        </div>
      </div>
      <div className="LittleLemonAwards SectionAbout">
        <div className="Bookmark" />
        <h2>Recognition and Awards</h2>
        <div className="DescriptionSectionAbout">
          <p className="AllAboutText">
            Our restaurant has been recognized as one of the best in Kyiv by local publications. We are proud of our
            achievements and always strive for improvement.
          </p>
          <img src="/images/LittleLemonAwards.jpg" alt="" className="AllAboutPhotos" />
        </div>
      </div>
      <div className="LittleLemonSocials SectionAbout">
        <div className="Bookmark" />
        <h2>Social Initiatives</h2>
        <div className="DescriptionSectionAbout">
          <img src="/images/LittleLemonSocials.jpg" alt="" className="AllAboutPhotos" />
          <p className="AllAboutText">
            We actively support local charitable organizations and initiatives aimed at improving life in our community.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
