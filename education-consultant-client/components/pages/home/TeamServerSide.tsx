/* eslint-disable @next/next/no-img-element */
import connectDB from "@/lib/connectDB";
import TeamMember, { ITeamMember } from "@/models/TeamMember";
import Image from "next/image";
import Link from "next/link";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";
import SectionTitle from "../components/SectionTitle";

export default async function TeamServerSide() {
  await connectDB();

  // Cast the data to ITeamMember[]
  const teamMembers: ITeamMember[] = await TeamMember.find();

  const TiltCard = ({ member }: { member: ITeamMember }) => {
    return (
      <div className="w-full group">
        <div className="card card-side bg-base-100 shadow-xl flex flex-col md:flex-row p-2 group-hover:scale-105 transition-transform duration-300">
          <figure className="min-w-48 m-2">
            <Image
              className="object-cover rounded-2xl shadow-lg bg-orange-500 max-h-[350px] md:h-52 transition-transform duration-300 group-hover:scale-110"
              src={member.photoUrl}
              alt={member.name}
              width={100}
              height={100}
              unoptimized={true}
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
      </div>
    );
  };

  return (
    <div>
      <SectionTitle
        text="Our Team"
        desc="To maintain the reputation of a quality, high standard, and reliable solution by establishing ourselves as one-stop service provider in the Career Industry."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 flex-wrap my-10 mx-2">
        {teamMembers.map((member) => (
          <TiltCard key={member._id as string} member={member} />
        ))}
      </div>
    </div>
  );
}
