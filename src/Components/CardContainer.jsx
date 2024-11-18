import card1 from "../assets/card-1.jpg";
import card2 from "../assets/card-2.jpg";
import card3 from "../assets/card-3.jpg";

const CardContainer = () => {
  return (
    <>
      <div className="md:w-7/12 w-11/12 mx-auto grid lg:grid-cols-3 grid-cols-1 gap-5 -mt-5 mb-32">
        <div data-aos="fade-right" className="card bg-base-100 rounded-none border">
          <figure>
            <img src={card2} alt="" />
          </figure>
          <div className="card-body px-5 bg-blue-600 text-white relative">
            <div className="bg-white p-5 rounded-full w-20 h-20 absolute -top-10 md:left-32 left-36">
              <img
                className=""
                src="https://img.icons8.com/?size=100&id=105327&format=png&color=000000"
                alt=""
              />
            </div>
            <h2 className="text-center text-3xl font-Playfair pt-5">
              Career transition
            </h2>
            <p className="font-Roboto">
              Discovering the right career starts with understanding what drives
              you. Establish your brand and your strategy for completing career
              transition
            </p>
          </div>
        </div>
        <div data-aos="fade-up" className="card bg-base-100 rounded-none border">
          <figure>
            <img src={card1} alt="" />
          </figure>
          <div className="card-body px-5 bg-blue-800 text-white relative">
            <div className="bg-white p-5 rounded-full w-20 h-20 absolute -top-10 md:left-32 left-36">
              <img
                className=""
                src="https://img.icons8.com/?size=100&id=112596&format=png&color=000000"
                alt=""
              />
            </div>
            <h2 className="text-center text-3xl font-Playfair pt-5">
              Career development
            </h2>
            <p className="font-Roboto">
              Its time to maximize your personal and professional potential.
              This means being in charge of your careers direction today.
            </p>
          </div>
        </div>
        <div data-aos="fade-left" className="card bg-base-100 rounded-none border">
          <figure>
            <img src={card3} alt="" />
          </figure>
          <div className="card-body px-5 bg-gray-700 text-white relative">
            <div className="bg-white p-5 rounded-full w-20 h-20 absolute -top-10 md:left-32 left-36">
              <img
                className=""
                src="https://img.icons8.com/?size=100&id=48745&format=png&color=000000"
                alt=""
              />
            </div>
            <h2 className="text-center text-3xl font-Playfair pt-5">
              Counseling
            </h2>
            <p className="font-Roboto">
              Your career counselor provides a supportive working relationship
              to help you understand and embrace your abilities, interests and
              potential.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardContainer;
