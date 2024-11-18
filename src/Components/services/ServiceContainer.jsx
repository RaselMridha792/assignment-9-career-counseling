import { useContext, useEffect } from "react";
import { AllContext } from "../../contextprovider/DataContext";
import ServiceCard from "./ServiceCard";
import Review from "../Review";

// for aos animation
import AOS from "aos";
import "aos/dist/aos.css";
const ServiceContainer = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out'
    });
    AOS.refresh();
  }, []);

  const { service } = useContext(AllContext);
  return (
    <>
      <div className="md:w-10/12 w-11/12 mx-auto my-20">
        <div data-aos="fade-right" className="mb-10">
          <h1 className="font-Playfair lg:text-6xl md:text-5xl text-3xl py-5">
            <span className="text-blue-500">
              Our Team serving you <br />
            </span>
            to forward your career
          </h1>
          <p className="text-xl max-w-xl">
            Our methodology differentiates us from other career coaching firms
            and ensures clients receive unsurpassed service at all stages of
            their career.
          </p>
        </div>
        <hr className="w-2/4 mt-5" />
        <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 px-5 gap-5 my-10">
          {service &&
            service.map((singleService) => (
              <ServiceCard
                key={singleService.service_Id}
                singleService={singleService}
              ></ServiceCard>
            ))}
        </div>
        <div className="my-20">
          <Review></Review>
        </div>
      </div>
    </>
  );
};

export default ServiceContainer;
