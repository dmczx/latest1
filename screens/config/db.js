import Firebase from 'firebase';  
let config = {  
    apiKey: "AIzaSyCrSatD0YU0SpIn9Tfe-IcsNGMvBiB-9KA",
    authDomain: "reactnative-me.firebaseapp.com",
    databaseURL: "https://reactnative-me.firebaseio.com",
    projectId: "reactnative-me",
    storageBucket: "reactnative-me.appspot.com",
    messagingSenderId: "172449496051"
};
let app = Firebase.initializeApp(config);  
export const db = app.database();  