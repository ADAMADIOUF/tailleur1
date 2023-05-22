import React, { useState, useEffect } from 'react'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import WhatsAppWidget from './Whatsapp'
import 'react-whatsapp-widget/dist/index.css'
import { useDispatch, useSelector } from 'react-redux'
import { listProductDetails } from '../actions/productsActions'

import { formatPrice } from '../utils/helpers'
import ProductImages from './ProductImages'

const ProductDetails = () => {
  const [qty, setQty] = useState(1)
  const { id } = useParams()
  const location = useLocation()
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [showWhatsAppWidget, setShowWhatsAppWidget] = useState(false)
  const productDetails = useSelector((state) => state.productDetails)
  const { loading, error, product } = productDetails

  useEffect(() => {
    dispatch(listProductDetails(id, true))
  }, [dispatch, id])

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location])

  const handleAddToCart = () => {
    const message = `je veux acheter ${product.name} x${qty}`
    const url = `https://wa.me/+221779258508?text=${encodeURIComponent(
      message
    )}`
    window.open(url, '_blank')
  }

  return (
    <div className='container-singleProduct'>
      {loading ? (
        <h2>loading...</h2>
      ) : error ? (
        <h2>error</h2>
      ) : (
        <div className='row'>
          <div className='col-md-6'>
            {product && product.img ? (
              <ProductImages images={product.img} />
            ) : null}
          </div>
          <div className='col-md-6'>
            <article>
              <div className='singleProduct-details'>
                <div className='row'>
                  <div className='col'>
                    <h3>{product.name}</h3>
                    <div className='s-p'>
                      <h3>{formatPrice(product.price)}</h3>
                      <p>{product.desc}</p>
                    </div>
                  </div>
                </div>
              </div>
            </article>
            <article className='cartDetails'>
              <div className='row'>
                <div className='col'>Price:</div>
                <div className='col'>{formatPrice(product.price)}</div>
              </div>
              <div className='row'>
                <div className='col'>Couleur:</div>
                <div className='col color-container'>
                  {product.color &&
                    product.color.map((color, index) => (
                      <span
                        key={index}
                        style={{ backgroundColor: color }}
                        className='color-badge'
                      ></span>
                    ))}
                </div>
              </div>
              <div className='row'>
                <div className='col'>Taille:</div>
                <div className='col size-container'>
                  {product.size &&
                    product.size.map((size, index) => (
                      <span key={index} className='size-item'>
                        {size}
                      </span>
                    ))}
                </div>
              </div>
              <div className='row'>
                <div className='col'>Status:</div>
                <div className='col'>
                  {product.countInStock > 0
                    ? 'En stock.'
                    : 'en rupture de stock'}
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
                <button onClick={handleAddToCart} className='whatsapp-button'>
                  acheter par whatsapp
                </button>
                {showWhatsAppWidget && (
                  <WhatsAppWidget
                    phoneNumber='+221777618072'
                    message={`je veux acheter ${product.name}`}
                  />
                )}
              </div>
            </article>
          </div>
        </div>
      )}
    </div>
  )
}

export default ProductDetails
