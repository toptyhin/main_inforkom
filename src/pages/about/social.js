import Deti from './../../images/detimsk-logo3.jpg'
import Nikin from './../../images/nikin.jpg'
import Mnp from './../../images/mnp.png'
import Button from './../../components/UI/button';

const Social = () => {
  return (
    <div className='basic-page'>
      <img src={Deti}/>
      <div className='flex'>
        <img src={Nikin}/>
        <div>
          <p>  Человек должен хотя бы иногда задавать себе вопрос:  
            ради чего он пришел на эту Землю? Ради доброго и светлого. 
            Много лет мы участвуем в жизни Благотворительного Фонда 
            "Дети.мск.ру". Может быть, когда-то что-то изменится в 
            нашей стране и Правители ее сочтут возможным взять заботу 
            о детях с тяжелыми диагнозами и судьбами одновременно, но 
            пока эти дети нуждаются в нас, в нашей помощи. Скажем 
            больше, они от нее зависят полностью. Для их полноценной 
            жизни требуются достаточно большие средства. Мы, и прежде 
            всего дети, будем благодарны, если вы будете принимать 
            участие в помощи Фонду разово или постоянно, на ваше 
            усмотрение. Это нужно и Вам. Ведь для чего-то мы пришли 
            в эту Жизнь!
          </p>
          <img src={Mnp}/>
        </div>
      </div>
      <div className='flex'>
        <p>
          Компания «Инфорком» на протяжении многих лет оказывает 
          материальную поддержку Региональному благотворительному 
          общественному фонду помощи тяжелобольным и обездоленным 
          детям "Дети.мск.ру".
        </p>
        <Button type='button' children='Помочь фонду' theme='green' href='https://deti.org/pomoch-sejchas/' width='400px' />
      </div>  
    </div>
  );
}

  export default Social;