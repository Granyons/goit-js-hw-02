'use strict';
function getElementWidth(content, padding, border) {
  const numContent = Number.parseFloat(content);
  const numPadding = Number.parseFloat(padding);
  const numBorder = Number.parseFloat(border);

  return numContent + 2 * numPadding + 2 * numBorder;
}

console.log(getElementWidth('50px', '8px', '4px')); // 74
console.log(getElementWidth('60px', '12px', '8.5px')); // 101
console.log(getElementWidth('200px', '0px', '0px')); // 200
