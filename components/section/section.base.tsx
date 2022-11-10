import { ReactNode } from "react";
import SectionConfig from "../../interfaces/section";

export default function Section({children, config}: {children?: ReactNode, config: SectionConfig}) {
  return (
    <div className={`${config.fullHeight && 'h-screen'} px-8 bg-cover bg-center relative mx-auto w-full ${config.maxWidth || ''} ${config.customClass || ''}`} style={{backgroundImage: config.backgroundImage && `url(${config.backgroundImage})`}}>
        <div className={`relative flex flex-col w-full h-full container mx-auto items-center flex-wrap z-10`}>
            {children}
        </div>
        {config.showBackdrop && <div className={`absolute bg-black/40 w-full h-full top-0 left-0 z-1`}></div>}
    </div>
  );
}