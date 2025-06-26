const SERVER_URI = 'http://localhost:5000'

//auth
export const signup = SERVER_URI+'/api/auth/signup'
export const signindb = SERVER_URI+'/api/auth/signin'


//address
export const getAddress = SERVER_URI+'/api/address/getAll'
export const createAddress = SERVER_URI+'/api/address/create'
export const deleteAddress = SERVER_URI+'/api/address/delete'
export const updateAddress = SERVER_URI+'/api/address/update'

//user profile
export const userProfile = SERVER_URI+'/api/profile/createOrUpdate'

//orders
export const allOrders = SERVER_URI+'/api/order/getUserOrders'

//whishlist
export const getWishlist = SERVER_URI+'/api/wishlist/get'
export const deleteWishlistItem = SERVER_URI+'/api/wishlist/delete'
export const addToWishlist = SERVER_URI+'/api/wishlist/create'

//cart
export const getCart = SERVER_URI+'/api/cart/getAll'
export const addToCart = SERVER_URI+'/api/cart/addToCart'
export const deleteCartItem = SERVER_URI+'/api/cart/delete'
export const updateCartItem = SERVER_URI+'/api/cart/update'