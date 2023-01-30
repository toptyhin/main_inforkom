import './input.css'
import './inputSuggest.css'
import { v4 as uuidv4 } from 'uuid'
import { useState, useEffect, useDeferredValue, createRef } from 'react';
import useComponentVisible from '../../../hooks/useComponentVisible';

const InputSuggest = ( {plus, name, text, textAdd, icon, theme, model, callback} ) => {

  const { ref, isComponentVisible,setIsComponentVisible } = useComponentVisible(false);
  const [currentValue, setCurrentValue] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [dropDownOffset, setDropdownOffset] = useState(28);
  const deferredSuggestions = useDeferredValue(suggestions);
  const inputRef = createRef();

  let field_class = 'field w-100'
  if (theme == 'search') {
    field_class = 'field_class field w-100'
  };


useEffect(()=>{
  if (inputRef.current) {
    setDropdownOffset(inputRef.current.clientHeight)
  }
},[inputRef]);

const handleInput = async (ev) => {
  
  setCurrentValue(ev.target.value)

  if (ev.target.value.length > 3) {
    const modelData = await model(ev.target.value);
    console.log('modelDTA', modelData)
    setSuggestions(modelData);
    setIsComponentVisible(true);
  } else {
    setIsComponentVisible(false)
  }
}

const setSelected = (item) => {
  setIsComponentVisible(false)
  setCurrentValue(item.title);
  callback(item.title);
}

const ListItem = (el) => {

  return (<li 
            key={uuidv4()} 
            id={el.id} 
            onClick={()=>setSelected(el)}>
            
            <p className='itemTitle'>{el.title}</p>
            {/* <p className='itemDescription'>{el.description}</p> */}
          </li>)
}

const renderSuggestions = (list) => {
  if (list.length > 0) {
    return <ul style={{listStyle:'none'}} children={list.map(el=>ListItem(el))}></ul>
  } else {
    return <p>Ничего не найдено</p>
  }
}

const SimpleInput = () => <>
    <input ref={inputRef} className={field_class} type='text' name={name} placeholder={text} onChange={handleInput} onClick={handleInput} value={currentValue}/>
  </>;

const IconInput = () => <div>
  <input ref={inputRef} className={field_class} type='text' name={name} placeholder={text} onChange={handleInput} onClick={handleInput} value={currentValue}/>
  <div className='icon'></div>
</div>;


  return (
    <div className='flex input_class'>
      {!icon ? <SimpleInput/> : <IconInput/>}
      { textAdd ? <div className={plus}>{textAdd}</div> : <></>}
      <div ref={ref} className={'suggestion_dropdown'} style={{top:dropDownOffset}}>
        {isComponentVisible && renderSuggestions(deferredSuggestions)}
      </div>
      
    </div>
  );
};

export default InputSuggest;
