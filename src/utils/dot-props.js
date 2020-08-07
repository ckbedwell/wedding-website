import cloneDeep from 'lodash/cloneDeep'
import get from 'lodash/get'
import set from 'lodash/set'
import unset from 'lodash/unset'

export const dotProps = {
  // functional way to get, set and remove properties on an object
  get(target, dotPath) {
    const result = get(target, dotPath)
    if(typeof result === 'undefined') {
      return ''
    }
    return result
  },

  set(target, dotPath, value) {
    const clone = cloneDeep(target)
    return set(clone, dotPath, value)
  },

  delete(target, dotPath) {
    const clone = cloneDeep(target)

    // check if is in an array
    if (dotPath.substr(-1) === ']') {
      const parentArray = get(clone, dotPath.slice(0, -3))
      const index = dotPath.slice(-2, -1)
      parentArray.splice(index, 1)
    } else {
      // TODO: CHECK IF THIS REMOVES THE KEY?
      unset(clone, dotPath)
    }

    return clone
  },
}