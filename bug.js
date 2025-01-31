function foo(a, b) {
  if (a === null || b === null) {
    return 0; // This line is problematic
  }
  return a + b; 
}