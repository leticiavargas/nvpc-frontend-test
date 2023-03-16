import { useEffect, useMemo, useState } from 'react';
import api from 'services/api';
import { RepositoriesList, SearchBar } from 'components';
import './styles.scss';

function Repositories() {

  const [repositories, setRepositories] = useState();

  useEffect(() => {
    async function getAllRepo() {
      try {
        const response = await api.get('users/leticiavargas/repos?page=1&per_page=1000');
        setRepositories(response.data);
      } catch (error) {
        console.error(error);
      }
    }
    getAllRepo();
  },[]);


  

  return(
    <main className='repositories'>
      <SearchBar />
      {repositories && <RepositoriesList repositories={repositories} />}
      
    </main>
  )
}

export default Repositories;