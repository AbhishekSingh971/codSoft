import React from "react";
import Layout from "../Components/Layout/Layout";

const About = () => {
  return (
    <Layout title={"About Us - Kharido"}>
      <div className="row contactus mt-2 justify-content-center align-items-center" >
        <div className="col-md-6">
          <img
          src="/images/about.jpeg"
          alt="contactus"
          style={{width: '100%'}}
          />
        </div>
        <div className="col-md-4">
          <p className="text-justify mt-2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sodales nunc non odio lacinia, non tincidunt justo ornare. Etiam eu ultrices lorem. Fusce posuere felis magna, id pretium metus imperdiet quis. Maecenas ante turpis, finibus et luctus quis, tincidunt at diam. Aenean in condimentum felis. Morbi nulla lorem, laoreet in ligula et, fringilla lobortis eros. Quisque urna nulla, ullamcorper a erat ac, lacinia suscipit ex. Etiam non purus vel quam vestibulum fringilla sed a erat. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed bibendum accumsan sodales. Cras posuere rhoncus felis, a viverra ligula varius sed. Duis vulputate lectus a ipsum consequat, quis rutrum tortor elementum.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default About;
