# UI Integration Tests

1. Do the number buttons update the display of the running total?
   ui_tests_01.png, ui_tests_02.png, ui_tests_02a.png
2. Do the arithmetical operations update the display with the result of the operation?
    ui_tests_03.png (plus and equals), ui_tests_03a.png (subtract and equals)
    ui_tests_03b.png (multiply and equals), ui_tests_03c.png (divide and equals)
3. Can multiple operations be chained together?
    ui_tests_04.png (plus, subtract, equals), ui_tests_04a.png (multiply, divide, equals)
4. Is the output as expected for a range of numbers (for example, positive, negative, decimals and very large numbers)?
    ui_tests_05.png (displays positive decimals), ui_tests_05a.png (displays negative numbers),
    ui_tests_05b.png (scientific notation),
5. If a number is divided by zero, is the output 'Not a number'? (You will need to modify the Calculator model to meet this requirement).
    ui_tests_06.png (Failing 'Not A Number' test), ui_tests_06a.png (code added),
    ui_tests_06b.png (Passing test)
