import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import Card from '../../components/cards/card.base'
import ClientsCarousel from '../../components/carousel/clients'
import Footer from '../../components/footer/footer.base'
import Hero from '../../components/hero/hero.base'
import Layout from '../../components/layout'
import Section from '../../components/section/section.base'

const StreamingPage: NextPage = () => {
  const router = useRouter();

  return (
    <>
    <Head>

    </Head>
    <div>
        <Layout>
            <Hero fullHeight={true} backgroundImage="/images/main-streaming.jpg">
            <div className={`flex basis-full md:basis-1/2 flex-col justify-center items-start px-4 md:px-8`}>
                <h1 className={`text-4xl lg:text-6xl xl:text-8xl  uppercase font-bold md:leading-tight`}>Streaming</h1>
                <h1 className={`text-4xl lg:text-6xl xl:text-8xl uppercase font-bold md:leading-tight text-primary`}>_Media</h1>
                <p className={`text-2xl`}>LineaD comienza como una compañía de producción de contenido en 2006 y en 2008 crea su propio equipo de TI para formar LineaD Group.</p>
            </div>
            </Hero>
              
              <Section config={{maxWidth:'max-w-screen-lg', customClass:'py-48'}}>
                <div className={`flex w-full gap-[var(--gap)] flex-wrap`}>
                <div className={`basis-full max-w-full md:basis-1/2 md:max-w-[calc(50%-var(--gap)/2)]`}>
                    <Card config={{border: '#FF002F',type:'imageBackground', image:'/images/streaming/live-streaming.jpg', align:'left', textAlign:'left', justify:'end'}}>
                      <div className={`max-w-[70%]`}>
                        <h2 className={`text-primary text-3xl font-bold uppercase mb-4`}>Streaming</h2>
                        Realizamos la gestión integral del servicio de transmisión vía streaming con un amplio conocimiento para proveer una solución a medida del cliente. Hacemos transmisiones de de todo tipo de eventos en modalidad 100% online, mixtos o presenciales con equipos de última tecnología y servicio de operación completo que incluye diseño y operación de gráfica y todos los elementos para una transmisión de calidad broadcasting.
                      </div>
                    </Card>
                  </div>
                  <div className={`basis-full max-w-full md:basis-1/2 md:max-w-[calc(50%-var(--gap)/2)]`}>
                    <Card config={{border: '#FF002F',type:'imageBackground', image:'/images/streaming/camera-events.jpg', align:'left', textAlign:'left', justify:'end'}}>
                      <div className={`max-w-[70%]`}>
                        <h2 className={`text-primary text-3xl font-bold uppercase mb-4`}>Producción</h2>
                        Tenemos una vasta experiencia en producción audiovisual, realizamos piezas en todo tipo de formatos y para las diferentes necesidades, sean institucionales, publicitarias, documentales, de entretenimiento o divulgación científica incluyendo creatividad, guión, filmación y postproducción.
                      </div>
                    </Card>
                  </div>
                  <div className={`basis-full max-w-full md:basis-1/2 md:max-w-[calc(50%-var(--gap)/2)]`}>
                    <Card config={{border: '#FF002F',type:'imageBackground', image:'/images/streaming/animacion-edicion.jpg', align:'left', textAlign:'left', justify:'end'}}>
                      <div className={`max-w-[70%]`}>
                        <h2 className={`text-primary text-3xl font-bold uppercase mb-4`}>Animación 2D y 3D</h2>
                        Producimos piezas de animación 2d y 3d de manera integral - guión, gráfica y edición - adaptándonos a todo tipo de requerimientos.
                      </div>
                    </Card>
                  </div>
                  <div className={`basis-full max-w-full md:basis-1/2 md:max-w-[calc(50%-var(--gap)/2)]`}>
                    <Card config={{border: '#FF002F',type:'imageBackground', image:'/images/streaming/redes-sociales.jpg', align:'left', textAlign:'left', justify:'end'}}>
                      <div className={`max-w-[70%]`}>
                        <h2 className={`text-primary text-3xl font-bold uppercase mb-4`}>Contenidos para RRSS</h2>
                        Realizamos creatividad y contenidos para campañas de marketing digital.
                        También diseñamos y pautamos las campañas para el mejor resultado en las diferentes redes sociales.
                      </div>
                    </Card>
                  </div>
                </div>
              </Section>

            <div className='flex justify-center bg-zinc-100'>
              
              <Section config={{maxWidth:'max-w-screen-lg', customClass:'py-48'}}>
                <h2 className={`align-self-start text-black uppercase text-2xl font-bold mb-8`}>Proyectos Recientes</h2>
                <div className={`flex w-full gap-[var(--gap)] flex-wrap`}>
                  <div className={`basis-full max-w-full md:basis-1/2 md:max-w-[calc(50%-var(--gap)/2)]`}>
                    <Card config={{type:'imageTop', image:'/images/streaming/history-channel-desafio-sobre-fuego.jpg', align:'center', textAlign:'center', justify:'start'}} image="/images/main-development.jpg" type="imageBackground">
                      <h2 className={`text-black text-3xl h-18 overflow-hidden font-bold uppercase mb-4`}>History channel</h2>
                      <p className={`text-black text-sm h-20 overflow-hidden mb-4 max-w-[80%]`}>
                        Realizamos más de 50 eventos de prensa virtuales para esta señal líder en Latinoamérica y EEUU, aportando desde el soporte tecnológico hasta la producción y postproduccón.
                      </p>
                      {/* <a className={`w-full bg-black text-white text-center p-2 uppercase justify-self-end`}>Ver mas</a> */}
                    </Card>
                  </div>
                  <div className={`basis-full max-w-full md:basis-1/2 md:max-w-[calc(50%-var(--gap)/2)]`}>
                    <Card config={{type:'imageTop', image:'/images/streaming/teatrix-teatro-online.jpg', align:'center', textAlign:'center', justify:'start'}} image="/images/main-development.jpg" type="imageBackground">
                      <h2 className={`text-black text-3xl h-18 overflow-hidden font-bold uppercase mb-4`}>Teatrix</h2>
                      <p className={`text-black text-sm h-20 overflow-hidden mb-4`}>Creación de contenido, creatividad e ideas para las redes sociales de TEATRIX. Producción de video y efectos visuales para esta plataforma de teatro OTT (Over The Top). También desarrollamos la primera versión de la plataforma TEATRIX en 2015
                      </p>
                      {/* <a className={`w-full bg-black text-white text-center p-2 uppercase justify-self-end`}>Ver mas</a> */}
                    </Card>
                  </div>
                  <div className={`basis-full max-w-full md:basis-1/2 md:max-w-[calc(50%-var(--gap)/2)]`}>
                    <Card config={{type:'imageTop', image:'/images/streaming/a-and-e.jpg', align:'center', textAlign:'center', justify:'start'}} image="/images/main-development.jpg" type="imageBackground">
                      <h2 className={`text-black text-3xl h-18 overflow-hidden font-bold uppercase mb-4`}>A&E</h2>
                      <p className={`text-black text-sm h-20 overflow-hidden mb-4`}>
                        Reencuentro virtual con los protagonistas de las series más destacadas para la prensa de Latinoamérica
                      </p>
                      {/* <a className={`w-full bg-black text-white text-center p-2 uppercase justify-self-end`}>Ver mas</a> */}
                    </Card>
                  </div>
                  <div className={`basis-full max-w-full md:basis-1/2 md:max-w-[calc(50%-var(--gap)/2)]`}>
                    <Card config={{type:'imageTop', image:'/images/streaming/lifetime.jpg', align:'center', textAlign:'center', justify:'start'}} image="/images/main-development.jpg" type="imageBackground">
                      <h2 className={`text-black text-3xl h-18 overflow-hidden font-bold uppercase mb-4`}>Lifetime</h2>
                      <p className={`text-black text-sm h-20 overflow-hidden mb-4 max-w-[80%]`}>
                        #resístetesipuedes es una campaña multimedia protagonizada por talentosas mujeres para impulsar en América Latina a la franquicia líder e irresistible de LIFETIME MOVIES integrada por películas que contienen romance, drama, comedia, intriga y acción.

                      </p>
                      {/* <a className={`w-full bg-black text-white text-center p-2 uppercase justify-self-end`}>Ver mas</a> */}
                    </Card>
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
                <Link href={`/${router.locale}/development`} className={`w-full bg-black text-white text-center p-2 uppercase justify-self-end mt-16  `}>
                      Ver mas
                </Link>
                </div>
              </div>
            </Hero>

            <Section config={{fullWidth:true, customClass:'py-12'}}>
              <Footer config={{maxWidth:'max-w-screen-2xl', fullWidth: true}} />
            </Section>
        </Layout>
    </div>
    </>
  )
}

export default StreamingPage
