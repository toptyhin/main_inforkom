import { Main_gql } from '../gql';
import Banner from '../components/home/banner/banner';
import People from '../components/home/people/people';
import Green  from '../components/home/green/green';
import Boxes  from '../components/home/boxes/boxes';
import FormAccount from '../components/home/formAccount/formAccount';
import Calc   from '../components/home/calc/calc';
import Red    from '../components/home/red/red';
import Card   from '../components/home/card/card';
import Azs    from '../components/home/azs/azs';
import TextAreaSpecial from '../components/basicPage/textArea/textAreaSpecial'
import { API_URL } from './../appconfig';

const Home = () => {
  const content = Main_gql();
  


  if (!content.loading && content.data.main) {
    const data = content.data.main.data.attributes;
    return (
    <>
      <Banner banner={data.banner.map(({header}) => header)}/>
      <People header_people={data.people_area.header_people}
              pic={data.people_area.people.map(({pics}) => API_URL+pics.data[0].attributes.url)} 
              person={data.people_area.people.map(({text}) => text)}
              />
      <Green header={data.green_area.header}
             url={data.green_area.url}
             img={data.green_area.logos.data.map(({attributes}) => API_URL+attributes.url)} 
             />
      <Boxes header={data.tariff.header}
             l_tariff = {data.tariff.tariff_little}
             l_tariff_img={data.tariff.tariff_little.map(({tariff_box}) => API_URL+tariff_box.data.attributes.url)}
             b_tariff={data.tariff.tariff_big}
             b_tariff_img={API_URL+data.tariff.tariff_big.tariff_box.data.attributes.url} 
             />
      <FormAccount header_order={data.order.header}
                   button_order={data.order.order_button}
                   header_account={data.account.header}
                   avatar={API_URL+data.account.picture.data.attributes.url}
                   button_account={data.account.enter_button}
                   icons={data.icons.data.map(({attributes}) => API_URL+attributes.url)} 
                   />
      <Calc calc={data.calc}
            doc={API_URL+data.calc.button_doc.data.attributes.url}
            />
      <Red tech={data.techcenter}
           item={data.techcenter.tech_item}
           img={data.techcenter.tech_item.map(({img}) => API_URL+img.data.attributes.url)}
           />
      <Card card={data.card}
            img={API_URL+data.card.img.data.attributes.url}
            button={data.card.order_button}
            />
      <Azs azs={data.azs}
           button={data.azs.azs_button}
           img={data.azs.img.data.map(({attributes}) => API_URL+attributes.url)}
           logos={data.azs.logos.data.map(({attributes}) => API_URL+attributes.url)}
           />
    </>
  );}
}

export default Home;
