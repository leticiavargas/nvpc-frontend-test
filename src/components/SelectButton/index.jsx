import { Button, SelectMenu } from 'components';
import './styles.scss';

function SelectButton({buttonName, ...otherProps}) {
  
  return(
    <div className='details'>
      <Button children={buttonName} />
      <SelectMenu
        {...otherProps}
      />
    </div>
  )
}

export default SelectButton;