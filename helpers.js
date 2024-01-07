const roundTo = (decimals, num) => {
  const a = 10 ** decimals
  return Math.round(num * a) / a
}

function getRowRelativeWidths({ rowAbsoluteWidths, gapW }) {
  const rowsPercentages = rowAbsoluteWidths.map((row) => {
    // Calculate total width of the row
    let totalKeys = 0
    let totalWidth = 0
    for (const key in row) {
      const [keyNumber, keyWidth] = row[key]
      totalWidth += keyNumber * keyWidth
      totalKeys += keyNumber
    }
    const gapNumber = totalKeys - 1
    totalWidth += gapNumber * gapW // adding width of the gaps
    row._gaps = [gapNumber, gapW]

    // Calculate percentage for each type of key
    const rowPercentages = {}
    for (const key in row) {
      const [keyNumber, keyWidth] = row[key]
      const totalKeyPercentage = ((keyNumber * keyWidth) / totalWidth) * 100
      const singleKeyPercentage = totalKeyPercentage / keyNumber
      rowPercentages[key] = [keyNumber, roundTo(1, singleKeyPercentage)]
    }

    // Calculate missing percentage
    let accumulatedPercentage = 0
    for (const key in row) {
      const percentage = rowPercentages[key][1]
      const keyNumber = row[key][0]
      accumulatedPercentage += keyNumber * percentage
    }
    rowPercentages._missing = [1, roundTo(1, 100 - accumulatedPercentage)]

    return rowPercentages
  })
  return rowsPercentages
}

// How to use

// 1. Set the width in pixels of each key in each row. Put them in an array like rowAbsoluteWidths
var gapW = 6
var keyW = 60
var rowAbsoluteWidths = [
  {
    functionKey: [16, 48],
  },
  {
    regular: [13, keyW],
    ordinal: [1, 40],
    backspace: [1, 90],
  },
  // Other rows
]
getRowRelativeWidths({ rowAbsoluteWidths, gapW })

// This will return something like this. Every row is an object, with the keys types as keys. The values are the number of keys of that type and the percentage of the total width that they occupy. There are two extra keys: _gaps (the number of gaps and their width) and _missing (the space that is lacking to arrive to 100%).

const rowRelativeWidths = [
  ({
    functionKey: [16, 5.6],
    _gaps: [15, 0.7],
    _missing: [1, -0.1],
  },
  {
    regular: [13, 6],
    ordinal: [1, 4],
    backspace: [1, 9.1],
    _gaps: [14, 0.6],
    _missing: [1, 0.5],
  }),
  {
    // Other rows
  },
]

// 2. Manually adjust all the percentages of the regular keys so that they are the same for all the rows (in this case, 6). The same with the gaps (in this case, 0.6).

// 3. Now, manually adjust the percentages of the keys by decimals so that they get to 100%. You can use this function to see in the console the remaining decimals for each row.

rows.forEach((row) => {
  let widthPercentage = 0
  for (const key in row) {
    const [keyNumber, keyPercentage] = row[key]
    widthPercentage += keyNumber * keyPercentage
  }
  const remaining = roundTo(1, 100 - widthPercentage)
  console.log(remaining)
})

// 4. Now, you can use the percentages to write the CSS:
const css = `
    .regular {
        width: 6%;
    }
    
    .function {
        width: 5.1%;
    }
    
    .ordinal {
        width: 4.2%;
    }
    ... other key types`

// If some type could not be rounded to one decimal, you can always do something like this: calc(91% / 16)

///
var keyPercentages = [
  {
    functionKey: [16, 5.7], // This sums 100.2, instead of 100. To make it exact: calc(91/16) or 5.6875
    _gaps: [15, 0.6],
  },
  {
    regular: [13, 6],
    ordinal: [1, 4.2],
    backspace: [1, 9.4],
    _gaps: [14, 0.6],
  },
  {
    regular: [13, 6],
    tab: [1, 7.3],
    upperEnter: [1, 6.3],
    _gaps: [14, 0.6],
  },
  {
    regular: [14, 6],
    bloqMayus: [1, 7.6],
    _gaps: [14, 0.6],
  },
  {
    regular: [13, 6],
    rightShift: [1, 14.2],
    _gaps: [13, 0.6],
  },
  {
    regular: [9, 6],
    spacebar: [1, 32.4],
    arrows: [1, 7.6],
    _gaps: [10, 0.6],
  },
]
