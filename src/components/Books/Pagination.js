import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { selectBooks, fetchBooks, Status } from '../../store/books'
import { useLocation } from 'react-router-dom'

function Pagination() {
  const dispatch = useDispatch()
  const location = useLocation()
  const { status, startIndex, error } = useSelector(selectBooks)
  const isLoading = status === Status.Loading
  const isArrayEmpty = error !== null

  return (
    <button
      className={styles.button}
      disabled={startIndex === 0 || isLoading}
      onClick={() => {
        if (isLoading) {
          return
        }
        dispatch(fetchBooks(location.search, startIndex))
      }}
    >
      {!isArrayEmpty && (isLoading ? '로딩중...' : '더보기')}
      {isArrayEmpty && <h2>검색된 책이 없습니다.</h2>}
    </button>
  )
}

const styles = {
  button:
    'bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded'
}

export default Pagination
