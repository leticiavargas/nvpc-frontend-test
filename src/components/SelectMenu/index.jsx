import { FaCheck } from 'react-icons/fa';
import './styles.scss';

function SelectMenu() {

  return(
    <div className="select-menu">
      <header>
        Select alguma coisa
      </header>
      <div className='menu-list'>
        <label><FaCheck /> <span> Item 1</span></label>
        <label>item 2</label>
      </div>
    </div>
  )
}

export default SelectMenu