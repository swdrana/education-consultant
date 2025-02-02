import feature1 from "@/public/img/static/feature01.png";
import feature2 from "@/public/img/static/feature02.png";
import feature3 from "@/public/img/static/feature03.png";
import sunShadow from "@/public/img/static/sun-shadow-right-2.png";
import Image from "next/image";

const features = [
  {
    _id: "1",
    title: "Create Your Online Courses Website.",
    subtitle: "For Online Courses",
    image: feature1,
    badges: [
      "Individual instructor",
      "Multiple Instructors",
      "Marketplace",
      "Single Course",
      "Like Udemy",
      "& More...",
    ],
    gradient: "from-blue-500 via-purple-500 to-pink-500",
    shapeImage: sunShadow,
  },
  {
    _id: "2",
    title: "Create Your Coaching and Training Website.",
    subtitle: "For Professional Coaching",
    image: feature3,
    badges: [
      "Language Academy",
      "Gym Coaching",
      "Career Training",
      "Life Coaching",
      "& More...",
    ],
    gradient: "from-yellow-400 via-orange-500 to-red-500",
    shapeImage: sunShadow,
  },
  {
    _id: "3",
    title: "Create Your Education Website.",
    subtitle: "For University or School Education",
    image: feature2,
    badges: [
      "Higher education",
      "Universities",
      "Kindergarten",
      "Pre School",
      "High School",
      "& More...",
    ],
    gradient: "from-green-500 via-blue-500 to-purple-500",
    shapeImage: sunShadow,
  },
];

export default function Features() {
  return (
    <section className="container mx-auto">
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6">
        {features.map((feature) => (
          <div
            key={feature._id}
            className="group"
          >
            <div
              className={`card bg-gradient-to-r ${feature.gradient} h-full text-center relative overflow-hidden transform transition-all duration-300 ease-in-out hover:scale-110 hover:shadow-xl`}
            >
              <div className="card-body flex flex-col justify-between">
                <div className="content">
                  <span className="text-sm uppercase text-white">
                    {feature.subtitle}
                  </span>
                  <h4 className="text-xl font-semibold text-white mt-2">
                    {feature.title}
                  </h4>
                </div>
                <div className="thumbnail my-4">
                  <Image
                    height={300}
                    width={300}
                    src={feature.image.src}
                    alt="Image"
                    className="mx-auto animate-pulse group-hover:animate-none"  
                  />
                </div>
                <div className="badge-group mt-4 space-x-2">
                  {feature.badges.map((badge) => (
                    <span key={badge} className="badge badge-outline text-base-100 group-hover:text-xs transition-all ease-in-out">
                      {badge}
                    </span>
                  ))}
                </div>
              </div>
              <div
                className="absolute inset-0 bg-cover bg-center opacity-30"
                style={{ backgroundImage: `url(${feature.shapeImage.src})` }}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
