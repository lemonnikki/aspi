import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import NavBar from "@/components/NavBar";

const VisionMission = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen font-sans bg-white">
      <NavBar />

      {/* Hero Section */}
      <div className="pt-32 pb-16 bg-gradient-to-br from-blue-50 to-white">
        <div className="max-w-4xl mx-auto px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-light mb-6 text-gray-900" style={{fontFamily: 'Manrope, sans-serif'}}>
              Our Vision & Mission
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto" style={{fontFamily: 'Manrope, sans-serif'}}>
              Driving excellence in industrial solutions through innovation, safety, and sustainable practices.
            </p>
          </div>
        </div>
      </div>

      {/* Vision Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="mb-6">
                <span className="text-blue-600 text-sm font-medium tracking-wider uppercase">Our Vision</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-light mb-6 text-gray-900" style={{fontFamily: 'Manrope, sans-serif'}}>
                To be the leading provider of innovative industrial solutions in the steel sector
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-6" style={{fontFamily: 'Manrope, sans-serif'}}>
                We envision a future where Aspire Industrial Solutions LLP is recognized as the most trusted partner for steel industry operations, maintenance, and manpower solutions across India and beyond.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                  <p className="text-gray-600" style={{fontFamily: 'Manrope, sans-serif'}}>
                    Pioneering sustainable industrial practices that benefit our clients, employees, and communities
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                  <p className="text-gray-600" style={{fontFamily: 'Manrope, sans-serif'}}>
                    Setting industry standards for safety, quality, and operational excellence
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                  <p className="text-gray-600" style={{fontFamily: 'Manrope, sans-serif'}}>
                    Expanding our footprint to serve steel plants across multiple regions
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl p-8 h-80 flex items-center justify-center">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2" style={{fontFamily: 'Manrope, sans-serif'}}>Innovation</h3>
                <p className="text-gray-600" style={{fontFamily: 'Manrope, sans-serif'}}>Driving industry advancement</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <div className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl p-8 h-80 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gray-700 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2" style={{fontFamily: 'Manrope, sans-serif'}}>Excellence</h3>
                  <p className="text-gray-600" style={{fontFamily: 'Manrope, sans-serif'}}>Delivering superior results</p>
                </div>
              </div>
            </div>
            <div className="order-1 md:order-2">
              <div className="mb-6">
                <span className="text-gray-700 text-sm font-medium tracking-wider uppercase">Our Mission</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-light mb-6 text-gray-900" style={{fontFamily: 'Manrope, sans-serif'}}>
                To deliver exceptional industrial services that drive operational success
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-6" style={{fontFamily: 'Manrope, sans-serif'}}>
                Our mission is to provide comprehensive, high-quality industrial solutions that enhance the efficiency, safety, and profitability of steel plant operations while fostering long-term partnerships with our clients.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-gray-700 rounded-full mt-2"></div>
                  <p className="text-gray-600" style={{fontFamily: 'Manrope, sans-serif'}}>
                    Provide skilled manpower and technical expertise for steel plant operations
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-gray-700 rounded-full mt-2"></div>
                  <p className="text-gray-600" style={{fontFamily: 'Manrope, sans-serif'}}>
                    Maintain the highest standards of safety and quality in all our services
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-gray-700 rounded-full mt-2"></div>
                  <p className="text-gray-600" style={{fontFamily: 'Manrope, sans-serif'}}>
                    Continuously improve our processes and invest in our workforce development
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-light mb-6 text-gray-900" style={{fontFamily: 'Manrope, sans-serif'}}>
              Our Core Values
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto" style={{fontFamily: 'Manrope, sans-serif'}}>
              The principles that guide our every action and decision
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 rounded-xl bg-blue-50">
              <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900" style={{fontFamily: 'Manrope, sans-serif'}}>Quality</h3>
              <p className="text-gray-600" style={{fontFamily: 'Manrope, sans-serif'}}>
                We maintain the highest standards in all our services and deliverables
              </p>
            </div>
            
            <div className="text-center p-6 rounded-xl bg-green-50">
              <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900" style={{fontFamily: 'Manrope, sans-serif'}}>Safety</h3>
              <p className="text-gray-600" style={{fontFamily: 'Manrope, sans-serif'}}>
                Safety is our top priority in every operation and decision we make
              </p>
            </div>
            
            <div className="text-center p-6 rounded-xl bg-purple-50">
              <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900" style={{fontFamily: 'Manrope, sans-serif'}}>Integrity</h3>
              <p className="text-gray-600" style={{fontFamily: 'Manrope, sans-serif'}}>
                We conduct business with honesty, transparency, and ethical practices
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-light mb-6" style={{fontFamily: 'Manrope, sans-serif'}}>
            Ready to Partner with Us?
          </h2>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto" style={{fontFamily: 'Manrope, sans-serif'}}>
            Let's work together to achieve operational excellence in your steel plant operations.
          </p>
          <Button 
            className="bg-white text-gray-900 hover:bg-gray-100 rounded-xl px-8 py-4 text-base font-semibold"
            onClick={() => navigate({ pathname: '/', hash: '#contact' })}
          >
            Get Started Today
          </Button>
        </div>
      </section>
    </div>
  );
};

export default VisionMission; 