import { useEffect, useState } from "react";
import bookbg from "../assets/bookbg.jpg";
import AOS from "aos";
import "aos/dist/aos.css";
import { useParams } from "react-router-dom";
import author from "../assets/review-7.jpg";
import { Helmet } from "react-helmet-async";

const SingleBookData = () => {
  const { id } = useParams();
  const [allBook, setAllBook] = useState([]);
  const [bookData, setBookData] = useState({});
  useEffect(() => {
    const loadData = async () => {
      const response = await fetch("/book.json");
      const data = await response.json();
      setAllBook(data);
    };
    loadData();
  }, []);

  useEffect(() => {
    const SpecificBook = allBook.find((book) => book.id == id);
    setBookData(SpecificBook || {});
  }, [allBook, id]);
  console.log(bookData);

  const { image, price, category, readMore, title } = bookData;

  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
    AOS.refresh();
  }, []);
  return (
    <>
      <section>
        <Helmet>
          <title>Shop Details | Career Compass</title>
        </Helmet>
        <div
          className="hero min-h-fit font-Roboto"
          style={{
            backgroundImage: `url(${bookbg})`,
          }}
        >
          <div className="hero-overlay bg-opacity-10"></div>
          <div className="hero-content py-20 text-neutral-content">
            <div data-aos="fade-down" className=" py-20">
              <h1 className="text-5xl font-bold font-Playfair text-white">
                Becoming a professional life coach
              </h1>
              <h1 className="text-2xl md:w-2/4 pt-5 text-white"></h1>
            </div>
          </div>
        </div>
      </section>
      <div className="hero bg-base-100 min-h-fit">
        <div className="hero-content flex-col gap-5 lg:flex-row py-40">
          <img src={image} className="w-full h-96 object-cover shadow-2xl" />
          <div className="">
            <h1 className="text-5xl font-bold">{title}</h1>
            <div className="flex items-center gap-2">
              <div className="avatar my-5">
                <div className="ring-primary ring-offset-base-100 w-10 rounded-full">
                  <img src={author} />
                </div>
              </div>
              <h1 className="text-xl font-bold">lara casie</h1>
            </div>
            <div className="rating">
              <h1 className="text-xl pr-3">rate us: </h1>
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
            <p className="py-6">
              <span className="font-bold text-lg">Description:</span> {readMore}
            </p>
            <div className="pb-5 *:text-xl *:font-bold">
              <h1>price: ${price}</h1>
              <p>Category: {category}</p>
            </div>
            <div className="flex gap-5">
              <button className="btn btn-neutral">Buy Now</button>
              <button className="btn btn-neutral btn-outline">
                View OverView
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleBookData;
