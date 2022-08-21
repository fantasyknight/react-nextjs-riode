import { useState, useEffect } from 'react';

export default function Quantity( { qty = 1, ...props } ) {
    const { adClass = 'mr-2 input-group' } = props;
    const [ quantity, setQuantity ] = useState( parseInt( qty ) );

    useEffect( () => {
        setQuantity( qty );
    }, [ props.product ] )

    useEffect( () => {
        props.onChangeQty && props.onChangeQty( quantity );
    }, [ quantity ] )

    function minusQuantity() {
        if ( quantity > 1 ) {
            setQuantity( parseInt( quantity ) - 1 );
        }
    }

    function plusQuantity() {
        if ( quantity < props.max ) {
            setQuantity( parseInt( quantity ) + 1 );
        }
    }

    function changeQty( e ) {
        let newQty;

        if ( e.currentTarget.value !== '' ) {
            newQty = Math.min( parseInt( e.currentTarget.value ), props.max );
            newQty = Math.max( newQty, 1 );
            setQuantity( newQty );
        }
    }

    return (
        <div className={ adClass }>
            <button className='quantity-minus d-icon-minus' onClick={ minusQuantity }></button>
            <input className='quantity form-control' type='number' min="1" max={ props.max } value={ quantity } onChange={ changeQty } />
            <button className='quantity-plus d-icon-plus' onClick={ plusQuantity }></button>
        </div>
    )
}