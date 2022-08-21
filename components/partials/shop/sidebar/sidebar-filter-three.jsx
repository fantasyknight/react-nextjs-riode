import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

import ALink from '~/components/features/custom-link';

import filterData from '~/utils/data/shop';
import { scrollTopHandler } from '~/utils';

function SidebarFilterThree() {
    const router = useRouter();
    const [ isFirst, setFirst ] = useState( true );
    const query = router.query;
    const prices = [
        { min: '0', max: '50' },
        { min: '50', max: '100' },
        { min: '100', max: '200' },
        { min: '200', max: '' }
    ]

    useEffect( () => {
        window.addEventListener( 'resize', resizeHandler, false );
        document.querySelector( "body" ).addEventListener( "click", onBodyClick );

        return () => {
            window.removeEventListener( 'resize', resizeHandler );
            document.querySelector( "body" ).removeEventListener( "click", onBodyClick );
        }
    }, [] )

    useEffect( () => {
        if ( isFirst ) {
            setFirst( false );
        } else {
            scrollTopHandler();
        }
    }, [ query ] )

    const containsAttrInUrl = ( type, value ) => {
        const currentQueries = query[ type ] ? query[ type ].split( ',' ) : [];
        if ( type === 'min_price' || type === 'max_price' ) {
            return currentQueries && ( ( value === '' && currentQueries.length === 0 ) || currentQueries.includes( value ) )
        } else {
            return currentQueries && currentQueries.includes( value );
        }
    }

    const getUrlForAttrs = ( type, value ) => {
        let currentQueries = query[ type ] ? query[ type ].split( ',' ) : [];
        if ( type === 'min_price' || type === 'max_price' ) {
            currentQueries = currentQueries.length > 0 && currentQueries.includes( value ) ? [] : [ value ]
        } else {
            currentQueries = containsAttrInUrl( type, value ) ? currentQueries.filter( item => item !== value ) : [ ...currentQueries, value ];
        }
        return currentQueries.join( ',' );
    }

    const selectOptionHandler = function ( e ) {
        e.preventDefault();
        e.currentTarget.closest( '.toolbox-item.select-menu' ).classList.toggle( 'opened' );
    }

    function onBodyClick( e ) {
        ( e.target.closest( '.select-menu.opened' ) || ( document.querySelector( '.select-menu.opened' ) ) && document.querySelector( '.select-menu.opened' ).classList.remove( 'opened' ) );
    }

    const hideSidebar = () => {
        document.querySelector( 'body' ).classList.remove( "sidebar-active" );
    }

    const resizeHandler = () => {
        document.querySelector( 'body' ).classList.remove( "sidebar-active" );
    }

    const selectFilterHandler = ( e ) => {
        setTimeout( () => {
            if ( document.querySelector( '.select-items' ).children.length > 1 ) {
                document.querySelector( '.select-items' ).setAttribute( 'style', 'visibility: visible; opacity: 1; height: auto; margin-top: 2px; margin-bottom: 1.8rem' )
            } else {
                document.querySelector( '.select-items' ).setAttribute( 'style', '' )
            }
        }, 100 )
    }

    return (
        <aside className="sidebar shop-sidebar sidebar-fixed">
            <div className="sidebar-overlay" onClick={ hideSidebar }></div>
            <ALink className="sidebar-close" href="#" onClick={ hideSidebar }><i className="d-icon-times"></i></ALink>

            <div className="sidebar-content toolbox-left">
                <div className="toolbox-item select-menu">
                    <a className="select-menu-toggle" href="#" onClick={ selectOptionHandler }>Select Size</a>

                    <ul className="filter-items">
                        {
                            filterData.sizes.map( ( item, index ) =>
                                <li
                                    className={ containsAttrInUrl( 'sizes', item.slug ) ? 'active' : '' }
                                    key={ item + ' - ' + index }
                                    onClick={ selectFilterHandler }
                                >
                                    <ALink href={ { pathname: router.pathname, query: { ...query, page: 1, sizes: getUrlForAttrs( 'sizes', item.slug ), type: router.query.type ? router.query.type : null } } } scroll={ false }>{ item.name }
                                    </ALink>
                                </li>
                            )
                        }
                    </ul>
                </div>

                <div className="toolbox-item select-menu">
                    <a className="select-menu-toggle" href="#" onClick={ selectOptionHandler }>Select Color</a>

                    <ul className="filter-items">
                        {
                            filterData.colors.map( ( item, index ) =>
                                <li
                                    className={ containsAttrInUrl( 'colors', item.slug ) ? 'active' : '' }
                                    key={ item + ' - ' + index }
                                    onClick={ selectFilterHandler }
                                >
                                    <ALink href={ { pathname: router.pathname, query: { ...query, page: 1, colors: getUrlForAttrs( 'colors', item.slug ), type: router.query.type ? router.query.type : null } } } scroll={ false }>{ item.name }
                                    </ALink>
                                </li>
                            )
                        }
                    </ul>
                </div>

                <div className="toolbox-item select-menu price-with-count">
                    <a className="select-menu-toggle" href="#" onClick={ selectOptionHandler }>Select Price</a>

                    <ul className="filter-items filter-price">
                        {
                            prices.map( ( price, index ) =>
                                <li
                                    className={ containsAttrInUrl( 'min_price', price.min ) && containsAttrInUrl( 'max_price', price.max ) ? 'active' : '' }
                                    key={ "price-filter-" + index }
                                    onClick={ selectFilterHandler }
                                >
                                    <ALink href={ { pathname: router.pathname, query: { ...query, page: 1, min_price: getUrlForAttrs( 'min_price', price.min ), max_price: getUrlForAttrs( 'max_price', price.max ), type: router.query.type ? router.query.type : null } } } scroll={ false }>
                                        {
                                            price.min === '' && price.max === '' ? 'All'
                                                :
                                                price.max === '' ? `$${ price.min }.00 +`
                                                    :
                                                    `$${ price.min }.00 - $${ price.max }.00`

                                        }
                                    </ALink>
                                </li>
                            )
                        }
                    </ul>
                </div>
            </div>
        </aside >
    )
}

export default ( SidebarFilterThree );