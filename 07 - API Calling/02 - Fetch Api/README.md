## [**BackEndToFrontEnd**](https://github.com/mdmahfuz307/JavaScript-Learning-Journey/blob/master/07%20-%20API%20Calling/02%20-%20Fetch%20Api/BackEndToFrontEnd.html)

```jsx
 getProductListFromBackEnd();
 
 async function getProductListFromBackEnd(){

    try{

      let myData = document.getElementById("myData")
      myData.innerText = "Loading..........."

      let URL = "<http://164.68.107.70:6060/api/v1/ReadProduct>"
      let res = await fetch(URL)    // await use korar karon hlo w8 korarnor jrno
      let data = await res.json()    //ager line e jdi await na dtm ta hle ai line e aisa porto tokhon pblm hoto karon amader data jdi na ase ta hle JSON ta pabo ki kore?

      myData.innerText = JSON.stringify(data)  // Amra amader Brower e JSON k dekhaite pari na tai JSON data tare amader String e convert kore nete hy tai amra (JSON.stringify) use korese JSON k String e convert korar jrno

      }catch(error){

        let myData = document.getElementById("myData")
        myData.innerText = "Something Went Wrong"
        console.log(error)

      }

    }
```

### কোডের ব্যাখ্যা বাংলায়

```jsx
getProductListFromBackEnd();
```

- `getProductListFromBackEnd()` ফাংশনটি কল করা হয়েছে যাতে সার্ভার থেকে ডেটা নিয়ে আসা যায়।

```jsx
async function getProductListFromBackEnd() {
```

- `async` কীওয়ার্ড ব্যবহার করে একটি ফাংশন তৈরি করা হয়েছে যা অ্যাসিঙ্ক্রোনাস অপারেশন করতে পারে। এটি এমন ফাংশন, যা `await` ব্যবহার করতে পারবে।

```jsx
try {
```

- `try` ব্লক শুরু করা হয়েছে যেখানে কোনো সম্ভাব্য ত্রুটি ছাড়া কোড নির্বাহ করার চেষ্টা করা হবে।

```jsx
let myData = document.getElementById("myData");
```

- `myData` নামে একটি ভেরিয়েবল তৈরি করা হয়েছে যা `myData` আইডির HTML এলিমেন্টকে রেফারেন্স করে।

```jsx
myData.innerText = "Loading...........";

```

- `myData` এলিমেন্টের `innerText` আপডেট করা হয়েছে, যাতে ব্যবহারকারীর জন্য "Loading..........." মেসেজ প্রদর্শন করা হয়।

```jsx
let URL = "<http://164.68.107.70:6060/api/v1/ReadProduct>";
```

- `URL` নামে একটি ভেরিয়েবল তৈরি করা হয়েছে যেখানে API-এর ঠিকানা রাখা হয়েছে।

```jsx
let res = await fetch(URL);
```

- `fetch()` ফাংশন ব্যবহার করে `URL` থেকে ডেটা আনা হচ্ছে এবং `await` ব্যবহার করা হয়েছে যাতে সার্ভার থেকে ডেটা আসা পর্যন্ত এই লাইনটি অপেক্ষা করে।

```jsx
let data = await res.json();

```

- `res` অবজেক্টে থাকা ডেটা `.json()` মেথডের মাধ্যমে JSON ফরম্যাটে কনভার্ট করা হয়েছে এবং `await` ব্যবহার করা হয়েছে যাতে JSON ডেটা আসা পর্যন্ত অপেক্ষা করা হয়।

```jsx
myData.innerText = JSON.stringify(data)
```

- প্রাপ্ত JSON ডেটাকে `JSON.stringify(data)` মেথড দিয়ে স্ট্রিং-এ রূপান্তর করে `myData` এলিমেন্টে দেখানো হয়েছে, কারণ ব্রাউজার সরাসরি JSON অবজেক্ট প্রদর্শন করতে পারে না।

```jsx
} catch (error) {
```

- `try` ব্লকে কোনো ত্রুটি ঘটলে `catch` ব্লক চালু হবে।

```jsx
let myData = document.getElementById("myData");
myData.innerText = "Something Went Wrong";
```

- যদি কোনো ত্রুটি ঘটে, তাহলে `myData` এলিমেন্টের `innerText`এ "Something Went Wrong" দেখানো হবে।

```jsx
console.log(error);
```

- ত্রুটিটি কনসোলে লগ করা হচ্ছে, যাতে ডেভেলপার সহজে ত্রুটির কারণ বুঝতে পারে।

```jsx
}
```

- `catch` ব্লকের সমাপ্তি।

### সারাংশ:

এই কোডটি সার্ভার থেকে একটি প্রোডাক্টের তালিকা নিয়ে আসে এবং তা ব্রাউজারে দেখায়। কোনো সমস্যা হলে, তা কনসোলে ত্রুটির বার্তা প্রদর্শন করে এবং ব্যবহারকারীকে জানায় যে কিছু ভুল হয়েছে।

## [**FrontEndToBackEnd**](https://github.com/mdmahfuz307/JavaScript-Learning-Journey/blob/master/07%20-%20API%20Calling/02%20-%20Fetch%20Api/FrontEndToBackEnd.html)

```jsx
<body>

<label>Product Name</label>
<input id="ProductName"/>
<br/>
<br/>
<label>Product Code</label>
<input id="ProductCode"/>
<br/>
<br/>
<label>Product Img</label>
<input id="Img"/>
<br/>
<br/>
<label>Unit Price</label>
<input id="UnitPrice"/>
<br/>
<br/>
<label>Qty</label>
<input id="Qty"/>
<br/>
<br/>
<label>Total Price</label>
<input id="TotalPrice"/>
<br/>
<br/>

<button onclick="SendDataToBackEnd()">Submit</button>

<h1 id="myMessage"></h1>

<script>

    async function SendDataToBackEnd(){

        let ProductName = document.getElementById("ProductName").value;
        let ProductCode = document.getElementById("ProductCode").value;
        let Img = document.getElementById("Img").value;
        let UnitPrice = document.getElementById("UnitPrice").value;
        let Qty = document.getElementById("Qty").value;
        let TotalPrice = document.getElementById("TotalPrice").value;

        let DataForSend = {
            ProductName:ProductName,
            ProductCode:ProductCode,
            Img:Img,
            UnitPrice:UnitPrice,
            Qty:Qty,
            TotalPrice:TotalPrice
        }

        let myMessage = document.getElementById("myMessage");
        myMessage.innerText="Sending......"

        let URL = "<http://164.68.107.70:6060/api/v1/CreateProduct>"

        let res = await fetch(
            URL,
            {
                method: "POST",
                headers:{"Content-Type":"application/json"},
                body:JSON.stringify(DataForSend)
            }
        )

        let data = await res.json();

        myMessage.innerText = JSON.stringify(data)

    }

</script>
</body>
```

### কোড ব্যাখ্যা বাংলায়

```jsx
async function SendDataToBackEnd() {
```

- `async` কীওয়ার্ড সহ একটি ফাংশন তৈরি করা হয়েছে, যা অ্যাসিঙ্ক্রোনাস অপারেশন পরিচালনা করতে পারে।

```jsx
    let ProductName = document.getElementById("ProductName").value;
    let ProductCode = document.getElementById("ProductCode").value;
    let Img = document.getElementById("Img").value;
    let UnitPrice = document.getElementById("UnitPrice").value;
    let Qty = document.getElementById("Qty").value;
    let TotalPrice = document.getElementById("TotalPrice").value;
```

- প্রতিটি ইনপুট ফিল্ড থেকে ব্যবহারকারীর ইনপুট নেওয়া হয়েছে এবং ভেরিয়েবল হিসেবে সংরক্ষণ করা হয়েছে।

```jsx
    let DataForSend = {
        ProductName: ProductName,
        ProductCode: ProductCode,
        Img: Img,
        UnitPrice: UnitPrice,
        Qty: Qty,
        TotalPrice: TotalPrice
    }
```

- `DataForSend` নামে একটি অবজেক্ট তৈরি করা হয়েছে যেখানে ইনপুট ডেটা গুলো JSON ফরম্যাটে রাখা হয়েছে।

```jsx
    let myMessage = document.getElementById("myMessage");
    myMessage.innerText = "Sending......";
```

- `myMessage` এলিমেন্টের `innerText` আপডেট করে "Sending......" দেখানো হয়েছে, যা ব্যবহারকারীকে ডেটা পাঠানোর প্রসেস সম্পর্কে জানায়।

```jsx
    let URL = "<http://164.68.107.70:6060/api/v1/CreateProduct>";
```

- সার্ভারের API এন্ডপয়েন্ট `URL` হিসেবে সংরক্ষণ করা হয়েছে যেখানে POST রিকোয়েস্ট পাঠানো হবে।

```jsx
    let res = await fetch(
        URL,
        {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(DataForSend)
        }
    );
```

- `fetch()` মেথড ব্যবহার করে `URL`এ POST রিকোয়েস্ট পাঠানো হয়েছে। `await` ব্যবহারের কারণে সার্ভারের রেসপন্স না আসা পর্যন্ত এই লাইনটি অপেক্ষা করবে।
- `headers` অংশে বলা হয়েছে যে ডেটা `application/json` ফরম্যাটে পাঠানো হবে।
- `body` অংশে `DataForSend` অবজেক্টকে `JSON.stringify()` দিয়ে JSON ফরম্যাটে কনভার্ট করা হয়েছে।

```jsx
    let data = await res.json();
```

- সার্ভারের রেসপন্স JSON ফরম্যাটে কনভার্ট করে `data` ভেরিয়েবলে রাখা হয়েছে।

```jsx
    myMessage.innerText = JSON.stringify(data);
```

- `myMessage` এলিমেন্টে সার্ভারের রেসপন্স স্ট্রিং আকারে দেখানো হয়েছে, যাতে ব্যবহারকারী রেসপন্স ডেটা দেখতে পারে।

### সারসংক্ষেপ:

এই কোডটি একটি HTML ফর্ম তৈরি করে যা ব্যবহারকারীকে প্রোডাক্টের তথ্য ইনপুট করতে দেয়। `SendDataToBackEnd()` ফাংশনটি ক্লিক ইভেন্টে ডাকা হয় এবং ফর্ম ডেটা POST রিকোয়েস্টের মাধ্যমে সার্ভারে পাঠানো হয়।