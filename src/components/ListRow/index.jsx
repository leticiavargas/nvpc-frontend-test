import { Tag }  from 'components';
import { FaRegStar, FaCodeBranch, FaBalanceScale, FaCircle } from 'react-icons/fa';
import './styles.scss';


function ListRow({ item }) {

  const tagTitle = item.private ? "Private" : "Public";

  return (
    <li className='list-row'>
      <header className='title'>
        <a href={ item.html_url } >{ item.name }</a>
        <Tag title={tagTitle} />
      </header>
      <div className='description'>
        { item.description }
      </div>
      <footer>
        {item.language &&
          <span><FaCircle className='icon'/> {item.language}</span>
        }
        {item.stargazers_count > 0 && 
          <a className='info' href={ item.stargazers_url }>
            <FaRegStar className='icon' /> { item.stargazers_count } 
          </a>
        }
        { item.forks_count > 0 &&
          <a className='info' href={ item.forks_url }>
            <FaCodeBranch  className='icon'/> { item.forks_count }
          </a>
        }
        { item.license !== null && 
          <span><FaBalanceScale className='icon' /> { item.license?.name }</span>
        }
        <span>Updated {new Date(item.updated_at).toLocaleString()} </span>
      </footer>
    </li>
  )
}

export default ListRow;
