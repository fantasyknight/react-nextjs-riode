import { useRouter } from 'next/router';
import { useQuery } from '@apollo/react-hooks';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import Helmet from 'react-helmet';

import withApollo from '~/server/apollo';
import { GET_POST } from '~/server/queries';

import ALink from '~/components/features/custom-link';
import OwlCarousel from '~/components/features/owl-carousel';

import ErrorPage from '~/pages/pages/404';

import BlogSidebar from '~/components/partials/post/blog-sidebar';
import RelatedPosts from '~/components/partials/post/related-posts';

import { mainSlider20 } from '~/utils/data/carousel';
import { videoHandler } from '~/utils';

function PostSingle() {
    const slug = useRouter().query.slug;

    if ( !slug ) return '';

    const { data, loading, error } = useQuery( GET_POST, { variables: { slug } } );
    const post = data && data.post.data;

    const related = data && data.post.related;

    if ( error ) return <ErrorPage />;

    return (
        <main className="main skeleton-body">
            <Helmet>
                <title>Riode React eCommerce Template | Blog Single</title>
            </Helmet>

            <h1 className="d-none">Riode React eCommerce Template - Blog Single</h1>

            <nav className="breadcrumb-nav">
                <div className="container">
                    <ul className="breadcrumb">
                        <li><ALink href="/"><i className="d-icon-home"></i></ALink></li>
                        <li><ALink href="/blog/classic" className="active">Blog</ALink></li>
                        <li>Single Post</li>
                    </ul>
                </div>
            </nav>

            <div className="page-content with-sidebar">
                <div className="container">
                    <div className="row gutter-lg">
                        <div className="col-lg-9">
                            {
                                loading ?
                                    <div className="skel-post"></div>
                                    :
                                    <div className={ `post post-single ${ post.type === 'video' ? 'post-video' : '' }` }>
                                        {
                                            post.type === 'image' || post.type === 'video' ?
                                                <figure className="post-media">
                                                    <ALink href="#">
                                                        <LazyLoadImage
                                                            src={ process.env.NEXT_PUBLIC_ASSET_URI + post.large_picture[ 0 ].url }
                                                            alt="post image"
                                                            width="900"
                                                            height={ 500 }
                                                            style={ { backgroundColor: "#DEE6E8" } }
                                                        />
                                                    </ALink>
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
                                                    <OwlCarousel adClass="owl-theme owl-dot-inner owl-dot-white gutter-no" options={ mainSlider20 }>
                                                        {
                                                            post.picture.map( ( item, index ) =>
                                                                <img
                                                                    src={ process.env.NEXT_PUBLIC_ASSET_URI + item.url }
                                                                    alt="post gallery"
                                                                    key={ item.title + '-' + index }
                                                                    width={ item.width }
                                                                    height={ item.height }
                                                                    style={ { backgroundColor: "#DEE6E8" } }
                                                                />
                                                            ) }
                                                    </OwlCarousel>
                                                </figure>
                                        }

                                        <div className="post-details">
                                            <div className="post-meta">
                                                by <ALink href="#" className="post-author">{ post.author }</ALink> on <ALink href="#" className="post-date">{ new Date( post.date ).toLocaleDateString( 'en-US', { year: 'numeric', month: 'short', day: "2-digit", timeZone: "UTC" } ) }</ALink> | <ALink href="#" className="post-comment"><span>{ post.comments }</span> Comments</ALink>
                                            </div>
                                            <h4 className="post-title">
                                                <ALink href="#">{ post.title }</ALink>
                                            </h4>
                                            <div className="post-body mb-7">
                                                <p className="mb-5">{ post.content }</p>

                                                <p className="mb-6">Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue. Morbi purus libero, faucibus adipiscing, commodo quis, gravida id, est. Sed lectus. Praesent elementum hendrerit tortor. Sed semper lorem at felis. Vestibulum volutpat, lacus a <ALink href="#">ultrices sagittis</ALink>, mi neque euismod dui, eu pulvinar nunc sapien ornare nisl. Phasellus pede arcu, dapibus eu, fermentum et, dapibus sed, urna.</p>

                                                <div className="with-img row align-items-center">
                                                    <div className="col-md-6 mb-6">
                                                        <figure>
                                                            <LazyLoadImage
                                                                src="./images/blog/1.jpg"
                                                                alt="post single image"
                                                                width={ 336 }
                                                                height={ 415 }
                                                                effect="opacity"
                                                                className="float-left"
                                                                style={ { backgroundColor: "#DEE6E8" } }
                                                            />
                                                            <figcaption className="text-left mt-1">
                                                                Designe by <ALink href="#">Casper Dalin</ALink>
                                                            </figcaption>
                                                        </figure>
                                                    </div>
                                                    <div className="col-md-6 mb-6">
                                                        <h4 className="font-weight-semi-bold ls-s">Quisque volutpat mattiseros.</h4>
                                                        <p className="mb-8 col-lg-11">Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti. </p>
                                                        <h4 className="font-weight-semi-bold ls-s">More Details</h4>
                                                        <ul className="list list-type-check mb-6">
                                                            <li>Praesent id enim sit amet.</li>
                                                            <li>Tdio vulputate eleifend in in tortor. ellus massa.</li>
                                                            <li>Massa ristique sit amet condim vel</li>
                                                            <li>Dilisis Facilisis quis sapien. Praesent id enim sit amet</li>
                                                            <li>Praesent id enim sit amet.</li>
                                                            <li>Tdio vulputate eleifend in in tortor. ellus massa.</li>
                                                        </ul>
                                                    </div>
                                                </div>

                                                <blockquote className="mt-1 mb-6 p-relative">
                                                    <p className="font-weight-semi-bold ls-m">“ Morbi purus libero, faucibus adipiscing, commodo quis, gravida id, est. Sed lectus. Praesent elementum hendrerit tortor. ”</p>
                                                </blockquote>

                                                <p>Morbi purus libero, faucibus adipiscing, commodo quis, gravida id, est. Sed
                                                lectus. Praesent elementum hendrerit tortor. Sed semper lorem at felis.
                                                Vestibulum volutpat, lacus a ultrices sagittis, mi neque euismod dui, eu
                                                pulvinar nunc sapien ornare nisl. Phasellus pede arcu, dapibus eu, fermentum
                                                et, dapibus sed, urna. Morbi interdum mollis sapien. Sed ac risus. Phasellus
                                                lacinia, magna a ullamcorper laoreet, lectus arcu pulvinar risus, vitae
                                                    facilisis libero dolor a purus. </p>
                                            </div>

                                            <div className="post-author-detail">
                                                <figure className="author-media">
                                                    <ALink href="#">
                                                        <img src="./images/blog/comments/1.jpg" alt="avatar" width="50" height="50" />
                                                    </ALink>
                                                </figure>
                                                <div className="author-body">
                                                    <div
                                                        className="author-header d-flex justify-content-between align-items-center">
                                                        <div>
                                                            <span className="author-title">AUTHOR</span>
                                                            <h4 className="author-name font-weight-bold mb-0">John Doe</h4>
                                                        </div>
                                                        <div>
                                                            <ALink href="#" className="author-link font-weight-semi-bold">View all posts
                                                                by John Doe <i className="d-icon-arrow-right"></i></ALink>
                                                        </div>
                                                    </div>
                                                    <div className="author-content">
                                                        <p className="mb-0">Praesent dapibus, neque id cursus faucibus, tortor neque
                                                        egestas auguae, eu vulputate magna eros euerat. Aliquam erat
                                                            volutpat.</p>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="post-footer mt-7 mb-3">
                                                <div className="post-tags">
                                                    <ALink href="#" className="tag">classic</ALink>
                                                    <ALink href="#" className="tag">converse</ALink>
                                                </div>
                                                <div className="social-icons">
                                                    <ALink href="#" className="social-icon social-facebook" title="Facebook"><i className="fab fa-facebook-f"></i></ALink>
                                                    <ALink href="#" className="social-icon social-twitter" title="Twitter"><i className="fab fa-twitter"></i></ALink>
                                                    <ALink href="#" className="social-icon social-pinterest" title="Pinterest"><i className="fab fa-pinterest-p"></i></ALink>
                                                </div>
                                            </div>
                                        </div>
                                    </div >
                            }
                            {
                                loading ? '' :
                                    <nav className="page-nav">
                                        <ALink className="pager-link pager-link-prev" href={ `/blog/single/${ related[ 0 ].slug }` }>
                                            Previous Post
                                            <span className="pager-link-title">{ related[ 0 ].title }</span>
                                        </ALink>
                                        <ALink className="pager-link pager-link-next" href={ `/blog/single/${ related[ related.length - 1 ].slug }` }>
                                            Go To Post
                                            <span className="pager-link-title">{ related[ related.length - 1 ].title }</span>
                                        </ALink>
                                    </nav>
                            }

                            <RelatedPosts posts={ related } loading={ loading } />

                            {
                                loading ? '' :
                                    <div className="comments">
                                        <h3 className="title title-simple text-left text-normal font-weight-bold">{ post.comments } Comments</h3>

                                        {
                                            post.comments > 0 ? '' :
                                                <h3 className="title title-simple text-left text-normal font-weight-normal" style={ { fontSize: "1.8rem" } }>
                                                    {
                                                        "Be The First To Review “" + post.title + "”"
                                                    }
                                                </h3>
                                        }
                                        <ul>
                                            {
                                                post.comments > 0 ?
                                                    <li>
                                                        <div className="comment">
                                                            <figure className="comment-media">
                                                                <ALink href="#">
                                                                    <img src="images/blog/comments/1.jpg" alt="avatar" width="100" height="100" />
                                                                </ALink>
                                                            </figure>
                                                            <div className="comment-body">
                                                                <div className="comment-user">
                                                                    <span className="comment-date">November 9, 2018 at 2:19 pm</span>
                                                                    <h4><ALink href="#">Jimmy Pearson</ALink></h4>
                                                                </div>

                                                                <div className="comment-content mb-2">
                                                                    <p>Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti. </p>
                                                                </div>
                                                                <ALink href="#" className="btn btn-link btn-reveal-right">REPLY<i className="d-icon-arrow-right"></i></ALink>
                                                            </div>
                                                        </div>
                                                        {
                                                            post.comments > 1 ?
                                                                <ul>
                                                                    <li>
                                                                        <div className="comment">
                                                                            <figure className="comment-media">
                                                                                <ALink href="#">
                                                                                    <img src="images/blog/comments/2.jpg" alt="avatar" width="100" height="100" />
                                                                                </ALink>
                                                                            </figure>

                                                                            <div className="comment-body">
                                                                                <div className="comment-user">
                                                                                    <span className="comment-date">November 9, 2018 at 2:19 pm</span>
                                                                                    <h4><ALink href="#">Lena Knight</ALink></h4>
                                                                                </div>

                                                                                <div className="comment-content mb-2">
                                                                                    <p>Morbi interdum mollis sapien. Sed ac risus.</p>
                                                                                </div>
                                                                                <ALink href="#" className="btn btn-link btn-reveal-right">REPLY<i className="d-icon-arrow-right"></i></ALink>
                                                                            </div>
                                                                        </div>
                                                                    </li></ul> : ''
                                                        }
                                                    </li>
                                                    : ''
                                            }
                                            {
                                                post.comments > 2 ?
                                                    <li>
                                                        <div className="comment">
                                                            <figure className="comment-media">
                                                                <ALink href="#">
                                                                    <img src="images/blog/comments/1.jpg" alt="avatar" width="100" height="100" />
                                                                </ALink>
                                                            </figure>

                                                            <div className="comment-body">
                                                                <div className="comment-user">
                                                                    <span className="comment-date">November 9, 2018 at 2:19 pm</span>
                                                                    <h4><ALink href="#">Johnathan Castillo</ALink></h4>
                                                                </div>

                                                                <div className="comment-content mb-2">
                                                                    <p>Vestibulum volutpat, lacus a ultrices sagittis, mi neque euismod dui, eu pulvinar nunc sapien ornare nisl. Phasellus pede arcu, dapibus eu, fermentum et, dapibus sed, urna.</p>
                                                                </div>
                                                                <ALink href="#" className="btn btn-link btn-reveal-right">REPLY<i className="d-icon-arrow-right"></i></ALink>
                                                            </div>
                                                        </div>
                                                    </li> : ''
                                            }
                                        </ul>
                                    </div>
                            }

                            <div className="reply">
                                <div className="title-wrapper text-left">
                                    <h3 className="title title-simple text-left text-normal">Leave A Reply</h3>
                                    <p>Your email address will not be published. Required fields are marked *</p>
                                </div>
                                <form action="#">
                                    <textarea id="reply-message" cols="30" rows="6" className="form-control mb-4" placeholder="Comment *" required></textarea>
                                    <div className="row">
                                        <div className="col-md-6 mb-5">
                                            <input type="text" className="form-control" id="reply-name" name="reply-name" placeholder="Name *" required />
                                        </div>
                                        <div className="col-md-6 mb-5">
                                            <input type="email" className="form-control" id="reply-email" name="reply-email" placeholder="Email *" required />
                                        </div>
                                    </div>
                                    <button type="submit" className="btn btn-primary btn-rounded">POST COMMENT<i className="d-icon-arrow-right"></i></button>
                                </form>
                            </div>

                        </div>

                        <BlogSidebar />
                    </div>
                </div>
            </div>
        </main>
    )
}

export default withApollo( { ssr: typeof window === 'undefined' } )( PostSingle );