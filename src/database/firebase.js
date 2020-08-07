import app from 'firebase/app'
import 'firebase/firebase-firestore'
import { firebaseConfig } from 'envs/APP_ENV/'

class Firebase {
  constructor() {
    app.initializeApp(firebaseConfig)
    this.firestore = app.firestore()
  }
}

export default Firebase
