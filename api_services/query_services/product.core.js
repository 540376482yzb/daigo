import Basic from "./basic.core";
import Category from "./category.core";

class Product extends Basic {
  constructor(product_id) {
    super("product", product_id);
    this.product_id = product_id;
  }

  async getProductWithId() {
    try {
      const product = await this.getDocDetailWithId();
      const category = new Category(product.product_category);
      product.product_category = await category.getCategoryWithId();
      return product;
    } catch (err) {
      throw err;
    }
  }

  static async getProductList() {
    try {
      return await Product.queryListShallow("product");
    } catch (err) {
      throw err;
    }
  }

  static async createProduct(options) {
    const { name, price, product_category, scan_id, stock, weight } = options;
    if (!name) throw new Error('Name is Missing')
    if (!price) throw new Error('price is Missing')
    if (!product_category) throw new Error('product_category is Missing')
    if (!scan_id) throw new Error('scan_id is Missing')
    if (!stock) throw new Error('stock is Missing')
    if (!weight) throw new Error('weight is Missing')

    try {
      return await Product.createDocWithOptions("product", {
        name, price, product_category, scan_id, stock, weight
      })
    } catch (err) {
      throw err;
    }
  }

}

export default Product;
