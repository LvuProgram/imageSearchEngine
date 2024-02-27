const access_key = "gr_JOdBPzTR-8Dp3RRJnBYFZ_TbwRFf0_m0EIqdz5p0";


const searchForm = document.getElementById("search-form");
const searchBox = document.getElementById("search-box");
const searchResult = document.getElementById("search-result");
const showMoreBtn = document.getElementById("show-more-btn");


let keyword = "";
let page =  1;

async function searchImages(){
    keyword = searchBox.value;
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${access_key}&per_page=12`;

    const responce = await fetch(url);
    const data = await responce.json();

    if(page === 1){
        searchResult.innerHTML = "";
    }

    const results = data.results;
   results.map((result) =>{
    const image = document.createElement('img');
        image.src = result.urls.regular;
        const imageLink = document.createElement('a');
        imageLink.href= result.links.html;
        imageLink.target = "_blank";

        imageLink.appendChild(image);

        searchResult.appendChild(imageLink);
   })

   showMoreBtn.style.display = "block";
   showMoreBtn.addEventListener("click",function(){
            page++;
            searchImages();
   })
}




searchForm.addEventListener("submit",function(e){
      e.preventDefault();
      page = 1;
      searchImages();
})








