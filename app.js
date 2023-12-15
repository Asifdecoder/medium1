var url = 'https://newsapi.org/v2/everything?' +
          'q=kashmir&' +
          'from=2023-12-14&' +
          'sortBy=popularity&' +
          'apiKey=c465b20172364b58b034eb85e189c24e';

var req = new Request(url);

fetch('https://newsapi.org/v2/top-headlines?country=us&apiKey=c465b20172364b58b034eb85e189c24e')
    .then(function(response) {
       return response.json();
       
    })
    .then((data)=>{
        console.log(data.articles)
        for(i of data.articles){
            console.log(i)
        }
    })
    .catch((err)=>{
        console.log(err)
    })


   
    // GET https://newsapi.org/v2/top-headlines?country=us&apiKey=c465b20172364b58b034eb85e189c24e
