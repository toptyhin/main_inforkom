import './sideArea.css'

const SideAreaImg = ({head, item, padding, margin, width, pic_heigth}) => {
  let style={
    padding: padding,

    width: width,
  }
  let img_style = {
    height: pic_heigth,
    margin: margin,
  }
  let itemArr = item.map(function(element, index) {
       return <div style={style}>
                <img style={img_style} src={element}/>
              </div>
    });

  return (
    <div className='back-grey side-area'>
      <h6>{head}</h6>
      <div className='flex wrap flex-space-a'>{itemArr}</div>

    </div>
  );
};

  export default SideAreaImg;
