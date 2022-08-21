import { useRouter } from 'next/router';
import React, { useState, useEffect } from 'react';
import { useLazyQuery } from '@apollo/react-hooks';
import Helmet from 'react-helmet';

import withApollo from '~/server/apollo';
import { GET_POSTS } from '~/server/queries';

import ALink from '~/components/features/custom-link';
import Pagination from '~/components/features/pagination';
import PostNine from '~/components/features/post/post-nine';
import BlogSidebar from '~/components/partials/post/blog-sidebar';

import { scrollTopHandler } from '~/utils';

function PostGridSidebar () {
    const router = useRouter();
    const [ isFirst, setFirst ] = useState( true );
    const query = router.query;
    const showingCount = 8;
    const [ getPosts, { data, loading, error } ] = useLazyQuery( GET_POSTS );
    const [ perPage, setPerPage ] = useState( showingCount );
    const posts = data && data.posts.data;
    const totalPage = data ? parseInt( data.posts.total / perPage ) + ( data.posts.total % perPage ? 1 : 0 ) : 1;
    let page = query.page ? query.page : 1;

    useEffect( () => {
        getPosts( {
            variables: {
                category: query.category,
                from: perPage * ( page - 1 ),
                to: perPage * page
            }
        } );

        if ( isFirst ) {
            setFirst( false );
        } else {
            scrollTopHandler();
        }
    }, [ query ] )

    return (
        <main className="main skeleton-body">
            <Helmet>
                <title>Riode React eCommerce Template | Blog Grid Sidebar</title>
            </Helmet>

            <h1 className="d-none">Riode React eCommerce Template - Blog Grid Sidebar</h1>

            <nav className="breadcrumb-nav">
                <div className="container">
                    <ul className="breadcrumb">
                        <li><ALink href="/"><i className="d-icon-home"></i></ALink></li>
                        <li><ALink href="/blog/classic" className="active">Blog</ALink></li>
                        <li>Grid With Sidebar</li>
                    </ul>
                </div>
            </nav>

            <div className="page-content with-sidebar">
                <div className="container">
                    <div className="row gutter-lg">
                        <div className="col-lg-9">
                            <div className="posts grid row grid grid-2cols">
                                {
                                    loading ?
                                        new Array( parseInt( perPage ) ).fill( 1 ).map( ( item, index ) => (
                                            <div key={ "Skeleton:" + index }>
                                                <div className="skel-post"></div>
                                            </div>
                                        ) ) :
                                        posts ?
                                            posts.length ?
                                                posts.slice( 0, posts.length ).map( ( post, index ) => (
                                                    <React.Fragment key={ "post-one" + index }>
                                                        <div className="grid-item">
                                                            <PostNine post={ post } />
                                                        </div>
                                                    </React.Fragment>
                                                ) ) :
                                                <div className="info-box with-icon"><p className="mt-4">No blogs were found matching your selection.</p></div>
                                            : ''
                                }
                            </div>

                            <Pagination totalPage={ totalPage } />
                        </div>

                        <BlogSidebar />
                    </div>
                </div>
            </div>
        </main>
    )
}

export default withApollo( { ssr: typeof window === 'undefined' } )( PostGridSidebar );