import { Link } from "react-router-dom";

const ServiceCard = ({ singleService }) => {
  const {
    image,
    counselor_name,
    pricing,
    category,
    description,
    service_Id,
    service_name,
  } = singleService;
  console.log(singleService);
  return (
    <>
      <div className="card bg-base-100 border rounded-none font-Roboto hover:shadow-2xl duration-300 ease-out ease-in hover:border-blue-500">
        <figure>
          <img className="w-full h-64 object-cover" src={image} alt="Shoes" />
        </figure>
        <div className="card-body">
          <div className="flex justify-between font-Playfair font-semibold">
            <p>{category}</p>
            <p>{counselor_name}</p>
          </div>
          <h2 className="card-title text-2xl">{service_name}</h2>
          <p className="font-bold text-lg">price: {pricing}</p>
          <hr />
          <p>{description.slice(0, 200)}...</p>
          <Link to="/details" className="btn btn-neutral">Learn more</Link>
        </div>
      </div>
    </>
  );
};

export default ServiceCard;
