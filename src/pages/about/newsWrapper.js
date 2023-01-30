import NewsListPage from "./newsListPage";
import NewsItemPage from "./newsItemPage";

const NewsWrapper = ({path}) => {
  const cleanPath = path.replace('/about/news','');
  return cleanPath === '/' || cleanPath == '' ? <NewsListPage /> : <NewsItemPage path={cleanPath}/>;
}

export default NewsWrapper;