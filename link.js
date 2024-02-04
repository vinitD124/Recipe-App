
console.log("hello world")
async function caller(recName) {


    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${recName}`;

    try {
        const response = await fetch(url);
       if (response.ok){
      
        const result = await response.json();
        console.log()
        let resSrc = result.meals[0]
       console.log(resSrc)
       
        let img = document.querySelector(".img").setAttribute('src', resSrc.strMealThumb) 
        document.querySelector(".name").innerHTML = `Recipe Name: ${resSrc.strMeal}`
        document.querySelector(".catagory").innerHTML = `Catagory: ${resSrc.strCategory}`
        document.querySelector(".yt").setAttribute("href",resSrc.strYoutube )

       }
      
       
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}



document.querySelector(".btn").addEventListener("click",(e)=>{
    e.preventDefault()

    let recName = document.querySelector(".input").value

   

    caller(recName)
    
})