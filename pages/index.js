import Header from '../components/Header';
import Main from '../components/Main';

const Home = ({ content }) => (
  <>
    <Header />
    <Main content={content} />
  </>
);
export async function getStaticProps() {
  // Fetch content
  const API_KEY = process.env.API_KEY;
  const excludeDomains = process.env.EXCLUDE_DOMAINS;
  // Javascript fetch content
  let javascript = await fetch(`http://newsapi.org/v2/everything?qInTitle=javascript&sortBy=publishedAt&language=en&excludeDomains=${excludeDomains}&apiKey=${API_KEY}`);
  javascript = await javascript.json();
  javascript = await javascript.articles;
  // Python fetch content
  let python = await fetch(`http://newsapi.org/v2/everything?qInTitle=python&sortBy=publishedAt&language=en&excludeDomains=${excludeDomains}&apiKey=${API_KEY}`);
  python = await python.json();
  python = await python.articles;
  // Figma fetch content
  let figma = await fetch(`http://newsapi.org/v2/everything?qInTitle=figma&sortBy=publishedAt&language=en&excludeDomains=${excludeDomains}&apiKey=${API_KEY}`);
  figma = await figma.json();
  figma = await figma.articles;

  const content = [{ name: 'JavaScript', title: 'News about JavaScript', icon: 'JavaScriptIcon' }, javascript, { name: 'Python', title: 'Ploys about Python', icon: 'PythonIcon' }, python, { name: 'Figma', title: 'Trending now on Figma', icon: 'FigmaIcon' }, figma];

  return {
    props: {
      content,
    },
  };
}
export default Home;
