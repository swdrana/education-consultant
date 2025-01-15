import aboutBanner from "@/public/img/feature/about-banner.jpeg";
import Image from "next/image";
export default function page() {
  // nextjs 14 using app route. want to post to backend so make rest of the code take data from form and want to store db. 
  return (
    <section className=" container mx-auto py-10 lg:py-20">
      <div className=" flex flex-col justify-center items-center">
        <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight md:text-5xl lg:text-6xl ">
          Apply <mark className="px-2 text-white bg-primary rounded-lg">Now</mark>{" "}
          Online
        </h1>
        <p className="  text-center max-w-2xl">
          Here at Flowbite we focus on markets where technology, innovation, and
          capital can unlock long-term value and drive economic growth.
        </p>
      </div>
      <div className="w-full flex justify-center lg:justify-start my-10">
        <Image
          className="object-cover object-center rounded-lg"
          src={aboutBanner}
          alt="about banner"
        />
      </div>
      <div className="flex flex-col lg:flex-row items-center">
        {/* Left Part: Image */}

        {/* Right Part: Combined Form */}
        <div className="w-full ">
          <div className="card bg-base-100 w-full shadow-2xl">
            <form className="card-body">
              {/* Form Part 1 */}
              <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 ">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Name</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    placeholder="Name"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Phone</span>
                  </label>
                  <input
                    type="tel"
                    placeholder="+880"
                    id="tel"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    placeholder="Email"
                    id="email"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Date of Birth</span>
                  </label>
                  <input
                    type="date"
                    id="birthDate"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Gender</span>
                  </label>
                  <select
                    className="select select-bordered"
                    name="gender"
                    id="gender"
                  >
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                {/* Form Part 2 */}
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Do You Have Passport?</span>
                  </label>
                  <select
                    className="select select-bordered"
                    name="passport"
                    id="passport"
                  >
                    <option value="yes">Yes</option>
                    <option value="no">No</option>
                  </select>
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">English Proficiency Test</span>
                  </label>
                  <select
                    className="select select-bordered"
                    name="englishTest"
                    id="englishTest"
                  >
                    <option value="ielts">IELTS</option>
                    <option value="dolingo">Dolingo</option>
                    <option value="tofel">TOFEL</option>
                    <option value="pte">PTE</option>
                    <option value="other">Other</option>
                    <option value="none">I don&lsquo;t have any</option>
                  </select>
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Completed Education</span>
                  </label>
                  <select
                    className="select select-bordered"
                    name="education"
                    id="education"
                  >
                    <option value="diploma">Diploma</option>
                    <option value="hsc">HSC</option>
                    <option value="aLevels">A Levels</option>
                    <option value="graduation">Graduation</option>
                    <option value="postGraduation">Post Graduation</option>
                  </select>
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Past Academic Details</span>
                  </label>
                  <textarea
                    id="academicDetails"
                    placeholder="Enter previous institute, subject, group, passing year, or result"
                    className="textarea textarea-bordered"
                    required
                  ></textarea>
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Study Destination</span>
                  </label>
                  <select
                    className="select select-bordered"
                    name="studyDestination"
                    id="studyDestination"
                  >
                    <option value="china">China</option>
                    <option value="southKorea">South Korea</option>
                    <option value="uk">UK</option>
                    <option value="canada">Canada</option>
                    <option value="malaysia">Malaysia</option>
                    <option value="romania">Romania</option>
                    <option value="russia">Russia</option>
                    <option value="usa">USA</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary" type="submit">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}