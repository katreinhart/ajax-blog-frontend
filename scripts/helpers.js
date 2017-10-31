const BASE_URL = 'https://kat-ajax-blog-backend.herokuapp.com'
const HOMEPAGE = window.location.includes('localhost') 
               ? 'http://localhost:8080' 
               : 'http://kat-ajax-blog.surge.sh'

const getParamsFromString = (string) => {
  const params = {}
  const args = string.split('&')
  args[0] = args[0].slice(1)
  args.forEach((arg) => {
    const vals = arg.split('=')
    params[vals[0]] = vals[1]
  })
  return params;
}
