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
          let build = {}

          data.forEach(doc => {
            build[doc.id] = doc.data()
          })

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
    return this.firestore.collection(collection).doc(id).set(data)
  }

  update(collection, id, data) {
    return this.firestore.collection(collection).doc(id).update(data)
  }
}