import Link from 'next/link'

export const metadata = {
    title: 'Services | Evergreen Landscaping',
    description: 'Professional landscaping services in Oklahoma City. Lawn care, landscaping design, seasonal services, and pressure washing.',
}

export default function ServicesPage() {
    return (
        <main className="min-h-screen bg-white">
            {/* Page Title */}
            <section className="py-12 px-4">
                <div className="max-w-4xl mx-auto text-center">
                    <h1 className="text-3xl font-bold text-forestGreen inline-block border-b-2 border-forestGreen pb-2">
                        Services
                    </h1>
                </div>
            </section>

            {/* Comprehensive Services List */}
            <section className="px-4 pb-16">
                <div className="max-w-4xl mx-auto">
                    <div className="space-y-8 text-forestGreen">
                        {/* Lawn Services */}
                        <div>
                            <h2 className="font-bold mb-3">LAWN SERVICES:</h2>
                            <ul className="space-y-1 ml-4">
                                <li>Lawn Mowing</li>
                                <li>Weed-Eating</li>
                                <li>Edging</li>
                                <li>Blowing</li>
                                <li>Lawn Dethatching</li>
                                <li>Lawn Aeration</li>
                                <li>Lawn Fertilizing</li>
                                <li>Overseeding</li>
                                <li>Hydroseeding</li>
                                <li>Top Dressing</li>
                            </ul>
                        </div>

                        {/* Seasonal/Cleanup */}
                        <div>
                            <h2 className="font-bold mb-3">SEASONAL/CLEANUP:</h2>
                            <ul className="space-y-1 ml-4">
                                <li>Leaf Cleanup</li>
                                <li>Leaf Removal</li>
                                <li>Storm Debris Cleanup</li>
                                <li>Bush-Hogging</li>
                                <li>Fence Line Mowing</li>
                                <li>Gravel Road Vegetation Clearing</li>
                                <li>Weed Pulling</li>
                                <li>Bed Cleanups</li>
                            </ul>
                        </div>

                        {/* Landscaping */}
                        <div>
                            <h2 className="font-bold mb-3">LANDSCAPING:</h2>
                            <ul className="space-y-1 ml-4">
                                <li>Watering Services</li>
                                <li>Mulch Installation</li>
                                <li>Rock Installation</li>
                                <li>Landscape Fabric Installation</li>
                                <li>Bed Edging (Stone, Brick, & Steel)</li>
                                <li>Bed Reshaping</li>
                                <li>Flower Bed Installation</li>
                                <li>Planting (Flowers, Shrubs, & Trees)</li>
                                <li>Removing Plants (Shrubs & Trees)</li>
                            </ul>
                        </div>

                        {/* Weed & Pest Control */}
                        <div>
                            <h2 className="font-bold mb-3">WEED & PEST CONTROL:</h2>
                            <ul className="space-y-1 ml-4">
                                <li>Pre-Emergent</li>
                                <li>Post-Emergent</li>
                                <li>Pavement Weed Control</li>
                                <li>Fence-Line Vegetation Kill</li>
                                <li>Poison Ivy Removal</li>
                                <li>Fire Ant Treatments</li>
                                <li>Mosquito Spraying</li>
                                <li>Flea & Tick Yard Treatment</li>
                                <li>Perimeter House Insect Barrier</li>
                                <li>Soil Testing</li>
                            </ul>
                        </div>

                        {/* Irrigation */}
                        <div>
                            <h2 className="font-bold mb-3">IRRIGATION:</h2>
                            <ul className="space-y-1 ml-4">
                                <li>Sprinkler Repair</li>
                                <li>Sprinkler Head Replacement</li>
                                <li>Valve Replacement</li>
                                <li>Controller Installation</li>
                                <li>System Troubleshooting</li>
                                <li>System Winterization</li>
                                <li>Drip Irrigation System</li>
                                <li>Irrigation System</li>
                                <li>Water Pressure Testing</li>
                                <li>Add-On Sprinkler Zones</li>
                                <li>Rain Sensor Installation</li>
                            </ul>
                        </div>

                        {/* Washing & Cleaning */}
                        <div>
                            <h2 className="font-bold mb-3">WASHING & CLEANING:</h2>
                            <ul className="space-y-1 ml-4">
                                <li>Soft Washing (Roof & Siding)</li>
                                <li>Pressure Washing (Siding, Deck, Fence, Driveway, Sidewalk, Patio, & Parking Lot)</li>
                                <li>Surface Sealing (Driveway, Sidewalk, Patio, & Parking Lot)</li>
                                <li>Gutter Cleaning</li>
                                <li>Roof Cleaning</li>
                                <li>Fence Line Clearing</li>
                                <li>Window Cleaning</li>
                            </ul>
                        </div>

                        {/* Seasonal/Special */}
                        <div>
                            <h2 className="font-bold mb-3">SEASONAL/SPECIAL:</h2>
                            <ul className="space-y-1 ml-4">
                                <li>Holiday Lights Installation</li>
                                <li>Firewood Delivery</li>
                                <li>Snow Removal</li>
                                <li>De-Icing</li>
                                <li>Salting</li>
                                <li>Outdoor Furniture Installation</li>
                            </ul>
                        </div>
                    </div>

                    {/* CTA Section */}
                    <div className="mt-16 text-center">
                        <p className="text-lg text-forestGreen mb-6">
                            Did you find any services that you want? If so, get started TODAY!
                        </p>
                        <Link
                            href="/contact"
                            className="inline-block bg-forestGreen hover:bg-green-800 text-white px-8 py-3 rounded font-semibold transition-colors"
                        >
                            Get Started
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    )
}
