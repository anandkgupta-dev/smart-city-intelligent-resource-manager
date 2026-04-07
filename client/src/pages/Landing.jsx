import React from 'react';
import { Link } from 'react-router-dom';
import { Leaf, Activity, Droplets, Wifi, Trash2, ArrowRight } from 'lucide-react';

const Landing = () => {
    return (
        <div className="min-h-screen bg-transparent relative overflow-hidden flex flex-col font-sans">
            {/* Ambient Background Glows */}
            <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-emerald-500/10 rounded-full blur-[150px] pointer-events-none -translate-y-1/2 translate-x-1/3"></div>
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[150px] pointer-events-none translate-y-1/2 -translate-x-1/3"></div>

            {/* Navigation Bar */}
            <nav className="w-full relative z-20 border-b border-white/5 bg-zinc-900/40 backdrop-blur-md">
                <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <div className="bg-emerald-500/10 p-2 rounded-lg border border-emerald-500/30">
                            <Leaf className="text-emerald-400 drop-shadow-[0_0_8px_rgba(52,211,153,0.8)]" size={24} />
                        </div>
                        <span className="text-xl font-black text-white tracking-tight drop-shadow-sm">
                            EcoNexus
                        </span>
                    </div>
                    <div className="flex items-center gap-4">
                        <Link 
                            to="/login"
                            className="text-zinc-300 hover:text-white text-sm font-bold uppercase tracking-wider transition-colors px-4 py-2"
                        >
                            Sign In
                        </Link>
                        <Link 
                            to="/login"
                            className="bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 hover:border-emerald-500/60 text-sm font-bold uppercase tracking-wider transition-all px-6 py-2.5 rounded-lg shadow-[0_0_15px_rgba(16,185,129,0.1)] hover:shadow-[0_0_25px_rgba(16,185,129,0.25)] flex items-center gap-2"
                        >
                            Register <ArrowRight size={16} />
                        </Link>
                    </div>
                </div>
            </nav>

            {/* Hero Section */}
            <main className="flex-1 relative z-10 flex flex-col items-center justify-center px-6 pt-12 pb-24 text-center">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-[10px] font-bold uppercase tracking-widest mb-8">
                    <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse"></span>
                    Live Intelligence Engine Active
                </div>
                
                <h1 className="text-5xl md:text-7xl font-black text-white tracking-tighter max-w-4xl leading-tight mb-8 drop-shadow-lg">
                    The Smart City Platform For <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-500 drop-shadow-[0_0_15px_rgba(16,185,129,0.3)]">Sustainable</span> Futures.
                </h1>
                
                <p className="text-zinc-400 text-lg md:text-xl max-w-2xl leading-relaxed mb-12">
                    A centralized intelligence platform designed to optimize municipal resources. Track, analyze, and forecast electricity, water, bandwidth, and waste using real-time machine learning analytics to drive sustainable infrastructure.
                </p>

                <div className="flex flex-col sm:flex-row items-center gap-4">
                    <Link 
                        to="/login"
                        className="w-full sm:w-auto bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 text-white font-bold uppercase tracking-widest px-10 py-4 rounded-xl transition-all shadow-[0_0_30px_rgba(16,185,129,0.4)] hover:shadow-[0_0_40px_rgba(16,185,129,0.6)] border border-emerald-400/20 flex items-center justify-center gap-3"
                    >
                        Access Dashboard
                    </Link>
                </div>
                
                {/* Feature Grid */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-24 max-w-5xl w-full">
                    {[
                        { icon: Activity, title: 'Electricity', desc: 'Predictive analytics & load balancing.' },
                        { icon: Droplets, title: 'Water', desc: 'Flow tracking & scarcity deterrence.' },
                        { icon: Wifi, title: 'Bandwidth', desc: 'Traffic profiling & network matrix.' },
                        { icon: Trash2, title: 'Waste', desc: 'Disposal logistics & carbon mapping.' }
                    ].map((feature, idx) => (
                        <div key={idx} className="bg-zinc-900/40 backdrop-blur-md rounded-2xl p-8 border border-white/5 shadow-lg flex flex-col items-center text-center group hover:border-emerald-500/30 hover:bg-zinc-900/60 transition-all duration-300">
                            <div className="bg-white/5 p-4 rounded-full mb-6 border border-white/5 group-hover:scale-110 transition-transform">
                                <feature.icon size={24} className="text-emerald-400 drop-shadow-[0_0_8px_rgba(52,211,153,0.5)]" />
                            </div>
                            <h3 className="text-white font-black uppercase tracking-widest text-sm mb-2 drop-shadow-sm">{feature.title}</h3>
                            <p className="text-zinc-500 text-xs leading-relaxed">{feature.desc}</p>
                        </div>
                    ))}
                </div>
            </main>
        </div>
    );
};

export default Landing;
