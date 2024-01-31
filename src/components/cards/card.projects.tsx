import { url } from "inspector";
import Image from "next/image";
import Card from "./card.base";
import Link from "next/link";


export default function CardProjects({ children, config }: any) {
  return (
    
    <Link  href={config.href || ''} rel={config.rel || 'LineaD Group Projects'}>
      <Card config={{...config, type:'imageTop', align:'start', textAlign:'left', justify:'start'}} image="/images/main-development.jpg" type="imageBackground">
                      <h2 className={`text-black text-2xl h-18 overflow-hidden font-bold uppercase my-4 text-center w-full`}>{config.title}</h2>
                      <p className={`text-black text-justify text-md h-24 overflow-hidden mb-4`}>
                        {config.content}
                      </p>
                     <span className={`w-full bg-black text-white text-center p-2 uppercase justify-self-end`}>Ver mas</span>
                    </Card>
                    </Link>
  );
}