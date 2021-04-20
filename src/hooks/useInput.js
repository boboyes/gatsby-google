import { useState } from 'react'

function useInput (initialState) {
  const [value, setValue] = useState(initialState)
  return {
    input: {
      value,
      onChange (e) {
        setValue(e.target.value)
      }
    },
    setValue
  }
}
export default useInput