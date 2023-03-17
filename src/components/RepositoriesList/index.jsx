import { ListRow } from 'components';
import './styles.scss';

function RepositoriesList({ repositories }) {

  if (!repositories.length) {
    return(
      <div className='any-repository'>doesn’t have any repositories that match.</div>
    )
  } else {
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
}

export default RepositoriesList;