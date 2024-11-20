import { useContext, useEffect, useState } from "react";
import { AllContext } from "../../contextprovider/DataContext";
import servicebg from "../../assets/servicebg.jpg";
import { FaServicestack } from "react-icons/fa6";
import { AiFillLike } from "react-icons/ai";
import { useParams } from "react-router-dom";

const Details = () => {
  const { user, service } = useContext(AllContext);
  const {id} = useParams();
  const [selectedService, setSelectedService] = useState({});
  useEffect(() => {
    if(service){
      const SingleService = service.find(
        (singleData) => singleData.service_Id == id
      );
      setSelectedService(SingleService || {});
    }
  }, [service, id]);
  const {
    service_name,
    description,
    category,
    pricing,
    counselor_name,
    image,
    duration,
    rating,
  } = selectedService;

  const [userFeedback, setUserFeedback] = useState([]);
  const handleComments = (e) => {
    e.preventDefault();
    const comment = e.target.comment.value;
    e.target.reset();
    if (comment) {
      setUserFeedback((previousFeedback) => [...previousFeedback, comment]);
    }
  };
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
          <div className="grid md:grid-cols-2 grid-cols-2 gap-5  my-10">
            <div className="border p-5">
              <img
                className="h-96 object-cover w-full border p-2"
                src={image}
                alt=""
              />
              <h1 className="text-2xl font-bold pb-5">
                Service: {service_name}
              </h1>
              <p>Counselor: {counselor_name}</p>
              <p>duration: {duration}</p>
              <p>price: {pricing}</p>
              <p>rating: {rating}</p>
              <p className="text-gray-500 text-lg">
                <span className="font-bold">Service Details: </span>
                {description}
              </p>
            </div>
            <div>
              <h1 className="text-3xl font-bold font-Playfair">
                Leave a FeedBack
              </h1>
              <hr className="my-5" />
              <p>comment</p>
              <form onSubmit={handleComments} action="submit">
                <textarea
                  type="text"
                  name="comment"
                  className="textarea textarea-primary w-full h-64 mt-2 text-lg"
                  placeholder="write you feedback here"
                ></textarea>
                <div className="py-5">
                  <span className="text-xl font-bold">rate us:</span>
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
                </div>
                <button className="btn btn-neutral w-1/4">Post Comment</button>
              </form>
            </div>
          </div>
          <h1 className="text-xl">Comments</h1>
          <hr className="mb-20" />
          <div className="my-10">
            {userFeedback &&
              userFeedback.map((feedback) => (
                <div className="border shadow-lg p-5 my-5 w-2/4 rounded-lg">
                  <div className="flex justify-between">
                    <div className="flex items-center mb-5 gap-2">
                      <img
                        className="w-10 rounded-full"
                        src={user.photoURL}
                        alt=""
                      />
                      <h1 className="font-bold">@{user.displayName}</h1>
                      <p>1 min</p>
                    </div>
                    <h1 className="text-2xl text-blue-600">
                      <AiFillLike />
                    </h1>
                  </div>
                  {feedback}
                </div>
              ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Details;
