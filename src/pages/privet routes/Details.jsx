import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AllContext } from "../../contextprovider/DataContext";
import servicebg from "../../assets/servicebg.jpg";
import { FaServicestack } from "react-icons/fa6";

const Details = () => {
  const data = useLoaderData();
  const { id } = useContext(AllContext);
  const service = data.filter((singleData) => singleData.service_Id == id);
  const {
    service_name,
    description,
    category,
    pricing,
    counselor_name,
    image,
    duration,
    rating,
  } = service[0];
  return (
    <>
      <section className="font-Roboto">
        <div
          className="hero min-h-fit"
          style={{
            backgroundImage: `url(${servicebg})`,
          }}
        >
          <div className="hero-overlay bg-opacity-70 bg-gray-200"></div>
          <div className="hero-content text-neutral-content">
            <div className="w-full mt-20 py-40 text-black">
              <div className="flex items-center gap-5 text-blue-600 font-bold">
                <p className="flex gap-2 text-2xl">
                  <FaServicestack />
                  {category}
                </p>
                <p>---by{counselor_name}</p>
              </div>
              <hr className="border-blue-600 border-b-2 w-3/12 my-2" />
              <h1 className="mb-5 text-blue-600 font-Playfair text-5xl font-bold">
                {service_name}
              </h1>
              <p className="mb-5 w-3/4">
                Career counseling is not just a conversation; it’s a
                life-changing compass that helps individuals navigate the
                complexities of their professional journey. It provides clarity
                when dreams feel distant, confidence when decisions seem
                daunting, and direction when the path ahead is unclear.
              </p>
            </div>
          </div>
        </div>
        <div className="mt-20 max-w-screen-2xl mx-auto">
          <div className="w-2/4 border p-5 my-10">
            <img className="h-96 object-cover w-full border p-2" src={image} alt="" />
            <h1 className="text-2xl font-bold pb-5">Service: {service_name}</h1>
            <p>Counselor: {counselor_name}</p>
            <p>duration: {duration}</p>
            <p>price: {pricing}</p>
            <p>rating: {rating}</p>
            <div className="rating">
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
                defaultChecked
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
            </div>
            <p className="text-gray-500 text-lg">
              <span className="font-bold">Service Details: </span>
              {description}
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Details;