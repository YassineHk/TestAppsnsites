const functions = require('firebase-functions');

var admin = require("firebase-admin");

var db = admin.database();
var serviceAccount = require("path/to/serviceAccountKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://appsnsites-48310.firebaseio.com"
});


app.get('/home',(Request,Response)=>{
    //Response.send('Hello yassine'); 
    usersRef.set({
        firstname:'yassine',
        lastname:'hakim'
    })
})
 

exports.app = functions.https.onRequest(app);
