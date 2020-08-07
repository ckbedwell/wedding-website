import { useSelector } from 'react-redux'

export function useDatabase() {
  // database.database
  const { database } = useSelector(state => state.database)

  if (database) {
    const { firestore } = database

    return {
      getCollection(collection) {
        return (
          firestore.collection(collection).get()
            .then(data => {
              // data is an object with a forEach method
              const build = []
              data.forEach(doc => build.push(doc.data()))
              return build
            })
        )
      },
      get(collection, id) {
        return (
          firestore.collection(collection).doc(id).get()
            .then(doc => doc.data())
        )},
      set(collection, id, data) {
        firestore.collection(collection).doc(id).set(data)
      },
      update(collection, id, data) {
        firestore.collection(collection).doc(id).update(data)
      },
    }
  }
}
