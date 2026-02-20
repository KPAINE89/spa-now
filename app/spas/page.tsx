'use client'
import { useEffect, useState } from 'react'
import { supabase } from '../lib/supabase'
import Link from 'next/link'

export default function SpasPage() {
  const [spas, setSpas] = useState<any[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchSpas() {
      const { data } = await supabase.from('spas').select('*')
      setSpas(data || [])
      setLoading(false)
    }
    fetchSpas()
  }, [])

  if (loading) return <div className="p-10 text-center text-gray-400">Loading...</div>

  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      <h1 className="text-3xl font-semibold text-gray-800 mb-2">Spas in Atlanta</h1>
      <p className="text-gray-500 mb-10">Find and book your perfect wellness experience.</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {spas.map((spa) => (
          <div key={spa.id} className="rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-md transition">
            <img
              src={spa.image_url || 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=800'}
              alt={spa.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-5">
              <h2 className="font-semibold text-gray-800 text-lg">{spa.name}</h2>
              <p className="text-sm text-gray-400 mt-1 mb-4">{spa.address}</p>
              <Link
                href={`/spas/${spa.id}`}
                className="block text-center bg-[#7A9E87] text-white text-sm px-4 py-2 rounded-lg hover:bg-[#6a8e77] transition"
              >
                View & Book
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}