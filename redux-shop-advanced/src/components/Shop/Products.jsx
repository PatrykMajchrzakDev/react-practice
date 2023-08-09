import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const DUMMY_PRODUCTS = [
  {
    id: "p1",
    price: 6,
    title: "Monitor",
    description: "Cool monitor",
  },
  {
    id: "p2",
    price: 3,
    title: "Mouse",
    description: "Slim mouse",
  },
  {
    id: "p3",
    price: 16,
    title: "Headphones",
    description: "Comfy headphones",
  },
  {
    id: "p4",
    price: 11,
    title: "Keyboard",
    description: "Keyboard you must have",
  },
];

const Products = () => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_PRODUCTS.map((item) => (
          <ProductItem
            id={item.id}
            key={item.id}
            title={item.title}
            price={item.price}
            description={item.description}
          />
        ))}
      </ul>
    </section>
  );
};

export default Products;
