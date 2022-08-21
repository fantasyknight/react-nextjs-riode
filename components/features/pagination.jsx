import React from 'react';
import { useRouter } from 'next/router';

import ALink from '~/components/features/custom-link';

function Pagination(props) {
    const { maxShowCounts = 7, totalPage = 1, distance = 2 } = props;

    const router = useRouter();
    const query = router.query;
    const page = query.page ? parseInt(query.page) : 1;
    let indexList = [];
    let min = Math.max(page - distance, 2);
    let max = Math.min(page + distance, totalPage - 1)

    for (let i = min; i <= max; i++) {
        indexList[i - min + 1] = i;
    }
    indexList[0] = 1;
    indexList[max - min + 2] = totalPage;

    return (
        <>
            {totalPage > 1 &&
                <ul className="pagination">
                    <li className={`page-item ${page < 2 ? 'disabled' : ''}`}>
                        <ALink className="page-link page-link-prev" href={page > 1 ? {pathname: router.pathname, query: { ...query, page: page - 1 } } : '#'} scroll={false}>
                            <i className="d-icon-arrow-left"></i>Prev
                        </ALink>
                    </li>

                    {
                        indexList.map((item, index) => (
                            (index === 1 && item > 2) ?
                                <React.Fragment key={`page-${index}`}>
                                    <span className="page-item dots">...</span>
                                    <li className={`page-item ${page === item ? 'active' : ''}`} >
                                        <ALink className="page-link" href={page === item ? '#' : {pathname: router.pathname, query: { ...query, page: item } }} scroll={false}>
                                            {item}{page === item && <span className="sr-only">(current)</span>}
                                        </ALink>
                                    </li>
                                </React.Fragment> :
                                (index === indexList.length - 2 && item + 1 < totalPage) ?
                                    <React.Fragment key={`page-${index}`}>
                                        <li className={`page-item ${page === item ? 'active' : ''}`}>
                                            <ALink className="page-link" href={page === item ? '#' : {pathname: router.pathname, query: { ...query, page: item } }} scroll={false}>
                                                {item}{page === item && <span className="sr-only">(current)</span>}
                                            </ALink>
                                        </li>
                                        <span className="page-item dots">...</span>
                                    </React.Fragment>
                                    :
                                    <li className={`page-item ${page === item ? 'active' : ''}`} key={`page-${index}`}>
                                        <ALink className="page-link" href={page === item ? '#' : {pathname: router.pathname, query: { ...query, page: item } }} scroll={false}>
                                            {item}{page === item && <span className="sr-only">(current)</span>}
                                        </ALink>
                                    </li>

                        ))
                    }

                    <li className={`page-item ${page > totalPage - 1 ? 'disabled' : ''}`}>
                        <ALink className="page-link page-link-next" href={page < totalPage ? {pathname: router.pathname, query: { ...query, page: page + 1 } } : '#'} scroll={false}>
                            Next<i className="d-icon-arrow-right"></i>
                        </ALink>
                    </li>
                </ul>
            }
        </>
    )
}

export default React.memo(Pagination);