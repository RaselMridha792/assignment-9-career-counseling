import React from "react";
import Marquee from "react-fast-marquee";
import review1 from "../assets/review-1.jpg";
import review2 from "../assets/review-2.jpg";
import review3 from "../assets/review-3.jpg";
import review4 from "../assets/review-4.jpg";
import review5 from "../assets/review-5.jpg";
import review6 from "../assets/review-6.jpg";
import review7 from "../assets/review-7.jpg";
const Review = () => {
  return (
    <div className="font-Roboto">
      <h1 className="text-5xl text-center font-bold">Our Old Students Review</h1>
      <div className="py-10">
        <Marquee pauseOnHover={true}>
          <div className="border rounded-xl shadow-lg w-64 h-96 flex flex-col items-center justify-center px-5 py-5 mr-20">
            <div className="avatar">
              <div className="w-24 rounded-full">
                <img src={review1} />
              </div>
            </div>
            <div className="py-5 text-center">
              <p>
                Their personalized advice and tailored strategies helped me
                secure a position that aligns perfectly with my long-term goals.
                I can't thank them enough!
              </p>
              <h1 className="text-center font-bold">Emily Johnson</h1>
            </div>
          </div>
          <div className="border rounded-xl shadow-lg w-64 h-96 flex flex-col items-center justify-center px-5 py-5 mr-20">
            <div className="avatar">
              <div className="w-24 rounded-full">
                <img src={review2} />
              </div>
            </div>
            <div className="py-5 text-center">
              <p>
                The resume review service was incredibly detailed and
                insightful. I learned how to present my skills in the most
                effective way,
              </p>
              <h1 className="text-center font-bold">Michael Davis</h1>
            </div>
          </div>
          <div className="border rounded-xl shadow-lg w-64 h-96 flex flex-col items-center justify-center px-5 py-5 mr-20">
            <div className="avatar">
              <div className="w-24 rounded-full">
                <img src={review3} />
              </div>
            </div>
            <div className="py-5 text-center">
              <p>
                The job search strategy consultation was a game-changer. I was
                struggling to get noticed, but after implementing their advice,
              </p>
              <h1 className="text-center font-bold">Sarah Roberts</h1>
            </div>
          </div>
          <div className="border rounded-xl shadow-lg w-64 h-96 flex flex-col items-center justify-center px-5 py-5 mr-20">
            <div className="avatar">
              <div className="w-24 rounded-full">
                <img src={review4} />
              </div>
            </div>
            <div className="py-5 text-center">
              <p>
                The personalized career path mapping was exactly what I needed.
                I now have a clear roadmap for my career progression.
              </p>
              <h1 className="text-center font-bold">Olivia Williams</h1>
            </div>
          </div>
          <div className="border rounded-xl shadow-lg w-64 h-96 flex flex-col items-center justify-center px-5 py-5 mr-20">
            <div className="avatar">
              <div className="w-24 rounded-full">
                <img src={review5} />
              </div>
            </div>
            <div className="py-5 text-center">
              <p>
                Thanks to the career transition support, I successfully
                navigated a major career change. The coaching provided clarity
                and direction,
              </p>
              <h1 className="text-center font-bold">James Wilson</h1>
            </div>
          </div>
          <div className="border rounded-xl shadow-lg w-64 h-96 flex flex-col items-center justify-center px-5 py-5 mr-20">
            <div className="avatar">
              <div className="w-24 rounded-full">
                <img src={review7} />
              </div>
            </div>
            <div className="py-5 text-center">
              <p>
                The networking strategies session was incredibly insightful. I
                learned how to build meaningful professional relationships that
                have opened doors for new opportunities.
              </p>
              <h1 className="text-center font-bold">Ava Brown</h1>
            </div>
          </div>
          <div className="border rounded-xl shadow-lg w-64 h-96 flex flex-col items-center justify-center px-5 py-5 mr-20">
            <div className="avatar">
              <div className="w-24 rounded-full">
                <img src={review6} />
              </div>
            </div>
            <div className="py-5 text-center">
              <p>
                The skill gap analysis service identified areas I needed to
                improve and gave me a clear plan for professional development.
              </p>
              <h1 className="text-center font-bold">Sophia Martinez</h1>
            </div>
          </div>
        </Marquee>
      </div>
    </div>
  );
};

export default Review;
