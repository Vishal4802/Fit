import "./styles/App.css"
import React, { useState } from 'react';

export default function Pricing() {
  const products = [
    { id: 1, name: 'Whey Protein', price: 1900, image: 'images/protein-powder.jpg', type: 'Whey Protein' },
    { id: 2, name: 'Peanut Butter', price: 450, image: 'images/peanut-butter.png', type: 'Peanut Butter' },
    { id: 3, name: 'Oats', price: 500, image: 'images/oats.jpg', type: 'Oats' },
    { id: 4, name: 'Creatine', price: 900, image: 'images/creatine.png', type: 'Creatine' },
    { id: 5, name: 'Shaker', price: 250, image: 'images/shaker.png', type: 'Shaker' },
  ];

  const [searchQuery, setSearchQuery] = useState('');
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');
  const [sortOrder, setSortOrder] = useState('');
  const [typeOrder, setTypeOrder] = useState('');

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleMinPriceChange = (event) => {
    setMinPrice(event.target.value);
  };

  const handleMaxPriceChange = (event) => {
    setMaxPrice(event.target.value);
  };

  const handleSortOrderChange = (event) => {
    setSortOrder(event.target.value);
  };

  const handleTypeOrderChange = (event) => {
    setTypeOrder(event.target.value);
  };

  const filterProducts = () => {
    return products.filter((product) => {
      const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesPrice =
        (minPrice === '' || product.price >= parseInt(minPrice)) &&
        (maxPrice === '' || product.price <= parseInt(maxPrice));
      return matchesSearch && matchesPrice;
    });
  };

  const sortProducts = (filteredProducts) => {
    if (sortOrder === 'price_low_high') {
      return filteredProducts.sort((a, b) => a.price - b.price);
    } else if (sortOrder === 'price_high_low') {
      return filteredProducts.sort((a, b) => b.price - a.price);
    } else {
      return filteredProducts;
    }
  };

  const typeProducts = (filteredProducts) => {
    if (typeOrder === '') {
      return filteredProducts;
    } else {
      return filteredProducts.filter(
        (product) => product.type.toLowerCase() === typeOrder.toLowerCase()
      );
    }
  };

  const [bookmarks, setBookmarks] = useState([]);

  const toggleBookmark = (productId) => {
    if (bookmarks.includes(productId)) {
      setBookmarks((prevBookmarks) => prevBookmarks.filter((id) => id !== productId));
    } else {
      setBookmarks((prevBookmarks) => [...prevBookmarks, productId]);
    }
  };
    return (
      <div className="Product-page">
            <h1 style={{fontFamily: "cursive"}}>Health is Wealth :)</h1>
            <div className="guide-controls">
              <input
                type="text"
                placeholder="Search"
                value={searchQuery}
                onChange={handleSearch}
                className="search-input"
              />
              <div className="price-filter">
                <label htmlFor="minPrice" style={{fontFamily: "monospace", fontSize: "16px", fontWeight: "bolder"}}>Min Price:</label>
                <input
                  type="number"
                  id="minPrice"
                  value={minPrice}
                  onChange={handleMinPriceChange}
                  className="price-input"
                />
                <label htmlFor="maxPrice" style={{fontFamily: "monospace", fontSize: "16px", fontWeight: "bolder"}}>Max Price:</label>
                <input
                  type="number"
                  id="maxPrice"
                  value={maxPrice}
                  onChange={handleMaxPriceChange}
                  className="price-input"
                />
              </div>
              <div className="sort-order">
                <label htmlFor="sortOrder" style={{fontFamily: "monospace", fontSize: "16px", fontWeight: "bolder"}}>Sort Order:</label>
                <select
                  id="sortOrder"
                  value={sortOrder}
                  onChange={handleSortOrderChange}
                  className="sort-select"
                >
                  <option value="">None</option>
                  <option value="price_low_high">Price Low to High</option>
                  <option value="price_high_low">Price High to Low</option>
                </select>
              </div>
              <div className="sort-order">
                <label htmlFor="typeOrder" style={{fontFamily: "monospace", fontSize: "16px", fontWeight: "bolder"}}>Products:</label>
                <select
                  id="typeOrder"
                  value={typeOrder}
                  onChange={handleTypeOrderChange}
                  className="sort-select"
                  style={{fontFamily: "cursive"}}
                >
                  <option value="">All</option>
                  <option value="Whey Protein">Whey Protein</option>
                  <option value="Peanut Butter">Peanut Butter</option>
                  <option value="Oats">Oats</option>
                  <option value="Creatine">Creatine</option>
                  <option value="Shaker">Shaker</option>
                </select>
              </div>
            </div>
            <div class="product-grid">
              {sortProducts(typeProducts(filterProducts())).map((product) => (
                <div key={product.id} class="product-card">
                  <div class="product-image">
                    <img src={product.image} alt={product.name} />
                  </div>
                  <div class="product-details">
                    <div class="product-name">{product.name}</div>
                    <div class="product-price">Rs.{product.price}</div>
                    <div
                      className={`bookmark-btn ${
                        bookmarks.includes(product.id) ? 'bookmarked' : ''
                      }`}
                      onClick={() => toggleBookmark(product.id)}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
            <h2 style={{fontFamily: "cursive"}}>Get Your Personalized Kit Today!</h2>
            <button disabled style={{ cursor: 'not-allowed' }}>
              Subscribe
            </button>
          </div>
    )
  }