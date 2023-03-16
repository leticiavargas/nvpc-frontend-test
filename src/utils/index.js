import api from 'services/api';

export const TYPES = ['all','public', 'private', 'sources', 'fork', 'archived'];
export const SORT = ['last_updated', 'name', 'stars'];

export async function getAllRepo() {
  try {
    const response = await api.get('users/leticiavargas/repos?per_page=100&sort=updated&direction=desc');
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

export async function getRepoByType(type) {
  let argument = '';
  
  switch(type) {
    case "archived":
      argument = 'fork:true+archived:true';
      break;
    case "fork":
      argument = "fork:only";
      break;
    case "private":
      argument= "fork:true+is:private";
      break;
    case "public":
      argument = "fork:true+is:public";
      break;
    case "source":
      argument = "";
      break;
    default:
      argument = "";
  }
  
  try {
    const response = await api.get(`search/repositories?per_page=100&q=user:leticiavargas+${argument}`);
    return response.data.items;
  } catch (error) {
    console.error(error);
  }
}