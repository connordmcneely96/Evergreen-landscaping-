export const metadata = {
    title: 'Location | Evergreen Landscaping',
    description: 'Evergreen Landscaping serves Oklahoma City, Moore, Norman, Edmond, Newcastle, Mustang, Nicholas Hills, Yukon, Bethany, and Midwest City.',
}

export default function LocationPage() {
    return (
        <main className="min-h-screen bg-white">
            {/* Header Section */}
            <section className="py-16 px-4">
                <div className="max-w-4xl mx-auto text-center">
                    <h1 className="text-4xl md:text-5xl font-bold text-forestGreen mb-8">
                        Oklahoma City, OK
                    </h1>
                    <p className="text-lg text-forestGreen">
                        Oklahoma City, Moore, Norman, Edmond, Newcastle, Mustang, Nicholas Hills, Yukon, Bethany, & Midwest City
                    </p>
                </div>
            </section>

            {/* Map Section */}
            <section className="px-4 pb-16">
                <div className="max-w-4xl mx-auto">
                    <div className="rounded-lg overflow-hidden shadow-lg">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d414464.8478810944!2d-97.75751988769531!3d35.46756015!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87ad8a547ef8d281%3A0x33a21274d14f3a9d!2sOklahoma%20City%2C%20OK!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
                            width="100%"
                            height="450"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Oklahoma City Service Area Map"
                        />
                    </div>
                </div>
            </section>
        </main>
    )
}
