import { Button, SelectMenu } from 'components';
import './styles.scss';

function SelectButton({buttonChildren}) {
  
  return(
    <div className='details'>
      <Button children={buttonChildren} />
      <SelectMenu />
    </div>
  )
}

export default SelectButton;