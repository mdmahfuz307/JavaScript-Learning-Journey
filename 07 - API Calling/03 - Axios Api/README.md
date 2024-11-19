## [**GetRequest**](https://github.com/mdmahfuz307/JavaScript-Learning-Journey/blob/master/07%20-%20API%20Calling/03%20-%20Axios%20Api/GetRequest.html)

```jsx
function ExcGetRequest(){
let URL = "<http://164.68.107.70:6060/api/v1/ReadProduct>";
let Configuration = {method:"GET"};

fetch(URL,Configuration)
.then(response => response.json())
.then(result => console.log(result))
.catch(error => console.log('error',error));
}
```

### GET অনুরোধ ব্যাখ্যা

```jsx
function ExcGetRequest() {
```

- `ExcGetRequest` নামে একটি ফাংশন সংজ্ঞায়িত করা হয়েছে যা GET অনুরোধ পাঠানোর জন্য।

```jsx
let URL = "<http://164.68.107.70:6060/api/v1/ReadProduct>";
```

- `URL` নামক একটি ভেরিয়েবল তৈরি করা হয়েছে যেখানে সার্ভারের API-এর ঠিকানা রাখা হয়েছে।

```jsx
let Configuration = { method: "GET" };
```

- `Configuration` নামে একটি অবজেক্ট তৈরি করা হয়েছে যা HTTP অনুরোধের ধরন `GET` হিসেবে নির্ধারণ করে।

```jsx
fetch(URL, Configuration)
```

- `fetch()` ফাংশন ব্যবহার করে `URL`এ GET অনুরোধ পাঠানো হয়েছে, যেখানে `Configuration` অবজেক্টটি নির্দেশ দেয় কী ধরনের অনুরোধ পাঠানো হবে।

```jsx
.then(response => response.json())
```

- সার্ভার থেকে পাওয়া রেসপন্স `response.json()` মেথড দিয়ে JSON ফরম্যাটে রূপান্তরিত করা হয়েছে।

```jsx
.then(result => console.log(result))
```

- JSON ডেটা `result` হিসেবে কনসোলে লগ করা হয়েছে, যা সার্ভারের থেকে প্রাপ্ত ডেটা প্রদর্শন করে।

```jsx
.catch(error => console.log('error', error));
```

- যদি অনুরোধ ব্যর্থ হয়, `.catch()` ব্লকে ত্রুটি কনসোলে লগ করে।

## [**PostRequest**](https://github.com/mdmahfuz307/JavaScript-Learning-Journey/blob/master/07%20-%20API%20Calling/03%20-%20Axios%20Api/PostRequest.html)

```jsx
function ExecPostRequest(){
let URL = "<http://164.68.107.70:6060/api/v1/CreateProduct>";

let BodyData = {ProductName:"Demo",ProductCode:"2113131",Img:"abc", UnitPrice:"12", Qty:"1", TotalPrice:"12"}

let Configuration = {
  method:"POST",
  headers: {'Accept': 'application/json','Content-Type': 'application/json'},
  body: JSON.stringify(BodyData)
}

fetch(URL,Configuration)
.then(response => response.json())
.then(result => console.log(result))
.catch(error => console.log(error));

}
```

### POST অনুরোধ ব্যাখ্যা

```jsx
function ExecPostRequest() {
```

- `ExecPostRequest` নামে একটি ফাংশন তৈরি করা হয়েছে যা POST অনুরোধ পাঠানোর জন্য।

```jsx
let URL = "<http://164.68.107.70:6060/api/v1/CreateProduct>";
```

- `URL` ভেরিয়েবলে POST অনুরোধের API ঠিকানা রাখা হয়েছে।

```jsx
let BodyData = { ProductName: "Demo", ProductCode: "2113131", Img: "abc", UnitPrice: "12", Qty: "1", TotalPrice: "12" };
```

- `BodyData` নামে একটি অবজেক্ট তৈরি করা হয়েছে যেখানে POST অনুরোধের জন্য প্রয়োজনীয় ডেটা রয়েছে।

```jsx
let Configuration = {
  method: "POST",
  headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
  body: JSON.stringify(BodyData)
};
```

- `Configuration` অবজেক্টে POST অনুরোধের মেথড, হেডার এবং `body` সংজ্ঞায়িত করা হয়েছে।
    - `method: "POST"` নির্দেশ দেয় অনুরোধের ধরন।
    - `headers` অংশে কনটেন্ট টাইপ এবং গ্রহণযোগ্য ডেটা ফরম্যাট নির্ধারণ করা হয়েছে।
    - `body: JSON.stringify(BodyData)` দিয়ে `BodyData` অবজেক্টটি JSON স্ট্রিং হিসেবে রূপান্তরিত করা হয়েছে।

```jsx
fetch(URL, Configuration)
```

- `fetch()` ফাংশন ব্যবহার করে `URL`এ POST অনুরোধ পাঠানো হয়েছে এবং `Configuration` অবজেক্ট ব্যবহার করে অনুরোধের বিবরণ নির্ধারণ করা হয়েছে।

```jsx
.then(response => response.json())
```

- রেসপন্স JSON ফরম্যাটে রূপান্তরিত করা হয়েছে।

```jsx
.then(result => console.log(result))
```

- সার্ভার থেকে প্রাপ্ত রেসপন্স `result` কনসোলে প্রদর্শিত হয়েছে।

```jsx
.catch(error => console.log(error));
```

- যদি অনুরোধে কোনো সমস্যা হয়, `.catch()` ব্লকে ত্রুটি কনসোলে লগ করে।