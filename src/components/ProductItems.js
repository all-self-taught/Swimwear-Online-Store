const ProductItems = ({ state: { products, displayCategory } }) => (
  <div>
    {products
      .filter(
        ({ category }) =>
          displayCategory === category || displayCategory === "all"
      )
      .map(({ category, name }) => (
        <ProductItem
          key={`ProductItems-${name}`}
          category={category}
          name={name}
        />
      ))}
  </div>
);
