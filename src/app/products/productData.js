// Central product data module
// Each category contains: id, name, description, icon (string key), brandLogos, products
// Each product now contains: id, name, description, images (array of {id, src, alt}), specifications (array of strings)

export const productCategories = [
	{
		id: 'galaxy',
		name: 'Galaxy',
		description: 'High performance precision spare parts and assemblies engineered for durability.',
		icon: 'ShieldStarIcon',
		brandLogos: [
			{ id: 'gb1', src: '/products/bearings/brands/bb1.jpeg', alt: 'Brand A' },
			{ id: 'gb2', src: '/products/bearings/brands/bb2.jpeg', alt: 'Brand B' },
		],
		products: [
			{
				id: 'galaxy-spare-parts',
				name: 'Spare Parts',
				description: 'OEM-grade replacement parts ensuring seamless integration and reliability.',
				images: [
					{ id: 'galaxy-sp1-1', src: '/products/spareparts/sp1.jpeg', alt: 'Spare Part primary' },
					{ id: 'galaxy-sp1-2', src: '/products/spareparts/sp2.jpeg', alt: 'Spare Part alt 1' },
					{ id: 'galaxy-sp1-3', src: '/products/spareparts/sp3.jpeg', alt: 'Spare Part alt 2' },
				],
				specifications: ['OEM Fit', 'Hardened Steel', 'Corrosion Resistant']
			},
			{
				id: 'galaxy-lubricants',
				name: 'Lubricants',
				description: 'High-performance lubricants for optimal machinery efficiency.',
				images: [
					{ id: 'galaxy-lub-1', src: '/products/spareparts/sp2.jpeg', alt: 'Lubricant primary' },
					{ id: 'galaxy-lub-2', src: '/products/spareparts/sp3.jpeg', alt: 'Lubricant alt 1' },
					{ id: 'galaxy-lub-3', src: '/products/spareparts/sp4.png', alt: 'Lubricant alt 2' },
				],
				specifications: ['Tight Tolerances', 'CNC Machined', 'ISO Certified']
			},
			{
				id: 'galaxy-assemblies',
				name: 'Assemblies',
				description: 'Pre‑assembled units reducing installation time and errors.',
				images: [
					{ id: 'galaxy-assy-1', src: '/products/spareparts/sp3.jpeg', alt: 'Assembly primary' },
					{ id: 'galaxy-assy-2', src: '/products/spareparts/sp4.png', alt: 'Assembly alt 1' },
					{ id: 'galaxy-assy-3', src: '/products/spareparts/sp5.png', alt: 'Assembly alt 2' },
				],
				specifications: ['Plug & Play', 'Factory Tested', 'Traceable Lots']
			},
			{
				id: 'galaxy-hardware',
				name: 'Hardware',
				description: 'General industrial hardware for versatile mechanical use.',
				images: [
					{ id: 'galaxy-hw-1', src: '/products/spareparts/sp4.png', alt: 'Hardware primary' },
					{ id: 'galaxy-hw-2', src: '/products/spareparts/sp5.png', alt: 'Hardware alt 1' },
					{ id: 'galaxy-hw-3', src: '/products/spareparts/sp6.png', alt: 'Hardware alt 2' },
				],
				specifications: ['Multiple Sizes', 'High Strength', 'Surface Treated']
			},
			{
				id: 'galaxy-accessories',
				name: 'Accessories',
				description: 'Enhancement accessories extending system functionality.',
				images: [
					{ id: 'galaxy-acc-1', src: '/products/spareparts/sp5.png', alt: 'Accessory primary' },
					{ id: 'galaxy-acc-2', src: '/products/spareparts/sp6.png', alt: 'Accessory alt 1' },
					{ id: 'galaxy-acc-3', src: '/products/spareparts/sp7.png', alt: 'Accessory alt 2' },
				],
				specifications: ['Modular', 'Quick Install', 'Durable Coating']
			}
		]
	},
	{
		id: 'bearings',
		name: 'Bearings & Bushings',
		description: 'Precision bearings for smooth, efficient and reliable motion.',
		icon: 'CubeIcon',
		brandLogos: [
			{ id: 'bb1', src: '/products/bearings/brands/bb1.jpeg', alt: 'FAG Logo' },
			{ id: 'bb2', src: '/products/bearings/brands/bb2.jpeg', alt: 'NSK Logo' },
			{ id: 'bb3', src: '/products/bearings/brands/bb3.jpeg', alt: 'NBC Logo' },
		],
		products: [
			{
				id: 'bearings-ball',
				name: 'Ball Bearings',
				description: 'Low friction deep groove ball bearings for high speed applications.',
				images: [
					{ id: 'bearings-ball-1', src: '/products/bearings/images/bb1.jpeg', alt: 'Ball Bearing primary' },
					{ id: 'bearings-ball-2', src: '/products/bearings/images/bb2.jpeg', alt: 'Ball Bearing alt 1' },
					{ id: 'bearings-ball-3', src: '/products/bearings/images/bb3.jpeg', alt: 'Ball Bearing alt 2' },
				],
				specifications: ['Bore: 20mm', 'ABEC-5', 'Sealed / Open Options']
			},
			{
				id: 'bearings-roller',
				name: 'Roller Bearings',
				description: 'Cylindrical & tapered roller bearings for heavy radial loads.',
				images: [
					{ id: 'bearings-roller-1', src: '/products/bearings/images/bb2.jpeg', alt: 'Roller Bearing primary' },
					{ id: 'bearings-roller-2', src: '/products/bearings/images/bb3.jpeg', alt: 'Roller Bearing alt 1' },
					{ id: 'bearings-roller-3', src: '/products/bearings/images/bb4.jpeg', alt: 'Roller Bearing alt 2' },
				],
				specifications: ['High Load', 'Precision Ground', 'Heat Treated']
			},
			{
				id: 'bearings-thrust',
				name: 'Thrust Bearings',
				description: 'Axial load support with minimal friction & wear.',
				images: [
					{ id: 'bearings-thrust-1', src: '/products/bearings/images/bb3.jpeg', alt: 'Thrust Bearing primary' },
					{ id: 'bearings-thrust-2', src: '/products/bearings/images/bb4.jpeg', alt: 'Thrust Bearing alt 1' },
					{ id: 'bearings-thrust-3', src: '/products/bearings/images/bb5.jpeg', alt: 'Thrust Bearing alt 2' },
				],
				specifications: ['Axial Loads', 'Hardened Raceways', 'Compact Design']
			},
			{
				id: 'bearings-needle',
				name: 'Needle Bearings',
				description: 'High load capacity in tight radial spaces.',
				images: [
					{ id: 'bearings-needle-1', src: '/products/bearings/images/bb4.jpeg', alt: 'Needle Bearing primary' },
					{ id: 'bearings-needle-2', src: '/products/bearings/images/bb5.jpeg', alt: 'Needle Bearing alt 1' },
					{ id: 'bearings-needle-3', src: '/products/bearings/images/bb1.jpeg', alt: 'Needle Bearing alt 2' },
				],
				specifications: ['Slim Profile', 'High Speed', 'Caged / Full Complement']
			},
			{
				id: 'bearings-plain',
				name: 'Plain Bearings',
				description: 'Maintenance-free bushings with low wear surfaces.',
				images: [
					{ id: 'bearings-plain-1', src: '/products/bearings/images/bb5.jpeg', alt: 'Plain Bearing primary' },
					{ id: 'bearings-plain-2', src: '/products/bearings/images/bb1.jpeg', alt: 'Plain Bearing alt 1' },
					{ id: 'bearings-plain-3', src: '/products/bearings/images/bb2.jpeg', alt: 'Plain Bearing alt 2' },
				],
				specifications: ['Self-Lubricating', 'Shock Resistant', 'Wide Temp Range']
			}
		]
	},
	{
		id: 'lubricants',
		name: 'Lubricants & Oils',
		description: 'Advanced lubrication solutions extending component life.',
		icon: 'SparklesIcon',
		brandLogos: [
			{ id: 'lb1', src: '/products/bearings/brands/bb4.jpeg', alt: 'Lube Brand X' },
			{ id: 'lb2', src: '/products/bearings/brands/bb5.jpeg', alt: 'Lube Brand Y' },
		],
		products: [
			{
				id: 'lubricants-synthetic-oils',
				name: 'Synthetic Oils',
				description: 'High stability synthetic base oils for extended drain intervals.',
				images: [
					{ id: 'lube-synth-1', src: '/products/lubricants/engineoil/e1.jpg', alt: 'Synthetic Oil primary' },
					{ id: 'lube-synth-2', src: '/products/lubricants/engineoil/e2.jpg', alt: 'Synthetic Oil alt 1' },
					{ id: 'lube-synth-3', src: '/products/lubricants/engineoil/e3.jpg', alt: 'Synthetic Oil alt 2' },
				],
				specifications: ['Viscosity Stable', 'Oxidation Resistant', 'Wide Temp Range']
			},
			{
				id: 'lubricants-gear-oils',
				name: 'Gear Oils',
				description: 'Extreme pressure gear oils protecting under shock loads.',
				images: [
					{ id: 'lube-gear-1', src: '/products/lubricants/engineoil/e2.jpg', alt: 'Gear Oil primary' },
					{ id: 'lube-gear-2', src: '/products/lubricants/engineoil/e3.jpg', alt: 'Gear Oil alt 1' },
					{ id: 'lube-gear-3', src: '/products/lubricants/engineoil/e4.jpg', alt: 'Gear Oil alt 2' },
				],
				specifications: ['EP Additives', 'Foam Control', 'Shear Stable']
			},
			{
				id: 'lubricants-bearing-grease',
				name: 'Bearing Grease',
				description: 'Lithium complex grease for high speed bearing life.',
				images: [
					{ id: 'lube-grease-1', src: '/products/lubricants/engineoil/e3.jpg', alt: 'Bearing Grease primary' },
					{ id: 'lube-grease-2', src: '/products/lubricants/engineoil/e4.jpg', alt: 'Bearing Grease alt 1' },
					{ id: 'lube-grease-3', src: '/products/lubricants/engineoil/e5.png', alt: 'Bearing Grease alt 2' },
				],
				specifications: ['High Temp', 'Water Resistant', 'NLGI 2']
			},
			{
				id: 'lubricants-hydraulic-oils',
				name: 'Hydraulic Oils',
				description: 'Anti-wear hydraulic fluids ensuring smooth system control.',
				images: [
					{ id: 'lube-hyd-1', src: '/products/lubricants/engineoil/e4.jpg', alt: 'Hydraulic Oil primary' },
					{ id: 'lube-hyd-2', src: '/products/lubricants/engineoil/e5.png', alt: 'Hydraulic Oil alt 1' },
					{ id: 'lube-hyd-3', src: '/products/lubricants/engineoil/e1.jpg', alt: 'Hydraulic Oil alt 2' },
				],
				specifications: ['Anti-Wear', 'Rapid Air Release', 'Filter Friendly']
			},
			{
				id: 'lubricants-engine-oils',
				name: 'Engine Oils',
				description: 'Detergent rich oils protecting against sludge & deposits.',
				images: [
					{ id: 'lube-engine-1', src: '/products/lubricants/engineoil/e5.png', alt: 'Engine Oil primary' },
					{ id: 'lube-engine-2', src: '/products/lubricants/engineoil/e1.jpg', alt: 'Engine Oil alt 1' },
					{ id: 'lube-engine-3', src: '/products/lubricants/engineoil/e2.jpg', alt: 'Engine Oil alt 2' },
				],
				specifications: ['Detergency', 'Anti-Corrosion', 'High TBN']
			}
		]
	},
	{
		id: 'fasteners',
		name: 'Fasteners & Hardware',
		description: 'Reliable fastening solutions for structural integrity.',
		icon: 'BoltIcon',
		brandLogos: [
			{ id: 'fb1', src: '/products/bearings/brands/bb6.jpeg', alt: 'Fastener Brand' },
		],
		products: [
			{
				id: 'fasteners-hex-bolts',
				name: 'Hex Bolts',
				description: 'Grade 8 hex head bolts for structural assemblies.',
				images: [
					{ id: 'fasteners-hex-1', src: '/products/spareparts/sp1.jpeg', alt: 'Hex Bolt primary' },
					{ id: 'fasteners-hex-2', src: '/products/spareparts/sp2.jpeg', alt: 'Hex Bolt alt 1' },
					{ id: 'fasteners-hex-3', src: '/products/spareparts/sp3.jpeg', alt: 'Hex Bolt alt 2' },
				],
				specifications: ['Grade 8', 'Zinc Plated', 'Metric / Imperial']
			},
			{
				id: 'fasteners-lock-washers',
				name: 'Lock Washers',
				description: 'Split & toothed washers preventing loosening under vibration.',
				images: [
					{ id: 'fasteners-lock-1', src: '/products/spareparts/sp2.jpeg', alt: 'Lock Washer primary' },
					{ id: 'fasteners-lock-2', src: '/products/spareparts/sp3.jpeg', alt: 'Lock Washer alt 1' },
					{ id: 'fasteners-lock-3', src: '/products/spareparts/sp4.png', alt: 'Lock Washer alt 2' },
				],
				specifications: ['Hardened', 'Spring Steel', 'Corrosion Resistant']
			},
			{
				id: 'fasteners-machine-screws',
				name: 'Machine Screws',
				description: 'Precision machine screws for assembly lines.',
				images: [
					{ id: 'fasteners-screw-1', src: '/products/spareparts/sp3.jpeg', alt: 'Machine Screw primary' },
					{ id: 'fasteners-screw-2', src: '/products/spareparts/sp4.png', alt: 'Machine Screw alt 1' },
					{ id: 'fasteners-screw-3', src: '/products/spareparts/sp5.png', alt: 'Machine Screw alt 2' },
				],
				specifications: ['Phillips / Hex', 'Fine Thread', 'Stainless / Alloy']
			},
			{
				id: 'fasteners-nuts-bolts',
				name: 'Nuts & Bolts',
				description: 'Matched high strength nuts & bolts kits.',
				images: [
					{ id: 'fasteners-nb-1', src: '/products/spareparts/sp4.png', alt: 'Nuts & Bolts primary' },
					{ id: 'fasteners-nb-2', src: '/products/spareparts/sp5.png', alt: 'Nuts & Bolts alt 1' },
					{ id: 'fasteners-nb-3', src: '/products/spareparts/sp6.png', alt: 'Nuts & Bolts alt 2' },
				],
				specifications: ['Matched Threads', 'Anti-Galling', 'Various Coatings']
			},
			{
				id: 'fasteners-threaded-rods',
				name: 'Threaded Rods',
				description: 'Fully threaded rods for adjustable fastening.',
				images: [
					{ id: 'fasteners-rod-1', src: '/products/spareparts/sp5.png', alt: 'Threaded Rod primary' },
					{ id: 'fasteners-rod-2', src: '/products/spareparts/sp6.png', alt: 'Threaded Rod alt 1' },
					{ id: 'fasteners-rod-3', src: '/products/spareparts/sp7.png', alt: 'Threaded Rod alt 2' },
				],
				specifications: ['High Tensile', 'Cut-To-Length', 'Coarse / Fine']
			}
		]
	}
];

export default productCategories;
