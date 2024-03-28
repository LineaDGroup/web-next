interface ProjectSection {
  title: string;
    content: string;
    image: string | ProjectImage;
    contentSecondary?: string;
}
interface ProjectImage {
  width: number;
  height: number;
  src: string;
}
interface Project {
  slug: string;
  featuredImage?: string;
  featuredVideo?: {
    mp4: string;
    hevc?: string;
    av1?: string;
    m3u8?: string;
    poster?: string;
  };
  topImage: string;
  logo: string;
  title: string;
  description: string;
  about: ProjectSection,
  challenges: ProjectSection,
  result: ProjectSection
}
export const getProject = (slug: string, section = 'development'): Project=>{
  const proj = {} as Project
  if(slug === 'biobarica') {
    proj.topImage = 'biobarica/top.jpg';
    proj.logo = 'biobarica/logo.png';
    proj.featuredImage = 'biobarica/featured.jpg';
    proj.title = 'Desarrollo de app BGS';
    proj.description = 'Desarrollamos el software multiplataforma Biobarica Global System de gestión de cámaras hiperbáricas';
    proj.about = {
      title: '¿Qué hicimos?',
      content: `Desarrollamos diversas soluciones tecnológicas para Biobarica, una empresa líder en medicina hiperbárica. Entre ellas, el software multiplataforma Biobarica Global System (BGS), que permite gestionar las cámaras hiperbáricas de la empresa. La aplicación se encarga de la gestión de turnos, la administración de pacientes, la facturación y la generación de reportes. También desarrollamos una aplicación móvil para pacientes, que les permite agendar turnos, recibir notificaciones y acceder a información sobre los tratamientos. Además, creamos un sistema de monitoreo remoto de las cámaras hiperbáricas, que permite a los técnicos controlar y ajustar los parámetros de las cámaras desde cualquier lugar.`,
      image: 'biobarica/about.jpg',
    }
    proj.challenges = {
      title: '¿Cuál fue el resultado?',
      content: `La aplicación BGS permitió a Biobarica mejorar la eficiencia de sus operaciones, reducir los tiempos de espera de los pacientes y aumentar la calidad de la atención. La aplicación móvil para pacientes mejoró la experiencia de los usuarios y les permitió acceder a información útil de forma rápida y sencilla. El sistema de monitoreo remoto de las cámaras hiperbáricas mejoró la eficiencia de los técnicos y permitió a la empresa ofrecer un servicio más rápido y confiable. En resumen, las soluciones tecnológicas desarrolladas por nuestro equipo permitieron a Biobarica mejorar su servicio, aumentar su eficiencia y diferenciarse de la competencia.`,
      image: {
        src: 'biobarica/logo.png',
        width: 230,
        height: 50,
      }
    }
    proj.result = {
      title: 'Los resultados',
      content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      <br><br>
      orem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
      contentSecondary: `Esta herramienta permite a Biobarica diferenciarse de su competencia al proveer un software de gestión único en la industria`,
      image: 'biobarica/result.webp',
    }
  }
  if(slug === 'teatrix') {
    proj.topImage = 'biobarica/top.jpg';
    proj.logo = 'biobarica/logo.png';
    proj.featuredVideo = {
      mp4: 'teatrix/TEASER-TEATRIX.mp4',
      hevc: 'teatrix/TEASER-TEATRIX.hevc.mp4',
      av1: 'teatrix/TEASER-TEATRIX.av1.mp4',
      m3u8: 'teatrix/TEASER-TEATRIX.m3u8',
    }
    proj.title = 'Desarrollo de app BGS';
    proj.description = 'Desarrollamos el software multiplataforma Biobarica Global System de gestión de cámaras hiperbáricas';
    proj.about = {
      title: '¿Qué hicimos?',
      content: `Participamos de diferentes etapas del desarrollo de la plataforma Teatrix desde su estado embrionario hasta su consolidación en la pandemia. Nos encargamos del primer desarrollo tecnológico de la plataforma y de los prototipos de filmación de las obras de teatro. Realizamos las primeras grabaciones de un género nuevo, entre el teatro y la televisión, desarrollando la arquitectura de dirección, producción, filmación, iluminación y toma de sonido. También de las primeras ediciones, buscando el ritmo y lenguaje apropiado para el nuevo género y de la realización de contenidos extras como backstage, entrevistas, trailers. En una segunda etapa, nos encargamos del desarrollo de las promociones - guión y edición - y de sus diferentes piezas creativas para todas las campañas digitales. Armamos un eficiente sistema de producción, que permitía acompañar el lanzamiento de los dos estrenos semanales de la plataforma (casi 800 piezas en tres años) y realizamos spots de branding, para acompañar distintos hitos de la plataforma. También continuamos con la realización de entrevistas, backstages y tráilers. A la vez aportamos servicios de  tecnología, asesoría, desarrollo y upgrade. En pandemia, acompañamos el crecimiento exponencial de la plataforma, realizando exitosas transmisiones de streaming, llegando a reunir 20 mil usuarios en vivo en algunas de ellas. Durante los años 2020 y 2021 realizamos casi cien transmisiones de obras, con la participación de actores y público en vivo, integrados en un desarrollo que embebida en la plataforma el zoom y el chat. `,
      image: 'teatrix/teatrix-platform.jpg',
    }
    proj.challenges = {
      title: '¿Cuál fue el resultado?',
      content: `Nos tocó participar del inicio y crecimiento de una experiencia exitosa, que logró consolidarse en poco tiempo. En tecnología alcanzamos el desarrollo de la primera versión de la plataforma en tiempo récord, para cumplir con la fecha de lanzamiento. También fue óptimo nuestro aporte en asesoría, mejorando procedimientos y desafíos de performance y soporte que la plataforma tuvo en el tiempo. El resultado en Streaming fue excelente, adaptando la plataforma ODD a la transmisión en vivo y produciendo grandes eventos. En cuanto al aporte creativo y la producción de contenidos, la realización de las primeras obras fue clave en el inicio de la plataforma, lo que permitió ir de cero a más de 400 obras filmadas al día de hoy. En Branding y Marketing tuvimos un buen rendimiento cubriendo todos los estrenos, con grandes resultados, y excelentes y creativos spots de branding.`,
      image: {
        src: 'teatrix/teatrix-logo.png',
        width: 230,
        height: 50,
      }
    }
  }

  return proj;
}