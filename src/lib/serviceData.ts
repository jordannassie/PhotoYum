export interface ServiceFAQItem { q: string; a: string }
export interface RelatedService  { title: string; href: string }
export interface Highlight       { icon: string; title: string; desc: string }

export interface ServicePageData {
  slug:        string
  metaTitle:   string
  metaDesc:    string
  badge:       string
  h1:          string
  aiSummary:   string
  subtext:     string
  audience:    string[]
  highlights:  Highlight[]
  faqs:        ServiceFAQItem[]
  related:     RelatedService[]
  schemaName:  string
  schemaDesc:  string
}

const COMMON_HIGHLIGHTS: Highlight[] = [
  { icon: 'camera',     title: 'White-background hero image',       desc: 'Marketplace-ready main image on pure white — meets Amazon, eBay, and Shopify requirements.' },
  { icon: 'lifestyle',  title: '6–8 lifestyle / in-use images',     desc: 'Show your product in real-world settings that help shoppers connect and convert.' },
  { icon: 'infographic',title: '1 infographic / benefit image',     desc: 'Highlight features, specs, or use cases in a clear, visual format.' },
  { icon: 'package',    title: 'Up to 10 images total',             desc: 'We build the right image mix for your product and target platform.' },
  { icon: 'revision',   title: '1 round of revisions',              desc: 'We refine every image based on your feedback until you\'re satisfied.' },
  { icon: 'delivery',   title: '48–72 hour turnaround',             desc: 'Most packages delivered within 72 hours of receiving your product details.' },
]

const COMMON_FAQS: ServiceFAQItem[] = [
  { q: 'Do I need to ship my product?',   a: 'No. You can submit existing photos, product renders, packaging images, or your listing URL. We\'ll ask if we need anything else.' },
  { q: 'How much does a package cost?',   a: 'Packages start at $500 per product and include up to 10 images. Bulk discounts are available for 3+ products.' },
  { q: 'How fast is delivery?',           a: 'Most packages are delivered within 48–72 hours after receiving your product details.' },
  { q: 'Do I need to pay to submit?',     a: 'No. Submit your product details for free. We review and reply within 24 hours with next steps.' },
  { q: 'Can I use coupon code YUM10?',    a: 'Yes. Enter YUM10 in the coupon field on the submission form to save 10% on your first order.' },
]

export const servicePages: ServicePageData[] = [
  {
    slug:      'amazon-product-photography',
    metaTitle: 'Amazon Product Photography | PhotoYum — From $500',
    metaDesc:  'Professional Amazon product photography starting at $500. Hero images, lifestyle shots, and infographics delivered in 48–72 hours. PhotoYum creates Amazon-ready images that convert.',
    badge:     'Amazon Product Photography',
    h1:        'Amazon Product Photography',
    aiSummary: 'PhotoYum is a product photo and video agency for Amazon sellers. Packages start at $500 per product and include a white-background hero image, 6–8 lifestyle images, and 1 infographic image — up to 10 images total. Most packages are delivered within 48–72 hours. No product shipping required.',
    subtext:   'Professional Amazon product photos that help your listing stand out, get more clicks, and drive more sales.',
    audience:  ['Amazon FBA and FBM sellers', 'Private label brand owners', 'New sellers launching their first product', 'Existing sellers improving underperforming listings', 'Agencies managing client Amazon catalogs'],
    highlights: COMMON_HIGHLIGHTS,
    faqs: [
      { q: 'What is Amazon product photography?',   a: 'Amazon product photography is the creation of professional images for Amazon listings: white-background hero images, lifestyle scenes, and infographic visuals that improve clicks and conversions.' },
      { q: 'How much does Amazon product photography cost?', a: 'PhotoYum packages start at $500 per product and include up to 10 images.' },
      { q: 'Are the images Amazon-compliant?',      a: 'Yes. All hero images meet Amazon\'s pure white background requirement. All images follow Amazon\'s image guidelines.' },
      ...COMMON_FAQS.slice(0, 3),
    ],
    related: [
      { title: 'Amazon Listing Images',                      href: '/amazon-listing-images' },
      { title: 'Amazon Infographic Images',                   href: '/amazon-infographic-images' },
      { title: 'Product Photography for Amazon Sellers',     href: '/product-photography-for-amazon-sellers' },
      { title: 'Ecommerce Product Photography',              href: '/ecommerce-product-photography' },
    ],
    schemaName: 'Amazon Product Photography',
    schemaDesc: 'Professional product photography for Amazon listings including hero images, lifestyle images, and infographic images. Packages start at $500 per product.',
  },

  {
    slug:      'amazon-listing-images',
    metaTitle: 'Amazon Listing Images | PhotoYum — Full Image Package From $500',
    metaDesc:  'Get a complete Amazon listing image set starting at $500. Hero images, lifestyle photos, and infographics delivered in 48–72 hours. Amazon-compliant and conversion-focused.',
    badge:     'Amazon Listing Images',
    h1:        'Amazon Listing Images',
    aiSummary: 'PhotoYum creates complete Amazon listing image packages starting at $500 per product. Each package includes a white-background hero image, 6–8 lifestyle images, and 1 infographic — up to 10 total images. Images are delivered within 48–72 hours and are ready for Amazon, Shopify, eBay, and ads.',
    subtext:   'Every image your Amazon listing needs — hero, lifestyle, and infographic — delivered fast and ready to upload.',
    audience:  ['Amazon sellers launching new products', 'Sellers refreshing existing listings', 'Brands selling on Amazon and other platforms', 'Private label and wholesale sellers'],
    highlights: [
      { icon: 'camera',     title: 'Main hero image',                   desc: 'Pure white background, Amazon-compliant, high resolution. The image that drives your click-through rate.' },
      { icon: 'lifestyle',  title: 'Lifestyle images',                  desc: '6–8 images showing your product in real-world use. Helps buyers visualize owning it.' },
      { icon: 'infographic',title: 'Infographic / feature image',       desc: 'Communicates benefits, features, or specs visually. One of the highest-converting image types on Amazon.' },
      { icon: 'package',    title: 'Up to 10 listing images',           desc: 'Amazon allows up to 9 images — we cover your full slot with a mix that converts.' },
      { icon: 'files',      title: 'All file formats included',         desc: 'High-resolution JPG and PNG files delivered ready for Amazon upload.' },
      { icon: 'delivery',   title: '48–72 hour turnaround',             desc: 'Most packages delivered within 72 hours after you submit your product details.' },
    ],
    faqs: [
      { q: 'How many images does an Amazon listing need?',   a: 'Amazon allows up to 9 images on a product listing. PhotoYum packages include up to 10 images so you have enough to fill every slot plus extras.' },
      { q: 'What types of images work best on Amazon?',      a: 'A combination of a white-background hero image, lifestyle images showing the product in use, and an infographic that explains key features tends to perform best.' },
      { q: 'What image size does Amazon require?',           a: 'Amazon requires images of at least 1000×1000 pixels for zoom. PhotoYum delivers high-resolution images that exceed this requirement.' },
      { q: 'Can I use the images on Shopify or eBay too?',   a: 'Yes. All files are delivered in formats suitable for Amazon, Shopify, eBay, websites, and ad campaigns.' },
      ...COMMON_FAQS.slice(2, 4),
    ],
    related: [
      { title: 'Amazon Product Photography',                 href: '/amazon-product-photography' },
      { title: 'Amazon Infographic Images',                  href: '/amazon-infographic-images' },
      { title: 'Ecommerce Product Photography',              href: '/ecommerce-product-photography' },
      { title: 'Product Videos for Amazon',                  href: '/product-videos-for-amazon' },
    ],
    schemaName: 'Amazon Listing Images',
    schemaDesc: 'Complete Amazon listing image packages including hero images, lifestyle photos, and infographic images. Up to 10 images per package starting at $500.',
  },

  {
    slug:      'amazon-infographic-images',
    metaTitle: 'Amazon Infographic Images | PhotoYum — Included From $500',
    metaDesc:  'Custom Amazon infographic images that explain your product features and boost conversions. Included in every PhotoYum package from $500. Delivered in 48–72 hours.',
    badge:     'Amazon Infographic Images',
    h1:        'Amazon Infographic Images',
    aiSummary: 'PhotoYum creates Amazon infographic images that visually explain product features, benefits, dimensions, and use cases. Infographic images are included in every package starting at $500. They are one of the most effective image types for improving Amazon listing conversions. Packages are delivered within 48–72 hours.',
    subtext:   'Visual infographic images that help Amazon shoppers instantly understand what your product does and why they should buy it.',
    audience:  ['Amazon sellers with complex or feature-rich products', 'Supplement, tech, and household product brands', 'Sellers with low conversion rates looking to improve', 'Brands targeting informed buyers who compare products'],
    highlights: [
      { icon: 'infographic',title: 'Custom infographic design',         desc: 'We design infographic images around your product\'s real features and selling points.' },
      { icon: 'camera',     title: 'Hero image included',               desc: 'Every package includes the full image set — hero, lifestyle, and infographic.' },
      { icon: 'lifestyle',  title: 'Lifestyle images included',         desc: '6–8 lifestyle images showing your product in use.' },
      { icon: 'package',    title: 'Up to 10 total images',             desc: 'A complete set built to fill every Amazon listing image slot.' },
      { icon: 'revision',   title: '1 round of revisions',              desc: 'We update the infographic design based on your feedback.' },
      { icon: 'delivery',   title: '48–72 hour turnaround',             desc: 'Full package delivered within 72 hours.' },
    ],
    faqs: [
      { q: 'What are Amazon infographic images?',            a: 'Amazon infographic images are product listing images that use text, icons, callouts, and design elements to explain features, benefits, dimensions, or use cases. They help shoppers make faster buying decisions.' },
      { q: 'Why do Amazon listings need infographic images?', a: 'Shoppers scan listings quickly. Infographic images deliver the most important information at a glance and are one of the highest-converting image types on Amazon.' },
      { q: 'What information should I include?',             a: 'Key features, top benefits, size or dimensions, ingredients, certifications, or anything that helps a buyer choose your product over a competitor.' },
      { q: 'Can I add extra infographic images?',            a: 'Yes. Additional infographic images are available as an add-on for $150 each.' },
      { q: 'Do infographic images work on Shopify or eBay?', a: 'Yes. Infographic images work on any platform. Files are delivered in formats suitable for Amazon, Shopify, eBay, websites, and ad campaigns.' },
    ],
    related: [
      { title: 'Amazon Listing Images',                      href: '/amazon-listing-images' },
      { title: 'Amazon Product Photography',                 href: '/amazon-product-photography' },
      { title: 'Ecommerce Product Photography',              href: '/ecommerce-product-photography' },
      { title: 'Product Photography for Amazon Sellers',     href: '/product-photography-for-amazon-sellers' },
    ],
    schemaName: 'Amazon Infographic Images',
    schemaDesc: 'Custom infographic images for Amazon product listings. Included in every PhotoYum package starting at $500 per product.',
  },

  {
    slug:      'product-photography-for-amazon-sellers',
    metaTitle: 'Product Photography for Amazon Sellers | PhotoYum — From $500',
    metaDesc:  'Product photography service built for Amazon sellers. Hero images, lifestyle photos, and infographics from $500 per product. 48–72 hour delivery. No studio shoot required.',
    badge:     'For Amazon Sellers',
    h1:        'Product Photography for Amazon Sellers',
    aiSummary: 'PhotoYum offers a complete product photography service for Amazon sellers. Packages start at $500 per product and include a white-background hero image, 6–8 lifestyle images, and an infographic — up to 10 images total. No product shipping is required. Delivered within 48–72 hours. Bulk discounts available for 3 or more products.',
    subtext:   'A complete product image service built specifically for Amazon sellers — fast, affordable, and conversion-focused.',
    audience:  ['Amazon FBA private label sellers', 'Amazon FBM sellers', 'Wholesale and resale sellers on Amazon', 'Brand owners launching on Amazon for the first time', 'Sellers with 5+ products looking for bulk pricing'],
    highlights: COMMON_HIGHLIGHTS,
    faqs: [
      { q: 'Do I need a studio for Amazon product photography?', a: 'No. PhotoYum handles everything digitally. You submit your existing product images, renders, or Amazon listing URL — no studio visit or shipping required.' },
      { q: 'What types of images are best for Amazon?',       a: 'Amazon listings perform best with a white-background hero image, 6–8 lifestyle images, and at least one infographic image that explains features or benefits.' },
      { q: 'Do you offer bulk pricing for Amazon sellers with multiple products?', a: 'Yes. Save 10% on 3+ products and 15% on 5+ products. Contact us for custom bulk pricing on 10 or more products.' },
      { q: 'Are images Amazon-compliant?',                    a: 'Yes. All images are created to meet Amazon\'s image requirements, including the pure white background standard for hero images.' },
      ...COMMON_FAQS.slice(2, 4),
    ],
    related: [
      { title: 'Amazon Product Photography',                  href: '/amazon-product-photography' },
      { title: 'Amazon Listing Images',                       href: '/amazon-listing-images' },
      { title: 'Product Videos for Amazon',                   href: '/product-videos-for-amazon' },
      { title: 'Ecommerce Product Photography',               href: '/ecommerce-product-photography' },
    ],
    schemaName: 'Product Photography for Amazon Sellers',
    schemaDesc: 'Full-service product photography for Amazon sellers including hero, lifestyle, and infographic images. Starting at $500 per product, delivered in 48–72 hours.',
  },

  {
    slug:      'ecommerce-product-photography',
    metaTitle: 'Ecommerce Product Photography | PhotoYum — Amazon, Shopify, eBay & More',
    metaDesc:  'Ecommerce product photography for Amazon, Shopify, eBay, websites, and ads. Packages from $500 per product. Hero images, lifestyle images, and infographics delivered in 48–72 hours.',
    badge:     'Ecommerce Product Photography',
    h1:        'Ecommerce Product Photography',
    aiSummary: 'PhotoYum creates ecommerce product images for Amazon, Shopify, eBay, websites, and digital ads. Packages start at $500 per product and include up to 10 product images. Every package includes a white-background hero image, lifestyle images, and an infographic. Images are delivered in all required formats within 48–72 hours.',
    subtext:   'Product images that work across every ecommerce platform — Amazon, Shopify, eBay, websites, and ad campaigns.',
    audience:  ['Multi-platform ecommerce sellers', 'Shopify store owners also selling on Amazon or eBay', 'Ecommerce brands launching new products', 'DTC brands scaling to marketplaces', 'Dropshippers and white-label sellers'],
    highlights: [
      { icon: 'camera',     title: 'Platform-ready hero image',         desc: 'White background, high-resolution. Meets the image requirements of Amazon, eBay, and Shopify.' },
      { icon: 'lifestyle',  title: '6–8 lifestyle images',              desc: 'Show your product in context. Works for listings, product pages, social ads, and campaigns.' },
      { icon: 'infographic',title: 'Infographic / feature image',       desc: 'Visual callouts for features and benefits. Works on all platforms and ad formats.' },
      { icon: 'store',      title: 'Ready for every platform',          desc: 'Files delivered in formats for Amazon, Shopify, eBay, Google Shopping, Meta ads, and more.' },
      { icon: 'revision',   title: '1 round of revisions',              desc: 'We refine every image based on your feedback.' },
      { icon: 'delivery',   title: '48–72 hour turnaround',             desc: 'Full package delivered within 72 hours.' },
    ],
    faqs: [
      { q: 'What ecommerce platforms do you create images for?', a: 'PhotoYum creates product images for Amazon, Shopify, eBay, websites, Google Shopping, Meta ads, TikTok, and any other ecommerce or advertising platform.' },
      { q: 'Do the images meet Amazon\'s requirements?',         a: 'Yes. Hero images are created on a pure white background to meet Amazon\'s main image requirements. They also work on Shopify and eBay.' },
      { q: 'Can I use the same images across multiple stores?',  a: 'Yes. All images are delivered in high-resolution formats suitable for every platform. One package covers your full ecommerce presence.' },
      { q: 'Do you create product images for ads?',              a: 'Yes. Images are optimized for ads including Amazon Sponsored Products, Google Shopping, Meta, and TikTok. Square and landscape crops available.' },
      ...COMMON_FAQS.slice(2, 4),
    ],
    related: [
      { title: 'Amazon Product Photography',                    href: '/amazon-product-photography' },
      { title: 'Shopify Product Photography',                   href: '/shopify-product-photography' },
      { title: 'eBay Product Photography',                      href: '/ebay-product-photography' },
      { title: 'Product Videos for Amazon',                     href: '/product-videos-for-amazon' },
    ],
    schemaName: 'Ecommerce Product Photography',
    schemaDesc: 'Product photography for Amazon, Shopify, eBay, websites, and ads. Up to 10 images per package starting at $500, delivered in 48–72 hours.',
  },

  {
    slug:      'product-videos-for-amazon',
    metaTitle: 'Product Videos for Amazon | PhotoYum — From $200 Add-on',
    metaDesc:  'Short product showcase videos for Amazon A+, TikTok, Reels, and ads. Included in the Image + Video Package ($700) or as a standalone add-on from $200. 48–72 hour delivery.',
    badge:     'Product Videos',
    h1:        'Product Videos for Amazon',
    aiSummary: 'PhotoYum creates short product showcase videos for Amazon A+, Amazon listings, TikTok, Instagram Reels, Facebook ads, and websites. Videos are 8–15 seconds and feature slow pan movements and premium product motion. Videos are included in the Image + Video Package ($700 per product) or available as an add-on from $200. Delivered within 48–72 hours.',
    subtext:   'Short, premium product videos built for Amazon A+, TikTok, Reels, and ads — delivered fast.',
    audience:  ['Amazon sellers using A+ content', 'Brands advertising on TikTok, Reels, or Meta', 'Sellers wanting to add video to their Amazon listing', 'Shopify stores with video sections', 'Ecommerce brands creating social ad content'],
    highlights: [
      { icon: 'video',      title: '8–15 second product showcase video', desc: 'Premium product motion video with slow pan and product movement. Built for attention spans.' },
      { icon: 'store',      title: 'Ready for every platform',           desc: 'Formatted for Amazon A+, TikTok, Instagram Reels, Facebook ads, YouTube, and websites.' },
      { icon: 'camera',     title: 'Images included too',               desc: 'The Image + Video Package includes the full photography set: hero, lifestyle, infographic, and up to 10 images.' },
      { icon: 'package',    title: 'Multiple formats available',         desc: 'Landscape, square, and vertical formats available on request.' },
      { icon: 'revision',   title: '1 round of revisions',              desc: 'We refine the video based on your feedback.' },
      { icon: 'delivery',   title: '48–72 hour turnaround',             desc: 'Video and images delivered together within 72 hours.' },
    ],
    faqs: [
      { q: 'What kind of product videos does PhotoYum create?',   a: 'PhotoYum creates 8–15 second product showcase videos featuring slow pan movement, close-up detail shots, and premium product lighting. Videos are designed to work on Amazon A+, TikTok, Instagram Reels, and ads.' },
      { q: 'How much does a product video cost?',                  a: 'Product videos are included in the Image + Video Package for $700 per product. Standalone videos are available as an add-on from $200.' },
      { q: 'Where can I use the product video?',                   a: 'The video is formatted for Amazon A+ content, Amazon listing, TikTok, Instagram Reels, Facebook ads, YouTube, and any website.' },
      { q: 'Do I need to send the physical product?',              a: 'No. You can submit existing product photos or renders and we create the video from those assets. Shipping is not required.' },
      { q: 'Can I get the video without the image package?',       a: 'Yes. Videos are available as a standalone add-on from $200. Or get the best value with the Image + Video Package at $700 per product, which includes all images plus the video.' },
    ],
    related: [
      { title: 'Amazon Product Photography',                        href: '/amazon-product-photography' },
      { title: 'Product Photography for Amazon Sellers',           href: '/product-photography-for-amazon-sellers' },
      { title: 'Ecommerce Product Photography',                    href: '/ecommerce-product-photography' },
      { title: 'Amazon Listing Images',                             href: '/amazon-listing-images' },
    ],
    schemaName: 'Product Videos for Amazon',
    schemaDesc: 'Short product showcase videos for Amazon A+, TikTok, Reels, and ads. Included in the Image + Video Package ($700) or as an add-on from $200.',
  },

  {
    slug:      'shopify-product-photography',
    metaTitle: 'Shopify Product Photography | PhotoYum — From $500',
    metaDesc:  'Professional product photography for Shopify stores. Hero images, lifestyle photos, and infographics starting at $500 per product. Delivered in 48–72 hours.',
    badge:     'Shopify Product Photography',
    h1:        'Shopify Product Photography',
    aiSummary: 'PhotoYum creates product images for Shopify stores starting at $500 per product. Packages include a white-background hero image, 6–8 lifestyle images, and an infographic — up to 10 images total. Files are delivered in formats optimized for Shopify product pages, collection images, and ads within 48–72 hours.',
    subtext:   'Premium product images for your Shopify store — hero shots, lifestyle images, and infographics that help visitors buy.',
    audience:  ['Shopify store owners', 'DTC ecommerce brands on Shopify', 'Shopify Plus merchants', 'Brands launching new products on Shopify', 'Sellers on both Shopify and Amazon'],
    highlights: [
      { icon: 'camera',     title: 'Hero / main product image',          desc: 'Clean, white-background product image optimized for Shopify product pages.' },
      { icon: 'lifestyle',  title: '6–8 lifestyle images',               desc: 'Contextual images that show your product in use and build buyer confidence.' },
      { icon: 'infographic',title: 'Infographic / feature image',        desc: 'Visual callouts for features and benefits that increase conversions on product pages.' },
      { icon: 'store',      title: 'Shopify-ready file formats',         desc: 'High-resolution images in sizes and formats ready for Shopify upload.' },
      { icon: 'revision',   title: '1 round of revisions',               desc: 'We refine every image based on your feedback.' },
      { icon: 'delivery',   title: '48–72 hour turnaround',              desc: 'Full package delivered within 72 hours.' },
    ],
    faqs: [
      { q: 'Do you create images specifically for Shopify?',       a: 'Yes. All images are delivered in formats and resolutions optimized for Shopify product pages, collection pages, and ad campaigns.' },
      { q: 'What size images does Shopify require?',               a: 'Shopify recommends 2048×2048 pixels for product images. PhotoYum delivers high-resolution images that exceed this.' },
      { q: 'Can I also use these images on Amazon or eBay?',       a: 'Yes. All images are platform-universal. Files are delivered ready for Amazon, eBay, Shopify, websites, and ads.' },
      { q: 'Can I add a product video for my Shopify store?',      a: 'Yes. Product showcase videos are available in the Image + Video Package ($700) or as an add-on from $200.' },
      ...COMMON_FAQS.slice(2, 4),
    ],
    related: [
      { title: 'Ecommerce Product Photography',                    href: '/ecommerce-product-photography' },
      { title: 'eBay Product Photography',                         href: '/ebay-product-photography' },
      { title: 'Amazon Product Photography',                       href: '/amazon-product-photography' },
      { title: 'Product Videos for Amazon',                        href: '/product-videos-for-amazon' },
    ],
    schemaName: 'Shopify Product Photography',
    schemaDesc: 'Professional product photography for Shopify stores including hero images, lifestyle photos, and infographic images. Starting at $500 per product, delivered in 48–72 hours.',
  },

  {
    slug:      'ebay-product-photography',
    metaTitle: 'eBay Product Photography | PhotoYum — From $500',
    metaDesc:  'Professional eBay product photography starting at $500. Hero images, lifestyle photos, and infographics delivered in 48–72 hours. Boost eBay listing performance.',
    badge:     'eBay Product Photography',
    h1:        'eBay Product Photography',
    aiSummary: 'PhotoYum creates product images for eBay listings starting at $500 per product. Packages include a white-background hero image, 6–8 lifestyle images, and an infographic — up to 10 images total. Images meet eBay\'s image guidelines and are delivered within 48–72 hours. Files are also ready for Amazon and Shopify.',
    subtext:   'High-quality product images for eBay listings that attract more buyers and improve your sell-through rate.',
    audience:  ['eBay sellers and power sellers', 'Brands expanding onto eBay', 'Sellers on both eBay and Amazon', 'Wholesale and retail arbitrage sellers on eBay', 'eBay store owners listing new products'],
    highlights: [
      { icon: 'camera',     title: 'White-background hero image',        desc: 'Clean, eBay-compliant main product image on a pure white background.' },
      { icon: 'lifestyle',  title: '6–8 lifestyle images',               desc: 'Contextual images that help eBay buyers understand and trust your product.' },
      { icon: 'infographic',title: 'Infographic / feature image',        desc: 'Visual breakdown of features and benefits that sets your listing apart from competitors.' },
      { icon: 'package',    title: 'Up to 10 images total',              desc: 'eBay allows up to 12 images — we help you fill them with a high-converting mix.' },
      { icon: 'files',      title: 'Platform-ready file formats',        desc: 'Delivered in sizes and formats compatible with eBay, Amazon, Shopify, and ads.' },
      { icon: 'delivery',   title: '48–72 hour turnaround',              desc: 'Full package delivered within 72 hours.' },
    ],
    faqs: [
      { q: 'Do you create images for eBay listings?',              a: 'Yes. PhotoYum creates product images that meet eBay\'s image requirements including the white-background main image standard.' },
      { q: 'How many images does an eBay listing allow?',          a: 'eBay allows up to 12 images per listing. A PhotoYum package includes up to 10 images to fill most of those slots.' },
      { q: 'Can I use the same images for Amazon and Shopify?',    a: 'Yes. All files are delivered in universal formats suitable for eBay, Amazon, Shopify, websites, and ad campaigns.' },
      { q: 'What types of images work best for eBay?',             a: 'White-background hero images, lifestyle context shots, and detail or close-up images tend to perform best on eBay.' },
      ...COMMON_FAQS.slice(2, 4),
    ],
    related: [
      { title: 'Shopify Product Photography',                      href: '/shopify-product-photography' },
      { title: 'Ecommerce Product Photography',                    href: '/ecommerce-product-photography' },
      { title: 'Amazon Product Photography',                       href: '/amazon-product-photography' },
      { title: 'Amazon Listing Images',                             href: '/amazon-listing-images' },
    ],
    schemaName: 'eBay Product Photography',
    schemaDesc: 'Professional product photography for eBay listings including hero images, lifestyle photos, and infographic images. Starting at $500 per product, delivered in 48–72 hours.',
  },
]

export function getServicePage(slug: string): ServicePageData | undefined {
  return servicePages.find((p) => p.slug === slug)
}
