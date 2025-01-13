import Link from "next/link";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";

export default function SocailLink() {
  return (
    <div>
      <div className="inline-flex gap-10">
        <Link
          href="https://facebook.com/swdrana"
          className="bg-white hover:bg-primary transition duration-300 h-8 w-8 flex items-center justify-center rounded-full"
          target="_blank"
        >
          <FaFacebookF color="blue" size={24} />
        </Link>
        <Link
          href="https://instagram.com/swdrana"
          className="bg-white hover:bg-primary transition duration-300 h-8 w-8 flex items-center text-orange-700 justify-center rounded-full"
          target="_blank"
        >
          <FaInstagram size={24} />
        </Link>
        <Link
          href="https://youtube.com/swdrana"
          className="bg-white hover:bg-primary transition duration-300 h-8 w-8 flex items-center text-red-600 justify-center rounded-full"
          target="_blank"
        >
          <FaYoutube size={24} />
        </Link>
      </div>
    </div>
  );
}
