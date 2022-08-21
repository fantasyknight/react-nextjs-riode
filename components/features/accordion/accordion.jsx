import React from 'react';

function Accordion( props ) {
    const { adClass } = props;

    function onHandleClick( e ) {
        if ( e.target.classList.contains( "toggle-button" ) || e.target.querySelector( ".toggle-button" ) ) {
            if ( e.target.classList.contains( "collapsed" ) || ( e.target.querySelector( ".toggle-button" ) && e.target.querySelector( ".toggle-button" ).classList.contains( "collapsed" ) ) || e.target.classList.contains( "collapsing" ) || ( e.target.querySelector( ".toggle-button" ) && e.target.querySelector( ".toggle-button" ).classList.contains( "collapsing" ) ) ) {
                if ( e.currentTarget.querySelector( ".toggle-button.expanded" ) ) {
                    e.currentTarget.querySelector( ".toggle-button.expanded" ).click();
                }

                if ( e.currentTarget.querySelector( ".toggle-button.expanding" ) ) {
                    e.currentTarget.querySelector( ".toggle-button.expanding" ).click();
                }
            }
        }
    }

    return (
        <div className={ `accordion ${ adClass }` } onClick={ onHandleClick }>
            { props.children }
        </div>
    )
}

export default Accordion;