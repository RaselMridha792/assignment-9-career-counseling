import { Link } from "react-router-dom";
import heroImg from "../assets/hero-bg-1.jpg";
import heroImg2 from "../assets/hero-bg-2.jpg";
import heroImg3 from "../assets/hero-bg-3.jpg";
const Header = () => {
  return (
    <>
      <div className="carousel w-full">
        <div id="slide1" className="carousel-item relative w-full">
          <div
            className="hero min-h-screen"
            style={{
              backgroundImage: `url(${heroImg})`,
            }}
          >
            <div className="hero-overlay bg-white md:bg-opacity-10 bg-opacity-50"></div>
            <div className="md:w-10/12 w-11/12 mx-auto font-Roboto">
              <div className="max-w-xl">
                <p className="md:text-2xl uppercase font-semibold py-5">
                  Turn your passion into reality
                </p>
                <h1 className="font-Playfair lg:text-7xl md:text-5xl text-3xl font-bold">
                  Make your{" "}
                  <span className="text-blue-600"> dreams a reality</span>
                </h1>
                <p className="py-5 md:text-2xl font-light">
                  Discover your strengths, explore your passions, and find a
                  career path that brings fulfillment and growth for your
                  future.
                </p>
                <div className="uppercase flex flex-col md:flex-row items-center gap-5">
                  <Link
                    className="btn w-full md:w-1/4 rounded-full bg-blue-600 text-white border-none"
                    to="/"
                  >
                    Learn More
                  </Link>
                  <Link
                    className="btn w-full md:w-1/4 rounded-full bg-gray-700 text-white border-none"
                    to="/"
                  >
                    Our Program
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide4" className="btn btn-circle hidden md:flex">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle hidden md:flex">
              ❯
            </a>
          </div>
        </div>

        <div id="slide2" className="carousel-item relative w-full">
          <div
            className="hero min-h-screen"
            style={{
              backgroundImage: `url(${heroImg2})`,
            }}
          >
            <div className="hero-overlay bg-white md:bg-opacity-20 bg-opacity-50"></div>
            <div className="md:w-8/12 w-11/12 mx-auto font-Roboto flex items-end justify-end">
              <div className="max-w-xl">
                <p className="md:text-2xl uppercase font-semibold py-5">
                  Our free career tools
                </p>
                <h1 className="font-Playfair lg:text-7xl md:text-5xl text-3xl font-bold">
                  plans for <span className="text-blue-600">your success</span>
                </h1>
                <p className="py-5 md:text-2xl font-light">
                  Success begins with a clear plan; map out your goals, stay
                  focused, and take consistent steps toward your dreams.
                </p>
                <div className="uppercase flex flex-col md:flex-row items-center gap-5">
                  <Link
                    className="btn w-full md:w-1/4 rounded-full bg-blue-600 text-white border-none"
                    to="/"
                  >
                    Learn More
                  </Link>
                  <Link
                    className="btn w-full md:w-1/4 rounded-full bg-gray-700 text-white border-none"
                    to="/"
                  >
                    Our Program
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide1" className="btn btn-circle hidden md:flex">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle hidden md:flex">
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <div
            className="hero min-h-screen"
            style={{
              backgroundImage: `url(${heroImg3})`,
            }}
          >
            <div className="hero-overlay bg-white bg-opacity-0"></div>
            <div className="w-10/12 mx-auto font-Roboto">
              <div className="max-w-xl">
                <p className="md:text-2xl uppercase font-semibold py-5 text-blue-600">
                  Turn your passion into reality
                </p>
                <h1 className="font-Playfair lg:text-7xl md:text-5xl text-3xl text-white">
                  Make your{" "}
                  <span className="text-blue-600"> dreams a reality</span>
                </h1>
                <p className="py-5 md:text-2xl font-light text-white">
                  Discover your strengths, explore your passions, and find a
                  career path that brings fulfillment and growth for your
                  future.
                </p>
                <div className="uppercase flex items-center gap-5 flex-col md:flex-row">
                  <Link
                    className="btn rounded-full w-full md:w-1/4 bg-blue-600 text-white border-none"
                    to="/"
                  >
                    Learn More
                  </Link>
                  <Link
                    className="btn rounded-full w-full md:w-1/4 bg-gray-700 text-white border-none"
                    to="/"
                  >
                    Our Program
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide2" className="btn btn-circle hidden md:flex">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle hidden md:flex">
              ❯
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
