import Image from "next/image"
import stars from "../../public/images/home/stars-review.png"

export default function reviewCard({ description, author }) {

  return (
    <div className='w-[17rem] md:w-[20rem]'>
      <div className={`bg-white h-auto w-11/12 md:w-full rounded-xl p-8 md:p-10 flex flex-col 
        items-center justify-center`}>
        <p className='text-center text-md'>
          {description}
        </p>
        <div className='mt-5'>
          <Image className='' src={stars} />
        </div>
        <p className='text-mediumPurple font-bold mt-5'>{author}</p>
      </div>
    </div>
  )
}