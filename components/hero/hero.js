import Button from '../button/button'
import Menu from '../menu/menu'

export default function Hero({ background, title, description }) {
  return (
    <div style={{ backgroundImage: `url(${background})` }} className="relative bg-white 
        overflow-hidden bg-cover h-screen bg-[center_left_-49rem] md:bg-center bg-no-repeat">
      <Menu />
      <div className="max-w-7xl mx-auto h-full flex justify-center flex-col">
        <div className="relative z-10 pb-8 sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
          <div className="mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <div className="sm:text-center lg:text-left md:text-left text-center">
              <h1 className="text-white text-[3rem] md:text-[3.5rem] leading-extra-loose">
                <span className="block font-heading max-w-[30rem] mx-auto md:mx-0">{title}</span>
              </h1>
              <p className="text-white  
                             lg:mx-0 max-w-[25rem] text-md mx-auto md:mx-0">
                {description}
              </p>
              <div className="mt-9  sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                <Button cta="Start 7-day free trial" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
