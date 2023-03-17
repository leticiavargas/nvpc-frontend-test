import { useEffect, useMemo, useState } from 'react';
import { FaTimes } from 'react-icons/fa';
import { getRepositories } from 'services/repositories';
import { RepositoriesList, SearchBar } from 'components';
import { SORT } from 'utils';
import './styles.scss';

function Repositories() {

  const [repositories, setRepositories] = useState();
  const [sort, setSort] = useState('updated-desc');
  const [type, setType] = useState('all');
  const [language, setLanguage] = useState('all');
  const [query, setQuery] = useState('');
  const [languageOptions, setLanguageOptions] = useState([]);
  
  useEffect(() => {
    getRepositories(type, query, sort, language).then((response) => {
      setRepositories(response);
      setLanguageOptions((languageOptions) => {
        if (languageOptions.length) return languageOptions;
        return Array.from(new Set(response.map((repository) => repository.language))).filter(language => Boolean(language));
      })
    }).catch((error) => {
      alert(error.response.data.message);
    });   
  }, [type, query, sort, language]);

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

  const handleClear = () => {
    setSort('updated-desc');
    setType('all');
    setLanguage('all');
    setQuery('');
  }

  return (
    <main className='repositories'>
      <SearchBar
        sort={sort} 
        type={type}s
        language={language}
        query={query}
        languageOptions={languageOptions}
        handleQuery={handleQuery}
        handleSort={(e) => setSort(e.target.value)}
        handleType={(e) => setType(e.target.value)} 
        handleLanguage={(e) => setLanguage(e.target.value)}
      />
      {filterMessage && 
        <div className='filter-result'> 
          <span>{filterMessage}</span>
          <button onClick={handleClear}> <FaTimes /> Clear filter</button>
        </div> 
      }
      {repositories && <RepositoriesList repositories={repositories} />}
      
    </main>
  )
}

export default Repositories;