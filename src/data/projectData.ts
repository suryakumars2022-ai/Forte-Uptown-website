export interface Amenity {
  id: string;
  title: string;
  category: 'Sports & Fitness' | 'Security & Infrastructure' | 'Lifestyle & Community' | 'Eco & Greenery';
  description: string;
  icon: string;
  highlight?: boolean;
}

export interface LandmarkDistance {
  name: string;
  category: 'Transit' | 'Civic & Legal' | 'Healthcare' | 'Education' | 'Town Centre';
  distance: string;
  time: string;
  description: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'sports' | 'layout' | 'villas' | 'amenities';
  imageUrl: string;
  caption: string;
  aspect?: 'landscape' | 'portrait' | 'wide';
}

export interface PlotConfiguration {
  id: string;
  type: string;
  sizeInCents: number;
  approxSqFt: number;
  frontage: string;
  suitableFor: string;
  status: 'Available' | 'Fast Selling' | 'Limited';
}

export const PROJECT_DETAILS = {
  name: 'Forte Uptown',
  tagline: 'Theni’s Premier Gated Community & Luxury Villa Plots',
  heroHeadline: 'Discover a Better Way to Live in Theni.',
  heroSubtitle: 'RERA-registered residential villa plots nestled along Lakshmipuram with contemporary infrastructure, 24/7 security, and the integrated Forte Sports Town complex.',
  
  // Verified Legal & Registration Details
  reraRegistrationNumber: 'TN/21/Layout/3936/2023',
  reraApprovalDate: '25/10/2023',
  layoutExtensionRef: 'TNRERA/21/LO/1523/2026',
  promoters: 'P. Radhika Parthiban & R. Parthiban',
  
  // Location
  village: 'Thamaraikulam Bit-2 Village',
  panchayat: 'Lakshmipuram Panchayat',
  taluk: 'Periyakulam Taluk',
  district: 'Theni District',
  state: 'Tamil Nadu',
  pincode: '625531',
  fullAddress: 'Forte Uptown, Lakshmipuram (Thamaraikulam), Periyakulam Road, Theni District, Tamil Nadu 625531',
  googleMapsQuery: 'Forte+Uptown+Lakshmipuram+Theni',
  googleMapsEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15712.562726359218!2d77.5303254!3d10.0526058!2m3!1f0!2f0!3f0!3m2!1i1024!2f786!4m3!3e0!4m5!1s0x3b0714b62db4a11b%3A0xb304b4d7fca13f27!2sLakshmipuram%2C%20Tamil%20Nadu!3m2!1d10.0526!2d77.5303!5e0!3m2!1sen!2sin!4v1713000000000!5m2!1sen!2sin',
  googleMapsDirectionsUrl: 'https://maps.google.com/?q=Forte+Uptown+Lakshmipuram+Theni',
  
  // Verified Contact Details
  primaryPhone: '+91 73737 32640',
  secondaryPhones: ['+91 73737 32624', '+91 73737 32627'],
  whatsappNumber: '917373732640',
  officialEmail: 'enquiry@forteuptown.com',
  officialWebsite: 'www.forteuptown.com',
  instagramHandle: '@forte_uptown',
  instagramUrl: 'https://www.instagram.com/forte_uptown/',
  
  // Key Metrics
  metrics: [
    { label: 'RERA Approved', value: '100%', sub: 'TN/21/Layout/3936/2023' },
    { label: 'To Theni Bus Stand', value: '15 Mins', sub: 'Fast NH connectivity' },
    { label: 'Sports Arena', value: 'Multi-Sport', sub: 'Forte Sports Town' },
    { label: 'Security', value: '24/7', sub: 'CCTV & Gated Entrance' },
  ],
};

export const AMENITIES: Amenity[] = [
  {
    id: 'sports-hub',
    title: 'Forte Sports Town',
    category: 'Sports & Fitness',
    description: 'Theni district’s signature sports complex with 7-a-side football turf, box cricket, astro-turf cricket practice nets, basketball, tennis, and skating rink.',
    icon: 'Trophy',
    highlight: true,
  },
  {
    id: 'gated-security',
    title: '24/7 Gated Security & CCTV',
    category: 'Security & Infrastructure',
    description: 'Grand architectural entrance portal with controlled boom barriers, round-the-clock security personnel, and comprehensive peripheral CCTV surveillance.',
    icon: 'ShieldCheck',
    highlight: true,
  },
  {
    id: 'clubhouse',
    title: 'Clubhouse & Social Lounge',
    category: 'Lifestyle & Community',
    description: 'Elegantly designed community pavilion and clubhouse for celebrations, social get-togethers, and resident leisure activities.',
    icon: 'Building2',
  },
  {
    id: 'blacktop-roads',
    title: 'Wide Blacktop Avenues',
    category: 'Security & Infrastructure',
    description: '30-foot and 40-foot wide asphalt blacktop roads with paver-lined pedestrian walkways and stormwater curb channels.',
    icon: 'Compass',
  },
  {
    id: 'underground-utilities',
    title: 'Underground Drainage & Water',
    category: 'Security & Infrastructure',
    description: 'Underground sanitary drainage (UGD) network, rainwater harvesting pits, and individual potable water connection lines laid to every plot boundary.',
    icon: 'Droplets',
  },
  {
    id: 'landscaped-parks',
    title: 'Landscaped Botanical Parks',
    category: 'Eco & Greenery',
    description: 'Manicured gardens, shade-giving avenue trees, flowering shrubs, and quiet reflexology pathways framed by mountain panoramas.',
    icon: 'Trees',
  },
  {
    id: 'kids-play',
    title: 'Children’s Adventure Play Area',
    category: 'Lifestyle & Community',
    description: 'Safe, dedicated playground equipped with modern swings, slides, climbers, and soft turf surfaces designed for kids of all ages.',
    icon: 'Smile',
  },
  {
    id: 'solar-lighting',
    title: 'Solar LED Street Illumination',
    category: 'Eco & Greenery',
    description: 'Automated solar and energy-efficient LED streetlamps illuminating internal avenues, ensuring continuous night-time safety.',
    icon: 'SunMedium',
  },
];

export const SPORTS_FACILITIES = [
  {
    title: '7-A-Side Football Turf',
    description: 'FIFA-grade synthetic turf pitch with floodlights for day-and-night matches and community leagues.',
    image: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&w=800&q=80',
    tag: 'FIFA Grade Synthetic Turf',
  },
  {
    title: 'Box Cricket & Astro Nets',
    description: 'High-bounce enclosed box cricket zone plus professional multi-lane astro-turf practice batting nets.',
    image: 'https://images.unsplash.com/photo-1531415074968-036ba1b575da?auto=format&fit=crop&w=800&q=80',
    tag: 'Box Cricket & Nets',
  },
  {
    title: 'Basketball & Tennis Courts',
    description: 'Multi-sport outdoor hard court facilities for competitive tennis and full-court basketball training.',
    image: 'https://images.unsplash.com/photo-1519766304817-4f37bda74a29?auto=format&fit=crop&w=800&q=80',
    tag: 'Hard Court Sports',
  },
  {
    title: 'Roller Skating Rink & Fitness',
    description: 'Smooth polished outdoor skating rink for kids and youth, along with open-air functional fitness stations.',
    image: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&w=800&q=80',
    tag: 'Skating & Calisthenics',
  },
];

export const LANDMARK_DISTANCES: LandmarkDistance[] = [
  {
    name: 'Theni District Court',
    category: 'Civic & Legal',
    distance: '1.2 km',
    time: '3 Mins',
    description: 'Located conveniently within Lakshmipuram, establishing this precinct as a key administrative hub.',
  },
  {
    name: 'Periyakulam Town Center',
    category: 'Town Centre',
    distance: '6.5 km',
    time: '8 Mins',
    description: 'Bustling traditional town center with historic bazaars, banks, and commercial establishments.',
  },
  {
    name: 'Theni New Bus Stand',
    category: 'Transit',
    distance: '11.0 km',
    time: '15 Mins',
    description: 'Theni’s primary regional transit junction connecting Madurai, Dindigul, and Kerala state routes.',
  },
  {
    name: 'Theni Railway Station',
    category: 'Transit',
    distance: '13.5 km',
    time: '18 Mins',
    description: 'Revamped broad-gauge rail connectivity to Madurai Junction, Chennai, and South Indian cities.',
  },
  {
    name: 'Theni Govt. Medical College Hospital',
    category: 'Healthcare',
    distance: '17.0 km',
    time: '22 Mins',
    description: 'Premier tertiary multi-specialty government medical college hospital located at K. Vilakku.',
  },
  {
    name: 'Kalvi International Public School',
    category: 'Education',
    distance: '4.2 km',
    time: '6 Mins',
    description: 'Reputed CBSE educational institution catering to premier schooling in the immediate vicinity.',
  },
  {
    name: 'Foothills of Western Ghats',
    category: 'Civic & Legal',
    distance: 'Immediate',
    time: '0 Mins',
    description: 'Breathtaking backdrop offering scenic mountain vistas, cooler micro-climate, and fresh unpolluted air.',
  },
];

export const PLOT_CONFIGURATIONS: PlotConfiguration[] = [
  {
    id: 'plot-compact',
    type: 'Boutique Villa Plot',
    sizeInCents: 2.5,
    approxSqFt: 1089,
    frontage: '30 ft Road Facing',
    suitableFor: 'Compact 2BHK/3BHK independent modern villa with private porch',
    status: 'Fast Selling',
  },
  {
    id: 'plot-standard',
    type: 'Classic Residential Villa Plot',
    sizeInCents: 3.5,
    approxSqFt: 1525,
    frontage: '30 ft / 40 ft Road Facing',
    suitableFor: 'Spacious 3BHK duplex villa with landscaped garden & car parking',
    status: 'Available',
  },
  {
    id: 'plot-premium',
    type: 'Signature Luxury Villa Plot',
    sizeInCents: 5.0,
    approxSqFt: 2178,
    frontage: 'Corner / 40 ft Avenue Facing',
    suitableFor: 'Grand 4BHK luxury residence with private lawn, deck & multi-car garage',
    status: 'Available',
  },
  {
    id: 'plot-estate',
    type: 'Estate Villa Plot',
    sizeInCents: 7.0,
    approxSqFt: 3049,
    frontage: 'Prime Park & Mountain Facing',
    suitableFor: 'Bespoke custom family estate with lavish outdoor entertaining pavilion',
    status: 'Limited',
  },
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'gal-entrance',
    title: 'Grand Gated Entrance Concept',
    category: 'layout',
    imageUrl: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
    caption: 'Architectural gated archway with 24/7 security guardhouse and landscaped entryway.',
    aspect: 'wide',
  },
  {
    id: 'gal-football',
    title: 'Forte Sports Town Turf',
    category: 'sports',
    imageUrl: 'https://images.unsplash.com/photo-1529900248461-5326a27e0258?auto=format&fit=crop&w=1000&q=80',
    caption: 'High-performance synthetic grass turf for 7-a-side football and cricket under floodlights.',
    aspect: 'landscape',
  },
  {
    id: 'gal-villa-modern',
    title: 'Contemporary Villa Architecture',
    category: 'villas',
    imageUrl: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1000&q=80',
    caption: 'Inspirational tropical-modern villa elevation designed for abundant natural light.',
    aspect: 'landscape',
  },
  {
    id: 'gal-cricket',
    title: 'Box Cricket & Practice Nets',
    category: 'sports',
    imageUrl: 'https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?auto=format&fit=crop&w=1000&q=80',
    caption: 'Dedicated batting practice nets and enclosed cricket zone for sports enthusiasts.',
    aspect: 'portrait',
  },
  {
    id: 'gal-avenue',
    title: 'Wide Tree-Lined Avenues',
    category: 'layout',
    imageUrl: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=1000&q=80',
    caption: 'Paved blacktop internal avenues with pedestrian curbs and green plantations.',
    aspect: 'landscape',
  },
  {
    id: 'gal-clubhouse',
    title: 'Residents Club & Lounge',
    category: 'amenities',
    imageUrl: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1000&q=80',
    caption: 'Refined community pavilion designed for private celebrations and leisure.',
    aspect: 'landscape',
  },
  {
    id: 'gal-nature',
    title: 'Western Ghats Scenic Foothills',
    category: 'layout',
    imageUrl: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1000&q=80',
    caption: 'Panoramic views of the Western Ghats mountain range framing the residential community.',
    aspect: 'wide',
  },
  {
    id: 'gal-kids',
    title: 'Children’s Play Arena',
    category: 'amenities',
    imageUrl: 'https://images.unsplash.com/photo-1587654780291-39c9404d746b?auto=format&fit=crop&w=1000&q=80',
    caption: 'Safe, dedicated outdoor play spaces for children within secure community perimeters.',
    aspect: 'landscape',
  },
];

export const WHY_CHOOSE_REASONS = [
  {
    number: '01',
    title: 'Verified RERA Approval',
    description: '100% legal clarity and peace of mind with formal Tamil Nadu RERA layout approval (Registration No: TN/21/Layout/3936/2023). Clear titles and bank-loan eligible documentation.',
  },
  {
    number: '02',
    title: 'Exclusive Sports Town Ecosystem',
    description: 'No other residential layout in Theni offers an integrated multi-sport infrastructure like Forte Sports Town, giving your family instant access to football turf, cricket nets, tennis, and skating.',
  },
  {
    number: '03',
    title: 'Prime Growth Corridor on NH-183',
    description: 'Strategically located in Lakshmipuram along the Theni-Periyakulam highway, right beside the Theni District Court. Enjoy fast 15-minute commute times to Theni New Bus Stand.',
  },
  {
    number: '04',
    title: 'Scenic Western Ghats Foothills',
    description: 'Wake up to crisp mountain air and panoramic green vistas. Enjoy a serene residential retreat away from congested city corridors while remaining minutes from essential urban hubs.',
  },
  {
    number: '05',
    title: 'Underground Utilities & Wide Roads',
    description: 'Future-ready planned infrastructure with underground drainage (UGD), individual water connections, solar LED street lamps, and wide 30ft/40ft internal blacktop roads.',
  },
  {
    number: '06',
    title: 'True Gated Community Security',
    description: 'A protected environment where children play freely and morning walks are tranquil. 24/7 security booth, monitored entrance arch, and perimeter CCTV coverage.',
  },
];
