import { FaCheck } from 'react-icons/fa';
import './styles.scss';

function SelectMenu({ menuTitle, options=[], radioGroupName, onChangeValue, selected }) {

  return(
    <div className="select-menu">
      <header>{menuTitle}</header>
      <div className='menu-list'>
        {options.map((option) => {
          const optionKey = (option?.key || option);
          const isChecked = Boolean(selected === optionKey);
          return (
            <label key={optionKey}>
              <input type="radio" value={optionKey} name={radioGroupName}  checked={isChecked} onChange={onChangeValue} hidden />
              {isChecked && <FaCheck /> }
              <span> {option?.label || option} </span>
            </label>
          )
        })}
      </div>
    </div>
  )
}

export default SelectMenu