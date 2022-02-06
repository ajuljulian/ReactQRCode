// Function that generate a random number in a given range.
const randomIntegerInRange = (min, max) =>
  Math.floor(Math.random() * (max - min + 1)) + min;

// The finder pattern (black = 0, white = 1)
const finderPattern = [
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0],
  [0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0],
  [0, 0, 1, 1, 0, 0, 0, 1, 1, 0, 0],
  [0, 0, 1, 1, 0, 0, 0, 1, 1, 0, 0],
  [0, 0, 1, 1, 0, 0, 0, 1, 1, 0, 0],
  [0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0],
  [0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
];

// Create and return a two-dimensional array of random 0/1 values
function createRandomArray(dim) {
  let randomArray = new Array(dim);
  for (let i = 0; i < dim; i++) {
    let row = new Array(dim);
    for (let j = 0; j < dim; j++) {
      row[j] = randomIntegerInRange(0, 1);
    }
    randomArray[i] = row;
  }

  return randomArray;
}

// Helper function for setting a finder
function setFinder(xPos, yPos, qr, finder) {
  const dim = finder[0].length;

  for (let i = 0; i < dim; i++) {
    for (let j = 0; j < dim; j++) {
      qr[xPos + i][yPos + j] = finder[i][j];
    }
  }

  return qr;
}

// Set all three finders
function setFinders(qr, finder) {
  // Finder pattern dimension (should equal 11 based on description)
  const finderPatternDim = finderPattern[0].length;
  const qrDim = qr[0].length;

  // Top left
  qr = setFinder(0, 0, qr, finderPattern);

  // Top right
  qr = setFinder(qrDim - finderPatternDim, 0, qr, finder);

  // Bottom left
  qr = setFinder(0, qrDim - finderPatternDim, qr, finder);

  return qr;
}

function generateQRCode(dim) {
  let qr = createRandomArray(dim);

  qr = setFinders(qr, finderPattern);

  return qr;
}

export default generateQRCode;
