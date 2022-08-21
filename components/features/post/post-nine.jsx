import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';

import ALink from '~/components/features/custom-link';
import OwlCarousel from '~/components/features/owl-carousel';

import { videoHandler } from '~/utils';
import { mainSlider20 } from '~/utils/data/carousel';

function PostNine ( props ) {
    const { post, adClass = '', isLazy = false, isOriginal = false, btnText = "Read more", btnAdClass = '', type = 'grid' } = props;

    return (
        <div className={ `post post-grid ${ post.type === 'video' ? 'post-video' : '' } ${ adClass }` } >
            {
                post.type === 'image' || post.type === 'video' || type === 'masonry' ?
                    <figure className="post-media">
                        {
                            isLazy ?
                                <ALink href={ `/blog/single/${ post.slug }` }>
                                    {
                                        isOriginal ? <LazyLoadImage
                                            src={ process.env.NEXT_PUBLIC_ASSET_URI + post.large_picture[ 0 ].url }
                                            alt="post image"
                                            width={ 100 }
                                            height={ post.large_picture[ 0 ].height }
                                            effect="opacity; transform"
                                            style={ { backgroundColor: "#DEE6E8" } }
                                        />
                                            :
                                            <LazyLoadImage
                                                src={ process.env.NEXT_PUBLIC_ASSET_URI + post.picture[ 0 ].url }
                                                alt="post image"
                                                width={ post.picture[ 0 ].width }
                                                height={ post.picture[ 0 ].height }
                                                effect="opacity; transform"
                                                style={ { backgroundColor: "#DEE6E8" } }
                                            />
                                    }
                                </ALink>
                                :
                                <ALink href={ `/blog/single/${ post.slug }` }>
                                    {
                                        isOriginal ? <img
                                            src={ process.env.NEXT_PUBLIC_ASSET_URI + post.large_picture[ 0 ].url }
                                            alt="post image"
                                            width={ 100 }
                                            height={ post.large_picture[ 0 ].height }
                                        /> :

                                            <img
                                                src={ process.env.NEXT_PUBLIC_ASSET_URI + post.picture[ 0 ].url }
                                                alt="post image"
                                                width={ post.picture[ 0 ].width }
                                                height={ post.picture[ 0 ].height }
                                            />
                                    }
                                </ALink>
                        }
                        {
                            post.type === 'video' ?
                                <>
                                    <span className="video-play" onClick={ videoHandler }></span>
                                    <video width="380">
                                        <source src={ process.env.NEXT_PUBLIC_ASSET_URI + post.video.url } type="video/mp4" />
                                    </video>
                                </>
                                : ''
                        }
                    </figure> :
                    <figure className="post-media">
                        {
                            isLazy ?
                                <OwlCarousel adClass="owl-theme owl-dot-inner owl-dot-white gutter-no" options={ mainSlider20 }>
                                    {
                                        post.picture.map( ( item, index ) =>
                                            <LazyLoadImage
                                                src={ process.env.NEXT_PUBLIC_ASSET_URI + item.url }
                                                alt="post gallery"
                                                key={ item.title + '-' + index }
                                                width={ item.width }
                                                height={ item.height }
                                                effect="opacity; transform"
                                                style={ { backgroundColor: "#DEE6E8" } }
                                            />
                                        ) }
                                </OwlCarousel>
                                :
                                <OwlCarousel adClass="owl-theme owl-dot-inner owl-dot-white gutter-no" options={ mainSlider20 }>
                                    {
                                        post.picture.map( ( item, index ) =>
                                            <img
                                                src={ process.env.NEXT_PUBLIC_ASSET_URI + item.url }
                                                alt="post gallery"
                                                key={ item.title + '-' + index }
                                                width={ item.width }
                                                height={ item.height }
                                            />
                                        ) }
                                </OwlCarousel>
                        }
                    </figure>
            }

            < div className="post-details" >
                <div className="post-meta">
                    on <ALink href="#" className="post-date">{ new Date( post.date ).toLocaleDateString( 'en-US', { year: 'numeric', month: 'short', day: "2-digit", timeZone: "UTC" } ) }</ALink> | <ALink href="#" className="post-comment"><span>{ post.comments }</span> Comments</ALink>
                </div>
                <h4 className="post-title">
                    <ALink href={ `/blog/single/${ post.slug }` }>{ post.title }</ALink>
                </h4>
                <p className="post-content">{ post.content }</p>
                <ALink href={ `/blog/single/${ post.slug }` } className={ `btn btn-link btn-underline btn-primary ${ btnAdClass }` }>{ btnText }<i className="d-icon-arrow-right"></i></ALink>
            </div >
        </div >
    )
}

export default PostNine;