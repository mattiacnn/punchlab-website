export default function button({ outline, cta, redOutline, bgWhite }) {
    if (outline === true && redOutline === true) {
        return (
            <a
                href="#"
                className="w-[12rem] rounded-md py-3 px-5
                border border-main text-main hover:text-opacity-80
              bg-transparen text-center z-30"
            >
                {cta}
            </a>
        )
    }
    else if (outline === true) {
        return (
            <a
                href="#"
                className="w-[12rem] rounded-md py-3 px-5
                border border-white text-white 
              bg-transparent text-center z-30"
            >
                {cta}
            </a>
        )
    }
    else if (bgWhite === true){
        return (
            <a
                href="#"
                className="w-[12rem] rounded-md py-3 px-5
                    border border-main text-main 
                    bg-white hover:opacity-90 text-center z-30"
            >
                {cta}
            </a>
        )
    }
    else {
        return (
            <a
                href="#"
                className="w-[12rem] rounded-md py-3 px-5
                    border border-transparent text-white 
                    bg-main hover:opacity-90 text-center z-30"
            >
                {cta}
            </a>
        )
    }
}