import type { NextPage } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import ClientsCarousel from '@/components/carousel/clients'
import Hero from '@/components/hero/hero.base'
import Section from '@/components/section/section.base'

const Home: NextPage = ({params}: any) => {
  return (
    <>
    <div>
            <Hero fullHeight={true} backgroundImage="/images/main.jpg" >
            <div className={`flex basis-full md:basis-1/2 flex-col justify-center items-center md:items-end px-4 md:px-8`}>
                <p className={`text-base md:text-3xl text-center md:text-right`}>¿Buscas</p>
                <h1 className={`text-3xl lg:text-5xl xl:text-7xl  uppercase font-bold md:leading-tight text-center md:text-right`}>Tecnologia</h1>
                <h1 className={`text-3xl lg:text-5xl xl:text-7xl uppercase font-bold md:leading-tight text-secondary text-center md:text-right`}>_Desarrollo?</h1>
                <Link className={`mt-8`} href={`${params.lang}/development`}><div className={`w-12 md:w-16 mx-auto md:mx-0 self-end w-16 h-16`}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 69.21 69.21"><g id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1"><circle fill="none" strokeWidth="2" stroke="#fff" strokeMiterlimit="10" cx="34.6" cy="34.6" r="33.6"/><path fill="none" strokeWidth="2" stroke="#fff" strokeMiterlimit="10" d="M38.08 46.67 26.16 34.76l11.92-11.91"/></g></g></svg></div></Link>
            </div>
            <div className={`flex basis-full md:basis-1/2 flex-col justify-center items-center md:items-start px-4 md:px-8`}>
                <p className={`text-base md:text-3xl text-center md:text-left`}>¿Buscas</p>
                <h1 className={`text-3xl lg:text-5xl xl:text-7xl uppercase font-bold md:leading-tight text-center md:text-left`}>Streaming</h1>
                <h1 className={`text-3xl lg:text-5xl xl:text-7xl uppercase font-bold md:leading-tight text-primary text-center md:text-left`}>_Media?</h1>
                <Link className={`mt-8`} href={`${params.lang}/streaming`}><div className={`w-12 md:w-16 mx-auto md:mx-0 self-start w-16 h-16`}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 69.21 69.21"><g id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1"><circle fill="none" strokeWidth="2" stroke="#fff" strokeMiterlimit="10" cx="34.6" cy="34.6" r="33.6"/><path fill="none" strokeWidth="2" stroke="#fff" strokeMiterlimit="10" d="m31.13 46.67 11.92-11.91-11.92-11.91"/></g></g></svg></div></Link>
            </div>
              </Hero>
            <div className='flex justify-center bg-white'>
              <div className='w-full max-w-screen-2xl mx-auto'>
                <ClientsCarousel inverted={true}/>
              </div>
            </div>
            <Section config={{maxWidth:'max-w-screen-lg', customClass:'py-12'}}>
              <h2 className={`text-3xl md:text-5xl text-center font-bold`}><span className={`text-4xl md:text-6xl`}>SOMOS TECNOLOGÍA<br/></span> <span className={`text-teal-300`}>DESARROLLO </span> <span className={`text-primary`}>STREAMING/MEDIA_</span></h2>
              <p className={`text-xl py-4 text-center`}>LineaD comienza como una compañía de producción de contenido en 2006.</p>
              <p className={`text-xl py-4 text-center`}>Creamos contenido e implementamos una solución tecnológica para distribución y reproducción de video en plataformas OTT a nivel mundial. Trabajamos en la producción y postproducción de contenido. En 2008 creamos nuestro propio equipo de TI para formar LineaD Group , una compañía dedicada a proporcionar soluciones tecnológicas a sus clientes, tanto servicios de medios como desarrollo de software para soluciones móviles y web. Comenzamos proveyendo soluciones tecnológicas en el ámbito del contenido multimedia por internet y rápidamente ampliamos nuestros servicios para proveer desarrollos a medida, desde plataformas OTT hasta desarrollos para la industria médica, tanto para entornos cerrados como para consumo masivo.</p>
            </Section>
            <Section wrapperClassName="bg-[#251354]" config={{maxWidth:'max-w-screen-2xl', customClass:'py-24'}}>
              {/*This should become a columns component*/}
              <div className={`flex flex-wrap-reverse md:flex-row`}>
                {/*This should become a column component*/}
                <div className={`flex flex-col basis-full md:basis-2/3 px-0 md:px-8`}>
                  <h2 className={`text-4xl font-bold uppercase my-8 text-teal-300`}>Tecnología y Desarrollo</h2>
                  <p className={`text-xl`}>En 2008 LineaD Group crea su propio equipo IT para proveer servicios de tecnología a sus clientes, que demandaban aplicaciones robustas y reproductores de video para sus necesidades digitales. A lo largo de los últimos 15 años evolucionamos en nuestras soluciones tecnológicas, desarrollando aplicaciones de alto rendimiento para diferentes necesidades e industrias. Asesoramos y desarrollamos aplicaciones móviles, ERPs y software a medida con despliegue en la nube para soportar altas demandas.</p>
                  <Link href={`/${params.lang}/development`} className={`mt-8 w-fit bg-black text-white text-center p-4 justify-self-end`}>Conozca nuestros casos de éxito</Link>
                </div>
                <div className={`flex flex-col basis-full md:basis-1/3 px-0 md:px-8`}>
                  <Image alt="LineaD Group" src={`/images/it-software-development-coding-2.png`} width="940" height="882" />
                </div>
              </div>
            </Section>
            <Section wrapperClassName="bg-[#452286]" config={{maxWidth:'max-w-screen-2xl', customClass:'py-24'}}>
              {/*This should become a columns component*/}
              <div className={`flex flex-wrap-reverse flex-row-reverse`}>
                {/*This should become a column component*/}
                <div className={`flex flex-col basis-full md:basis-2/3 px-0 md:px-8`}>
                  <h2 className={`text-4xl font-bold uppercase my-8 text-primary`}>Streaming y Media</h2>
                  <p className={`text-xl`}>LineaD Group comienza a trabajar en streaming en el año 2006 ofreciendo soluciones a plataformas de contenidos, proveyendo servicios de streaming a demanda y en vivo en eventos de miles de usuarios concurrentes. Pioneros en transmisiones en vivo a través de internet, hemos realizado más de 10.000 horas de transmisión en vivo, donde solucionamos desde la producción y generación de contenido hasta la distribución y reproducción para miles de usuarios concurrentes.</p>
                  <Link href={`/${params.lang}/streaming`} className={`mt-8 w-fit bg-black text-white text-center p-4 justify-self-end`}>Conozca nuestros trabajos</Link>

                </div>
                <div className={`flex flex-col basis-full md:basis-1/3 px-0 md:px-8`}>
                  <Image alt="LineaD Group" src={`/images/streaming-media-content-1.png`} width="940" height="882" />
                </div>
              </div>
            </Section>
    </div>
    </>
  )
}

export default Home
