import Section from "@/components/section/section.base"
import { getProject } from "@/services/projects"
import Image from "next/image";

export default async function ProjectPage({params: {lang, section, slug}}: any) {
  const project = getProject(slug, section);
  return (
  <>
  <div className={`${section === 'development'?'bg-[#251354]':'bg-[#452286]'}`}>

    <Section config={{maxWidth:'max-w-screen-lg', customClass:'pt-40 pb-20'}}>
      {project.title && <h1 className={`${section === 'development'?'text-teal-300':'text-primary'} self-center title primary`}>{project.title}</h1>}
      <div className="grid grid-cols-12 gap-8 w-full items-center">
        {/* <div className="col-span-12 md:col-span-6">
          <div className="aspect-video w-full relative rounded-lg overflow-hidden">

          <Image fill alt="LineaD Project" src={`/images/projects/${project.topImage}`} objectFit="cover" objectPosition="center"></Image>
          </div>
        </div> */}
        <div className="col-span-12 md:col-span-12 flex flex-col items-center">
          {/* <Image className={`mb-8`} alt="Projects LineaD Group" width={350} height={80} src={`/images/projects/${project.logo}`}></Image> */}
          <span className="text-3xl text-center">{project.description}</span>
        </div>
      </div>
    </Section>
  </div>
  <div className={`aspect-[2/1] relative`}>
    <div className={`opacity-30 absolute top-0 left-0 w-full h-full bg-black z-10`}></div>
    {project.featuredImage && <Image src={`/images/projects/${project.featuredImage}`} alt="LineaD Project" fill objectFit="cover"></Image>}
    {project.featuredVideo && 
      <video width="100%" height="100%" className={`aspect-[2/1] object-cover`} autoPlay muted loop>
        {project.featuredVideo.m3u8 && <source src={`/videos/projects/${project.featuredVideo.m3u8}`} type="application/x-mpegURL"></source>}
        {project.featuredVideo.hevc && <source src={`/videos/projects/${project.featuredVideo.hevc}`} type="video/mp4; codecs=hvc1"></source>}
        {project.featuredVideo.av1 && <source src={`/videos/projects/${project.featuredVideo.av1}`} type="video/webm; codecs=av01.0.05M.08"></source>}
        <source src={`/videos/projects/${project.featuredVideo.mp4}`} type="video/mp4; codecs=avc1"></source>
      </video>
    }
  </div>
  <div className="bg-white py-8">
  <Section config={{maxWidth:'max-w-screen-lg', customClass:''}}>
    <h3 className={`title text-black tertiary`}>{project.about.title}</h3>
    <span className="text-black" dangerouslySetInnerHTML={{__html: project.about.content}}></span>
    <Image className={`my-6 rounded-lg`} src={`/images/projects/${project.about.image}`} width={2876} height={1338} alt="LineaD Project"></Image>
    </Section>
    </div>
  {project.challenges && <div className="bg-white pb-8">
    <Section config={{maxWidth:'max-w-screen-lg', customClass:''}}>
        <h3 className={`title text-black tertiary self-start`}>{project.challenges.title}</h3>
      <div className="grid grid-cols-12 gap-8 w-full items-start">
        <div className="col-span-12 md:col-span-8 flex flex-col items-center">
          <span className="text-black" dangerouslySetInnerHTML={{__html: project.challenges.content}}></span>
        </div>
        <div className="col-span-12 md:col-span-4 flex flex-col items-center">
          {typeof project.challenges.image === 'string' && 
            <Image alt="LineaD Project" src={`/images/projects/${project.challenges.image}`} width={230} height={50}></Image>
          }
          {typeof project.challenges.image !== 'string' && 
            <Image alt="LineaD Project" src={`/images/projects/${project.challenges.image.src}`} width={project.challenges.image.width} height={project.challenges.image.height}></Image>
          }
        </div>
      </div>
    </Section>
  </div>}
  {project.result &&
    <div className="bg-white pb-8">
      <Section config={{maxWidth:'max-w-screen-lg', customClass:''}}>
      <Image className={`my-6 rounded-lg`} src={`/images/projects/${project.result.image}`} width={2876} height={1338} alt="LineaD Project"></Image>

          <h3 className={`title text-black tertiary self-start`}>{project.result.title}</h3>
        <div className="grid grid-cols-12 gap-8 w-full items-center">
          <div className="col-span-12 md:col-span-8 flex flex-col items-center">
            <span className="text-black" dangerouslySetInnerHTML={{__html: project.result.content}}></span>
          </div>
          <div className="col-span-12 md:col-span-4">
            
            {project.result.contentSecondary && <span className="text-black text-xl leading-none uppercase"> {project.result.contentSecondary}</span>}
          </div>
        </div>
      </Section>
    </div>
  }
  </>
  )
}