The solution involved changing the data structure to use string keys instead of dot notation.  Here's the corrected code:

```javascript
// Incorrect data structure using dot notation
const incorrectData = {
  "user": {
    "name": "John Doe",
    "age": 30
  }
};

// Corrected data structure using string keys
const correctData = {
  "user": {
    "name": "John Doe",
    "age": 30
  }
};

db.collection('users').doc('123').set(correctData)
.then(() => {
  console.log('Data written with string keys');
}).catch((error) => {
  console.error('Error writing document: ', error);
});
```

By using string keys instead of nested objects with dot notation, the data will correctly write to Firestore.