import { FaCheck } from 'react-icons/fa';
import './styles.scss';

function SelectMenu({ menuTitle, options=[], radioGroupName, onChangeValue, selected }) {

  return(
    <div className="select-menu">
      <header>{menuTitle}</header>
      <div className='menu-list'>
        {options.map((option) => {
          const isChecked = Boolean(selected === option);
          return (
            <label key={option}>
              <input type="radio" value={option} name={radioGroupName}  checked={isChecked} onChange={onChangeValue} hidden />
              {isChecked && <FaCheck /> }
              <span> {option} </span>
            </label>
          )
        })}
      </div>
    </div>
  )
}

export default SelectMenu