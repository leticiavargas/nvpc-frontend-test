import { useEffect, useMemo, useState } from 'react';
import { getRepositories } from 'services/repositories';
import { RepositoriesList, SearchBar } from 'components';
import { SORT } from 'utils';
import './styles.scss';

function Repositories() {

  const [repositories, setRepositories] = useState();
  const [sort, setSort] = useState('updated');
  const [type, setType] = useState('all');
  const [language, setLanguage] = useState('all');
  const [query, setQuery] = useState('');
  
  useEffect(() => {
    getRepositories(type, query, sort).then((response) => {
      setRepositories(response);
    }).catch((error) => {
      alert(error.response.data.message);
    });   
  }, [type, query, sort]);

  const handleQuery = (e) => {
    setQuery(e.target.value);
  }
  

  const filterMessage = useMemo(() => {
    if (type !== 'all' || language !== 'all' || query.length ) {
      let message = `${repositories.length} results`;

      if (type !== 'all'){
        message += ` for ${type} repositories`;
      }
      if (query.length){
        message += ` matching "${query}"`;
      }
      if (language !== 'all'){
        message += ` written in ${language}`;
      }
      
      const sortOption = SORT.find(option => option.key === sort);
      message += ` sorted by ${sortOption.label}`;

      return message;
    }
  }, [type, language, query, sort,  repositories]);

  return (
    <main className='repositories'>
      <SearchBar
        sort={sort} 
        type={type}s
        language={language}
        query={query}
        handleQuery={handleQuery}
        handleSort={(e) => setSort(e.target.value)}
        handleType={(e) => setType(e.target.value)} 
        handleLanguage={(e) => setLanguage(e.target.value)}
      />
      {filterMessage && <div className='filter-result'> {filterMessage}</div> }
      {repositories && <RepositoriesList repositories={repositories} />}
      
    </main>
  )
}

export default Repositories;