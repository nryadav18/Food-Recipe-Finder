
var check = true;
var category_data={
    "Biryani's" : [0 , "../assets/images/Categories/biryani.jpg"],
    "Starter's" : [1 , "../assets/images/Categories/starters.jpeg"],
    "Dessert's" : [2 , "../assets/images/Categories/Desserts.jpg" ],
    "Burger's"  : [3 , "https://hips.hearstapps.com/hmg-prod/images/turkey-burger-lead-6481ed42f294e.jpg?crop=0.669xw:1.00xh;0.115xw,0&resize=980:*"],
    "Non-Veg" : [4 , "https://images.immediate.co.uk/production/volatile/sites/2/2021/05/Burger-fdbcbf4.jpg?quality=90&webp=true&resize=2200,1465"],
    "Biryani" : [0 , "../assets/images/Categories/biryani.jpg"],
    "Starter" : [1 , "../assets/images/Categories/starters.jpeg"],
    "Dessert" : [2 , "../assets/images/Categories/Desserts.jpg" ],
    "Burger"  : [3 , "https://hips.hearstapps.com/hmg-prod/images/turkey-burger-lead-6481ed42f294e.jpg?crop=0.669xw:1.00xh;0.115xw,0&resize=980:*"],
    "Non-VegC" : [4 , "https://images.immediate.co.uk/production/volatile/sites/2/2021/05/Burger-fdbcbf4.jpg?quality=90&webp=true&resize=2200,1465"],
    "Biryani" : [0 , "../assets/images/Categories/biryani.jpg"],
    "Starter" : [1 , "../assets/images/Categories/starters.jpeg"],
    "Dessert" : [2 , "../assets/images/Categories/Desserts.jpg" ],
    "Burger"  : [3 , "https://hips.hearstapps.com/hmg-prod/images/turkey-burger-lead-6481ed42f294e.jpg?crop=0.669xw:1.00xh;0.115xw,0&resize=980:*"],
    "Non-Veg" : [4 , "https://images.immediate.co.uk/production/volatile/sites/2/2021/05/Burger-fdbcbf4.jpg?quality=90&webp=true&resize=2200,1465"],
  "Starter" : [1 , "../assets/images/Categories/starters.jpeg"],
    "Dessert" : [2 , "../assets/images/Categories/Desserts.jpg" ],
    "Burger"  : [3 , "https://hips.hearstapps.com/hmg-prod/images/turkey-burger-lead-6481ed42f294e.jpg?crop=0.669xw:1.00xh;0.115xw,0&resize=980:*"],
    "Non-Veg" : [4 , "https://images.immediate.co.uk/production/volatile/sites/2/2021/05/Burger-fdbcbf4.jpg?quality=90&webp=true&resize=2200,1465"],
  }
// console.log(category_data)

var item_data = [
      [
        {
          src: "https://vismaifood.com/storage/app/uploads/public/b3b/132/dc7/thumb__700_0_0_0_auto.jpg",
          stars:5,
          name : "Avakai Chicken Biryani",
          region:"",
        },
        {
          src  : "https://img.freepik.com/premium-photo/vibrant-photo-taste-tradition-heavenly-biri_1177965-4010.jpg",
          stars : 5,
          name :"Mutton Biryani ",
        },
        {
          src : "https://lh3.googleusercontent.com/EJvV6DVonRsslbtKliaaTg8FaTym80F1-mNKU_XU0o1QekSrqPGGg27nWdkapkX2RCD-9ckDS4uWKEAOBX7Mh69g0Qg=w1200-rw",
          stars : 5,
          name :"Pot Biryani",
        },
        {
          src : "https://img.freepik.com/free-photo/close-up-appetizing-ramadan-meal_23-2151182540.jpg",
          stars : 5,
          name : "Chicken Dum Biryani",
          region:"Hyderabad"
        },
        {
          src:"https://img.freepik.com/premium-photo/photo-bowl-delicious-chicken-biriyani-pot_1025753-27867.jpg",
          stars : 4,
          name :"Butter Chicken Biryani",
          region:"Kerala"
        },
        
        {
          src:"https://img.freepik.com/premium-photo/vibrant-colorful-biryani-cooked-with-variety-spices-herbs_979495-6091.jpg",
          stars:4,
          name : "Chicken 65 Biryani",
          region:"Vizag"
        },
        {
          src : "https://www.sandyathome.com/wp-content/uploads/2023/04/gongura-shrimp-biryani-500x500.jpg",
          stars : 4,
          name : "Gongura Royalla Biryani",
          region:"Vijayawada"
        },
        {
          src : "https://ruralkingz.com/wp-content/uploads/2020/08/fried.jpg",
          stars : 4,
          name : "Chicken Fry Piece Biryani",
          region:"Banglore"
        },
        {
          src : "https://img.freepik.com/premium-photo/spicy-indian-chicken-biryani-captured-stunning-food-photo-against-black-backdrop_117038-27113.jpg" , 
          stars : 5 ,
          name : "Chicken Lollipop Biryani",
          region:"Hyderabad"
        },
        {
          src : "https://i.pinimg.com/originals/24/ac/bb/24acbb7530fb22151d3f3f1581fb947d.png",
          stars : 4,
          name : "Mixed Non Veg Biryani",
          region:"Hyderabad"
        },
        {
          src : "https://www.pavaniskitchen.com/wp-content/uploads/2021/04/egg-recipes.jpg" ,
          stars : 5,
          name : "Chicken Mughlai Biryani",
          region:"Kolkata"
        },
        {
          src : "https://imagevars.gulfnews.com/2022/03/11/Guntur-Gongura-Biryani-_17f793bfa09_large.jpg",
          stars: 4, 
          name : "Gongura Chicken Biryani",
          region:"Ravulapalem"
        }
      ],
    [
      
      {
        src: "https://static.toiimg.com/thumb/75599496.cms?imgsize=1852719&width=800&height=800",
        stars:4,
        name : "Chicken Keema",
        region : "Delhi",
      },
      {
        src: "https://media.istockphoto.com/id/956293410/photo/samosas-with-spicy-lamb.jpg?s=612x612&w=0&k=20&c=yqeOcqdNiCd5RGly0eYanPf-yqMPS6Gz9nESJ9rigEk=",
        stars:5,
        name : "Mutton Keema Samosa",
        region : "Kolkata",
      },
      {
        src: "https://img.freepik.com/premium-photo/bowl-soup-with-tomatoes-green-leaves_975681-1750.jpg",
        stars:5,
        name : "Creamy Tomato Soup",
        region : "Italy",
      },
      {
        src: "https://img.freepik.com/premium-photo/plate-chicken-wings-with-ketchup-parsley_442337-71103.jpg?w=996",
        stars:5,
        name : "Grilled Chicken Wings",
        region : "Bangalore",
      },
      {
        src: "https://cdn.tarladalal.com/members/9306/big/big_paneer-samosa-(-paneer-snacks-)-1791.jpg",
        stars:4,
        name : "Mini Paneer Samosa",
        region : "Punjab",
      },
      {
        src: "https://img.freepik.com/free-photo/delicious-tacos-table_23-2150770479.jpg",
        stars:5,
        name : "Mexican Chicken Fajitas",
        region : "Mumbai",
      },
      {
        src: "https://img.freepik.com/free-photo/top-view-delicious-kebab-slate-with-salad-ketchup_23-2148685527.jpg?t=st=1721902110~exp=1721905710~hmac=af05f703bb0544430ba77633cc698fb494c4968b921e28b70a6607686be33c46&w=2000",
        stars:4,
        name : "Murgh Malai Kebab",
        region : "Lucknow",
      },
      {
        src: "https://img.freepik.com/premium-photo/platter-paneer-tikka-served-with-crispy-onion-bha_1196052-77.jpg" ,
        stars:4,
        name : "Paneer Pakora",
        region : "Rajasthan",
      },
      {
        src: "https://i0.wp.com/zulekhaskitchen.com/wp-content/uploads/2014/03/EzyWatermark1812050353121212.png?resize=750%2C500&ssl=1",
        stars:4,
        name : "Bheja Fry",
        region :"Hyderabad",
      },
      {
        src: "https://img.freepik.com/free-photo/chicken-skewers-with-slices-sweet-peppers-dill_2829-18809.jpg",
        stars:5,
        name : "Paneer Tikka",
        origin : "Vizag",
      },
      {
        src: "https://wearenotmartha.com/wp-content/uploads/Baked-Zucchini-Chips-2-2-500x500.jpg",
        stars:5,
        name : "Air Fryer Zucchini Chips",
        region : "United States",
      },
      {
        src: "https://www.ekunji.com/wp-content/uploads/2015/04/papdi-chaat-recipe.jpg",
        stars:4,
        name : "Papdi Chaat",
        region : "Varanasi",
      },
    ],
    [
      {
        src: "https://www.foodandwine.com/thmb/icW1Ihr9TrvgsKSfK2BYr0rJD9M=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/strawberryshortcake_ft_recipe201954-2000-2c0255ecbf6e4010929b25a9fe7edb4b.jpg",
        stars:5,
        name : "Strawberry Shortcake",
      },
      {
        src: "https://www.foodandwine.com/thmb/8kG9exL-yA6jgsy5n6rZpkLqxUc=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/HD-201301-r-choc-cupcake-peanut-butter-filling-9171713459fd4d97815ed4b5b8bd6ba9.jpg",
        stars:5,
        name : "Chocolate Cup Cake",
      },
      {
        src: "https://www.tasteofhome.com/wp-content/uploads/2021/01/soan-papdi-indian-dessert.jpg?fit=700,700",
        stars:5,
        name : "Soan Papdi",
        region:"Kakinada"
      },
      {
        src: "https://media.cnn.com/api/v1/images/stellar/prod/181127110638-21-50-sweets-travel-black-forest-cake.jpg?q=w_1015,c_fill/f_webp",
        stars:5,
        name : "Black Forest Cake",
        region :" Germany",
      },
      {
        src: "https://i.pinimg.com/736x/d9/ca/46/d9ca46ad7f0ea797cc75bbe7bf28c3bc.jpg",
        stars:5,
        name : "Gulab Jamun",
        region : "India",
      },
      {
        src: "https://media.cnn.com/api/v1/images/stellar/prod/181127111010-22-50-sweets-travel-cardamom-buns.jpg?q=w_1015,c_fill/f_webp",
        stars:5,
        name : "Cardamom Buns",
        region:"Sweden",
      },
      {
        src:"https://media.cnn.com/api/v1/images/stellar/prod/181127105254-08-50-sweets-travel-donuts.jpg?q=w_1015,c_fill/f_webp",
        stars:5,
        name : "Doughnuts",
        region:"United States",
      },
      {
        src: "https://media.cnn.com/api/v1/images/stellar/prod/181127113350-38-50-sweets-travel-kulfi.jpg?q=w_1015,c_fill/f_webp",
        stars:5,
        name : "Kulfi",
        region : "India",
      },
      {
        src: "https://www.tasteofhome.com/wp-content/uploads/2021/01/gajar-ka-halwa-indian-desserts.jpg?fit=700,700",
        stars:5,
        name : "Carrot Halwa",
        region:"India"
      },
      {
        src: "https://www.archanaskitchen.com/images/archanaskitchen/1-Author/moumita.malla-gmail.com/traditional_rasmalai_recipe.jpg",
        stars:5,
        name : "Ras Malai",
        region:"Vizag"
      },
      {
        src: "https://static.toiimg.com/thumb/53099699.cms?width=1200&height=900",
        stars:5,
        name : "Jalebi ",
        region:"Kakinada"
      },
      {
        src: "https://www.tasteofhome.com/wp-content/uploads/2021/01/rasmalai-indian-dessert.jpg?fit=700,700",
        stars:5,
        name : "Strawberry Shortcake",
        region:"India"
      },
    ],
    [
      {
        src: "https://hips.hearstapps.com/hmg-prod/images/turkey-burger-lead-6481ed42f294e.jpg?crop=0.669xw:1.00xh;0.115xw,0&resize=980:*",
        stars:5,
        name : "Turkey Burger",
        region:""
      },
      {
        src: "https://hips.hearstapps.com/hmg-prod/images/singleimagebug-chicken-burger-1556207758.jpg?crop=1xw:0.9453781512605042xh;center,top&resize=980:*",
        stars:5,
        name : "Chicken Burger",
        region:"Kakinada"
      },
      {
        src: "https://hips.hearstapps.com/hmg-prod/images/210331-delish-burger-anatomy-21238-eb-1651775542.jpeg?crop=0.615xw:0.615xh;0.183xw,0.0687xh&resize=980:*",
        stars:5,
        name : "Classic Cheese Burger",
        region:"Kakinada"
      },
      {
        src: "https://images.immediate.co.uk/production/volatile/sites/2/2021/05/Burger-fdbcbf4.jpg?quality=90&webp=true&resize=2200,1465",
        stars:5,
        name : "Butter Burger",
        region:"Kakinada"
      },
      {
        src: "https://hips.hearstapps.com/hmg-prod/images/banh-mi-turkey-burger-secondary-6578982fea00a.jpg?crop=0.668xw:1.00xh;0.0612xw,0&resize=980:*",
        stars:5,
        name : "Bánh Mì Turkey Burger",
        region:"Kakinada"
      },
      {
        src: "https://hips.hearstapps.com/hmg-prod/images/copycat-shake-shack-burger-4-min-1649427734.jpg?crop=0.447xw:1.00xh;0.355xw,0&resize=980:*",
        stars:5,
        name : "Copycat Shack Burger",
        region:"Kakinada"
      },
      {
        src: "https://hips.hearstapps.com/hmg-prod/images/del039924-thai-sweet-chili-turkey-burger-web-002-bjg-hi-res-index-65faf87f04888.jpg?crop=0.335xw:1.00xh;0.643xw,0&resize=980:*",
        stars:5,
        name : "Chili Turkey Burger",
        region:"Kakinada"
      },
      {
        src: "https://www.tasteofhome.com/wp-content/uploads/2021/01/soan-papdi-indian-dessert.jpg?fit=700,700",
        stars:5,
        name : "Soan Papdi",
        region:"Kakinada"
      },
      {
        src: "https://www.tasteofhome.com/wp-content/uploads/2021/01/soan-papdi-indian-dessert.jpg?fit=700,700",
        stars:5,
        name : "Soan Papdi",
        region:"Kakinada"
      },
      {
        src: "https://images.immediate.co.uk/production/volatile/sites/2/2021/05/Burger-fdbcbf4.jpg?quality=90&webp=true&resize=2200,1465",
        stars:5,
        name : "Butter burgers",
        region:"Kakinada"
      },
      {
        src: "https://www.tasteofhome.com/wp-content/uploads/2021/01/soan-papdi-indian-dessert.jpg?fit=700,700",
        stars:5,
        name : "Soan Papdi",
        region:"Kakinada"
      },
      {
        src: "https://www.tasteofhome.com/wp-content/uploads/2021/01/soan-papdi-indian-dessert.jpg?fit=700,700",
        stars:5,
        name : "Soan Papdi",
        region:"Kakinada"
      },
    ],
    [
      {
        src: "https://img.freepik.com/premium-photo/bowl-chicken-curry-with-green-white-rim_1239531-87.jpg?w=1380",
        stars:5,
        name : "Naatukodi Pulusu",
        region:"Kakinada"
      },
      {
        src: "https://vismaifood.com/storage/app/uploads/public/770/92e/8e6/thumb__700_0_0_0_auto.jpg",
        stars:5,
        name : "Fish Curry",
        region:"Kakinada"
      },
      {
        src: "https://img.freepik.com/premium-photo/spicy-beef-curry-goan-style-beef-vindaloo-traditional-indian-lamb-beef-curry_781325-3643.jpg?w=1380",
        stars:5,
        name : "Mutton Curry",
        region:"Kakinada"
      },
      {
        src: "https://vismaifood.com/storage/app/uploads/public/8c6/190/485/thumb__700_0_0_0_auto.jpg",
        stars:5,
        name : "Prawns Curry",
        region:"Kakinada"
      },
      {
        src: "https://www.tasteofhome.com/wp-content/uploads/2021/01/soan-papdi-indian-dessert.jpg?fit=700,700",
        stars:5,
        name : "Soan Papdi",
        region:"Kakinada"
      },
      {
        src: "https://img.freepik.com/premium-photo/bowl-chicken-curry-with-green-white-rim_1239531-87.jpg?w=1380",
        stars:5,
        name : "Soan Papdi",
        region:"Kakinada"
      },
      {
        src: "https://images.immediate.co.uk/production/volatile/sites/2/2021/05/Burger-fdbcbf4.jpg?quality=90&webp=true&resize=2200,1465",
        stars:5,
        name : "Butter burgers",
        region:"Kakinada"
      },
      {
        src: "https://www.tasteofhome.com/wp-content/uploads/2021/01/soan-papdi-indian-dessert.jpg?fit=700,700",
        stars:5,
        name : "Soan Papdi",
        region:"Kakinada"
      },
      {
        src: "https://www.tasteofhome.com/wp-content/uploads/2021/01/soan-papdi-indian-dessert.jpg?fit=700,700",
        stars:5,
        name : "Soan Papdi",
        region:"Kakinada"
      },
      {
        src: "https://images.immediate.co.uk/production/volatile/sites/2/2021/05/Burger-fdbcbf4.jpg?quality=90&webp=true&resize=2200,1465",
        stars:5,
        name : "Butter burgers",
        region:"Kakinada"
      },
      {
        src: "https://www.tasteofhome.com/wp-content/uploads/2021/01/soan-papdi-indian-dessert.jpg?fit=700,700",
        stars:5,
        name : "Soan Papdi",
        region:"Kakinada"
      },
      {
        src: "https://www.tasteofhome.com/wp-content/uploads/2021/01/soan-papdi-indian-dessert.jpg?fit=700,700",
        stars:5,
        name : "Soan Papdi",
        region:"Kakinada"
      },
      {
        src: "https://images.immediate.co.uk/production/volatile/sites/2/2021/05/Burger-fdbcbf4.jpg?quality=90&webp=true&resize=2200,1465",
        stars:5,
        name : "Butter burgers",
        region:"Kakinada"
      },
      {
        src: "https://www.tasteofhome.com/wp-content/uploads/2021/01/soan-papdi-indian-dessert.jpg?fit=700,700",
        stars:5,
        name : "Soan Papdi",
        region:"Kakinada"
      },
      {
        src: "https://www.tasteofhome.com/wp-content/uploads/2021/01/soan-papdi-indian-dessert.jpg?fit=700,700",
        stars:5,
        name : "Soan Papdi",
        region:"Kakinada"
      },
      {
        src: "https://www.tasteofhome.com/wp-content/uploads/2021/01/soan-papdi-indian-dessert.jpg?fit=700,700",
        stars:5,
        name : "Soan Papdi",
        region:"Kakinada"
      },
    ]
]


var fav_data =[];


// console.log(category_data["Biryani's"]);

var middle = document.getElementsByClassName("middle")[0];
    var sideCat = document.createElement("div");
    sideCat.setAttribute("class" , "sideCat");

    var container = document.createElement("div");
    container.setAttribute("class" , "container");

    container.innerHTML = `<i class="fa-solid fa-x" onclick="openn()"></i>
    <center><p>Add New Recipe</p></center>
        <form id="recipeForm">
            <div class="form-group">
                <label for="recipeName">Recipe Name:</label>
                <input type="text" id="recipeName" name="recipeName" required>
                <div class="error" id="nameError"></div>
            </div>

            <div class="form-group">
                <label for="imageURL">Image URL:</label>
                <input type="url" id="imageURL" name="imageURL" required>
                <div class="error" id="imageURLError"></div>
            </div>

            <div class="form-group">
                <label for="stars">Stars (1-5):</label>
                <input type="number" id="stars" name="stars" min="1" max="5" required>
                <div class="error" id="starsError"></div>
            </div>

            <div class="form-group">
                <label for="category">Category:</label>
                <select id="category" name="category">
                    <option value="" selected>Select Category</option>
                    <option value="Biryani's">Biryani 's</option>
                    <option value="Starter's">Starter 's</option>
                    <option value="Dessert's">Dessert 's</option>
                    <option value="Burger's">Burger 's</option>
                    <option value="Non-Veg Curries">Non-Veg Curries</option>
                    <option value="appetizer">Appetizer</option>
                    <option value="main_course">Main Course</option>
                    <option value="dessert">Dessert</option>
                    <option value="beverage">Beverage</option>
                </select>
                <div class="error" id="categoryError"></div>
            </div>

            <div class="form-group">
                <label for="region">Region:</label>
                <input type="text" id="region" name="region" required>
                <div class="error" id="regionError"></div>
            </div>

            <div class="form-group">
                <label for="ingredients">Ingredients:</label>
                <textarea id="ingredients" name="ingredients" required></textarea>
                <div class="error" id="ingredientsError"></div>
            </div>

            <div class="form-group">
                <label for="process">Process:</label>
                <textarea id="process" name="process" required></textarea>
                <div class="error" id="processError"></div>
            </div>

            <div class="form-group">
                <label for="videoURL">Video URL:</label>
                <input type="url" id="videoURL" name="videoURL">
                <div class="error" id="videoURLError"></div>
            </div>

            <div class="form-group">
                <button type="submit">Submit</button>
            </div>
        </form>`

    var head = document.createElement("div");
    head.setAttribute("class" , "head");
    head.innerHTML = "Categories";

    var side = document.createElement("div");
    side.setAttribute("class" , "side");
    side.innerHTML= `<i class="fa-solid fa-x" onclick="closee()" ></i>`

    sideCat.appendChild(head);
    sideCat.appendChild(side);
    middle.appendChild(container);
    middle.appendChild(sideCat);


    var call = (name) => {
      console.log(name)
    }

const createItems = (ind) =>{
  var container = document.getElementsByClassName("card_container")[0];
  container.replaceChildren();
  var data = item_data[ind];
  // console.log(ar[0])
  data.map((ele) =>{
    var star = document.createElement("div");
    for(let k = 0 ; k  < ele.stars; k++){
        star.innerHTML +=  `<i class="fa-solid fa-star"></i>`;
     }

    var card = document.createElement("div");
    card.setAttribute("class" , "card")

    var photo = document.createElement("div");
    photo.setAttribute("class","photo");

    var img = document.createElement("img");
    img.setAttribute("src",`${ele.src}`);

    var cover = document.createElement("div");
    cover.setAttribute("class","cover");

    var i = document.createElement("i");
    i.setAttribute("class","fa-regular fa-heart")

    i.addEventListener("click", function() {
      favAdd(ele)
    });
  
    i.addEventListener("click", function() {
      fav(this);
    });

    var content = document.createElement("div");
    content.setAttribute("class" , "content");

    var left = document.createElement("div");
    left.setAttribute("class" , "left");

    var right = document.createElement("div");
    right.setAttribute("class" , "right");

    var stars = document.createElement("div");
    stars.setAttribute("class" , "stars");

    for(let k = 0 ; k < ele.stars ; k++){
        let i = document.createElement("i");
        i.setAttribute("class" , "fa-solid fa-star")
        stars.appendChild(i);
    }

    var name = document.createElement("p");
    name.setAttribute("class" , "name");
    name.innerHTML = ele.name;

    var region = document.createElement("p");
    region.setAttribute("class" , "region");
    region.innerHTML = ele.region;
    var send = ele.name;
    // console.log(send)
    var button = document.createElement("button");
    button.setAttribute("class" , "learn-more");
    // console.log(ele.name)
    button.innerHTML = `<span aria-hidden="true" class="circle">
                        <span class="icon arrow"></span>
                        </span>
                        <span class="button-text">Open Now</span>`
    button.addEventListener('click' , function(){
      call(ele.name)
    });
    
    var na = document.createElement("div");
    na.setAttribute("class" , "name")
    na.innerHTML = ele.name;
    var st = document.createElement("div");
    st.setAttribute("class","stars");
    for(let k = 0 ; k < ele.stars ; k++){
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
})



const fav = (address) =>{
  // console.log(address)
    // address.setAttribute("class" , "selected");
    if(address.style.color == "red"){
        address.setAttribute("style" , "font-weight:0");
        address.style.color = "white" 

        
    }
    else{
        address.setAttribute("style" , "font-weight:1000");
        address.style.color = "red";
        
    }

}

const favAdd = (data) =>{
  console.log(data);
}

}
var clos = false;
const closee = () =>{
  var card_container = document.getElementsByClassName("card_container")[0];
  var add = document.getElementsByClassName("add")[0];
  var filter = document.getElementsByClassName("filter")[0];
  var item = document.getElementsByClassName("items")[0];
  if(clos === false){
    // var item = document.getElementsByClassName("item")[0];
    clos = true;
    sideCat.style.left = "0px";
    sideCat.style.width = "80%";
    card_container.style.opacity = 0.2;
    filter.style.color = "#FF8225";
    filter.style.scale = 1.2;
    add.style.display = "none";
    open1 = true;
    openn();
  }
  else{
    clos = false;
    // item.innerHTML = "items :";
    sideCat.style.left = "-20px";
    sideCat.style.width = "0%";
    filter.style.color = "#222325";
    filter.style.scale = 1.1;
    card_container.style.opacity = 1;
    add.style.display = "flex";
    item.style.opacity = 1
    
  }
}

var open1 = false;
const openn = () =>{
  var cont = document.getElementsByClassName("container")[0];
  var card_container = document.getElementsByClassName("card_container")[0];
  var categories = document.getElementsByClassName("categories")[0];
  var category = document.getElementsByClassName("category")[0];
  if(open1 == false){
    open1 = true;
    cont.style.scale = 1;
    cont.style.height = "90%"
    card_container.style.opacity = 0.2;
    categories.style.opacity = 0.2;
    category.style.opacity = 0.2;
  }
  else{
    open1 = false;
    cont.style.scale = 0;
    cont.style.height = "0%"
    card_container.style.opacity = 1;
    categories.style.opacity = 1;
    category.style.display = "block";
  }
}
var categories = document.getElementsByClassName("bottom")[0];
categories.innerHTML = `
                        <div class="add" onclick="openn()"><i class="fa-solid fa-plus"></i></div>
                        <div class="filter" onclick="closee()"><i class="fa-solid fa-filter"></i></div>
                        `

Object.entries(category_data).map((cat , ind) =>{
  // console.log(cat[0])
    var categories = document.getElementsByClassName("categories")[0];
    var catButton = document.createElement("catButton");

  
    var catBut = document.createElement("div");
    catBut.setAttribute("class" , "catBut");

    catBut.addEventListener("click", function() {
      createItems(ind);
    });
  
    catBut.addEventListener("click", function() {
      closee();
    });
  

    // catBut.setAttribute("onclick", );

    catButton.setAttribute("class" , "catButton");
    catButton.setAttribute("onclick", `createItems('${ind}')`);
    catButton.innerHTML = `<div class="catPhoto">
                              <img src= "${cat[1][1]}"alt=""> 
                            </div>
                            <div class="catName">
                              <p class="name">${cat[0]}</p>
                            </div>`
    catBut.innerHTML = `<div class="catPhoto">
                              <img src= "${cat[1][1]}"alt=""> 
                            </div>
                            <div class="catName">
                              <p class="name">${cat[0]}</p>
                            </div>`

    side.appendChild(catBut)
    categories.appendChild(catButton)
    createItems(2);
})


// item_data[category_data["Biryani's"]].map((key)=>{
//   // console.log(ele);
// })

// dataBase = {
//     "Biryani's" :{
//                   "Avakai chicken biryani" : {
//                     src: 7,
//                     stars:5,
//                     name : "Avakai chicken biryani",
//                   },
//                   "Butter chicken biryani" : {
//                     src:8,
//                     stars : 4,
//                     name :"Butter chicken biryani",
//                   },
//                   "MUTTON Biryani" :{
//                     src  : 9,
//                     stars : 5,
//                     name :"MUTTON Biryani ",
//                   },
//                   "Pot biryani" :{
//                     src : 9 ,
//                     stars : 5,
//                     name :"Pot biryani",
//                   },
//                   "Chicken 65 biryani" : {
//                     src:9,
//                     stars:4,
//                     name : "Chicken 65 biryani",
//                   },
//                   "Chicken dum biryani" : {
//                     src : 9,
//                     stars : 5,
//                     name : "Chicken dum biryani",
//                   },
//                   "Gongura royalla biryani" : {
//                     src : 9,
//                     stars : 4,
//                     name : "Gongura royalla biryani",
//                   },
//                   "Chicken fry piece biryani" : {
//                         src : 9,
//                         stars : 4,
//                         name : "Chicken fry piece biryani",
//                   },
//                   "Chicken lollipop biryani" : {
//                     src : 9 , 
//                     stars : 5 ,
//                     name : "Chicken lollipop biryani",
//                   },
//                   "Mixed non veg biryani" : {
//                     src : 9,
//                     stars : 4,
//                     name : "Mixed non veg biryani",
//                   },
//                   "Chicken mughlai biryani" : {
//                     src : 9 ,
//                     stars : 5,
//                     name : "Chicken mughlai biryani",
//                   },
//                   "Gongura chicken biryani" : {
//                     src : 9,
//                     stars: 4, 
//                     name : "Gongura chicken biryani",
//                   },
//             }
    

// }
// console.log(dataBase)

// Object.entries(dataBase).map(ele =>{
//   // console.log(dataBase[ele[0]]);
//   Object.entries(dataBase[ele[0]]).map(data =>{
//     // console.log(data[1].stars);
//   })
// })

var data = [
    {
        src : "../assets/images/biryani.jpg",
        name : "chicken biryani",
        stars : 4,
    } ,
    {
        src : "../assets/images/biryani.jpg",
        name : "chicken biryani",
        stars :5,
    } ,
    {
        src : "../assets/images/biryani.jpg",
        name : "chicken biryani",
        stars : 4,
    },
    {
        src : "../assets/images/biryani.jpg",
        name : "chicken biryani",
        stars : 5,
    },
    {
        src : "../assets/images/biryani.jpg",
        name : "chicken biryani",
        stars : 2,
    } ,
    {
        src : "../assets/images/biryani.jpg",
        name : "chicken biryani",
        stars : 4,
    } ,
    {
        src : "../assets/images/biryani.jpg",
        name : "chicken biryani",
        stars : 3,
    } ,
    {
        src : "../assets/images/biryani.jpg",
        name : "chicken biryani",
        stars : 4,
    } ,
    {
        src : "../assets/images/biryani.jpg",
        name : "chicken biryani",
        stars : 4,
    } ,
    {
        src : "../assets/images/biryani.jpg",
        name : "chicken biryani",
        stars : 4,
    } ,
    {
        src : "../assets/images/biryani.jpg",
        name : "chicken biryani",
        stars : 4,
    } ,
    {
        src : "../assets/images/biryani.jpg",
        name : "chicken biryani",
        stars : 4,
    }
      
]


const apend = (obj) =>{
  // console.log(obj)
}

const fun = () =>{
  
  container.style.scale = 0;
}

document.getElementById('recipeForm').addEventListener('submit', function(event) {
            
  document.querySelectorAll('.error').forEach(el => el.textContent = '');
  event.preventDefault();
  let valid = true;

  const name = document.getElementById('recipeName').value.trim();
  const imageURL = document.getElementById('imageURL').value.trim();
  const stars = parseInt(document.getElementById('stars').value, 10);
  const region = document.getElementById('region').value.trim();
  const ingredients = document.getElementById('ingredients').value.trim();
  const process = document.getElementById('process').value.trim();
  const videoURL = document.getElementById('videoURL').value.trim();
  const category = document.getElementById('category').value;


  if (!name) {
      document.getElementById('nameError').textContent = 'Recipe name is required.';
      valid = false;
  }

  if (!imageURL) {
      document.getElementById('imageURLError').textContent = 'Image URL is required.';
      valid = false;
  }

  if (isNaN(stars) || stars < 1 || stars > 5) {
      document.getElementById('starsError').textContent = 'Stars must be between 1 and 5.';
      valid = false;
  }

  if (!ingredients) {
      document.getElementById('ingredientsError').textContent = 'Ingredients are required.';
      valid = false;
  }
  
  if (!region) {
    document.getElementById('region').textContent = 'Region is required.';
    valid = false;
}
  if (!process) {
      document.getElementById('processError').textContent = 'Process is required.';
      valid = false;
  }

  if (videoURL && !/^https?:\/\/.+/.test(videoURL)) {
      document.getElementById('videoURLError').textContent = 'Invalid video URL.';
      valid = false;
  }

  if (!category) {
      document.getElementById('categoryError').textContent = 'Category is required.';
      valid = false;
  }

  if (valid) {
      const recipe = {
          name: name,
          imageURL: "`${imageURL}`",
          stars: stars,
          ingredients: ingredients,
          process: process,
          videoURL: "`${videoURL}`",
          category: category,
          region : region,
      };
      var obj = {
        src : imageURL,
        name : name,
        stars : stars,
        region :region,
      }
      // console.log(obj);
      // console.log(recipe.category)
      // console.log(typeof recipe.category)
      // console.log(category_data[recipe.category])
      item_data[category_data[recipe.category][0]].push(obj);
      // console.log(item_data[category_data[recipe.category][0]]);
      createItems(category_data[recipe.category][0]);
      alert("Recipe is Added successfully!");
      var card_container = document.getElementsByClassName("card_container")[0];
      var categories = document.getElementsByClassName("categories")[0];
      var categoryy = document.getElementsByClassName("category")[0]
      // console.log(card_container)
      card_container.style.opacity = 1;
      categories.style.opacity = 1;
      categoryy.style.opacity = 1;
      document.getElementById("recipeForm").reset();
      container.style.height = "0%"
      setTimeout(fun , 0);
      apend(recipe);
  }
 
});