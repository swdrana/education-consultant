import Image from "next/image";
import Link from "next/link";
import SectionTitle from "../components/SectionTitle";
export default async function News({ blogs }: any) {
  return (
    <div>
      <SectionTitle
        text="News"
        desc="To maintain the reputation of a quality,high standard and reliable solution by establishing ourselves as one stop service Provider in the Career Industry."
      />

      {/* Card Section */}
      <div className="flex  justify-around items-center gap-16 flex-wrap">
        {/* Card */}
        {blogs.slice(blogs.length - 3, blogs.length).map((card: any) => {
          return (
            <Link
              href={`/blogs/${card.title}`}
              key={card._id}
              className=" hover:scale-105 transition-all duration-300 ease-in-out"
            >
              <div
                className={`shadow-lg rounded-lg w-80 h-[350] overflow-hidden `}
              >
                <Image
                  src={card.image}
                  alt=""
                  width={100}
                  height={100}
                  className={` overflow-hidden object-cover bg-orange-500 w-full h-52`}
                />

                <p className=" text-sm ms-4 my-1 text-justify font-light text-gray-500">
                  {new Date(card?.updatedAt).toLocaleDateString("en-US", {
                    day: "numeric",
                    month: "long",
                  })}
                </p>
                <h4 className=" px-4 text-md font-semi-bold mb-6">
                  {card.title}
                </h4>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
