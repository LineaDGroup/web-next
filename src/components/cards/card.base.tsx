import { url } from "inspector";
import Image from "next/image";


export default function Card({children, config}: any) {
  return (
    // Main container
    <div className={`relative p-4 ${config.type === 'imageBackground' && 'pt-20 md:pt-40 pl-8'} bg-white w-full`}>
        {/* Image as background */}
        {
            config.type === 'imageBackground' &&
            <div className={`bg-cover bg-center absolute w-full h-full top-0 left-0 ${config.border && 'border-l-8'}`} style={{backgroundImage: `url(${config.image})`, borderColor: config.color}}></div>
        }
        {/* Image in card */}
        {
            config.type !== 'imageBackground' &&
            <Image alt="LineaD Group" className={`aspect-video`} src={config.image} width={500} height={500}></Image>
        }
        {/* Card content */}
        <div className={`flex-col flex ${config.type === 'imageBackground' && 'h-full'} relative w-full`} style={{justifyContent: config.justify, alignItems: config.align, textAlign: config.textAlign}}>
            {children}
        </div>
    </div>
  );
}