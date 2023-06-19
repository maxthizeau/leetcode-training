import { isEqual } from "lodash"

export function assert(value: boolean, message: string) {
  if (!value) {
    throw Error(message)
  }
}

export function assertEqual<T>(actual: T, expected: T, message: string) {
  if (actual !== expected) {
    throw Error(message)
  }
}

export function assertNotEqual<T>(actual: T, expected: T, message: string) {
  if (actual === expected) {
    throw Error(message)
  }
}

export function assertDeepEqual<T>(actual: T, expected: T, message: string) {
  if (!isEqual(actual, expected)) {
    throw Error(message)
  }
}
