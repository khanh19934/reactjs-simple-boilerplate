// @flow
const insertIf = (condition: boolean, ...elements: any[]) =>
  condition ? elements : []

export {insertIf}