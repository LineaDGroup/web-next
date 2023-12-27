import '../globals.scss'

import { Jost } from 'next/font/google';
// import { getDictionary } from "./dictionaries";
import { Metadata, ResolvingMetadata } from "next";
import Script from "next/script";
import Footer from "../../components/footer/footer.base";
import Navbar from "../../components/shared/navbar";
import Section from "@/components/section/section.base";

const jost = Jost({
  weight: ['400', '600', '700'],
  subsets: ['latin'],
  display: 'swap'
});

export async function generateMetadata(
  { params }: any
): Promise<Metadata> {
 
  const title = 'LineaD Group';
  const description = params.lang === 'es'?'Desarrollo de software, Streaming, contenido':'Software development, streaming, content';
  // optionally access and extend (rather than replace) parent metadata
 
  return {
    title: title,
    description: description,
    openGraph: {
      type: "website",
      title: title,
      description: description,
      images: [{
        url: `/images/social/${params.lang}/main.jpg`
      }]
    },
    icons: {
      icon: '/favicon-32x32.png',
      apple: '/apple-touch-icon.png' 
    },
    manifest: '/site.webmanifest',
    metadataBase: new URL(process.env.BASE_URL || 'https://lineadgroup.com'),
  }
}


export async function generateStaticParams() {
  /**@todo this should be returned by a config service with all the valid languages */
  return [{ lang: 'es' }, { lang: 'en' }];
}

export default async function RootLayout({
  children,
  params
}: {
  children: React.ReactNode,
  params: any
}) {
  
  
  // const dictionary = await getDictionary(params.lang);

  return (
    <html lang={params.lang} className={`${jost.className}`}>
      {/* Google Tag Manager */}
      <Script id="google-tag-manager">
        {
          `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','${process.env.NEXT_PUBLIC_GTM_ID}');`
        }
      </Script>
      {/* End Google Tag Manager */}
      <body>
        <Navbar locale={params.lang}></Navbar>
        {children}
        <Section config={{fullWidth:true, customClass:'py-12'}}>
        <Footer config={{maxWidth:'max-w-screen-2xl', fullWidth: true}} />
        </Section>
      </body>
    </html>
  )
}