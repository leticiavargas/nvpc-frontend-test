import { useEffect, useState } from 'react';
import api from 'services/api';
import { RepositoriesList } from 'components';
import './styles.scss';

function Repositories() {

  const [repositories, setRepositories] = useState();

  useEffect(() => {
    async function getAllRepo() {
      try {
        const response = await api.get('users/leticiavargas/repos');
        setRepositories(response.data);
      } catch (error) {
        console.error(error);
      }
    }
    getAllRepo();
  },[]);
  

  return(
    <div>
      Repositories
      ============
      {repositories && <RepositoriesList repositories={repositories} />}
      
    </div>
  )
}

export default Repositories;