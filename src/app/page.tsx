export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <section className="bg-white py-16 md:py-20 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-forestGreen mb-6 leading-tight tracking-tight">
            We bring life and beauty to your outdoors
          </h1>
          <p className="text-base md:text-lg text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">
            We're dedicated to helping homeowners and businesses transform their properties into spaces that stand out year-round, with quality, reliability, and care you can trust.
          </p>

          {/* Hero Image */}
          <div className="rounded-lg overflow-hidden bg-gradient-to-br from-green-200 to-green-300 aspect-video flex items-center justify-center">
            <p className="text-forestGreen text-lg font-medium">
              Professional Lawn with Striped Pattern
            </p>
          </div>
        </div>
      </section>

      {/* Service 1: Lawn Care & Maintenance */}
      <section className="bg-white py-12 md:py-16 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <div className="rounded-lg overflow-hidden bg-gradient-to-br from-green-200 to-green-300 aspect-video flex items-center justify-center mb-8">
            <p className="text-forestGreen text-lg font-medium">
              Striped Lawn Close-up Image
            </p>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-forestGreen mb-6">
            Lawn Care & Maintenance
          </h2>
          <p className="text-gray-600 leading-relaxed max-w-2xl mx-auto">
            A healthy, well-kept lawn is the foundation of every great landscape. Our professional lawn care services ensure your yard stays lush, green, and perfectly maintained throughout the season. We handle everything from mowing, trimming, and edging to fertilization and weed control- keeping your grass strong and vibrant. With consistent maintenance and attention to detail, we take the stress out of lawn care so you can simply enjoy a beautiful, polished yard that stands out in your neighborhood.
          </p>
        </div>
      </section>

      {/* Service 2: Landscaping & Design */}
      <section className="bg-white py-12 md:py-16 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <div className="rounded-lg overflow-hidden bg-gradient-to-br from-green-200 to-green-300 aspect-video flex items-center justify-center mb-8">
            <p className="text-forestGreen text-lg font-medium">
              Beautiful Home with Landscaping Image
            </p>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-forestGreen mb-6">
            Landscaping & Design
          </h2>
          <p className="text-gray-600 leading-relaxed max-w-2xl mx-auto">
            Your landscape should reflect your style and enhance your property's beauty. Whether you're starting from scratch or refreshing an existing design, we create customized landscaping solutions that bring your vision to life. From plant selection and flower bed design to mulch installation and decorative rock layouts, we focus on details that make your home look its best. Our goal is to create outdoor spaces that not only look amazing, but are functional, sustainable, and easy to maintain.
          </p>
        </div>
      </section>

      {/* Service 3: Seasonal Services */}
      <section className="bg-white py-12 md:py-16 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <div className="rounded-lg overflow-hidden bg-gradient-to-br from-orange-200 to-yellow-200 aspect-video flex items-center justify-center mb-8">
            <p className="text-forestGreen text-lg font-medium">
              Autumn Tree with Fall Leaves Image
            </p>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-forestGreen mb-6">
            Seasonal Services
          </h2>
          <p className="text-gray-600 leading-relaxed max-w-2xl mx-auto">
            Each season brings new challenges for your landscape- from falling leaves in autumn to overgrown beds in spring. Our seasonal cleanup services keep your property looking clean, healthy, and ready for whatever the weather brings. We remove leaves, sticks, and debris; refresh mulch, trim plants; and prepare your lawn and flower beds for the next season. Whether it's a quick spruce-up or a full property cleanup, we make sure your yard looks well cared for year-round so you can relax and enjoy your outdoor space.
          </p>
        </div>
      </section>

      {/* Service 4: Pressure Washing */}
      <section className="bg-white py-12 md:py-16 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <div className="rounded-lg overflow-hidden bg-gradient-to-br from-gray-200 to-blue-100 aspect-video flex items-center justify-center mb-8">
            <p className="text-forestGreen text-lg font-medium">
              Pressure Washing Garage Door Image
            </p>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-forestGreen mb-6">
            Pressure Washing
          </h2>
          <p className="text-gray-600 leading-relaxed max-w-2xl mx-auto">
            Over time, dirt, mold, algae, and grime can dull your home's appearance and damage outdoor surfaces. Our pressure washing services restore your property's clean, fresh look by safely removing built-up residue from driveways, patios, siding, decks, and walkways. We use professional-grade equipment to achieve a deep clean without harming your surfaces. A simple wash can make your home look newer, brighter, and well cared for- boosting curb appeal and protecting your investment for years to come.
          </p>

          {/* Next Button */}
          <div className="mt-12">
            <button className="bg-forestGreen hover:bg-green-800 text-white px-16 py-4 rounded font-medium transition-colors">
              Next
            </button>
          </div>
        </div>
      </section>
    </main>
  )
}
