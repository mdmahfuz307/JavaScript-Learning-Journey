// 4 common ways to make API calls in JavaScript: 
// 1. XMLHttpRequest (older and lower-level API)
// 2. fetch (modern and built-in API)
// 3. axios (third-party library with promises)
// 4. jQuery (using $.ajax)

// Ensure to include the jQuery library CDN in your HTML file for $.ajax to work:
// <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>

// AJAX: Asynchronous JavaScript and XML (used to send/receive data from a server asynchronously)

console.clear();

// Function to make an asynchronous AJAX request using jQuery
const makeRequest = async (url, method, data) => {
    try {
        const result = await $.ajax({
            url: url,       // The API endpoint
            method: method, // HTTP method (GET, POST, PUT, PATCH, DELETE)
            data: data      // Data to send with POST, PUT, PATCH requests (optional)
        });
        return result;      // Return the response data if the request is successful
    } catch (error) {
        console.log(error); // Log any errors if the request fails
    }
}

// Function to GET data (retrieve a specific post) from the server
const getData = () => {
    makeRequest('https://jsonplaceholder.typicode.com/posts/1', 'GET')  // GET request to fetch data
        .then((res) => {
            console.log(res);  // Log the received data
        }).catch((err) => {
            console.log(err);  // Log any errors
        });
};

// Function to POST (create new data) to the server
const createData = () => {
    makeRequest('https://jsonplaceholder.typicode.com/posts', 'POST', {  // POST request to create new data
        title: 'foo',  // Example data to create a new post
        body: 'bar',
        userId: 1,
    })
        .then((res) => {
            console.log(res);  // Log the created data from the server
        }).catch((err) => {
            console.log(err);  // Log any errors
        });
};

// Function to PUT (update existing data) on the server
const updateData = () => {
    makeRequest('https://jsonplaceholder.typicode.com/posts/1', 'PUT', {  // PUT request to update the entire post
        title: 'fooMa',  // Updated data
        body: 'barMa',
        userId: 1,
    })
        .then((res) => {
            console.log(res);  // Log the updated data from the server
        }).catch((err) => {
            console.log(err);  // Log any errors
        });
};

// Function to PATCH (partially update existing data) on the server
const updateSingleData = () => {
    makeRequest('https://jsonplaceholder.typicode.com/posts/1', 'PATCH', {  // PATCH request to partially update the post
        title: 'Jason Holder'  // Only the 'title' field is updated
    })
        .then((res) => {
            console.log(res);  // Log the updated data
        }).catch((err) => {
            console.log(err);  // Log any errors
        });
};

// Function to DELETE data (remove a post) from the server
const deleteData = () => {
    makeRequest('https://jsonplaceholder.typicode.com/posts/1', 'DELETE')  // DELETE request to remove the post
        .then((res) => {
            console.log(res);  // Log the response (likely empty or confirmation message)
        }).catch((err) => {
            console.log(err);  // Log any errors
        });
};

// Uncomment the function calls below to test the API requests

// getData();         // Test GET request
// createData();      // Test POST request
// updateData();      // Test PUT request
// updateSingleData();// Test PATCH request
// deleteData();      // Test DELETE request