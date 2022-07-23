const firebaseConfig = {
  apiKey: "AIzaSyB81qvVB-xhwiAMKpgOclaCyp8vjV3Z_TE",
  authDomain: "kwitter-app-c59d4.firebaseapp.com",
  databaseURL: "https://kwitter-app-c59d4-default-rtdb.firebaseio.com",
  projectId: "kwitter-app-c59d4",
  storageBucket: "kwitter-app-c59d4.appspot.com",
  messagingSenderId: "798459655897",
  appId: "1:798459655897:web:4aaffb380dcbab0e1070c8",
  measurementId: "G-KJD1G20NKZ"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// ADD YOUR FIREBASE LINKS

function addUser()
{
  user_name = document.getElementById("user_name").value;
  firebase.database().ref("/").child(user_name).update({
    purpose : "adding user"
  });
}


