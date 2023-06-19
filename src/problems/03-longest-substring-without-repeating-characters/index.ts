export function lengthOfLongestSubstring(s: string): number {
  let longestSubstringLength = 0

  for (let i = 0; i < s.length; i++) {
    let currentIndex = i
    const characterToIndexMap = new Map<string, number>()

    if (longestSubstringLength >= s.length - i) {
      break
    }

    while (!characterToIndexMap.has(s[currentIndex]) && currentIndex < s.length) {
      characterToIndexMap.set(s[currentIndex], currentIndex)
      currentIndex++
    }

    longestSubstringLength = Math.max(longestSubstringLength, characterToIndexMap.size)
  }
  return longestSubstringLength
}

/*
Example 1:

Input: s = "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3.
Example 2:

Input: s = "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.
Example 3:

Input: s = "pwwkew"
Output: 3
Explanation: The answer is "wke", with the length of 3.
Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.
*/
