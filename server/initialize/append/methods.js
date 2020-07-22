module.exports = function appendMethods(parent, ...methods) {

  return [...methods].reduce(append, parent)

  function append(parent, methods) {
    Object
      .keys(methods)
      .forEach(methodName => {
        const descriptor = Object.getOwnPropertyDescriptor(methods, methodName)
        return Object.defineProperty(parent, methodName, descriptor)
      })
    return parent
  }
}
