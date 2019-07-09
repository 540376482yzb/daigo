import Product from "./product.core";
import Customer from "./customer.core";
import Basic from "./basic.core";

class Order extends Basic {
  constructor(order_id) {
    super("order", order_id);
    this.order_id = order_id;
  }

  async updateOrder(options) {}

  async getOrderDetailWithId() {
    let {
      order_customer,
      order_product_list,
      ...rest
    } = await this.getDocDetailWithId();
    //build customer object
    order_customer = await Order._buildOrderCustomer(order_customer);
    //build product list object
    order_product_list = await Order._buildOrderProductList(order_product_list);

    return { ...rest, order_customer, order_product_list };
  }

  /**
   * @return {Promise} list of order populated
   */
  static async getOrderList() {
    try {
      const orders = await Order.queryListShallow("order");
      return Promise.all(
        orders.map(async order => {
          //build customer object
          order.order_customer = await Order._buildOrderCustomer(
            order.order_customer
          );

          //build product list object
          order.order_product_list = await Order._buildOrderProductList(
            order.order_product_list
          );

          //return completed order
          return order;
        })
      );
    } catch (err) {
      throw err;
    }
  }

  static async _buildOrderCustomer(order_customer_id) {
    const customer = new Customer(order_customer_id);
    return await customer.getCustomerWithId();
  }

  static async _buildOrderProductList(product_list) {
    return await Promise.all(
      product_list.map(product_id => {
        const product = new Product(product_id);
        return product.getProductWithId();
      })
    );
  }
}

export default Order;
