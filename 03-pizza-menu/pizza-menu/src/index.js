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
  const pizzas = pizzaData;
  //const pizzas = [];
  const numPizzas = pizzas.length;

  return (
    <main className="menu">
      <h2>Our Menu</h2>
      {/*never have condition as number, always as boolean
      {numPizzas && (
        <ul className="pizzas">
          {pizzas.map((pizza) => (
            <Pizza pizzaObj={pizza} key={pizza.name} />
          ))}
        </ul>
        */}

      {/* conditional rendering with &&
      numPizzas > 0 && (
        <ul className="pizzas">
          {pizzas.map((pizza) => (
            <Pizza pizzaObj={pizza} key={pizza.name} />
          ))}
        </ul>
      )*/}
      {numPizzas > 0 ? (
        <>
          {/*<> is a react fragment*/}
          <p>
            Authentic Italian cuisine. We offer 6 creative dishes to choose
            from. All from our stone oven.
          </p>

          <ul className="pizzas">
            {pizzas.map((pizza) => (
              <Pizza pizzaObj={pizza} key={pizza.name} />
            ))}
          </ul>
        </>
      ) : (
        <p> Still working on menu!</p>
      )}

      {/*
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
        */}
    </main>
  );
}

// function name should start with capital letter and return a JSX element
//img is from public folder automatically (no need to specify the path)
//destructuring props: {pizzaObj} instead of props
function Pizza({ pizzaObj }) {
  console.log("props", pizzaObj);

  //if (pizzaObj.soldOut) return null;

  return (
    <li className={`pizza ${pizzaObj.soldOut ? "sold-out" : ""}`}>
      <img src={pizzaObj.photoName} alt={pizzaObj.name} />
      <div>
        <h2>{pizzaObj.name}</h2>
        <p>{pizzaObj.ingredients}</p>

        {/* pizzaObj.soldOut ? (
          <span>Sold Out</span>
        ) : (
          <span>{pizzaObj.price}</span>
        ) */}

        <span>{pizzaObj.soldOut ? "Sold Out" : pizzaObj.price} </span>
      </div>
    </li>
  );
}

function Footer() {
  const hour = new Date().getHours();
  console.log("hour", hour);
  const openHour = 10;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;
  console.log("isOpen", isOpen);

  //if (hour >= openHour && hour <= closeHour) alert("We are open!");
  //else alert("We are closed!");

  //better to render entire components conditionally, not just parts of jsx
  if (!isOpen)
    return (
      <p>
        Come between {openHour}:00 and {closeHour}:00 for an excellent service!!
      </p>
    );

  return (
    <footer className="footer">
      {/* conditional rendering with &&
      isOpen && (
        <div>
          <p>
            <p>We are open until {closeHour}:00, come visit or order online!</p>
          </p>
          <button className="btn">Order</button>
        </div>
      )
      {!isOpen && <p>We are closed!</p>}*/}
      {isOpen ? (
        <Order closeHour={closeHour} openHour={openHour} />
      ) : (
        <p>
          Come between {openHour}:00 and {closeHour}:00 for an excellent
          service!
        </p>
      )}
    </footer>
  );
  //return React.createElement("footer", null, "© 2024 Tasty Pizza from Dune");
}

function Order({ closeHour, openHour }) {
  return (
    <div className="order">
      <p>
        <p>We are open until {closeHour}:00, come visit or order online!</p>
      </p>
      <button className="btn">Order</button>
    </div>
  );
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
