// Central product data module
// Each category contains: id, name, description, icon (string key), products
// Each product now contains: id, name, description, images (array of {id, src, alt}), brands (array of {id,name,logo}), specifications (array of strings)

export const productCategories = [
	



	// Bearings 
	{
		id: 'bearings',
		name: 'Bearings & Bushings',
		description: 'Precision bearings for smooth, efficient and reliable motion.',
		icon: 'CubeIcon',
		products: [
			{
				id: 'bearings-ball',
				name: 'Ball Bearings',
				description: 'Low friction deep groove ball bearings for high speed applications.',
				images: [
					{ id: 'bearings-ball-1', src: '/products/bearings/ballbearing/images/bb1.jpeg', alt: 'Ball Bearing primary' },
					{ id: 'bearings-ball-2', src: '/products/bearings/ballbearing/images/bb2.jpeg', alt: 'Ball Bearing alt 1' },
					{ id: 'bearings-ball-3', src: '/products/bearings/ballbearing/images/bb3.jpeg', alt: 'Ball Bearing alt 2' },
					{ id: 'bearings-ball-4', src: '/products/bearings/ballbearing/images/bb4.jpeg', alt: 'Ball Bearing alt 3' },
					{ id: 'bearings-ball-5', src: '/products/bearings/ballbearing/images/bb5.jpeg', alt: 'Ball Bearing alt 4' },
					{ id: 'bearings-ball-6', src: '/products/bearings/ballbearing/images/bb6.jpeg', alt: 'Ball Bearing alt 5' },
				],
				brands: [
					{ id: 'bb1', name: 'FAG', logo: '/products/bearings/ballbearing/brands/bb1.jpeg' },
					{ id: 'bb2', name: 'NSK', logo: '/products/bearings/ballbearing/brands/bb2.jpeg' },
					{ id: 'bb3', name: 'NBC', logo: '/products/bearings/ballbearing/brands/bb3.jpeg' },
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
					{ id: 'needle-bearings-roller-3', src: '/products/bearings/needlerollerbearing/images/nrb3.jpeg', alt: 'Roller Bearing alt 2' },
					{ id: 'needle-bearings-roller-4', src: '/products/bearings/needlerollerbearing/images/nrb4.jpeg', alt: 'Roller Bearing alt 3' },
					{ id: 'needle-bearings-roller-5', src: '/products/bearings/needlerollerbearing/images/nrb5.jpeg', alt: 'Roller Bearing alt 4' },
					{ id: 'needle-bearings-roller-6', src: '/products/bearings/needlerollerbearing/images/nrb6.jpeg', alt: 'Roller Bearing alt 5' },
					{ id: 'needle-bearings-roller-7', src: '/products/bearings/needlerollerbearing/images/nrb7.jpeg', alt: 'Roller Bearing alt 6' },
				],
				brands: [
					{ id: 'bb1', name: 'FAG', logo: '/products/bearings/ballbearing/brands/bb1.jpeg' },
					{ id: 'bb2', name: 'NSK', logo: '/products/bearings/ballbearing/brands/bb2.jpeg' },
					{ id: 'bb3', name: 'NBC', logo: '/products/bearings/ballbearing/brands/bb3.jpeg' },
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
					{ id: 'bb1', name: 'FAG', logo: '/products/bearings/ballbearing/brands/bb1.jpeg' },
					{ id: 'bb2', name: 'NSK', logo: '/products/bearings/ballbearing/brands/bb2.jpeg' },
					{ id: 'bb3', name: 'NBC', logo: '/products/bearings/ballbearing/brands/bb3.jpeg' },
				],
				specifications: ['Axial Loads', 'Hardened Raceways', 'Compact Design']
			},
			{
				id: 'bearings-precision',
				name: 'Precision Bearings',
				description: 'High load capacity in tight radial spaces.',
				images: [
					{ id: 'bearings-precision-1', src: '/products/bearings/PrecisionBearing/images/p.jpeg', alt: 'Needle Bearing primary' },
					{ id: 'bearings-precision-2', src: '/products/bearings/PrecisionBearing/images/p1.jpeg', alt: 'Needle Bearing primary' },
					{ id: 'bearings-precision-3', src: '/products/bearings/PrecisionBearing/images/p2.jpeg', alt: 'Needle Bearing primary' },
					{ id: 'bearings-precision-4', src: '/products/bearings/PrecisionBearing/images/p3.jpeg', alt: 'Needle Bearing primary' },
					{ id: 'bearings-precision-5', src: '/products/bearings/PrecisionBearing/images/p4.jpeg', alt: 'Needle Bearing primary' },
					{ id: 'bearings-precision-6', src: '/products/bearings/PrecisionBearing/images/p5.jpeg', alt: 'Needle Bearing primary' },
					{ id: 'bearings-precision-7', src: '/products/bearings/PrecisionBearing/images/p6.jpeg', alt: 'Needle Bearing primary' },
					{ id: 'bearings-precision-8', src: '/products/bearings/PrecisionBearing/images/p7.jpeg', alt: 'Needle Bearing primary' },

				],
				brands: [
					{ id: 'bb1', name: 'FAG', logo: '/products/bearings/ballbearing/brands/bb1.jpeg' },
					{ id: 'bb2', name: 'NSK', logo: '/products/bearings/ballbearing/brands/bb2.jpeg' },
					{ id: 'bb3', name: 'NBC', logo: '/products/bearings/ballbearing/brands/bb3.jpeg' },
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
					{ id: 'bearings-roller-5', src: '/products/bearings/RollerBearing/images/r5.jpeg', alt: 'roller Bearing 4' },
					{ id: 'bearings-roller-6', src: '/products/bearings/RollerBearing/images/r6.jpeg', alt: 'roller Bearing 5' },
					{ id: 'bearings-roller-7', src: '/products/bearings/RollerBearing/images/r7.jpeg', alt: 'roller Bearing 6' },
				
				],
				brands: [
					{ id: 'bb1', name: 'FAG', logo: '/products/bearings/ballbearing/brands/bb1.jpeg' },
					{ id: 'bb2', name: 'NSK', logo: '/products/bearings/ballbearing/brands/bb2.jpeg' },
					{ id: 'bb3', name: 'NBC', logo: '/products/bearings/ballbearing/brands/bb3.jpeg' },
				],
				specifications: ['Self-Lubricating', 'Shock Resistant', 'Wide Temp Range']
			}
		]
	},

	// Lubricants

	{
		id: 'lubricants',
		name: 'Lubricants & Oils',
		description: 'Advanced lubrication solutions extending component life.',
		icon: 'SparklesIcon',
		products: [
			{
				id: 'engineoil',
				name: 'Engine Oils',
				description: 'High-performance lubricants for optimal machinery efficiency.',
				images: [
					{ id: 'galaxy-lub-1', src: '/products/lubricants/engineoil/e1.jpg', alt: 'Lubricant primary' },
					{ id: 'galaxy-lub-2', src: '/products/lubricants/engineoil/e2.jpg', alt: 'Lubricant alt 1' },
					{ id: 'galaxy-lub-3', src: '/products/lubricants/engineoil/e3.jpg', alt: 'Lubricant alt 2' },
					{ id: 'galaxy-lub-4', src: '/products/lubricants/engineoil/e4.jpg', alt: 'Lubricant alt 3' },
					{ id: 'galaxy-lub-5', src: '/products/lubricants/engineoil/e5.png', alt: 'Lubricant alt 4' },
					{ id: 'galaxy-lub-6', src: '/products/lubricants/engineoil/e6.jpeg', alt: 'Lubricant alt 5' },
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
					{ id: 'galaxy-g-1', src: '/products/lubricants/grease/g1.jpg', alt: 'Assembly primary' },
					{ id: 'galaxy-g-2', src: '/products/lubricants/grease/g2.jpg', alt: 'Assembly alt 1' },
					{ id: 'galaxy-g-3', src: '/products/lubricants/grease/g3.jpg', alt: 'Assembly alt 2' },
					{ id: 'galaxy-g-4', src: '/products/lubricants/grease/g4.jpg', alt: 'Assembly alt 3' },
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
					{ id: 'galaxy-i-1', src: '/products/lubricants/industrialoil/i1.png', alt: 'oil primary' },
					{ id: 'galaxy-i-2', src: '/products/lubricants/industrialoil/i2.jpg', alt: 'oil alt 1' },
					{ id: 'galaxy-i-3', src: '/products/lubricants/industrialoil/i3.jpg', alt: 'oil alt 2' },
					{ id: 'galaxy-i-4', src: '/products/lubricants/industrialoil/i4.png', alt: 'oil alt 3' },
					{ id: 'galaxy-i-5', src: '/products/lubricants/industrialoil/i5.png', alt: 'oil alt 4' },
					{ id: 'galaxy-i-6', src: '/products/lubricants/industrialoil/i6.png', alt: 'oil alt 5' },
					{ id: 'galaxy-i-7', src: '/products/lubricants/industrialoil/i7.png', alt: 'oil alt 6' },
					{ id: 'galaxy-i-8', src: '/products/lubricants/industrialoil/i8.png', alt: 'oil alt 7' },
				],
				brands: [
					{ id: 'galaxy', name: 'Galaxy', logo: '/logogalaxy.png' },
				],
				specifications: ['Multiple Sizes', 'High Strength', 'Surface Treated']
			}
		]
	},

	// fastners

	{
		id: 'spare_parts',
		name: 'Auto Spare Parts',
		description: 'Reliable fastening solutions for structural integrity.',
		icon: 'BoltIcon',
		products: [
			{
				id: 'galaxy-spare-parts',
				name: 'Spare Parts',
				description: 'OEM-grade replacement parts ensuring seamless integration and reliability.',
				images: [
					{ id: 'galaxy-sp1-1', src: '/products/spareparts/sp1.jpeg', alt: 'Spare Part primary' },
					{ id: 'galaxy-sp1-2', src: '/products/spareparts/sp2.jpeg', alt: 'Spare Part alt 1' },
					{ id: 'galaxy-sp1-3', src: '/products/spareparts/sp3.jpeg', alt: 'Spare Part alt 2' },
					{ id: 'galaxy-sp1-4', src: '/products/spareparts/sp4.png', alt: 'Spare Part alt 3' },
					{ id: 'galaxy-sp1-5', src: '/products/spareparts/sp5.png', alt: 'Spare Part alt 4' },
					{ id: 'galaxy-sp1-6', src: '/products/spareparts/sp6.png', alt: 'Spare Part alt 5' },
					{ id: 'galaxy-sp1-7', src: '/products/spareparts/sp7.png', alt: 'Spare Part alt 6' },
					{ id: 'galaxy-sp1-8', src: '/products/spareparts/sp8.png', alt: 'Spare Part alt 7' },
					{ id: 'galaxy-sp1-9', src: '/products/spareparts/sp9.jpeg', alt: 'Spare Part alt 8' },
				],
				brands: [
					{ id: 'galaxy', name: 'Galaxy', logo: '/logogalaxy.png' },
				],
				specifications: ['OEM Fit', 'Hardened Steel', 'Corrosion Resistant']
			}
		]
	},

		// Galaxy products

	{
		id: 'galaxy',
		name: 'Galaxy',
		description: 'High performance precision spare parts and assemblies engineered for durability.',
		icon: 'ShieldStarIcon',
		products: [
			{
				id: 'galaxy-spare-parts',
				name: 'Spare Parts',
				description: 'OEM-grade replacement parts ensuring seamless integration and reliability.',
				images: [
					{ id: 'galaxy-sp1-1', src: '/products/spareparts/sp1.jpeg', alt: 'Spare Part primary' },
					{ id: 'galaxy-sp1-2', src: '/products/spareparts/sp2.jpeg', alt: 'Spare Part alt 1' },
					{ id: 'galaxy-sp1-3', src: '/products/spareparts/sp3.jpeg', alt: 'Spare Part alt 2' },
					{ id: 'galaxy-sp1-4', src: '/products/spareparts/sp4.png', alt: 'Spare Part alt 3' },
					{ id: 'galaxy-sp1-5', src: '/products/spareparts/sp5.png', alt: 'Spare Part alt 4' },
					{ id: 'galaxy-sp1-6', src: '/products/spareparts/sp6.png', alt: 'Spare Part alt 5' },
					{ id: 'galaxy-sp1-7', src: '/products/spareparts/sp7.png', alt: 'Spare Part alt 6' },
					{ id: 'galaxy-sp1-8', src: '/products/spareparts/sp8.png', alt: 'Spare Part alt 7' },
					{ id: 'galaxy-sp1-9', src: '/products/spareparts/sp9.jpeg', alt: 'Spare Part alt 8' },
				],
				brands: [
					{ id: 'galaxy', name: 'Galaxy', logo: '/logogalaxy.png' },
				],
				specifications: ['OEM Fit', 'Hardened Steel', 'Corrosion Resistant']
			},
			{
				id: 'galaxy-engineoil',
				name: 'Engine Oils',
				description: 'High-performance lubricants for optimal machinery efficiency.',
				images: [
					{ id: 'galaxy-lub-1', src: '/products/lubricants/engineoil/e1.jpg', alt: 'Lubricant primary' },
					{ id: 'galaxy-lub-2', src: '/products/lubricants/engineoil/e2.jpg', alt: 'Lubricant alt 1' },
					{ id: 'galaxy-lub-3', src: '/products/lubricants/engineoil/e3.jpg', alt: 'Lubricant alt 2' },
					{ id: 'galaxy-lub-4', src: '/products/lubricants/engineoil/e4.jpg', alt: 'Lubricant alt 3' },
					{ id: 'galaxy-lub-5', src: '/products/lubricants/engineoil/e5.png', alt: 'Lubricant alt 4' },
					{ id: 'galaxy-lub-6', src: '/products/lubricants/engineoil/e6.jpeg', alt: 'Lubricant alt 5' },
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
					{ id: 'galaxy-g-1', src: '/products/lubricants/grease/g1.jpg', alt: 'Assembly primary' },
					{ id: 'galaxy-g-2', src: '/products/lubricants/grease/g2.jpg', alt: 'Assembly alt 1' },
					{ id: 'galaxy-g-3', src: '/products/lubricants/grease/g3.jpg', alt: 'Assembly alt 2' },
					{ id: 'galaxy-g-4', src: '/products/lubricants/grease/g4.jpg', alt: 'Assembly alt 3' },
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
					{ id: 'galaxy-i-1', src: '/products/lubricants/industrialoil/i1.png', alt: 'oil primary' },
					{ id: 'galaxy-i-2', src: '/products/lubricants/industrialoil/i2.jpg', alt: 'oil alt 1' },
					{ id: 'galaxy-i-3', src: '/products/lubricants/industrialoil/i3.jpg', alt: 'oil alt 2' },
					{ id: 'galaxy-i-4', src: '/products/lubricants/industrialoil/i4.png', alt: 'oil alt 3' },
					{ id: 'galaxy-i-5', src: '/products/lubricants/industrialoil/i5.png', alt: 'oil alt 4' },
					{ id: 'galaxy-i-6', src: '/products/lubricants/industrialoil/i6.png', alt: 'oil alt 5' },
					{ id: 'galaxy-i-7', src: '/products/lubricants/industrialoil/i7.png', alt: 'oil alt 6' },
					{ id: 'galaxy-i-8', src: '/products/lubricants/industrialoil/i8.png', alt: 'oil alt 7' },
				],
				brands: [
					{ id: 'galaxy', name: 'Galaxy', logo: '/logogalaxy.png' },
				],
				specifications: ['Multiple Sizes', 'High Strength', 'Surface Treated']
			}
			
		]
	},
];

export default productCategories;
