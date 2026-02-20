'use client'
import { useEffect, useState } from 'react'
import { useParams } from 'next/navigation'
import { supabase } from '../../lib/supabase'

export default function SpaDetailPage() {
  const params = useParams()
  const [spa, setSpa] = useState<any>(null)
  const [services, setServices] = useState<any[]>([])
  const [loading, setLoading] = useState(true)
  const [selectedService, setSelectedService] = useState<any>(null)
  const [showModal, setShowModal] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', phone: '', date: '', time: '', notes: '' })
  const [submitting, setSubmitting] = useState(false)
  const [success, setSuccess] = useState(false)

  useEffect(() => {
    async function fetchData() {
      const { data: spaData } = await supabase.from('spas').select('*').eq('id', params.id).single()
      const { data: serviceData } = await supabase.from('services').select('*').eq('spa_id', params.id).order('service_type')
      setSpa(spaData)
      setServices(serviceData || [])
      setLoading(false)
    }
    fetchData()
  }, [params.id])

  const handleBook = (service: any) => {
    setSelectedService(service)
    setSuccess(false)
    setShowModal(true)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitting(true)
    await supabase.from('bookings').insert({
      spa_id: spa.id,
      service_id: selectedService.id,
      customer_name: form.name,
      customer_email: form.email,
      customer_phone: form.phone,
      appointment_date: form.date,
      appointment_time: form.time + ':00',
      notes: form.notes,
      status: 'pending'
    })
    setSubmitting(false)
    setSuccess(true)
    setForm({ name: '', email: '', phone: '', date: '', time: '', notes: '' })
  }

  if (loading) return <div className="p-10 text-center text-gray-400">Loading...</div>
  if (!spa) return <div className="p-10 text-center text-gray-400">Spa not found.</div>

  const grouped = services.reduce((acc: any, service: any) => {
    if (!acc[service.service_type]) acc[service.service_type] = []
    acc[service.service_type].push(service)
    return acc
  }, {})

  return (
    <main className="min-h-screen bg-white">
      <div className="relative h-72 w-full">
        <img
          src={spa.image_url || 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=800'}
          alt={spa.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/30" />
        <div className="absolute bottom-6 left-6 text-white">
          <h1 className="text-3xl font-semibold">{spa.name}</h1>
          <p className="text-sm mt-1 opacity-90">{spa.address}</p>
        </div>
      </div>
      <div className="max-w-3xl mx-auto px-6 py-10">
        <div className="flex gap-6 text-sm text-gray-500 mb-8">
          {spa.phone && <span>{spa.phone}</span>}
          {spa.website && <a href={spa.website} target="_blank" className="text-[#7A9E87] hover:underline">Website</a>}
        </div>
        {spa.description && (
          <div className="mb-10">
            <h2 className="text-lg font-semibold text-gray-800 mb-2">About</h2>
            <p className="text-gray-600 leading-relaxed">{spa.description}</p>
          </div>
        )}
        <div>
          <h2 className="text-lg font-semibold text-gray-800 mb-6">Services</h2>
          {Object.entries(grouped).map(([type, items]: any) => (
            <div key={type} className="mb-8">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-[#7A9E87] mb-3">{type}</h3>
              <div className="space-y-3">
                {items.map((service: any) => (
                  <div key={service.id} className="flex items-center justify-between border border-gray-100 rounded-xl p-4 hover:shadow-sm transition">
                    <div>
                      <p className="font-medium text-gray-800">{service.name}</p>
                      <p className="text-sm text-gray-400">{service.duration_minutes} min</p>
                    </div>
                    <div className="flex items-center gap-4">
                      <span className="font-semibold text-gray-700">${service.price}</span>
                      <button onClick={() => handleBook(service)} className="bg-[#7A9E87] text-white text-sm px-4 py-2 rounded-lg hover:bg-[#6a8e77] transition">Book</button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      {showModal && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-md w-full p-8 relative">
            <button onClick={() => setShowModal(false)} className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 text-xl">X</button>
            {success ? (
              <div className="text-center py-8">
                <div className="text-4xl mb-4">done</div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Booking Confirmed!</h3>
                <p className="text-gray-500 mb-6">We will see you soon at {spa.name}.</p>
                <button onClick={() => setShowModal(false)} className="bg-[#7A9E87] text-white px-6 py-2 rounded-lg hover:bg-[#6a8e77] transition">Done</button>
              </div>
            ) : (
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-1">Book {selectedService?.name}</h3>
                <p className="text-sm text-gray-400 mb-6">{selectedService?.duration_minutes} min - ${selectedService?.price}</p>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <input required placeholder="Your name" value={form.name} onChange={e => setForm({...form, name: e.target.value})} className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#7A9E87]" />
                  <input required type="email" placeholder="Email address" value={form.email} onChange={e => setForm({...form, email: e.target.value})} className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#7A9E87]" />
                  <input placeholder="Phone number" value={form.phone} onChange={e => setForm({...form, phone: e.target.value})} className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#7A9E87]" />
                  <input required type="date" value={form.date} onChange={e => setForm({...form, date: e.target.value})} className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#7A9E87]" />
                  <input required type="time" value={form.time} onChange={e => setForm({...form, time: e.target.value})} className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#7A9E87]" />
                  <textarea placeholder="Any notes or requests?" value={form.notes} onChange={e => setForm({...form, notes: e.target.value})} className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#7A9E87] h-20 resize-none" />
                  <button type="submit" disabled={submitting} className="w-full bg-[#7A9E87] text-white py-3 rounded-xl hover:bg-[#6a8e77] transition font-medium">{submitting ? 'Confirming...' : 'Confirm Booking'}</button>
                </form>
              </div>
            )}
          </div>
        </div>
      )}
    </main>
  )