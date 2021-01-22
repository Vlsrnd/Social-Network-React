export const updateObjectInArray = (array, objId, objIdPropName, newObjProps) => {
  return array.map(object => {
    if (object[objIdPropName] === objId) return {...object, ...newObjProps};
    return object;
  })
};