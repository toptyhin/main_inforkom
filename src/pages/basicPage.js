import TextAreaHead from '../components/basicPage/textArea/textAreaHead'
import TextAreaHeadL from '../components/basicPage/textArea/textAreaHeadL'
import TextAreaText from '../components/basicPage/textArea/textAreaText'
import TextAreaList from '../components/basicPage/textArea/textAreaList'
import TextAreaSpecial from '../components/basicPage/textArea/textAreaSpecial'
import SideAreaMenu from '../components/basicPage/sideArea/sideAreaMenu'
import PageHeader from '../components/basicPage/pageHeader/pageHeader';
import Button from '../components/UI/button';

const BasicPage = () => {
    return (
      <div>
        <PageHeader head='Заголовок' children='Доп заголовок'/>
        <div className='basic-page flex'>
        <div className='text-area'>
          <TextAreaHead>
            Большой заголовок
          </TextAreaHead>
          <TextAreaText>
            Самый обычный на свете текст, ничем не примечателен
          </TextAreaText>
          <TextAreaSpecial>Особый текст</TextAreaSpecial>
          <TextAreaHeadL>Маленький заголовок</TextAreaHeadL>
          <TextAreaList children='Пункт списка' />
        </div>
        <div className='back-grey side-area'>
          <SideAreaMenu head='Меню' item={[["","О компании"],
                                         [`/map-stations/map-station`,"Сеть АЗС"],
                                         ["","Цены на топливо"],
                                         ["","Топливные карты"]]}/>
        </div>
        </div>
      </div>
    );
  }

  export default BasicPage;
