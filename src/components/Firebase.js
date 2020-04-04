import app from 'firebase/app';
import 'firebase/auth';
import 'firebase/firebase-firestore';

const config = {
  apiKey: 'AIzaSyDdy254dFsgs3P2RnQzIij1ddQ-R_ZEU2k',
  authDomain: 'covidoc-7c58b.firebaseapp.com',
  databaseURL: 'https://covidoc-7c58b.firebaseio.com',
  projectId: 'covidoc-7c58b',
  storageBucket: 'covidoc-7c58b.appspot.com',
  messagingSenderId: '508167965250',
  appId: '1:508167965250:web:71256fbdd8c2dc38eabbdb',
  measurementId: 'G-SDR5P4F8EV',
};

// app.initializeApp(config);

class Firebase {
  constructor() {
    app.initializeApp(config);
    this.auth = app.auth();
    this.db = app.firestore();
  }

  login(email, password) {
    return this.auth.signInWithEmailAndPassword(email, password);
  }

  logout() {
    return this.auth.signOut();
  }

  async register({ email, password, role }) {
    await this.auth.createUserWithEmailAndPassword(email, password);
    return this.auth.currentUser.updateProfile({
      confirm: true,
      role,
    });
  }

  showQuote(quote) {
    if (this.auth.currentUser) {
      return alert('Not authorized!');
    }
  }
}

export default new Firebase();
