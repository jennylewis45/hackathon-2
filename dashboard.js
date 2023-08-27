// // Initialize Firebase (replace with your own Firebase config)
// const firebaseConfig = {
//     apiKey: "AIzaSyBWhG-eLcO09apFi7r1I-QqWkksLcTZAOs",
//     authDomain: "saylani-web-596d5.firebaseapp.com",
//     databaseURL: "https://saylani-web-596d5-default-rtdb.firebaseio.com",
//     projectId: "saylani-web-596d5",
//     storageBucket: "saylani-web-596d5.appspot.com",
//     messagingSenderId: "34846311971",
//     appId: "1:34846311971:web:7fff13c80a185c97c65396",
//     measurementId: "G-KTX6VEHJ4F"
//   };
//   firebase.initializeApp(firebaseConfig);
//   const db = firebase.firestore();
  
//   // Get references to HTML elements
//   const blogForm = document.getElementsByClassName("blogForm");
//   const titleInput = document.getElementById("title");
//   const bodyInput = document.getElementById("body");
  
//   // Event listener for form submission
//   blogForm.addEventListener("submit", function (event) {
//     event.preventDefault(); // Prevent the default form submission
  
//     // Get values from form inputs
//     const title = titleInput.value;
//     const body = bodyInput.value;
  
//     // Check if the title and body meet your validation requirements here
  
//     // Create a new blog post in Firestore
//     db.collection("blogs")
//       .add({
//         title: title,
//         body: body,
//         timestamp: firebase.firestore.FieldValue.serverTimestamp()
//       })
//       .then(function (docRef) {
//         console.log("Blog post added with ID: ", docRef.id);
//         // Clear the form after successful submission
//         titleInput.value = "";
//         bodyInput.value = "";
//       })
//       .catch(function (error) {
//         console.error("Error adding blog post: ", error);
//       });
//   });
  