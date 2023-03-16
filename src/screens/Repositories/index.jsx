import { useEffect, useMemo, useState } from 'react';
import { getAllRepo, getRepoByType } from 'utils';
import { RepositoriesList, SearchBar } from 'components';
import './styles.scss';

function Repositories() {

  const [repositories, setRepositories] = useState();
  const [sort, setSort] = useState('last_updated');
  const [type, setType] = useState('all');
  const [language, setLanguage] = useState('all');

  useEffect(() => {
    getAllRepo().then((response) => {
      setRepositories(response);
    });
  },[]);
  
  useEffect(() => {
    if (type === 'all') {
      getAllRepo().then((response) => {
        setRepositories(response);
      });
    } else if (type !== 'all') {
        getRepoByType(type).then((response) => {
          setRepositories(response);
        });
      }
  }, [type]);

  const sortedRepositories = useMemo(() => {
    if (sort == 'name') {
     return [...repositories].sort((a, b) => {
        let x = a.name.toUpperCase(),
            y = b.name.toUpperCase();
      return x == y ? 0 : x > y ? 1 : -1 ;
     })
    } else if (sort === 'stars') {
      return [...repositories].sort((a, b) => (
        b.stargazers_count - a.stargazers_count
      ))
    } else {
      return repositories;
    }
  }, [sort, repositories]);

  const handleSort = (e) => {
    console.log("SORT >>>", e.target.value);
    setSort(e.target.value);
  }

  const handleLanguage = (e) => {
    console.log("LANGUAGE >>>", e.target.value);
    setLanguage(e.target.value);
  }

  const handleType = (e) => {
    console.log("TYPE >>>", e.target.value);
    setType(e.target.value);
  }
  
  const isFiltered = Boolean(type !== 'all' || language !== 'all');

  return (
    <main className='repositories'>
      <SearchBar
        sort={sort} 
        type={type}
        language={language}
        handleSort={handleSort}
        handleType={handleType} 
        handleLanguage={handleLanguage}
      />
      {isFiltered && <div className='filter-result'>Resultado do filtro</div> }
      {repositories && <RepositoriesList repositories={sortedRepositories} />}
      
    </main>
  )
}

export default Repositories;