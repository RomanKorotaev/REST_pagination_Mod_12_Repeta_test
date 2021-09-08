//import './css/common.css';
import './src/css/common.css'
import articleTpl from './src/templates/articleTpl.hbs'
import refs from './src/js/refs'
import ArticlesApiService from './src/js/api_service'


const articlesApiService = new ArticlesApiService;



refs.searchForm.addEventListener ('submit', submitSearchForm)

function submitSearchForm(e) {  
    e.preventDefault();

   // refs.articlesConteiner.innerHTML = '';
    clearPhotosGallary();
    articlesApiService.resetPage();//при новом запросе начинаем поиск со страницы №1
    articlesApiService.query = e.currentTarget.elements.query.value;
    articlesApiService.fetchArticle().then (articles => articlesMarkUp (articles))
 }

     // Передаём в эту функцию массив с данными для их рендеринга
function articlesMarkUp(arr) {
    refs.articlesConteiner.insertAdjacentHTML('beforeend', articleTpl(arr))
}



refs.searchMoreBtn.addEventListener('click', onSearchMoreBtn)

function onSearchMoreBtn() {
    articlesApiService.incerementPage();
     articlesApiService.fetchArticle().then (articles => articlesMarkUp (articles)).then (() =>  scrollGallery() )
 }


 function clearPhotosGallary() {
    refs.articlesConteiner.innerHTML = '';
 }

 // функция прокрутки/склола экрана к кнопке "Загрузить ещё" при дополнительной загрузке карточек.
function scrollGallery() {
     refs. searchMoreBtn.scrollIntoView({
     behavior: 'smooth',
     block: 'end',
  });
}