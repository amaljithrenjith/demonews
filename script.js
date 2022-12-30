// varibles
const generalBtn = document.getElementById("general");
const buinessBtn = document.getElementById("business");
const sportsBtn = document.getElementById("sports");
const technologyBtn = document.getElementById("technology");
const entertainmentBtn = document.getElementById("entertainment");
const serchBtn = document.getElementById("serch");

const newsQuery= document.getElementById("newsQuery");
const newsType = document.getElementById("newsType");
const newsDetails = document.getElementById("newsDetails");


// ARAY

var newsDataArr = [];

//api

const API_KEY = "4a0e6c03fcb548eb9558ea1ae2ce9c0b"
const HEADLINES_NEWS = "https://newsapi.org/v2/top-headlines?country=in&apiKey="
const GENERAL_NEWS =  "https://newsapi.org/v2/top-headlines?country=in&category=general&apiKey="
const BUSINESS_NEWS = "https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey="
const SPORTS_NEWS = "https://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey="
const TECHNOLOGY_NEWS = "https://newsapi.org/v2/top-headlines?country=in&category=technology&apiKey="
const ENTERTAINMENT_NEWS = "https://newsapi.org/v2/top-headlines?country=in&category=entertainment&apiKey="
const SERCH_NEWS = "https://newsapi.org/v2/everything?q=bitcoin&apiKey="

window.onload = function (){
    newsType.innerHTML = "<h4>Headlines</h4>";
    fetchheadlines()
};


generalBtn.addEventListener("click",function(){
    newsType.innerHTML = "<h4>General News</h4>";
    fetchGeneralNews();

});

buinessBtn.addEventListener("click",function(){
    newsType.innerHTML = "<h4>Business news </h4>";
    fetchBusinessNews();
});

sportsBtn.addEventListener("click",function(){
    newsType.innerHTML = "<h4>Sports News</h4>";
    fetchSportsNews();
});

technologyBtn.addEventListener("click",function(){
    newsType.innerHTML = "<h4>Technology News</h4>";
    fetchTechnologyNews();
});

entertainmentBtn.addEventListener("click",function(){
    newsType.innerHTML = "<h4>Entertainment News</h4>";
    fetchEntertainmentNews();
});
serchBtn.addEventListener("click",function(){
    newsType.innerHTML = "<h4>serch : "+newsQuery.value+"</h4>";
    fetchQureyNews();
});

const fetchheadlines = async () => {
    const response = await fetch(HEADLINES_NEWS+API_KEY);
    newsDataArr = [];
    if (response.status >=200 && response.status < 300) {

        const myJason = await response.json();
        newsDataArr = myJason.articles;

    }else{
        //handle error 
        console.log(response.status,response.statusText);
    }

    displayNews();
}


const fetchGeneralNews = async () => {
    const response = await fetch(GENERAL_NEWS+API_KEY);
    newsDataArr = [];
    if (response.status >=200 && response.status < 300) {

        const myJason = await response.json();
        newsDataArr = myJason.articles;

    }else{
        //handle error 
        console.log(response.status,response.statusText);
    }

    displayNews();
}

const fetchBusinessNews = async () => {
    const response = await fetch(BUSINESS_NEWS+API_KEY);
    newsDataArr = [];
    if (response.status >=200 && response.status < 300) {

        const myJason = await response.json();
        newsDataArr = myJason.articles;

    }else{
        //handle error
        console.log(response.status,response.statusText); 
    }

    displayNews();
}
const fetchSportsNews = async () => {
    const response = await fetch(SPORTS_NEWS+API_KEY);
    newsDataArr = [];
    if (response.status >=200 && response.status < 300) {

        const myJason = await response.json();
        newsDataArr = myJason.articles;

    }else{
        //handle error 
        console.log(response.status,response.statusText);
    }

    displayNews();
}
const fetchTechnologyNews = async () => {
    const response = await fetch(TECHNOLOGY_NEWS+API_KEY);
    newsDataArr = [];
    if (response.status >=200 && response.status < 300) {

        const myJason = await response.json();
        newsDataArr = myJason.articles;

    }else{
        //handle error 
        console.log(response.status,response.statusText);
    }

    displayNews();
}

const fetchEntertainmentNews = async () => {
    const response = await fetch(ENTERTAINMENT_NEWS + API_KEY);
    newsDataArr = [];
    if (response.status >=200 && response.status < 300) {

        const myJason = await response.json();
        console.log(myJason);
        newsDataArr = myJason.articles;

    }else{
        //handle error
        console.log(response.status,response.statusText); 
    }

    displayNews();
}

const fetchQureyNews = async () => {
    if (newsQuery.value== null)
         return;
    

    const response = await fetch(SERCH_NEWS+encodeURIComponent(newsQuery+value)+"&apikey="+API_KEY);
    newsDataArr = [];
    if (response.status >= 200 && response.status < 300){

        const myJason = await response.json();
        newsDataArr = myJason.articles;


    }else{
        //handle error
        console.log(response.status,response.statusText);


    }
    displayNews();
}

function displayNews() {

    newsDetails.innerHTML = "";

    if (newsDataArr.length == 0){
        newsDetails.innerHTML = "<h5>no data found .</h5>"
        return ;
    }

    newsDataArr.forEach(news =>{

        var date = news.publishedAt.split("T");

        var col = document.createElement('div');
        col.className ="col-sm-12 col-md-4 col-lg-3 p-2";

        var card =document.createElement('div');
        card.className = "p-2";

        var image = document.createElement('img');
        image.setAttribute("height","matchparnt");
        image.setAttribute("width","100%");
        image.src = news.urlToImage;

        var cardBody = document.createElement("div");


        var newsHeading = document.createElement('h5');
        newsHeading.className = "card-title";
        newsHeading.innerHTML = news.title;

        var dateHeading = document.createElement("h6");
        dateHeading.className = "text-primary"
        dateHeading.innerHTML = date[0];

        var discription = document.createElement('p')
        discription.className = "text-muted";
        discription.innerHTML =news.description;

        var link = document.createElement('a');
        link.className = "btn btn-dark";
        link.setAttribute("target","_blank");
        link.href = news.url;
        link.innerHTML = 'Read more';

        cardBody.appendChild(newsHeading);
        cardBody.appendChild(dateHeading);
        cardBody.appendChild(discription);
        cardBody.appendChild(link);

        card.appendChild(image);
        card.appendChild(cardBody);

        col.appendChild(card);

        newsDetails.appendChild(col);


    })

}