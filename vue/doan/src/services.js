import axios from 'axios';

const BASE_URL = 'http://localhost:3000';

export default {
    async getAllProducts(limit = null) {
        try {
            const response = await axios.get(`${BASE_URL}/products`);
            let products = response.data;
            if (limit) {
                products = products.slice(-limit);
            }
            return products;
        } catch (error) {
            console.error('Error fetching products:', error);
            throw error;
        }
    },
    async getProductById(productId) {
        try {
            const response = await axios.get(`${BASE_URL}/products/${productId}`);
            return response.data;
        } catch (error) {
            console.error(`Error fetching product with ID ${productId}:`, error);
            throw error;
        }
    },
    async getProduct(productId) {
        try {
            const response = await axios.get(`${BASE_URL}/products/${productId}`);
            return response.data;
        } catch (error) {
            console.error(`Error fetching product with ID ${productId}:`, error);
            throw error;
        }
    },

    getIdProduct(route) {
        // Lấy ID sản phẩm từ đường dẫn URL
        return route.params.id;
    },


    async addProduct(product) {
        try {
            const response = await axios.post(`${BASE_URL}/products`, product);
            return response.data;
        } catch (error) {
            console.error('Error adding user:', error);
            throw error;
        }
    },

    async editProduct(productId, editdProductData) {
        try {
            const response = await axios.put(`${BASE_URL}/products/${productId}`, editdProductData);
            return response.data;
        } catch (error) {
            console.error(`Error updating product with ID ${productId}:`, error);
            throw error;
        }
    },

    async deleteProduct(productId) {
        try {
            const response = await axios.delete(`${BASE_URL}/products/${productId}`);
            return response.data;
        } catch (error) {
            console.error(`Error deleting product with ID ${productId}:`, error);
            throw error;
        }
    },

    async deleteItemCart(itemId) {
        try {
            const response = await axios.delete(`${BASE_URL}/cart/${itemId}`);
            return response.data;
        } catch (error) {
            console.error(`Error deleting item with ID ${itemId} from cart:`, error);
            throw error;
        }
    },

    async createProduct(productData) {
        try {
            const response = await axios.post(`${BASE_URL}/products`, productData);
            return response.data;
        } catch (error) {
            console.error('Error creating product:', error);
            throw error;
        }
    },

    // addToCart(productId) {
    //     return axios.post('http://localhost:3000/cart', { productId });
    //   }


    async registerUser() {
        try {
            const response = await axios.post('http://localhost:3000/admin/register', this.registerForm);
            alert('Đăng ký thành công!');
            console.log(response.data);
        } catch (error) {
            alert('Đăng ký thất bại! Email đã tồn tại.');
            console.error('Lỗi khi đăng ký:', error);
        }
    },
    async loginUser() {
        try {
            const response = await axios.post('http://localhost:3000/user/login', this.loginForm);
            alert('Đăng nhập thành công!');
            console.log(response.data);
        } catch (error) {
            alert('Đăng nhập thất bại! Email hoặc mật khẩu không đúng.');
            console.error('Lỗi khi đăng nhập:', error);
        }
    },

    async getAllUser(endpoint) {
        try {
          // Make a GET request to the API endpoint
          const response = await fetch(`${BASE_URL}/user/${endpoint}`);
          const data = await response.json();
          return data;
        } catch (error) {
          throw new Error(`Error fetching data from API: ${error}`);
        }
      }




}
