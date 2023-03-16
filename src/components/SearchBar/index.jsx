import { SelectButton } from 'components';
import './styles.scss';

function SearchBar() {

  return(
    <div className='search-bar'>
      <input 
        className='search-input'
        placeholder='Find a repository'
      />
      <SelectButton buttonChildren="Type" />
      <SelectButton buttonChildren="Language" />
      <SelectButton buttonChildren="Sort" />
    </div>
  )
}

export default SearchBar;