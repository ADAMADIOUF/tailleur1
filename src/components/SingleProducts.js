import React, { useState, useEffect } from 'react'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import WhatsAppWidget from './Whatsapp'
import 'react-whatsapp-widget/dist/index.css'
import { useDispatch, useSelector } from 'react-redux'
import { listProductDetails } from '../actions/productsActions'

import { formatPrice } from '../utils/helpers'

const ProductDetails = () => {
  const [qty, setQty] = useState(1)
  const { id } = useParams()
  const location = useLocation()
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const productDetails = useSelector((state) => state.productDetails)
  const { loading, error, product } = productDetails

  useEffect(() => {
    dispatch(listProductDetails(id, true))
  }, [dispatch, id])
const handleAddToCart = () => {
  
}
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location])

  return (
    <div className='container-singleProduct'>
      {loading ? (
        <h2>loading...</h2>
      ) : error ? (
        <h2>error</h2>
      ) : (
        <div className='row'>
          <div className='col-md-6'>
            {/* Display product image */}
            <img src={product.img} alt='' className='img-fluid' />
          </div>
          <div className='col-md-6'>
            <article>
              <div className='singleProduct-details'>
                <h3>{product.name}</h3>
                <div className='s-p'>
                  <h3>{formatPrice(product.price)}</h3>
                  <p>{product.description}</p>
                </div>
              </div>
            </article>
            <article className='cartDetails'>
              <div className='row'>
                <div className='col'>Price:</div>
                <div className='col'>{formatPrice(product.price)}</div>
              </div>
              <div className='row'>
                <p>{product.desc}</p>
                <div className='col'>Status:</div>
                <div className='col'>
                  {product.countInStock > 0 ? 'En stock.' : 'Out of stock'}
                </div>
              </div>
              {product.countInStock > 0 && (
                <div className='list-group-item'>
                  <div className='row'>
                    <div className='col'>Qty:</div>
                    <div className='col'>
                      <select
                        className='form-control select'
                        value={qty}
                        onChange={(e) => {
                          const newQty = Number(e.target.value)
                          if (!isNaN(newQty)) {
                            setQty(newQty)
                          }
                        }}
                      >
                        {[...Array(product.countInStock).keys()].map((x) => (
                          <option key={x + 1} value={x + 1}>
                            {x + 1}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>
              )}
              <div className='list-group-item'>
                <button
                  onClick={handleAddToCart}
                  className='btn btn-primary btn-block'
                  disabled={product.countInStock === 0}
                >
                  ajouter au panier
                </button>
              </div>
            </article>
          </div>
        </div>
      )}
    </div>
  )
}

export default ProductDetails
