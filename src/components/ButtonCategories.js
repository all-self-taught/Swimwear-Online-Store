const ButtonCategories = (productCategories, setCategory) =>
  productCategories.map(category => (
    <button
      key={category}
      className={`btn-${category}`}
      onClick={() => setCategory(category)}
    >
      {category}
    </button>
  ));
