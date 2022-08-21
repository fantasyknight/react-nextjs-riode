import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';

import ALink from '~/components/features/custom-link';

function PostTwo ( props ) {
    const { post, adClass = '', isLazy = false } = props;

    return (
        <div className={ `post post-list-sm ${ adClass }` }>
            <figure className="post-media">
                {
                    isLazy ?
                        <ALink href={ `/blog/single/${ post.slug }` }>
                            <LazyLoadImage
                                src={ process.env.NEXT_PUBLIC_ASSET_URI + post.small_picture[ 0 ].url }
                                alt="post image"
                                width={ post.small_picture[ 0 ].width }
                                height={ post.small_picture[ 0 ].height }
                                effect="opacity"
                                style={ { backgroundColor: "#DEE6E8" } }
                            />
                        </ALink>
                        :
                        <ALink href={ `/blog/single/${ post.slug }` }>
                            <img
                                src={ process.env.NEXT_PUBLIC_ASSET_URI + post.small_picture[ 0 ].url }
                                alt="post image"
                                width={ post.small_picture[ 0 ].width }
                                height={ post.small_picture[ 0 ].height }
                            />
                        </ALink>
                }
            </figure>

            <div className="post-details">
                <div className="post-meta">
                    <ALink href="#" className="post-date">{ new Date( post.date ).toLocaleDateString( 'en-US', { year: 'numeric', month: 'short', day: "2-digit", timeZone: "UTC" } ) }</ALink>
                </div>
                <h4 className="post-title">
                    <ALink href={ `/blog/single/${ post.slug }` }>{ post.title }</ALink>
                </h4>
            </div>
        </div >
    )
}

export default PostTwo;