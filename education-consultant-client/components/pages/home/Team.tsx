'use client';
import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaFacebookF, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import { motion, useMotionValue, useSpring, useMotionTemplate } from "framer-motion";
import SectionTitle from "../components/SectionTitle";

interface TeamMember {
  _id: number;
  photoUrl: string;
  name: string;
  position: string;
  description: string;
  facebook?: string;
  linkedin?: string;
  twitter?: string;
  instagram?: string;
}

export default function Team() {
  const teamMembers = [
    {
      _id: 1,
      photoUrl:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Replace with your image URL
      name: "John Doe",
      position: "Founder",
      description:
        "John is the founder of the agency, bringing over 10 years of experience in the education sector. He is committed to providing students with the best resources and guidance to achieve their academic goals.",
      facebook: "https://facebook.com/johndoe",
      linkedin: "https://linkedin.com/johndoe",
      twitter: "https://twitter.com/johndoe",
      instagram: "https://instagram.com/johndoe",
    },
    {
      _id: 2,
      photoUrl:
        "https://images.unsplash.com/photo-1632255658477-9ac8f313ea41?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Replace with your image URL
      name: "Jane Smith",
      position: "Counselor",
      description:
        "Jane is a seasoned counselor, dedicated to helping students choose the right educational paths. With her expertise in career counseling, she guides students to make informed decisions for their future.",
      facebook: "https://facebook.com/janesmith",
      linkedin: "https://linkedin.com/janesmith",
      twitter: "https://twitter.com/janesmith",
      instagram: "https://instagram.com/janesmith",
    },
    {
      _id: 3,
      photoUrl:
        "https://plus.unsplash.com/premium_photo-1664297814064-661d433c03d9?q=80&w=2667&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Replace with your image URL
      name: "Michael Lee",
      position: "Admissions Officer",
      description:
        "Michael is the Admissions Officer, ensuring a smooth and seamless process for prospective students. He is dedicated to providing valuable insights and support to students during their application process.",
      facebook: "https://facebook.com/michaellee",
      linkedin: "https://linkedin.com/michaellee",
      twitter: "https://twitter.com/michaellee",
      instagram: "https://instagram.com/michaellee",
    },
    {
      _id: 4,
      photoUrl:
        "https://images.unsplash.com/photo-1632255659350-44e0efe04b3f?q=80&w=2864&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Replace with your image URL
      name: "Emma Brown",
      position: "Student Support Specialist",
      description:
        "Emma plays an essential role in supporting students throughout their academic journey. She is always available to assist students with any concerns, ensuring they feel heard and supported.",
      facebook: "https://facebook.com/emmabrown",
      linkedin: "https://linkedin.com/emmabrown",
      twitter: "https://twitter.com/emmabrown",
      instagram: "https://instagram.com/emmabrown",
    },
    {
      _id: 5,
      photoUrl:
        "https://images.unsplash.com/photo-1541577141970-eebc83ebe30e?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGJ1aXNzbmVzcyUyMG1hbnxlbnwwfHwwfHx8MA%3D%3D", // Replace with your image URL
      name: "David Miller",
      position: "Marketing Lead",
      description:
        "David is in charge of marketing, promoting the agency's mission and services to a global audience. With his background in digital marketing, he ensures that our services reach the right people at the right time.",
      facebook: "https://facebook.com/davidmiller",
      linkedin: "https://linkedin.com/davidmiller",
      twitter: "https://twitter.com/davidmiller",
      instagram: "https://instagram.com/davidmiller",
    },
    {
      _id: 6,
      photoUrl:
        "https://scontent-mrs2-2.xx.fbcdn.net/v/t39.30808-1/277676511_3180203492268845_5769328862801171419_n.jpg?stp=dst-jpg_s320x320_tt6&_nc_cat=107&ccb=1-7&_nc_sid=1d2534&_nc_ohc=_BCYlWWzfccQ7kNvgHZJD_M&_nc_zt=24&_nc_ht=scontent-mrs2-2.xx&_nc_gid=Atg2Yg98eWCuRcIAardBSFB&oh=00_AYBGiLD7QDK9SVX3jDghmxBNPMDXDrHMNLyFru77hne9-w&oe=678A90D8", // Replace with your image URL
      name: "Rana",
      position: "Developer",
      description:
        "Rana is a passionate developer with expertise in full-stack web development. He has played a key role in building the platform, ensuring that it is easy to use and reliable for all students and clients.",
      facebook: "https://facebook.com/swdrana",
      linkedin: "https://linkedin.com/swdrana",
      twitter: "https://twitter.com/swdrana",
      instagram: "https://instagram.com/swdrana",
    },
  ];


  const ROTATION_RANGE = 20;
  const HALF_ROTATION_RANGE = ROTATION_RANGE / 2;

  const TiltCard = ({ member }: { member: TeamMember }) => {
    const ref = useRef<HTMLDivElement>(null);

    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const xSpring = useSpring(x);
    const ySpring = useSpring(y);

    const transform = useMotionTemplate`rotateX(${xSpring}deg) rotateY(${ySpring}deg)`;

    const handleMouseMove = (e: React.MouseEvent) => {
      if (!ref.current) return;

      const rect = ref.current.getBoundingClientRect();
      const width = rect.width;
      const height = rect.height;

      const mouseX = (e.clientX - rect.left) * ROTATION_RANGE;
      const mouseY = (e.clientY - rect.top) * ROTATION_RANGE;

      const rX = (mouseY / height - HALF_ROTATION_RANGE) * -1;
      const rY = mouseX / width - HALF_ROTATION_RANGE;

      x.set(rX);
      y.set(rY);
    };

    const handleMouseLeave = () => {
      x.set(0);
      y.set(0);
    };

    return (
      <motion.div
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{ transformStyle: "preserve-3d", transform }}
        className="max-w-xl group"
      >
        <div className="card card-side bg-base-100 shadow-xl flex flex-col md:flex-row p-2 group-hover:scale-105 transition-transform duration-300">
          <figure className="min-w-48 m-2">
            <Image
              className="object-cover rounded-2xl shadow-lg bg-orange-500 max-h-[350px] md:h-52 transition-transform duration-300 group-hover:scale-110"
              src={member.photoUrl}
              alt={member.name}
              width={100}
              height={100}
            />
          </figure>
          <div className="ms-2 flex flex-col gap-3 md:gap-5">
            <div>
              <h2 className="card-title py-0 mt-2">{member.name}</h2>
              <h4 className="font-semibold py-0">{member.position}</h4>
              <div className="divider md:my-1 my-3"></div>
              <p title={member.description}>
                {member.description.length > 100
                  ? member.description.slice(0, 120) + "..."
                  : member.description}
              </p>
            </div>
            <div className="card-actions justify-around py-5 md:py-3">
              {member.facebook && (
                <Link
                  href={member.facebook}
                  target="_blank"
                  className="hover:bg-base-300 transition duration-300 h-10 w-10 flex items-center text-blue-600 justify-center rounded-full"
                >
                  <FaFacebookF size={24} />
                </Link>
              )}
              {member.linkedin && (
                <Link
                  href={member.linkedin}
                  target="_blank"
                  className="hover:bg-base-300 transition duration-300 h-10 w-10 flex items-center text-blue-600 justify-center rounded-full"
                >
                  <FaLinkedin size={24} />
                </Link>
              )}
              {member.twitter && (
                <Link
                  href={member.twitter}
                  target="_blank"
                  className="hover:bg-base-300 transition duration-300 h-10 w-10 flex items-center text-sky-600 justify-center rounded-full"
                >
                  <FaTwitter size={24} />
                </Link>
              )}
              {member.instagram && (
                <Link
                  href={member.instagram}
                  target="_blank"
                  className="hover:bg-base-300 transition duration-300 h-10 w-10 flex items-center text-pink-600 justify-center rounded-full"
                >
                  <FaInstagram size={24} />
                </Link>
              )}
            </div>
          </div>
        </div>
      </motion.div>
    );
  };

  return (
    <div>
      <SectionTitle
        text="Our Team"
        desc="To maintain the reputation of a quality, high standard, and reliable solution by establishing ourselves as one-stop service provider in the Career Industry."
      />

      <div className="flex justify-around items-center gap-16 flex-wrap my-10 mx-2">
        {teamMembers.map((member) => (
          <TiltCard key={member._id} member={member} />
        ))}
      </div>
    </div>
  );
}
