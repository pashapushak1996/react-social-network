import React, {useState} from "react";
import classes from './Paginator.module.css';

export const Paginator = ({totalUsersCount, pageSize, currentPage, onPageChanged, portionSize = 10}) => {

    const pagesCount = Math.ceil(totalUsersCount / pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }
    const portionCount = Math.ceil(pagesCount / portionSize);
    const [portionNumber, setPortionNumber] = useState(1);
    const leftPortionNumber = (portionNumber - 1) * portionSize + 1;
    const rightPortionNumber = portionNumber * portionSize;

    return (
        <div>
            {portionNumber > 1 && <button onClick={() => setPortionNumber(portionNumber - 1)}>Prev</button>}
            {pages
                .filter(p => p >= leftPortionNumber && p <= rightPortionNumber)
                .map((page) => <span key={page}
                                     className={currentPage === page ? `${classes.selectedPage} ${classes.page}` : classes.page}
                                     onClick={(e) => {
                                         onPageChanged(page)
                                     }}> {page}</span>
                )}
            {portionCount > portionNumber && <button onClick={() => setPortionNumber(portionNumber + 1)}>Next</button>}
        </div>
    );
}





