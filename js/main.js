// // ////////readystatechange///////
// // //ready.state = 0 //unsend
// // //ready.state = 1 // send
// // //ready.state = 2 // connect
// // //ready.state = 3 // Process
// // //ready.state = 4 // succes
// // //////////////////////////
// // //httpReq.status == 200 /// Done
// // //httpReq.status == 504 ///
// // //httpReq.status == 503 ///
let searchRecipe = document.getElementById("search")
let allRecipes = [];
let httpReq =new XMLHttpRequest();
httpReq.open("GET" , "https://forkify-api.herokuapp.com/api/search?q=pizza");
httpReq.send();
httpReq.addEventListener("readystatechange" , function(){
    if(httpReq.readyState == 4 && httpReq.status == 200)
    {
        allRecipes=  JSON.parse(httpReq.response).recipes
        displayAllRecipes()
    }
})

function displayAllRecipes(){
    let allRecipesBox = "";
    for(let i =0 ; i<allRecipes.length ; i++){
        allRecipesBox += `
    <div class="col-lg-3 col-md-6">
        <div class="card">
        <img src="${allRecipes[i].image_url}" alt="">
        <div class="card-body">
        <h5>${allRecipes[i].title}</h5>
        <p></p>
        <a href="${allRecipes[i].source_url}" class="btn btn-info">Go</a>
        </div>
        </div>
    </div>
        `
    }document.getElementById("recipes").innerHTML = allRecipesBox ;
}


// search 
function  searchRecipes(term) 
{
    var recipesSearch = ""; 
    for(var i = 0 ; i<allRecipes.length ; i++)
    {
        if(allRecipes[i].title.includes(term)==true)
        {
            recipesSearch += `
            <div class="col-lg-3 col-md-6">
                <div class="card">
                <img src="${allRecipes[i].image_url}" alt="">
                <div class="card-body">
                <h5>${allRecipes[i].title}</h5>
                <p></p>
                <a href="${allRecipes[i].source_url}" class="btn btn-info">Go</a>
                </div>
                </div>
            </div>
                `
            document.getElementById("recipes").innerHTML = recipesSearch ;
        }
    }
}
