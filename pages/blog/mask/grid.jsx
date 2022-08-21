import { withRouter } from 'next/router';
import React, { useState, useEffect } from 'react';
import { useLazyQuery } from '@apollo/react-hooks';
import Helmet from 'react-helmet';

import withApollo from '~/server/apollo';
import { GET_POSTS } from '~/server/queries';

import ALink from '~/components/features/custom-link';
import Pagination from '~/components/features/pagination';

import PostSeven from '~/components/features/post/post-seven';

import { scrollTopHandler } from '~/utils';

function PostMaskGrid( { router } ) {
    const [ isFirst, setFirst ] = useState( true );
    const query = router.query;
    const currentCategory = router.query.category ? router.query.category : null;

    const showingCount = 8;
    const [ getPosts, { data, loading, error } ] = useLazyQuery( GET_POSTS );
    const [ perPage, setPerPage ] = useState( showingCount );
    const posts = data && data.posts.data;
    const totalPage = data ? parseInt( data.posts.total / perPage ) + ( data.posts.total % perPage ? 1 : 0 ) : 1;
    let page = query.page ? query.page : 1;

    let categories = [ '', 'fashion', 'lifestyle', 'shopping', 'sport', 'summer-sale', 'travel', 'winter-sale' ];

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
                <title>Riode React eCommerce Template | Blog Mask Grid</title>
            </Helmet>

            <h1 className="d-none">Riode React eCommerce Template - Blog Mask Grid</h1>

            <nav className="breadcrumb-nav">
                <div className="container">
                    <ul className="breadcrumb">
                        <li><ALink href="/"><i className="d-icon-home"></i></ALink></li>
                        <li><ALink href="/blog/classic" className="active">Blog</ALink></li>
                        <li>Mask Grid</li>
                    </ul>
                </div>
            </nav>

            <div className="page-content pb-10 mb-10">
                <div className="container">
                    <ul className="nav-filters filter-underline blog-filters justify-content-center">
                        <li><ALink href={ { pathname: `/blog/mask/grid`, query: { category: '' } } } className={ `nav-filter ${ currentCategory === '' || currentCategory === null ? 'active' : '' }` } scroll={ false }>All</ALink><span>18</span></li>
                        <li><ALink href={ { pathname: `/blog/mask/grid`, query: { category: 'fashion' } } } className={ `nav-filter ${ currentCategory === 'fashion' ? 'active' : '' }` } scroll={ false }>Fashion</ALink><span>11</span></li>
                        <li><ALink href={ { pathname: `/blog/mask/grid`, query: { category: 'lifestyle' } } } className={ `nav-filter ${ currentCategory === 'lifestyle' ? 'active' : '' }` } scroll={ false }>Lifestyle</ALink><span>11</span></li>
                        <li><ALink href={ { pathname: `/blog/mask/grid`, query: { category: 'shopping' } } } className={ `nav-filter ${ currentCategory === 'shopping' ? 'active' : '' }` } scroll={ false }>Shopping</ALink><span>2</span></li>
                        <li><ALink href={ { pathname: `/blog/mask/grid`, query: { category: 'sport' } } } className={ `nav-filter ${ currentCategory === 'sport' ? 'active' : '' }` } scroll={ false }>Sport</ALink><span>5</span></li>
                        <li><ALink href={ { pathname: `/blog/mask/grid`, query: { category: 'summer-sale' } } } className={ `nav-filter ${ currentCategory === 'summer-sale' ? 'active' : '' }` } scroll={ false }>Summer Sale</ALink><span>1</span></li>
                        <li><ALink href={ { pathname: `/blog/mask/grid`, query: { category: 'travel' } } } className={ `nav-filter ${ currentCategory === 'travel' ? 'active' : '' }` } scroll={ false }>Travel</ALink><span>4</span></li>
                        <li><ALink href={ { pathname: `/blog/mask/grid`, query: { category: 'winter-sale' } } } className={ `nav-filter ${ currentCategory === 'winter-sale' ? 'active' : '' }` } scroll={ false }>Winter Sale</ALink><span>1</span></li>
                    </ul>

                    <div className="posts grid row grid grid-3cols mb-5">
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
                                            <React.Fragment key={ "post-nine" + index }>
                                                <div className="grid-item">
                                                    <PostSeven post={ post } adClass='' />
                                                </div>
                                            </React.Fragment>
                                        ) ) :
                                        <div className="info-box with-icon"><p className="mt-4">No blogs were found matching your selection.</p></div>
                                    : ''
                        }
                    </div>

                    <Pagination totalPage={ totalPage } />
                </div>
            </div>
        </main>
    )
}

export default withApollo( { ssr: typeof window === 'undefined' } )( withRouter( PostMaskGrid ) );