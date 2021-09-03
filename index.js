//import './css/common.css';
import './src/css/common.css'


const refs = {
    searchForm: document.querySelector('.js-search-form'),
    articlesConteiner: document.querySelector('.js-articles-container')
}



const options = {
    headers: {
        Authorization: '0dc0d8bf7bcd4ecca326d964568a1608'
    }
}

const url = 'https://newsapi.org/v2/everything?q=cat&language=en&pageSize=5&page=1'



fetch(url, options)
    .then(response => response.json())
    .then(console.log)
    .catch(error => console.log(error))