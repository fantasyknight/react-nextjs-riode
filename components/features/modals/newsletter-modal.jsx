import { useState, useEffect } from "react";
import Modal from "react-modal";
import Cookie from "js-cookie";

const modalStyles = {
    content: {
        position: "relative"
    },
    overlay: {
        background: 'rgba(0,0,0,.4)',
        overflowX: 'hidden',
        overflowY: 'auto',
        display: 'flex'
    }
};

Modal.setAppElement( "#__next" );

export default function NewsletterModal() {
    const [ modalState, setModalState ] = useState( false );
    const [ noMore, setNoMore ] = useState( false );

    useEffect( () => {
        let timer;
        Cookie.get( "hideNewsletter" ) || ( timer = setTimeout( () => {
            setModalState( true );
        }, 5000 ) );

        return () => {
            timer && clearTimeout( timer );
        };
    }, [] );

    function closeModal() {
        document.querySelector( ".ReactModal__Overlay.newsletter-modal-overlay" ).classList.add( 'removed' );
        document.querySelector( ".newsletter-popup.ReactModal__Content" ).classList.remove( "ReactModal__Content--after-open" );

        setTimeout( () => {
            setModalState( false );

            noMore && Cookie.set( "hideNewsletter", 'true', { expires: 7, path: window.location.pathname } );
        }, 250 );
    }

    function handleChange( event ) {
        setNoMore( event.target.checked );
    }

    return (
        <Modal
            isOpen={ modalState }
            style={ modalStyles }
            onRequestClose={ closeModal }
            shouldReturnFocusAfterClose={ false }
            overlayClassName="newsletter-modal-overlay"
            className="newsletter-popup bg-img"
        >
            <div className="newsletter-popup" id="newsletter-popup" style={ { backgroundImage: "url(images/newsletter-popup.jpg)" } }>
                <div className="newsletter-content">
                    <h4 className="text-uppercase text-dark">Up to <span className="text-primary">20% Off</span></h4>
                    <h2 className="font-weight-semi-bold">Sign up to <span>RIODE</span></h2>
                    <p className="text-grey">Subscribe to the Riode eCommerce newsletter to receive timely updates from your favorite products.</p>
                    <form action="#" method="get" className="input-wrapper input-wrapper-inline input-wrapper-round">
                        <input type="email" className="form-control email" name="email" id="email2" placeholder="Email address here..." required aria-label="newsletter"/>
                        <button className="btn btn-dark" type="submit">SUBMIT</button>
                    </form>
                    <div className="form-checkbox justify-content-center">
                        <input type="checkbox" value={ noMore } className="custom-checkbox" id="hide-newsletter-popup" onChange={ handleChange } name="hide-newsletter-popup" required />
                        <label htmlFor="hide-newsletter-popup">Don't show this popup again</label>
                    </div>
                </div>
                <button title="Close (Esc)" type="button" className="mfp-close" onClick={ closeModal }><span>×</span></button></div>
        </Modal>
    );
}