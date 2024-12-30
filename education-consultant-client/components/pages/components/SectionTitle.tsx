export default function SectionTitle({
  text,
  desc,
}: {
  text: string;
  desc: string;
}) {
  return (
    <>
      <h1 className=" text-3xl font-bold text-center">{text}</h1>
      <div className=" flex justify-center">

      <p className=" w-full md:w-2/3 text-center font-light my-10">{desc}</p>
      </div>
    </>
  );
}
