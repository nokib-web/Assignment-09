import React from "react";
import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaQuestionCircle,
  FaExclamationTriangle,
  FaCalendarAlt,
  FaCreditCard,
  FaComments
} from "react-icons/fa";

export default function SupportPage() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      {/* Header */}
      <section className="bg-white shadow-sm py-16 text-center">
        <h1 className="text-4xl font-bold mb-4">Support Center</h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Your pets mean the world to us. We are here to help you with anything—anytime.
        </p>
      </section>

      {/* Quick Help Cards */}
      <section className="max-w-6xl mx-auto px-6 py-14 grid md:grid-cols-3 gap-8">
        {/* Emergency Support */}
        <div className="bg-white p-8 rounded-2xl shadow hover:shadow-lg transition">
          <FaExclamationTriangle className="w-10 h-10 text-red-500 mb-4" />
          <h2 className="text-xl font-semibold mb-2">Emergency Support</h2>
          <p className="text-gray-600 mb-4">
            If your pet is in immediate distress, call our 24/7 emergency line.
          </p>
          <p className="font-semibold">+880 XXX XXX XXX</p>
        </div>

        {/* Booking Support */}
        <div className="bg-white p-8 rounded-2xl shadow hover:shadow-lg transition">
          <FaCalendarAlt className="w-10 h-10 text-blue-500 mb-4" />
          <h2 className="text-xl font-semibold mb-2">Booking & Scheduling</h2>
          <p className="text-gray-600">
            Modify bookings, check availability, and manage drop-off/pick-up.
          </p>
        </div>

        {/* Payments */}
        <div className="bg-white p-8 rounded-2xl shadow hover:shadow-lg transition">
          <FaCreditCard className="w-10 h-10 text-green-600 mb-4" />
          <h2 className="text-xl font-semibold mb-2">Account & Payments</h2>
          <p className="text-gray-600">
            Support for invoices, refunds, and account updates.
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-10">Frequently Asked Questions</h2>

          <div className="space-y-6">
            <FAQ q="What services does WarmPaws offer?" a="Daycare, boarding, grooming, nutrition care, and pickup/drop-off services." />
            <FAQ q="Can I check on my pet during their stay?" a="Yes, we send image and video updates throughout the day." />
            <FAQ q="Do you accept all pet breeds?" a="We accept all friendly, vaccinated, and non-aggressive pets." />
            <FAQ q="What should I bring for boarding?" a="Food, toys, and any special instructions for your pet." />
            <FAQ q="Can you give my pet medicine?" a="Yes, our trained caregivers can administer medication safely." />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="max-w-5xl mx-auto px-6 py-16 grid md:grid-cols-3 gap-10">
        {/* Live Chat */}
        <div className="bg-white rounded-2xl p-8 shadow hover:shadow-lg transition text-center">
          <FaComments className="w-10 h-10 text-purple-600 mb-4 mx-auto" />
          <h3 className="text-xl font-semibold mb-2">Live Chat</h3>
          <p className="text-gray-600">Available 9:00 AM – 11:00 PM (BDT)</p>
        </div>

        {/* Phone */}
        <div className="bg-white rounded-2xl p-8 shadow hover:shadow-lg transition text-center">
          <FaPhone className="w-10 h-10 text-blue-600 mb-4 mx-auto" />
          <h3 className="text-xl font-semibold mb-2">Phone Support</h3>
          <p className="text-gray-600">+880 XXX XXX XXX</p>
          <p className="text-gray-600">24/7 Available</p>
        </div>

        {/* Email */}
        <div className="bg-white rounded-2xl p-8 shadow hover:shadow-lg transition text-center">
          <FaEnvelope className="w-10 h-10 text-green-700 mb-4 mx-auto" />
          <h3 className="text-xl font-semibold mb-2">Email Support</h3>
          <p className="text-gray-600">support@warmpaws.com</p>
          <p className="text-gray-600">Response within 12 hours</p>
        </div>
      </section>

      {/* Support Ticket */}
      <section className="bg-white py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-10">Submit a Support Ticket</h2>

          <form className="grid gap-6">
            <input className="p-4 border rounded-xl" placeholder="Your Name" />
            <input className="p-4 border rounded-xl" placeholder="Phone / Email" />
            <input className="p-4 border rounded-xl" placeholder="Pet Name" />
            <select className="p-4 border rounded-xl">
              <option>Problem Category</option>
              <option>Booking Issue</option>
              <option>Payment Issue</option>
              <option>Pet Update Issue</option>
              <option>General Question</option>
            </select>
            <textarea className="p-4 border rounded-xl" rows="5" placeholder="Describe your issue..."></textarea>

            <button className="bg-blue-600 text-white py-4 rounded-xl font-semibold hover:bg-blue-700 transition">
              Submit Request
            </button>
          </form>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 text-center">
        <h2 className="text-2xl font-bold mb-4">Still Need Help?</h2>
        <p className="text-gray-600 mb-6">Our team is always here for you.</p>
        <a className="inline-block bg-green-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-green-700 transition" href="#">
          Contact Support
        </a>
      </section>
    </div>
  );
}

function FAQ({ q, a }) {
  return (
    <div className="p-6 bg-gray-100 rounded-xl flex gap-4">
      <FaQuestionCircle className="w-6 h-6 text-blue-500 mt-1" />
      <div>
        <h4 className="text-lg font-semibold">{q}</h4>
        <p className="text-gray-600 mt-1">{a}</p>
      </div>
    </div>
  );
}
