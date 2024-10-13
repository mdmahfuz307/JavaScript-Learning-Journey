// Setting a cookie with the name 'username' and value 'John'
// The cookie will expire on Mon, 9 Sept 2024 at 8:49:00 GMT
document.cookie = "username=John; expires=Mon, 9 Sept 2024 8:49:00 GMT";


// Retrieving and logging all cookies stored in the current document
// All cookies are returned as a single string, separated by semicolons if there are multiple cookies
console.log(document.cookie);