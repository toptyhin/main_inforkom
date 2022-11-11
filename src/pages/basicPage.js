import TextArea from '../components/basicPage/textArea/textArea'
import SideArea from '../components/basicPage/sideArea/sideArea'
import PageHeader from '../components/basicPage/pageHeader/pageHeader';

const BasicPage = () => {
    return (
      <div>
        <PageHeader />
        <div className='basic-page flex flex-space-b'>
          <TextArea />
          <SideArea />
        </div>
      </div>
    );
  }

  export default BasicPage;
