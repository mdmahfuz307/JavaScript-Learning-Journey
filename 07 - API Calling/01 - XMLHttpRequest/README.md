# [**XMLHttpRequest**](https://github.com/mdmahfuz307/JavaScript-Learning-Journey/tree/master/07%20-%20API%20Calling/01%20-%20XMLHttpRequest)

```jsx
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
```

### কোড ব্যাখ্যা বাংলায়

### মন্তব্য (Comments)

```jsx
// event - onload(), onerror()
// property - response, responseText, responseType, responseURL, status, statusText
// function - open(), send(), setRequestHeader()
```

- এই অংশে `XMLHttpRequest` এর বিভিন্ন ইভেন্ট, প্রপার্টি এবং ফাংশনের উল্লেখ করা হয়েছে। `onload()` এবং `onerror()` ইভেন্ট; `response`, `status` ইত্যাদি প্রপার্টি; এবং `open()`, `send()` ইত্যাদি ফাংশনের কথা বলা হয়েছে।

### Console পরিষ্কার করা

```jsx
console.clear();
```

- কনসোল ক্লিয়ার করা হয়েছে, যাতে আউটপুট আরও স্পষ্টভাবে দেখা যায়।

### HTTP অনুরোধ তৈরি করার ফাংশন

```jsx
const makeRequest = (method, url, data) => {
    return new Promise((resolve, reject) => {
        // নতুন XMLHttpRequest অবজেক্ট তৈরি
        let xhr = new XMLHttpRequest();

        // অনুরোধের ধরন (GET, POST, ইত্যাদি) এবং URL নির্ধারণ করা
        xhr.open(method, url);

        // সার্ভারকে জানানো হচ্ছে যে ডেটা JSON ফরম্যাটে পাঠানো হবে
        xhr.setRequestHeader('Content-Type', 'application/json');

        // অনুরোধ সফলভাবে সম্পন্ন হলে কি হবে তা নির্ধারণ করা
        xhr.onload = () => {
            // JSON ডেটা পার্স করা এবং কনসোলে দেখানো
            let data = xhr.response;
            console.log(JSON.parse(data));
        };

        // অনুরোধে কোন ত্রুটি হলে কি হবে তা নির্ধারণ করা
        xhr.onerror = () => {
            console.log("Error Occurs.");
        };

        // অনুরোধ পাঠানো (যদি ডেটা থাকে তবে তা JSON-এ রূপান্তর করে পাঠানো)
        xhr.send(JSON.stringify(data));
    });
};
```

- `makeRequest()` নামে একটি ফাংশন তৈরি করা হয়েছে, যা HTTP অনুরোধ তৈরি করে এবং একটি `Promise` রিটার্ন করে।
- `XMLHttpRequest` ব্যবহার করে একটি HTTP অনুরোধ করা হয়।
- `open()` মেথড দিয়ে HTTP মেথড ও URL সেট করা হয়।
- `setRequestHeader()` দিয়ে হেডারস ঠিক করা হয়, যাতে সার্ভার জানে যে JSON ডেটা পাঠানো হচ্ছে।
- `onload` ইভেন্টে রেসপন্স JSON ফরম্যাটে কনসোলে দেখানো হয়।
- `onerror` ইভেন্টে ত্রুটির ক্ষেত্রে একটি বার্তা কনসোলে দেখানো হয়।
- অবশেষে, `send()` মেথড দিয়ে অনুরোধ পাঠানো হয়।

### GET অনুরোধের জন্য ফাংশন

```jsx
const getData = () => {
    makeRequest('GET', '<https://jsonplaceholder.typicode.com/posts>')
        .then((res) => console.log(res));  // প্রমিস সমাধান হলে রেজাল্ট কনসোলে দেখানো হয়
}
```

- `getData()` ফাংশন `GET` মেথড ব্যবহার করে `makeRequest()` কল করে এবং ডেটা রিট্রিভ করে।

### POST অনুরোধের জন্য ফাংশন

```jsx
const sendData = () => {
    makeRequest('POST', '<https://jsonplaceholder.typicode.com/posts>', {
        title: 'foo',
        body: 'bar',
        userId: 1,
    });
}
```

- `sendData()` ফাংশন `POST` মেথড ব্যবহার করে নতুন ডেটা সার্ভারে পাঠায়। প্রোডাক্ট বা ডেটা সংক্রান্ত কিছু ফিল্ড যেমন `title`, `body`, `userId` পাঠানো হয়।

### PUT অনুরোধের জন্য ফাংশন

```jsx
const updateData = () => {
    makeRequest('PUT', '<https://jsonplaceholder.typicode.com/posts/1>', {
        id: 1,
        title: 'fooMa',
        body: 'barMa',
        userId: 1,
    });
}
```

- `updateData()` ফাংশন `PUT` মেথড ব্যবহার করে সম্পূর্ণ ডেটা আপডেট করে। `id`, `title`, `body` এবং `userId` আপডেট করা হয়।

### PATCH অনুরোধের জন্য ফাংশন

```jsx
const updateSingleData = () => {
    makeRequest('PATCH', '<https://jsonplaceholder.typicode.com/posts/1>', {
        title: 'Change Name: Folk Warner',
    });
}
```

- `updateSingleData()` ফাংশন `PATCH` মেথড ব্যবহার করে আংশিক ডেটা আপডেট করে। এখানে কেবল `title` আপডেট করা হয়।

### DELETE অনুরোধের জন্য ফাংশন

```jsx
const deleteData = () => {
    makeRequest('DELETE', '<https://jsonplaceholder.typicode.com/posts/1>');
}

```

- `deleteData()` ফাংশন `DELETE` মেথড ব্যবহার করে একটি নির্দিষ্ট ডেটা রেকর্ড মুছে ফেলে।

### ফাংশন কল

```jsx
// getData();         // GET অনুরোধ
// sendData();        // POST অনুরোধ
// updateData();      // PUT অনুরোধ
// updateSingleData();// PATCH অনুরোধ
// deleteData();      // DELETE অনুরোধ
```

- প্রত্যেকটি ফাংশন কল করার জন্য আলাদা লাইন। ব্যবহারকারীর সুবিধার্থে, চাইলে মন্তব্য থেকে আনকমেন্ট করে ব্যবহার করা যাবে।

### সারসংক্ষেপ

এই কোডটি বিভিন্ন HTTP অনুরোধ (GET, POST, PUT, PATCH, DELETE) করার জন্য `XMLHttpRequest` ব্যবহার করেছে। প্রতিটি ফাংশন কনসোল আউটপুট এবং রেসপন্স পরিচালনার উপায় ব্যাখ্যা করেছে।