export default function ContactUs() {
    return (
      <section id="contact" className="py-20 bg-gray-100">
        <div className="container mx-auto px-6 sm:px-12">
          <h2 className="text-4xl font-bold text-center text-green-700 mb-8">
            Contact Us
          </h2>
          <p className="text-center text-gray-700 text-lg mb-12">
            Have questions or want to reach out? We'd love to hear from you!
          </p>
          <div className="max-w-2xl mx-auto">
            <form className="space-y-6">
              {/* Name Input */}
              <div>
                <label htmlFor="name" className="block text-sm font-bold text-gray-700">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring focus:ring-green-300"
                  placeholder="Enter your name"
                  required
                />
              </div>
              {/* Email Input */}
              <div>
                <label htmlFor="email" className="block text-sm font-bold text-gray-700">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring focus:ring-green-300"
                  placeholder="Enter your email"
                  required
                />
              </div>
              {/* Message Input */}
              <div>
                <label htmlFor="message" className="block text-sm font-bold text-gray-700">
                  Your Message
                </label>
                <textarea
                  id="message"
                  rows="5"
                  className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring focus:ring-green-300"
                  placeholder="Write your message here..."
                  required
                ></textarea>
              </div>
              {/* Submit Button */}
              <div className="text-center">
                <button
                  type="submit"
                  className="px-6 py-3 bg-green-700 text-white font-bold rounded-full shadow-lg hover:bg-green-800 transition-all"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    );
  }
  