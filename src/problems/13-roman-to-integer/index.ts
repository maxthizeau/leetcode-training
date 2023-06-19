function romanToInt(s: string): number {
  // 1) Create a map of roman numerals to integers
  const romanToIntMap = new Map<string, number>([
    ["I", 1],
    ["V", 5],
    ["X", 10],
    ["L", 50],
    ["C", 100],
    ["D", 500],
    ["M", 1000],
  ])

  // 2) Create a variable to hold the total
  let total = 0

  // 3) Loop through the string
  for (let i = 0; i < s.length; i++) {
    const currentRomanNumeral = s[i]
    const currentRomanNumeralValue = romanToIntMap.get(currentRomanNumeral)
    // 3a) If the current roman numeral is not in the map, throw an error
    if (currentRomanNumeralValue === undefined) {
      throw new Error("Invalid roman numeral")
    }

    const nextRomanNumeral = s[i + 1]
    const nextRomanNumeralValue = romanToIntMap.get(nextRomanNumeral)
    // If there is no next roman numeral, add the current roman numeral to the total and continue
    // Because there is no next roman numeral, we can't compare the current roman numeral to the next roman numeral
    if (!nextRomanNumeral) {
      total += currentRomanNumeralValue
      continue
    }
    if (nextRomanNumeralValue === undefined) {
      throw new Error("Invalid roman numeral")
    }

    // 4) If the current roman numeral is less than the next roman numeral, subtract it from the total
    if (currentRomanNumeralValue < nextRomanNumeralValue) {
      total -= currentRomanNumeralValue
    } else {
      total += currentRomanNumeralValue
    }
  }

  // 6) Return the total
  return total
}

romanToInt("III") // 3
romanToInt("IV") // 4
romanToInt("IX") // 9
romanToInt("LVIII") // 58
romanToInt("MCMXCIV") // 1994
romanToInt("MMMCMXCIX") // 3999
romanToInt("MMMCMXCIXI") // Error
