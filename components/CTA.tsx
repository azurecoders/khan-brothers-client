import Link from 'next/link'
import React from 'react'

const CTA = () => {
  return (
    <section className="py-24 bg-slate-50">
      <div className="container mx-auto px-4 text-center max-w-3xl">
        <h2 className="text-3xl font-heading font-bold text-primary mb-6">Ready to Start Your Project?</h2>
        <p className="text-muted-foreground text-lg mb-8">
          Contact our team of experts today for a consultation on your engineering, construction, or IT infrastructure needs.
        </p>
        <Link href="/contact">
          <button className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-bold px-10 h-12 shadow-lg shadow-secondary/20 rounded-md cursor-pointer">
            Contact Us Now
          </button>
        </Link>
      </div>
    </section>
  )
}

export default CTA
