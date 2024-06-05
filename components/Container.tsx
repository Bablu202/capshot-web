import Head from 'next/head'
import { useRouter } from 'next/router'
import dynamic from 'next/dynamic'
import Header from './header'
import Footer from './Footer'

const CrispWithNoSSR = dynamic(() => import('./crisp'), { ssr: false })

export default function Container(props: { [x: string]: any; children: any }) {
  const { children, ...customMeta } = props
  const router = useRouter()
  const meta = {
    title: 'capshot – Save instant edited screenshots ✨',
    description: `A simple app to edit screenshots on Mac`,
    image: 'https://capshot.achuth.dev/capshot.png',
    type: 'website',
    date: '1-1-2022',
    ...customMeta,
  }
  return (
    <>
      <CrispWithNoSSR />
      <Head>
        <title>{meta.title}</title>
        <meta name="robots" content="follow, index" />
        <meta content={meta.description} name="description" />
        <meta
          property="og:url"
          content={`https://capshot.achuth.dev${router.asPath}`}
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
          rel="canonical"
          href={`https://capshot.achuth.dev${router.asPath}`}
        />
        <meta property="og:type" content={meta.type} />
        <meta property="og:site_name" content="capshot" />
        <meta property="og:description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:image" content={meta.image} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@achuth_hadnoor" />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
        <meta name="twitter:image" content={meta.image} />
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon-180.png" />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="theme-color" content="#ffffff"></meta>
        {meta.date && (
          <meta property="article:published_time" content={meta.date} />
        )}
        <script
          dangerouslySetInnerHTML={{
            __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config',  'UA-177599995-1');
        `,
          }}
        />
        <script async src="https://cdn.splitbee.io/sb.js"></script>
      </Head>
      <Header />
      {/* <span className="fixed bottom-5 right-36 z-10">
        <a
          href="https://www.producthunt.com/posts/capshot-2?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-capshot&#0045;2"
          target="_blank"
        >
          <img
            src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=349926&theme=neutral"
            alt="capshot - Save&#0032;instant&#0032;time&#0045;capshot&#0032;screen&#0032;recording&#0032;✨ | Product Hunt"
          />
        </a>
      </span> */}
      <main className="container mx-auto">{children}</main>
      <Footer />
    </>
  )
}
