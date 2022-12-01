import DadataSuggestions from 'react-dadata-suggestions';
import 'react-dadata-suggestions/dist/styles.css';
import { useState } from 'react';

function Geo ({setGeo1, setGeo2, setReady}) {
  const [plus, setPlus] = useState(false);
  return (
    <div className='geo-zone radius-20 white'>
      <h2>Регион перевозок</h2>
      <div className='search'>
        <div className='flex-search'>
          <div className='flex item inline-block w-100'>
            <DadataSuggestions
                  token='09b36502f2fd994fb02fcd541c18b4cbffe47f99'
                  onSelect={suggestion => {setGeo1(suggestion.data.region); setReady(true)}}
                  placeholder={'Введите регион'}
                  onChange={suggestion => console.log(suggestion)}
            />
            <button id='geoplus' type='button' height='100%' className='plus2' onClick={() => setPlus(true)}>+</button>
            <div className='inline-block'></div>
          </div>
          <div className={plus ? 'item field1' : 'hidden'}>
              <DadataSuggestions
                  token='09b36502f2fd994fb02fcd541c18b4cbffe47f99'
                  onSelect={suggestion => setGeo2(suggestion.data.region)}
                  placeholder={'Дополнительный регион'}
                  onChange={suggestion => console.log(suggestion)}
              />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Geo;
