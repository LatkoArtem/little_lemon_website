import React from "react";
import "./Menu.css";

const menuItems = [
  // Закуски
  {
    name: "Bruschetta",
    photo: "/images/Bruschetta.jpg",
    description: "Grilled bread topped with fresh tomatoes, garlic, and basil.",
    type: "Appetizer",
    price: "$5.00",
    fromChef: true,
  },
  {
    name: "Stuffed Mushrooms",
    photo: "/images/stuffed_mushrooms.jpg",
    description: "Mushrooms stuffed with cheese and herbs.",
    type: "Appetizer",
    price: "$6.00",
    fromChef: false,
  },
  {
    name: "Garlic Bread",
    photo: "/images/garlic_bread.jpg",
    description: "Toasted bread with garlic butter and herbs.",
    type: "Appetizer",
    price: "$4.00",
    fromChef: false,
  },
  {
    name: "Shrimp Cocktail",
    photo: "/images/ShrimpCocktail.jpg",
    description: "Chilled shrimp served with cocktail sauce.",
    type: "Appetizer",
    price: "$8.00",
    fromChef: true,
  },

  // Салати
  {
    name: "Caesar Salad",
    photo: "/images/CaesarSalad.jpg",
    description: "Crisp romaine lettuce with Caesar dressing and croutons.",
    type: "Salad",
    price: "$7.00",
    fromChef: true,
  },
  {
    name: "Greek Salad",
    photo: "/images/greek_salad.jpg",
    description: "Fresh vegetables with feta cheese and olives.",
    type: "Salad",
    price: "$6.50",
    fromChef: false,
  },
  {
    name: "Caprese Salad",
    photo: "/images/caprese_salad.jpg",
    description: "Tomatoes, mozzarella, and basil with balsamic glaze.",
    type: "Salad",
    price: "$7.50",
    fromChef: false,
  },
  {
    name: "Garden Salad",
    photo: "/images/garden_salad.jpg",
    description: "Mixed greens with seasonal vegetables and vinaigrette.",
    type: "Salad",
    price: "$5.50",
    fromChef: false,
  },

  // Десерти
  {
    name: "Chocolate Cake",
    photo: "/images/ChocolateCake.jpg",
    description: "Rich and creamy chocolate cake with a dark chocolate glaze.",
    type: "Dessert",
    price: "$5.00",
    fromChef: true,
  },
  {
    name: "Cheesecake",
    photo: "/images/Cheesecake.jpg",
    description: "Classic cheesecake with a graham cracker crust and strawberry topping.",
    type: "Dessert",
    price: "$6.00",
    fromChef: false,
  },
  {
    name: "Tiramisu",
    photo: "/images/Tiramisu.jpg",
    description: "Traditional Italian dessert made with mascarpone cheese and coffee-soaked ladyfingers.",
    type: "Dessert",
    price: "$7.00",
    fromChef: false,
  },
  {
    name: "Apple Pie",
    photo: "/images/ApplePie.jpg",
    description: "Warm apple pie with a flaky crust, served with vanilla ice cream.",
    type: "Dessert",
    price: "$4.50",
    fromChef: false,
  },

  // Напої
  {
    name: "Coffee",
    photo: "/images/Coffee.jpg",
    description: "Freshly brewed coffee.",
    type: "Drink",
    price: "$2.00",
    fromChef: false,
  },
  {
    name: "Tea",
    photo: "/images/Tea.jpeg",
    description: "A selection of herbal, black, or green tea.",
    type: "Drink",
    price: "$2.00",
    fromChef: false,
  },
  {
    name: "Lemonade",
    photo: "/images/Lemonade.jpg",
    description: "Freshly squeezed lemonade.",
    type: "Drink",
    price: "$3.00",
    fromChef: false,
  },
  {
    name: "Wine",
    photo: "/images/Wine.jpg",
    description: "A selection of red or white wine.",
    type: "Drink",
    price: "$6.00",
    fromChef: true,
  },

  // Головні страви
  {
    name: "Grilled Salmon",
    photo: "/images/GrilledSalmon.jpg",
    description: "Salmon fillet grilled to perfection, served with vegetables.",
    type: "Main course",
    price: "$15.00",
    fromChef: true,
  },
  {
    name: "Spaghetti Carbonara",
    photo: "/images/SpaghettiCarbonara.jpg",
    description: "Spaghetti with creamy sauce, pancetta, and parmesan cheese.",
    type: "Main course",
    price: "$12.00",
    fromChef: false,
  },
  {
    name: "Chicken Alfredo",
    photo: "/images/ChickenAlfredo.jpg",
    description: "Grilled chicken breast served with fettuccine Alfredo.",
    type: "Main course",
    price: "$14.00",
    fromChef: false,
  },
  {
    name: "Vegetable Stir-fry",
    photo: "/images/VegetableStir-fry.jpg",
    description: "A mix of fresh vegetables stir-fried with a savory sauce.",
    type: "Main course",
    price: "$11.00",
    fromChef: false,
  },
];

const Menu = () => {
  return (
    <div className="OurMenu">
      <h1>Our Menu</h1>
      <ul>
        {menuItems.map((item, index) => (
          <li key={index} className="MenuCard">
            <img src={item.photo} alt={item.name} style={{ width: "100%", height: "auto" }} />
            <h3>{item.name}</h3>
            <p>{item.description}</p>
            <p>Type: {item.type}</p>
            <p>Price: {item.price}</p>
            <p>From Chef: {item.fromChef ? "Yes" : "No"}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Menu;
