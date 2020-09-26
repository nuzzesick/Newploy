import { useRouter } from 'next/router';
import CryptoAES from 'crypto-js/aes';
import CryptoENC from 'crypto-js/enc-utf8';
import Head from 'next/head';
import Header from '../components/Header';
import Share from '../components/Share';

const Ploy = ({ metaTitle, metaUrl }) => {
  const router = useRouter();
  let id = router.asPath;
  id = id.slice(6);
  let ployUrl = CryptoAES.decrypt(id.toString(), '1');
  ployUrl = ployUrl.toString(CryptoENC);
  ployUrl = ployUrl.split('ployTitle');
  let ployTitle = ployUrl[1];
  ployUrl = ployUrl[0];
  ployUrl = ployUrl.split('ploy');
  ployUrl = ployUrl[1];
  ployUrl = ployUrl.split('"');
  ployUrl = ployUrl[2];
  ployTitle = ployTitle.split('"');
  ployTitle = ployTitle[0];
  let share = router.asPath;
  share = metaUrl + share;
  share = encodeURIComponent(share);
  return (
    <>
      <Head>
        <title>
          {ployTitle}
          {' '}
          |
          {' '}
          {metaTitle}
        </title>
      </Head>
      <Header link={ployUrl} />
      <div className="main">
        <iframe
          src={ployUrl}
          className="ploy"
          title={ployTitle}
          allowFullScreen
        />
        <Share
          share={share}
          title={ployTitle}
        />
      </div>
    </>
  );
};
export async function getStaticProps() {
  // Meta info
  const metaTitle = process.env.META_TITLE;
  const metaUrl = process.env.META_URL;

  return {
    props: {
      metaTitle,
      metaUrl,
    },
  };
}
export default Ploy;
