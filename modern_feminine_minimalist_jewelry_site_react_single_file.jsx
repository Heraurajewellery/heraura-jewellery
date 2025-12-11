// Modern Feminine Minimalist - Single-file React component
// TailwindCSS utility classes assumed to be available in your project.
// How to use: drop this component into a React app (e.g. create-react-app or Next.js page)
// Customize: replace logoSrc, hero image URLs, product data and brand colors below.

import React from 'react'

const logoSrc = 'https://images.unsplash.com/photo-1519741491531-2a8f0a9a0f3b?w=800&q=80'
const heroImage = 'https://images.unsplash.com/photo-1520975918648-2f9a2b6f3ad3?w=1600&q=80'

const products = [
  {
    id: 1,
    name: 'The Lila Necklace',
    price: '£120',
    img: 'https://images.unsplash.com/photo-1519744792095-2f2205e87b6f?w=800&q=60',
    desc: 'Delicate chain with a brushed pendant — wearable every day.'
  },
  {
    id: 2,
    name: 'Maya Hoops',
    price: '£85',
    img: 'https://images.unsplash.com/photo-1567427018141-0584cfcbf1a0?w=800&q=60',
    desc: 'Lightweight hoop with subtle hammered texture.'
  },
  {
    id: 3,
    name: 'Evelyn Ring',
    price: '£95',
    img: 'https://images.unsplash.com/photo-1520975698510-0f9b1b2b2a3b?w=800&q=60',
    desc: 'Stackable band with soft curvature.'
  }
]

export default function ModernFeminineMinimalistSite() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      {/* NAV */}
      <header className="bg-white shadow-sm sticky top-0 z-40">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src={logoSrc} alt="brand logo" className="w-10 h-10 rounded-full object-cover" />
            <span className="font-serif text-xl text-gray-900">Her Aura Jewellery</span>
          </div>
          <nav className="hidden md:flex gap-6 items-center text-sm">
            <a href="#collections" className="hover:text-gray-600">Collections</a>
            <a href="#about" className="hover:text-gray-600">About</a>
            <a href="#testimonials" className="hover:text-gray-600">Testimonials</a>
            <a href="#contact" className="px-4 py-2 rounded-md border border-gray-200 hover:shadow">Contact</a>
          </nav>
          <div className="md:hidden">{/* mobile menu placeholder */}
            <button aria-label="open menu">☰</button>
          </div>
        </div>
      </header>

      {/* HERO */}
      <section className="relative">
        <img src={heroImage} alt="hero" className="w-full h-96 object-cover brightness-90" />
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-4xl mx-auto px-6 py-12 text-center">
            <div className="inline-block bg-white/80 backdrop-blur-sm rounded-2xl px-8 py-6 shadow-lg">
              <h1 className="text-3xl md:text-4xl font-serif tracking-tight text-gray-900">Modern Jewelry with a Feminine Touch</h1>
              <p className="mt-3 text-gray-700 max-w-xl mx-auto">Effortless pieces designed for everyday elegance — crafted for comfort, styled for you.</p>
              <div className="mt-6 flex gap-3 justify-center">
                <a href="#collections" className="px-6 py-2 rounded-full bg-rose-200 hover:bg-rose-300 font-medium">Shop Collections</a>
                <a href="#about" className="px-6 py-2 rounded-full border border-gray-200">Our Story</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <main className="max-w-6xl mx-auto px-6 py-12">
        {/* Collections / Products */}
        <section id="collections" className="mt-8">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-serif">Best Sellers</h2>
              <p className="text-gray-600 mt-1">Beautiful, wearable pieces loved by customers.</p>
            </div>
            <div className="hidden md:flex gap-2">
              <button className="px-4 py-2 rounded-md border border-gray-200">Necklaces</button>
              <button className="px-4 py-2 rounded-md border border-gray-200">Earrings</button>
              <button className="px-4 py-2 rounded-md border border-gray-200">Rings</button>
            </div>
          </div>

          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map(p => (
              <article key={p.id} className="bg-white rounded-2xl p-4 shadow-sm hover:shadow-md transition">
                <div className="rounded-xl overflow-hidden">
                  <img src={p.img} alt={p.name} className="w-full h-56 object-cover" />
                </div>
                <div className="mt-3">
                  <h3 className="font-medium">{p.name}</h3>
                  <p className="text-sm text-gray-500 mt-1">{p.desc}</p>
                  <div className="mt-3 flex items-center justify-between">
                    <span className="font-semibold">{p.price}</span>
                    <button className="px-3 py-1 rounded-full bg-rose-100 border border-rose-200 text-sm">Add</button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* About */}
        <section id="about" className="mt-12 grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-2xl font-serif">Crafted for the modern you</h2>
            <p className="mt-4 text-gray-600">We design jewelry that fits into your life — subtle details, premium finishes, and ethical materials. Each piece is tested for comfort and durability so you can wear it every day.</p>
            <ul className="mt-4 space-y-2 text-gray-600">
              <li>• Ethically sourced metals</li>
              <li>• Hypoallergenic plating</li>
              <li>• Free resizing for rings</li>
            </ul>
            <div className="mt-6">
              <a href="#contact" className="px-5 py-2 rounded-full bg-rose-200">Get in touch</a>
            </div>
          </div>
          <div className="rounded-xl overflow-hidden">
            <img src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=1200&q=60" alt="craft" className="w-full h-80 object-cover rounded-xl shadow" />
          </div>
        </section>

        {/* Testimonials */}
        <section id="testimonials" className="mt-12">
          <h3 className="text-xl font-serif">Loved by customers</h3>
          <div className="mt-4 grid sm:grid-cols-2 gap-4">
            <blockquote className="bg-white p-4 rounded-lg shadow-sm">“Beautiful quality and fast delivery — my new go-to pieces.” <div className="mt-2 text-sm text-gray-500">— Sarah</div></blockquote>
            <blockquote className="bg-white p-4 rounded-lg shadow-sm">“Delicate and comfortable to wear daily. I get compliments all the time!” <div className="mt-2 text-sm text-gray-500">— Emma</div></blockquote>
          </div>
        </section>

        {/* Newsletter */}
        <section className="mt-12 bg-white rounded-2xl p-6 shadow-sm">
          <div className="md:flex items-center justify-between">
            <div>
              <h4 className="text-lg font-serif">Join our newsletter</h4>
              <p className="text-gray-600 mt-1">Get new arrivals and exclusive offers — no spam.</p>
            </div>
            <form className="mt-4 md:mt-0 flex gap-2">
              <input aria-label="email" placeholder="Your email" className="px-4 py-2 rounded-full border border-gray-200 w-full md:w-64" />
              <button type="submit" className="px-4 py-2 rounded-full bg-rose-200">Subscribe</button>
            </form>
          </div>
        </section>

        {/* Contact / Footer */}
        <section id="contact" className="mt-12 grid md:grid-cols-2 gap-6">
          <div className="bg-white rounded-2xl p-6 shadow-sm">
            <h5 className="font-serif text-lg">Contact</h5>
            <p className="text-gray-600 mt-2">For custom orders, wholesale or press enquiries, reach out — we usually reply within 24-48 hours.</p>
            <div className="mt-4 text-sm text-gray-700 space-y-2">
              <div>✉️ hello@amorebijou.example</div>
              <div>📍 London, UK</div>
            </div>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow-sm">
            <h5 className="font-serif text-lg">Store Hours</h5>
            <p className="text-gray-600 mt-2">Online store open 24/7. Private appointments by request.</p>
            <div className="mt-4">
              <a className="px-4 py-2 rounded-full border border-gray-200">Request appointment</a>
            </div>
          </div>
        </section>

      </main>

      <footer className="bg-white border-t mt-12">
        <div className="max-w-6xl mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-sm text-gray-600">© {new Date().getFullYear()} Her Aura Jewellery — All rights reserved</div>
          <div className="flex gap-3 text-sm">
            <a>Privacy</a>
            <a>Terms</a>
            <a className="ml-4">Instagram</a>
          </div>
        </div>
      </footer>
    </div>
  )
}
