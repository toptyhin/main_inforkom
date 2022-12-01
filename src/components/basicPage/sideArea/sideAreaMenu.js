import ExtraMenuItem from './../../UI/extraMenuItem'
import './sideArea.css'

const SideAreaMenu = ({head, item}) => {
  return (
    <div className='back-grey side-area'>
      <h6>{head}</h6>
      <div className='side-menu'>
        <ExtraMenuItem item={item}/>
      </div>
    </div>
  );
}

export default SideAreaMenu;
