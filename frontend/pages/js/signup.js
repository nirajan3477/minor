const firebaseConfig = {
  apiKey: "AIzaSyCjTNFU_-2zZtN8nq52AMwmFnbcsjWAxnw",
  authDomain: "jaishreeram-a050f.firebaseapp.com",
  projectId: "jaishreeram-a050f",
  storageBucket: "jaishreeram-a050f.firebasestorage.app",
  messagingSenderId: "74029609238",
  appId: "1:74029609238:web:73ab5bc310969b9dcbe037"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Initialize Firebase Auth
const auth = firebase.auth();

// Google Authentication function
function signInWithGoogle() {
  var provider = new firebase.auth.GoogleAuthProvider();

  auth
    .signInWithPopup(provider)
    .then((result) => {
      const user = result.user;
      console.log("User signed in:", user);

      // Store user's name in localStorage
      localStorage.setItem("userName", user.displayName);

      // Redirect to index.html after successful login
      window.location.href = "index.html";
    })
    .catch((error) => {
      console.log("Error during sign-in:", error);
    });
}

// Add event listener to Google sign-up button
document.querySelector(".google-btn").addEventListener("click", function (e) {
  e.preventDefault(); // Prevent default link behavior
  signInWithGoogle(); // Call Google Sign-In function
});
