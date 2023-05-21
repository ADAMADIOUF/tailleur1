import {
  PRODUCT_LIST_REQUEST,
  PRODUCT_LIST_SUCCESS,
  PRODUCT_LIST_FAIL,
  CATEGORY_LIST_FAIL,
  CATEGORY_LIST_SUCCESS,
  CATEGORY_LIST_REQUEST,
  PRODUCT_DETAILS_FAIL,
  PRODUCT_DETAILS_SUCCESS,
  PRODUCT_DETAILS_REQUEST,
} from '../constants/productsConstants'

export const productListReducer = (
  state = {
    products: [],
    featured_products: [],
    tenue_products: [],
    men_products: [],
    women_products: [],
  },
  action
) => {
  switch (action.type) {
    case PRODUCT_LIST_REQUEST:
      return { loading: true, products: [] }
    case PRODUCT_LIST_SUCCESS:
      const featured_products = action.payload.filter(
        (product) => product.featured === true
      )
      const tenue_products = action.payload.filter(
        (product) => product.tenue === true
      )
       const men_products = action.payload.filter(
         (product) => product.men === true
       )
        const women_products = action.payload.filter(
          (product) => product.women === true
        )
      return {
        loading: false,
        products: action.payload,
        featured_products,
        tenue_products,
        men_products,women_products
      }
    case PRODUCT_LIST_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}

export const productDetailsReducer = (state = { product: {} }, action) => {
  if (action.type === PRODUCT_DETAILS_REQUEST) {
    return { loading: true, ...state }
  }
  if (action.type === PRODUCT_DETAILS_SUCCESS) {
    return { loading: false, product: action.payload }
  }
  if (action.type === PRODUCT_DETAILS_FAIL) {
    return { loading: false, error: action.payload }
  }
  return state
}

export const categoryListReducer = (state = { categories: [] }, action) => {
  switch (action.type) {
    case CATEGORY_LIST_REQUEST:
      return { loading: true, categories: [] }
    case CATEGORY_LIST_SUCCESS:
      return { loading: false, categories: action.payload }
    case CATEGORY_LIST_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}

