import { motion } from 'motion/react';

const allServices = [
  // Trades
  {
    name: "HVAC",
    category: "Trade",
    description: "Heating, cooling, and ventilation system repairs and maintenance",
    image: "https://images.unsplash.com/photo-1758798157512-f0a864c696c9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxIVkFDJTIwdGVjaG5pY2lhbiUyMGFpciUyMGNvbmRpdGlvbmluZ3xlbnwxfHx8fDE3Njk3MzA3MDd8MA&ixlib=rb-4.1.0&q=80&w=1080",
    active: true,
  },
  {
    name: "Plumbing",
    category: "Trade",
    description: "Leaks, clogs, installations, and all water-related issues",
    image: "https://images.unsplash.com/photo-1563197906-c1466d8e2edd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwbHVtYmVyJTIwZml4aW5nJTIwcGlwZXN8ZW58MXx8fHwxNzY5NzMwNzA4fDA&ixlib=rb-4.1.0&q=80&w=1080",
    active: true,
  },
  {
    name: "Electrical",
    category: "Trade",
    description: "Wiring, outlets, fixtures, and electrical system repairs",
    image: "https://images.unsplash.com/photo-1754620906571-9ba64bd3ffb4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVjdHJpY2lhbiUyMHdvcmtpbmclMjB3aXJlc3xlbnwxfHx8fDE3Njk2ODMyNzh8MA&ixlib=rb-4.1.0&q=80&w=1080",
    active: true,
  },
  {
    name: "Appliance Repair",
    category: "Trade",
    description: "Refrigerators, washers, dryers, and all home appliances",
    image: "https://images.unsplash.com/photo-1768051579338-3dc694863efc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcHBsaWFuY2UlMjByZXBhaXIlMjByZWZyaWdlcmF0b3J8ZW58MXx8fHwxNzY5NzMxNDk2fDA&ixlib=rb-4.1.0&q=80&w=1080",
    active: false,
  },
  {
    name: "Locksmith / Rekey",
    category: "Trade",
    description: "Lock installation, rekeying, and emergency lockout services",
    image: "https://images.unsplash.com/flagged/photo-1564767609213-c75ee685263a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsb2Nrc21pdGglMjBrZXklMjBzZXJ2aWNlfGVufDF8fHx8MTc2OTczMTQ5N3ww&ixlib=rb-4.1.0&q=80&w=1080",
    active: false,
  },
  {
    name: "Pest Control",
    category: "Trade",
    description: "Extermination and prevention for all types of pests",
    image: "https://images.unsplash.com/photo-1584695930355-f3dd455d6332?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZXN0JTIwY29udHJvbCUyMGV4dGVybWluYXRvcnxlbnwxfHx8fDE3Njk3MzE0OTd8MA&ixlib=rb-4.1.0&q=80&w=1080",
    active: false,
  },
  // Property Services
  {
    name: "Lawn Care",
    category: "Property",
    description: "Mowing, edging, trimming, and complete lawn maintenance",
    image: "https://images.unsplash.com/photo-1630871453479-88ad2f2623dd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYXduJTIwY2FyZSUyMG1vd2luZ3xlbnwxfHx8fDE3Njk3MzE0OTd8MA&ixlib=rb-4.1.0&q=80&w=1080",
    active: true,
  },
  {
    name: "Make-Ready / Turnover Cleanout",
    category: "Property",
    description: "Complete property cleanout and prep for new tenants",
    image: "https://images.unsplash.com/photo-1581578949510-fa7315c4c350?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3VzZSUyMGNsZWFuaW5nJTIwc2VydmljZXxlbnwxfHx8fDE3Njk3MDAxNzB8MA&ixlib=rb-4.1.0&q=80&w=1080",
    active: true,
  },
  {
    name: "Cleaning / Deep Clean",
    category: "Property",
    description: "Professional cleaning services for homes and apartments",
    image: "https://images.unsplash.com/photo-1581578949510-fa7315c4c350?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3VzZSUyMGNsZWFuaW5nJTIwc2VydmljZXxlbnwxfHx8fDE3Njk3MDAxNzB8MA&ixlib=rb-4.1.0&q=80&w=1080",
    active: false,
  },
  {
    name: "Junk Removal / Haul-Off",
    category: "Property",
    description: "Remove unwanted items, furniture, and debris",
    image: "https://images.unsplash.com/photo-1729628371767-7a833756b8b5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxqdW5rJTIwcmVtb3ZhbCUyMHRydWNrfGVufDF8fHx8MTc2OTY0NzgyOHww&ixlib=rb-4.1.0&q=80&w=1080",
    active: false,
  },
  {
    name: "Roofing / Leak",
    category: "Property",
    description: "Roof repairs, leak detection, and shingle replacement",
    image: "https://images.unsplash.com/photo-1727777266423-6a33048e4894?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyb29maW5nJTIwcmVwYWlyJTIwc2hpbmdsZXN8ZW58MXx8fHwxNzY5NzMxNDk4fDA&ixlib=rb-4.1.0&q=80&w=1080",
    active: false,
  },
  {
    name: "Drywall / Paint",
    category: "Property",
    description: "Drywall repair, patching, and interior/exterior painting",
    image: "https://images.unsplash.com/photo-1768839725085-829e6ac7ac26?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYWludGluZyUyMGRyeXdhbGwlMjBpbnRlcmlvcnxlbnwxfHx8fDE3Njk3MzE1MDZ8MA&ixlib=rb-4.1.0&q=80&w=1080",
    active: false,
  },
  {
    name: "Flooring",
    category: "Property",
    description: "Hardwood, tile, carpet, and laminate installation and repair",
    image: "https://images.unsplash.com/photo-1693948568453-a3564f179a84?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYXJkd29vZCUyMGZsb29yaW5nJTIwaW5zdGFsbGF0aW9ufGVufDF8fHx8MTc2OTczMTUxNXww&ixlib=rb-4.1.0&q=80&w=1080",
    active: false,
  },
  {
    name: "Garage Door",
    category: "Property",
    description: "Garage door repair, installation, and opener services",
    image: "https://images.unsplash.com/photo-1761494666841-dec7dc336e83?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnYXJhZ2UlMjBkb29yJTIwcmVzaWRlbnRpYWx8ZW58MXx8fHwxNzY5NzMxNDk5fDA&ixlib=rb-4.1.0&q=80&w=1080",
    active: false,
  },
];

export const ServicesSection = () => {
  const handleServiceClick = (serviceName: string, active: boolean) => {
    if (active) {
      console.log(`Creating work order for: ${serviceName}`);
      alert(`Creating work order for: ${serviceName}\n\nNext steps:\n• Select property/unit\n• Add notes & photos\n• Submit to NOHM service network`);
    }
  };

  return (
    <section className="relative py-32 bg-gradient-to-b from-[#050814] via-[#0a0e27] to-[#050814]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            All Services in One Place
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Select any service to create a work order. We handle the rest—from routing to completion.
          </p>
        </motion.div>

        {/* Services Gallery */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {allServices.map((service, index) => (
            <motion.button
              key={index}
              onClick={() => handleServiceClick(service.name, service.active)}
              className={`group relative overflow-hidden rounded-2xl border transition-all duration-300 text-left ${
                service.active
                  ? 'border-white/10 hover:border-[#1DA1F2]/50 hover:scale-[1.02] cursor-pointer'
                  : 'border-white/5 cursor-not-allowed opacity-70'
              }`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              disabled={!service.active}
            >
              {/* Image */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.name}
                  className={`w-full h-full object-cover transition-transform duration-500 ${
                    service.active ? 'group-hover:scale-110' : 'grayscale'
                  }`}
                />
                <div className={`absolute inset-0 ${
                  service.active 
                    ? 'bg-gradient-to-t from-[#050814] via-[#050814]/70 to-transparent' 
                    : 'bg-gradient-to-t from-[#050814] via-[#050814]/80 to-[#050814]/40'
                }`}></div>
                
                {/* Coming Soon Badge */}
                {!service.active && (
                  <div className="absolute top-4 right-4 bg-gray-600 text-white text-xs px-3 py-1.5 rounded-full font-semibold shadow-lg">
                    Coming Soon
                  </div>
                )}

                {/* Category Badge */}
                <div className={`absolute top-4 left-4 text-xs px-3 py-1.5 rounded-full font-semibold ${
                  service.active 
                    ? 'bg-[#1DA1F2]/20 text-[#1DA1F2] backdrop-blur-sm' 
                    : 'bg-gray-600/50 text-gray-300 backdrop-blur-sm'
                }`}>
                  {service.category}
                </div>
              </div>
              
              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-xl font-bold text-white mb-2">
                  {service.name}
                </h3>
                <p className={`text-sm leading-relaxed ${
                  service.active ? 'text-gray-300' : 'text-gray-400'
                }`}>
                  {service.description}
                </p>
                
                {service.active && (
                  <div className="mt-4 flex items-center text-[#1DA1F2] text-sm font-semibold">
                    Create Work Order
                    <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                )}
              </div>
            </motion.button>
          ))}
        </div>

        {/* Info Box */}
        <motion.div
          className="mt-16 bg-gradient-to-br from-[#1DA1F2]/10 to-[#1DA1F2]/5 border border-[#1DA1F2]/20 rounded-2xl p-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <h4 className="text-xl font-bold text-white mb-6 text-center">How Work Orders Flow</h4>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-sm text-gray-300">
            <div className="text-center">
              <div className="w-12 h-12 bg-[#1DA1F2] text-white rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-3">1</div>
              <div className="text-white font-bold mb-2">Select Service</div>
              <p className="text-gray-400">Tap any active service above</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-[#1DA1F2] text-white rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-3">2</div>
              <div className="text-white font-bold mb-2">Create WO</div>
              <p className="text-gray-400">Property/unit + notes + photos</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-[#1DA1F2] text-white rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-3">3</div>
              <div className="text-white font-bold mb-2">Auto-Route</div>
              <p className="text-gray-400">NOHM dispatches the right pro</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-[#1DA1F2] text-white rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-3">4</div>
              <div className="text-white font-bold mb-2">Complete</div>
              <p className="text-gray-400">Status updates + completion photos</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
