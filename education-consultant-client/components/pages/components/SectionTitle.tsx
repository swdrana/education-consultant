export default function SectionTitle({
  text,
  desc,
}: {
  text: string;
  desc: string;
}) {
  return (
    <div className=" container mx-auto">
      <h1 className=" text-3xl font-bold text-center">{text}</h1>
      <div className=" flex justify-center">

      <p className=" w-full mx-5 md:mx-0 md:w-2/3 text-center font-light my-5">{desc}</p>
      </div>
    </div>
  );
}
