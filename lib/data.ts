const data = {
    headerMenus: [
        {
          name: "Today's Deal",
          href: '/search?tag=todays-deal',
        },
        {
          name: 'New Arrivals',
          href: '/search?tag=new-arrival',
        },
        {
          name: 'Featured Products',
          href: '/search?tag=featured',
        },
        {
          name: 'Best Sellers',
          href: '/search?tag=best-seller',
        },
        {
          name: 'Browsing History',
          href: '/#browsing-history',
        },
        {
          name: 'Customer Service',
          href: '/page/customer-service',
        },
        {
          name: 'About Us',
          href: '/page/about-us',
        },
        {
          name: 'Help',
          href: '/page/help',
        },
      ],

      carousels: [
        {
          title: 'Most Popular Shoes For Sale',
          buttonCaption: 'Shop Now',
          image: '/images/banner3.jpg',
          url: '/search?category=Shoes',
          isPublished: true,
        },
        {
          title: 'Best Sellers in T-Shirts',
          buttonCaption: 'Shop Now',
          image: '/images/banner1.jpg',
          url: '/search?category=T-Shirts',
          isPublished: true,
        },
        {
          title: 'Best Deals on Wrist Watches',
          buttonCaption: 'See More',
          image: '/images/banner2.jpg',
          url: '/search?category=Wrist Watches',
          isPublished: true,
        },
      ],

      products: [
        {
          name: 'LOOSE FIT PIQUE JOGGER SWEATSHIRT',
          slug: 'loose-fit-pique-jogger-sweatshirt',
          category: "Men's Sweatshirts",
          images: ['/images/p1-1.jpeg', '/images/p1-2.jpeg'],
          price: '59.99',
          brand: 'Nike',
          rating: '4.5',
          numReviews: 10,
          stock: 5,
          description:
            'Lacoste sporting elegance with an urban twist. Fall in love with this loose, cozy sweatshirt in super-comfortable double-face piqué.',
          isFeatured: true,
          banner: '/images/banner-1.jpeg',
        },
        {
          name: 'LACOSTE TENNIS X NOVAK DJOKOVIC SPORTSUIT JACKET',
          slug: 'lacoste-tennis-x-novak-djokovic-sportsuit-jacket',
          category: "Men's Sweatshirts",
          images: ['/images/p2-1.jpeg', '/images/p2-2.jpeg'],
          price: '199.90',
          brand: 'Lacoste',
          rating: '4.2',
          numReviews: 8,
          stock: 10,
          description:
            'Hit the courts like Novak Djokovic with this seamless stretch jacket, made to move your way.',
          isFeatured: true,
          banner: '/images/banner-2.jpeg',
        },
        {
          name: 'SHOWERPROOF SPORTSUIT TRACK PANTS',
          slug: 'showerproof-sportsuit-track-pants',
          category: 'Track Pants',
          images: ['/images/p3-1.jpeg', '/images/p3-2.jpeg'],
    
          price: '149.95',
          brand: 'Nike',
          rating: '4.9',
          numReviews: 3,
          stock: 0,
          description:
            'Stay stylish, whatever the weather. These showerproof track pants are here to protect you from the rain. ',
        },
        {
          name: "MEN'S LACOSTE SPORT FRENCH CAPSULE TRACKSUIT PANTS",
          slug: 'mens-lacoste-sport-french-capsule-tracksuit-pants',
          category: 'Track Pants',
          images: ['/images/p4-1.jpeg', '/images/p4-2.jpeg'],
          price: '125.95',
          brand: 'Lacoste',
          rating: '3.6',
          numReviews: 5,
          stock: 10,
          description:
            'A tricolour design brings a distinctive edge to these lightweight tracksuit pants made of diamond taffeta. ',
        },
      ],
}

export default data;