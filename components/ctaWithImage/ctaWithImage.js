import Button from "../button/button"

export default function CtaWithImage({ title, description, cta1, cta2, background, inverted }) {

    const flexDirection = inverted === true ? "flex-col-reverse" : "flex-col";

    /* AGGIUNGERE RENDER IMAGE */
    function renderSecondBtn() {
        if (cta2) {
            return (
                <div className="mx-auto md:mx-0 md:block mt-5 md:mt-0 md:ml-5 flex">
                    <Button cta={cta2} redOutline outline />
                </div>
            )
        }
    }

    return (
        <div className={`bg-white w-full flex lg:flex-row h-[60rem] md:h-[45rem]  z-10 ${flexDirection}`} >
            {inverted === true ?
                <div style={{ backgroundImage: `url(${background}` }} className="flex flex-col 
                    items-center justify-center flex-1 bg-cover bg-center bg-no-repeat">
                </div>
                :
                null
            }
            <div className="flex flex-col items-center justify-center flex-1">
                <div className="md:p-10 lg:p-0 max-w-full p-5">
                    <h1 className="text-mediumPurple text-[2rem] md:text-[2.5rem] leading-extra-loose 
                        font-heading max-w-full md:max-w-[23rem]">
                        {title}
                    </h1>
                    <p className="text-gray-500 mt-5 mb-11 md:mb-0 w-96 max-w-full">{description} </p>
                    <div className="flex flex-col md:flex-row mt-10">
                        <div className="mx-auto md:mx-0 md:block flex">
                            <Button cta={cta1} />
                        </div>
                        {renderSecondBtn()}
                    </div>
                </div>
            </div>

            {inverted !== true ?
                <div style={{ backgroundImage: `url(${background}` }}
                    className="flex-1 bg-cover bg-center bg-no-repeat">
                </div>

                :
                null
            }
        </div>
    )
}
