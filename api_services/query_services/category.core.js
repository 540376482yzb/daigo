import Basic from "./basic.core";

class Category extends Basic {
  constructor(category_id) {
    super("category", category_id);
    this.category_id = category_id;
  }

  async getCategoryWithId() {
    return await this.getDocDetailWithId();
  }

  static async getCatergoryList() {
    return await Category.queryListShallow('category')
  }
}

export default Category;
