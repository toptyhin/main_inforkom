import NewsListPage from "./newsListPage";
import NewsItemPage from "./newsItemPage";


const NewsWrapper = ({path}) => {
  console.log('Render news', path)
  const cleanPath = path.replace('/about/news','');

  return cleanPath === '/' || cleanPath == '' ? <NewsListPage /> : <NewsItemPage path={cleanPath}/>;
}
    
export default NewsWrapper;