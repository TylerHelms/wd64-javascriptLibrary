const baseURL = 'https://api.nytimes.com/svc/search/v2/articlesearch.json'; //1
const key = 'La5AwReQDHiLa89sebPATaD2L6lipqev'; //2
let url; //3

//SEARCH FORM
const searchTerm = document.querySelector('.search');
const startDate = document.querySelector('.start-date');
const endDate = document.querySelector('.end-date');
const searchForm = document.querySelector('form');
const submitBtn = document.querySelector('.submit');

//RESULTS NAVIGATION
const nextBtn = document.querySelector('.next');
const previousBtn = document.querySelector('.prev');
const nav = document.querySelector('nav');


//RESULTS SECTION
const section = document.querySelector('section');

nav.style.display = 'none';

let pageNumber = 0;
console.log('PageNumber:', pageNumber);
let displayNav = false;

//1                     //2   
searchForm.addEventListener('submit', fetchResults); 
nextBtn.addEventListener('click', nextPage); //3
previousBtn.addEventListener('click', previousPage); //3    
     

//1
function fetchResults(e) {
    e.preventDefault();
    // Assemble the full URL
    url = baseURL + '?api-key=' + key + '&page=' + pageNumber + '&q=' + searchTerm.value; //3
    console.log("URL:", url); //4
    }
                      
function nextPage(){
console.log("Next button clicked");
} //5
                      
function previousPage(){
console.log("Next button clicked");
} //5


function fetchResults(e) {
    e.preventDefault(); //1
    url = baseURL + '?api-key=' + key + '&page=' + pageNumber + '&q=' + searchTerm.value;  
}

function fetchResults(e) {
    e.preventDefault();
  
    url = baseURL + '?api-key=' + key + '&page=' + pageNumber + '&q=' + searchTerm.value;
    if(startDate.value !== '') {
        console.log(startDate.value)
      url += '&begin_date=' + startDate.value;
    };
  
    if(endDate.value !== '') {
      url += '&end_date=' + endDate.value;
    };
    //1
    fetch(url)
      .then(function(result) {
      return result.json(); 
    }).then(function(json) {
       displayResults(json);
    });
  }

  function displayResults(json) {
    console.log("DisplayResults", json);
 };

 function displayResults(json) {
     while (section.firstChild) {
         section.removeChild(section.firstChild);
     }
    let articles = json.response.docs;

    if(articles.length === 10) {
        nav.style.display = 'block';
    } else {
        nav.style.dislay = 'none';
    }
    for(let i = 0; i < articles.length; i++) {
        let article = document.createElement('article');
        let heading = document.createElement('h2');
        let link = document.createElement('a');
        let img = document.createElement('img');
        let para = document.createElement('p');   
        let clearfix = document.createElement('div'); 
  
        let current = articles[i];
        console.log("Current:", current);
  
        link.href = current.web_url;
        link.textContent = current.headline.main;
  
        para.textContent = 'Keywords: '; 

        
        for(let j = 0; j < current.keywords.length; j++) {
          
          let span = document.createElement('span');   
          
          span.textContent += current.keywords[j].value + ' ';   
          
          para.appendChild(span);
        }

        if(current.multimedia.length > 0) {
            img.src = 'http://www.nytimes.com/' + current.multimedia[0].url;
            img.alt = current.headline.main;
        }
  
        
        clearfix.setAttribute('class','clearfix');
  
        
        article.appendChild(heading);
        heading.appendChild(link);
        article.appendChild(img);
        article.appendChild(para);
        article.appendChild(clearfix);
        section.appendChild(article);
    
      }
    }
 
    function nextPage(e) {
        pageNumber++; //1
        fetchResults(e);  //2
        console.log("Page number:", pageNumber); //3
     };

     function previousPage(e) {
        if(pageNumber > 0) { //1
          pageNumber--; //2
        } else {
          return; //3
        }
        fetchResults(e); //4
        console.log("Page:", pageNumber); //5
      
      };

  

 
