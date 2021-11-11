export const getNumberOfChars(name) {
  return name.length
}

// /** @param {string} name */
export const getFirstChar(name) {
  return name[0]
}

// /** @param {string} name */
export const getLastChar(name) {
  return name[ name.length - 1]
}

// /** @param {string} name */
export const getLower(name) {
  return name.toLowerCase()
}

// /** @param {string} name */
export const getUpper(name) {
  return name.toUpperCase()
}

// /** @param {string} name */
export const getCapitalized(name) {
  return name[0].toUpperCase() + name.substring(1).toLowerCase()
}
