import cardImg1 from "@/public/img/graduation-photo.png";
import Image from "next/image";
import SectionTitle from "../components/SectionTitle";
import Link from "next/link";
export default function News() {
    const cardInfo = [
        {
           _id:1,
           photoUrl:cardImg1,
           title: "Come On In. The Water's Fine (Mostly).",
           date:'17 Apr 2024',
        },
        {
           _id:2,
           photoUrl:cardImg1,
           title: "Trump Lays Plans to Reverse Obama's Climate Change Legacy",
           date:'31 Dec 2024',
        },
        {
           _id:3,
           photoUrl:cardImg1,
           title: 'How a Little Bit of Hydra Regrows a Whole Animal',
           date:'15 Dec 2028',
        }
    ]
  return (
    <div>
      <SectionTitle
        text="News"
        desc="To maintain the reputation of a quality,high standard and reliable solution by establishing ourselves as one stop service Provider in the Career Industry."
      />

      {/* Card Section */}
      <div className="flex  justify-around items-center gap-16 flex-wrap">
        {/* Card */}
        {
            cardInfo.map(card=>{
                return <Link href='/'  key={card._id}> 
                <div className={`shadow-lg rounded-lg w-80 h-[350] overflow-hidden `}>
                    <Image src={cardImg1} alt="" width={100} height={100} className={` overflow-hidden object-cover bg-orange-500 w-full h-52`} />
                    
                        <p className=" text-sm ms-4 my-1 text-justify font-light text-gray-500">{card.date}</p>
                        <h4 className=" px-4 text-md font-semi-bold mb-6">{card.title}</h4>
                    
                </div></Link>
            })
        }
      </div>
    </div>
  );
}
