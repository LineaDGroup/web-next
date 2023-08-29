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
  featuredImage: string;
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
      content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      <br><br>
      orem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
      image: 'biobarica/about.jpg',
    }
    proj.challenges = {
      title: '¿Cuál fue el resultado?',
      content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      <br><br>
      orem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
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

  return proj;
}