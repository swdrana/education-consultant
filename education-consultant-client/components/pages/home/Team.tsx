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
  const teamMembers: TeamMember[] = [
    // teamMembers array data...
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
