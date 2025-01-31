function foo(a, b) {
  if (a === null || b === null) {
    // Handle null values appropriately.  Different approaches are possible:
    // 1. Return null: 
    // return null;
    // 2. Throw an error: 
    // throw new Error('Null values not allowed');
    // 3. Use default values (only if appropriate for your use case):
    a = a === null ? 0 : a;
    b = b === null ? 0 : b; 
  }
  return a + b;
} 