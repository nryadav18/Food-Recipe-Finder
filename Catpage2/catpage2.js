
Object.entries(localStorage).map((ele)=>{
  for (var i of ele){
    state = i.split(',')
    if(state.length >= 3){
    }}})
const removee = (ind) =>{
  var key =""
    for( let i of ind){
    if(i !=','){
      key+=i
    }
    else{
      break
    }
  }
    localStorage.removeItem(key)
    // console.log(localStorage.length , user)
    var nr = document.getElementsByClassName('card');
    if(nr.length  == 1){
        location.href = "../CartPage/CartPage/Cartpage/cartpage.html";
      }
    fun()
}
const fun = () =>{
    // console.log(localStorage.length)
  var container = document.getElementsByClassName("card_container")[0];
  container.replaceChildren();
  var cnt = 0;
  var state;
  // const count = document.getElementById("card_container").chindren;
  // alert(count)
  Object.entries(localStorage).map((ele)=>{
    user = 0
    for (var i of ele){
      state = i.split(',')
      if(state.length >= 3){
        // console.log(st[1])
            var star = document.createElement("div");
            var n = parseInt(state[1])
            // console.log(typeof n)
    for(let k = 0 ; k  < n; k++){
        star.innerHTML +=  `<i class="fa-solid fa-star"></i>`;
     }

    var card = document.createElement("div");
    card.setAttribute("class" , "card")

    var photo = document.createElement("div");
    photo.setAttribute("class","photo");

    var img = document.createElement("img");
    img.setAttribute("src",`${state[3]}`);

    var cover = document.createElement("div");
    cover.setAttribute("class","cover");

    var i = document.createElement("i");
    i.setAttribute("class","fa-regular fa-heart")
    i.setAttribute("onclick", `removee('${state}')`);

    var content = document.createElement("div");
    content.setAttribute("class" , "content");

    var left = document.createElement("div");
    left.setAttribute("class" , "left");

    var right = document.createElement("div");
    right.setAttribute("class" , "right");

    var stars = document.createElement("div");
    stars.setAttribute("class" , "stars");

    for(let k = 0 ; k < n ; k++){
        let i = document.createElement("i");
        i.setAttribute("class" , "fa-solid fa-star")
        stars.appendChild(i);
    }

    var name = document.createElement("p");
    name.setAttribute("class" , "name");
    name.innerHTML = state[0];

    var region = document.createElement("p");
    region.setAttribute("class" , "region");
    region.innerHTML = state[2];
    var button = document.createElement("button");
    button.setAttribute("class" , "learn-more");
    // console.log(ele.name)
    
    // button.innerHTML = `<span aria-hidden="true" class="circle">
    //                     <span class="icon arrow"></span>
    //                     </span>
    //                     <span class="button-text">Open Now</span>`
      
      
    // button.addEventListener('click', function(state){
    //   sessionStorage.setItem("check" , true)
    //   console.log(state)
    //   sessionStorage.setItem(state[0] , state);
    //   // location.href = "../RecipeViewPageOverAll/RecipeViewPage/RecipeViewPage.html";
    // });

    button.innerHTML = `<span aria-hidden="true" class="circle">
                        <span class="icon arrow"></span>
                        </span>
                        <span class="button-text">Open Now</span>`
      console.log(ele)
      button.addEventListener('click' , function(){
        console.log(ele[0])
      sessionStorage.setItem("check" , true)
      sessionStorage.setItem(ele[0], ele);
      location.href = "../RecipeViewPageOverAll/RecipeViewPage/RecipeViewPage.html";
});
    
    var na = document.createElement("div");
    na.setAttribute("class" , "name")
    na.innerHTML = state[0];
    var st = document.createElement("div");
    st.setAttribute("class","stars");
    for(let k = 0 ; k < n ; k++){
        st.innerHTML += `<i class="fa-solid fa-star" style = "color : white"></i>`;
    }

    cover.appendChild(na);
    cover.appendChild(st);
    cover.appendChild(region);
    cover.appendChild(button);

    left.appendChild(name);
    left.appendChild(img);
    left.appendChild(stars)
    content.appendChild(left);
    content.appendChild(right);
    // content.appendChild(button)

    container.appendChild(card);
    photo.appendChild(img);
    card.appendChild(cover);
    photo.appendChild(i);
    card.appendChild(photo);
    card.appendChild(content);
    cnt++;
        
      }

    }
  })
}