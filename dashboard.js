    // Initialize Firebase
    const firebaseConfig = {
        apiKey: "AIzaSyBWhG-eLcO09apFi7r1I-QqWkksLcTZAOs",
        authDomain: "saylani-web-596d5.firebaseapp.com",
        databaseURL: "https://saylani-web-596d5-default-rtdb.firebaseio.com",
        projectId: "saylani-web-596d5",
        storageBucket: "saylani-web-596d5.appspot.com",
        messagingSenderId: "34846311971",
        appId: "1:34846311971:web:7fff13c80a185c97c65396",
        measurementId: "G-KTX6VEHJ4F"
      };
    
    // firebase.initializeApp(firebaseConfig);

    // Reference to the Firebase Realtime Database
    var database = firebase.database();

    // Function to add a new blog post
    function addBlogPost(title, body) {
        // Get a new key for the blog post
        var newPostKey = firebase.database().ref().child('blog-posts').push().key;

        // Create a new blog post object
        var postData = {
            title: title,
            body: body
        };

        // Save the blog post data in the database
        var updates = {};
        updates['/blog-posts/' + newPostKey] = postData;

        return firebase.database().ref().update(updates);
    }

    // Function to retrieve and display blog posts
    function displayBlogPosts() {
        var blogList = document.getElementById("blogList");

        // Reference to the 'blog-posts' node in the database
        var blogPostsRef = firebase.database().ref('blog-posts');

        blogPostsRef.on('value', function(snapshot) {
            blogList.innerHTML = ""; // Clear previous blog posts

            snapshot.forEach(function(childSnapshot) {
                var childData = childSnapshot.val();
                var blogDiv = document.createElement("div");
                blogDiv.innerHTML = "<h2>" + childData.title + "</h2><p>" + childData.body + "</p>";
                blogList.appendChild(blogDiv);
            });
        });
    }

    // Event listener for the blog post form submission
    document.getElementById("blogForm").addEventListener("submit", function(e) {
        e.preventDefault();
        var title = document.getElementById("title").value;
        var body = document.getElementById("body").value;

        addBlogPost(title, body)
            .then(function() {
                // Blog post added successfully, refresh the displayed blog posts
                displayBlogPosts();
            })
            .catch(function(error) {
                console.error("Error adding blog post: " + error.message);
            });

        // Clear form fields
        document.getElementById("title").value = "";
        document.getElementById("body").value = "";
    });

    // Call the function to display existing blog posts
    displayBlogPosts();
