import latest from "../assets/latest.jpg";
import news1 from "../assets/news1.jpg";
import news2 from "../assets/news-2.jpg";
import news3 from "../assets/news-3.jpg";
const LatestNews = () => {
  return (
    <>
      <div
        className="hero"
        style={{
          backgroundImage: `url(${latest})`,
        }}
      >
        <div className="hero-overlay bg-opacity-80"></div>
        <div className="w-10/12 mx-auto text-neutral-content text-center py-40 font-Roboto">
          <div className=" text-left w-full">
            <div data-aos="fade-up" className="py-5">
              <h1 className="mb-5 md:text-6xl  font-Playfair ">Latest news</h1>
              <p className="mb-5 font-bold text-xl">
                Read our latest blog posts and find out how can you change or
                improve your career immediately.
              </p>
            </div>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-5 md:gap-20 md:flex-row">
              <div data-aos="fade-up" className="card bg-opacity-10 hover:shadow-xl duration-300 rounded-none">
                <figure>
                  <img src={news1} alt="" />
                </figure>
                <div className="card-body px-5 bg-gray-800 bg-opacity-40 text-white relative">
                  <h2 className="text-3xl text-blue-500 hover:text-white duration-500 font-Playfair">
                    Avoid these mistakes at your next job interview
                  </h2>
                  <p className="font-Roboto">
                    No matter how long you have been a successful business
                    professional, a job interview can be nerve wracking. It’s
                    normal to feel the pressure of being
                  </p>
                </div>
              </div>
              <div data-aos="fade-up" className="card bg-opacity-10 hover:shadow-xl duration-300 rounded-none">
                <figure>
                  <img src={news2} alt="" />
                </figure>
                <div className="card-body px-5 bg-gray-800 bg-opacity-40 text-white relative">
                  <h2 className="text-3xl text-blue-500 hover:text-white duration-500 font-Playfair">
                    Finding your place in the professional world
                  </h2>
                  <p className="font-Roboto">
                    Do you feel like you don’t belong at your current job? If
                    the answer is yes, you’re not alone. According to a Gallup
                    study, this has become a worldwide issue. The study shows
                    that only 13% of employees
                  </p>
                </div>
              </div>
              <div data-aos="fade-up" className="card bg-opacity-10 hover:shadow-xl duration-300 rounded-none">
                <figure>
                  <img src={news3} alt="" />
                </figure>
                <div className="card-body px-5 bg-gray-800 bg-opacity-40 text-white relative">
                  <h2 className="text-3xl text-blue-500 hover:text-white duration-500 font-Playfair">
                    How to survive a career mishap
                  </h2>
                  <p className="font-Roboto">
                    Every professional has been guilty of making a mistake.
                    Small mishaps are easier to overlook, such as a typo in a
                    document or a formatting error in a
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LatestNews;
