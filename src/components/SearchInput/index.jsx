import debounce from 'lodash.debounce';
import { Button } from 'components';
import { FaSearch } from 'react-icons/fa';
import './styles.scss';
import { useEffect, useCallback, useState, useMemo } from 'react';

function SearchInput ({onChange, value:valueProp, ...props}) {

  const [value, setValue] = useState(valueProp);

  useEffect(() => {
    setValue(valueProp);
  },[valueProp]);

  const changeHandler = useMemo(() => (
     debounce(onChange, 500)
  ), [onChange]);

  const handleChange = useCallback(e => {
    if (changeHandler) {
      e.persist();
      changeHandler(e);
    }
    setValue(e.target.value);
  }, [changeHandler]);
  
  return(
    <div className='search-input'>
      <input type="text" {...props} value={value} onChange={handleChange} />
      <FaSearch /> 
    </div>
  )
}

export default SearchInput