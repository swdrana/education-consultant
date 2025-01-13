import Image from "next/image";
import { FaQuoteLeft, FaStar } from "react-icons/fa";

interface ReviewProps {
  name: string;
  img: string;
  description: string;
  designation: string;
  rating: number;
}
const Review = ({ review }: { review: ReviewProps }) => {
  const { name, img, description, designation, rating } = review;

  return (
    <div className=" max-w-xl mx-auto pt-10">
      {/* Outer Box with Fixed Height */}
      <div className="shadow-lg rounded-3xl p-8 pb-0 border border-dashed border-base-300 relative hover:shadow-xl transition duration-300 ease-in-out group overflow-visible h-[350px]">
        {/* Quote Icon Positioned Above the Box */}
        <div className="bg-white  text-primary w-20 h-20 flex justify-center items-center rounded-full shadow-lg transition duration-300 ease-in-out group-hover:bg-secondary group-hover:text-white mx-auto -mt-[70px]">
          <FaQuoteLeft className="text-3xl" />
        </div>

        {/* Description */}
        <p className=" text-center mb-4 text-base-100">{description}</p>

        {/* Client Image */}
        <div className="flex justify-center mb-4">
          <Image
            src={img}
            alt="client"
            width={100}
            height={100}
            className="w-24 h-24 rounded-full object-cover"
          />
        </div>

        {/* Title */}
        <h3 className="text-center text-xl font-bold mb-1 text-base-100">
          {name}
        </h3>
        <p className="text-center text-sm font-semibold text-base-200 mb-3">
          {designation}
        </p>

        {/* Ratings */}
        <div className="flex justify-center">
          <div className="rating">
            {[...Array(5)].map((_, index) => (
              <FaStar
                key={index}
                className={`text-lg ${
                  index < rating ? " text-secondary" : "text-base-200"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
