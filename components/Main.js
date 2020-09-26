import { useRouter } from 'next/router';
import Link from 'next/link';
import ReactTooltip from 'react-tooltip';
import CryptoAES from 'crypto-js/aes';
import JavaScriptIcon from './Icons/JavaScriptIcon';
import PythonIcon from './Icons/PythonIcon';
import FigmaIcon from './Icons/FigmaIcon';

const Main = ({ content }) => {
  const topics = content.filter((ployContent, index) => {
    if (index % 2 === 0) return ployContent;
    return false;
  });
  const ploys = content.filter((ployContent, index) => {
    if (index % 2 !== 0) return ployContent;
    return false;
  });
  const Icons = {
    JavaScriptIcon,
    PythonIcon,
    FigmaIcon,
  };
  const router = useRouter();
  const openPloy = (url, title) => {
    const ploy = `${url}ployTitle${title}`;
    const ployUrl = CryptoAES.encrypt(JSON.stringify({ ploy }), '1').toString();
    router.push(`/ploy?${ployUrl}`);
  };
  return (
    <>
      <div className="main">
        {
          topics.map((topic, index) => {
            const Icon = Icons[topic.icon];
            return (
              <>
                <div className="carrousel">
                  <div className="carrousel-title-content">
                    <Icon value={topic.icon} type="carrousel" />
                    <div className="carrousel-title-container">
                      <h2 className="carrousel-title">{topic.title}</h2>
                      <Link href={`topics/${(topic.name).toLowerCase()}`}>
                        <button type="button" className="open-topic">
                          Browse
                          {topic.name}
                        </button>
                      </Link>
                    </div>
                  </div>
                  <div className="carrousel-content">
                    {
                      ploys[index].map((ploy) => (
                        <button
                          type="button"
                          className="ploy-opener"
                          onClick={() => {
                            const url = ploy.url;
                            const title = ploy.title;
                            openPloy(url, title);
                          }}
                        >
                          <div className="ploy-item">
                            {
                              ploy.urlToImage ? (
                                <>
                                  <div
                                    className="ploy-item-image"
                                    style={{
                                      backgroundImage: `url(${ploy.urlToImage})`,
                                    }}
                                  />
                                </>
                              ) : (
                                <>
                                  <div
                                    className="ploy-item-image"
                                    style={{
                                      backgroundImage: `url(${process.env.DEFAULT_IMAGE})`,
                                    }}
                                  />
                                </>
                              )
                            }
                            <div className="ploy-item-info">
                              <span className="ploy-item-published">{ploy.publishedAt}</span>
                              <h3
                                className="ploy-item-title"
                                data-tip={ploy.title}
                                data-class="ploy-item-title-tooltip"
                                data-place="bottom"
                                data-effect="solid"
                                data-type="info"
                              >
                                {ploy.title}
                              </h3>
                              <ReactTooltip />
                              <span className="ploy-item-from">{ploy.source.name}</span>
                            </div>
                          </div>
                        </button>
                      ))
                    }
                  </div>
                </div>
              </>
            );
          })
        }
      </div>
    </>
  );
};
export default Main;
