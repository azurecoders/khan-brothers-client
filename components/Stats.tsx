import React from 'react'

const Stats = () => {
  return (
    <section className="py-16 bg-primary text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div className="space-y-2">
            <p className="text-4xl md:text-5xl font-bold font-heading text-secondary">150+</p>
            <p className="text-sm md:text-base text-gray-300 font-medium">Projects Completed</p>
          </div>
          <div className="space-y-2">
            <p className="text-4xl md:text-5xl font-bold font-heading text-secondary">50+</p>
            <p className="text-sm md:text-base text-gray-300 font-medium">Expert Staff</p>
          </div>
          <div className="space-y-2">
            <p className="text-4xl md:text-5xl font-bold font-heading text-secondary">100%</p>
            <p className="text-sm md:text-base text-gray-300 font-medium">Client Satisfaction</p>
          </div>
          <div className="space-y-2">
            <p className="text-4xl md:text-5xl font-bold font-heading text-secondary">24/7</p>
            <p className="text-sm md:text-base text-gray-300 font-medium">Support Available</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Stats
