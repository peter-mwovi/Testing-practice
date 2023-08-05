const stringLength = require('./stringlength');

test("Determines a string's length", () => {
  // Arrange
  const inputString = 'Disneyland';

  // Act
  const result = stringLength(inputString);

  // Assert
  expect(result).toBe(10);
});
