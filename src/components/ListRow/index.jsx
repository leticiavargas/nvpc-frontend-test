import { Tag }  from 'components';
import { FaRegStar, FaCodeBranch, FaBalanceScale } from 'react-icons/fa';
import './styles.scss';


function ListRow({ item }) {

  const tagTitle = item.private ? "Private" : "Public";

  return(
    <li className='list-row'>
      <header className='title'>
        <a href={ item.html_url } >{ item.name }</a>
        <Tag title={tagTitle} />
      </header>
      <div className='description'>
        { item.description }
      </div>
      <footer>
        <a className='info' href={ item.stargazers_url }>
          <FaRegStar className='icon' /> { item.stargazers_count } 
        </a>
        <a className='info' href={ item.forks_url }>
          <FaCodeBranch  className='icon'/> { item.forks_count }
        </a>
        <span><FaBalanceScale className='icon' /> { item.license?.name }</span>
        <span>Updated {item.updated_at} </span>
      </footer>
    </li>
  )
}

export default ListRow;