/* eslint-disable @next/next/no-img-element */
import studyAbroad from '@/public/img/static/study-abroad.jpg'
import g1 from '@/public/img/static/g1.jpg'
import g2 from '@/public/img/static/g2.jpg'
import g3 from '@/public/img/static/g3.jpg'
import g4 from '@/public/img/static/g4.jpg'
import g5 from '@/public/img/static/g5.jpg'
import Image from 'next/image'
export default function Gallary() {
  return (
    <section className=" body-font">
    <div className="container px-5 py-24 mx-auto flex flex-wrap">
      <div className="flex w-full mb-20 flex-wrap">
        <h1 className="sm:text-3xl text-2xl font-medium title-font lg:w-1/3 lg:mb-0 mb-4">Gallery Master Cleanse Reliac Heirloom</h1>
        <p className="lg:pl-6 lg:w-2/3 mx-auto leading-relaxed text-base">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably haven&rsquo;t heard of them man bun deep jianbing selfies heirloom.</p>
      </div>
      <div className="flex flex-wrap md:-m-2 -m-1">
        <div className="flex flex-wrap w-1/2">
          <div className="md:p-2 p-1 w-1/2 overflow-hidden">
            <Image width={100} height={100} alt={studyAbroad as unknown as string} className="w-full object-cover h-full object-center block hover:scale-105 transition duration-300 " src={studyAbroad}/>
          </div>
          <div className="md:p-2 p-1 w-1/2  overflow-hidden">
          <Image width={100} height={100} alt={g1 as unknown as string} className="w-full object-cover h-full object-center block hover:scale-105 transition duration-300 " src={g1}/>
          </div>
          <div className="md:p-2 p-1 w-full overflow-hidden">
            <Image width={100} height={100} alt={g3 as unknown as string} className="w-full h-full object-cover object-center block hover:scale-105 transition duration-300 " src={g3}/>
          </div>
        </div>
        <div className="flex flex-wrap w-1/2">
          <div className="md:p-2 p-1 w-full overflow-hidden">
            <Image width={100} height={100} alt={g2 as unknown as string} className="w-full h-full object-cover object-center block hover:scale-105 transition duration-300 " src={g2}/>
          </div>
          <div className="md:p-2 p-1 w-1/2 overflow-hidden">
            <Image width={100} height={100} alt={g4 as unknown as string} className="w-full object-cover h-full object-center block hover:scale-105 transition duration-300 " src={g4}/>
          </div>
          <div className="md:p-2 p-1 w-1/2 overflow-hidden">
            <Image width={100} height={100} alt={g5 as unknown as string} className="w-full object-cover h-full object-center block hover:scale-105 transition duration-300 " src={g5}/>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}
