# Unexpected 0 Return with Null Arguments in foo Function

This repository demonstrates a common JavaScript bug related to unexpected behavior when null values are passed as arguments to a function.

The `foo` function is supposed to add two numbers. However, when either `a` or `b` is null, it currently returns 0. This behavior might not be what is expected in all cases.  A more robust solution is needed to handle null values correctly.

## Bug

The bug lies in the handling of null values within the `foo` function.  The current implementation simply returns 0, which might lead to unexpected results. This is because the function doesn't distinguish between a 0 input and a null input. Therefore, the solution should handle both cases differently, depending on the desired behavior.

## Solution

The solution should account for null arguments, offering options like returning null, throwing an error, or using a default value such as 0 only when specifically needed and documented.