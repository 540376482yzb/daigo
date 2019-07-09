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
}

export default Product;
