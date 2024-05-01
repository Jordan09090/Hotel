// Sample menu data
const menuData = {




  "1001": {
      "name": "Croissants",
      "detail": "Light, flaky pastries perfect for a morning treat.",
      "price": 8,
      "imgSrc": "Food Photos/Croissants.PNG"
    },
    "1002": {
      "name": "Assorted pastries",
      "detail": "A selection of buttery pastries with various fillings.",
      "price": 10,
      "imgSrc": "Food Photos/Assorted pastries.png"
    },
    "1003": {
      "name": "Fresh fruit platter",
      "detail": "Seasonal fruits beautifully arranged for a refreshing start.",
      "price": 12,
      "imgSrc": "Food Photos/Fresh fruit platte.png"
    },
    "1004": {
      "name": "Yogurt with granola",
      "detail": "Creamy Greek yogurt served with crunchy granola.",
      "price": 8,
      "imgSrc": "Food Photos/Yogurt with granola.png"
    },
    "1011": {
      "name": "Scrambled eggs",
      "detail": "Fluffy scrambled eggs cooked to perfection.",
      "price": 10,
      "imgSrc": "Food Photos/Scrambled eggs.png"
    },
    "1012": {
      "name": "Bacon & sausage",
      "detail": "Crispy bacon and savory sausage.",
      "price": 8,
      "imgSrc": "Food Photos/Bacon or sausage.png"
    },
    "1013": {
      "name": "Hash browns",
      "detail": "Crispy and golden-brown hash browns.",
      "price": 6,
      "imgSrc": "Food Photos/Hash browns.png"
    },
    "1014": {
      "name": "English muffin",
      "detail": "English muffin with egg and Bacon.",
      "price": 4,
      "imgSrc": "Food Photos/English muffin.png"
    },
    "1021": {
      "name": "Avocado toast",
      "detail": "Creamy avocado on toasted bread, a healthy and satisfying option.",
      "price": 9,
      "imgSrc": "Food Photos/Avocado toast.png"
    },
    "1022": {
      "name": "Poached eggs",
      "detail": "Perfectly poached eggs cooked just right, comes with two slices of bread.",
      "price": 8,
      "imgSrc": "Food Photos/Poached eggs.png"
    },
    "1023": {
      "name": "Greek yogurt with honey",
      "detail": "Thick Greek yogurt drizzled with honey.",
      "price": 7,
      "imgSrc": "Food Photos/Greek yogurt with honey.png"
    },
    "1024": {
      "name": "Fresh fruit smoothie",
      "detail": "A refreshing blend of seasonal fruits.",
      "price": 10,
      "imgSrc": "Food Photos/Fresh fruit smoothie.png"
    },
    "8081": {
      "name": "Fresh Sourdough bread toasted",
      "detail": "A Fresh Sourdough bread toasted with butter and vegemite.",
      "price": 3,
      "imgSrc": "Food Photos/Sourdough bread.png"
    },








    "2001": {
      "name": "Club sandwich",
      "detail": "Layers of turkey, bacon, lettuce, and tomato in toasted bread.",
      "price": 38,
      "imgSrc": "Food Photos/Lunch/Club sandwich.png"
    },
    "2002": {
      "name": "Grilled chicken wrap",
      "detail": "Grilled chicken and veggies wrapped in a soft tortilla.",
      "price": 28,
      "imgSrc": "Food Photos/Lunch/Grilled chicken wrap.png"
    },
    "2003": {
      "name": "Classic Beef Burger - Jordan's Way",
      "detail": "Fresh, tasted bread buns with high-quality beef topped with cheese.",
      "price": 30,
      "imgSrc": "Food Photos/Lunch/Classic Beef Burger.png"
    },
    "2004": {
      "name": "Veggie burger",
      "detail": "A delicious vegetarian patty with lettuce and tomato.",
      "price": 28,
      "imgSrc": "Food Photos/Lunch/Veggie burger.png"
    },
    "2011": {
      "name": "Caesar salad with grilled chicken",
      "detail": "Crisp romaine, grilled chicken, and Caesar dressing.",
      "price": 30,
      "imgSrc": "Food Photos/Lunch/Caesar salad with grilled chicken.png"
    },
    "2012": {
      "name": "Caprese salad",
      "detail": "Fresh mozzarella from Sicilian Alpines, tomatoes, and basil drizzled with balsamic.",
      "price": 40,
      "imgSrc": "Food Photos/Lunch/Caprese salad.png"
    },
    "2013": {
      "name": "Greek salad",
      "detail": "Cucumbers, tomatoes, feta cheese, olives, and Greek dressing.",
      "price": 26,
      "imgSrc": "Food Photos/Lunch/Greek Salad.png"
    },
    "2014": {
      "name": "Quinoa and kale salad",
      "detail": "Nutritious quinoa, kale, and assorted veggies.",
      "price": 28,
      "imgSrc": "Food Photos/Lunch/Quinoa and kale salad.png"
    },
    "2021": {
      "name": "Grilled salmon with lemon butter sauce",
      "detail": "Grilled Norwegian salmon fillet with a tangy sauce.",
      "price": 62,
      "imgSrc": "Food Photos/Lunch/Grilled salmon.png"
    },
    "2022": {
      "name": "Chicken Alfredo pasta",
      "detail": "Grilled chicken in creamy Alfredo sauce with pasta.",
      "price": 53,
      "imgSrc": "Food Photos/Lunch/Chicken Alfredo pasta.png"
    },
    "2023": {
      "name": "Beef stir-fry with vegetables",
      "detail": "A5-Wagu beef strips with a premium veggie selection in a rich savory sauce.",
      "price": 74,
      "imgSrc": "Food Photos/Lunch/Beef stir-fry with vegetables.png"
    },
    "2024": {
      "name": "Vegetarian lasagna",
      "detail": "Layers of pasta, veggies, and cheese baked to perfection.",
      "price": 37,
      "imgSrc": "Food Photos/Lunch/Vegetarian lasagna.png"
    },
    "2025": {
      "name": "Mac & Cheese",
      "detail": "Fresh Mac & Cheese - served with Parmigiano.",
      "price": 28,
      "imgSrc": "Food Photos/Lunch/Mac & Cheese.png"
    },
    "2026": {
      "name": "Side of Steamed Rice",
      "detail": "Fresh steamed rice.",
      "price": 3,
      "imgSrc": "Food Photos/Lunch/Steamed Rice.png"
    },









    "3001": {
      "name": "Garlic bread",
      "detail": "Toasted bread with garlic butter.",
      "price": 12,
      "imgSrc": "Food Photos/Dinner/Garlic bread.png"
    },
    "3002": {
      "name": "Shrimp cocktail",
      "detail": "Succulent shrimp served with cocktail sauce.",
      "price": 34,
      "imgSrc": "Food Photos/Dinner/Shrimp cocktail.png"
    },
    "3003": {
      "name": "Bruschetta",
      "detail": "Toasted bread topped with fresh tomato and basil.",
      "price": 15,
      "imgSrc": "Food Photos/Dinner/Bruschetta.png"
    },
    "3004": {
      "name": "Stuffed mushrooms",
      "detail": "Mushrooms filled with savory stuffing.",
      "price": 23,
      "imgSrc": "Food Photos/Dinner/Eggplant Parmesan.png"
    },
    "3005": {
      "name": "Soup of the day",
      "detail": "Chef's special soup.",
      "price": 24,
      "imgSrc": "Food Photos/Dinner/Soup of the day.png"
    },
    "3011": {
      "name": "Grilled ribeye steak",
      "detail": "Juicy ribeye steak grilled to your liking, served with chips.",
      "price": 189,
      "imgSrc": "Food Photos/Dinner/Grilled ribeye steak.png"
    },
    "3012": {
      "name": "Pan-seared sea bass",
      "detail": "Delicate sea bass fillet pan-seared to perfection.",
      "price": 80,
      "imgSrc": "Food Photos/Dinner/Pan-seared sea bass.png"
    },
    "3013": {
      "name": "Roast chicken with rosemary",
      "detail": "Tender roast chicken with aromatic rosemary.",
      "price": 78,
      "imgSrc": "Food Photos/Dinner/Roast chicken with rosemary.png"
    },
    "3014": {
      "name": "Eggplant Parmesan",
      "detail": "Layers of eggplant and Parmesan cheese baked until golden.",
      "price": 25,
      "imgSrc": "Food Photos/Dinner/Eggplant Parmesan.png"
    },







    "4001": {
      "name": "New York cheesecake",
      "detail": "Creamy cheesecake with a graham cracker crust.",
      "price": 10,
      "imgSrc": "Food Photos/dessert/New York cheesecake.png"
    },
    "4002": {
      "name": "Chocolate lava cake",
      "detail": "Rich chocolate cake with a molten center.",
      "price": 24,
      "imgSrc": "Food Photos/dessert/Chocolate lava cake.png"
    },
    "4003": {
      "name": "Fruit tart",
      "detail": "Fresh fruit atop a delicate pastry crust.",
      "price": 10,
      "imgSrc": "Food Photos/dessert/Fruit tart.png"
    },
    "4004": {
      "name": "Ice cream sundae",
      "detail": "Vanilla ice cream with toppings of your choice.",
      "price": 8,
      "imgSrc": "Food Photos/dessert/Ice Cream.png"
    },
    "4005": {
      "name": "Nannas Apple Pie",
      "detail": "Our Apple Pies are made with love and juicy apples - just like Nanna used to make them! The fresh premium pie is served for one.",
      "price": 12,
      "imgSrc": "Food Photos/dessert/Apple Pie.png"
    },
    "4006": {
      "name": "Chocolate chip cookies",
      "detail": "Freshly baked chocolate chip cookies.",
      "price": 6,
      "imgSrc": "Food Photos/dessert/Chocolate chip cookies.png"
    },
    "4007": {
      "name": "Brownie with vanilla ice cream",
      "detail": "Warm brownie with a scoop of vanilla ice cream and nutella source.",
      "price": 8,
      "imgSrc": "Food Photos/dessert/Brownie with vanilla ice cream.png"
    },



    "5001": {
      "name": "Chicken tenders with fries",
      "detail": "Crispy chicken tenders served with fries.",
      "price": 16,
      "imgSrc": "Food Photos/Children/Chicken tenders with fries.png"
    },
    "5002": {
      "name": "Mini cheeseburger with fries",
      "detail": "Mini beef patty, cheese, and fries.",
      "price": 21,
      "imgSrc": "Food Photos/Children/Mini cheeseburger with fries.png"
    },
    "5003": {
      "name": "Small macaroni and cheese",
      "detail": "Creamy mac and cheese.",
      "price": 12,
      "imgSrc": "Food Photos/Children/Mini cheeseburger with fries.png"
    },
    "5004": {
      "name": "Grilled cheese sandwich",
      "detail": "Grilled cheese on buttered bread.",
      "price": 8,
      "imgSrc": "Food Photos/Children/Grilled cheese sandwich.png"
    }, 
    "5005": {
      "name": "Fruit cup",
      "detail": "Fresh and colourful fruit cup.",
      "price": 6,
      "imgSrc": "Food Photos/Children/Fruit cup.png"
    }, 




    "6001": {
      "name": "Coca-Cola",
      "detail": "Various soda options.",
      "price": 4,
      "imgSrc": "Food Photos/Beverages/Non Alcoholic.png"
    },
    "6002": {
      "name": "Bottled water - Still",
      "detail": "Refreshing bottled water.",
      "price": 0,
      "imgSrc": "Food Photos/Beverages/Non Alcoholic.png"
    },
    "6003": {
      "name": "Bottled water - Sparkling",
      "detail": "Refreshing bottled water.",
      "price": 8,
      "imgSrc": "Food Photos/Beverages/Non Alcoholic.png"
    },
    "6004": {
      "name": "Fresh fruit juices - Orange",
      "detail": "Freshly squeezed orange juice for a burst of vitamin C.",
      "price": 3,
      "imgSrc": "Food Photos/Beverages/Non Alcoholic.png"
    },
    "6005": {
      "name": "Fresh fruit juices - Apple",
      "detail": "Freshly squeezed Apple juice.",
      "price": 3,
      "imgSrc": "Food Photos/Beverages/Non Alcoholic.png"
    },
    "6006": {
      "name": "Da Hong Pao Iced tea",
      "detail": "Refreshing iced tea from the finest tea in the world, 25ml.",
      "price": 984,
      "imgSrc": "Food Photos/Beverages/Non Alcoholic.png"
    },
    "6007": {
      "name": "Latte",
      "detail": "Fresh coffee.",
      "price": 6,
      "imgSrc": "Food Photos/Beverages/Non Alcoholic.png"
    },
    "6008": {
      "name": "Flat White",
      "detail": "Fresh coffee.",
      "price": 5,
      "imgSrc": "Food Photos/Beverages/Non Alcoholic.png"
    },
    "6009": {
      "name": "Capitano",
      "detail": "Fresh coffee.",
      "price": 6,
      "imgSrc": "Food Photos/Beverages/Non Alcoholic.png"
    },
    "6010": {
      "name": "Macchiato",
      "detail": "Fresh coffee.",
      "price": 4,
      "imgSrc": "Food Photos/Beverages/Non Alcoholic.png"
    },
    "6011": {
      "name": "Espresso",
      "detail": "Fresh coffee.",
      "price": 2,
      "imgSrc": "Food Photos/Beverages/Non Alcoholic.png"
    },
    "6012": {
      "name": "Latte - Decaf",
      "detail": "Fresh coffee.",
      "price": 8,
      "imgSrc": "Food Photos/Beverages/Non Alcoholic.png"
    },
    "6013": {
      "name": "Flat White - Decaf",
      "detail": "Fresh coffee.",
      "price": 7,
      "imgSrc": "Food Photos/Beverages/Non Alcoholic.png"
    },
    "6014": {
      "name": "Capitano - Decaf",
      "detail": "Fresh coffee.",
      "price": 8,
      "imgSrc": "Food Photos/Beverages/Non Alcoholic.png"
    },
    "6015": {
      "name": "Macchiato - Decaf",
      "detail": "Fresh coffee.",
      "price": 6,
      "imgSrc": "Food Photos/Beverages/Non Alcoholic.png"
    },
    "6016": {
      "name": "Espresso - Decaf",
      "detail": "Fresh coffee.",
      "price": 4,
      "imgSrc": "Food Photos/Beverages/Non Alcoholic.png"
    },
    "6017": {
      "name": "Breakfast Blend Tea",
      "detail": "Freshly brewed Fortnum & Mason Breakfast blend black tea, served with milk and sugar on the side.",
      "price": 4,
      "imgSrc": "Food Photos/Beverages/Non Alcoholic.png"
    },
    "6018": {
      "name": "French Earl Gray Tea",
      "detail": "Freshly brewed Fortnum & Mason Earl Gray tea, served with milk and sugar on the side.",
      "price": 4,
      "imgSrc": "Food Photos/Beverages/Non Alcoholic.png"
    },
    "6019": {
      "name": "Camomile Tea",
      "detail": "Freshly brewed TWG Camomile tea.",
      "price": 4,
      "imgSrc": "Food Photos/Beverages/Non Alcoholic.png"
    },






    "7001": {
      "name": "Red Wine - Romanée-Conti 1945",
      "detail": "Our selection of premium Red wine, bottle purchase.",
      "price": 558000,
      "imgSrc": "Food Photos/Beverages/Alcoholic.png"
    },
    "7002": {
      "name": "White Wine - 1811 Chateau d'Yquem",
      "detail": "Our selection of premium white wine, bottle purchase.",
      "price": 117000,
      "imgSrc": "Food Photos/Beverages/Alcoholic.png"
    },
    "7003": {
      "name": "Beer - The Lost Abbey Cable Car Kriek",
      "detail": "Assorted local and beer, bottle purchase.",
      "price": 1395,
      "imgSrc": "Food Photos/Beverages/Alcoholic.png"
    },
    "7004": {
      "name": "Martini - Tokyo's Diamonds Are Forever Martini",
      "detail": "Classic cocktail options, Glass purchase.",
      "price": 24000,
      "imgSrc": "Food Photos/Beverages/Alcoholic.png"
    },
    "7005": {
      "name": "Mojito - Dom Pérignon rosé strawberry",
      "detail": "This one-night-only cocktail is served in a three-foot-tall glass cylinder. The drink is made with a jeroboam of Dom Pérignon rosé champagne, the equivalent of about one bottle of rum, fresh strawberries, limes, and mint.",
      "price": 12899,
      "imgSrc": "Food Photos/Beverages/Alcoholic.png"
    },
    "7006": {
      "name": "Margarita - The NYC Billionaire Margarita",
      "detail": "Classic cocktail options.",
      "price": 1299,
      "imgSrc": "Food Photos/Beverages/Alcoholic.png"
    },
    "7007": {
      "name": "Limoncello - D'Amalfi Limoncello Supreme",
      "detail": "Premium Italian Limoncello, Bottle purchase.",
      "price": 44000000,
      "imgSrc": "Food Photos/Beverages/Alcoholic.png"
    },
    "7008": {
      "name": "Whiskey - Isabella's Islay",
      "detail": "Premium whiskey selection, bottle purchase.",
      "price": 6200089,
      "imgSrc": "Food Photos/Beverages/Alcoholic.png"
    },
    "7009": {
      "name": "Vodka - The Eye of the Dragon",
      "detail": "Premium vodka selection, bottle purchase.",
      "price": 5500844,
      "imgSrc": "Food Photos/Beverages/Alcoholic.png"
    },
    "7010": {
      "name": "Gin - WATENSHI",
      "detail": "Premium gin selection, bottle purchase.",
      "price": 6899,
      "imgSrc": "Food Photos/Beverages/Alcoholic.png"
    },
    "7011": {
      "name": "Champagne - Goût de Diamants, Taste of Diamonds 2013",
      "detail": "Celebrate with our sparkling selection, bottle purchase.",
      "price": 1838899,
      "imgSrc": "Food Photos/Beverages/Alcoholic.png"
    }
  };





const firebaseConfig = {
  apiKey: "AIzaSyAxA3I4XBxz5MX1q3mEU0HGuijUHfTnc-Y",
  authDomain: "palais-lumiere.firebaseapp.com",
  databaseURL: "https://palais-lumiere-default-rtdb.firebaseio.com",
  projectId: "palais-lumiere",
  storageBucket: "palais-lumiere.appspot.com",
  messagingSenderId: "747123438573",
  appId: "1:747123438573:web:7f98ad86ee2b2219aaade4",
  measurementId: "G-JX5BG24P1W"
};

// Initialize Firebase only once
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
} else {
    firebase.app(); // if already initialized, use that one
}

const roomNumber = "2022";  // Example static room number

document.addEventListener('DOMContentLoaded', function() {
    updateClock();
    loadCart();
    document.getElementById('back-button').addEventListener('click', function() {
        location.href = 'InRoomDiningMenu.html';
    });
    document.getElementById('place-order-button').addEventListener('click', submitOrder);
});

function updateClock() {
    let now = new Date();
    let hours = now.getHours() % 12 || 12;
    let minutes = now.getMinutes();
    let amPm = now.getHours() >= 12 ? 'PM' : 'AM';
    let minutesStr = minutes < 10 ? '0' + minutes : minutes;
    let timeStr = `${hours}:${minutesStr} ${amPm}`;
    document.getElementById('time').textContent = timeStr;
    setTimeout(updateClock, 60000);
}

function loadCart() {
    const cartData = JSON.parse(localStorage.getItem('cartItems')) || {};
    const container = document.getElementById('cart-items-container');
    container.innerHTML = '';
    let total = 0;

    Object.keys(cartData).forEach(key => {
        const item = menuData[key];
        const quantity = cartData[key];
        const itemElement = document.createElement('div');
        itemElement.className = 'cart-item';
        itemElement.innerHTML = `
            <div class="item-image"><img src="${item.imgSrc}" alt="${item.name}"></div>
            <div class="item-details">
                <div>${item.name}</div>
                <div>${item.detail}</div>
                <div>Price: $${item.price}</div>
                <div>Quantity: ${quantity}</div>
                <button onclick="removeItem('${key}')">Remove</button>
                ${quantity > 1 ? `<button onclick="changeQuantity('${key}', -1)">-</button>` : ''}
                <button onclick="changeQuantity('${key}', 1)">+</button>
            </div>
        `;
        container.appendChild(itemElement);

        total += item.price * quantity;
    });

    document.getElementById('total-price').textContent = `$${new Intl.NumberFormat('en-US').format(total.toFixed(2))}`;
}

function removeItem(itemId) {
    let cart = JSON.parse(localStorage.getItem('cartItems')) || {};
    delete cart[itemId];
    localStorage.setItem('cartItems', JSON.stringify(cart));
    loadCart();
}

function changeQuantity(itemId, delta) {
    let cart = JSON.parse(localStorage.getItem('cartItems')) || {};
    if (delta === -1 && cart[itemId] > 1) {
        cart[itemId]--;
    } else if (delta === 1) {
        cart[itemId]++;
    }
    localStorage.setItem('cartItems', JSON.stringify(cart));
    loadCart();
}

function submitOrder() {
  const cartData = JSON.parse(localStorage.getItem('cartItems')) || {};

  // Log cartData to console to verify contents
  console.log("Cart Data:", cartData);

  // Check if the cart is empty
  if (Object.keys(cartData).length === 0) {
      console.log("No items in cart.");
      return; // Exit if there's nothing in the cart
  }

  var ordersRef = firebase.database().ref('orders');
  ordersRef.push({
      roomNumber: roomNumber,
      items: cartData,  // Ensure that this contains the expected item data
      timestamp: firebase.database.ServerValue.TIMESTAMP
  }, function(error) {
      if (error) {
          console.error('Error writing order to Firebase:', error);
      } else {
          console.log('Order placed successfully with items:', cartData);
          localStorage.clear(); // Clear cart after successful submission
          window.location.href = 'InRoomDiningMenu.html'; // Redirect to a thank you page
      }
  });
}


