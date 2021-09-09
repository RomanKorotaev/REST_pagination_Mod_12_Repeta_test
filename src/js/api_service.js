const options = {
    headers: {
         Authorization: '0dc0d8bf7bcd4ecca326d964568a1608'
        }
    }
    
// const BASE_URL = `https://newsapi.org/v2/everything?q=${this.queryItem}&language=en&pageSize=9&page=1`
const BASE_URL = 'newsapi.org/v2'

class ArticlesApiService {
    constructor() {
        this.queryItem = '';
         this.page = 1;
    };


    fetchArticle () {
      return fetch(`https://${BASE_URL}/everything?q=${this.queryItem}&language=en&pageSize=8&page=${this.page}`, options)
        .then(response => response.json())
        // .then(console.log)
        .then(result => {
            //console.log(result.articles);
           return result.articles
        })
    .catch(error => console.log(error))
    }

  get query() {
         return this.queryItem;
     }
     
     set query(newQuery) {
         this.queryItem = newQuery;
     }

     incerementPage() {
         this.page += 1;
      }

     resetPage() {
         this.page = 1;
     }
}

export default ArticlesApiService;