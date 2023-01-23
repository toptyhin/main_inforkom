import { Post_gql } from "../../gql";


function NewsItemPage({path}) {

  const content = Post_gql(path.replace('/',''));
  
    if (!content.loading && content.data.posts) {
    const data = content.data.posts.data[0].attributes;
    return (<>
    <div>{data.Title}</div>
    <div>{data.SubTitle}</div>
    <div dangerouslySetInnerHTML={{__html: data.Content }} />
    </>
    )
  } else {
    return <></>
  }

  

}
    
export default NewsItemPage;