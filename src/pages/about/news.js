function News({children}) {
  return (
    <div className='main'
      dangerouslySetInnerHTML={{__html: children}}
       
    />
  )}
   
export default News;