import type { NextPage } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import Card from '@/components/cards/card.base'
import ClientsCarousel from '@/components/carousel/clients'
import Footer from '@/components/footer/footer.base'
import Hero from '@/components/hero/hero.base'
import Section from '@/components/section/section.base'
import CardServices from "@/components/cards/card.services"
import CardProjects from "@/components/cards/card.projects"

const StreamingPage: NextPage = ({params}: any) => {

  return (
    <>
    <div>
            <Hero fullHeight={true} backgroundImage="/images/main-streaming.jpg">
            <div className={`flex basis-full md:basis-1/2 flex-col justify-center items-start px-4 md:px-8`}>
                <h1 className={`text-4xl lg:text-6xl xl:text-8xl  uppercase font-bold md:leading-tight`}>Streaming</h1>
                <h1 className={`text-4xl lg:text-6xl xl:text-8xl uppercase font-bold md:leading-tight text-primary`}>_Media</h1>
                <p className={`text-2xl`}>LineaD comienza como una compañía de producción de contenido en 2006 y en 2008 crea su propio equipo de TI para formar LineaD Group.</p>
            </div>
            </Hero>
              <div className={`relative`}>
                <div className={`absolute bg-black opacity-30	w-full h-full top-0 left-0`}></div>
                <video width="100%" height="100%" className={`aspect-[2/1] object-cover`} autoPlay muted loop>
                  <source src="/videos/reel/hls/manifest.m3u8" type="application/x-mpegURL"></source>
                  <source src="/videos/reel/reel.hevc.mp4" type="video/mp4; codecs=hvc1"></source>
                  <source src="/videos/reel/reel.av1.mp4" type="video/webm; codecs=av01.0.05M.08"></source>
                  <source src="/videos/reel/reel.mp4" type="video/mp4; codecs=avc1"></source>
                </video>
              </div>
              <Section config={{maxWidth:'max-w-screen-lg', customClass:'py-48'}}>
                <div className={`grid grid-cols-12 gap-4`}>
                <div className={`col-span-12 md:col-span-6`}>
                    <CardServices config={{title:`Streaming`,content:`Hacemos transmisiones de todo tipo de eventos en modalidad 100% online, mixtos o presenciales con equipos de última tecnología. Brindamos servicio para todas las etapas de una transmisión de calidad broadcasting: Producción, dirección y operación técnica.`,border: true, color: '#FF002F',type:'imageBackground', image:'/images/streaming/live-streaming.jpg', align:'left', textAlign:'left', justify:'end'}}></CardServices>
                  </div>
                  <div className={`col-span-12 md:col-span-6`}>
                    <CardServices config={{title:`Producción`,content:`Tenemos una vasta experiencia en producción audiovisual, realizamos piezas en diversos formatos y para las diferentes necesidades, institucionales, publicitarias, documentales, de entretenimiento o divulgación científica incluyendo creatividad, guión, filmación y postproducción.
                      `,border: true, color: '#FF002F',type:'imageBackground', image:'/images/streaming/camera-events.jpg', align:'left', textAlign:'left', justify:'end'}}></CardServices>
                  </div>
                  <div className={`col-span-12 md:col-span-6`}>
                    <CardServices config={{title:<span>Animación<br></br>2D y 3D</span>,content:`Producimos piezas de animación 2d y 3d de manera integral - guión, gráfica y edición - adaptándonos a cada requerimiento.
                      `,border: true, color: '#FF002F',type:'imageBackground', image:'/images/streaming/animacion-edicion.jpg', align:'left', textAlign:'left', justify:'end'}}></CardServices>
                  </div>
                  <div className={`col-span-12 md:col-span-6`}>
                    <CardServices config={{title:`Contenidos para RRSS`,content:`Realizamos creatividad y contenidos para campañas de marketing digital.
                        También diseñamos y pautamos las campañas para el mejor resultado en las diferentes redes sociales.
                      `,border: true, color: '#FF002F',type:'imageBackground', image:'/images/streaming/redes-sociales.jpg', align:'left', textAlign:'left', justify:'end'}}></CardServices>
                  </div>
                </div>
              </Section>

            <div className='flex justify-center bg-zinc-100'>
              
              <Section config={{maxWidth:'max-w-screen-lg', customClass:'py-48'}}>
              <h2 className={`self-center text-black uppercase text-4xl font-bold mb-8`}>Proyectos Recientes</h2>
                <div className={`grid grid-cols-12 gap-4`}>
                  <div className={`col-span-12 md:col-span-6`}>
                    <CardProjects config={{title:`History channel`,content:<span>
                        Realizamos más de 50 eventos de prensa virtuales para esta señal líder en Latinoamérica y EEUU, aportando desde el soporte tecnológico hasta la producción y postproduccón.
                      </span>,type:'imageTop', image:'/images/streaming/history-channel-desafio-sobre-fuego.jpg', align:'center', textAlign:'center', justify:'start'}} image="/images/main-development.jpg" type="imageBackground"></CardProjects>
                  </div>
                  <div className={`col-span-12 md:col-span-6`}>
                    <CardProjects config={{href: `/${params.lang}/projects/streaming/teatrix`,title:`Teatrix`,content:<span>Creamos contenido e ideas para las redes sociales de TEATRIX. Realizamos la producción de video y efectos visuales para la plataforma de teatro OTT (Over The Top) más importante de Lationamérica.
                      </span>,type:'imageTop', image:'/images/streaming/teatrix-teatro-online.jpg', align:'center', textAlign:'center', justify:'start'}} image="/images/main-development.jpg" type="imageBackground"></CardProjects>
                  </div>
                  <div className={`col-span-12 md:col-span-6`}>
                    <CardProjects config={{title:`A&E`,content:<span>
                        Reencuentro virtual con los protagonistas de las series más destacadas para la prensa de Latinoamérica
                      </span>,type:'imageTop', image:'/images/streaming/a-and-e.jpg', align:'center', textAlign:'center', justify:'start'}} image="/images/main-development.jpg" type="imageBackground"></CardProjects>
                  </div>
                  <div className={`col-span-12 md:col-span-6`}>
                    <CardProjects config={{title:`Lifetime`,content:<span>
                        #resístetesipuedes es una campaña multimedia protagonizada por talentosas mujeres para impulsar en América Latina a la franquicia líder e irresistible de LIFETIME MOVIES integrada por películas que contienen romance, drama, comedia, intriga y acción.

                      </span>,type:'imageTop', image:'/images/streaming/lifetime.jpg', align:'center', textAlign:'center', justify:'start'}} image="/images/main-development.jpg" type="imageBackground"></CardProjects>
                  </div>
                </div>
              </Section>
            </div>

            <div className='flex justify-center bg-white'>
              <div className='w-full max-w-screen-2xl mx-auto'>
                <ClientsCarousel inverted={true}/>
              </div>
            </div>

            <Hero backgroundImage="/images/main-development.jpg">
              <div className={`py-48 2xl:py-96`}>

            <div className={`flex basis-full md:basis-1/2 flex-col justify-center items-start px-4 md:px-8`}>
                <h1 className={`text-3xl lg:text-4xl xl:text-6xl  uppercase font-bold md:leading-tight`}>También Somos</h1>
                <h1 className={`text-3xl lg:text-4xl xl:text-6xl uppercase font-bold md:leading-tight`}>Tecnología<span className={`text-[#7ff]`}><br></br>_Desarrollo</span></h1>
                <Link href={`/${params.lang}/development`} className={`w-full bg-black text-white text-center p-2 uppercase justify-self-end mt-16  `}>
                      Ver mas
                </Link>
                </div>
              </div>
            </Hero>
    </div>
    </>
  )
}

export default StreamingPage
