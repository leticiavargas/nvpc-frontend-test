import { SelectButton, SearchInput } from 'components';
import { SORT, TYPES } from 'utils';
import './styles.scss';

function SearchBar({ sort, type, language, query, handleQuery, handleSort, handleType, handleLanguage }) {

  return(
    <div className='search-bar'>
      <SearchInput 
        placeholder='Find a repository'
        value={query}
        onChange={handleQuery}
      />
      
      <SelectButton 
        buttonName="Type"
        menuTitle="Select type"
        options={TYPES}
        radioGroupName="type"
        onChangeValue={handleType}
        selected={type}
      />
      <SelectButton 
        buttonName="Language"
        menuTitle="Select language"
        radioGroupName="language"
        onChangeValue={handleLanguage}
        selected={language}
      />
      <SelectButton 
        buttonName="Sort"
        menuTitle="Select order"
        options={SORT}
        radioGroupName="sort"
        onChangeValue={handleSort}
        selected={sort}
      />
    </div>
  )
}

export default SearchBar;