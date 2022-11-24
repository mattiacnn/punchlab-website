export default function statCounter({counter, text}) {
  return (
    <div className="flex flex-col items-center justify-center basis-1/2 md:basis-1/4 mb-10 md:mb-0">
      <h1 className="text-white text-[2rem] md:text-[3.75rem] leading-extra-loose 
            font-heading">
        {counter}
      </h1>
      <p className="text-main">{text}</p>
    </div>
  )
}