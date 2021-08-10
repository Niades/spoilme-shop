const firebase = require("firebase");
require("firebase/firestore");

const log = require("../util/log").createLogger("db");

log("initializing firebase");
firebase.initializeApp({
  apiKey: "AIzaSyC__jtxrIGt90fYIlt619Cg-E7vo0bhjss",
  authDomain: "spoilme-78e9e.firebaseapp.com",
  projectId: "spoilme-78e9e",
  storageBucket: "spoilme-78e9e.appspot.com",
  messagingSenderId: "421308046960",
  appId: "1:421308046960:web:a1586143d6af18c37d1eb5",
});
log("done? probably");

const db = firebase.firestore();

module.exports = db;