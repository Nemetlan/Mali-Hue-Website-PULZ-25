// Placeholder for API services
export const api = {
    getAdminStats: async () => {
      // Mock data for demonstration
      return new Promise(resolve => {
        setTimeout(() => {
          resolve({
            statistics: {
              total_revenue: 1234567,
              orders_today: 123,
              active_products: 456,
            },
            custom_orders: [
              { id: 1, customer: 'John Doe', type: 'Custom Commission', status: 'Pending' },
              { id: 2, customer: 'Jane Smith', type: 'Special Request', status: 'Completed' },
              { id: 3, customer: 'Bob Johnson', type: 'Custom Painting', status: 'In Progress' },
            ],
          });
        }, 1000);
      });
    }
  };


function getProducts() {
  fetch(`${process.env.API_URL}/products`)
    .then(response => response.json())
    .then(data => {
      console.log('Products:', data);
    })
    .catch(error => {
      console.error('Error fetching products:', error);
    });
}

export default getProducts;