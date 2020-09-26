import TwitterIcon from './Icons/TwitterIcon';
import WhatsAppIcon from './Icons/WhatsAppIcon';
import FacebookIcon from './Icons/FacebookIcon';
import LinkedInIcon from './Icons/LinkedInIcon';

const Share = ({ share, title }) => {
  const shareTwitter = `https://twitter.com/intent/tweet?text=${title}: ${share}`;
  const shareWhatsApp = `https://api.whatsapp.com/send?text=${title}: ${share}`;
  const shareFacebook = `https://www.facebook.com/sharer/sharer.php?u=${title}: ${share}`;
  const shareLinkedIn = `http://www.linkedin.com/shareArticle?mini=true&url=${title}: ${share}`;
  return (
    <>
      <div className="share-ploy">
        <h2 className="share-text">Share this ploy</h2>
        <div>
          <a className="share-icon-link" href={shareTwitter} target="_blank" rel="noreferrer">
            <TwitterIcon />
          </a>
          <a className="share-icon-link" href={shareWhatsApp} target="_blank" rel="noreferrer">
            <WhatsAppIcon />
          </a>
          <a className="share-icon-link" href={shareFacebook} target="_blank" rel="noreferrer">
            <FacebookIcon />
          </a>
          <a className="share-icon-link" href={shareLinkedIn} target="_blank" rel="noreferrer">
            <LinkedInIcon />
          </a>
        </div>
      </div>
    </>
  );
};
export default Share;
