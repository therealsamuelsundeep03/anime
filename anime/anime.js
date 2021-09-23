//func to return home page.
home=()=>{
    let row= document.getElementsByClassName('row')[0];
    row.innerHTML="";
    animeonscreen(24,'SCI_FI');
    animeonscreen(10,'FANTASY');
    animeonscreen(4,'COMEDY');
    animeonscreen(22,'ROMANCE');
}
//to display anime on screen
async function animeonscreen(num,kind){
   try{
    let resp= await fetch(`https://api.jikan.moe/v3/search/anime?q=Boku&page=1&genre=${num}&genre_exclude=0&limit=${10}`);
    let data= await resp.json();
    let obj= Object.entries(data)[3][1];
    // console.log(obj);
    let genre= document.createElement('h3');
    genre.className= "genre";
    genre.innerHTML= kind; 
    let row= document.getElementsByClassName('row')[0];
    let posters= document.createElement('div');
    posters.className= "posters";
    obj.forEach(element => {
       let col= document.createElement('div');
       col.className= "col-md-2";
       let anc= document.createElement('a');
       anc.className= "anc";
       anc.href= element.url;
       anc.target= "_blank";
       let img= document.createElement('img');
       img.className= "card-img-top";
       img.src= element.image_url;
       anc.append(img);
       col.append(anc);
       posters.append(col);
       row.append(genre,posters);
    });
   }
   catch(error){
    //  var p=document.createElement('p');
    //  p.innerHTML="Error in connection";
    //  document.body.append(p);
    console.log(' Network error')
   }
} 
animeonscreen(24,"SCI_FI");
animeonscreen(10,"FANTASY")
animeonscreen(4,"COMEDY");
animeonscreen(22,"ROMANCE");
//--end of anime on screen
//get anime name.
animename=()=>{
    let name= document.getElementById('name').value;
    animeonsearch(name);
    document.querySelector('form').reset();
}
//getting anime on search.
async function animeonsearch(search){
try{
    let resp= await fetch(`https://api.jikan.moe/v3/search/anime?q=${search}&page=1&limit=18`);
    let data= await resp.json();
    let obj= Object.entries(data)[3][1];
    // console.log(obj);
    let animenam= document.createElement('h3');
    animenam.className= "animenam";
    animenam.innerHTML= search; 
    let row= document.getElementsByClassName('row')[0];
    row.innerHTML="";
    let div= document.createElement('div');
    div.className= "searchanime"
    obj.forEach(element => {
       let col= document.createElement('div');
       col.className= "col-md-3";
       let anc= document.createElement('a');
       anc.className= "anc";
       anc.href= element.url;
       anc.target= "_blank";
       let img= document.createElement('img');
       img.className= "card-img-top";
       img.src= element.image_url;
       anc.append(img);
       col.append(anc);
       row.append(animenam,col);
    });
}
catch(error){
console.log("No results found");
} 
}
//end of anime on search 
//top anime
async function topanime(hentai){ 
   try{
    let resp= await fetch(`https://api.jikan.moe/v3/top/anime/1/${hentai}`);
    let data= await resp.json();
    let obj= Object.entries(data)[3][1];
    console.log(obj);
    let animenam= document.createElement('h3');
    animenam.className= "animenam";
    animenam.innerHTML= hentai; 
    let row= document.getElementsByClassName('row')[0];
    row.innerHTML="";
    let div= document.createElement('div');
    div.className= "searchanime"
    for(let i=0;i<18;i++){
        let col= document.createElement('div');
        col.className= "col-md-3";
        let anc= document.createElement('a');
        anc.className= "anc";
        anc.href= obj[i].url;
        anc.target= "_blank";
        let img= document.createElement('img');
        img.className= "card-img-top";
        img.src= obj[i].image_url;
        anc.append(img);
        col.append(anc);
        row.append(animenam,col);
    }
   }
   catch(error){
    console.log("Network Error")
   }
} 
//end of top anime.
