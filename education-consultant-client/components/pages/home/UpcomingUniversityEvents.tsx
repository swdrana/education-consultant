import cardImg1 from "@/public/img/graduation-photo.png";
import Link from "next/link";
import SectionTitle from "../components/SectionTitle";
export default function UpcomingUniversityEvents() {
  const cardInfo = [
    {
      _id: 1,
      photoUrl: cardImg1,
      title: "Come On In. The Water's Fine (Mostly).",
      date: "17 Apr 2024",
      desc: "Maiores voluptas laboriosam non dolorum perferendis fuga repellat aut. Blanditiis quos in minus. Voluptatum quia quia voluptas voluptatem vero ex possimus. Iure et consectetur dolorem dicta accusantium fugiat.",
      time:"10:00 AM - 2:00 PM",
    },
    {
      _id: 2,
      photoUrl: cardImg1,
      title: "Trump Lays Plans to Reverse Obama's Climate Change Legacy",
      date: "31 Dec 2024",
      desc: "Maiores voluptas laboriosam non dolorum perferendis fuga repellat aut. Blanditiis quos in minus. Voluptatum quia quia voluptas voluptatem vero ex possimus. Iure et consectetur dolorem dicta accusantium fugiat.",
      time:"10:00 AM - 2:00 PM",
    },
    {
      _id: 3,
      photoUrl: cardImg1,
      title: "How a Little Bit of Hydra Regrows a Whole Animal",
      date: "15 Dec 2028",
      desc: "Maiores voluptas laboriosam non dolorum perferendis fuga repellat aut. Blanditiis quos in minus. Voluptatum quia quia voluptas voluptatem vero ex possimus. Iure et consectetur dolorem dicta accusantium fugiat.",
      time:"10:00 AM - 2:00 PM",
    },
  ];
  return (
    <div>
      <SectionTitle
        text="Upcoming University Events"
        desc="Sunt autem nusquam hoc epicurus in gravissimo bello animadversionis metu degendae praesidia firmissima. Torquatos nostros? quos tu paulo ante cum teneam sententiam, quid bonum esse vult."
      />

      {/* Card Section */}
      <div className="flex flex-col lg:flex-row flex-wrap items-center justify-center gap-16 my-10">
        {/* Card */}
        {cardInfo.map((card) => {
          return (
            <div className=" w-[370px] h-[308px]" key={card._id}>
<>
              <div className={`shadow-lg rounded-lg p-4 border-t`}>
                <div className=" flex justify-center gap-5 w-[350] max-h-[308]">
                  <p className=" bg-primary bg-opacity-15 rounded-md flex  flex-col items-center justify-center p-2 min-w-14 h-14  text-primary">
                    <span className="font-bold">
                      {" "}
                      {card.date.split(" ")[0]}
                    </span>
                    <span className=" text-xs"> {card.date.split(" ")[1]}</span>
                  </p>
                  <p className=" text-sm">{card.title}</p>
                </div>

                <p className=" text-sm my-3 font-light text-gray-500  min-w-[350px] max-w-[351px] max-h-[308]">
                  {card.desc}
                </p>

                <div className=" flex items-center justify-between">
                  <Link href='/apply' className={`btn btn-sm btn-primary`}>Book Now</Link>
                  <p className=" text-sm">{card.time}</p>
                </div>
              </div>
            </>
            </div>
          );
        })}
      </div>
    </div>
  );
}
