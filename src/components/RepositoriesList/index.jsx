import { ListRow } from 'components';
import './styles.scss';

function RepositoriesList({ repositories }) {

  return(
    <ul>
      {repositories.map((repo) => (
        <ListRow
          key={repo.id}
          item={repo} />
      ) )}
    </ul>
  )
}

export default RepositoriesList;