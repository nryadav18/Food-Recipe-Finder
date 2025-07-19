
var check = true;
var category_data={
    "Biryani's" : [0 , "https://t4.ftcdn.net/jpg/05/17/96/89/360_F_517968988_hFHjQT6Flfksjx8n0KxfvMtP2tqlmGKk.jpg"],
    "Starter's" : [1 , "../assets/images/Categories/starters.jpeg"],
    "Dessert's" : [2 , "../assets/images/Categories/Desserts.jpg" ],
    "Burger's"  : [3 , "https://images.immediate.co.uk/production/volatile/sites/2/2021/05/Burger-fdbcbf4.jpg?quality=90&webp=true&resize=2200,1465"],
    "Non-Veg" : [4 , "https://img.freepik.com/premium-photo/bowl-chicken-curry-with-green-white-rim_1239531-87.jpg?w=1380"],
    "StreetFood" : [5 , "https://img.freepik.com/free-photo/close-up-delicious-asian-food_23-2150535902.jpg?t=st=1722055934~exp=1722059534~hmac=93bc5380f11b95f9a06811371cb77f055e9bbc132c2c5c003ba13aed6ce9aecd&w=360"],
    "Pizza" : [6 , "https://img.freepik.com/premium-photo/margherita-pizza-with-mozzarella-cheese-bubbling_1194832-19275.jpg?w=996"],
    "Veg Items" : [7 , "https://img.freepik.com/free-photo/high-angle-delicious-pakistan-dish-assortment_23-2148821527.jpg?t=st=1722056396~exp=1722059996~hmac=3de8c6d0b58a4000812b7dea90ffc11f1dd1d63299a6b672cf6f25cc224775ca&w=996" ],
    "Salads" : [8 , "https://img.freepik.com/free-photo/side-view-salad-herring-fur-coat-with-tomatoes-radishes_140725-13979.jpg?t=st=1722057296~exp=1722060896~hmac=2f6b9c5b5299de15a1948468f63ffe54848422cb7216b3b055bd4e5acbcbc208&w=740"],
    "Pickles" : [9 , "https://www.indianhealthyrecipes.com/wp-content/uploads/2021/11/lemon-pickle-recipe.jpg"],
    "HomeMakes" : [10 , "https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" ],
    "Tiffins" : [11 , "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIaNjL9IM8PgmxHk-F14IjTyB-yZyDPSJF0wkXtQ5k09IgZsFUBFL-VlMgmb4EyMvnKxY&usqp=CAU" ]
  }
// console.log(category_data)

var item_data = [
      [
        {
          src: "https://vismaifood.com/storage/app/uploads/public/b3b/132/dc7/thumb__700_0_0_0_auto.jpg",
          stars:5,
          name : "Avakai Chicken Biryani",
          region:"AndhraPradesh",
        },
        {
          src : "https://lh3.googleusercontent.com/EJvV6DVonRsslbtKliaaTg8FaTym80F1-mNKU_XU0o1QekSrqPGGg27nWdkapkX2RCD-9ckDS4uWKEAOBX7Mh69g0Qg=w1200-rw",
          stars : 4,
          name :"Pot Biryani",
          region:"Vizag"
        },
        {
          src : "https://img.freepik.com/free-photo/close-up-appetizing-ramadan-meal_23-2151182540.jpg",
          stars : 4,
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
          stars:5,
          name : "Chicken 65 Biryani",
          region:"Vizag"
        },
        {
          src : "https://www.sandyathome.com/wp-content/uploads/2023/04/gongura-shrimp-biryani-500x500.jpg",
          stars : 5,
          name : "Gongura Royalla Biryani",
          region:"Vijayawada"
        },
        {
          src  : "https://img.freepik.com/premium-photo/vibrant-photo-taste-tradition-heavenly-biri_1177965-4010.jpg",
          stars : 4,
          name :"Mutton Biryani ",
          region:"Hyderabad"
        },
        {
          src : "https://i.ytimg.com/vi/BTaivuAiY00/maxresdefault.jpg",
          stars : 4,
          name : "Chicken Fry Piece Biryani",
          region:"Banglore"
        },
        {
          src : "https://img.freepik.com/premium-photo/spicy-indian-chicken-biryani-captured-stunning-food-photo-against-black-backdrop_117038-27113.jpg" , 
          stars : 4 ,
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
          stars : 3,
          name : "Chicken Mughlai Biryani",
          region:"Kolkata"
        },
        {
          src : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_Ojig-vAWxF7nokC2VaF4G8WoNmCG5xz3eQ&s",
          stars: 3, 
          name : "Gongura Chicken Biryani",
          region:"Ravulapalem"
        }
      ],
    [
      
      {
        src: "https://static.toiimg.com/thumb/75599496.cms?imgsize=1852719&width=800&height=800",
        stars:5,
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
        stars:4,
        name : "Creamy Tomato Soup",
        region : "Italy",
      },
      {
        src: "https://img.freepik.com/premium-photo/plate-chicken-wings-with-ketchup-parsley_442337-71103.jpg?w=996",
        stars:3,
        name : "Grilled Chicken Wings",
        region : "Bangalore",
      },
      {
        src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS89JosRsylD1hyctck98XemsffEU4T-uMJfg&s",
        stars:5,
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
        src: "https://static.toiimg.com/thumb/75542942.cms?width=1200&height=900",
        stars:3,
        name : "Bheja Fry",
        region :"Hyderabad",
      },
      {
        src: "https://img.freepik.com/free-photo/chicken-skewers-with-slices-sweet-peppers-dill_2829-18809.jpg",
        stars:3,
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
        stars:4,
        name : "Chocolate Cup Cake",
      },
      
      {
        src: "https://media.cnn.com/api/v1/images/stellar/prod/181127110638-21-50-sweets-travel-black-forest-cake.jpg?q=w_1015,c_fill/f_webp",
        stars:4,
        name : "Black Forest Cake",
        region :" Germany",
      },
      {
        src: "https://i.pinimg.com/736x/d9/ca/46/d9ca46ad7f0ea797cc75bbe7bf28c3bc.jpg",
        stars:4,
        name : "Gulab Jamun",
        region : "India",
      },
      {
        src: "https://media.cnn.com/api/v1/images/stellar/prod/181127111010-22-50-sweets-travel-cardamom-buns.jpg?q=w_1015,c_fill/f_webp",
        stars:3,
        name : "Cardamom Buns",
        region:"Sweden",
      },
      {
        src:"https://media.cnn.com/api/v1/images/stellar/prod/181127105254-08-50-sweets-travel-donuts.jpg?q=w_1015,c_fill/f_webp",
        stars:4,
        name : "Doughnuts",
        region:"United States",
      },
      {
        src: "https://media.cnn.com/api/v1/images/stellar/prod/181127113350-38-50-sweets-travel-kulfi.jpg?q=w_1015,c_fill/f_webp",
        stars:4,
        name : "Kulfi",
        region : "India",
      },
      {
        src: "https://www.tasteofhome.com/wp-content/uploads/2021/01/soan-papdi-indian-dessert.jpg?fit=700,700",
        stars:3,
        name : "Soan Papdi",
        region:"Kakinada"
      },
      {
        src: "https://www.tasteofhome.com/wp-content/uploads/2021/01/gajar-ka-halwa-indian-desserts.jpg?fit=700,700",
        stars:4,
        name : "Carrot Halwa",
        region:"India"
      },
      {
        src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSP_6OkPbjd4EUY6blz2_dZpC-EIaR02vj_8g&s",
        stars:4,
        name : "Ras Malai",
        region:"Vizag"
      },
      {
        src: "https://static.toiimg.com/thumb/53099699.cms?width=1200&height=900",
        stars:3,
        name : "Jalebi ",
        region:"Kakinada"
      },
      // {
      //   src: "https://www.tasteofhome.com/wp-content/uploads/2021/01/rasmalai-indian-dessert.jpg?fit=700,700",
      //   stars:5,
      //   name : "Rasa Malai",
      //   region:"India"
      // },
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
        src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQl-NM0m9Wurmr7gPjjxr4Z7OekpPf8GE773g&s",
        stars:5,
        name : "Seer Fish Fry",
        region:"Ravulapalem"
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
      src:"https://img.freepik.com/free-photo/close-up-delicious-asian-food_23-2150535902.jpg?t=st=1722055934~exp=1722059534~hmac=93bc5380f11b95f9a06811371cb77f055e9bbc132c2c5c003ba13aed6ce9aecd&w=360",
      stars:4,
      name: "Pani Puri",
      region : "Kolkata"
      },
      {
      src:"https://img.freepik.com/premium-photo/bhelpuri-chaat-chat-is-road-side-tasty-food-from-india-served-bowl-plate-selective-focus_466689-37084.jpg?w=996",
      stars:4,
      name: "Chat",
      region : "Mumbai"
      },
      
      {
      src:"https://img.freepik.com/premium-photo/mumbai-style-pav-bhaji-is-fast-food-dish-from-india-consists-thick-vegetable-curry-served-with-soft-bread-roll-served-plate_466689-2286.jpg?w=360",
      stars:5,
      name: "Pav Bhaji",
      region : "Mumbai"
      },
      {
      src:"https://img.freepik.com/premium-photo/aalu-bonda-is-indian-pakora-batata-vada-served-with-ketchup_466689-72708.jpg?w=996",
      stars:5,
      name: "Vada Pav",
      region : "Gujarat"
      },
      
      ],
      [
        {
          src:"https://img.freepik.com/premium-photo/margherita-pizza-with-mozzarella-cheese-bubbling_1194832-19275.jpg?w=996",
          stars:4,
          name: "Margherita Pizza",
          region : "London"
          },
          {
          src:"https://img.freepik.com/free-photo/side-view-pizza-with-chicken-mushrooms-served-with-sauce-vegetables-salad-wooden-plate_140725-12018.jpg?t=st=1722056203~exp=1722059803~hmac=882ec5c3c85a05815355851b1ad7596f7867409fb7a6ea48608295850020ff61&w=740",
          stars:4,
          name: "BBQ Chicken Pizza",
          region : "Canada"
          },
          {
          src:"https://img.freepik.com/premium-photo/pizza-with-cheese-fries-wooden-table-top-view_124907-192.jpg?w=996",
          stars:3,
          name: "Veggie Pizza",
          region : "Paris"
          },
          {
            src:"https://img.freepik.com/free-photo/top-view-colorful-italian-pizza-with-various-ingredients_181624-59426.jpg?t=st=1722057674~exp=1722061274~hmac=a9b96c34de42e4300ff5bb587f1264e62c33db10764be2fc02177106804e9ec1&w=996",
            stars:4,
            name: "Mexican Corn Pizza",
            region : "Paris"
            },
          
      ],[
        {
          src:"https://img.freepik.com/free-photo/high-angle-delicious-pakistan-dish-assortment_23-2148821527.jpg?t=st=1722056396~exp=1722059996~hmac=3de8c6d0b58a4000812b7dea90ffc11f1dd1d63299a6b672cf6f25cc224775ca&w=996",
          stars:4,
          name: "Vegetable Biryani",
          region : "Hyderabad"
          },
          {
          src:"https://img.freepik.com/free-photo/pre-prepared-food-showcasing-ready-eat-delicious-meals-go_23-2151431675.jpg?t=st=1722056870~exp=1722060470~hmac=deedab757ea79bd7387d02d3c333a5bc6a76a9a69f95a0b42d6059b93028d244&w=996",
          stars:3,
          name: "Aloo Gobi",
          region : "Delhi"
          },
          {
            src:"https://img.freepik.com/free-photo/high-angle-composition-with-delicious-pakistan-meal_23-2148821540.jpg?t=st=1722056328~exp=1722059928~hmac=6b3de13c5765a4d49e2bd30c711eb39499fccb8f49e102730d49874c9515625b&w=996",
            stars:5,
            name: "Panner Butter Masala",
            region : "Delhi"
            },
         
      ],
      [
        {
          src:"https://img.freepik.com/free-photo/side-view-salad-herring-fur-coat-with-tomatoes-radishes_140725-13979.jpg?t=st=1722057296~exp=1722060896~hmac=2f6b9c5b5299de15a1948468f63ffe54848422cb7216b3b055bd4e5acbcbc208&w=740",
          stars:4,
          name: "Carrot Beetroot Salad",
          region : "Bhopal"
          },
          {
          src:"https://img.freepik.com/free-photo/salads-with-quinoa-arugula-radish-tomatoes-cucumber-bowl-wooden-table-healthy-food-diet-detox-vegetarian-concept_2829-6842.jpg?t=st=1722057356~exp=1722060956~hmac=b0c16d89805a163b1187f65fdd5236ed6d42ea0e52117e50c4bbc5503e74f50d&w=996",
          stars:3,
          name: "Sprouted Moong Salad",
          region : "Kerala"
          },
          {
            src:"https://img.freepik.com/free-photo/freshness-plate-healthy-salad-with-organic-vegetables-generated-by-artificial-intelligence_25030-65099.jpg?t=st=1722057467~exp=1722061067~hmac=45cdefe82deb1aa32a43185f640175eb6afd028008ac5b0720d3162b490920cd&w=1060",
            stars:4,
            name: "Kachumber Salad",
            region : "Jaipur"
            },
            {
              src:"https://img.freepik.com/free-photo/wide-selection-marinated-fruits-vegetables-white-plate_114579-3586.jpg?t=st=1722058158~exp=1722061758~hmac=e12651e335f5e1ec31d6ba22cfdc46f6a94fce862f765b2ff2b3aefb531b818d&w=1060",
              stars:5,
              name: "Mixed Fruit Chaat",
              region : "Gujarat"
              },
              {
              src:"https://img.freepik.com/free-photo/flat-lay-tasty-tacos-arrangement_23-2148629342.jpg?t=st=1722058213~exp=1722061813~hmac=258a30b273807d4cea2644191dd189f82c5aba0397176ac248f7fa627a8d235f&w=996",
              stars:3,
              name: "Mexican Fruit Salad",
              region : "Mexico"
              },
              {
              src:"https://img.freepik.com/free-photo/fresh-tomato-salad-healthy-vegetarian-meal-summer-generated-by-artificial-intelligence_188544-128532.jpg?t=st=1722058265~exp=1722061865~hmac=c3901d35982b0c38519624af98413aec79645be10f46ede7c12f7be967a35502&w=1060",
              stars:3,
              name: "Watermelon Feta Salad",
              region : "Kerala"
              },
          
      ],
      [
        {
          src:"https://img.freepik.com/free-photo/arrangement-apricots-cloth-with-jar-compote_23-2148647922.jpg?t=st=1722056988~exp=1722060588~hmac=f49189e7ef874e78433e2006cacb42efaa90c76baf082788cf34ee18b95aada2&w=996",
          stars:5,
          name: "Mango Pickle",
          region : "Old Delhi"
          },
          {
          src:"https://i.ytimg.com/vi/S5fYbjBb0zs/maxresdefault.jpg",
          stars:4,
          name: "Lemon Pickle",
          region : "Tamilnadu"
          },
        {
          src:"https://img.freepik.com/free-photo/delicious-bowl-with-sauce-top-view_23-2149358127.jpg?t=st=1722057045~exp=1722060645~hmac=a64d160c1c00a9835df5e439a5157f4c74a3725ed6794584cdfca932c7034ea6&w=996",
          stars:5,
          name: "Tomato Pickle",
          region : "Andhra Pradesh"
          },
          {
            src:"https://vellankifoods.com/cdn/shop/products/gongura_pickle_2.jpg?v=1680180278",
            stars:5,
            name: "Gongura Pickle",
            region : "Telangana"
            },
            {
              src:"https://static.toiimg.com/photo/58413147.cms",
              stars:4,
              name: "Garlic Pickle",
              region : "Rajasthan"
              },
          {
          src:"https://assets.tendercuts.in/product/P/K/d697240e-8fef-42c6-a97b-2d645e3aac04.webp",
          stars:4,
          name: "Chicken Pickle",
          region : "Andhra Pradesh"
          },
          
      ],
      [
        {
          src:"https://aahaaramonline.com/wp-content/uploads/2012/03/andhra_uppudu_pindi.jpg",
          stars:4,
          name: "Uppudu Pindi",
          region : "Andhra Pradesh"
          },
         
          {
            src:"https://img.freepik.com/free-photo/cold-soup-with-fresh-cucumbers-radishes-with-yoghurt-bowl-wooden-table-traditional-russian-food-okroshka-vegetarian-meal_2829-7174.jpg?t=st=1722057497~exp=1722061097~hmac=43b1e54b06ff806ca541c86494c455d2d08182a08c85e889c480945a03129bf2&w=996",
            stars:5,
            name: "Raita",
            region : "Tamilnadu"
            },
      ],
      [
        {
          src:"https://img.freepik.com/premium-photo/south-indian-vada-medu-vada-dal-vadai-plate-bowl-isolated-plain_466689-1580.jpg?w=996",
          stars:4,
          name: "Vada",
          region : "Tamilnadu"
          },
          {
            src:"https://img.freepik.com/free-photo/delicious-arrangement-nutritious-roti_23-2149033982.jpg?t=st=1722057737~exp=1722061337~hmac=004fba0f7ce23d7ff08e007584677fd5b3b84b3d02decb426419cd4b37760dbb&w=996",
            stars:5,
            name: "Aloo Parata",
            region : "Bihar"
            },
            {
            src:"https://img.freepik.com/free-photo/delicious-indian-dosa-composition_23-2149086051.jpg?t=st=1722057833~exp=1722061433~hmac=8471aa0eabf2474b8082509fdb93d65204ea51d7d229370b83b5efd246d18887&w=996",
            stars:5,
            name: "Masala Dosa",
            region : "Chennai"
            },
          {
          src:"https://img.freepik.com/free-photo/curry-fried-rice_1339-1809.jpg?t=st=1722058054~exp=1722061654~hmac=9b5ba57626873ff213b2af28f29819ae57bb83c3335a09bfccae3333ed2d2b0f&w=996",
          stars:5,
          name: "Pulihora",
          region : "Telangana"
          },
          
      ]
]

// const loaded = () =>{
//   console.log("HGGCVC")
// }

var top  = document.getElementsByClassName("itemName")[0];
top.innerHTML = `    <div class="bt1">
                    <a href="../Searchpage/Searchpage/api.html">
                        <div class="bt11">
                        <div class="sm">
                            <div class="smb" id="linkedin">
                                <p>Search Page</p>
                            </div>
                        </div>
                        </div>
                    </a>
                    <a href="../Catpage2/catpage2.html">
                        <div class="bt12">
                        <div class="sm">
                            <div class="smb" id="insta">
                                <p>Wishlist</p>
                            </div>
                        </div>
                        </div>
                    </a>
                    </div>`

var middle = document.getElementsByClassName("middle")[0];
    var sideCat = document.createElement("div");
    sideCat.setAttribute("class" , "sideCat");

    var container = document.createElement("div");
    container.setAttribute("class" , "container");

    container.innerHTML = `
            <center><h1>Add New Recipe</h1></center><br>
            <i class="fa-solid fa-x" onclick = "openn()"></i>
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
                    <div class="stars_container">
                        <div class="star" onclick="rate(1)"><i class="fa-regular fa-star say"></i></div>
                        <div class="star" onclick="rate(2)"><i class="fa-regular fa-star say"></i></div>
                        <div class="star" onclick="rate(3)"><i class="fa-regular fa-star say"></i></div>
                        <div class="star" onclick="rate(4)"><i class="fa-regular fa-star say"></i></div>
                        <div class="star" onclick="rate(5)"><i class="fa-regular fa-star say"></i></div>
                    </div>
                    <input type="hidden" id="stars" name="stars" required>
                    <div class="error" id="starsError"></div>
                </div>

                <div class="form-group">
                    <label for="category">Category:</label>
                    <select id="category" name="category">
                        <option value="" selected>Select category</option>
                        <option value="Biryani's">Biryani's</option>
                        <option value="Starter's">Starter's</option>
                        <option value="Dessert's">Dessert's</option>
                        <option value="Burger's">Burger's</option>
                        <option value="Non-Veg">Non-Veg</option>
                        <option value="StreetFood">StreetFood</option>
                        <option value="Pizza">Pizza</option>
                        <option value="Veg Items">Veg Items</option>
                        <option value="Salads">Salads</option>
                        <option value="Pickles">Pickles</option>
                        <option value="HomeMakes">HomeMakes</option>
                        <option value="Burger's">Burger's</option>
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
                    <button type="submit">Add Recipe</button>
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
    // createItems();

    

  const createItem = (ele) => {
    // console.log("Entered")
    var card_container = document.getElementsByClassName("card_container")[0];
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
      if(localStorage.getItem(ele.name) !== null){
        i.setAttribute("class","fa-regular fa-heart selectedd")
      }
      else{
        i.setAttribute("class","fa-regular fa-heart unselect")
      }
  
    
      i.addEventListener("click", function() {
          // console.log(ele.name)
          var arr =[ele.name , ele.stars  , ele.region , ele.src ]
          // console.log(typeof arr)
            // ele.setAttribute("class" , "selected");
            if(this.style.color == "red"){
                this.setAttribute("style" , "font-weight:0");
                this.style.color = "white";
                localStorage.removeItem(ele.name);
                createItems(0);
                
            }
            else{
                this.setAttribute("style" , "font-weight:1000");
                this.style.color = "red"; 
                localStorage.setItem(ele.name, arr);
            }
        
        }
      );
  
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
      // console.log("ele.region" , ele.region.innerHTMl , ele.region.value)
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
        sessionStorage.setItem("check" , true)
        sessionStorage.setItem(ele.name , ele);
        location.href = "../RecipeViewPageOverAll/RecipeViewPage/RecipeViewPage.html";
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
      // console.log(cover)
      card.appendChild(cover);
      photo.appendChild(i);
      card.appendChild(photo);
      card.appendChild(content);
      card_container.appendChild(card)
  }

  function getCookie(name) {
    const nameEQ = name + "=";
    const ca = document.cookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) == 0) {
            const cookieValue = c.substring(nameEQ.length, c.length);
            // console.log("Cookie value (string):", cookieValue); // Log to verify
            return JSON.parse(decodeURIComponent(cookieValue)); // Parse JSON string back to an object
        }
    }
    return null;
    }

const createItems = (ind) =>{
  // console.log(ind)
  var container = document.getElementsByClassName("card_container")[0];
  container.replaceChildren();
  for(var i of item_data[ind]){
    // console.log(i)
    createItem(i);
  }
  var req;
  Object.entries(category_data).map((ele) =>{
    if(ele[1][0] == ind){
      req = ele[0];
      
    }
  })
  console.log(req);
  console.log(typeof req)
if(localStorage.getItem("newItem") != null){
  var ar1 = (localStorage.getItem("newItem"));
  var arr = JSON.parse(ar1)
  for(let i of arr){
    console.log(i)
    if(i.category == req){
      createItem(i)
    }
  }
}
  // if(getCookie(req) != null ){
  //   createItem(getCookie(req))
  // }

  // console.log(typeof getCookie("Chicken Fajitas"))
  // for (var i of cook_ar){
  //   console.log(i[0])
  // }




}
var clos = false;
const closee = () =>{
  var card_container= document.getElementsByClassName("card_container")[0];
  var add = document.getElementsByClassName("add")[0];
  var filter = document.getElementsByClassName("filter")[0];
  var item = document.getElementsByClassName("items")[0];
  // var dummy = document.getElementsByClassName("dummy")[0];
  if(clos === false){
    
    clos = true;
    sideCat.style.left = "0px";
    sideCat.style.width = "80%";
    card_container.style.opacity = 0.2;
    filter.style.color = "#FF8225";
    filter.style.scale = 1.2;
    add.style.display = "none";
    open1 = true;
    // dummy.setAttribute("style" , "z-index : 11")
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
    // dummy.setAttribute("style" , "z-index : 0")
    
  }
}

const clearr = () =>{

var cont = document.getElementsByClassName("container")[0];
  var card_container = document.getElementsByClassName("card_container")[0];
  var categories = document.getElementsByClassName("categories")[0];
  var category = document.getElementsByClassName("category")[0];
  // var dummy = document.getElementsByClassName("dummy")[0];
    cont.style.scale = 0;
    cont.style.height = "0%"
    card_container.style.opacity = 1;
    categories.style.opacity = 1;
    category.style.opacity = 1;
    category.style.display = "block";
}
var open1 = false;
const openn = () =>{
  var cont = document.getElementsByClassName("container")[0];
  var card_container = document.getElementsByClassName("card_container")[0];
  var categories = document.getElementsByClassName("categories")[0];
  var category = document.getElementsByClassName("category")[0];
  var smb1 = document.getElementsByClassName("smb")[0];
  var smb2 = document.getElementsByClassName("smb")[1];
  console.log(category)
  // var dummy = document.getElementsByClassName("dummy")[0];
  if(open1 == false && ((localStorage.getItem("user") === "nryadav" && localStorage.getItem("pass") === "Nryadav@123" ) ||
  (localStorage.getItem("user") === "saichandu" && localStorage.getItem("pass") === "Saichandu@123") || 
  (localStorage.getItem("user") === "mani" && localStorage.getItem("pass") === "Mani@123") ||
  (localStorage.getItem("user") === "deepthi" && localStorage.getItem("pass") === "Deepthi@123") ||
  (localStorage.getItem("user") === "chandu" && localStorage.getItem("pass") === "Chandu@123") ||
  (localStorage.getItem("user") === "abhiram" && localStorage.getItem("pass") === "Abhiram@123"))){
    open1 = true;
    cont.style.scale = 1;
    cont.style.height = "90%"
    card_container.style.opacity = 0.2;
    categories.style.opacity = 0.2;
    category.style.opacity = 0.2;
    smb1.style.opacity = 0.2;
    smb2.style.opacity = 0.2;
    // dummy.setAttribute("style" , "z-index : 11")
  }
  else if (open1 == true){
    open1 = false;
    cont.style.scale = 0;
    cont.style.height = "0%"
    card_container.style.opacity = 1;
    categories.style.opacity = 1;
    category.style.opacity = 1;
    category.style.display = "block";
    smb1.style.opacity = 1;
    smb2.style.opacity = 1;
    // dummy.setAttribute("style" , "z-index : 0")
  }
  else{
    alert("Only admins have the access to add a Recipe!")
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
    createItems(0);
})



// const apend = (obj) => {
//   var k = obj.name;
//   var v = JSON.stringify(obj);
//   sessionStorage.setItem(k,v);
// };

// const nry=()=>{
//   const x = sessionStorage.getItem('Chocolate Cup Cake')
//   const y = JSON.parse(x)
//   console.log(y.src)
// }

// nry()


const fun = () =>{
  
  container.style.scale = 0;
}

document.getElementById('recipeForm').addEventListener('submit', function(event) {
  document.querySelectorAll('.error').forEach(el => el.textContent = '');
  event.preventDefault()

  let valid = true;

  const name = document.getElementById('recipeName').value.trim();
  const imageURL = document.getElementById('imageURL').value.trim();
  const stars = parseInt(document.getElementById('stars').value, 10);
  const ingredients = document.getElementById('ingredients').value.trim();
  const region = document.getElementById('region').value.trim();
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

  if (!process) {
      document.getElementById('processError').textContent = 'Process is required.';
      valid = false;
  }
  if (!region) {
    document.getElementById('region').textContent = 'Region is required.';
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
    // console.log("eneted")
      const recipe = {
          name: name,
          imageURL: imageURL,
          stars: stars,
          region : region,
          ingredients: ingredients,
          process: process,
          videoURL: videoURL,
          category: category
      };
      // console.log(recipe)
      console.log(imageURL)
      var obj = {
        src : imageURL,
        name : name,
        stars : stars,
        region :region,
      }
      // console.log(obj)
      // console.log(category_data[recipe.category][0]);
      item_data[category_data[recipe.category][0]].push(obj);
      event.preventDefault();
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

      // Function to set a cookie with an object
      // console.log(recipe.name , recipe);
function setCookie(name, value, days) {
  const jsonStr = JSON.stringify(value); // Convert the object to a JSON string
  const d = new Date();
  d.setTime(d.getTime() + (days * 24 * 60 * 60 * 1000));
  const expires = "expires=" + d.toUTCString();
  document.cookie = name + "=" + encodeURIComponent(jsonStr) + ";" + expires + ";path=/";
  // console.log("Cookie set:", document.cookie); 
}

// Example object to store

// Set the cookie
// console.log(recipe.name , recipe);
setCookie(recipe.name, recipe,365);

if(localStorage.getItem("newItem") == null){
  var a = []
  a.push(recipe);
  var s = JSON.stringify(a);
  localStorage.setItem("newItem" ,s);
}
else{
  var a = JSON.parse(localStorage.getItem("newItem"));
  a.push(recipe);
  var s = JSON.stringify(a);
  localStorage.setItem("newItem" , s);
}

  
      // sessionStorage.setItem("check" , false);
      // var x = JSON.stringify(recipe)
      // sessionStorage.setItem( x, 1);
      // location.href = "../RecipeViewPageOverAll/RecipeViewPage/RecipeViewPage.html"
  }
  else{
      event.preventDefault();
  }
});

const rate = (n) =>{
  var stars = document.getElementsByClassName("say");
  for (let i = 0; i < stars.length; i++) {
      if(i < n){
          stars[i].classList.remove('fa-regular');
          stars[i].classList.add('fa-solid', 'selected');
      }
      else{
          stars[i].classList.remove('fa-solid', 'selected');
          stars[i].classList.add("fa-regular");
      } 
  }
  document.getElementById('stars').value = n;
}
