import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { listProducts } from '../actions/productsActions'
import { Link } from 'react-router-dom'
import { formatPrice } from '../utils/helpers'

const Featured = () => {
  const dispatch = useDispatch()

  const productList = useSelector((state) => state.productList)
  const { loading, error, featured_products: products } = productList

  useEffect(() => {
    dispatch(listProducts())
  }, [dispatch])

  return (
    <div className='products-container'>
      {loading ? (
        <h2>Loading...</h2>
      ) : error ? (
        <h2>{error}</h2>
      ) : (
        <div className='featured-title'>
          <h2>Les produits que vous aimez</h2>
          <ul className='products-list'>
            {products.map((product) => (
              <li key={product._id} className='product'>
                <Link to={`/products/${product.id}`}>
                  <img src={product.img[0]} alt='' className='product-img' />
                  <div className='product-info'>
                    <h3 className='product-name'>{product.name}</h3>
                    <p className='product-price'>{formatPrice( product.price)}</p>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}

export default Featured 
