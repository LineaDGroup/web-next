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
import CardServices from "../../components/cards/card.services"
import CardProjects from "../../components/cards/card.projects"

const DevelopmentPage: NextPage = () => {
  const router = useRouter();
  return (
    <>
    <Head>

    </Head>
    <div>
        <Layout>
            <Hero fullHeight={true} backgroundImage="/images/main-development.jpg">
            <div className={`flex basis-full md:basis-1/2 flex-col justify-center items-start px-4 md:px-8`}>
                <h1 className={`text-4xl lg:text-6xl xl:text-8xl  uppercase font-bold md:leading-tight`}>Tecnologia</h1>
                <h1 className={`text-4xl lg:text-6xl xl:text-8xl uppercase font-bold md:leading-tight text-teal-300`}>_Desarrollo</h1>
                <p className={`text-2xl`}>LineaD es una compañía dedicada a proporcionar soluciones tecnológicas a sus clientes, tanto servicios de medios como desarrollo de software para soluciones móviles y web.</p>
            </div>
            </Hero>
              
              <Section config={{maxWidth:'max-w-screen-lg', customClass:'py-48'}}>
                <div className={`flex w-full gap-[var(--gap)] flex-wrap`}>
                <div className={`basis-full max-w-full md:basis-1/2 md:max-w-[calc(50%-var(--gap)/2)]`}>
                    <CardServices config={{title:`(Web, Mobile, Software)`,content:`Trabajamos con las tecnologías más modernas en desarrollo de software para productos digitales de la más alta calidad y performance. Desarrollamos productos como: E-commerce
                         - Apps
                         - Web
                         - Software
                      `,border: true, color: '#77ffff',type:'imageBackground', image:'/images/bg-dev.jpg', align:'left', textAlign:'left', justify:'end'}}></CardServices>
                  </div>
                  <div className={`basis-full max-w-full md:basis-1/2 md:max-w-[calc(50%-var(--gap)/2)]`}>
                    <CardServices config={{title:`(Web y Mobile)`,content:`Diseño de interfáz y experiencia de usuario adaptable a todas las pantallas.
Diseñamos productos basados en la premisa “Mobile First” para lograr un diseño atractivo y moderno con una experiencia de usuario óptima en cualquier dispositivo.
                      `,border: true, color: '#77ffff',type:'imageBackground', image:'/images/bg-dev-2.jpg', align:'left', textAlign:'left', justify:'end'}}></CardServices>
                  </div>
                  <div className={`basis-full max-w-full md:basis-1/2 md:max-w-[calc(50%-var(--gap)/2)]`}>
                    <CardServices config={{title:`DevOps / IT`,content:`Proveemos consultoría y soporte en el desarrollo y mantenimiento de la infraestructura para que su producto cuente con un entorno de producción confiable, escalable y resiliente.
                      `,border: true, color: '#77ffff',type:'imageBackground', image:'/images/bg-dev-3.jpg', align:'left', textAlign:'left', justify:'end'}}></CardServices>
                  </div>
                  <div className={`basis-full max-w-full md:basis-1/2 md:max-w-[calc(50%-var(--gap)/2)]`}>
                    <CardServices config={{title:`Estrategia Digital`,content:`Lo apoyamos y acompañamos para llevar su proyecto a la realidad abarcando todas las áreas requeridas para una presencia digital de la más alta calidad.
                      `,border: true, color: '#77ffff',type:'imageBackground', image:'/images/bg-dev-4.jpg', align:'left', textAlign:'left', justify:'end'}}></CardServices>
                  </div>
                </div>
              </Section>

            <div className='flex justify-center bg-zinc-100'>
              
              <Section config={{maxWidth:'max-w-screen-lg', customClass:'py-48'}}>
                <h2 className={`self-center text-black uppercase text-4xl font-bold mb-8`}>Proyectos Recientes</h2>
                <div className={`flex w-full gap-[var(--gap)] flex-wrap`}>
                  <div className={`basis-full max-w-full md:basis-1/2 md:max-w-[calc(50%-var(--gap)/2)]`}>
                    <CardProjects config={{title:`Paramount Live Events`,content:<span>Desarrollamos un portal de eventos en vivo para un micrositio especial de Paramount.
                      <br></br>
                      <b>Tecnologías:</b> React, Node, Firebase<br></br>
                      <b>Servicios:</b> Desarollo Front, Desarrollo Back y DevOps
                      </span>,type:'imageTop', image:'/images/development/paramount-live-events.jpg', align:'start', textAlign:'left', justify:'start'}} image="/images/main-development.jpg" type="imageBackground"></CardProjects>
                  </div>
                  <div className={`basis-full max-w-full md:basis-1/2 md:max-w-[calc(50%-var(--gap)/2)]`}>
                    <CardProjects config={{title:`Famihood`,content:<span>Desarrollamos una plataforma OTT específicamente pensada para padres con niños pequeños o nuevos integrantes de la familia.
                      <br></br>
                      <b>Tecnologías:</b> Ionic + Angular, Node, Firebase<br></br>
                      <b>Servicios:</b> Aplicaciones Nativas, Desarollo Front, Desarrollo Back y DevOps
                      </span>,type:'imageTop', image:'/images/development/famihood.jpg', align:'start', textAlign:'left', justify:'start'}} image="/images/main-development.jpg" type="imageBackground"></CardProjects>
                  </div>
                </div>
              </Section>
            </div>

            <div className='flex justify-center bg-white'>
              <div className='w-full max-w-screen-2xl mx-auto'>
                <ClientsCarousel inverted={true}/>
              </div>
            </div>

            <Hero backgroundImage="/images/somos-streaming.jpg">
              <div className={`py-48 2xl:py-96`}>

            <div className={`flex basis-full md:basis-1/2 flex-col justify-center items-start px-4 md:px-8`}>
                <h1 className={`text-3xl lg:text-4xl xl:text-6xl  uppercase font-bold md:leading-tight`}>También Somos</h1>
                <h1 className={`text-3xl lg:text-4xl xl:text-6xl uppercase font-bold md:leading-tight`}>Streaming<span className={`text-primary`}>_Media</span></h1>
                <Link href={`/${router.locale}/streaming`} className={`w-full bg-black text-white text-center p-2 uppercase justify-self-end mt-16  `}>
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

export default DevelopmentPage
