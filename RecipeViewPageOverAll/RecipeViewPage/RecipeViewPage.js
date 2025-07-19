// alert(window.innerWidth)

var lk = document.getElementById('icon61');
     var dlk = document.getElementById('icon62');
    function like(event) {
        if (lk) { 
            if (lk.style.color === 'white' && dlk.style.color === 'white') {
                lk.style.color = "#FF8225";  
                lk.classList.toggle('animate6'); 
            } else if (lk.style.color === 'white' || dlk.style.color === '#FF8225') {
                lk.style.color = "#FF8225"; 
                lk.classList.toggle('animate6'); 
                dlk.style.color = "white";  
            } else {
                lk.classList.toggle('animate6'); 
                lk.style.color = "white";   
            }
        }
    }
    function dislike(event) {
        if (dlk) { 
            if (dlk.style.color === 'white' && lk.style.color === 'white') {
                dlk.style.color = "#FF8225"; 
                dlk.classList.toggle('animate6');
            } else if (dlk.style.color === 'white' || lk.style.color === '#FF8225') {
                dlk.style.color = "#FF8225";  
                dlk.classList.toggle('animate6');
                lk.style.color = "white";    
            } else {
                dlk.classList.toggle('animate6');
                dlk.style.color = "white";    
            }
        }
    }
    var left_down = document.getElementsByClassName('left6_down')[0];
    var comment_container = document.getElementsByClassName('comments6')[0];

    function cmt6(i,event){
        // event.preventDefault();
        var a =document.getElementById(i);
       
      if(a.value!="")
      {
        var parent=document.createElement('div');
        parent.setAttribute('class','cmt1');
        var x=document.createElement('div');
        x.innerHTML=`<i class="fa-solid fa-user" id="icon63"></i>`;
        x.setAttribute('class','cmt_left');
        parent.appendChild(x);

        var ryt =document.createElement('div');
        ryt.setAttribute('class','cmt_right');
        parent.appendChild(ryt);
        
        var name;
        // localStorage.setItem("name","chandu");
        var z= localStorage[name];
        var usr=document.createElement('div');
        usr.setAttribute('class','usr_id');
        usr.innerHTML=z;
        ryt.appendChild(usr);


        var cm=document.createElement('div');
        cm.setAttribute('class','usr_cmt');
        // console.log(a.value);
        cm.innerHTML=a.value;
        ryt.appendChild(cm);

    comment_container.insertBefore(parent,comment_container.firstChild);
    a.value="";
    event.preventDefault();
      }
    }

var gifs={
    "Chicken Dum Biryani": "https://www.youtube.com/embed/Qc3yCFj3WGM",
    "Mutton Biryani" : "https://www.youtube.com/embed/opwWrRCpiF4",
    "Avakai Chicken Biryani" :"https://www.youtube.com/embed/VBgG6-ekVMo",
    "Pot Biryani" :"https://www.youtube.com/embed/OukAivuILcU",
    "Chicken Keema" :"https://www.youtube.com/embed/11ytlXsKzjI",
    // "Creamy Tomato Soup":"https://tse3.mm.bing.net/th?id=OIP.DG8KNQoo0KkH2aAEYlfWrgHaJ4&pid=Api&P=0&h=180",
    "Grilled Chicken Wings" :"https://www.youtube.com/embed/zGkrIsY04l8",
    "Mutton Keema Samosa": "https://www.youtube.com/embed/7MvHhw9SQxI?feature=share",
    "Mini Paneer Samosa" :"https://www.youtube.com/embed/R29FVCTtgQQ",
    "Strawberry Shortcake" : "https://www.youtube.com/embed/Fyib9rLhvLE",
    // "Soan Papidi":"https://www.youtube.com/embed/ZIrdvAII7-E",
    "Chocolate Cup Cake":"https://www.youtube.com/embed/YCTuQ_JcuuU",
    "Black Forest Cake":"https://www.youtube.com/embed/iSOUuwgQC0o",
    "Gulab Jamun":"https://www.youtube.com/embed/YWnFUz1wjHI",
    "Chicken Burger":"https://www.youtube.com/embed/whpJ2nuMw7c",
    "Turkey Burger":"https://www.youtube.com/embed/C3qvKvpWwAI",
    "Classic Cheese Burger":"https://www.youtube.com/embed/mZ6BaP1N-EA",
    "Butter Burger":"https://www.youtube.com/embed/FKRCRMtgYKs",
    "Naatukodi Pulusu":"https://www.youtube.com/embed/Lmt3gsriyl8",
    "Fish Curry":"https://www.youtube.com/embed/n_g82-l1iPo",
    "Mutton Curry": "https://www.youtube.com/embed/FX9xv2Y0emA",
    "Prawns Curry": "https://www.youtube.com/embed/iIsVQthADDM",
    "Creamy Tomato Soup" :"https://www.youtube.com/embed/yJAhZpgBol4",
    "Pani Puri": "https://www.youtube.com/embed/6ajvId3HS0c",
    "Chat": "https://www.youtube.com/embed/JfwcECXaMc0",
    "Pav Bhaji": "https://www.youtube.com/embed/iZscuC2tEMI",
    "Vada Pav": "https://www.youtube.com/embed/YJYlcLQiI6k",
    "Margherita Pizza": "https://www.youtube.com/embed/EZJUkNEftEE",
    "BBQ Chicken Pizza": "https://www.youtube.com/embed/YIrPOXQcRgA",
    "Veggie Pizza": "https://www.youtube.com/embed/YmAczzbJp4w",
    "Paneer Butter Masala":"https://www.youtube.com/embed/LOMzjbjgRlc",
    "Vegetable Biryani":"https://www.youtube.com/embed/uEFYAe62uTU",
    "Aloo Gobi":"https://www.youtube.com/embed/FJFiwq51_1I?feature=share",
    "Carrot Beetroot Salad":"https://www.youtube.com/embed/Jf5EOv2WjGw",
    "Sprouted Moong Salad":"https://www.youtube.com/embed/e7X6mCbvfCI",
    "Mango Pickle":"https://www.youtube.com/embed/B9YAm0pjXZs",
    "Lemon Pickle":"https://www.youtube.com/embed/cQAo0EXi1gA",

}


var ingrediants ={
    "Chicken Dum Biryani":"1/2 kilo Chicken || 250 gms Basmati Rice (1.5 cup) || 1/4 cup Curd || 1 Onion || 1 Tomato || 2 tsp Chopped Mint leaves || 2 tsp Chopped Coriander Leaves || 1 tsp Mirchi Powder || Salt || 1/2 tsp Turmeric || 1 tbsp Ginger Garlic Paste || 5 Cloves || 4 Cardamoms || 1 inch Cinnamon || 1 Biryani leaf || 1 tsp Black Cumin Seeds || 1/2 tsp Garam Masala || 1 tsp Coriander Powder || 1 tsp Roasted Cumin Powder || 2 1/4 cups Water || 3 tbsps Oil",
    "Mutton Biryani" : "Onions (sliced) || Oil (125 ml) || Tender Meat (1 kg) || Raw Papaya Skin (1/4 cup) || Green Chillies (4) || Ginger Garlic Paste (2 - 2 1/2 tbsp) || Salt (3 1/2 tsp) || Coriander Powder (2 tsp) || Roasted Cumin Powder (2 tsp) || Mirchi (3 tbsp) || Turmeric (1/4 tsp) || Garam Masala (1 tbsp + 1/4 tsp) || Black Cumin (1 tsp + 1 tbsp) || Cloves (6 - 7 + 10 - 12) || Cinnamon (2 inches + 4 inches) || Biryani Leaves (2 + 3) || Cardamoms (5 + 5) || Kapok Seeds (2, broken)",
    "Avakai Chicken Biryani" :"Chicken (1 kg) || Rice (Basmati, 1/2 kg, soaked for an hour) || Oil (1/4 cup) || Onions (sliced, 2 large) || Ginger Garlic Paste (2 tbsp) || Green Chillies (3-4, slit) || Tomatoes (2, chopped) || Avakai Pickle (1/2 cup) || Yogurt (1/2 cup) || Red Chilli Powder (1 tbsp) || Turmeric Powder (1/2 tsp) || Coriander Powder (1 tbsp) || Cumin Powder (1 tsp) || Garam Masala (1 tsp) || Cinnamon Stick (1 inch) || Cloves (4-5) || Cardamom Pods (3-4) ",
    "Pot Biryani" :"Chicken (1 kg) || Basmati Rice (1/2 kg, soaked for an hour) || Oil (1/4 cup + for frying onions) || Onions (sliced, 2 large) || Ginger Garlic Paste (2 tbsp) || Green Chillies (3-4, slit) || Tomatoes (2, chopped) || Avakai Pickle (1/2 cup) || Yogurt (1/2 cup) || Red Chilli Powder (1 tbsp) || Turmeric Powder (1/2 tsp) || Coriander Powder (1 tbsp) || Cumin Powder (1 tsp) || Garam Masala (1 tsp + for sprinkling) || Cinnamon Stick (1 inch + for boiling rice) ",
    "Chicken Keema" :"Chicken Keema (minced chicken, 500g) || Oil (3 tbsp) || Onions (finely chopped, 2 medium) || Tomatoes (finely chopped, 2 medium) || Ginger Garlic Paste (2 tbsp) || Green Chillies (2-3, finely chopped) || Red Chilli Powder (1 tsp) || Turmeric Powder (1/2 tsp) || Coriander Powder (1 tsp) || Cumin Powder (1/2 tsp) || Garam Masala (1/2 tsp) || Cinnamon Stick (1 inch) || Cloves (3-4) || Cardamom Pods (2-3)",
    "Creamy Tomato Soup" :"Tomatoes (4 large, chopped) || Onion (1 medium, chopped) || Garlic (2-3 cloves, minced) || Carrot (1 small, chopped) || Celery (1 stalk, chopped) || Olive Oil (2 tbsp) || Tomato Paste (2 tbsp) || Vegetable Broth (4 cups) || Heavy Cream (1/2 cup) || Salt (to taste) || Black Pepper (to taste) || Sugar (1 tsp, optional) || Basil (fresh, a few leaves for garnish) || Croutons (optional, for serving)",
    "Grilled Chicken Wings" :"Chicken Wings (1 kg) || Olive Oil (2 tbsp) || Garlic Powder (1 tsp) || Onion Powder (1 tsp) || Paprika (1 tsp) || Cayenne Pepper (1/2 tsp) || Salt (1 tsp) || Black Pepper (1/2 tsp) || Lemon Juice (2 tbsp) || Honey (1 tbsp, optional) || Fresh Parsley (chopped, for garnish)",
    "Mutton Keema Samosa" : "Mutton Keema (minced mutton, 500g) || Oil (3 tbsp + for frying) || Onions (finely chopped, 2 medium) || Green Chillies (2-3, finely chopped) || Ginger Garlic Paste (2 tbsp) || Turmeric Powder (1/2 tsp) || Red Chilli Powder (1 tsp) || Coriander Powder (1 tsp) || Cumin Powder (1/2 tsp) || Garam Masala (1/2 tsp) || Salt (to taste) || Green Peas (optional, 1/2 cup) || Fresh Coriander Leaves (finely chopped, 1/4 cup) ",
    "Mini Paneer Samosa" :"Paneer (crumbled, 200g) || Oil (2 tbsp + for frying) || Onions (finely chopped, 1 medium) || Green Chillies (2, finely chopped) || Ginger Garlic Paste (1 tsp) || Turmeric Powder (1/4 tsp) || Red Chilli Powder (1/2 tsp) || Coriander Powder (1 tsp) || Cumin Powder (1/2 tsp) || Garam Masala (1/4 tsp) || Salt (to taste) || Fresh Coriander Leaves (finely chopped, 2 tbsp) || Lemon Juice (1 tbsp) ",
    "Strawberry Shortcake" : "All-Purpose Flour (2 cups) || Granulated Sugar (1/4 cup) || Baking Powder (1 tbsp) || Salt (1/2 tsp) || Unsalted Butter (1/2 cup, cold and cubed) || Heavy Cream (3/4 cup) || Egg (1, beaten) || Vanilla Extract (1 tsp) || Fresh Strawberries (1 pound, hulled and sliced) || Granulated Sugar (1/4 cup) || Lemon Juice (1 tbsp) || Heavy Cream (1 cup) || Powdered Sugar (2 tbsp) || Vanilla Extract (1 tsp)",
    // "Soan Papidi":"Gram Flour (Besan, 1 cup) || All-Purpose Flour (Maida, 1 cup) || Ghee (Clarified Butter, 1 cup) || Sugar (2 cups) || Water (1/2 cup) || Cardamom Powder (1/2 tsp) || Milk (1/4 cup) || Lemon Juice (1 tsp) || Pistachios (chopped, 2 tbsp) || Almonds (chopped, 2 tbsp)",
    "Chocolate Cup Cake":"All-Purpose Flour (1 cup) || Granulated Sugar (1 cup) || Cocoa Powder (1/3 cup) || Baking Powder (1 tsp) || Baking Soda (1/2 tsp) || Salt (1/4 tsp) || Egg (1, large) || Milk (1/2 cup) || Vegetable Oil (1/4 cup) || Vanilla Extract (1 tsp) || Boiling Water (1/2 cup) || Butter (1/2 cup, softened) || Powdered Sugar (1 3/4 cups) || Cocoa Powder (1/3 cup) || Milk (1/3 cup) || Vanilla Extract (1 tsp)",
    "Black Forest Cake":"All-Purpose Flour (1 1/2 cups) || Granulated Sugar (1 1/2 cups) || Cocoa Powder (3/4 cup) || Baking Powder (1 1/2 tsp) || Baking Soda (1 1/2 tsp) || Salt (1 tsp) || Eggs (2, large) || Milk (1 cup) || Vegetable Oil (1/2 cup) || Vanilla Extract (2 tsp) || Boiling Water (1 cup) || Heavy Cream (2 cups, chilled) || Powdered Sugar (1/2 cup) || Vanilla Extract (1 tsp) || Cherry Pie Filling (1 can, about 21 oz)",
    "Gulab Jamun":"Khoya (Mawa, 1 cup, grated) || All-Purpose Flour (2 tbsp) || Baking Soda (1/4 tsp) || Milk (2-3 tbsp, or as needed) || Ghee or Oil (for frying) || Granulated Sugar (2 cups) || Water (1 1/2 cups) || Cardamom Pods (3-4, crushed) || Rose Water (1 tsp, optional) || Saffron Strands (a few, optional)",
    "Chicken Burger":"Ground Chicken (500g) || Breadcrumbs (1/2 cup) || Egg (1, beaten) || Garlic Powder (1 tsp) || Onion Powder (1 tsp) || Paprika (1 tsp) || Salt (1/2 tsp) || Black Pepper (1/2 tsp) || Chopped Fresh Parsley (2 tbsp, optional) || Olive Oil (1 tbsp, for cooking) || Burger Buns (4) || Lettuce Leaves (4) || Tomato Slices (4) || Pickles (4-8 slices) || Cheese Slices (4, optional) || Mayonnaise (4 tbsp) ",
    "Turkey Burger":"Ground Turkey (500g) || Breadcrumbs (1/2 cup) || Egg (1, beaten) || Garlic Powder (1 tsp) || Onion Powder (1 tsp) || Dried Oregano (1/2 tsp) || Salt (1/2 tsp) || Black Pepper (1/2 tsp) || Chopped Fresh Parsley (2 tbsp, optional) || Olive Oil (1 tbsp, for cooking) || Burger Buns (4) || Lettuce Leaves (4) || Tomato Slices (4) || Pickles (4-8 slices) || Cheese Slices (4, optional) || Mayonnaise (4 tbsp) ",
    "Classic Cheese Burger":"Ground Beef (500g, 80% lean) || Salt (1 tsp) || Black Pepper (1/2 tsp) || Garlic Powder (1/2 tsp, optional) || Onion Powder (1/2 tsp, optional) || Cheese Slices (4, American or Cheddar) || Olive Oil (1 tbsp, for cooking) || Burger Buns (4) || Lettuce Leaves (4) || Tomato Slices (4) || Pickles (4-8 slices) || Onion Slices (4-8 slices, optional) || Mayonnaise (4 tbsp) || Ketchup (4 tbsp) ",
    "Butter Burger":"Ground Beef (500g, 80% lean) || Salt (1 tsp) || Black Pepper (1/2 tsp) || Butter (4 tbsp, softened) || Burger Buns (4) || Lettuce Leaves (4) || Tomato Slices (4) || Pickles (4-8 slices) || Onion Slices (4-8 slices, optional) || Cheese Slices (4, optional) || Mayonnaise (4 tbsp) || Ketchup (4 tbsp) || Mustard (optional, 4 tbsp)",
    "Naatukodi Pulusu":"Chicken (500g, cut into pieces) || Onions (2, finely chopped) || Tomatoes (2, finely chopped) || Tamarind Extract (1/4 cup) || Green Chilies (2-3, slit) || Ginger-Garlic Paste (1 tbsp) || Red Chili Powder (1-2 tsp, to taste) || Turmeric Powder (1/2 tsp) || Coriander Powder (1 tbsp) || Cumin Powder (1 tsp) || Fenugreek Seeds (1/4 tsp) || Mustard Seeds (1/2 tsp) || Curry Leaves (a handful) ",
    "Fish Curry":"Fish (500g, cut into pieces, preferably firm fish like tilapia or cod) || Onions (2, finely chopped) || Tomatoes (2, finely chopped) || Ginger-Garlic Paste (1 tbsp) || Green Chilies (2, slit) || Red Chili Powder (1-2 tsp, to taste) || Turmeric Powder (1/2 tsp) || Coriander Powder (1 tbsp) || Cumin Powder (1 tsp) || Garam Masala (1/2 tsp) || Coconut (1/2 cup, grated) || Curry Leaves (a handful) ",
    "Mutton Curry": "Mutton (500g, cut into pieces) || Onions (2, finely chopped) || Tomatoes (2, finely chopped) || Ginger-Garlic Paste (1 tbsp) || Green Chilies (2, slit) || Red Chili Powder (1-2 tsp, to taste) || Turmeric Powder (1/2 tsp) || Coriander Powder (1 tbsp) || Cumin Powder (1 tsp) || Garam Masala (1/2 tsp) || Yogurt (1/2 cup) || Coconut (1/2 cup, grated, optional) || Curry Leaves (a handful) ",
    "Prawns Curry": "Prawns (500g, peeled and deveined) || Onions (2, finely chopped) || Tomatoes (2, finely chopped) || Ginger-Garlic Paste (1 tbsp) || Green Chilies (2, slit) || Red Chili Powder (1-2 tsp, to taste) || Turmeric Powder (1/2 tsp) || Coriander Powder (1 tbsp) || Cumin Powder (1 tsp) || Garam Masala (1/2 tsp) || Coconut (1/2 cup, grated) || Curry Leaves (a handful) || Mustard Seeds (1/2 tsp) ",
    "Pani Puri": "Puri (store-bought or homemade, 20-25) || Boiled Potatoes (2, mashed) || Boiled Chickpeas or Black Gram (1/2 cup) || Chopped Onions (1/2 cup) || Chopped Coriander Leaves (1/4 cup) || Tamarind Chutney (1/2 cup) || Mint Chutney (1/2 cup) || Spicy Pani (Mint Water) || Tamarind (1/2 cup) || Mint Leaves (1 cup) || Coriander Leaves (1/2 cup) || Green Chilies (2-3) || Black Salt (1 tsp) ",
    "Chat": "Boiled Potatoes (2, chopped) || Chopped Onions (1/2 cup) || Chopped Tomatoes (1/2 cup) || Chopped Coriander Leaves (1/4 cup) || Sev (1/2 cup) || Papdis (10-12, crushed) || Tamarind Chutney (1/2 cup) || Mint Chutney (1/2 cup) || Yogurt (1/2 cup, whisked) || Chaat Masala (1 tsp) || Roasted Cumin Powder (1 tsp) || Red Chili Powder (1/2 tsp) || Salt (to taste)",
    "Pav Bhaji": "Pav (8 pieces) || Boiled and Mashed Potatoes (3) || Chopped Onions (2) || Chopped Tomatoes (2) || Green Peas (1/2 cup) || Chopped Capsicum (1) || Ginger-Garlic Paste (1 tbsp) || Pav Bhaji Masala (2 tbsp) || Red Chili Powder (1 tsp) || Turmeric Powder (1/2 tsp) || Butter (3-4 tbsp) || Salt (to taste) || Chopped Coriander Leaves (1/4 cup) || Lemon Wedges (for garnish)",
    "Vada Pav": "Pav Buns (8 pieces) || Boiled Potatoes (3, mashed) || Chopped Onions (1) || Ginger-Garlic Paste (1 tsp) || Green Chilies (2, finely chopped) || Turmeric Powder (1/2 tsp) || Mustard Seeds (1/2 tsp) || Curry Leaves (a handful) || Besan (Gram Flour) (1 cup) || Red Chili Powder (1/2 tsp) || Salt (to taste) || Oil (for frying) || Chopped Coriander Leaves (1/4 cup) || Green Chutney (1/2 cup) || Tamarind Chutney (1/2 cup)",
    "Margherita Pizza": "Pizza Dough (1 ball) || Tomato Sauce (1/2 cup) || Fresh Mozzarella (200g, sliced) || Fresh Basil Leaves (a handful) || Olive Oil (2 tbsp) || Salt (to taste) || Black Pepper (to taste) || Salt (to taste) || Oil or Ghee (4 tbsp) || Saffron (a few strands, soaked in 2 tbsp milk) || Fried Onions (for garnish) || Whole Spices (1 bay leaf, 4 cloves, 4 cardamom pods, 1 cinnamon stick)",
    // "Mutton Curry": "",
    "BBQ Chicken Pizza": "Pizza Dough (1 ball) || BBQ Sauce (1/2 cup) || Shredded Mozzarella Cheese (200g) || Cooked Chicken Breast (1 cup, shredded) || Red Onion (1/2, thinly sliced) || Cilantro (1/4 cup, chopped) || Olive Oil (2 tbsp) || Salt (to taste) || Oil or Ghee (4 tbsp) || Saffron (a few strands, soaked in 2 tbsp milk) || Fried Onions (for garnish) || Whole Spices (1 bay leaf, 4 cloves, 4 cardamom pods, 1 cinnamon stick)",
    // "Mutton Curry": "",
    "Paneer Butter Masala":"Paneer (250g, cubed) || Tomatoes (4, pureed) || Onions (2, finely chopped) || Ginger-Garlic Paste (1 tbsp) || Butter (3-4 tbsp) || Cream (1/2 cup) || Cashew Nuts (10-12, soaked and blended into a paste) || Red Chili Powder (1 tsp) || Turmeric Powder (1/2 tsp) || Garam Masala (1 tsp) || Kasuri Methi (1 tsp, dried fenugreek leaves) || Salt (to taste) || Fresh Coriander Leaves (for garnish)",
    "Veggie Pizza": "Pizza Dough (1 ball) || Tomato Sauce (1/2 cup) || Shredded Mozzarella Cheese (200g) || Bell Peppers (1/2 cup, sliced) || Red Onion (1/2, sliced) || Mushrooms (1/2 cup, sliced) || Black Olives (1/4 cup, sliced) || Cherry Tomatoes (1/2 cup, halved) || Olive Oil (2 tbsp) || Dried Oregano (1 tsp)",
    "Vegetable Biryani":"Basmati Rice (2 cups, soaked for 30 minutes) || Mixed Vegetables (2 cups, chopped: carrots, peas, beans, potatoes) || Onions (2, sliced) || Tomatoes (2, chopped) || Ginger-Garlic Paste (1 tbsp) || Green Chilies (2, slit) || Yogurt (1/2 cup) || Mint Leaves (1/4 cup, chopped) || Coriander Leaves (1/4 cup, chopped) || Biryani Masala (2 tbsp) || Red Chili Powder (1 tsp) || Turmeric Powder (1/2 tsp) ",
    "Aloo Gobi":"Potatoes (2, peeled and cubed) || Cauliflower (1 medium, cut into florets) || Onions (1, finely chopped) || Tomatoes (2, chopped) || Ginger-Garlic Paste (1 tbsp) || Green Chilies (2, slit) || Turmeric Powder (1/2 tsp) || Red Chili Powder (1 tsp) || Coriander Powder (1 tsp) || Cumin Seeds (1/2 tsp) || Garam Masala (1/2 tsp) || Salt (to taste) || Oil (2 tbsp) || Fresh Coriander Leaves (for garnish)",
    "Mango Pickle":"Raw Mangoes (1 kg, diced) || Salt (1/4 cup) || Turmeric Powder (2 tbsp) || Red Chili Powder (1/4 cup) || Mustard Seeds (2 tbsp, coarsely ground) || Fenugreek Seeds (2 tbsp, coarsely ground) || Fennel Seeds (2 tbsp, coarsely ground) || Nigella Seeds (1 tbsp) || Asafoetida (1/2 tsp) || Mustard Oil (1 cup, heated and cooled)",
    "Carrot Beetroot Salad":"Carrots (2, grated) || Beetroot (1, grated) || Green Chilies (2, finely chopped) || Fresh Coriander Leaves (2 tbsp, chopped) || Lemon Juice (2 tbsp) || Salt (to taste) || Black Pepper (to taste) || Cumin Seeds (1/2 tsp) || Oil (1 tsp)",
    "Sprouted Moong Salad":"Sprouted Moong Beans (1 cup) || Tomato (1, chopped) || Cucumber (1, diced) || Onion (1, finely chopped) || Green Chilies (2, finely chopped) || Fresh Coriander Leaves (2 tbsp, chopped) || Lemon Juice (2 tbsp) || Salt (to taste) || Chaat Masala (1/2 tsp, optional)",
    "Lemon Pickle":"Lemons (10, cut into quarters) || Salt (1/4 cup) || Turmeric Powder (1 tbsp) || Red Chili Powder (2 tbsp) || Mustard Seeds (2 tbsp) || Fenugreek Seeds (1 tbsp) || Asafoetida (1/2 tsp) || Mustard Oil (1 cup) || Sugar (1/2 cup, optional)"
}
var procedure={
    "Chicken Dum Biryani":"Heat Oil in a Cooker and add Cloves, Cinnamon, Cardamoms, Black Cumin Seeds, Biryani Leaf and fry until they give out a nice aroma. || Add sliced onion and fry till the color changes to golden brown. || When you get a good color, add Ginger Garlic Paste, Turmeric, Mirchi Powder, Coriander Powder, Cumin Powder and Garam Masala and fry. || Add diced tomatoes and let them cook until soft. || Take the Chicken soaked in saltwater for an hour, add it to the spices and fry on high flame for 4-5 minutes. || Add 2 cups of water. || Take the soaked Basmati Rice, mix well. || Add whisked Curd, Chopped Mint leaves, Chopped Green Coriander. || Mix and cook in the pressure cooker on high flame for two whistles. || Switch it off and leave it for 30 minutes. || After 30 minutes, turn it over from the bottom with a flat spoon. || There is your Perfect Chicken Pulao.",
    "Mutton Biryani" :"Add chopped Onions to half a cup of boiling Oil and fry till they turn golden. || Remove Onions while they are changing colour and set them aside in a sieve so that they turn fully golden by the time they cool. || Grind Raw Papaya Pieces, Green Chilles and Nutmeg Powder into a smooth paste, adding some water. || Add Meat to a thick-bottomed vessel and add the spices to marinate. || Coat the Meat with the spices and rub it and slap it onto the Vessel for 5-6 minutes and keep it in the fridge for at least 3 hours. Overnight, if possible, would be even better. || Wash half a kilo of Rice and soak it in water. || Boil Water, add spices and let them boil on a high flame for 5-6 minutes. || Take ½ Cup from the boiling Water and mix in the marinated Meat. Then the Meat won’t stick to the bottom and the spices won’t dry up after Dum. || The boiling water should be as salty as sea water. Add Salt if not adequate. || Add Rice to the boiling Water and cook it 50% on a high flame. || Cooking up to 50% is the grain stays semi intact if you bite it. || Take more than half of half-cooked Rice and spread it on the Meat. (Do not press with a spoon). || Then take half of 60% cooked Rice. Then, after another 3 minutes, add the 70% cooked Rice. Add that along with spices. || Add Green Coriander, Mint, Garam Masala, Saffron Milk, Ghee, Fried onions and Water from cooked Rice to the Biryani Rice. || Pour the Rice Water along the edges. || Stick wet flour paste to the edges of the Biryani vessel. Then cover it and put a weight on the cover so that the steam doesn’t escape. || On a pan, place the Biryani vessel and Dum it on high flame until the steam rushes out. Then reduce and Dum for another 25 minutes. || Finally, switch off the stove and leave it on the pan for 30 minutes. || After 30 minutes, turn it over and serve the aromatic Kacchi Gosht Hyderabadi Biryani with cool Raita.",
    "Avakai Chicken Biryani" :"Prepare Biryani Masala: Blend all Biryani masala ingredients to a fine powder. || Marinate the Chicken: Marinate the chicken with the blended masala powder and other marinade ingredients. Refrigerate for 2 hours. || Cook the Chicken: Heat oil in a deep vessel. Add Black Cardamom, Cardamom Pods, Cloves, and Cinnamon to the hot oil. Add the marinated chicken. Pour in water. Cover and cook on high flame for 5 minutes, then on medium flame for 10 minutes, stirring intermittently. || Add Avakai Pickle: Mix a quarter cup of water and Green Chillies into the Avakai pickle. Add this pickle to the simmering chicken. Cook until the oil separates. Remove the vessel from the flame and set aside. || Prepare the Rice: Add all the masala ingredients, Green Chillies, and Salt to water and bring to a boil. Add soaked rice and Lemon Juice to the boiling water. Cook on high flame until the rice is 70% cooked. || Layering the Biryani: Add the cooked chicken to the 70% cooked rice. Add red food color, Fried Onions, Oil, and Rice starch to the rice. ||  Dum Cooking: Prepare a maida (all-purpose flour) paste and apply it on the rim of the vessel to seal tightly. Cook on high flame for 5 minutes and on low flame for 3 minutes. Leave it covered for 20 minutes. If steam gets heavy, turn off the stove. || Garnish and Serve: Garnish with Fried Onions. Serve with chilled Raita.",
    "Pot Biryani" :"Oil the Pot: Pour oil in a pot and coat the pot with the oil using a ladle. || Fry Spices and Onions: In the hot oil, add cinnamon, cloves, and the rest of the spices and the onions and fry till golden. || Add Chicken: Once the onions are half fried, add the chicken pieces and fry on a high flame for 3 minutes and garlic ginger paste. || Add Spices and Cook: Add salt, mirchi powder, coriander powder, turmeric, garam masala, green chillies and let cook for another 2 minutes. Then add mint leaves, coriander, curd, and lemon juice, mix well. Cook for another 5 minutes and remove from fire. || Make Mint Paste: Add all the ingredients for the mint paste and make a smooth paste. || Boil Water for Rice: Boil water for rice and add all the spices, mint paste, and salt and let boil. || Cook Rice: In the boiling water, add the soaked basmati rice and cook on high flame to 60%. Strain it and spread it in two layers on the cooked chicken. || Layer and Cook Rice: Cook for another 3 minutes on a high flame to 70%. Spread it as a layer and cook for another 2 minutes to 80%. Strain the rice and spread it as the final layer. || Final Layer: On the biryani pour the boiling water. Add ghee spreading it on the biryani. Sprinkle fried onions, chopped coriander leaves, and garam masala. || Seal and Dum Cook: Spread the maida flour paste to the edges of the pot in a thin layer, cover tight and make a small hole near the lid. Place the biryani pot on the stove and cook on high flame until steam comes out fast from the small hole. || Final Dum: Once the steam comes out, reduce flame and dum for another 3 minutes on a low flame. Switch off the stove and let it rest for 30 minutes. || Mix and Serve: After 30 minutes, mix well from the bottom. This biryani tastes great with Mirchi Ka Salan and cool raita.",
    "Chicken Keema" : "Heat Oil: Heat oil in a large pan or skillet over medium heat. || Fry Whole Spices: Add cinnamon stick, cloves, cardamom pods, and bay leaf. Fry for a few seconds until fragrant. || Sauté Onions: Add finely chopped onions and sauté until golden brown. || Add Ginger Garlic Paste: Add ginger garlic paste and green chillies. Sauté for 2-3 minutes until the raw smell disappears. || Add Tomatoes: Add finely chopped tomatoes and cook until they become soft and the oil starts to separate. || Add Spices: Add red chilli powder, turmeric powder, coriander powder, and cumin powder. Cook for a couple of minutes, stirring continuously. || Add Chicken Keema: Add the minced chicken (chicken keema) and cook on medium-high heat, stirring continuously to break up any lumps. Cook until the chicken is browned. || Add Yogurt and Peas: Add beaten yogurt and green peas (if using). Mix well. || Simmer: Add salt to taste and a little water if needed. Reduce the heat to low, cover, and simmer for 15-20 minutes, stirring occasionally, until the keema is cooked through and the flavors have melded together. || Add Garam Masala and Lemon Juice: Add garam masala and lemon juice. Mix well and cook for another 2-3 minutes. || Garnish and Serve: Garnish with fresh coriander leaves. Serve hot with roti, naan, or rice.",
    "Creamy Tomato Soup":"Heat Olive Oil: Heat olive oil in a large pot over medium heat. || Sauté Vegetables: Add chopped onion, garlic, carrot, and celery. Sauté until the vegetables are softened, about 5-7 minutes. || Add Tomatoes: Add chopped tomatoes and tomato paste. Cook for another 5 minutes, stirring occasionally. || Add Broth: Pour in the vegetable broth. Bring to a boil, then reduce heat and simmer for 20-25 minutes, until the vegetables are very soft. || Blend Soup: Use an immersion blender to blend the soup until smooth, or transfer to a blender in batches and blend until smooth. || Add Cream: Return the blended soup to the pot (if using a blender). Stir in the heavy cream. || Season: Season with salt, black pepper, and sugar (if using) to taste. Simmer for another 5 minutes to heat through. || Serve: Ladle the soup into bowls. Garnish with fresh basil leaves and croutons, if desired.",
    "Grilled Chicken Wings": "Prepare Marinade: In a large bowl, mix olive oil, garlic powder, onion powder, paprika, cayenne pepper, salt, black pepper, lemon juice, and honey (if using). || Marinate Wings: Add chicken wings to the bowl and toss to coat evenly with the marinade. Cover and refrigerate for at least 1 hour, preferably overnight. || Preheat Grill: Preheat your grill to medium-high heat. || Grill Wings: Place the marinated chicken wings on the grill. Cook for about 20-25 minutes, turning occasionally, until the wings are crispy and cooked through. The internal temperature should reach 165°F (74°C). || Garnish and Serve: Transfer the grilled wings to a serving plate. Garnish with chopped fresh parsley. Serve hot.",
   "Mutton Keema Samosa" : "Heat Oil: Heat oil in a large pan over medium heat. || Sauté Onions: Add finely chopped onions and green chillies, and sauté until the onions turn golden brown. || Add Ginger Garlic Paste: Add ginger garlic paste and sauté for 2-3 minutes until the raw smell disappears. || Add Spices: Add turmeric powder, red chilli powder, coriander powder, and cumin powder. Cook for a couple of minutes, stirring continuously. || Add Mutton Keema: Add the minced mutton (mutton keema) and cook on medium-high heat, stirring continuously to break up any lumps. Cook until the mutton is browned and cooked through. || Add Green Peas and Garam Masala: Add green peas (if using) and garam masala. Mix well and cook for another 5 minutes. || Season and Finish Filling: Add salt to taste, lemon juice, and finely chopped fresh coriander leaves. Mix well and cook for another 2-3 minutes. Remove from heat and let the filling cool completely. || Prepare Samosas: Take a samosa sheet or pastry. Fold it into a cone shape and fill it with the cooled mutton keema mixture. Seal the edges with the flour paste. || Heat Oil for Frying: Heat oil in a deep frying pan over medium heat. || Fry Samosas: Fry the samosas in batches until they are golden brown and crispy. Drain on paper towels to remove excess oil. || Serve: Serve the mutton keema samosas hot with mint chutney or tamarind chutney.",
   "Mini Paneer Samosa" :"Heat Oil: Heat oil in a pan over medium heat. || Sauté Onions: Add finely chopped onions and green chillies. Sauté until the onions turn golden brown. || Add Ginger Garlic Paste: Add ginger garlic paste and sauté for 1-2 minutes until the raw smell disappears. || Add Spices: Add turmeric powder, red chilli powder, coriander powder, and cumin powder. Cook for a couple of minutes, stirring continuously. || Add Paneer: Add crumbled paneer and mix well with the spices. Cook for 3-4 minutes. || Season and Finish Filling: Add garam masala, salt to taste, lemon juice, and finely chopped fresh coriander leaves. Mix well and cook for another 2 minutes. Remove from heat and let the filling cool completely. || Prepare Samosas: Take a samosa sheet or pastry. Cut it into small strips. Fold each strip into a cone shape and fill it with the cooled paneer mixture. Seal the edges with the flour paste. || Heat Oil for Frying: Heat oil in a deep frying pan over medium heat. || Fry Samosas: Fry the mini samosas in batches until they are golden brown and crispy. Drain on paper towels to remove excess oil. || Serve: Serve the mini paneer samosas hot with mint chutney or tamarind chutney.",
"Strawberry Shortcake" : "Prepare Strawberries: In a large bowl, combine sliced strawberries, granulated sugar, and lemon juice. Toss to coat and let sit for at least 30 minutes to macerate. || Preheat Oven: Preheat your oven to 425°F (220°C). || Mix Dry Ingredients: In a large mixing bowl, whisk together flour, granulated sugar, baking powder, and salt. || Cut in Butter: Add cold, cubed butter to the dry ingredients. Use a pastry cutter or your fingers to cut the butter into the flour mixture until it resembles coarse crumbs. || Add Wet Ingredients: In a separate bowl, combine heavy cream, beaten egg, and vanilla extract. Pour the wet ingredients into the flour mixture and stir until just combined. Do not overmix. || Form Shortcakes: Turn the dough out onto a lightly floured surface and gently knead it a few times. Pat the dough into a rectangle about 1-inch thick. Use a biscuit cutter or a glass to cut out rounds of dough. Place the rounds on a baking sheet lined with parchment paper. || Bake Shortcakes: Brush the tops of the shortcakes with a little heavy cream and sprinkle with sugar. Bake for 12-15 minutes, or until the shortcakes are golden brown. Remove from the oven and let cool completely. || Make Whipped Cream: In a chilled mixing bowl, whip the heavy cream, powdered sugar, and vanilla extract until stiff peaks form. || Assemble Shortcakes: Once the shortcakes have cooled, slice them in half horizontally. Place the bottom halves on serving plates, spoon a generous amount of macerated strawberries over them, and top with a dollop of whipped cream. Place the top halves of the shortcakes over the whipped cream and add more strawberries and whipped cream on top, if desired. || Serve: Serve immediately and enjoy your delicious strawberry shortcake!",
// "Soan Papidi":"Prepare Flour Mixture: In a large mixing bowl, combine gram flour (besan) and all-purpose flour (maida). Mix well. || Heat Ghee: Heat ghee in a heavy-bottomed pan over medium heat until melted. || Roast Flour Mixture: Add the flour mixture to the melted ghee and roast on low heat, stirring continuously, until it turns golden brown and releases a nutty aroma. This may take about 15-20 minutes. || Prepare Sugar Syrup: In a separate saucepan, combine sugar and water. Heat on medium heat until the sugar dissolves completely. || Add Milk: Add milk to the sugar syrup and bring it to a boil. Remove any impurities that float to the surface using a spoon. || Add Lemon Juice: Add lemon juice to the sugar syrup and continue boiling until the syrup reaches a one-string consistency. || Combine Mixtures: Gradually add the sugar syrup to the roasted flour mixture, stirring continuously to combine. Add cardamom powder and mix well. || Beat the Mixture: Remove the mixture from the heat and transfer it to a large plate or a flat surface. Beat the mixture with a fork or a spatula until it starts to harden and becomes flaky. || Spread and Garnish: Spread the mixture evenly on a greased plate or tray. Sprinkle chopped pistachios and almonds on top and press them gently into the mixture. || Cut into Pieces: Allow the mixture to cool slightly, then cut it into square or diamond-shaped pieces while it is still warm. || Cool Completely: Let the Soan Papdi cool completely and set before serving.",
    "Chocolate Cup Cake":"Preheat Oven: Preheat your oven to 350°F (175°C). Line a muffin tin with cupcake liners. || Mix Dry Ingredients: In a large bowl, sift together all-purpose flour, granulated sugar, cocoa powder, baking powder, baking soda, and salt. || Combine Wet Ingredients: In another bowl, beat the egg. Add milk, vegetable oil, and vanilla extract. Mix well. || Combine Mixtures: Add the wet ingredients to the dry ingredients and mix until just combined. Do not overmix. || Add Boiling Water: Gradually add boiling water to the batter, mixing until smooth. The batter will be thin. || Fill Cupcake Liners: Pour the batter into the cupcake liners, filling each about 2/3 full. || Bake: Bake for 18-20 minutes, or until a toothpick inserted into the center comes out clean. Remove from the oven and let cool in the pan for 10 minutes, then transfer to a wire rack to cool completely. || Make Frosting: In a medium bowl, beat softened butter until creamy. Gradually add powdered sugar and cocoa powder, beating until combined. Add milk and vanilla extract, and beat until the frosting is smooth and fluffy. || Frost Cupcakes: Once the cupcakes are completely cool, frost them with the chocolate frosting using a piping bag or a spatula. || Serve: Decorate with sprinkles or other toppings if desired. Serve and enjoy your delicious chocolate cupcakes!",
    "Black Forest Cake":"Preheat Oven: Preheat your oven to 350°F (175°C). Grease and flour two 9-inch round cake pans. || Mix Dry Ingredients: In a large bowl, sift together all-purpose flour, granulated sugar, cocoa powder, baking powder, baking soda, and salt. || Combine Wet Ingredients: In another bowl, beat the eggs. Add milk, vegetable oil, and vanilla extract. Mix well. || Combine Mixtures: Add the wet ingredients to the dry ingredients and mix until just combined. Gradually add boiling water to the batter, mixing until smooth. The batter will be thin. || Bake Cake Layers: Pour the batter evenly into the prepared cake pans. Bake for 30-35 minutes, or until a toothpick inserted into the center comes out clean. Remove from the oven and let the cakes cool in the pans for 10 minutes, then transfer to a wire rack to cool completely. || Prepare Whipped Cream: In a chilled mixing bowl, whip the heavy cream, powdered sugar, and vanilla extract until stiff peaks form. || Assemble Cake: Once the cake layers are completely cool, level the tops if necessary. Place one cake layer on a serving plate. Brush with kirsch or cherry liqueur if using. Spread a layer of cherry pie filling over the cake, then spread a layer of whipped cream over the cherries. || Add Second Layer: Place the second cake layer on top. Brush with kirsch or cherry liqueur if using. Frost the top and sides of the cake with the remaining whipped cream. || Garnish: Garnish the cake with dark chocolate shavings and maraschino cherries. || Chill and Serve: Refrigerate the cake for at least 1 hour before serving to allow the flavors to meld.",
    "Gulab Jamun":"Prepare Sugar Syrup: In a large saucepan, combine granulated sugar and water. Heat over medium heat, stirring until the sugar dissolves completely. || Add Flavors: Add crushed cardamom pods, rose water, and saffron strands (if using). Bring the mixture to a boil, then reduce the heat and let it simmer for 5-10 minutes until it becomes slightly sticky. Remove from heat and set aside. || Prepare Gulab Jamun Dough: In a mixing bowl, combine grated khoya, all-purpose flour, and baking soda. Mix well. Gradually add milk, a little at a time, and knead until you get a smooth, soft dough. The dough should not be too sticky or too dry. || Shape the Dough: Divide the dough into small portions and roll each portion into a smooth ball without cracks. || Heat Oil: Heat ghee or oil in a deep frying pan over medium-low heat. The oil should be hot but not smoking. || Fry Gulab Jamun: Gently slide the dough balls into the hot oil, a few at a time, and fry them, stirring constantly, until they are golden brown and cooked through. This should take about 5-7 minutes per batch. || Soak in Syrup: Once fried, remove the Gulab Jamun with a slotted spoon and drain excess oil. Immediately transfer them to the warm sugar syrup. Let them soak for at least 1-2 hours to absorb the syrup and become soft and juicy. || Serve: Serve the Gulab Jamun warm or at room temperature, garnished with chopped nuts if desired.",
    "Chicken Burger":"Prepare Patties: In a large bowl, combine ground chicken, breadcrumbs, beaten egg, garlic powder, onion powder, paprika, salt, black pepper, and chopped parsley (if using). Mix well until all ingredients are combined. || Shape Patties: Divide the mixture into 4 equal portions and shape each portion into a patty. || Cook Patties: Heat olive oil in a skillet over medium heat. Cook the chicken patties for 5-6 minutes on each side, or until they are cooked through and have an internal temperature of 165°F (74°C). || Prepare Buns: Toast the burger buns if desired. Spread mayonnaise on the bottom half of each bun. || Assemble Burgers: Place a cooked chicken patty on each bun. Top with lettuce, tomato slices, pickles, and cheese (if using). Spread ketchup and mustard (if using) on the top half of the bun. || Serve: Place the top bun on the assembled ingredients and serve the chicken burgers hot.",
    "Turkey Burger":"Prepare Patties: In a large bowl, combine ground turkey, breadcrumbs, beaten egg, garlic powder, onion powder, dried oregano, salt, black pepper, and chopped parsley (if using). Mix well until all ingredients are combined. || Shape Patties: Divide the mixture into 4 equal portions and shape each portion into a patty. || Cook Patties: Heat olive oil in a skillet over medium heat. Cook the turkey patties for 5-6 minutes on each side, or until they are cooked through and have an internal temperature of 165°F (74°C). || Prepare Buns: Toast the burger buns if desired. Spread mayonnaise on the bottom half of each bun. || Assemble Burgers: Place a cooked turkey patty on each bun. Top with lettuce, tomato slices, pickles, and cheese (if using). Spread ketchup and mustard (if using) on the top half of the bun. || Serve: Place the top bun on the assembled ingredients and serve the turkey burgers hot.",
    "Classic Cheese Burger":"Prepare Patties: In a large bowl, season the ground beef with salt, black pepper, garlic powder, and onion powder (if using). Gently mix until combined. Divide the mixture into 4 equal portions and shape each portion into a patty, making a slight indentation in the center of each patty to help it cook evenly. || Cook Patties: Heat olive oil in a skillet or grill pan over medium-high heat. Cook the patties for 4-5 minutes on each side, or until they reach your desired level of doneness. Place a cheese slice on each patty during the last minute of cooking, covering the skillet with a lid to melt the cheese. || Prepare Buns: Toast the burger buns if desired. Spread mayonnaise on the bottom half of each bun. || Assemble Burgers: Place a cooked beef patty with melted cheese on each bun. Top with lettuce, tomato slices, pickles, and onion slices (if using). Spread ketchup and mustard (if using) on the top half of the bun. || Serve: Place the top bun on the assembled ingredients and serve the cheeseburgers hot.",
    "Butter Burger":"Prepare Patties: In a large bowl, season the ground beef with salt and black pepper. Gently mix until combined. Divide the mixture into 4 equal portions and shape each portion into a patty, making a slight indentation in the center of each patty. || Cook Patties: Heat a skillet or grill pan over medium-high heat. Cook the patties for 4-5 minutes on each side, or until they reach your desired level of doneness. Add a dollop of butter on top of each patty during the last minute of cooking, letting it melt over the patty. || Prepare Buns: Toast the burger buns if desired. Spread mayonnaise on the bottom half of each bun. || Assemble Burgers: Place a cooked beef patty with melted butter on each bun. Top with lettuce, tomato slices, pickles, and onion slices (if using). Add cheese slices if desired. Spread ketchup and mustard (if using) on the top half of the bun. || Serve: Place the top bun on the assembled ingredients and serve the Butter Burgers hot.",
    "Naatukodi Pulusu":"Heat Oil: In a large pot or deep pan, heat oil over medium heat. || Prepare Tempering: Add mustard seeds and fenugreek seeds. Once they start to splutter, add finely chopped onions and curry leaves. Sauté until the onions turn golden brown. || Add Aromatics: Add ginger-garlic paste and slit green chilies. Sauté for a couple of minutes until the raw smell disappears. || Cook Chicken: Add chicken pieces to the pot and cook for 5-7 minutes, stirring occasionally until the chicken starts to brown. || Add Spices: Add red chili powder, turmeric powder, coriander powder, and cumin powder. Mix well and cook for another 5 minutes. || Add Tomatoes: Add chopped tomatoes and cook until they turn soft and oil starts to separate from the mixture. || Add Tamarind Extract: Pour in the tamarind extract and water. Stir well, bring to a boil, and then reduce the heat. || Simmer: Cover and let it simmer for 20-25 minutes, or until the chicken is cooked through and tender. Adjust the consistency by adding more water if needed. || Season and Garnish: Add salt to taste and garnish with fresh coriander leaves. || Serve: Serve hot with rice or rotis.",
    "Fish Curry":"Heat Oil: In a large pan or pot, heat oil over medium heat. || Prepare Tempering: Add mustard seeds and curry leaves. Once the mustard seeds start to splutter, add finely chopped onions. Sauté until the onions turn golden brown. || Add Aromatics: Add ginger-garlic paste and slit green chilies. Sauté for a couple of minutes until the raw smell disappears. || Cook Tomatoes: Add chopped tomatoes and cook until they turn soft and oil starts to separate from the mixture. || Add Spices: Add red chili powder, turmeric powder, coriander powder, cumin powder, and garam masala. Mix well and cook for a few minutes. || Add Coconut: Add grated coconut and cook for 2-3 minutes, stirring occasionally. || Add Fish: Gently add the fish pieces to the pan and mix carefully to coat them with the spice mixture. || Add Water: Pour in water (adjust the quantity based on the desired consistency) and bring to a boil. Reduce the heat and let it simmer for 10-15 minutes, or until the fish is cooked through and tender. || Add Tamarind Extract (optional): If using tamarind extract, add it at this stage and mix well. || Season and Garnish: Add salt to taste and garnish with fresh coriander leaves. || Serve: Serve hot with rice or rotis.",
     "Mutton Curry": "Heat Oil: In a large pan or pressure cooker, heat oil over medium heat. || Prepare Tempering: Add mustard seeds and whole spices (bay leaf, cloves, cardamom pods, cinnamon stick). Once they start to splutter, add finely chopped onions. Sauté until the onions turn golden brown. || Add Aromatics: Add ginger-garlic paste and slit green chilies. Sauté for a couple of minutes until the raw smell disappears. || Cook Tomatoes: Add chopped tomatoes and cook until they turn soft and oil starts to separate from the mixture. || Add Spices: Add red chili powder, turmeric powder, coriander powder, cumin powder, and garam masala. Mix well and cook for a few minutes. || Add Mutton: Add the mutton pieces and cook for 5-7 minutes, stirring occasionally until they start to brown. || Add Yogurt and Coconut (optional): Add yogurt and grated coconut (if using). Mix well and cook for another 5 minutes. || Add Water: Pour in water (adjust the quantity based on the desired consistency) and bring to a boil. Reduce the heat and let it simmer for 45-60 minutes, or until the mutton is tender and cooked through. If using a pressure cooker, cook for about 20-25 minutes after the first whistle. || Season and Garnish: Add salt to taste and garnish with fresh coriander leaves. || Serve: Serve hot with rice, naan, or roti.",
     
     "Prawns Curry": "Heat Oil: In a large pan or pot, heat oil over medium heat. || Prepare Tempering: Add mustard seeds and curry leaves. Once the mustard seeds start to splutter, add finely chopped onions. Sauté until the onions turn golden brown. || Add Aromatics: Add ginger-garlic paste and slit green chilies. Sauté for a couple of minutes until the raw smell disappears. || Cook Tomatoes: Add chopped tomatoes and cook until they turn soft and oil starts to separate from the mixture. || Add Spices: Add red chili powder, turmeric powder, coriander powder, cumin powder, and garam masala. Mix well and cook for a few minutes. || Add Coconut: Add grated coconut and cook for 2-3 minutes, stirring occasionally. || Add Prawns: Gently add the prawns to the pan and mix carefully to coat them with the spice mixture. || Add Water: Pour in water (adjust the quantity based on the desired consistency) and bring to a boil. Reduce the heat and let it simmer for 5-7 minutes, or until the prawns are cooked through and tender. Avoid overcooking the prawns as they can become rubbery. || Add Tamarind Extract (optional): If using tamarind extract, add it at this stage and mix well. || Season and Garnish: Add salt to taste and garnish with fresh coriander leaves. || Serve: Serve hot with rice or rotis.",
     "Pani Puri": "Prepare Filling: Mix boiled potatoes, boiled chickpeas or black gram, chopped onions, and chopped coriander leaves. Season with salt. || Prepare Pani: Blend mint leaves, coriander leaves, green chilies, tamarind, and some water to make a paste. Mix this paste with cold water, black salt, roasted cumin powder, and salt. Adjust seasoning and chill in the refrigerator. || Assemble Pani Puri: Crack a hole in the center of each puri. Fill with a spoonful of the potato mixture. Add a little tamarind chutney and mint chutney. Dip into the prepared spicy pani and enjoy.",
     "Chat": "Prepare Base: In a large bowl, mix boiled potatoes, chopped onions, chopped tomatoes, and chopped coriander leaves. || Add Chutneys: Add tamarind chutney and mint chutney to the potato mixture. Mix well. || Assemble Chat: Spread the mixture on a serving plate. Top with crushed papdis, sev, whisked yogurt, chaat masala, roasted cumin powder, red chili powder, and salt. Garnish with more chopped coriander leaves and serve immediately.",
     "Pav Bhaji": "Prepare Bhaji: Heat butter in a large pan. Add chopped onions and sauté until golden brown. Add ginger-garlic paste and sauté for a minute. Add chopped tomatoes and cook until soft. Add chopped capsicum, boiled peas, and mashed potatoes. Mix well. || Add Spices: Add pav bhaji masala, red chili powder, turmeric powder, and salt. Cook for 5-7 minutes, mashing the vegetables with a masher. Add water as needed to adjust the consistency. || Cook Pav: Slice pav buns and toast them with butter on a griddle until golden brown. || Serve: Serve the bhaji hot, garnished with chopped coriander leaves and lemon wedges, along with the buttered pav buns.",
     "Vada Pav": "Prepare Potato Filling: Heat a little oil in a pan. Add mustard seeds and let them splutter. Add curry leaves, chopped onions, ginger-garlic paste, and green chilies. Sauté until onions turn golden. Add turmeric powder, mashed potatoes, salt, and chopped coriander leaves. Mix well and cook for a few minutes. Let it cool and then form small balls. || Prepare Batter: In a bowl, mix besan, red chili powder, salt, and water to make a thick batter. || Fry Vadas: Heat oil in a deep pan. Dip the potato balls in the batter and fry until golden brown. Drain on paper towels. || Assemble Vada Pav: Slice pav buns and spread green chutney and tamarind chutney on the insides. Place a vada in each bun. Serve hot with more chutney and fried green chilies.",
     "Margherita Pizza": "Prepare Dough: Preheat your oven to 475°F (245°C). Roll out the pizza dough on a floured surface to your desired thickness. || Add Sauce: Spread the tomato sauce evenly over the dough, leaving a small border for the crust. || Add Toppings: Arrange the fresh mozzarella slices on top of the sauce. || Bake Pizza: Bake in the preheated oven for 10-12 minutes, or until the crust is golden and the cheese is bubbly and slightly browned. || Garnish: Remove from the oven and immediately add fresh basil leaves. Drizzle with olive oil and season with salt and black pepper. || Serve: Slice and serve hot.",
     //  "Mutton Curry": "",
     "BBQ Chicken Pizza": "Prepare Dough: Preheat your oven to 475°F (245°C). Roll out the pizza dough on a floured surface to your desired thickness. || Add Sauce: Spread the BBQ sauce evenly over the dough, leaving a small border for the crust. || Add Cheese: Sprinkle the shredded mozzarella cheese over the sauce. || Add Toppings: Arrange the shredded chicken and red onion slices evenly on top of the cheese. || Bake Pizza: Bake in the preheated oven for 10-12 minutes, or until the crust is golden and the cheese is bubbly and slightly browned. || Garnish: Remove from the oven and immediately sprinkle with chopped cilantro. Drizzle with olive oil. || Serve: Slice and serve hot.",
     "Veggie Pizza": "Prepare Dough: Preheat your oven to 475°F (245°C). Roll out the pizza dough on a floured surface to your desired thickness. || Add Sauce: Spread the tomato sauce evenly over the dough, leaving a small border for the crust. || Add Cheese: Sprinkle the shredded mozzarella cheese over the sauce. || Add Toppings: Arrange bell peppers, red onion, mushrooms, black olives, and cherry tomatoes evenly on top of the cheese. || Bake Pizza: Bake in the preheated oven for 10-12 minutes, or until the crust is golden and the cheese is bubbly and slightly browned. || Garnish: Remove from the oven and drizzle with olive oil. Sprinkle with dried oregano. || Serve: Slice and serve hot.",
     "Paneer Butter Masala":"Prepare Base: Heat butter in a pan. Add finely chopped onions and sauté until golden brown. Add ginger-garlic paste and sauté for a minute. || Add Tomatoes: Add tomato puree and cook until the oil separates from the mixture. || Add Spices: Add red chili powder, turmeric powder, garam masala, and salt. Mix well and cook for a few minutes. || Add Cashew Paste: Add the cashew paste and cook for another 2-3 minutes, stirring constantly. || Add Paneer: Add paneer cubes and mix gently. Cook for 5-7 minutes. || Add Cream: Add cream and kasuri methi. Mix well and simmer for another 2 minutes. || Garnish: Garnish with fresh coriander leaves. || Serve: Serve hot with naan, roti, or rice.",
     "Vegetable Biryani":"Cook Rice: Cook basmati rice in boiling salted water with whole spices (bay leaf, cloves, cardamom pods, cinnamon stick) until 70% done. Drain and set aside. || Prepare Vegetables: Heat oil or ghee in a large pan. Add sliced onions and sauté until golden brown. Add ginger-garlic paste and slit green chilies. Sauté for a minute. || Add Tomatoes: Add chopped tomatoes and cook until they turn soft. || Add Vegetables: Add chopped mixed vegetables and cook for 5-7 minutes. || Add Spices: Add biryani masala, red chili powder, turmeric powder, and salt. Mix well. || Add Yogurt: Add yogurt, chopped mint leaves, and coriander leaves. Cook for another 5 minutes. || Layer Biryani: In a heavy-bottomed pot, layer the cooked vegetables and partially cooked rice alternately. Drizzle saffron milk on top. || Dum Cooking: Cover tightly with a lid and cook on low heat for 20-25 minutes. || Garnish: Garnish with fried onions. || Serve: Serve hot with raita or salad.",
    //  "Mutton Curry": "",
    //  "Mutton Curry": "",
    "Aloo Gobi":"Heat Oil: In a pan, heat oil. Add cumin seeds and let them splutter. || Add Onions: Add finely chopped onions and sauté until golden brown. || Add Ginger-Garlic Paste: Add ginger-garlic paste and slit green chilies. Sauté for a couple of minutes. || Add Tomatoes: Add chopped tomatoes and cook until they turn soft and oil separates from the mixture. || Add Spices: Add turmeric powder, red chili powder, coriander powder, and salt. Mix well. || Add Vegetables: Add potato cubes and cauliflower florets. Mix well to coat them with the spice mixture. || Cook Covered: Cover and cook on low heat until the vegetables are tender, stirring occasionally. || Add Garam Masala: Add garam masala and mix well. Cook for another 2 minutes. || Garnish: Garnish with fresh coriander leaves. || Serve: Serve hot with roti or rice.",
    "Sprouted Moong Salad":"Combine Ingredients: In a large bowl, combine sprouted moong beans, chopped tomato, cucumber, finely chopped onion, and green chilies. || Season: Add lemon juice, salt, and chaat masala (if using). || Toss Salad: Toss everything well to combine. || Garnish: Garnish with fresh coriander leaves. || Serve: Serve immediately.",
    "Lemon Pickle":"Prepare Lemons: Wash and cut lemons into quarters. Mix with salt and turmeric powder. Keep aside for 3-4 days. || Dry Spices: Dry roast mustard seeds and fenugreek seeds. Grind coarsely. || Mix Spices: Mix ground spices, red chili powder, and asafoetida with the lemons. || Add Oil: Heat mustard oil until smoking, then cool slightly. Pour over the lemon-spice mixture and mix well. || Add Sugar: Add sugar if using and mix until dissolved. || Store: Store in a clean, dry jar and keep in the sun for a week, shaking the jar daily.",
     "Mango Pickle":"Prepare Mangoes: Wash and cut raw mangoes into pieces. Mix with salt and turmeric powder. Keep aside for 1-2 days, stirring occasionally. || Dry Spices: Dry roast fennel seeds, fenugreek seeds, nigella seeds, and mustard seeds. Grind coarsely. || Mix Spices: Mix ground spices, red chili powder, and asafoetida with the mango pieces. || Heat Oil: Heat mustard oil until smoking, then cool slightly. || Combine: Pour oil over the mango-spice mixture and mix well. || Store: Store in a clean, dry jar and keep in the sun for a few days, shaking the jar daily.",
    "Carrot Beetroot Salad":"Prepare Vegetables: In a large bowl, combine grated carrots and beetroot. || Add Chilies and Coriander: Add finely chopped green chilies and fresh coriander leaves. || Season: Add lemon juice, salt, and black pepper. || Temper: In a small pan, heat oil and add cumin seeds. Allow them to splutter and then pour over the salad. || Toss Salad: Toss everything well to combine. || Serve: Serve immediately.",
}

var images = {
    "Chicken Dum Biryani": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvhTEoD_LDAWAe4ON6y2QgSz4f69TwS8cujA&ss",
    "Mutton Biryani" : "https://img.freepik.com/premium-photo/vibrant-photo-taste-tradition-heavenly-biri_1177965-4010.jpg",
    "Avakai Chicken Biryani" :"https://vismaifood.com/storage/app/uploads/public/b3b/132/dc7/thumb__700_0_0_0_auto.jpg",
    "Pot Biryani" :"https://lh3.googleusercontent.com/EJvV6DVonRsslbtKliaaTg8FaTym80F1-mNKU_XU0o1QekSrqPGGg27nWdkapkX2RCD-9ckDS4uWKEAOBX7Mh69g0Qg=w1200-rw",
    "Chicken Keema" :"https://tse3.mm.bing.net/th?id=OIP.gqSuYomTi9JSE0nW0_RLLwHaJQ&pid=Api&P=0&h=180",
    "Creamy Tomato Soup":"https://tse3.mm.bing.net/th?id=OIP.DG8KNQoo0KkH2aAEYlfWrgHaJ4&pid=Api&P=0&h=180",
    "Grilled Chicken Wings" :"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxRplxMCZHoiGdXy77BZklgizyHBq1QX9QNw&s",
    "Mutton Keema Samosa": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSQbS0gVK8_rTyXBRJ6BK-rQ-6KxvCV_bfjA&s",
    "Mini Paneer Samosa" :"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPSf_u4UihCfkRaRgtaQTDS0aD33ViBxt5HQ&s",
    "Strawberry Shortcake" : "https://www.foodandwine.com/thmb/icW1Ihr9TrvgsKSfK2BYr0rJD9M=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/strawberryshortcake_ft_recipe201954-2000-2c0255ecbf6e4010929b25a9fe7edb4b.jpg",
    // "Soan Papidi":"https://www.tasteofhome.com/wp-content/uploads/2021/01/soan-papdi-indian-dessert.jpg?fit=700,700",
    "Chocolate Cup Cake":"https://www.foodandwine.com/thmb/8kG9exL-yA6jgsy5n6rZpkLqxUc=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/HD-201301-r-choc-cupcake-peanut-butter-filling-9171713459fd4d97815ed4b5b8bd6ba9.jpg",
    "Black Forest Cake":"https://media.cnn.com/api/v1/images/stellar/prod/181127110638-21-50-sweets-travel-black-forest-cake.jpg?q=w_1015,c_fill/f_webp",
    "Gulab Jamun":"https://i.pinimg.com/736x/d9/ca/46/d9ca46ad7f0ea797cc75bbe7bf28c3bc.jpg",
    "Chicken Burger":"https://hips.hearstapps.com/hmg-prod/images/singleimagebug-chicken-burger-1556207758.jpg?crop=1xw:0.9453781512605042xh;center,top&resize=980:*",
    "Turkey Burger":"https://hips.hearstapps.com/hmg-prod/images/turkey-burger-lead-6481ed42f294e.jpg?crop=0.669xw:1.00xh;0.115xw,0&resize=980:*",
    "Classic Cheese Burger":"https://hips.hearstapps.com/hmg-prod/images/210331-delish-burger-anatomy-21238-eb-1651775542.jpeg?crop=0.615xw:0.615xh;0.183xw,0.0687xh&resize=980:*",
    "Butter Burger":"https://images.immediate.co.uk/production/volatile/sites/2/2021/05/Burger-fdbcbf4.jpg?quality=90&webp=true&resize=2200,1465",
    "Naatukodi Pulusu":"https://img.freepik.com/premium-photo/bowl-chicken-curry-with-green-white-rim_1239531-87.jpg?w=1380",
    "Fish Curry":"https://vismaifood.com/storage/app/uploads/public/770/92e/8e6/thumb__700_0_0_0_auto.jpg",
    "Mutton Curry": "https://img.freepik.com/premium-photo/spicy-beef-curry-goan-style-beef-vindaloo-traditional-indian-lamb-beef-curry_781325-3643.jpg?w=1380",
    "Prawns Curry": "https://vismaifood.com/storage/app/uploads/public/8c6/190/485/thumb__700_0_0_0_auto.jpg",
    "Pani Puri": "https://tse2.mm.bing.net/th?id=OIP.MnZUvJsNWkwD5kLqcedeDgHaE6&pid=Api&P=0&h=180",
    "Chat": "https://tse4.mm.bing.net/th?id=OIP.kPWR-O_8dgwcaM8BVfkp1AAAAA&pid=Api&P=0&h=180",
    "Pav Bhaji": "https://tse2.mm.bing.net/th?id=OIP.fRZW1j0fLNdRzYyxRcu8wgHaFj&pid=Api&P=0&h=180",
    "Vada Pav": "https://tse4.mm.bing.net/th?id=OIP.16z3UwJZKE5EFINNKuHFsAHaEv&pid=Api&P=0&h=180",
    "Margherita Pizza": "https://tse3.mm.bing.net/th?id=OIP.oWI38yAzSDcjDvT8xVFlcwEjDW&pid=Api&P=0&h=180",
    "BBQ Chicken Pizza": "https://tse3.mm.bing.net/th?id=OIP.j8s8JIWtuVECDMqM3qNVQgHaLH&pid=Api&P=0&h=180",
    "Veggie Pizza": "https://tse2.mm.bing.net/th?id=OIP.kSg-XNzZXhtVFJ_344RzoQHaLH&pid=Api&P=0&h=180",
    // "Mutton Curry": "",
    "Paneer Butter Masala":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSc33n-NqzJFK4RYY5vOFXQMZsUTiAKlfppFA&s",
    "Vegetable Biryani":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1Ja24UiG96COANQY6LXyBO8eDYqBxYweOoQ&s",
    "Aloo Gobi":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlmS7qVvLisBtTcTn6QXhOcLLHqSYwRwFcbg&s",
    "Carrot Beetroot Salad":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTk_1UYhqEvEdj5yGMG7BRk-GFMbPG3wh49_Q&s",
    "Sprouted Moong Salad":"https://cdn.tarladalal.com/members/9306/procstepimgs/sprouted-moong-salad-(12)-12-187793.jpg",
    "Mango Pickle":"https://ministryofcurry.com/wp-content/uploads/2023/04/aam-ka-achar_.jpg",
     "Lemon Pickle":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAbgc4_KiZePzHkgj4EUjRQJBZUPAR5mlcdQ&s",
     
}
// var obj={
//     "name":"Fried Rice",
//     "videoURL":"https://www.youtube.com/shorts/CI5Vb7G6jEw",
//     "imageURL":"https://tse1.mm.bing.net/th?id=OIP.VUY_kEOiv7NZiRELktauuQHaLH&pid=Api&P=0&h=180",
//     "ingredients":"nfid,ifiewf,uewuerv,reu",
//     "process":"jnashssj,hjdjd,hbcjff,ncdjd,hbddn"
// }

function apend(obj)
{
    console.log(obj)
    console.log(typeof obj.name)
    console.log(obj.name)
    var e=obj["videoURL"].replace("shorts","embed");
    var f=obj["process"].replaceAll(","," || ");
    var g=obj["ingredients"].replaceAll(",","||");
    var s = obj.name;

    console.log(e)
    console.log(f)
    console.log(g)
    console.log(s)
     gifs[s]=e;
     procedure[s]=f;
     ingrediants[s]=g;
     images[s]=obj["imageURL"];
     console.log(procedure[obj.name]);
     console.log(images[obj.name]);
     console.log(ingrediants[obj.name]);
     console.log(gifs[obj.name])
}


const onloadd = () =>{

    console.log("loaded")
    if(sessionStorage.getItem("check") == "true"){
        console.log("Iteme opend")
        Object.keys(sessionStorage).map((ele) =>{
            // console.log(ele)
            // console.log(typeof ele)
            if(ele != "IsThisFirstTime_Log_From_LiveServer" && ele != "check"){
                // keyVal = ele;
                call(ele)
                // console.log(ele)
            }
            // console.log(ele)
            // keyVal = ele;
            sessionStorage.clear()
        })
        
    }
    else{
        Object.entries  (sessionStorage).map((ele) =>{
            console.log("Item Added")
            if(ele[0] != "IsThisFirstTime_Log_From_LiveServer" && ele[0] != "check"){
                // keyVal = ele;
                // console.log(typeof ele);
                console.log(ele[0]);
                var x = JSON.parse(ele[0]);
                apend(x);
            }
            // console.log(ele)
            // keyVal = ele;
            sessionStorage.clear()
        })
    }
}


function getCookie(name) {
    const nameEQ = name + "=";
    const ca = document.cookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) == 0) {
            const cookieValue = c.substring(nameEQ.length, c.length);
            console.log("Cookie value (string):", cookieValue); // Log to verify
            return JSON.parse(decodeURIComponent(cookieValue)); // Parse JSON string back to an object
        }
    }
    return null;
    }


function call(key) 
{
    var head=document.getElementsByClassName('up6_tittle')[0];
    var g=document.getElementsByClassName('gif')[0];
    var img=document.getElementsByClassName('img6')[0];
    var ing=document.getElementsByClassName("ing6_data")[0];
    var proc =document.getElementsByClassName("process6_data")[0];
    if(gifs[key] == null){
        var data1 = getCookie(key);
        var p = data1.process.split(",");

        head.innerHTML=key;
        let v = data1.videoURL.replace("shorts","embed");
        g.setAttribute('src',v);
        img.src=data1.imageURL;
        img.alt="no";
        ing.innerHTML=data1.ingredients.replaceAll(",","  ||  ");
        for (var i = 0; i < p.length; i++) {
            proc.innerHTML +=" • "+p[i].trim();
            var brk= document.createElement('br');
            var brk1= document.createElement('br');
            proc.appendChild(brk);
            proc.appendChild(brk1);
        }
    }
    else{
        var p = procedure[key].split('||');
        head.innerHTML=key;
        g.setAttribute('src',gifs[key]);
        img.src=images[key];
        img.alt="no";
        ing.innerHTML=ingrediants[key];
        console.log(procedure[key]);
        for (var i = 0; i < p.length; i++) {
            proc.innerHTML +="• "+p[i].trim();
            var brk= document.createElement('br');
            var brk1= document.createElement('br');
            proc.appendChild(brk);
            proc.appendChild(brk1);
        
        }
}
}
// call('Lemon Pickle')

