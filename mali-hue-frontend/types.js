// Placeholder for AdminStats interface
export interface AdminStats {
    statistics: {
      total_revenue: number;
      orders_today: number;
      active_products: number;
    };
    custom_orders: Array<{
      id: number;
      customer: string;
      type: string;
      status: string;
    }>;
  }