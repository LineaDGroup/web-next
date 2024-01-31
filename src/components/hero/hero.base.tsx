import { url } from "inspector";


export default function Hero({children, fullHeight, backgroundImage, className}: any) {
  return (
    <div className={`${className || ''} ${fullHeight && 'h-screen'} bg-cover bg-center relative`} style={{backgroundImage: `url(${backgroundImage})`}}>
        <div className={`relative flex w-full h-full container mx-auto items-center flex-wrap z-10`}>
            {children}
        </div>
        <div className={`absolute bg-black/40 w-full h-full top-0 left-0 z-1`}></div>
    </div>
  );
}