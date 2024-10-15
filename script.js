let searchInputEl = document.getElementById("searchInput");

let searchResultsEl = document.getElementById("searchResults");

let spinnerEl = document.getElementById("spinner");

function createAndAppendSearchResult(result) {
  let { link, title, description } = result;

  let resultItemEl = document.createElement("div");
  resultItemEl.classList.add("result-item");

  let titleEl = document.createElement("a");
  titleEl.href = link;
  titleEl.target = "_blank";
  titleEl.textContent = title;
  titleEl.classList.add("result-title");
  resultItemEl.appendChild(titleEl);

  let titleBreakEl = document.createElement("br");
  resultItemEl.appendChild(titleBreakEl);

  let urlEl = document.createElement("a");
  urlEl.classList.add("result-url");
  urlEl.href = link;
  urlEl.target = "_blank";
  urlEl.textContent = link;
  resultItemEl.appendChild(urlEl);

  let linkBreakEl = document.createElement("br");
  resultItemEl.appendChild(linkBreakEl);

  let descriptionEl = document.createElement("p");
  descriptionEl.classList.add("link-description");
  descriptionEl.textContent = description;
  resultItemEl.appendChild(descriptionEl);

  searchResultsEl.appendChild(resultItemEl);
}

function displayResults(searchResults) {
  spinnerEl.classList.add("d-none");

  for (let result of searchResults) {
    createAndAppendSearchResult(result);
  }
}

function searchWikipedia(event) {
  if (event.key === "Enter") {

    spinnerEl.classList.remove("d-none");
    searchResultsEl.textContent = "";

    let searchInput = searchInputEl.value;
    let url = "https://apis.ccbp.in/wiki-search?search=" + searchInput;
    let options = {
      method: "GET"
    };

    fetch(url, options)
      .then(function (response) {
        return response.json();
      })
      .then(function (jsonData) {
        let { search_results } = jsonData;
        displayResults(search_results);
      });
  }
}

searchInputEl.addEventListener("keydown", searchWikipedia);




















































































































































































































































///////////////////code is here////////////////////////////////////////////////////

/*let searchInputEl = document.getElementById("searchInput");
let searchResultsEl=document.getElementById("searchResults");
let spinnerEl=document.getElementById("spinner");



//creating createandappendsearch function
function createAndAppendSearchResult(result){
    let {title,link,description}=result;
    //div container--result-item
    let resultItemEl=document.createElement("div");
    resultItemEl.classList.add("result-item");

    searchResultsEl.appendChild(resultItemEl);
    //Anchor title--result-title
    let resultTitleEl=document.createElement("a");
    resultTitleEl.classList.add("result-title");
    resultTitleEl.textContent=title;
    resultTitleEl.href=link;
    resultTitleEl.target="_blank";
    resultItemEl.appendChild(resultTitleEl);
    //title break
    let titleBreakEl=document.createElement("br");
    resultItemEl.appendChild(titleBreakEl);
    //anchor url--results
    let urlEl=document.createElement("a");
    urlEl.classList.add("result-url");
    urlEl.href=link;
    urlEl.target="_blank";
    urlEl.textContent=link;
    resultItemEl.appendChild(urlEl);
    //break
    let lineBreakEl=document.createElement("br");
    resultItemEl.appendChild(lineBreakEl);

    //paragraph descripto
    let descriptionEl=document.createElement("p");
    descriptionEl.classList.add("line-description");
    descriptionEl.textContent=description;
    resultItemEl.appendChild(descriptionEl);
}

///creating search input function
function displayResults(searchResults){
    spinnerEl.classList.toggle("d-none");
    for(let result of searchResults){
        createAndAppendSearchResult(result);
    }
}
// Creating searchWikipedia function
function searchWikipedia(event) {
    if (event.key === "Enter") {
        searchResultsEl.textContent="";
        spinnerEl.classList.toggle("d-none");
        let searchInputValue = searchInputEl.value;
        // HTTP request
        let url = "https://apis.ccbp.in/wiki-search?search=" + searchInputValue;
        let options = {
            method: "GET"
        };
        fetch(url, options)
        .then(function(response) {
            return response.json();
        })
        .then(function(jsonData) {
            console.log(jsonData);
        })
        .then(function(jsonData){
            let {search_results}=jsonData;
            displayResults(search_results);
        })
        .catch(function(error) {
            console.error("Error fetching data: ", error);
        });
    }
}
searchInputEl.addEventListener('keydown', searchWikipedia);
*/