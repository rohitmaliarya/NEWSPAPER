import React, { useState } from "react";
import axios from "axios";
import { Newspaper, Star, CheckCircle, Users, TrendingUp, Globe, Mail, User, CreditCard, Clock, BarChart3, Shield, Zap, BookOpen, Bell } from "lucide-react";

const NewspaperSubscription = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [plan, setPlan] = useState("Free");
  const [isLoading, setIsLoading] = useState(false);

  // Updated submit handler using axios and backend logic
  const submitHandler = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const res = await axios.post("http://localhost:8080/api/register", {
        username,
        email,
        plan,
      });
      if (res.data.url) {
        // For Pro plan, redirect to Stripe Checkout
        window.location.href = res.data.url;
      } else {
        alert("Free plan user registered!");
      }
    } catch (err) {
      console.error("Error:", err);
      alert("There was an error. Please try again.");
    }
    setIsLoading(false);
  };

  const features = [
    { icon: <Globe className="w-6 h-6" />, title: "Global Coverage", desc: "Breaking news from around the world" },
    { icon: <TrendingUp className="w-6 h-6" />, title: "Market Analysis", desc: "Expert financial insights daily" },
    { icon: <Users className="w-6 h-6" />, title: "Community", desc: "Join thousands of informed readers" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      {/* Header */}
      <header className="border-b-4 border-slate-900 bg-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="bg-slate-900 p-3 rounded-lg">
                <Newspaper className="w-8 h-8 text-white" />
              </div>
              <div>
                <h1 className="text-3xl font-bold text-slate-900 tracking-tight">
                  NodeSure NewsLetter
                </h1>
                <p className="text-slate-600 text-sm">Truth in Every Story</p>
              </div>
            </div>
            <div className="hidden md:flex items-center space-x-2 text-slate-600">
              <span className="text-sm font-medium">ESTABLISHED 2024</span>
              <div className="w-2 h-2 bg-slate-400 rounded-full"></div>
              <span className="text-sm font-medium">DIGITAL FIRST</span>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section with Images */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/10 to-blue-900/10"></div>
        <div className="max-w-7xl mx-auto px-4 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-5xl lg:text-6xl font-bold text-slate-900 leading-tight">
                  Stay Informed,
                  <span className="text-blue-600 block">Stay Ahead</span>
                </h2>
                <p className="text-xl text-slate-600 leading-relaxed">
                  Join thousands of professionals who trust NodeSure NewsLetter for breaking news, 
                  in-depth analysis, and market insights delivered straight to your inbox.
                </p>
                {/* CTA Button */}
                <div className="pt-6">
                  <button
                    onClick={() => document.getElementById('subscription-form').scrollIntoView({ behavior: 'smooth' })}
                    className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-4 rounded-xl font-bold text-lg hover:from-blue-700 hover:to-blue-800 transform hover:scale-105 transition-all shadow-lg hover:shadow-xl"
                  >
                    Subscribe Now - Start Free
                  </button>
                </div>
              </div>
              
              {/* Feature Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {features.map((feature, index) => (
                  <div key={index} className="bg-white p-6 rounded-xl shadow-lg border border-slate-100 hover:shadow-xl transition-shadow">
                    <div className="text-blue-600 mb-3">{feature.icon}</div>
                    <h3 className="font-bold text-slate-900 mb-2">{feature.title}</h3>
                    <p className="text-sm text-slate-600">{feature.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Images Section */}
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <img 
                    src="https://raw.githubusercontent.com/akshatjaiin/newspaper-images/refs/heads/main/image0.jpeg"
                    alt="News Coverage"
                    className="w-full h-48 object-cover rounded-xl shadow-lg hover:shadow-2xl transition-shadow"
                  />
                  <img 
                    src="https://raw.githubusercontent.com/akshatjaiin/newspaper-images/refs/heads/main/image1.jpeg"
                    alt="Global Reports" 
                    className="w-full h-32 object-cover rounded-xl shadow-lg hover:shadow-2xl transition-shadow"
                  />
                </div>
                <div className="pt-8">
                  <img 
                    src="https://raw.githubusercontent.com/akshatjaiin/newspaper-images/refs/heads/main/image2.jpeg"
                    alt="Digital Innovation"
                    className="w-full h-64 object-cover rounded-xl shadow-lg hover:shadow-2xl transition-shadow"
                  />
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-blue-200 rounded-full opacity-20"></div>
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-slate-200 rounded-full opacity-30"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Benefits Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              Why Choose NodeSure NewsLetter?
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Get the edge you need with carefully curated content, expert analysis, 
              and insights that drive informed decision-making.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {/* Benefit 1 */}
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-2xl border border-blue-100 hover:shadow-lg transition-shadow">
              <div className="bg-blue-600 w-14 h-14 rounded-xl flex items-center justify-center mb-6">
                <Clock className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">Daily Market Briefings</h3>
              <p className="text-slate-600 mb-4">
                Start your day with comprehensive market analysis, key economic indicators, 
                and actionable insights delivered before markets open.
              </p>
              <ul className="space-y-2 text-sm text-slate-600">
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  Pre-market analysis
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  Economic calendar highlights
                </li>
              </ul>
            </div>

            {/* Benefit 2 */}
            <div className="bg-gradient-to-br from-emerald-50 to-teal-50 p-8 rounded-2xl border border-emerald-100 hover:shadow-lg transition-shadow">
              <div className="bg-emerald-600 w-14 h-14 rounded-xl flex items-center justify-center mb-6">
                <BarChart3 className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">Expert Research Reports</h3>
              <p className="text-slate-600 mb-4">
                Deep-dive analysis from industry experts covering emerging trends, 
                sector spotlights, and investment opportunities.
              </p>
              <ul className="space-y-2 text-sm text-slate-600">
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  Weekly sector analysis
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  Company deep-dives
                </li>
              </ul>
            </div>

            {/* Benefit 3 */}
            <div className="bg-gradient-to-br from-purple-50 to-violet-50 p-8 rounded-2xl border border-purple-100 hover:shadow-lg transition-shadow">
              <div className="bg-purple-600 w-14 h-14 rounded-xl flex items-center justify-center mb-6">
                <Shield className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">Risk Assessment</h3>
              <p className="text-slate-600 mb-4">
                Stay ahead of potential risks with our comprehensive risk analysis, 
                geopolitical insights, and early warning indicators.
              </p>
              <ul className="space-y-2 text-sm text-slate-600">
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  Geopolitical updates
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  Risk alerts
                </li>
              </ul>
            </div>

            {/* Benefit 4 */}
            <div className="bg-gradient-to-br from-orange-50 to-red-50 p-8 rounded-2xl border border-orange-100 hover:shadow-lg transition-shadow">
              <div className="bg-orange-600 w-14 h-14 rounded-xl flex items-center justify-center mb-6">
                <Zap className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">Breaking News Alerts</h3>
              <p className="text-slate-600 mb-4">
                Never miss market-moving news with instant alerts for breaking developments 
                that could impact your investments and decisions.
              </p>
              <ul className="space-y-2 text-sm text-slate-600">
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  Real-time notifications
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  Market impact analysis
                </li>
              </ul>
            </div>

            {/* Benefit 5 */}
            <div className="bg-gradient-to-br from-cyan-50 to-blue-50 p-8 rounded-2xl border border-cyan-100 hover:shadow-lg transition-shadow">
              <div className="bg-cyan-600 w-14 h-14 rounded-xl flex items-center justify-center mb-6">
                <BookOpen className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">Educational Content</h3>
              <p className="text-slate-600 mb-4">
                Expand your knowledge with our educational series covering financial concepts, 
                investment strategies, and market fundamentals.
              </p>
              <ul className="space-y-2 text-sm text-slate-600">
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  Weekly tutorials
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  Strategy guides
                </li>
              </ul>
            </div>

            {/* Benefit 6 */}
            <div className="bg-gradient-to-br from-pink-50 to-rose-50 p-8 rounded-2xl border border-pink-100 hover:shadow-lg transition-shadow">
              <div className="bg-pink-600 w-14 h-14 rounded-xl flex items-center justify-center mb-6">
                <Bell className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">Exclusive Interviews</h3>
              <p className="text-slate-600 mb-4">
                Get exclusive access to interviews with industry leaders, CEOs, 
                and market experts sharing their insights and predictions.
              </p>
              <ul className="space-y-2 text-sm text-slate-600">
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  Monthly CEO interviews
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  Expert roundtables
                </li>
              </ul>
            </div>
          </div>

          {/* Newsletter Sample Preview */}
          <div className="bg-gradient-to-r from-slate-900 to-blue-900 rounded-2xl p-8 text-white">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold mb-4">What Our Readers Say</h3>
              <div className="flex justify-center space-x-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <p className="text-sm mb-4">
                  "NodeSure NewsLetter has become my go-to source for market insights. 
                  Their analysis is spot-on and has helped me make better investment decisions."
                </p>
                <div className="text-xs text-blue-200">— Sarah Chen, Portfolio Manager</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <p className="text-sm mb-4">
                  "The daily briefings save me hours of research. Everything I need to know 
                  is delivered in a concise, actionable format."
                </p>
                <div className="text-xs text-blue-200">— Michael Rodriguez, Financial Advisor</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <p className="text-sm mb-4">
                  "The exclusive interviews and expert insights give me an edge in understanding 
                  market trends before they become mainstream."
                </p>
                <div className="text-xs text-blue-200">— David Park, Hedge Fund Analyst</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Subscription Section */}
      <section className="py-20 bg-gradient-to-r from-slate-50 to-blue-50">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              Choose Your News Experience
            </h2>
            <p className="text-xl text-slate-600">
              Select the perfect plan to stay informed and ahead of the curve
            </p>
          </div>

          {/* Pricing Cards */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Free Plan */}
            <div className="bg-white rounded-2xl p-8 shadow-xl border border-slate-200 hover:shadow-2xl transition-shadow">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-slate-900 mb-2">Free Reader</h3>
                <div className="text-4xl font-bold text-slate-900 mb-2">$0</div>
                <p className="text-slate-600">Perfect for casual readers</p>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center text-slate-600">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  Weekly newsletter
                </li>
                <li className="flex items-center text-slate-600">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  Basic market updates
                </li>
                <li className="flex items-center text-slate-600">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  Community access
                </li>
              </ul>
            </div>

            {/* Pro Plan */}
            <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl p-8 shadow-2xl text-white relative overflow-hidden">
              <div className="absolute top-4 right-4">
                <span className="bg-yellow-400 text-slate-900 px-3 py-1 rounded-full text-sm font-bold flex items-center">
                  <Star className="w-4 h-4 mr-1" />
                  POPULAR
                </span>
              </div>
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold mb-2">Pro Subscriber</h3>
                <div className="text-4xl font-bold mb-2">$1</div>
                <p className="text-blue-100">For serious news enthusiasts</p>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-blue-200 mr-3" />
                  Daily premium briefings
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-blue-200 mr-3" />
                  Expert research reports
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-blue-200 mr-3" />
                  Breaking news alerts
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-blue-200 mr-3" />
                  Exclusive interviews
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-blue-200 mr-3" />
                  Risk assessment reports
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-blue-200 mr-3" />
                  Priority support
                </li>
              </ul>
            </div>
          </div>

          {/* Subscription Form */}
          <form
  id="subscription-form"
  onSubmit={submitHandler}
  className="bg-white rounded-2xl shadow-2xl p-8 border border-slate-200"
>
  <div className="space-y-6">
    <div className="text-center mb-8">
      <h3 className="text-2xl font-bold text-slate-900 mb-2">
        Start Your Subscription
      </h3>
      <p className="text-slate-600">Join our community of informed readers</p>
    </div>

    <div className="grid md:grid-cols-2 gap-6">
      <div className="relative">
        <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400" />
        <input
          type="text"
          placeholder="Enter your name"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
          className="w-full pl-10 pr-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
        />
      </div>
      
      <div className="relative">
        <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400" />
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="w-full pl-10 pr-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
        />
      </div>
    </div>

    <div>
      <label className="block text-slate-700 font-semibold mb-3">Choose your plan:</label>
      <div className="flex flex-col sm:flex-row gap-4">
        <label className={`flex items-center border rounded-xl px-4 py-3 cursor-pointer w-full sm:w-auto transition hover:ring-2 hover:ring-blue-400 ${plan === "Free" ? "border-blue-600 ring-2" : "border-slate-300"}`}>
          <input
            type="radio"
            name="plan"
            value="Free"
            checked={plan === "Free"}
            onChange={(e) => setPlan(e.target.value)}
            className="hidden"
          />
          <div>
            <p className="font-bold text-slate-900">Free Plan</p>
            <p className="text-sm text-slate-500">$0/month</p>
          </div>
        </label>

        <label className={`flex items-center border rounded-xl px-4 py-3 cursor-pointer w-full sm:w-auto transition hover:ring-2 hover:ring-blue-400 ${plan === "Pro" ? "border-blue-600 ring-2" : "border-slate-300"}`}>
          <input
            type="radio"
            name="plan"
            value="Pro"
            checked={plan === "Pro"}
            onChange={(e) => setPlan(e.target.value)}
            className="hidden"
          />
          <div>
            <p className="font-bold text-slate-900">Pro Plan</p>
            <p className="text-sm text-slate-500">$1/month</p>
          </div>
        </label>
      </div>
    </div>

    <button
      type="submit"
      disabled={isLoading}
      className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-4 px-6 rounded-xl font-bold text-lg hover:from-blue-700 hover:to-blue-800 transform hover:scale-105 transition-all shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
    >
      {isLoading ? "Processing..." : plan === "Pro" ? "Subscribe & Pay Now" : "Join Free"}
    </button>
  </div>
</form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <Newspaper className="w-8 h-8" />
              <span className="text-2xl font-bold">NodeSure NewsLetter</span>
            </div>
            <p className="text-slate-400 mb-6">
              Delivering truth, insights, and stories that matter to informed readers worldwide.
            </p>
            <div className="text-sm text-slate-500">
              © 2024 NodeSure NewsLetter. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default NewspaperSubscription;