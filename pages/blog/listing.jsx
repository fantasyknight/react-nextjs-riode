import React, { useEffect, useState } from 'react';
import Helmet from 'react-helmet';
import { useLazyQuery } from '@apollo/react-hooks';
import { useRouter } from 'next/router';

// Import Apollo Server and Query
import withApollo from '~/server/apollo';
import { GET_POSTS } from '~/server/queries';

import ALink from '~/components/features/custom-link';
import Pagination from '~/components/features/pagination';

import PostThree from '~/components/features/post/post-three';
import BlogSidebar from '~/components/partials/post/blog-sidebar';

import { scrollTopHandler } from '~/utils';

function Listing() {
    const router = useRouter();
    const [ isFirst, setFirst ] = useState( true );
    const query = router.query;
    const showingCount = 8;
    const [ getPosts, { data, loading, error } ] = useLazyQuery( GET_POSTS );
    const perPage = showingCount;
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

        setTimeout( () => {
            if ( isFirst ) {
                setFirst( false );
            } else {
                scrollTopHandler();
            }
        }, 100 );
    }, [ query ] )

    return (
        <main className="main skeleton-body">
            <Helmet>
                <title>Riode React eCommerce Template | Blog Listing</title>
            </Helmet>

            <h1 className="d-none">Riode React eCommerce Template - Blog Listing</h1>

            <nav className="breadcrumb-nav">
                <div className="container">
                    <ul className="breadcrumb">
                        <li><ALink href="/"><i className="d-icon-home"></i></ALink></li>
                        <li><ALink href="#" className="active">Blog</ALink></li>
                        <li>Listing</li>
                    </ul>
                </div>
            </nav>

            <div className="page-content with-sidebar">
                <div className="container">
                    <div className="row gutter-lg">
                        <div className="col-lg-9">
                            <div className="posts">
                                {
                                    loading ?
                                        new Array( parseInt( perPage ) ).fill( 1 ).map( ( item, index ) => (
                                            <div key={ "Skeleton:" + index }>
                                                <div className="skel-post-list mb-4"></div>
                                            </div>
                                        ) ) :
                                        posts ?
                                            posts.length ?
                                                posts.slice( 0, posts.length ).map( ( post, index ) => (
                                                    <React.Fragment key={ "post-one" + index }>
                                                        <PostThree post={ post } />
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
            </div >
        </main >
    )
}

export default withApollo( { ssr: typeof window === "undefined" } )( Listing );