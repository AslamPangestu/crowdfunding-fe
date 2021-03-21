// https://stackoverflow.com/questions/679915/how-do-i-test-for-an-empty-javascript-object
export const isObjectEmpty = (val) =>
  val && Object.keys(val).length === 0 && val.constructor === Object
