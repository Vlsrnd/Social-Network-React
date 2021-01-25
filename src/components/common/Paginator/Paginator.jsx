import React, { useState } from 'react';
import styles from './Paginator.module.css';

const Paginator = ({totalItemsCount, pageSize, currentPage, onPageChanged, portionSize = 10}) => {
  let pagesCount = Math.ceil(totalItemsCount / pageSize);
  let pages = [];
  for (let i = 1; i <= pagesCount; i++){
    pages.push(i);
  };

  let portionCount = Math.ceil(pagesCount / portionSize);
  let [portionNumber, setPortionNumber] = useState(1);
  let leftSidePortionNumber = (portionNumber - 1) * portionSize + 1;
  let rightSidePortionNumber = portionNumber * portionSize;

  return (
    <div className={styles.paginator}>
      <button onClick={() => setPortionNumber(portionNumber - 1)} disabled={portionNumber <= 1}>prev</button>
      {
        pages
          .filter(p => p >= leftSidePortionNumber && p <= rightSidePortionNumber)
          .map(p => {
            return <span key={p} className={currentPage === p && styles.selectedPage} 
              onClick={() => { onPageChanged(p) }}>{p}</span>
            }
        )
      }
      <button onClick={() => setPortionNumber(portionNumber + 1)} disabled={portionNumber >= portionCount}>next</button>
    </div>
  )
}

export default Paginator;