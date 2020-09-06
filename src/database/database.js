import { Firebase } from './firebase'

export class Database {
  constructor() {
    this.fb = new Firebase()
    this.firestore = this.fb.firestore
  }

  getCollection(collection) {
    return (
      this.firestore.collection(collection).get()
        .then(data => {
        // data is an object with a forEach method
          const build = []
          data.forEach(doc => build.push(doc.data()))
          return build
        })
    )
  }

  get(collection, id) {
    return (
      this.firestore.collection(collection).doc(id).get()
        .then(doc => doc.data())
    )
  }

  set(collection, id, data) {
    this.firestore.collection(collection).doc(id).set(data)
  }

  update(collection, id, data) {
    return this.firestore.collection(collection).doc(id).update(data)
  }
}