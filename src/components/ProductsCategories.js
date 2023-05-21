import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { listProducts } from '../actions/productsActions'
import { listCategories } from '../actions/productsActions'
import './ProductsCategories.css'
import { Link } from 'react-router-dom'

const ProductsCategories = () => {
  const dispatch = useDispatch()
  const [selectedCategory, setSelectedCategory] = useState(null)
  const [currentPage, setCurrentPage] = useState(1)
  const [productsPerPage] = useState(4)

  const productList = useSelector((state) => state.productList)
  const { loading, error, products } = productList

  const categoryList = useSelector((state) => state.categoryList)
  const {
    loading: categoryLoading,
    error: categoryError,
    categories,
  } = categoryList

  useEffect(() => {
    dispatch(listProducts())
    dispatch(listCategories())
  }, [dispatch])

  const handleCategoryFilter = (category) => {
    setSelectedCategory(category)
    setCurrentPage(1) // Reset current page to 1 when category filter is applied
  }

  const filteredProducts = selectedCategory
    ? products.filter((product) => product.categories === selectedCategory)
    : products

  // Logic for displaying products
  const indexOfLastProduct = currentPage * productsPerPage
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage
  const currentProducts = filteredProducts.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  )

  // Logic for displaying page numbers
  const pageNumbers = []
  for (
    let i = 1;
    i <= Math.ceil(filteredProducts.length / productsPerPage);
    i++
  ) {
    pageNumbers.push(i)
  }

  return (
    <div className='productsCategories-container'>
      <h2>Nos confections</h2>
      <div>
        <button
          onClick={() => handleCategoryFilter(null)}
          className={selectedCategory === null ? 'active' : null}
        >
          Tous les produits
        </button>
        <button
          onClick={() => handleCategoryFilter('men')}
          className={selectedCategory === 'men' ? 'active' : null}
        >
          Hommes
        </button>
        <button
          onClick={() => handleCategoryFilter('women')}
          className={selectedCategory === 'women' ? 'active' : null}
        >
          Femmes
        </button>
        <button
          onClick={() => handleCategoryFilter('tenues')}
          className={selectedCategory === 'tenue' ? 'active' : null}
        >
          Tenues
        </button>
      </div>
      {loading ? (
        <div>Loading...</div>
      ) : error ? (
        <div>{error}</div>
      ) : (
        <>
          <ul className='productsCategories'>
            {currentProducts.map((product) => (
              <li key={product.id} className='productsCategories-name'>
                <Link to={`/products/${product.id}`}>
                  <h3> {product.name}</h3>

                  <img
                    src={product.img}
                    alt=''
                    style={{ width: '100%', height: '400px' }}
                  className='product-categories-img'/>
                  <h3>{product.price}CFA</h3>
                  <h3>{product.name}</h3>
                </Link>
              </li>
            ))}
          </ul>
          <div className='pagination'>
            {pageNumbers.map((number) => (
              <span
                key={number}
                onClick={() => setCurrentPage(number)}
                className={currentPage === number ? 'active' : null}
              >
                {number}
              </span>
            ))}
          </div>
        </>
      )}
    </div>
  )
}

export default ProductsCategories
