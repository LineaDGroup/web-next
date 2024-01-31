import { url } from "inspector";
import Image from "next/image";
import Card from "./card.base";


export default function CardServices({ children, config }: any) {
  return (
    <Card config={{...config, type: 'imageBackground', align: 'left', textAlign: 'left', justify: 'end' }}>
      <div className={`max-w-[90%] md:max-w-[70%] leading-tight`}>
        <h2 className={`text-3xl font-bold uppercase mb-4`} style={{color: config.color}}>{config.title}</h2>{config.content}
      </div>
    </Card>
  );
}