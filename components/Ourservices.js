import Servicecard from "./Servicescard";
import image1 from "../public/image(1).png";
import image2 from "../public/image(2).png";
import image4 from "../public/image(4).png";
import image5 from "../public/image(5).png";
import Button from "./Button";

const Ourservices = () => {
  return (
    <div className="bg-noise bg-zinc-900">
      <div className="max-w-screen-lg mx-auto md:flex py-24 px-5 md:px-0 md:py-48">
        <div className="md:w-2/5">
          <h2 className="text-white text-4xl md:text-5xl font-bold">Our Services</h2>
        </div>
        <div className="md:w-3/5 w-72 pt-16 md:pt-0 grid md:grid-cols-2 grid-cols-1 gap-20">
          <Servicecard
            image={image1}
            title={"Product design"}
            paragraph={
              "Producing, prototyping and testing sketches, high-fidelity wireframes and the final UI is a process that results in intuitive and impactful design that’s easy on the eyes."
            }
          />
          <Servicecard
            image={image2}
            title={"Development"}
            paragraph={
              "By selecting the befitting tech stack and architecture for the deliverable in question, we build out the product until it's a fully-fledged digital solution."
            }
          />
          <Servicecard
            image={image4}
            title={"Quality assurance"}
            paragraph={
              "Our QA engineering team makes your product bug-free, bulletproof and performance-driven through both automatic and manual testing. "
            }
          />
          <Servicecard
            image={image4}
            title={"Marketing & growth"}
            paragraph={
              "By understanding the mechanics of digital marketing, we make sure to put your product, at the right time, in front of the right people."
            }
          />
          <Button name={"See Our Services"} />
        </div>
      </div>
    </div>
  );
};

export default Ourservices;
