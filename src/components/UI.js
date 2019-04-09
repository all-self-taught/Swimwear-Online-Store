const UI = ({ state, state: { productCategories }, setCategory }) => (
  <div className="box flex-row">
    <div className="box flex-col">
      <h3>Filter by Category</h3>
      {ButtonCategories(productCategories, setCategory)}
    </div>
    <div className="box flex-col">
      <h3>Results</h3>
      <ProductItems state={state} />
    </div>
  </div>
);
