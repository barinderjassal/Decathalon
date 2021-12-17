import { FC, createElement, useState, useMemo, Fragment } from 'react';
import { DUMMY_PRODUCTS } from './DUMMY_PRODUCTS';
import { ProductItem } from './product-item';

import './styles/products.css';

export const Products: FC = () => {
  const [allProducts, setAllProducts] = useState(DUMMY_PRODUCTS);
  const allCategories = useMemo(() =>
    [...new Set(DUMMY_PRODUCTS.map((product) => product.category))], [DUMMY_PRODUCTS]);
  
  /**
   * TODO: Correct Filter logic is pending and it is not working properly as of now
   */
  const categoryChangeHandler = (event: any) => {
    const filteredProducts = allProducts.filter((product) => product.category === event.target.value);
    setAllProducts(filteredProducts);
  };
  
  return (
    <Fragment>
      <h1>Buy your favorite products</h1>
      <div className="category-list">
        <ul>
          {allCategories.map((category, index) => (
            <li key={index} className='category-item'>
              <input
                type='checkbox'
                className='checkbox'
                onChange={categoryChangeHandler}
                value={category}
              />
              {category}
            </li>
          ))}
        </ul>
      </div>
      <section className='products'>
        <ul>
        {allProducts.map(product => (
          <ProductItem
            key={product.id}
            id={product.id}
            title={product.title}
            price={product.price}
            description={product.description}
            rating={product.rating}
          />
          ))}
        </ul>
      </section>
    </Fragment>
  );
}