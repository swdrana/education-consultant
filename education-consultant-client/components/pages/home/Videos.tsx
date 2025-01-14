import SectionTitle from "../components/SectionTitle";

export default function Videos() {
  return (
    <div className="my-10 lg:my-20 container mx-auto px-4">
      <SectionTitle
        text="Videos"
        desc="To maintain the reputation of a quality, high standard, and reliable solution by establishing ourselves as one-stop service provider in the Career Industry."
      />
      <div className="w-full mt-10">
        <div className="flex flex-col lg:flex-row gap-10">
          {/* Video 1 */}
          <div className="w-full lg:w-1/2">
            <div className="relative w-full h-0 pb-[56.25%] rounded-lg overflow-hidden shadow-lg">
              <iframe
                className="absolute top-0 left-0 w-full h-full"
                src="https://www.youtube.com/embed/jO5lxB6pfS4?si=X31IOsrJfLktTzvb"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            </div>
          </div>
          {/* Video 2 */}
          <div className="w-full lg:w-1/2">
            <div className="relative w-full h-0 pb-[56.25%] rounded-lg overflow-hidden shadow-lg">
              <iframe
                className="absolute top-0 left-0 w-full h-full"
                src="https://www.youtube.com/embed/ti8Mu4ZO5bY?si=FbSeZZ1ArIQvjiql"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
