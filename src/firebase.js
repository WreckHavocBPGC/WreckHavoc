import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth"
import { getFirestore} from "firebase/firestore"


const firebaseConfig = {
    apiKey: process.env.VUE_APP_API_KEY,
  authDomain: process.env.VUE_APP_AUTH_DOMAIN,
  projectId: process.env.VUE_APP_PROJECT_ID,
  storageBucket: process.env.VUE_APP_STORAGEBUCKET,
  messagingSenderId: process.env.VUE_APP_MESSAGING_SENDER_ID,
  appId: process.env.VUE_APP_APP_ID
}

const app = initializeApp(firebaseConfig);

export default {
    app,
    auth : getAuth(app),
    db : getFirestore(app)
}
