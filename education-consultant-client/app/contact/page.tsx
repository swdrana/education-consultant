export default function contact() {
  return (
    <div>
      <section className="">
        <div className="container px-6 py-12 mx-auto">
          <div className=" flex flex-col justify-center items-center py-5">
            <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight md:text-5xl lg:text-6xl ">
              <mark className="px-2 text-white bg-primary rounded-lg">
                Contact
              </mark>{" "}
              Us
            </h1>
            <p className="  text-center max-w-2xl">
              Here at Flowbite we focus on markets where technology, innovation,
              and capital can unlock long-term value and drive economic growth.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-12 mt-10 lg:grid-cols-2">
            <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
              <div>
                <span className="inline-block p-3 text-base-300 rounded-full  bg-primary">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                    />
                  </svg>
                </span>

                <h2 className="mt-4 text-base font-medium  ">Email</h2>
                <p className="mt-2 text-sm text-base-content ">
                  Our friendly team is here to help.
                </p>
                <p className="mt-2 text-sm text-primary ">hello@merakiui.com</p>
              </div>

              <div>
                <span className="inline-block p-3 text-base-300 rounded-full bg-primary">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                    />
                  </svg>
                </span>

                <h2 className="mt-4 text-base font-medium  ">Live chat</h2>
                <p className="mt-2 text-sm text-base-content ">
                  Our friendly team is here to help.
                </p>
                <p className="mt-2 text-sm text-primary ">Start new chat</p>
              </div>

              <div>
                <span className="inline-block p-3 text-base-300 rounded-full bg-primary">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                    />
                  </svg>
                </span>

                <h2 className="mt-4 text-base font-medium  ">Office</h2>
                <p className="mt-2 text-sm text-base-content ">
                  Come say hello at our office HQ.
                </p>
                <p className="mt-2 text-sm text-primary ">
                  100 Smith Street Collingwood VIC 3066 AU
                </p>
              </div>

              <div>
                <span className="inline-block p-3 text-base-300 rounded-full bg-primary">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                    />
                  </svg>
                </span>

                <h2 className="mt-4 text-base font-medium  ">Phone</h2>
                <p className="mt-2 text-sm text-base-content ">
                  Mon-Fri from 8am to 5pm.
                </p>
                <p className="mt-2 text-sm text-primary ">+1 (555) 000-0000</p>
              </div>
            </div>

            <div className=" rounded-lg   bg-base-200 md:p-8">
              <form>
                <div className="-mx-2 md:items-center md:flex">
                  <div className="flex-1 px-2">
                    <label className="block mb-2 text-sm text-gray-600 ">
                      First Name
                    </label>
                    <input
                      type="text"
                      placeholder="John "
                      className="block w-full px-5 py-2.5 mt-2  placeholder-gray-300 bg-base-100 border border-primary rounded-lg  focus:border-primary dark:focus:border-primary focus:ring-primary focus:outline-none focus:ring focus:ring-opacity-40"
                    />
                  </div>

                  <div className="flex-1 px-2 mt-4 md:mt-0">
                    <label className="block mb-2 text-sm text-gray-600 ">
                      Last Name
                    </label>
                    <input
                      type="text"
                      placeholder="Doe"
                      className="block w-full px-5 py-2.5 mt-2  placeholder-gray-300 bg-base-100 border border-primary rounded-lg  focus:border-primary dark:focus:border-primary focus:ring-primary focus:outline-none focus:ring focus:ring-opacity-40"
                    />
                  </div>
                </div>

                <div className="mt-4">
                  <label className="block mb-2 text-sm text-gray-600 ">
                    Email address
                  </label>
                  <input
                    type="email"
                    placeholder="johndoe@example.com"
                    className="block w-full px-5 py-2.5 mt-2  placeholder-gray-300 bg-base-100 border border-primary rounded-lg  focus:border-primary dark:focus:border-primary focus:ring-primary focus:outline-none focus:ring focus:ring-opacity-40"
                  />
                </div>

                <div className="w-full mt-4">
                  <label className="block mb-2 text-sm text-gray-600 ">
                    Message
                  </label>
                  <textarea
                    className="block w-full h-32 px-5 py-2.5 mt-2  placeholder-gray-300 bg-base-100 border border-primary rounded-lg md:h-56  focus:border-primary dark:focus:border-primary focus:ring-primary focus:outline-none focus:ring focus:ring-opacity-40"
                    placeholder="Message"
                  ></textarea>
                </div>

                <button className=" btn btn-primary w-full mt-5">
                  Send message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
