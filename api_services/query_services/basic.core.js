import moment from 'moment'
import fireBase from '../firebase.js'
// import console = require('console');

class Basic {
  constructor(collection, doc_id) {
    this.collection = collection;
    this.doc_id = doc_id;
  }

  /**
   * @return {promise} fireBase promise
   */
  async getDocDetailWithId() {
    if (!this.collection) throw new Error("NO COLLECTION NAME FOUND");
    if (!this.doc_id) throw new Error("NO DOC_ID FOUND");
    const user_token = fireBase.auth.currentUser ? fireBase.auth.currentUser.uid : ''
    return fireBase.dataBase
      .collection(this.collection)
      .where('user_token', '==', user_token)
      .doc(this.doc_id)
      .get()
      .then(doc => ({ _id: doc.id, ...doc.data() }))
      .catch(err => { throw err })
  }

  /**
   *
   * @param {map} options update options
   */
  async modifyDoc(options) {
    if (!options) throw new Error("Missing options");
    const user_token = fireBase.auth.currentUser ? fireBase.auth.currentUser.uid : ''
    const docDetail = await this.getDocDetailWithId();
    if (!docDetail) throw new Error("No Doc is found");
    return fireBase.dataBase
      .collection(this.collection)
      .doc(this.doc_id)
      .where('user_token', '==', user_token)
      .update({ ...options })
      .catch(err => { throw err })
  }

  /**
   * 
   * @param {string} doc_id document id  
   */
  async deleteDoc() {
    const user_token = fireBase.auth.currentUser ? fireBase.auth.currentUser.uid : ''
    if (!doc_id) throw new Error('Missing Doc Id')
    return fireBase.dataBase
      .collection(this.collection)
      .doc(this.doc_id)
      .where('user_token', '==', user_token)
      .update({ status: 0 })
      .catch(err => {
        throw err;
      })
  }

  /**
   * query for shallow relational tables
   * @param {string} collection_name - fireBase collection name
   * @return {Promise} array of list
   */
  static async queryListShallow(collection_name, sort_direction) {
    if (!collection_name) throw new Error("NO COLLECTION NAME FOUND");
    const user_token = fireBase.auth.currentUser ? fireBase.auth.currentUser.uid : ''
    return await fireBase.dataBase
      .collection(collection_name)
      .where('status', '==', 1)
      .where('user_token', '==', user_token)
      .get()
      .then(querySnapShot => {
        const shallowList = [];
        querySnapShot.forEach(doc => {
          shallowList.push({ _id: doc.id, ...doc.data() });
        });
        return shallowList
      })
      .catch(error => {
        throw error;
      })

  }

  /**
   *
   * @param {*} collection_name
   * @param {*} options
   * @return {Promise} fireBase promise
   */
  static async createDocWithOptions(collection_name, options) {
    const user_token = fireBase.auth.currentUser ? fireBase.auth.currentUser.uid : ''
    return await fireBase.dataBase
      .collection(collection_name)
      .add({ ...options, user_token, create_at: moment.utc().format(), status: 1 })
      .catch(err => {
        throw err;
      })
  }
}

export default Basic;
