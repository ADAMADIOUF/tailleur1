import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { listProducts } from '../actions/productsActions'
import { formatPrice } from '../utils/helpers'


const Products = () => {
  const dispatch = useDispatch()

  const productList = useSelector((state) => state.productList)
  const { loading, error, products } = productList

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
        <div>
          <h2>Products</h2>
          <ul className='products-list'>
            {products.map((product) => (
              <li key={product._id} className='product'>
                <img src={product.img[0]} alt='' className='product-img' />
                <div className='product-info'>
                  <h3 className='product-name'>{product.name}</h3>
                  <p className='product-price'>{formatPrice( product.price)}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}

export default Products
