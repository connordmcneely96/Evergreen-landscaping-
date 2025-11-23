export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <section className="bg-white py-8 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-[40px] sm:text-[46px] md:text-[52px] lg:text-[60px] font-bold text-forestGreen mb-5 leading-[1.15] tracking-tight">
            We bring life and beauty to your outdoors
          </h1>
          <p className="text-[17px] sm:text-[18px] md:text-[19px] text-gray-600 mb-8 max-w-2xl mx-auto leading-[1.6]">
            We're dedicated to helping homeowners and businesses transform their properties into spaces that stand out year-round, with quality, reliability, and care you can trust.
          </p>

          {/* Hero Image */}
          <div className="rounded-xl overflow-hidden bg-gradient-to-br from-green-300 to-green-400 aspect-video flex items-center justify-center">
            <p className="text-white text-lg font-medium px-4">
              Professional Lawn with Striped Pattern
            </p>
          </div>
        </div>
      </section>

      {/* Service 1: Lawn Care & Maintenance */}
      <section className="bg-white py-8 md:py-10 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="rounded-xl overflow-hidden bg-gradient-to-br from-green-300 to-green-400 aspect-video flex items-center justify-center mb-6">
            <p className="text-white text-lg font-medium px-4">
              Striped Lawn Close-up Image
            </p>
          </div>
          <h2 className="text-[32px] sm:text-[34px] md:text-[40px] font-bold text-forestGreen mb-4">
            Lawn Care & Maintenance
          </h2>
          <p className="text-[17px] text-gray-600 leading-[1.7] max-w-3xl mx-auto">
            A healthy, well-kept lawn is the foundation of every great landscape. Our professional lawn care services ensure your yard stays lush, green, and perfectly maintained throughout the season. We handle everything from mowing, trimming, and edging to fertilization and weed control- keeping your grass strong and vibrant. With consistent maintenance and attention to detail, we take the stress out of lawn care so you can simply enjoy a beautiful, polished yard that stands out in your neighborhood.
          </p>
        </div>
      </section>

      {/* Service 2: Landscaping & Design */}
      <section className="bg-white py-8 md:py-10 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="rounded-xl overflow-hidden bg-gradient-to-br from-green-300 to-green-400 aspect-video flex items-center justify-center mb-6">
            <p className="text-white text-lg font-medium px-4">
              Beautiful Home with Landscaping Image
            </p>
          </div>
          <h2 className="text-[32px] sm:text-[34px] md:text-[40px] font-bold text-forestGreen mb-4">
            Landscaping & Design
          </h2>
          <p className="text-[17px] text-gray-600 leading-[1.7] max-w-3xl mx-auto">
            Your landscape should reflect your style and enhance your property's beauty. Whether you're starting from scratch or refreshing an existing design, we create customized landscaping solutions that bring your vision to life. From plant selection and flower bed design to mulch installation and decorative rock layouts, we focus on details that make your home look its best. Our goal is to create outdoor spaces that not only look amazing, but are functional, sustainable, and easy to maintain.
          </p>
        </div>
      </section>

      {/* Service 3: Seasonal Services */}
      <section className="bg-white py-8 md:py-10 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="rounded-xl overflow-hidden bg-gradient-to-br from-orange-300 to-yellow-300 aspect-video flex items-center justify-center mb-6">
            <p className="text-white text-lg font-medium px-4">
              Autumn Tree with Fall Leaves Image
            </p>
          </div>
          <h2 className="text-[32px] sm:text-[34px] md:text-[40px] font-bold text-forestGreen mb-4">
            Seasonal Services
          </h2>
          <p className="text-[17px] text-gray-600 leading-[1.7] max-w-3xl mx-auto">
            Each season brings new challenges for your landscape- from falling leaves in autumn to overgrown beds in spring. Our seasonal cleanup services keep your property looking clean, healthy, and ready for whatever the weather brings. We remove leaves, sticks, and debris; refresh mulch, trim plants; and prepare your lawn and flower beds for the next season. Whether it's a quick spruce-up or a full property cleanup, we make sure your yard looks well cared for year-round so you can relax and enjoy your outdoor space.
          </p>
        </div>
      </section>

      {/* Service 4: Pressure Washing */}
      <section className="bg-white py-8 md:py-10 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="rounded-xl overflow-hidden bg-gradient-to-br from-gray-300 to-blue-200 aspect-video flex items-center justify-center mb-6">
            <p className="text-white text-lg font-medium px-4">
              Pressure Washing Garage Door Image
            </p>
          </div>
          <h2 className="text-[32px] sm:text-[34px] md:text-[40px] font-bold text-forestGreen mb-4">
            Pressure Washing
          </h2>
          <p className="text-[17px] text-gray-600 leading-[1.7] max-w-3xl mx-auto">
            Over time, dirt, mold, algae, and grime can dull your home's appearance and damage outdoor surfaces. Our pressure washing services restore your property's clean, fresh look by safely removing built-up residue from driveways, patios, siding, decks, and walkways. We use professional-grade equipment to achieve a deep clean without harming your surfaces. A simple wash can make your home look newer, brighter, and well cared for- boosting curb appeal and protecting your investment for years to come.
          </p>

          {/* Next Button */}
          <div className="mt-8">
            <button className="bg-forestGreen hover:bg-green-800 text-white px-16 py-4 rounded font-medium transition-colors text-[17px]">
              Next
            </button>
          </div>
        </div>
      </section>
    </main>
  )
}
