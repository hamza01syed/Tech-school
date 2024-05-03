"use client"

import { Meteors } from "@/components/ui/meteors";

function page() {
  return (
    <div className="bg-black min-h-screen">
    {/* Meteors Effect */}
    <div className="absolute inset-0">
      <Meteors number={20} />
    </div>

    <div className="absolute inset-0 flex justify-center items-center">
      <div className="max-w-md mx-auto px-4 py-8">
        <h1 className="text-4xl text-center font-bold text-white mb-4">Contact Us</h1>
        <p className="text-lg text-gray-400 mb-6">
          Have questions, feedback, or just want to say hello? Feel free to reach out to us using the form below.
        </p>
        <form className="grid grid-cols-1 gap-4">
          <input type="text" placeholder="Your Name" className="border border-gray-700 px-4 py-2 rounded-lg bg-gray-800 text-gray-100" />
          <input type="email" placeholder="Your Email" className="border border-gray-700 px-4 py-2 rounded-lg bg-gray-800 text-gray-100" />
          <textarea placeholder="Your Message" rows={4} className="border border-gray-700 px-4 py-2 rounded-lg bg-gray-800 text-gray-100" />
          <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg">Send Message</button>
        </form>
      </div>
    </div>
  </div>
)
}

export default page