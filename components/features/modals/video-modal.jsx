import { useEffect } from 'react';
import { connect } from 'react-redux';
import { useRouter } from 'next/router';
import Modal from 'react-modal';

import { modalActions } from '~/store/modal';

const customStyles = {
    content: {
        position: "relative"
    },
    overlay: {
        background: 'rgba(0,0,0,.4)',
        overflowX: 'hidden',
        display: 'flex',
        overflowY: 'auto',
        opacity: 0
    }
}

Modal.setAppElement( '#__next' );

function VideoModal ( props ) {
    const router = useRouter();
    const { isOpen, closeModal, singleSlug } = props;

    useEffect( () => {
        closeModal();

        router.events.on( 'routeChangeStart', closeModal );

        return () => {
            router.events.off( 'routeChangeStart', closeModal );
        }
    }, [] )

    useEffect( () => {
        if ( isOpen )
            setTimeout( () => {
                document.querySelector( ".ReactModal__Overlay" ).classList.add( 'opened' );
            }, 100 )
    }, [ isOpen ] )

    const closeVideo = () => {
        document.querySelector( ".ReactModal__Overlay" ).classList.add( 'removed' );
        document.querySelector( ".ReactModal__Overlay" ).classList.remove( 'opened' );
        document.querySelector( ".video-modal.ReactModal__Content" ).classList.remove( "ReactModal__Content--after-open" );
        document.querySelector( ".video-modal-overlay.ReactModal__Overlay" ).classList.remove( "ReactModal__Overlay--after-open" );

        setTimeout( () => {
            closeModal();
        }, 330 );
    }

    return (
        < Modal
            isOpen={ isOpen }
            contentLabel="VideoModal"
            onRequestClose={ closeVideo }
            shouldFocusAfterRender={ false }
            style={ customStyles }
            overlayClassName="video-modal-overlay"
            className="row video-modal" id="video-modal"
        >
            <video src={ process.env.NEXT_PUBLIC_ASSET_URI + singleSlug } autoPlay={ true } loop={ true } controls={ true } className="p-0"></video>

            <button title="Close (Esc)" type="button" className="mfp-close" onClick={ closeModal } ><span>×</span></button>
        </Modal >
    )
}

function mapStateToProps ( state ) {
    return {
        isOpen: state.modal.openModal,
        singleSlug: state.modal.singleSlug
    }
}

export default connect( mapStateToProps, { closeModal: modalActions.closeModal } )( VideoModal );