import Basic from "./basic.core";
import Order from "./customer.core";

class Customer extends Basic {
  constructor(customer_id) {
    super("customer", customer_id);
    this.customer_id = customer_id;
  }

  async getCustomerWithId() {
    try {
      return await this.getDocDetailWithId();
    } catch (err) {
      throw err;
    }
  }

  async getCustomerDetail() {
    try {
      const customerShallow = await this.getDocDetailWithId();
      const orders = customerShallow.orders;
      const hydratedOrders = await Promise.all(
        orders.map(order_id => {
          const newOrder = new Order(order_id);
          return newOrder.getDocDetailWithId();
        })
      );
      return { ...customerShallow, orders: hydratedOrders };
    } catch (err) {
      throw err;
    }
  }

  async modifyCustomer(options) {
    try {
      return await this.modifyDoc(options);
    } catch (err) {
      throw err;
    }
  }

  static async createCustomer(options) {
    const { id, name, address, cell } = options;
    if (!id) throw new Error("Missing ID");
    if (!name) throw new Error("Missing Name");
    if (!address) throw new Error("Missing Address");
    if (!cell) throw new Error("Missing Cell");
    try {
      return await Customer.createDocWithOptions("customer", {
        id,
        name,
        address,
        cell,
        orders: []
      });
    } catch (err) {
      throw err;
    }
  }

  static async getCustomerList() {
    try {
      return await Customer.queryListShallow("customer");
    } catch (err) {
      throw err;
    }
  }
}

export default Customer;
