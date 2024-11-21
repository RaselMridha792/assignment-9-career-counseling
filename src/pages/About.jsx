import herobg from "../assets/news-2.jpg";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { IoCall, IoLocationSharp } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { Helmet } from "react-helmet-async";
const About = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
    AOS.refresh();
  }, []);
  return (
    <>
    <Helmet>
      <title>About Us | Career Compass</title>
    </Helmet>
      <section>
        <div
          className="hero min-h-fit"
          style={{
            backgroundImage: `url(${herobg})`,
          }}
        >
          <div className="hero-overlay bg-opacity-70 bg-gray-400"></div>
          <div className="hero-content text-neutral-content py-40 font-roboto">
            <div data-aos="fade-down" className="text-black">
              <h1 className="mb-5 text-5xl font-bold font-Playfair">
                About us
              </h1>
              <hr className="border-b-2 border-blue-600 md:w-1/12 w-3/12" />
              <p className="mb-5 md:w-3/4">
                Life coaching programs are tailored to meet the unique needs of
                any group, from corporations to professional organizations. Each
                program is crafted to empower you to achieve your goals and
                attract the life you desire.
              </p>
            </div>
          </div>
        </div>
        {/* main part  */}
        <div className="w-10/12 mx-auto font-roboto">
          <div data-aos="fade-up" className="lg:w-2/4 md:py-20 py-10">
            <h1 className="text-5xl capitalize font-bold text-blue-600 pb-5">
              Our Life Coaching Approach
            </h1>
            <p className="text-lg text-gray-500">
              Coaches possess the ability to gain a broader perspective, often
              referred to as "helicopter vision," allowing them to offer fresh
              insights on challenging situations. They serve as a sounding board
              during tough decisions, help refine skills, and provide
              motivation.
            </p>
          </div>
          <div
            data-aos="fade-down"
            className="md:mb-20 mx-auto gap-10 w-10/12 my-10 grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 text-center"
          >
            <div className="flex flex-col items-center justify-center">
              <img
                src="https://img.icons8.com/?size=100&id=kGX9L2tKAeaN&format=png&color=000000"
                alt=""
              />
              <h1 className="text-2xl font-bold w-2/4">
                Strengthen your emotional bond
              </h1>
            </div>
            <div className="flex flex-col items-center justify-center">
              <img
                src="https://img.icons8.com/?size=100&id=54385&format=png&color=000000"
                alt=""
              />
              <h1 className="text-2xl font-bold w-2/4">
                improve your communication
              </h1>
            </div>
            <div className="flex flex-col items-center justify-center">
              <img
                src="https://img.icons8.com/?size=100&id=SLRmCHqx8lsK&format=png&color=000000"
                alt=""
              />
              <h1 className="text-2xl font-bold w-2/4">Intimacy and passion</h1>
            </div>
            <div className="flex flex-col items-center justify-center">
              <img
                src="https://img.icons8.com/?size=100&id=10994&format=png&color=000000"
                alt=""
              />
              <h1 className="text-2xl font-bold w-2/4">
                On the same page with your partner
              </h1>
            </div>
            <div className="flex flex-col items-center justify-center">
              <img
                src="https://img.icons8.com/?size=100&id=37965&format=png&color=000000"
                alt=""
              />
              <h1 className="text-2xl font-bold w-2/4">
                Bring back the spark in your relationship
              </h1>
            </div>
            <div className="flex flex-col items-center justify-center">
              <img
                src="https://img.icons8.com/?size=100&id=8902&format=png&color=000000"
                alt=""
              />
              <h1 className="text-2xl font-bold w-2/4">
                Planning your family and your loved ones
              </h1>
            </div>
            <div className="flex flex-col items-center justify-center">
              <img
                src="https://img.icons8.com/?size=100&id=60779&format=png&color=000000"
                alt=""
              />
              <h1 className="text-2xl font-bold w-2/4">
                With the people, for the people
              </h1>
            </div>
            <div className="flex flex-col items-center justify-center">
              <img
                src="https://img.icons8.com/?size=100&id=11208&format=png&color=000000"
                alt=""
              />
              <h1 className="text-2xl font-bold w-2/4">
                Feel complete, inside and outside
              </h1>
            </div>
          </div>
          <hr className="my-10" />
          <div className="text-center py-5">
            <Link to="/" className="btn btn-neutral">
              View All Courses
            </Link>
          </div>

          {/* next section  start here */}
        </div>
        <div data-aos="fade-down" className="min-h-fit py-20 pb-52 bg-gray-800">
          <div className="w-10/12 mx-auto">
            <div className="py-5">
              <h1 className="text-white font-bold text-4xl pb-5">
                Life coaching in numbers
              </h1>
              <p className="text-white text-lg md:w-2/4">
                Before you start your coaching, you’re sure to have a number of
                questions about the journey you will soon undertake. Here are
                crunched numbers about it before coaching even begins.
              </p>
            </div>
            <div className="stats rounded-none h-52 shadow w-full">
              <div className="stat">
                <div className="stat-figure text-primary">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    className="inline-block h-8 w-8 stroke-current"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                    ></path>
                  </svg>
                </div>
                <div className="stat-title">Success for all clients so far</div>
                <div className="stat-value text-primary">90%</div>
                <div className="stat-desc">10% more than last month</div>
              </div>

              <div className="stat">
                <div className="stat-figure text-secondary">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    className="inline-block h-8 w-8 stroke-current"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    ></path>
                  </svg>
                </div>
                <div className="stat-title">Clients consulted in total</div>
                <div className="stat-value text-secondary">2,8k</div>
                <div className="stat-desc">21% more than last month</div>
              </div>

              <div className="stat">
                <div className="stat-figure text-secondary">
                  <div className="avatar online">
                    <div className="w-16 rounded-full">
                      <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                    </div>
                  </div>
                </div>
                <div className="stat-value">86%</div>
                <div className="stat-title">Tasks done</div>
                <div className="stat-desc text-secondary">
                  311 tasks remaining
                </div>
              </div>
            </div>
          </div>
        </div>

        <div data-aos="fade-down" className="md:w-8/12 -mt-20 mb-20 mx-auto bg-blue-800 py-20 flex flex-col justify-center items-center">
          <h1 className="text-4xl text-white text-center">
            Discover, apply, choose
          </h1>
          <p className="text-lg text-white py-3 text-center px-5 md:w-3/4 mx-auto">
            When it comes to your career management, having a professional
            career coach at your side is a key element to your support system.
            Our newsletter will keep you up to date and will guide you through
            choosing your career.
          </p>
          <div className=" flex flex-col gap-3 md:flex-row my-5">
            <input
              type="text"
              placeholder="Type here"
              className="input w-full"
            />
            <button className="btn btn-neutral">Subscribe Now</button>
          </div>
        </div>

        <div data-aos="fade-up" className="md:my-40 my-20 font-Roboto grid lg:grid-cols-2 w-10/12 mx-auto gap-5">
          <div>
            <h1 className="md:text-5xl font-Playfair font-bold ">
              visit us <span className="text-blue-600">any time</span>
            </h1>
            <p className="text-lg text-gray-500 pt-5">
              We all know how life can be challenging and hard. And that there’s
              no answer always to all the issues you may face. We are here to
              help you
            </p>
          </div>
          <div className="flex flex-col items-center justify-between md:flex-row gap-5">
            <div className="flex flex-col items-center justify-center">
              <h1 className="text-7xl text-blue-600">
                <IoLocationSharp />
              </h1>
              <h1 className="text-3xl font-bold text-center">Address</h1>
              <p className="text-center">37 Green Road, Dhanmondi, <br /> Dhaka, 1205, Bangladesh</p>
            </div>
            <div className="flex flex-col items-center justify-center">
              <h1 className="text-7xl text-blue-600">
              <IoCall />
              </h1>
              <h1 className="text-3xl font-bold text-center">Call us</h1>
              <p className="text-center">+880-0000-0000</p>
              <p className="text-center">+880-0000-0000</p>
            </div>
            <div className="flex flex-col items-center justify-center">
              <h1 className="text-7xl text-blue-600">
              <MdEmail />
              </h1>
              <h1 className="text-3xl font-bold text-center">Email</h1>
              <p className="text-center">raselmridha@hotmail.com</p>
              <p className="text-center">raselmridha@hotmail.com</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
