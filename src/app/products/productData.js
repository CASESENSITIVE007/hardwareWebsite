// Central product data module
// Each category contains: id, name, description, icon (string key), products
// Each product now contains: id, name, description, images (array of {id, src, alt}), brands (array of {id,name,logo}), specifications (array of strings)

export const productCategories = [
	



	// Bearings 
	{
		id: 'bearings',
		name: 'Bearings & Bushings',
		description: '20% bearing supplied in India are spurious. We offer a complete range of premium and authentic bearings to meet diverse industrial and automotive needs. Trusted by leading manufacturers and traders, our products ensure durability, precision, and performance. With strong sourcing and reliable supply, we deliver bearings that keep businesses moving.',
	
		icon: 'CubeIcon',
		products: [
			{
				id: 'bearings-ball',
				name: 'Ball Bearings',
				description: 'Low friction deep groove ball bearings for high speed applications.',
				images: [
					// { id: 'bearings-ball-1', src: '/products/bearings/ballbearing/images/bb1.jpeg', alt: 'Ball Bearing primary'},
					{ id: 'bearings-ball-2', src: '/products/bearings/ballbearing/images/bb2.jpeg', alt: 'Ball Bearing alt 1' },
					// { id: 'bearings-ball-3', src: '/products/bearings/ballbearing/images/bb3.jpeg', alt: 'Ball Bearing alt 2' },
					{ id: 'bearings-ball-4', src: '/products/bearings/ballbearing/images/bb4.jpeg', alt: 'Ball Bearing alt 3' },
					// { id: 'bearings-ball-5', src: '/products/bearings/ballbearing/images/bb5.jpeg', alt: 'Ball Bearing alt 4' },
					{ id: 'bearings-ball-6', src: '/products/bearings/ballbearing/images/bb6.jpeg', alt: 'Ball Bearing alt 5' },
				],
				brands: [
					{ id: 'bb1', name: 'SKF', logo: '/products/bearings/ballbearing/brands/bb1.jpeg' },
					{ id: 'bb2', name: 'FAG', logo: '/products/bearings/ballbearing/brands/bb2.jpeg' },
					{ id: 'bb3', name: 'TIMKEN', logo: '/products/bearings/ballbearing/brands/bb3.jpeg' },
					{ id: 'bb4', name: 'NBC', logo: '/products/bearings/ballbearing/brands/bb4.jpeg' },
					{ id: 'bb5', name: 'NSK', logo: '/products/bearings/ballbearing/brands/bb5.jpeg' },
					{ id: 'bb6', name: 'HCH', logo: '/products/bearings/ballbearing/brands/bb6.jpeg' },
				],
				specifications: ['Bore: 20mm', 'ABEC-5', 'Sealed / Open Options']
			},
			{
				id: 'needle-bearings-roller',
				name: 'Needle Roller Bearings',
				description: 'Cylindrical & tapered roller bearings for heavy radial loads.',
				images: [
					{ id: 'needle-bearings-roller-1', src: '/products/bearings/needlerollerbearing/images/nrb1.jpeg', alt: 'needle Bearing primary' },
					{ id: 'needle-bearings-roller-2', src: '/products/bearings/needlerollerbearing/images/nrb2.jpeg', alt: 'Roller Bearing alt 1' },
					// { id: 'needle-bearings-roller-3', src: '/products/bearings/needlerollerbearing/images/nrb3.jpeg', alt: 'Roller Bearing alt 2' },
					// { id: 'needle-bearings-roller-4', src: '/products/bearings/needlerollerbearing/images/nrb4.jpeg', alt: 'Roller Bearing alt 3' },
					
	
				],
				brands: [
					{ id: 'nb1', name: 'IINAA', logo: '/products/bearings/needlerollerbearing/brands/nrb5.jpeg' },
					{ id: 'nb2', name: 'IKO', logo: '/products/bearings/needlerollerbearing/brands/nrb6.jpeg' },
					{ id: 'nb3', name: 'NRB', logo: '/products/bearings/needlerollerbearing/brands/nrb7.jpeg' },
				],
				specifications: ['High Load', 'Precision Ground', 'Heat Treated']
			},
			{
				id: 'pillow-block-bearings',
				name: 'Pillow Block Bearings',
				description: 'Axial load support with minimal friction & wear.',
				images: [
					{ id: 'pillow-block-bearings-1', src: '/products/bearings/pillowblockbearings/images/pbr1.jpeg', alt: 'pillow Bearing primary' },
					{ id: 'pillow-block-bearings-2', src: '/products/bearings/pillowblockbearings/images/pbr2.jpeg', alt: 'pillow Bearing alt 1' },
					{ id: 'pillow-block-bearings-3', src: '/products/bearings/pillowblockbearings/images/pbr3.jpeg', alt: 'pillow Bearing alt 2' },
				],
				brands: [
					{ id: 'pbb1', name: 'SKF', logo: '/products/bearings/pillowblockbearings/brands/b1.jpeg' },
					{ id: 'pbb2', name: 'FYH', logo: '/products/bearings/pillowblockbearings/brands/b2.jpeg' },
					{ id: 'pbb3', name: 'ASAHI', logo: '/products/bearings/pillowblockbearings/brands/b3.jpeg' },
					{ id: 'pbb4', name: 'FK', logo: '/products/bearings/pillowblockbearings/brands/b4.jpeg' },
					{ id: 'pbb5', name: 'FKD', logo: '/products/bearings/pillowblockbearings/brands/b5.jpeg' },
				],
				specifications: ['Axial Loads', 'Hardened Raceways', 'Compact Design']
			},
			{
				id: 'bearings-precision',
				name: 'Precision Bearings',
				description: 'High load capacity in tight radial spaces.',
				images: [
					{ id: 'bearings-precision-1', src: '/products/bearings/PrecisionBearing/images/p.jpeg', alt: 'Needle Bearing primary' },
					// { id: 'bearings-precision-2', src: '/products/bearings/PrecisionBearing/images/p1.jpeg', alt: 'Needle Bearing primary' },
					// { id: 'bearings-precision-3', src: '/products/bearings/PrecisionBearing/images/p2.jpeg', alt: 'Needle Bearing primary' },
					{ id: 'bearings-precision-4', src: '/products/bearings/PrecisionBearing/images/p3.jpeg', alt: 'Needle Bearing primary' },
					// { id: 'bearings-precision-5', src: '/products/bearings/PrecisionBearing/images/p4.jpeg', alt: 'Needle Bearing primary' },
					// { id: 'bearings-precision-6', src: '/products/bearings/PrecisionBearing/images/p5.jpeg', alt: 'Needle Bearing primary' },
					// { id: 'bearings-precision-7', src: '/products/bearings/PrecisionBearing/images/p6.jpeg', alt: 'Needle Bearing primary' },
					{ id: 'bearings-precision-7', src: '/products/bearings/PrecisionBearing/images/p7.jpeg', alt: 'Needle Bearing primary' },
					
				],
				brands: [
					{ id: 'pb1', name: 'FAG', logo: '/products/bearings/PrecisionBearing/brands/b1.jpeg' },
					{ id: 'pb2', name: 'TIMKEN', logo: '/products/bearings/PrecisionBearing/brands/b2.jpeg' },
					{ id: 'pb3', name: 'NTN', logo: '/products/bearings/PrecisionBearing/brands/b3.jpeg' },
					{ id: 'pb4', name: 'NSK', logo: '/products/bearings/PrecisionBearing/brands/b4.jpeg' },
					{ id: 'pb5', name: 'NMB', logo: '/products/bearings/PrecisionBearing/brands/b5.jpeg' },
					{ id: 'pb6', name: 'IINAA', logo: '/products/bearings/PrecisionBearing/brands/b6.jpeg' },
				],
				specifications: ['Slim Profile', 'High Speed', 'Caged / Full Complement']
			},
			{
				id: 'roller-bearings',
				name: 'Roller Bearings',
				description: 'Maintenance-free bushings with low wear surfaces.',
				images: [
					{ id: 'bearings-roller-1', src: '/products/bearings/RollerBearing/images/r1.jpeg', alt: 'roller Bearing primary' },
					{ id: 'bearings-roller-2', src: '/products/bearings/RollerBearing/images/r2.jpeg', alt: 'roller Bearing 1' },
					{ id: 'bearings-roller-3', src: '/products/bearings/RollerBearing/images/r3.jpeg', alt: 'roller Bearing 2' },
					{ id: 'bearings-roller-4', src: '/products/bearings/RollerBearing/images/r4.jpeg', alt: 'roller Bearing 3' },
					// { id: 'bearings-roller-5', src: '/products/bearings/RollerBearing/images/r5.jpeg', alt: 'roller Bearing 4' },
					{ id: 'bearings-roller-6', src: '/products/bearings/RollerBearing/images/r6.jpeg', alt: 'roller Bearing 5' },
					{ id: 'bearings-roller-7', src: '/products/bearings/RollerBearing/images/r7.jpeg', alt: 'roller Bearing 6' },
				
				],
				brands: [
					{ id: 'rb1', name: 'ZKL', logo: '/products/bearings/RollerBearing/brands/b1.jpeg' },
					{ id: 'rb2', name: 'SKF', logo: '/products/bearings/RollerBearing/brands/b2.jpeg' },
					{ id: 'rb3', name: 'FAG', logo: '/products/bearings/RollerBearing/brands/b3.jpeg' },
					{ id: 'rb4', name: 'TIMKEN', logo: '/products/bearings/RollerBearing/brands/b4.jpeg' },
					{ id: 'rb5', name: 'ZWZ', logo: '/products/bearings/RollerBearing/brands/b5.jpeg' },
					{ id: 'rb6', name: 'NSK', logo: '/products/bearings/RollerBearing/brands/b6.jpeg' },
					{ id: 'rb7', name: 'URB', logo: '/products/bearings/RollerBearing/brands/b7.jpeg' },
				],
				specifications: ['Self-Lubricating', 'Shock Resistant', 'Wide Temp Range']
			}
		]
	},

	// Lubricants

	{
		id: 'lubricants',
		name: 'Lubricants & Oils',
		description: 'Do you know that more than 50% bearing fails due to poor or insufficient lubrication. The Original Traders offers a suitable product meeting your needs as per application. We supply high quality lubricants specially formulated to enhance bearing performance and extend equipment life.',
		icon: 'SparklesIcon',
		products: [
			{
				id: 'engineoil',
				name: 'Engine Oils',
				description: '',
				images: [
					{ id: 'lub-1', src: '/products/galaxy/lubricants/engineoil/e1.jpg', alt: 'Lubricant primary' },
					{ id: 'lub-2', src: '/products/galaxy/lubricants/engineoil/e2.jpg', alt: 'Lubricant alt 1' },
					{ id: 'lub-3', src: '/products/galaxy/lubricants/engineoil/e3.jpg', alt: 'Lubricant alt 2' },
					// { id: 'lub-4', src: '/products/lubricants/engineoil/e4.jpg', alt: 'Lubricant alt 3' },
					{ id: 'lub-5', src: '/products/galaxy/lubricants/engineoil/e5.png', alt: 'Lubricant alt 4' },
					{ id: 'lub-6', src: '/products/galaxy/lubricants/engineoil/e6.jpeg', alt: 'Lubricant alt 5' },
				],
				brands: [
					{ id: 'galaxy', name: 'Galaxy', logo: '/logogalaxy.png' },
				],
				specifications: ['Tight Tolerances', 'CNC Machined', 'ISO Certified']
			},
			{
				id: 'grease',
				name: 'Grease',
				description: 'High-performance lubricants for optimal machinery efficiency.',
				images: [
					{ id: 'g-1', src: '/products/galaxy/lubricants/grease/g1.png', alt: 'Assembly primary' },
					{ id: 'g-2', src: '/products/galaxy/lubricants/grease/g2.png', alt: 'Assembly alt 1' },
					{ id: 'g-3', src: '/products/galaxy/lubricants/grease/g3.png', alt: 'Assembly alt 2' },
					{ id: 'g-4', src: '/products/galaxy/lubricants/grease/g4.png', alt: 'Assembly alt 3' },
				],
				brands: [
					{ id: 'galaxy', name: 'Galaxy', logo: '/logogalaxy.png' },
				],
				specifications: ['Plug & Play', 'Factory Tested', 'Traceable Lots']
			},
			{
				id: 'industrialoil',
				name: 'Industrial Oil',
				description: 'General industrial hardware for versatile mechanical use.',
				images: [
					{ id: 'i-1', src: '/products/galaxy/lubricants/industrialoil/i1.png', alt: 'oil primary' },
					{ id: 'i-2', src: '/products/galaxy/lubricants/industrialoil/i2.jpg', alt: 'oil alt 1' },
					{ id: 'i-3', src: '/products/galaxy/lubricants/industrialoil/i3.jpg', alt: 'oil alt 2' },
					{ id: 'i-4', src: '/products/galaxy/lubricants/industrialoil/i4.png', alt: 'oil alt 3' },
					{ id: 'i-5', src: '/products/galaxy/lubricants/industrialoil/i5.png', alt: 'oil alt 4' },
					{ id: 'i-6', src: '/products/galaxy/lubricants/industrialoil/i6.png', alt: 'oil alt 5' },
					{ id: 'i-7', src: '/products/galaxy/lubricants/industrialoil/i7.png', alt: 'oil alt 6' },
					{ id: 'i-8', src: '/products/galaxy/lubricants/industrialoil/i8.png', alt: 'oil alt 7' },
				],
				brands: [
					{ id: 'galaxy', name: 'Galaxy', logo: '/logogalaxy.png' },
				],
				specifications: ['Multiple Sizes', 'High Strength', 'Surface Treated']
			}
		]
	},

	// Spare parts

	{
		id: 'spare_parts',
		name: 'Auto Spare Parts',
		description: 'We deal in a wide range of premium-quality aftermarket auto parts, ensuring reliable performance and cost-effective solutions for every vehicle. Our products are sourced from trusted manufacturers and supplied to leading exporters and distributors across India.',
		icon: 'BoltIcon',
		products: [
			{
				id: 'rubberparts',
				name: 'Rubber Parts',
				description: 'OEM-grade replacement parts ensuring seamless integration and reliability.',
				images: [
					{ id: 'rb-1', src: '/products/spareparts/rb.png', alt: 'Spare Part primary' },
					{ id: 'rb-2', src: '/products/spareparts/rb2.png', alt: 'Spare Part alt 1' },
					{ id: 'rb-3', src: '/products/spareparts/rb3.png', alt: 'Spare Part alt 2' },
					{ id: 'rb-4', src: '/products/spareparts/rb44.png', alt: 'Spare Part alt 3' },
			
					// { id: 'sp1-9', src: '/products/spareparts/sp9.jpeg', alt: 'Spare Part alt 8' },
				],
			
				specifications: ['OEM Fit', 'Hardened Steel', 'Corrosion Resistant']
			},
			{
				id: 'filters',
				name: 'Filters',
				description: 'OEM-grade replacement parts ensuring seamless integration and reliability.',
				images: [
					{ id: 'f1', src: '/products/filters/f1.png', alt: 'Spare Part primary'},
					{ id: 'f2', src: '/products/filters/f2.png', alt: 'Spare Part alt 1'},
					{ id: 'f3', src: '/products/filters/f3.png', alt: 'Spare Part alt 2'},
					{ id: 'f4', src: '/products/filters/f4.png', alt: 'Spare Part alt 3'},
				
					// { id: 'sp1-9', src: '/products/spareparts/sp9.jpeg', alt: 'Spare Part alt 8' },
				],
				
				
				specifications: ['OEM Fit', 'Hardened Steel', 'Corrosion Resistant']
			},
			{
				id: 'break',
				name: 'Break Parts',
				description: 'OEM-grade replacement parts ensuring seamless integration and reliability.',
				images: [
					{ id: 'b1', src: '/products/break/b1.png', alt: 'Spare Part primary' },
					{ id: 'b2', src: '/products/break/b2.png', alt: 'Spare Part alt 1' },
					{ id: 'b3', src: '/products/break/b3.png', alt: 'Spare Part alt 2' },
					{ id: 'b4', src: '/products/break/b4.png', alt: 'Spare Part alt 3' },
					{ id: 'b5', src: '/products/break/b5.png', alt: 'Spare Part alt 4' },
					{ id: 'b6', src: '/products/break/b6.png', alt: 'Spare Part alt 5' },
					{ id: 'b7', src: '/products/break/b7.png', alt: 'Spare Part alt 6' },
					{ id: 'b8', src: '/products/break/b8.png', alt: 'Spare Part alt 7' },
					// { id: 'sp1-9', src: '/products/spareparts/sp9.jpeg', alt: 'Spare Part alt 8' },
				],
				
				specifications: ['OEM Fit', 'Hardened Steel', 'Corrosion Resistant']
			},
			{
				id: 'clutch',
				name: 'Clutch Parts',
				description: 'OEM-grade replacement parts ensuring seamless integration and reliability.',
				images: [
					{ id: 'c1', src: '/products/clutch/c1.png', alt: 'Spare Part primary' },
					{ id: 'c2', src: '/products/clutch/c2.png', alt: 'Spare Part alt 1' },
				
					// { id: 'sp1-9', src: '/products/spareparts/sp9.jpeg', alt: 'Spare Part alt 8' },
				],
				
				specifications: ['OEM Fit', 'Hardened Steel', 'Corrosion Resistant']
			},
			{
				id: 'other',
				name: 'Other Parts',
				description: 'OEM-grade replacement parts ensuring seamless integration and reliability.',
				images: [
					{ id: 'o1', src: '/products/other/o1.png', alt: 'Spare Part primary' },
					{ id: 'o2', src: '/products/other/o2.png', alt: 'Spare Part alt 1' },
					{ id: 'o3', src: '/products/other/o3.png', alt: 'Spare Part alt 2' },
					{ id: 'o4', src: '/products/other/o4.png', alt: 'Spare Part alt 3' },
					{ id: 'o5', src: '/products/other/o5.png', alt: 'Spare Part alt 4' },
					{ id: 'o6', src: '/products/other/o6.png', alt: 'Spare Part alt 5' },
					{ id: 'o7', src: '/products/other/o7.png', alt: 'Spare Part alt 6' },
					{ id: 'o8', src: '/products/other/o8.png', alt: 'Spare Part alt 7' },
					{ id: 'o9', src: '/products/other/o9.png', alt: 'Spare Part alt 7' },
					// { id: 'sp1-9', src: '/products/spareparts/sp9.jpeg', alt: 'Spare Part alt 8' },
				],
			
				
				specifications: ['OEM Fit', 'Hardened Steel', 'Corrosion Resistant']
			},
		]
	},

		// Galaxy products

	{
		id: 'galaxy',
		name: 'Galaxy',
		description: '&quot;Galaxy stands for reliability, durability, and value in auto spare parts. After strong success in Africa &amp; Gulf Countries, we are proud to expand our footprint in India.&quot; The Original Trader is the authorized channel partner to promote this brand in India.',
		icon: 'ShieldStarIcon',
		products: [
			{
				id: 'galaxy-engineoil',
				name: 'Engine Oils',
				description: 'High-performance lubricants for optimal machinery efficiency.',
				images: [
					{ id: 'galaxy-lub-1', src: '/products/galaxy/lubricants/engineoil/e1.jpg', alt: 'Lubricant primary' },
					{ id: 'galaxy-lub-2', src: '/products/galaxy/lubricants/engineoil/e2.jpg', alt: 'Lubricant alt 1' },
					{ id: 'galaxy-lub-3', src: '/products/galaxy/lubricants/engineoil/e3.jpg', alt: 'Lubricant alt 2' },
					// { id: 'galaxy-lub-4', src: '/products/lubricants/engineoil/e4.jpg', alt: 'Lubricant alt 3' },
					{ id: 'galaxy-lub-5', src: '/products/galaxy/lubricants/engineoil/e5.png', alt: 'Lubricant alt 4' },
					{ id: 'galaxy-lub-6', src: '/products/galaxy/lubricants/engineoil/e6.jpeg', alt: 'Lubricant alt 5' },
				],
				brands: [
					{ id: 'galaxy', name: 'Galaxy', logo: '/logogalaxy.png' },
				],
				specifications: ['Tight Tolerances', 'CNC Machined', 'ISO Certified']
			},
			{
				id: 'galaxy-grease',
				name: 'Grease',
				description: 'High-performance lubricants for optimal machinery efficiency.',
				images: [
					{ id: 'galaxy-g-1', src: '/products/galaxy/lubricants/grease/g1.png', alt: 'Assembly primary' },
					{ id: 'galaxy-g-2', src: '/products/galaxy/lubricants/grease/g2.png', alt: 'Assembly alt 1' },
					{ id: 'galaxy-g-3', src: '/products/galaxy/lubricants/grease/g3.png', alt: 'Assembly alt 2' },
					{ id: 'galaxy-g-4', src: '/products/galaxy/lubricants/grease/g4.png', alt: 'Assembly alt 3' },
				],
				brands: [
					{ id: 'galaxy', name: 'Galaxy', logo: '/logogalaxy.png' },
				],
				specifications: ['Plug & Play', 'Factory Tested', 'Traceable Lots']
			},
			{
				id: 'galaxy-industrialoil',
				name: 'Industrial Oil',
				description: 'General industrial hardware for versatile mechanical use.',
				images: [
					{ id: 'galaxy-i-1', src: '/products/galaxy/lubricants/industrialoil/i1.png', alt: 'oil primary' },
					{ id: 'galaxy-i-2', src: '/products/galaxy/lubricants/industrialoil/i2.jpg', alt: 'oil alt 1' },
					{ id: 'galaxy-i-3', src: '/products/galaxy/lubricants/industrialoil/i3.jpg', alt: 'oil alt 2' },
					{ id: 'galaxy-i-4', src: '/products/galaxy/lubricants/industrialoil/i4.png', alt: 'oil alt 3' },
					{ id: 'galaxy-i-5', src: '/products/galaxy/lubricants/industrialoil/i5.png', alt: 'oil alt 4' },
					{ id: 'galaxy-i-6', src: '/products/galaxy/lubricants/industrialoil/i6.png', alt: 'oil alt 5' },
					{ id: 'galaxy-i-7', src: '/products/galaxy/lubricants/industrialoil/i7.png', alt: 'oil alt 6' },
					{ id: 'galaxy-i-8', src: '/products/galaxy/lubricants/industrialoil/i8.png', alt: 'oil alt 7' },
				],
				brands: [
					{ id: 'galaxy', name: 'Galaxy', logo: '/logogalaxy.png' },
				],
				specifications: ['Multiple Sizes', 'High Strength', 'Surface Treated']
			},
			{
				id: 'galaxy-spare-parts',
				name: 'Spare Parts',
				description: 'OEM-grade replacement parts ensuring seamless integration and reliability.',
				images: [
					{ id: 'galaxy-sp1-1', src: '/products/galaxy/spareparts/sp1.jpeg', alt: 'galaxy Spare Part primary' },
					{ id: 'galaxy-sp1-2', src: '/products/galaxy/spareparts/sp2.jpeg', alt: 'galaxy Spare Part alt 1' },
					{ id: 'galaxy-sp1-3', src: '/products/galaxy/spareparts/sp3.jpeg', alt: 'galaxy Spare Part alt 2' },
					{ id: 'galaxy-sp1-4', src: '/products/galaxy/spareparts/sp4.png', alt: 'galaxy Spare Part alt 3' },
					{ id: 'galaxy-sp1-5', src: '/products/galaxy/spareparts/sp5.png', alt: ' galaxy Spare Part alt 4' },
					{ id: 'galaxy-sp1-6', src: '/products/galaxy/spareparts/sp6.png', alt: 'galaxy Spare Part alt 5' },
					{ id: 'galaxy-sp1-7', src: '/products/galaxy/spareparts/sp7.png', alt: 'galaxy Spare Part alt 6' },
					{ id: 'galaxy-sp1-8', src: '/products/galaxy/spareparts/sp8.png', alt: 'galaxy Spare Part alt 7' },
					// { id: 'galaxy-sp1-9', src: '/products/spareparts/sp9.jpeg', alt: 'galaxy Spare Part alt 8' },
				],
				brands: [
					{ id: 'galaxy', name: 'Galaxy', logo: '/logogalaxy.png' },
				],
				specifications: ['OEM Fit', 'Hardened Steel', 'Corrosion Resistant']
			}
			
		]
	},
];

export default productCategories;
