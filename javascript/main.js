// Initialize Firebase (ADD YOUR OWN DATA)
var config = {
  apiKey: "AIzaSyCcgWvostpMO4Jtb7Wj_3LQajVC4BEIW1Q",
  authDomain: "to-do-app-88805.firebaseapp.com",
  databaseURL: "https://to-do-app-88805-default-rtdb.firebaseio.com",
  projectId: "to-do-app-88805",
  storageBucket: "to-do-app-88805.appspot.com",
  messagingSenderId: "693235839104",
  appId: "1:693235839104:web:3588a2138d23e1bd13b665",
};
firebase.initializeApp(config);

var messagesRef = firebase.database().ref('messages');

document.getElementById('contactForm').addEventListener('submit', submitForm);

function submitForm(e) {
  e.preventDefault();

  var name = getInputVal('name');
  var email = getInputVal('email');
  var message = getInputVal('message');

  saveMessage(name, email, message);

  document.getElementById('contactForm').reset();
}


function getInputVal(id) {
  return document.getElementById(id).value;
}


function saveMessage(name, email, message) {
  var newMessageRef = messagesRef.push();
  newMessageRef.set({
    name: name,
    email: email,
    message: message
  });
}



