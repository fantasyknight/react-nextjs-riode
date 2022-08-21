import React from 'react';
import OwlCarousel from '~/components/features/owl-carousel';

import PostFour from '~/components/features/post/post-four';

import { mainSlider10 } from '~/utils/data/carousel';

export default function RelatedPosts ( props ) {
    const { posts, loading } = props;
    return (
        <div className="related-posts">
            <h3 className="title title-simple text-left text-normal font-weight-bold ls-normal">Related Posts</h3>

            <OwlCarousel adClass="owl-theme" options={ mainSlider10 }>
                {
                    loading ?
                        new Array( parseInt( 4 ) ).fill( 1 ).map( ( item, index ) => (
                            <div key={ "Skeleton:" + index }>
                                <div className="skel-post"></div>
                            </div>
                        ) ) :
                        posts ?
                            posts.length ?
                                posts.slice( 0, posts.length ).map( ( post, index ) => (
                                    <React.Fragment key={ "post-one" + index }>
                                        <PostFour post={ post } btnAdClass="btn-primary" />
                                    </React.Fragment>
                                ) ) :
                                <div className="info-box with-icon"><p className="mt-4">No blogs were found matching your selection.</p></div>
                            : ''
                }
            </OwlCarousel>
        </div >
    )
}