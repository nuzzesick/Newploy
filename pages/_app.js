import Router from 'next/router';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
import '../styles/newploy.css';
import Head from 'next/head';

Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

const Newploy = ({ Component, pageProps }) => (
  <>
    <Head>
      <title>{process.env.META_TITLE}</title>
      <meta charset="utf-8" />
      <meta name="viewport" content="width=device-width, user-scalable=no" />
      <meta name="description" content={process.env.META_CONTENT} />
      <meta name="keywords" content={process.env.META_KEYWORDS} />
      <meta name="author" content={process.env.META_AUTHOR} />
      <meta httpEquiv="cache-control" content={process.env.META_CACHE} />
      <meta property="og:image" content={process.env.META_IMAGE} />
      <meta property="og:url" content={process.env.META_URL} />
      <link rel="icon" type="image/png" href={process.env.META_FAVICON16} sizes="16x16" />
      <link rel="icon" type="image/png" href={process.env.META_FAVICON32} sizes="32x32" />
      <link rel="icon" type="image/png" href={process.env.META_FAVICON64} sizes="64x64" />
    </Head>
    <Component {...pageProps} />
  </>
);

export default Newploy;
