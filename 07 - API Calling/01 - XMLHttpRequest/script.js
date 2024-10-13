// event - onload(), onerror()
// property - response, responseText, responseType, responseURL, status, statusText
// function - open(), send(), setRequestHeader()

// Clear the console for better visibility of outputs
console.clear();

// Function to make an HTTP request (GET, POST, PUT, PATCH, DELETE)
const makeRequest = (method, url, data) => {
    return new Promise((resolve, reject) => {
        // Create a new instance of XMLHttpRequest
        let xhr = new XMLHttpRequest();

        // Initialize the request by specifying the HTTP method and URL
        xhr.open(method, url);

        // Set the request header to inform the server that the data will be in JSON format
        xhr.setRequestHeader('Content-Type', 'application/json');

        // Define what happens when the request is successfully completed (onload event)
        xhr.onload = () => {
            // Parse the JSON response and log it to the console
            let data = xhr.response;
            console.log(JSON.parse(data));
        };

        // Define what happens if there is a network or other error (onerror event)
        xhr.onerror = () => {
            console.log("Error Occurs.");
        };

        // Send the request with any data passed to the function (for POST, PUT, PATCH)
        xhr.send(JSON.stringify(data));
    });
};

// Function to make a GET request to retrieve data
const getData = () => {
    makeRequest('GET', 'https://jsonplaceholder.typicode.com/posts')
        .then((res) => console.log(res));  // Log the result when the promise resolves
}

// Function to make a POST request to send data
const sendData = () => {
    makeRequest('POST', 'https://jsonplaceholder.typicode.com/posts', {
        title: 'foo',
        body: 'bar',
        userId: 1,
    });
}

// Function to make a PUT request to update an entire data record
const updateData = () => {
    makeRequest('PUT', 'https://jsonplaceholder.typicode.com/posts/1', {
        id: 1,
        title: 'fooMa',
        body: 'barMa',
        userId: 1,
    });
}

// Function to make a PATCH request to update part of a data record
const updateSingleData = () => {
    makeRequest('PATCH', 'https://jsonplaceholder.typicode.com/posts/1', {
        title: 'Change Name: Folk Warner',
    });
}

// Function to make a DELETE request to remove a data record
const deleteData = () => {
    makeRequest('DELETE', 'https://jsonplaceholder.typicode.com/posts/1');
}

// Uncomment the function calls below to test each request type

// getData();         // Retrieve data with GET
// sendData();        // Send new data with POST
// updateData();      // Update existing data with PUT
// updateSingleData();// Partially update data with PATCH
// deleteData();      // Delete data with DELETE