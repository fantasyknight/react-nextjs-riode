import gql from 'graphql-tag'

export const currentDemo = `"1"`;

const PRODUCT_SIMPLE = gql`
    fragment ProductSimple on Product {
        name
        slug
        price
        ratings
        reviews
        stock
        short_description
        is_featured
        is_new
        until
        discount
        pictures {
            url
            width
            height
        }
        small_pictures {
            url
            width
            height
        }
        categories {
            name
            slug
        }
        variants {
            price
            sale_price
        }
    }
`

const PRODUCT_SMALL = gql`
    fragment ProductSmall on Product {
        id
        name
        slug
        price
        ratings
        pictures {
            url
            width
            height
        }
        small_pictures {
            url
            width
            height
        }
        variants {
            price
            sale_price
        }
    }
`

export const GET_PRODUCTS = gql`
    query products($search: String, $colors: [String], $sizes: [String], $brands: [String], $min_price: Int, $max_price: Int, $category: String, $tag: String, $sortBy: String, $from: Int, $to: Int, $list: Boolean = false) {
        products(demo: ${currentDemo }, search: $search, colors: $colors, sizes: $sizes, brands: $brands, min_price: $min_price, max_price: $max_price, category: $category, tag: $tag, sortBy: $sortBy, from: $from, to: $to ) {
            data {
                short_description @include(if: $list)
                ...ProductSimple

            }
            total
        }
    }
    ${ PRODUCT_SIMPLE }
`

export const GET_SPECIAL_PRODUCTS = gql`
    query specialProducts($featured: Boolean = false, $bestSelling: Boolean = false, $topRated: Boolean = false, $onSale: Boolean = false, $count: Int) {
        specialProducts(demo: ${currentDemo }, featured: $featured, bestSelling: $bestSelling, topRated: $topRated, onSale: $onSale, count: $count) {
            featured @include(if: $featured) {
                ...ProductSmall
            }
            bestSelling @include(if: $bestSelling) {
                ...ProductSmall
            }
            topRated @include(if: $topRated) {
                ...ProductSmall
            }
            latest @include(if: $latest) {
                ...ProductSmall
            }
        }
    }
    ${ PRODUCT_SMALL }
`

export const GET_PRODUCT = gql`
    query product($slug: String!, $onlyData: Boolean = false) {
        product(demo: ${currentDemo }, slug: $slug, onlyData: $onlyData) {
            data {
                id
                slug
                name
                price
                discount
                short_description
                sku
                stock
                ratings
                reviews
                sale_count
                is_new
                is_top
                until
                pictures {
                    url
                    width
                    height
                }
                small_pictures {
                    url
                    width
                    height
                }
                large_pictures {
                    url
                    width
                    height
                }
                categories {
                    name
                    slug
                }
                tags {
                    name
                    slug
                }
                brands {
                    name
                    slug
                }
                variants {
                    price
                    sale_price
                    color {
                        name
                        color
                        thumb {
                            url
                            width
                            height
                        }
                    }
                    size {
                        name
                        size
                        thumb {
                            url
                            width
                            height
                        }
                    }
                }
            }
            prev @skip(if: $onlyData) {
                slug
                name
                pictures {
                    url
                    width
                    height
                }
            }
            next @skip(if: $onlyData) {
                slug
                name
                pictures {
                    url
                    width
                    height
                }
            }
            related @skip(if: $onlyData) {
                ...ProductSimple
            }
        }
    }
    ${ PRODUCT_SIMPLE }
`

export const GET_VIDEO = gql`
    query video($slug: String!) {
        video(demo: ${currentDemo }, slug: $slug) {
            data {
                url
                width
                height
            }
        }
    }
`

export const GET_SHOP_SIDEBAR_DATA = gql`
    query shopSidebarData($featured: Boolean = false) {
        shopSidebarData(demo: ${currentDemo }, featured: $featured) {
            categories {
                name
                slug
                children {
                    name
                    slug
                }
            }
            featured @include(if: $featured) {
                slug
                name
                price
                ratings
                reviews
                pictures {
                    url
                    width
                    height
                }
                variants {
                    price
                }
            }
        }
    }
`

export const GET_POSTS = gql`
    query posts($category: String, $from: Int, $to: Int, $categories: [String]) {
        posts(demo: ${currentDemo }, category: $category, from: $from, to: $to, categories: $categories ) {
            data {
                title
                slug
                date
                comments
                content
                type
                author
                large_picture {
                    url
                    width
                    height
                }
                picture {
                    url
                    width
                    height
                }
                small_picture {
                    url
                    width
                    height
                }
                video {
                    url
                    width
                    height
                }
            }
            total
        }
    }
`

export const GET_POST = gql`
    query post($slug: String!) {
        post(demo: ${currentDemo }, slug: $slug) {
            data {
                title
                slug
                author
                date
                comments
                content
                type
                large_picture {
                    url
                    width
                    height
                }
                picture {
                    url
                    width
                    height
                }
                video {
                    url
                    width
                    height
                }
                categories {
                    name
                    slug
                }
            }
            related {
                title
                slug
                date
                type
                comments
                content
                picture {
                    url
                    width
                    height
                }
                video {
                    url
                    width
                    height
                }
            }
        }
    }
`

export const GET_POST_SIDEBAR_DATA = gql`
    query postSidbarData {
        postSidebarData(demo: ${currentDemo }) {
            categories {
                name
                slug
            }
            recent {
                title
                slug
                date
                small_picture {
                    url
                    width
                    height
                }
            }
        }
    }
`

export const GET_HOME_DATA = gql`
    query indexData($productsCount: Int, $postsCount: Int) {
        specialProducts(demo: ${currentDemo }, featured: true, bestSelling: true, topRated: true, latest: true, onSale: true, count: $productsCount) {
            featured {
                ...ProductSimple
            }
            bestSelling {
                ...ProductSimple
            }
            topRated {
                ...ProductSimple
            }
            latest {
                ...ProductSimple
            }
            onSale {
                ...ProductSimple
            }
        }
        posts(demo: ${currentDemo }, to: $postsCount) {
            data {
                title
                slug
                date
                type
                comments
                content
                picture {
                    url
                    width
                    height
                }
                video {
                    url
                    width
                    height
                }
                large_picture {
                    url
                    width
                    height
                }
            }
        }
    }
    ${ PRODUCT_SIMPLE }
`
