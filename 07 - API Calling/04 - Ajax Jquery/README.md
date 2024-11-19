# [**04 - Ajax Jquer](https://github.com/mdmahfuz307/JavaScript-Learning-Journey/tree/master/07%20-%20API%20Calling/04%20-%20Ajax%20Jquery)y**

```jsx
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
```

এখানে প্রতিটি লাইনের ব্যাখ্যা বাংলা ভাষায় দেওয়া হল:

### কনসোল পরিষ্কার করা

```jsx
console.clear();

```

- ব্রাউজারের কনসোল পরিষ্কার করে, যাতে আগের কোনো লগ না থাকে এবং নতুন কোড রান করার সময় কনসোল পরিষ্কার থাকে।

### অ্যাসিঙ্ক্রোনাস AJAX অনুরোধ করার ফাংশন

```jsx
const makeRequest = async (url, method, data) => {
    try {
        const result = await $.ajax({
            url: url,       // API এর ঠিকানা (endpoint)
            method: method, // HTTP মেথড (যেমন: GET, POST, PUT, PATCH, DELETE)
            data: data      // POST, PUT, PATCH অনুরোধের জন্য ডেটা (ঐচ্ছিক)
        });
        return result;      // অনুরোধ সফল হলে রেসপন্স ডেটা ফেরত দেয়
    } catch (error) {
        console.log(error); // অনুরোধ ব্যর্থ হলে ত্রুটি লগ করে
    }
};

```

- `makeRequest` নামের অ্যাসিঙ্ক্রোনাস ফাংশন সংজ্ঞায়িত করা হয়েছে যা jQuery এর `$.ajax()` ব্যবহার করে HTTP অনুরোধ করে।
- `url`: অনুরোধের ঠিকানা।
- `method`: HTTP অনুরোধের ধরন (যেমন: GET, POST)।
- `data`: প্রয়োজনীয় হলে ডেটা পাঠায় (শুধুমাত্র POST, PUT, PATCH এর জন্য)।
- `try...catch` ব্যবহার করে ত্রুটি হ্যান্ডলিং করা হয়েছে:
    - `await $.ajax(...)`: অনুরোধ সম্পূর্ণ হওয়া পর্যন্ত অপেক্ষা করে এবং রেসপন্স ফেরত দেয়।
    - যদি অনুরোধ ব্যর্থ হয়, `catch` ব্লকে ত্রুটি কনসোলে লগ করে।

### GET ডেটা নেওয়ার ফাংশন (সার্ভার থেকে নির্দিষ্ট পোস্ট)

```jsx
const getData = () => {
    makeRequest('<https://jsonplaceholder.typicode.com/posts/1>', 'GET')  // GET অনুরোধ পাঠায়
        .then((res) => {
            console.log(res);  // প্রাপ্ত ডেটা কনসোলে লগ করে
        }).catch((err) => {
            console.log(err);  // ত্রুটি থাকলে তা লগ করে
        });
};

```

- `getData` ফাংশন সংজ্ঞায়িত করা হয়েছে যা GET অনুরোধ করে নির্দিষ্ট URL-এ।
- সফল হলে `.then()` এর মাধ্যমে রেসপন্স কনসোলে প্রিন্ট করে।
- ত্রুটি হলে `.catch()` ব্লকে তা লগ করে।

### POST ফাংশন (সার্ভারে নতুন ডেটা তৈরি করা)

```jsx
const createData = () => {
    makeRequest('<https://jsonplaceholder.typicode.com/posts>', 'POST', {  // POST অনুরোধ পাঠায়
        title: 'foo',  // নতুন পোস্টের জন্য উদাহরণ ডেটা
        body: 'bar',
        userId: 1,
    })
        .then((res) => {
            console.log(res);  // সফল হলে তৈরি হওয়া ডেটা লগ করে
        }).catch((err) => {
            console.log(err);  // ত্রুটি লগ করে
        });
};

```

- `createData` ফাংশন POST অনুরোধ পাঠায় যা নতুন ডেটা তৈরি করে।
- ডেটা (যেমন `title`, `body`, `userId`) `makeRequest` ফাংশনে প্রেরণ করা হয়।
- সফল হলে রেসপন্স প্রিন্ট করে এবং ত্রুটি থাকলে তা লগ করে।

### PUT ফাংশন (বিদ্যমান ডেটা সম্পূর্ণ আপডেট করা)

```jsx
const updateData = () => {
    makeRequest('<https://jsonplaceholder.typicode.com/posts/1>', 'PUT', {  // PUT অনুরোধ পাঠায়
        title: 'fooMa',  // আপডেট হওয়া ডেটা
        body: 'barMa',
        userId: 1,
    })
        .then((res) => {
            console.log(res);  // সফল হলে আপডেট হওয়া ডেটা লগ করে
        }).catch((err) => {
            console.log(err);  // ত্রুটি লগ করে
        });
};

```

- `updateData` ফাংশন PUT অনুরোধ পাঠায়, যা পুরো পোস্ট আপডেট করে।
- রেসপন্স লগ করে এবং ত্রুটি হলে তা দেখায়।

### PATCH ফাংশন (আংশিক ডেটা আপডেট করা)

```jsx
const updateSingleData = () => {
    makeRequest('<https://jsonplaceholder.typicode.com/posts/1>', 'PATCH', {  // PATCH অনুরোধ পাঠায়
        title: 'Jason Holder'  // কেবল 'title' ফিল্ড আপডেট হয়
    })
        .then((res) => {
            console.log(res);  // আপডেট হওয়া ডেটা লগ করে
        }).catch((err) => {
            console.log(err);  // ত্রুটি লগ করে
        });
};

```

- `updateSingleData` ফাংশন PATCH অনুরোধ পাঠায় যা পোস্টের কেবল নির্দিষ্ট অংশ (যেমন `title`) আপডেট করে।
- সফল হলে আপডেট ডেটা লগ করে, ত্রুটি থাকলে তা দেখায়।

### DELETE ফাংশন (সার্ভার থেকে পোস্ট মুছে ফেলা)

```jsx
const deleteData = () => {
    makeRequest('<https://jsonplaceholder.typicode.com/posts/1>', 'DELETE')  // DELETE অনুরোধ পাঠায়
        .then((res) => {
            console.log(res);  // রেসপন্স (সাধারণত খালি বা নিশ্চিতকরণ বার্তা) লগ করে
        }).catch((err) => {
            console.log(err);  // ত্রুটি লগ করে
        });
};

```

- `deleteData` ফাংশন DELETE অনুরোধ পাঠায় যা নির্দিষ্ট পোস্ট মুছে ফেলে।
- সফল হলে রেসপন্স লগ করে, ত্রুটি হলে তা দেখায়।

### ফাংশন কল করার জন্য মন্তব্যকৃত অংশ

```jsx
// getData();         // GET অনুরোধ পরীক্ষা
// createData();      // POST অনুরোধ পরীক্ষা
// updateData();      // PUT অনুরোধ পরীক্ষা
// updateSingleData();// PATCH অনুরোধ পরীক্ষা
// deleteData();      // DELETE অনুরোধ পরীক্ষা

```

- পরীক্ষার জন্য ফাংশনগুলো কল করা হয়েছে। নির্দিষ্ট ফাংশন চালাতে চাইলে মন্তব্য অংশটি আনকমেন্ট করুন।