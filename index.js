//import './css/common.css';
import './src/css/common.css'
import articleTpl from './src/templates/articleTpl.hbs'


const refs = {
    searchForm: document.querySelector('.js-search-form'),
    searchInput:  document.getElementById ('searchQuery'),
    articlesConteiner: document.querySelector('.js-articles-container')
}

let queryItem = ''

//  console.log(' searchInput :',  refs.searchInput.value);





// Делаем запрос на бекенд и получаем массив с данными
function getArticles(queryItem) {
const options = {
    headers: {
        Authorization: '0dc0d8bf7bcd4ecca326d964568a1608'
    }
    }
    
const url = `https://newsapi.org/v2/everything?q=${queryItem}&language=en&pageSize=9&page=1`

    
    fetch(url, options)
        .then(response => response.json())
        // .then(console.log)
        .then(result => {
            console.log(result.articles);
            articlesMarkUp(result.articles)
        })
        .catch(error => console.log(error))
}

    // Передаём в эту функцию масси в с данными для их рендеринга
function articlesMarkUp(arr) {
    refs.articlesConteiner.insertAdjacentHTML('beforeend', articleTpl(arr))
}





refs.searchForm.addEventListener ('click', clickOnSearchForm)

function clickOnSearchForm(e) {  
    e.preventDefault();
    console.log(' searchInput.value :', refs.searchInput.value);
    console.log('  e.currentTarget.elements.query.value :',  e.currentTarget.elements.query.value);
    queryItem = e.currentTarget.elements.query.value
    getArticles(queryItem)
 }
