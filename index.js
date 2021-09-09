//import './css/common.css';
import './src/css/common.css'
import articleTpl from './src/templates/articleTpl.hbs'
import refs from './src/js/refs'
import ArticlesApiService from './src/js/api_service'
import LoadMoreBtn from './src/js/components/load-more-btn.js'


const articlesApiService = new ArticlesApiService;

const loadMoreBtn = new LoadMoreBtn({
    selector: '[data-action="load-more"]',
    hidden: true
} );

// 
loadMoreBtn.enable()

console.log ('loadMoreBtn = ', loadMoreBtn )

refs.searchForm.addEventListener('submit', submitSearchForm);
 loadMoreBtn.refs.button.addEventListener('click', onSearchMoreBtn)

function submitSearchForm(e) {  
    e.preventDefault();

   // refs.articlesConteiner.innerHTML = '';
    clearPhotosGallary();

    loadMoreBtn.show();
    loadMoreBtn.disable();

    articlesApiService.resetPage();//при новом запросе начинаем поиск со страницы №1
    articlesApiService.query = e.currentTarget.elements.query.value;
    articlesApiService.fetchArticle().then(articles =>
        {
            articlesMarkUp(articles);
            loadMoreBtn.enable();
        })

   
 }

     // Передаём в эту функцию массив с данными для их рендеринга
function articlesMarkUp(arr) {
    refs.articlesConteiner.insertAdjacentHTML('beforeend', articleTpl(arr))
}



// refs.searchMoreBtn.addEventListener('click', onSearchMoreBtn)

function onSearchMoreBtn() {
    loadMoreBtn.disable();
    articlesApiService.incerementPage();
    articlesApiService.fetchArticle()
        .then(articles => articlesMarkUp(articles))
        .then(() =>
        {
            scrollGallery();
            loadMoreBtn.enable();
        })
 }


 function clearPhotosGallary() {
    refs.articlesConteiner.innerHTML = '';
 }

 // функция прокрутки/склола экрана к кнопке "Загрузить ещё" при дополнительной загрузке карточек.
function scrollGallery() {
    console.log (' Сработала функция  scrollGallery(); ')
     //refs.searchMoreBtn.scrollIntoView({
    loadMoreBtn.refs.button.scrollIntoView({
     behavior: 'smooth',
     block: 'end',
  });
}

////+++



