import { useQuery } from "@apollo/react-hooks";
import { useRouter } from 'next/router';
import StickyBox from 'react-sticky-box';

import withApollo from '~/server/apollo';
import { GET_POST_SIDEBAR_DATA } from '~/server/queries';

import ALink from '~/components/features/custom-link';
import Card from '~/components/features/accordion/card';

import PostTwo from '~/components/features/post/post-two';

function BlogSidebar() {
    const { data, loading, error } = useQuery( GET_POST_SIDEBAR_DATA );
    const categories = data && data.postSidebarData.categories;
    const recent = data && data.postSidebarData.recent;
    const router = useRouter();
    const query = router.query;
    const toggleSidebarHandler = ( e ) => {
        document.querySelector( 'body' ).classList.toggle( 'right-sidebar-active' );
    }

    const hideSidebarhandler = ( e ) => {
        document.querySelector( 'body' ).classList.remove( 'right-sidebar-active' );
    }

    return (
        <div className="col-lg-3 right-sidebar sidebar-fixed sticky-sidebar-wrapper">
            <div className="sidebar-overlay" onClick={ hideSidebarhandler }>
                <ALink className="sidebar-close" href="#">
                    <i className="close-icon"></i>
                </ALink>
            </div>

            <div className="sidebar-toggle" onClick={ toggleSidebarHandler }>
                <i className="fas fa-chevron-left"></i>
            </div>

            <StickyBox offsetTop={ 88 } className="blog-sidebar-wrapper">
                <div className="sidebar-content">
                    {
                        !loading && recent ?
                            <>
                                <div className="widget widget-search border-no mb-2">
                                    <form action="#" className="input-wrapper input-wrapper-inline btn-absolute">
                                        <input type="text" className="form-control" name="search" autoComplete="off"
                                            placeholder="Search in Blog" required />
                                        <button className="btn btn-search btn-link" type="submit">
                                            <i className="d-icon-search"></i>
                                        </button>
                                    </form>
                                </div>

                                <div className="widget widget-collapsible border-no">
                                    <Card
                                        title="<h3 class='widget-title border-no'>Blog Categories<span class='toggle-btn p-0 parse-content'></span></h3>"
                                        type="parse"
                                        expanded={ true }
                                    >
                                        <ul className="widget-body filter-items search-ul">
                                            <li className={ `${ query.category === 'fashion' ? 'active' : '' }` }><ALink href={ { pathname: '/blog/classic', query: { category: 'fashion' } } } scroll={ false }>Fashion</ALink></li>
                                            <li className={ `${ query.category === 'lifestyle' ? 'active' : '' }` }><ALink href={ { pathname: '/blog/classic', query: { category: 'lifestyle' } } } scroll={ false }>Lifestyle</ALink></li>
                                            <li className={ `${ query.category === 'shopping' ? 'active' : '' }` }><ALink href={ { pathname: '/blog/classic', query: { category: 'shopping' } } } scroll={ false }>Shopping</ALink></li>
                                            <li className={ `${ query.category === 'sport' ? 'active' : '' }` }><ALink href={ { pathname: '/blog/classic', query: { category: 'sport' } } } scroll={ false }>Sport</ALink></li>
                                            <li className={ `${ query.category === 'travel' ? 'active' : '' }` }><ALink href={ { pathname: '/blog/classic', query: { category: 'travel' } } } scroll={ false }>Travel</ALink></li>
                                        </ul>
                                    </Card>
                                </div>

                                <div className="widget widget-collapsible">
                                    <Card
                                        title="<h3 class='widget-title'>Popular Posts<span class='toggle-btn p-0 parse-content'></span></h3>"
                                        type="parse"
                                        expanded={ true }
                                    >
                                        <ul className="widget-body">
                                            {
                                                recent.slice( 0, 3 ).map( ( post, index ) => (
                                                    <div className="post-col" key={ "Small Post " + index }>
                                                        <PostTwo post={ post } />
                                                    </div>
                                                ) )
                                            }
                                        </ul>
                                    </Card>
                                </div>

                                <div className="widget widget-collapsible">
                                    <Card
                                        title="<h3 class='widget-title'>About us<span class='toggle-btn p-0 parse-content'></span></h3>"
                                        type="parse"
                                        expanded={ true }
                                    >
                                        <ul className="widget-body">
                                            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt.</p>
                                        </ul>
                                    </Card>
                                </div>

                                <div className="widget widget-collapsible widget-posts">
                                    <Card
                                        title="<h3 class='widget-title'>Tag Cloud<span class='toggle-btn p-0 parse-content'></span></h3>"
                                        type="parse"
                                        expanded={ true }
                                    >
                                        <ul className="widget-body">
                                            <ALink href="#" className="tag">Bag</ALink>
                                            <ALink href="#" className="tag">Classic</ALink>
                                            <ALink href="#" className="tag">Converse</ALink>
                                            <ALink href="#" className="tag">Leather</ALink>
                                            <ALink href="#" className="tag">Fit</ALink>
                                            <ALink href="#" className="tag">Green</ALink>
                                            <ALink href="#" className="tag">Man</ALink>
                                            <ALink href="#" className="tag">Jeans</ALink>
                                            <ALink href="#" className="tag">Women</ALink>
                                        </ul>
                                    </Card>
                                </div>
                            </> : <div className="widget-2"></div>
                    }
                </div>
            </StickyBox>
        </div>
    );
}

export default withApollo( { ssr: typeof window === "undefined" } )( BlogSidebar );