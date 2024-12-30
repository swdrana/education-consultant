import cardImg1 from "@/public/img/graduation-photo.png";
import Image from "next/image";
import SectionTitle from "../components/SectionTitle";
import Link from "next/link";
export default function OurServices() {
    const cardInfo = [
        {
           _id:1,
           photoUrl:cardImg1,
           title: 'Career Counselling',
           desc:"Maiores voluptas laboriosam non dolorum perferendis fuga repellat aut. Blanditiis quos in minus. Voluptatum quia quia voluptas voluptatem vero ex possimus. Iure et consectetur dolorem dicta accusantium fugiat.",
           bgColor:' bg-purple-500 ',
           textColor:' text-purple-500 ',
           borderColor:' border-purple-500 ',
        },
        {
           _id:2,
           photoUrl:cardImg1,
           title: 'University Admissions',
           desc:"Maiores voluptas laboriosam non dolorum perferendis fuga repellat aut. Blanditiis quos in minus. Voluptatum quia quia voluptas voluptatem vero ex possimus. Iure et consectetur dolorem dicta accusantium fugiat.",
           bgColor:' bg-red-500 ',
           textColor:' text-red-500 ',
           borderColor:' border-red-500 ',
        },
        {
           _id:3,
           photoUrl:cardImg1,
           title: 'Visa Consultancy',
           desc:"Maiores voluptas laboriosam non dolorum perferendis fuga repellat aut. Blanditiis quos in minus. Voluptatum quia quia voluptas voluptatem vero ex possimus. Iure et consectetur dolorem dicta accusantium fugiat.",
           bgColor:' bg-green-500 ',
           textColor:' text-green-500 ',
           borderColor:' border-green-500 ',
        },
        {
           _id:4,
           photoUrl:cardImg1,
           title: 'Accommodation',
           desc:"Maiores voluptas laboriosam non dolorum perferendis fuga repellat aut. Blanditiis quos in minus. Voluptatum quia quia voluptas voluptatem vero ex possimus. Iure et consectetur dolorem dicta accusantium fugiat.",
           bgColor:' bg-blue-500 ',
           textColor:' text-blue-500 ',
           borderColor:' border-blue-500 ',
        },
        {
           _id:5,
           photoUrl:cardImg1,
           title: 'Pre-Departure Briefing',
           desc:"Maiores voluptas laboriosam non dolorum perferendis fuga repellat aut. Blanditiis quos in minus. Voluptatum quia quia voluptas voluptatem vero ex possimus. Iure et consectetur dolorem dicta accusantium fugiat.",
           bgColor:' bg-orange-500 ',
           textColor:' text-orange-500 ',
           borderColor:' border-orange-500 ',
        },
    ]
  return (
    <div>
      <SectionTitle
        text="Our Services"
        desc="Executive Trade International is an University Application Centre, guiding Bangladeshi students to Australian, British, Canadian and Irish universities!"
      />

      {/* Card Section */}
      <div className="flex justify-around items-center gap-10 flex-wrap">
        {/* Card */}
        {
            cardInfo.map(card=>{
                return <div key={card._id} className={`border-2 hover:${card.borderColor} rounded-lg w-80 h-[350] p-4 overflow-hidden `}>
                    <Image src={cardImg1} alt="" width={50} height={50} className={`rounded-full ${card.bgColor} overflow-hidden h-20 w-20 object-cover`} />
                    <Link href='/'>
                        <h2 className=" pt-5 pb-3 text-2xl font-semi-bold">Career Counselling</h2>
                        <p className=" text-sm mb-5 text-justify font-light">Maiores voluptas laboriosam non dolorum perferendis fuga repellat aut. Blanditiis quos in minus. Voluptatum quia quia voluptas voluptatem vero ex possimus. Iure et consectetur dolorem dicta accusantium fugiat.</p>
                        <button className={`btn btn-sm hover:bg-transparent hover:text-black ${card.textColor} btn-outline border-0 text-start ps-1 ms`}>Learn More -&gt;</button>
                    </Link>
                </div>
            })
        }
        
      </div>
    </div>
  );
}
