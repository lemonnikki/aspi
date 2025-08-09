import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";
import NavBar from "@/components/NavBar";

const Projects = () => {
  const navigate = useNavigate();



  // Our Experience timeline data (derived from provided events)
  const experience = [
    {
      date: "May 2019",
      title: "Formed LLP Company",
      details: "Incorporated Aspire Industrial Solutions LLP."
    },
    {
      date: "Oct 2019",
      title: "O&M of Coke Oven Plant",
      details: "Started Operations & Maintenance at JSW, Salem, Tamil Nadu."
    },
    {
      date: "May 2021",
      title: "O&M of Coke Oven Plant",
      details: "Started O&M at JSW-BPSL, Jharsuguda, Odisha; and commenced O&M at KFIL, Hospet, Karnataka."
    },
    {
      date: "Oct 2021",
      title: "Rolling Mills and Plant Support",
      details: "Started O&M and manpower supply in Rolling Mills at JSW-BPSL, Jharsuguda, Odisha; CRM Plant (CTL, TTL, Annealing Line), WRM, Bright Bar, Power Plant, Blast Furnace, DRI."
    },
    {
      date: "Jan 2022",
      title: "Pellet Plant O&M",
      details: "Started O&M of Pellet Plant (Straight Grade) at Jindal Ispat Special Products Ltd., Raigarh, Chhattisgarh; expanded Rolling Mills manpower supply at JSW BPSL across Chandigarh, New Delhi, Ludhiana, and Faridabad."
    },
    {
      date: "Apr 2022",
      title: "Preheating & O&M - Coke Oven",
      details: "Started preheating and O&M at JSAW Ltd., Kudithini, Karnataka."
    },
    {
      date: "Dec 2022",
      title: "KFIL 2nd Phase & Petcoke Battery",
      details: "Started preheating of Coke Oven Plant (2nd Phase) at KFIL, Hospet, Karnataka; Refractory repairing and maintenance of Petcoke Battery at Rain CII Carbo, Vizag."
    },
    {
      date: "Feb 2023",
      title: "Refractory Maintenance",
      details: "Kalyani Steel Limited, Hospet, Karnataka."
    },
    {
      date: "May 2023",
      title: "Flue Hole Maintenance (104 Ovens)",
      details: "Refractory repairing and maintenance at Rashmi Group, Kharagpur."
    },
    {
      date: "Jan 2024",
      title: "O&M of Coke Oven Plant",
      details: "Rashmi Metalics, Kharagpur, West Bengal."
    },
    {
      date: "Feb 2024",
      title: "Refractory Maintenance - Pet Coke Plant",
      details: "Rain CII Carbon (Vizag) Ltd., Atchutapuram, Visakhapatnam, Andhra Pradesh."
    }
  ];

  // Current Projects (Credentials)
  const currentCokeOvenPlants = [
    {
      title: "JSW Salem, Tamilnadu: 0.5 MTPA (120 Ovens) Single Header, 4 Link Ovens.",
      notes: ["Heating, Commissioning and O&M."]
    },
    {
      title: "JSW BPSL, Sambalpur, Odisha: 0.42 MTPA (96 Ovens) Double Header, 4 Link Ovens.",
      notes: ["Operation & Maintenance."]
    },
    {
      title: "Kirloskar Ferrous Industries Limited, Koppal, Karnataka: 0.2 MTPA (44 Ovens) Double Header, Six Link Ovens.",
      notes: [
        "Operation & Maintenance of 1st Phase (44 Ovens) and Heating, Commissioning and O & M of 2nd Phase (40 Ovens)."
      ]
    },
    {
      title: "Jindal SAW Limited, Kudithini, Bellary, Karnataka: 0.42 MPTA (90 Ovens), Four Link Ovens.",
      notes: ["Re-Heating, Commissioning and O & M."]
    },
    {
      title: "Rashmi Metalics Limited, Kharagpur, West Bengal: 0.5 MPTA (104 Ovens), Six Link Ovens.",
      notes: ["Operation & Maintenance."]
    }
  ];

  const currentPelletPlants = [
    {
      title: "JSW Ispat Special Products Ltd, Raigarh, Chhatisgarh: 3.0 MTPA (Straight Grade).",
      notes: []
    }
  ];

  const currentRollingMillsPlants = [
    { title: "JSW BPSL, Sambalpur, Odisha: CTL, TTL, Annealing Lines." },
    { title: "JSW BPSL, Chandigarh, Chandigarh" },
    { title: "JSW BPSL, Ludhiana, Punjab" },
    { title: "JSW BPSL, Faridabad, Utter Pradesh" },
    { title: "JSW BPSL, New Delhi, New Delhi" },
    { title: "JSW BPSL, Sitarmore, Kolkata" }
  ];

  // Previous Experience Data
  const previousExperience = {
    chinaDesignNonRecovery: [
      "Visa Coke, Jajpur, Odisha (Coal Heating)",
      "JSW, Salem, Tamilnadu (Coal Heating)",
      "Usha Martin Limited, Gamharia, Jharkhand. (Coal Heating)"
    ],
    chinaDesignRecovery: [
      "JSW, Dolvi, Maharashtra (Gas Heating)"
    ],
    indianDesignNonRecovery: [
      "Bhatia Coke & Energy Ltd., Chennai, Tamilnadu. (Coal Heating)",
      "JSL, Mundra, Gujarat. (Coal Heating)"
    ],
    indianDesignRecovery: [
      "Adhunik Metaliks Limited, Rourkela, Odisha (Coal & LPG Heating)"
    ]
  };

  // Refractory Repair and Maintenance Data
  const refractoryRepairData = {
    cokeOvenPlant: [
      "Kirloskar Ferrous Industries Limited, Koppal, Karnataka.",
      "Kalyani Steel, Koppal, Karnataka.",
      "Jindal Saw Limited (JSAW), Kudathini, Bellary, Karnataka.",
      "Rashmi Metalics Limited, Kharagpur, West Bengal."
    ],
    petCokePlant: [
      "Rain CII Carbon Limited, Achuttapuram, Vishakhapattaman, Andhra Pradesh."
    ],
    blastFurnacePlant: [
      "Kirloskar Ferrous Industries Limited, Koppal, Karnataka."
    ]
  };

  return (
    <div className="min-h-screen font-sans bg-white">
      {/* Navigation */}
      <NavBar />

      {/* Hero Section */}
      <div className="pt-32 pb-16 bg-gradient-to-br from-blue-50 to-white">
        
      </div>




      {/* Our Experience Timeline */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-light mb-6 text-gray-900" style={{fontFamily: 'Manrope, sans-serif'}}>
              Our Experience
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto" style={{fontFamily: 'Manrope, sans-serif'}}>
              A snapshot of our journey across major industrial engagements and milestones.
            </p>
          </div>

          {/* Vertical timeline */}
          <div className="relative">
            <div className="absolute left-4 top-0 bottom-0 w-px bg-gray-200" />
            <div className="space-y-8">
              {experience.map((item, idx) => (
                <div key={`${item.date}-${idx}`} className="relative pl-12">
                  <div className="absolute left-0 top-1 w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center text-xs font-semibold">
                    {item.date.split(' ')[0]}
                  </div>
                  <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm">
                    <div className="flex items-center justify-between gap-4 mb-2">
                      <div className="text-sm text-gray-500">{item.date}</div>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1" style={{fontFamily: 'Manrope, sans-serif'}}>
                      {item.title}
                    </h3>
                    <p className="text-gray-600" style={{fontFamily: 'Manrope, sans-serif'}}>
                      {item.details}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Current Projects (Credentials) */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-light mb-6 text-gray-900" style={{fontFamily: 'Manrope, sans-serif'}}>
              Current Projects
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto" style={{fontFamily: 'Manrope, sans-serif'}}>
              Presently we are operating the following coke oven, pellet, and rolling mill plants.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-10">
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-blue-700" style={{fontFamily: 'Manrope, sans-serif'}}>Coke Oven Plants</h3>
              <div className="space-y-4">
                {currentCokeOvenPlants.map((item, idx) => (
                  <div key={`coke-${idx}`} className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
                      <div>
                        <div className="text-gray-900 font-medium" style={{fontFamily: 'Manrope, sans-serif'}}>{item.title}</div>
                        {item.notes.length > 0 && (
                          <ul className="list-disc ml-5 mt-2 text-sm text-gray-600">
                            {item.notes.map((n, i) => (
                              <li key={i}>{n}</li>
                            ))}
                          </ul>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-8">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-blue-700" style={{fontFamily: 'Manrope, sans-serif'}}>Pellet Plants</h3>
                {currentPelletPlants.map((item, idx) => (
                  <div key={`pellet-${idx}`} className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
                      <div className="text-gray-900 font-medium" style={{fontFamily: 'Manrope, sans-serif'}}>{item.title}</div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-blue-700" style={{fontFamily: 'Manrope, sans-serif'}}>Rolling Mills Plants</h3>
                <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm">
                  <ul className="space-y-2">
                    {currentRollingMillsPlants.map((item, idx) => (
                      <li key={`rm-${idx}`} className="flex items-start gap-3 text-gray-900">
                        <span className="mt-1 block w-2 h-2 rounded-full bg-blue-600" />
                        <span style={{fontFamily: 'Manrope, sans-serif'}}>{item.title}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Previous Experience Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-light mb-6 text-gray-900" style={{fontFamily: 'Manrope, sans-serif'}}>
              Previous Experience
            </h2>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed" style={{fontFamily: 'Manrope, sans-serif'}}>
              While working in other organizations, we successfully commissioned the battery by successfully conducting 
              the battery heating work in the various coke oven plant and also handled its operation and maintenance for a 
              long period. The names of some institutions are mentioned below, where under our supervision the ovens 
              were heated up & commissioned and later we operated the batteries of these institutions under our 
              supervision.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* China Design Plants */}
            <div className="space-y-6">
              <div className="bg-gradient-to-r from-red-50 to-red-100 rounded-xl p-6">
                <h3 className="text-2xl font-bold text-red-700 mb-4" style={{fontFamily: 'Manrope, sans-serif'}}>
                  China Design Non-Recovery Plant
                </h3>
                <div className="space-y-3">
                  {previousExperience.chinaDesignNonRecovery.map((plant, idx) => (
                    <div key={`china-non-${idx}`} className="flex items-start gap-3">
                      <span className="text-green-600 font-bold text-lg">➤</span>
                      <span className="text-green-700 font-medium" style={{fontFamily: 'Manrope, sans-serif'}}>
                        {plant}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-gradient-to-r from-red-50 to-red-100 rounded-xl p-6">
                <h3 className="text-2xl font-bold text-red-700 mb-4" style={{fontFamily: 'Manrope, sans-serif'}}>
                  China Design Recovery Plant
                </h3>
                <div className="space-y-3">
                  {previousExperience.chinaDesignRecovery.map((plant, idx) => (
                    <div key={`china-rec-${idx}`} className="flex items-start gap-3">
                      <span className="text-green-600 font-bold text-lg">➤</span>
                      <span className="text-green-700 font-medium" style={{fontFamily: 'Manrope, sans-serif'}}>
                        {plant}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Indian Design Plants */}
            <div className="space-y-6">
              <div className="bg-gradient-to-r from-orange-50 to-orange-100 rounded-xl p-6">
                <h3 className="text-2xl font-bold text-orange-700 mb-4" style={{fontFamily: 'Manrope, sans-serif'}}>
                  Indian Design Non Recovery Plant
                </h3>
                <div className="space-y-3">
                  {previousExperience.indianDesignNonRecovery.map((plant, idx) => (
                    <div key={`indian-non-${idx}`} className="flex items-start gap-3">
                      <span className="text-green-600 font-bold text-lg">➤</span>
                      <span className="text-green-700 font-medium" style={{fontFamily: 'Manrope, sans-serif'}}>
                        {plant}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-gradient-to-r from-orange-50 to-orange-100 rounded-xl p-6">
                <h3 className="text-2xl font-bold text-orange-700 mb-4" style={{fontFamily: 'Manrope, sans-serif'}}>
                  Indian Design Recovery Plant
                </h3>
                <div className="space-y-3">
                  {previousExperience.indianDesignRecovery.map((plant, idx) => (
                    <div key={`indian-rec-${idx}`} className="flex items-start gap-3">
                      <span className="text-green-600 font-bold text-lg">➤</span>
                      <span className="text-green-700 font-medium" style={{fontFamily: 'Manrope, sans-serif'}}>
                        {plant}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Refractory Repair and Maintenance Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-light mb-6 text-gray-900" style={{fontFamily: 'Manrope, sans-serif'}}>
              Refractory Repair and Maintenance
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto" style={{fontFamily: 'Manrope, sans-serif'}}>
              Our specialized refractory repair and maintenance services across various industrial plants and installations.
            </p>
          </div>

          <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Coke Oven Plant */}
            <div className="bg-white rounded-xl p-6 shadow-lg border-l-4 border-blue-600">
              <h3 className="text-2xl font-bold text-blue-700 mb-4" style={{fontFamily: 'Manrope, sans-serif'}}>
                Coke Oven Plant
              </h3>
              <div className="space-y-3">
                {refractoryRepairData.cokeOvenPlant.map((plant, idx) => (
                  <div key={`coke-refractory-${idx}`} className="flex items-start gap-3">
                    <span className="text-green-600 font-bold text-lg">➤</span>
                    <span className="text-gray-700 font-medium leading-relaxed" style={{fontFamily: 'Manrope, sans-serif'}}>
                      {plant}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Pet Coke Plant */}
            <div className="bg-white rounded-xl p-6 shadow-lg border-l-4 border-purple-600">
              <h3 className="text-2xl font-bold text-purple-700 mb-4" style={{fontFamily: 'Manrope, sans-serif'}}>
                Pet Coke Plant
              </h3>
              <div className="space-y-3">
                {refractoryRepairData.petCokePlant.map((plant, idx) => (
                  <div key={`pet-coke-refractory-${idx}`} className="flex items-start gap-3">
                    <span className="text-green-600 font-bold text-lg">➤</span>
                    <span className="text-gray-700 font-medium leading-relaxed" style={{fontFamily: 'Manrope, sans-serif'}}>
                      {plant}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Blast Furnace Plant */}
            <div className="bg-white rounded-xl p-6 shadow-lg border-l-4 border-red-600">
              <h3 className="text-2xl font-bold text-red-700 mb-4" style={{fontFamily: 'Manrope, sans-serif'}}>
                Blast Furnace Plant
              </h3>
              <div className="space-y-3">
                {refractoryRepairData.blastFurnacePlant.map((plant, idx) => (
                  <div key={`blast-furnace-refractory-${idx}`} className="flex items-start gap-3">
                    <span className="text-green-600 font-bold text-lg">➤</span>
                    <span className="text-gray-700 font-medium leading-relaxed" style={{fontFamily: 'Manrope, sans-serif'}}>
                      {plant}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>



      {/* CTA Section */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-light mb-6" style={{fontFamily: 'Manrope, sans-serif'}}>
            Ready to Start Your Next Project?
          </h2>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto" style={{fontFamily: 'Manrope, sans-serif'}}>
            Let's discuss how we can support your steel plant operations with our proven expertise and dedicated team.
          </p>
          <Button 
            className="bg-white text-gray-900 hover:bg-gray-100 rounded-xl px-8 py-4 text-base font-semibold"
            onClick={() => navigate('/')}
          >
            Get in Touch
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Projects; 