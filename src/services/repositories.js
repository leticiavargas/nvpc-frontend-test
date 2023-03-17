import api from './api';

export async function getRepositories(type, query, sort='updated-desc', language) {
  let argument = '';
  
  if (query) {
    argument= `${encodeURIComponent(query)}+in:name+`
  }

  if (language) {
    argument += `language:${encodeURIComponent(language)}+`
  }

  switch(type) {
    case "all":
      argument += 'fork:true';
      break;
    case "archived":
      argument += 'fork:true+archived:true';
      break;
    case "fork":
      argument += "fork:only";
      break;
    case "private":
      argument += "fork:true+is:private";
      break;
    case "public":
      argument += "fork:true+is:public";
      break;
    case "source":
      argument += "";
      break;
  }
  
  const response = await api.get(`search/repositories?per_page=100&q=user:leticiavargas+sort:${sort}+${argument}`);
  return response.data.items;
  
}