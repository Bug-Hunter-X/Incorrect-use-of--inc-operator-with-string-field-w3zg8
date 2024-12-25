```javascript
// Incorrect use of $inc operator for updating a field with a string value
db.collection.updateOne({ _id: 1 }, { $inc: { field: '1' } });
```