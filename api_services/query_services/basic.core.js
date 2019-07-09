import fireBase from "../firebase";

class Basic {
  constructor(collection, doc_id) {
    this.collection = collection;
    this.doc_id = doc_id;
  }

  /**
   * @return {promise} firebase promise
   */
  async getDocDetailWithId() {
    if (!this.collection) throw new Error("NO COLLECTION NAME FOUND");
    if (!this.doc_id) throw new Error("NO DOC_ID FOUND");

    try {
      return fireBase.dataBase
        .collection(this.collection)
        .doc(this.doc_id)
        .get()
        .then(doc => ({ _id: doc.id, ...doc.data() }));
    } catch (err) {
      throw err;
    }
  }

  /**
   *
   * @param {map} options update options
   */
  async modifyDoc(options) {
    if (!options) throw new Error("Missing options");
    const { user_token } = options;
    //TODO: check user_token
    const docDetail = await this.getDocDetailWithId();
    if (!docDetail) throw new Error("No Doc is found");
    return fireBase.dataBase
      .collection(this.collection)
      .doc(this.doc_id)
      .update(options);
  }

  /**
   * query for shallow relational tables
   * @param {string} collection_name - firebase collection name
   * @return {Promise} array of list
   */
  static async queryListShallow(collection_name) {
    if (!collection_name) throw new Error("NO COLLECTION NAME FOUND");
    return fireBase.dataBase
      .collection(collection_name)
      .get()
      .then(querySnapShot => {
        const shallowList = [];
        querySnapShot.forEach(doc => {
          const docDetail = { _id: doc.id, ...doc.data() };
          shallowList.push(docDetail);
        });
        return shallowList;
      });
  }

  /**
   *
   * @param {*} collection_name
   * @param {*} options
   * @return {Promise} firebase promise
   */
  static async createDocWithOptions(collection_name, options) {
    return await fireBase.dataBase
      .collection(collection_name)
      .add({ ...options, user_token: "1234" });
  }
}

export default Basic;
