import { useContext } from "react";
import { Link } from "react-router-dom";
import { AllContext } from "../../contextprovider/DataContext";

const ServiceCard = ({ singleService }) => {
  const {handleDetailsId} = useContext(AllContext);
  const {
    image,
    counselor_name,
    pricing,
    category,
    description,
    service_Id,
    service_name,
    rating
  } = singleService;



  return (
    <>
      <div data-aos="fade-up" className="card bg-base-100 border rounded-none font-Roboto hover:shadow-2xl duration-300 ease-out ease-in hover:border-blue-500">
        <figure>
          <img className="w-full h-64 object-cover" src={image} alt="service" />
        </figure>
        <div className="card-body">
          <div className="flex justify-between font-Playfair font-semibold">
            <p>{category}</p>
            <p>{counselor_name}</p>
          </div>
          <h2 className="card-title text-2xl">{service_name}</h2>
          <div className="flex justify-between items-center">
          <p className="font-bold text-lg">price: {pricing}</p>
          <p className="font-bold text-lg">rating: {rating}</p>
          </div>
          <hr />
          <p>{description.slice(0, 200)}...</p>
          <Link onClick={()=>handleDetailsId(service_Id)} to={`service/${service_Id}`} className="btn btn-neutral">Read more</Link>
        </div>
      </div>
    </>
  );
};

export default ServiceCard;
