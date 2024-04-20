import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Header() {
  //const style = { color: "red", fontSize: "48px" };
  const style = {};
  return (
    <header className="header">
      <h1 style={style}>Tasty Pizza from Dune</h1>
    </header>
  );
}

function Menu() {
  return (
    <main className="menu">
      <h2>Our Menu</h2>
      <Pizza
        name="Pizza Spinaci"
        ingredient="Tomato, mozarella, spinach and ricotta cheese"
        price={10}
        photoName="pizzas/spinaci.jpg"
      />
      <Pizza
        name="Pizza Funghi"
        ingredient="Tomato, mushrooms, mozarella and onion"
        price={12}
        photoName="pizzas/funghi.jpg"
      />
    </main>
  );
}

// function name should start with capital letter and return a JSX element
//img is from public folder automatically (no need to specify the path)
function Pizza(props) {
  console.log("props", props);

  return (
    <div className="pizza">
      <img src={props.photoName} alt={props.name} />
      <div>
        <h2>{props.name}</h2>
        <p>{props.ingredient}</p>
        <span>{props.price} $</span>
      </div>
    </div>
  );
}

function Footer() {
  const hour = new Date().getHours();
  console.log("hour", hour);
  const openHour = 12;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;
  console.log("isOpen", isOpen);

  //if (hour >= openHour && hour <= closeHour) alert("We are open!");
  //else alert("We are closed!");

  return (
    <footer className="footer">
      ©{new Date().toLocaleTimeString()}Tasty Pizza from Dune
    </footer>
  );
  //return React.createElement("footer", null, "© 2024 Tasty Pizza from Dune");
}

// react v18
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  //React Strict Mode is a tool in React that helps in identifying potential
  //issues in an application. It does not render any visible UI but
  //activates additional checks and warnings for its descendants.
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// React before 18
// React.render(<App />);
