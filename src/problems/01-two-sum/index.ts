function twoSum(nums: number[], target: number): number[] {
  for (let i = 0; i < nums.length; i++) {
    const element = nums[i]
    const targetForElement = target - element
    // Search the target for the current element
    let indexOfTargetForElement = nums.indexOf(targetForElement)
    // If the target for the current element is the current element, search for the target for the current element starting at the next index
    if (indexOfTargetForElement === i) {
      indexOfTargetForElement = nums.indexOf(targetForElement, i + 1)
    }

    // If the target for the current element is found, return the indices
    if (indexOfTargetForElement !== -1 && indexOfTargetForElement !== i) {
      return [i, indexOfTargetForElement]
    }
  }

  return []
}
