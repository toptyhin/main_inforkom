import TextAreaHead from '../../components/basicPage/textArea/textAreaHead'
import TextAreaHeadL from '../../components/basicPage/textArea/textAreaHeadL'
import TextAreaText from '../../components/basicPage/textArea/textAreaText'
import TextAreaList from '../../components/basicPage/textArea/textAreaList'
import TextAreaSpecial from '../../components/basicPage/textArea/textAreaSpecial'
import SideAreaMenu from '../../components/basicPage/sideArea/sideAreaMenu'
import PageHeader from '../../components/basicPage/pageHeader/pageHeader';
import JsxParser from 'react-jsx-parser'

function News({children}) {
  return (
    <div className='main'>
      <JsxParser
          components={{ PageHeader, TextAreaHead, TextAreaHeadL, TextAreaText, TextAreaSpecial }}
          jsx={children}
        />
    </div>
  )}
  
export default News;