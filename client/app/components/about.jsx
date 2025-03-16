'use client'

const About = () => {
    return (
        <div className="flex flex-col items-center justify-center mt-10 mb-10 px-6">
            {/* Section Title */}
            <h2 className="font-poppins text-4xl font-semibold text-center text-blue-600 underline underline-offset-8 decoration-blue-400 mb-6">
                About Us
            </h2>

            {/* About Section Container */}
            <div className="bg-white w-[80vw] md:w-[60vw] lg:w-[50vw] p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <p className="text-gray-700 text-lg leading-relaxed text-center font-medium">
                    At <span className="text-blue-600 font-semibold">INDAS</span>, we are committed to transforming disaster management through 
                    Artificial Intelligence (AI) and Machine Learning (ML). Our mission is to provide real-time disaster 
                    prediction and early warning systems to save lives, safeguard communities, and reduce economic losses.
                </p>

                <p className="mt-4 text-gray-700 text-lg leading-relaxed text-center font-medium">
                    By integrating data from satellite imagery, weather stations, seismic sensors, and social media feeds, 
                    we empower authorities and emergency responders with timely alerts and actionable insights. Our 
                    scalable and continuously improving technology ensures a more resilient and prepared future.
                </p>
            </div>
        </div>
    );
};

export default About;
