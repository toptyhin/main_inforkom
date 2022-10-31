import Input from './../../../components/UI/input/input'
import DadataSuggestions from "react-dadata-suggestions";
import "react-dadata-suggestions/dist/styles.css";
import { useState } from 'react';

function Geo ({setGeo1, setGeo2, setReady}) {
  const [plus, setPlus] = useState(false);
  return (
    <div className='geo-zone radius-20 white'>
      <h2>Регион <br className='geo-hide'/>перевозок</h2>
      <div className='search'>
        <div className='flex-search'>
          <div className='flex item inline-block'>
            <DadataSuggestions
                  token='09b36502f2fd994fb02fcd541c18b4cbffe47f99'
                  onSelect={suggestion => {setGeo1(suggestion.data.region); setReady(true)}}
                  placeholder={'Введите регион'}
                  onChange={suggestion => console.log(suggestion)}
            />
            <div className='inline-block'>
            <button type='button' onClick={() => setPlus(true)}>+</button>
            </div>
          </div>
          <div className={plus ? "" : "hidden"}>
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
