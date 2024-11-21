import { useEffect, useState } from "react";
import bookbg from "../assets/bookbg.jpg";
import book from "../assets/pngegg.png";
import AOS from "aos";
import "aos/dist/aos.css";
import BookData from "./BookData";
import { Helmet } from "react-helmet-async";

const Book = () => {
  const [bookData, setBookData] = useState([]);

  useEffect(() => {
    const loadData = async () => {
      const response = await fetch("/book.json");
      const data = await response.json();
      setBookData(data);
    };
    loadData();
  }, []);

  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
    AOS.refresh();
  }, []);
  return (
    <>
      <Helmet>
        <title>Shop Now | Career Compass</title>
      </Helmet>
      <section>
        <div
          className="hero min-h-fit font-Roboto"
          style={{
            backgroundImage: `url(${bookbg})`,
          }}
        >
          <div className="hero-overlay bg-opacity-10"></div>
          <div className="hero-content py-20 text-neutral-content">
            <div data-aos="fade-down" className=" py-20">
              <img data-aos="fade-up" className="max-w-80" src={book} alt="" />
              <h1 className="text-5xl font-bold font-Playfair text-white">
                Shop Now
              </h1>
              <h1 className="text-2xl md:w-2/4 pt-5 text-white">
                Synergistically evolve 2.0 technologies rather than just in time
                initiatives. Quickly deploy strategic networks with compelling
                e-business.
              </h1>
            </div>
          </div>
        </div>
      </section>
      <section className="w-10/12 mx-auto px-5">
        <div className="py-20">
          <h1 className="text-5xl font-Playfair text-center md:w-2/4 mx-auto">
            Fuel Your Ambition, Build Your Future – One Book at a Time!
          </h1>
          <p className="text-gray-500 text-lg font-roboto text-center md:w-2/4 mx-auto py-5">
            Empowering your journey with career-focused books to unlock
            potential, sharpen skills, and achieve success.
          </p>
          <hr />
        </div>
        <div className="my-10 grid  md:grid-cols-3 gap-5">
          {bookData.map((singleBook) => (
            <BookData key={singleBook.id} singleBook={singleBook}></BookData>
          ))}
        </div>
      </section>
    </>
  );
};

export default Book;
