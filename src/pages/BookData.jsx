import { Link } from "react-router-dom";

const BookData = ({ singleBook }) => {
  const { title, description, category, price, image, id } = singleBook;
  return (
    <>
      <div className="card bg-base-100 hover:shadow-xl rounded-none border font-Roboto">
        <figure>
          <img className="w-2/4 h-96 object-cover" src={image} alt="Books" />
        </figure>
        <div className="card-body hover:text-blue-600 duration-300">
          <div>
            <div className="card-title flex flex-col md:flex-row hover:text-blue-600">
              {title}
              <div className="badge badge-secondary">{category}</div>
            </div>
            <p>{description}</p>
          </div>
          <div className="card-actions justify-end">
            <div className="badge badge-outline font-bold">${price} only</div>
          </div>
          <Link
            to={`/bookDetails/${id}`}
            className="btn btn-neutral btn-outline w-2/4"
          >
            Buy Now
          </Link>
        </div>
      </div>
    </>
  );
};

export default BookData;
