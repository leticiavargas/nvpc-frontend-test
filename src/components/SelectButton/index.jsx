import { FaCaretDown } from 'react-icons/fa';
import { Button, SelectMenu } from 'components';
import './styles.scss';

function SelectButton({buttonName, ...otherProps}) {
  
  return(
    <div className='details'>
      <Button>
        {buttonName}
        <FaCaretDown />
      </Button>
      <SelectMenu
        {...otherProps}
      />
    </div>
  )
}

export default SelectButton;