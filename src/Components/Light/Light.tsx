import { useRef } from "react";
import ToogleSwitch from "../ToggleSwitch/ToggleSwitch";
import "./Light.scss"

const Light = () => {
    const pathRef = useRef<SVGPathElement | null>(null);

    const clickHandle: React.MouseEventHandler<HTMLInputElement> = (e) => {
        const path = pathRef.current;
        if (e.currentTarget.checked) {
            if (path) {
                path.setAttribute("fill", "#505050")
            }
        }
        else {
            if (path) {
                path.setAttribute("fill", "#FAC546")

            }
        }
    };
    return (
        <>
            <div className="light">
                <div className="switch-btn">
                    <p>ON</p>
                    <ToogleSwitch handleClick={clickHandle} />
                    <p> OFF</p>
                </div>

                <svg id="mySvg" width="800px" height="800px" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><path id="light" ref={pathRef} d="M835.84 387.84c0-156.16-125.44-281.6-281.6-281.6s-281.6 125.44-281.6 281.6c0 108.8 62.72 204.8 153.6 250.88v209.92c0 14.08 11.52 25.6 25.6 25.6h204.8c14.08 0 25.6-11.52 25.6-25.6V638.72c92.16-46.08 153.6-140.8 153.6-250.88z" fill="#FAC546" /><path d="M656.64 887.04h-204.8c-21.76 0-38.4-16.64-38.4-38.4V646.4c-94.72-51.2-153.6-149.76-153.6-258.56 0-162.56 131.84-294.4 294.4-294.4s294.4 131.84 294.4 294.4c0 108.8-58.88 207.36-153.6 258.56v202.24c0 21.76-16.64 38.4-38.4 38.4z m-102.4-768c-148.48 0-268.8 120.32-268.8 268.8 0 101.12 56.32 193.28 147.2 239.36 3.84 2.56 6.4 6.4 6.4 11.52v209.92c0 7.68 5.12 12.8 12.8 12.8h204.8c7.68 0 12.8-5.12 12.8-12.8V638.72c0-5.12 2.56-8.96 6.4-11.52 90.88-46.08 147.2-138.24 147.2-239.36 0-148.48-120.32-268.8-268.8-268.8z" fill="#231C1C" /><path d="M682.24 848.64c0 14.08-11.52 25.6-25.6 25.6h-204.8c-14.08 0-25.6-11.52-25.6-25.6v-102.4c0-14.08 11.52-25.6 25.6-25.6h204.8c14.08 0 25.6 11.52 25.6 25.6v102.4z" fill="#C89005" /><path d="M656.64 887.04h-204.8c-21.76 0-38.4-16.64-38.4-38.4v-102.4c0-21.76 16.64-38.4 38.4-38.4h204.8c21.76 0 38.4 16.64 38.4 38.4v102.4c0 21.76-16.64 38.4-38.4 38.4z m-204.8-153.6c-7.68 0-12.8 5.12-12.8 12.8v102.4c0 7.68 5.12 12.8 12.8 12.8h204.8c7.68 0 12.8-5.12 12.8-12.8v-102.4c0-7.68-5.12-12.8-12.8-12.8h-204.8z" fill="#231C1C" /><path d="M423.36 772.2752l205.2352-64.1664 7.6288 24.4352-205.2224 64.1664zM423.04 849.1264l256.256-76.8 7.3472 24.512-256.256 76.8z" fill="#231C1C" /><path d="M477.44 874.24h25.6v25.6h-25.6z" fill="#231C1C" /><path d="M592.64 874.24h25.6v25.6h-25.6z" fill="#231C1C" /><path d="M554.24 771.84c-35.84 0-64-28.16-64-64v-204.8c0-3.84 0-15.36 10.24-19.2 11.52-3.84 17.92 5.12 25.6 16.64 6.4 8.96 19.2 28.16 28.16 28.16s21.76-19.2 28.16-28.16c7.68-11.52 14.08-20.48 25.6-16.64 10.24 3.84 10.24 15.36 10.24 19.2v204.8c0 35.84-28.16 64-64 64z m-38.4-241.92v177.92c0 21.76 16.64 38.4 38.4 38.4s38.4-16.64 38.4-38.4V529.92c-10.24 12.8-23.04 24.32-38.4 24.32s-28.16-11.52-38.4-24.32z" fill="#231C1C" /></svg></div>

        </>
    )
}

export default Light;