const baseURL = 'https://api.nytimes.com/svc/search/v2/articlesearch.json'; //1
const key = 'La5AwReQDHiLa89sebPATaD2L6lipqev'; // lets NYT know which user is accessing their API
let url; //3 // we'll use this variable to make a dynamic search url later; making a url a gloabl variable to use anywhere 

//The querySelector() method returns the first element within the document that matches the specifies selector or group of selectors. If no matches are found, null is returned.

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
     

//1     event handling function (receives object containing properties aka variables and methods aka functions)
function fetchResults(e) {
    e.preventDefault(); // bc in this case we submit form to GET not POST
    // Assemble the full URL
    url = 
    baseURL + // refers back to base url we set in line 1 
    '?api-key=' + //label whats tp follow 
    key + // actual key info 
    '&page=' + // label pg 
    pageNumber + // pg data
    '&q=' + //query aka search 
    searchTerm.value; // creates versatile/changeable query string: study ?, &, and &q- when possible! value is a built in. 
    console.log("URL:", url); //4 just logs string to see it 
    }
                      
// function nextPage(){
// console.log("Next button clicked");
// } //5
                      
// function previousPage(){
// console.log("Next button clicked");
// } //5


function fetchResults(e) {
    e.preventDefault(); //1
    url = baseURL + '?api-key=' + key + '&page=' + pageNumber + '&q=' + searchTerm.value;  
}

function fetchResults(e) {
    e.preventDefault();
  
    url = baseURL + '?api-key=' + key + '&page=' + pageNumber + '&q=' + searchTerm.value;
    if(startDate.value !== '') {
        console.log(startDate.value)
      url += '&begin_date=' + startDate.value; //value is built in
    };
  
    if(endDate.value !== '') {
      url += '&end_date=' + endDate.value;
    };

    //1
    fetch(url) // starting a promise here // until we know our url, we can't jasonify it?
      .then(function(result) {    // find the result
      return result.json(); 
    })
    .then(function(json) {
       displayResults(json);   // display the result 
    });
  }

  function displayResults(json) {
    console.log("DisplayResults", json);
 };

 function displayResults(json) { 
   //while (aka "do while") is a conditional statement: go back reread this module section // the while will clear any search results before new search results are added 
     while (section.firstChild) {  // aka while there is a first child full of 10 articles
         section.removeChild(section.firstChild); // clears previous results/child elements before new results are added if you don't refresh between searches 
     } // ^section refers to HTML 

    let articles = json.response.docs; 
    if(articles.length === 10) {
        nav.style.display = 'block';  // shows the nav display if 10 items are in the array 
    } else {
        nav.style.dislay = 'none'; // hides the nav display if less than 10 items are in the array - is this where we hide the page buttons? 
    }

    if (articles.length ===0) {

    }else {  
      for (let i = 0; i < articles.length; i++) {
        let article = document.createElement('article');
        let heading = document.createElement('h2');
        let link = document.createElement('a');
        let img = document.createElement('img');
        let para = document.createElement('p');   
        let clearfix = document.createElement('div'); 
  
        let current = articles[i];
        console.log("Current:", current);
  
        link.href = current.web_url; //current is the object in API and web url is an attribute in that array 
        link.textContent = current.headline.main;   
  
        para.textContent = 'Keywords: '; 

        
        for(let j = 0; j < current.keywords.length; j++) {
          
          let span = document.createElement('span');   
          
          span.textContent += current.keywords[j].value + ' ';   
          
          para.appendChild(span);
        }

        if(current.multimedia.length > 0) {
          //basically if an image exists for an aritcle 
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

    }     
