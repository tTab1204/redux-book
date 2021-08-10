import React from 'react'
import { useHistory } from 'react-router-dom'

function Navbar() {
  const history = useHistory()

  const goLandingPage = () => {
    history.push('/')
  }

  return (
    <button className={styles.button} onClick={goLandingPage}>
      Home
    </button>
  )
}
const styles = {
  button:
    'bg-blue-500 hover:bg-blue-400 mb-8 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded'
}

export default Navbar
