import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from 'react-router-dom';
import { Activity, Shield, User, BrainCircuit, CheckCircle2, ShieldCheck, Clock, LineChart, Lock, ShieldAlert, AlertTriangle, Zap, Code, Database, Server, ChevronDown, Stethoscope, FileText, CheckCircle, Download, Calendar, Users, Info, ArrowRight, Pill, LogOut, Search, X } from 'lucide-react';
import axios from 'axios';

// ==========================================
// 1. HOME PAGE (Upgraded)
// ==========================================
function Home() {
  const navigate = useNavigate();
  return (
    <div className="space-y-20 animate-fade-in pb-16">
      
      {/* HERO SECTION */}
      <div className="text-center pt-20 pb-12 relative flex flex-col items-center">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-gradient-to-r from-[#2ea043]/10 via-[#a371f7]/15 to-[#58a6ff]/10 blur-[120px] rounded-full"></div>
        <div className="relative p-2 bg-gradient-to-br from-[#161b22] to-[#0d1117] border border-white/5 rounded-full mb-10 shadow-[0_0_30px_rgba(88,166,255,0.15)]">
          <BrainCircuit className="text-[#a371f7]" size={56} strokeWidth={1.5} />
        </div>
        <h1 className="relative text-5xl md:text-7xl font-extrabold text-white mb-6 tracking-tight drop-shadow-[0_2px_4px_rgba(255,255,255,0.2)]">
          VITALIS <span className="text-[#a371f7]">AI</span>
        </h1>
        <p className="relative text-2xl md:text-3xl font-bold bg-gradient-to-r from-[#58a6ff] via-[#a371f7] to-[#d2a8ff] text-transparent bg-clip-text mb-8 leading-tight max-w-3xl mx-auto px-4">
          Advanced Clinical Decision Support
        </p>
        <p className="relative text-[#8b949e] text-lg max-w-2xl mx-auto mb-12 leading-relaxed px-4">
          Bridging the gap between patient care and artificial intelligence. Monitor health, assist physicians, and predict over 100+ diseases with real-time ML analysis.
        </p>
        <div className="relative flex flex-col sm:flex-row justify-center gap-6">
          <button onClick={() => navigate('/doctor')} className="flex items-center justify-center gap-3 bg-gradient-to-r from-[#1f6feb] to-[#388bfd] hover:scale-105 text-white px-10 py-4 rounded-xl font-bold transition-all text-lg shadow-[0_0_15px_rgba(31,111,235,0.2)]">
            <Shield size={24} /> Doctor Portal
          </button>
          <button onClick={() => navigate('/patient')} className="flex items-center justify-center gap-3 bg-gradient-to-r from-[#161b22] to-[#0d1117] border border-white/10 hover:border-white/20 hover:shadow-[0_0_20px_rgba(255,255,255,0.05)] text-white px-10 py-4 rounded-xl font-bold transition-all text-lg">
            <User size={24} /> Patient Portal
          </button>
        </div>
      </div>

      {/* THE AI SYSTEM SECTION (Restored) */}
      <div className="grid md:grid-cols-2 gap-10 px-4 max-w-6xl mx-auto relative z-10">
        <div className="bg-white/5 backdrop-blur-[12px] border border-white/10 rounded-2xl p-10 shadow-lg hover:-translate-y-2 hover:border-[#f85149]/50 transition-all duration-300">
          <div className="flex items-center gap-3 mb-6">
            <AlertTriangle className="text-[#f85149]" size={32} />
            <h2 className="text-2xl font-bold text-white">The Challenge</h2>
          </div>
          <p className="text-[#c9d1d9] leading-relaxed text-lg">
            Human error, delays, and complex patient histories make accurate diagnosis difficult. Physicians are overwhelmed with data, leading to misdiagnosis and inefficiencies in treatment plans.
          </p>
        </div>
        <div className="bg-white/5 backdrop-blur-[12px] border border-white/10 rounded-2xl p-10 shadow-lg hover:-translate-y-2 hover:border-[#a371f7]/50 transition-all duration-300">
          <div className="flex items-center gap-3 mb-6">
            <Zap className="text-[#a371f7]" size={32} />
            <h2 className="text-2xl font-bold text-white">The AI Solution</h2>
          </div>
          <p className="text-[#c9d1d9] leading-relaxed text-lg">
            Vitalis AI analyzes 130+ symptoms instantly using Random Forest algorithms, providing risk indicators, confidence scores, and concise summary reports to empower clinical decisions.
          </p>
        </div>
      </div>

      {/* TECHNOLOGIES USED (Restored) */}
      <div className="text-center relative z-10">
        <h2 className="text-2xl font-bold text-white mb-10">Powered by the Modern Tech Stack</h2>
        <div className="flex flex-wrap justify-center gap-5">
          {[
            {icon: Code, text: "React & Tailwind", color: "text-[#58a6ff]"},
            {icon: Server, text: "FastAPI Python", color: "text-[#3fb950]"},
            {icon: BrainCircuit, text: "Scikit-Learn ML", color: "text-[#d2a8ff]"},
            {icon: Database, text: "PostgreSQL Cloud", color: "text-[#e3b341]"}
          ].map((item, idx) => (
            <div key={idx} className="flex items-center gap-3 bg-white/5 backdrop-blur-[10px] border border-white/10 px-5 py-3 rounded-full hover:border-white/20 hover:-translate-y-1 transition-all">
              <item.icon className={item.color} size={20}/>
              <span className="text-white font-medium">{item.text}</span>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}
// ==========================================
// 2. ABOUT US PAGE
// ==========================================
function About() {
  return (
    <div className="max-w-5xl mx-auto mt-12 px-4 space-y-12 animate-fade-in pb-16">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-extrabold text-white mb-4">About Vitalis AI</h1>
        <p className="text-xl text-[#8b949e]">Vision: To eliminate misdiagnosis through intelligent data analysis.</p>
      </div>
      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-white/5 border border-[#f85149]/30 rounded-2xl p-8 hover:border-[#f85149]/50 transition-all">
          <h2 className="text-2xl font-bold text-white flex items-center gap-3 mb-4"><AlertTriangle className="text-[#f85149]"/> The Problem</h2>
          <ul className="space-y-3 text-[#c9d1d9]">
            <li className="flex gap-2"><ArrowRight size={18} className="text-[#f85149] shrink-0 mt-1"/> High rates of misdiagnosis due to human error and physician fatigue.</li>
            <li className="flex gap-2"><ArrowRight size={18} className="text-[#f85149] shrink-0 mt-1"/> Delays in healthcare access and slow diagnostic processing.</li>
          </ul>
        </div>
        <div className="bg-white/5 border border-[#58a6ff]/30 rounded-2xl p-8 hover:border-[#58a6ff]/50 transition-all">
          <h2 className="text-2xl font-bold text-white flex items-center gap-3 mb-4"><ShieldCheck className="text-[#58a6ff]"/> The Solution</h2>
          <ul className="space-y-3 text-[#c9d1d9]">
            <li className="flex gap-2"><ArrowRight size={18} className="text-[#58a6ff] shrink-0 mt-1"/> AI analyzes 130+ symptoms instantly to predict diseases.</li>
            <li className="flex gap-2"><ArrowRight size={18} className="text-[#58a6ff] shrink-0 mt-1"/> Provides doctors with risk levels and confidence scores to aid decisions.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

// ==========================================
// 3. DOCTOR MODULE
// ==========================================
function DoctorPortal({ setLoggedInDoctor }) {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({ username: '', password: '', department: 'General Medicine' });
  const [status, setStatus] = useState({ type: '', message: '' });
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ type: 'loading', message: 'Authenticating...' });
    try {
      const endpoint = isLogin ? 'https://ai-cdss-backend.onrender.com/api/doctor/login' : 'https://ai-cdss-backend.onrender.com/api/doctor/signup';
      const response = await axios.post(endpoint, formData);
      setStatus({ type: 'success', message: response.data.message });
      if (isLogin) {
        setLoggedInDoctor(response.data.doctor_id);
        setTimeout(() => navigate('/doctor/dashboard'), 1000);
      } else {
        setTimeout(() => setIsLogin(true), 1500);
      }
    } catch (error) {
      setStatus({ type: 'error', message: error.response?.data?.detail || 'Server connection failed.' });
    }
  };

  return (
    <div className="flex justify-center items-center mt-12 px-4 animate-fade-in">
      <div className="bg-white/5 backdrop-blur-[20px] border border-white/10 rounded-2xl p-10 w-full max-w-lg shadow-[0_4px_40px_rgba(163,113,247,0.15)]">
        <div className="text-center mb-8"><ShieldAlert className="mx-auto mb-4 text-[#a371f7]" size={48} /><h2 className="text-3xl font-semibold text-white">Provider Access</h2></div>
        <div className="flex bg-[#050609] rounded-lg p-1 mb-6 border border-white/10">
          <button type="button" onClick={() => setIsLogin(true)} className={`flex-1 py-2 text-sm font-bold rounded-md ${isLogin ? 'bg-[#a371f7] text-white' : 'text-[#8b949e]'}`}>Login</button>
          <button type="button" onClick={() => setIsLogin(false)} className={`flex-1 py-2 text-sm font-bold rounded-md ${!isLogin ? 'bg-[#a371f7] text-white' : 'text-[#8b949e]'}`}>Sign Up</button>
        </div>
        {status.message && <div className={`p-3 rounded-lg mb-6 text-sm border ${status.type === 'error' ? 'bg-[#f85149]/10 text-[#f85149] border-[#f85149]/50' : 'bg-[#2ea043]/10 text-[#2ea043] border-[#2ea043]/50'}`}>{status.message}</div>}
        <form onSubmit={handleSubmit} className="space-y-4">
          <input type="text" name="username" placeholder="Username" onChange={(e) => setFormData({...formData, username: e.target.value})} required className="w-full bg-[#0d1117] border border-[#30363d] rounded-lg px-4 py-3 text-white focus:border-[#a371f7] focus:ring-1 focus:ring-[#a371f7]" />
          {!isLogin && <input type="text" name="department" placeholder="Department" onChange={(e) => setFormData({...formData, department: e.target.value})} className="w-full bg-[#0d1117] border border-[#30363d] rounded-lg px-4 py-3 text-white focus:border-[#a371f7] focus:ring-1 focus:ring-[#a371f7]" />}
          <input type="password" name="password" placeholder="Password" onChange={(e) => setFormData({...formData, password: e.target.value})} required className="w-full bg-[#0d1117] border border-[#30363d] rounded-lg px-4 py-3 text-white focus:border-[#a371f7] focus:ring-1 focus:ring-[#a371f7]" />
          <button type="submit" className="w-full bg-gradient-to-r from-[#a371f7] to-[#d2a8ff] text-white font-bold py-3 rounded-lg mt-6">{isLogin ? 'Sign In' : 'Create Account'}</button>
        </form>
      </div>
    </div>
  );
}

function DoctorDashboard({ loggedInDoctor }) {
  const navigate = useNavigate();
  const [patientId, setPatientId] = useState('');
  const [symptoms, setSymptoms] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [report, setReport] = useState(null);
  
  // Real dataset symptoms for the search feature
  const fullSymptomList = [
    "itching", "skin rash", "continuous sneezing", "shivering", "chills", "joint pain", "stomach pain", "acidity", 
    "ulcers on tongue", "muscle wasting", "vomiting", "burning micturition", "spotting urination", "fatigue", 
    "weight gain", "anxiety", "cold hands and feets", "mood swings", "weight loss", "restlessness", "lethargy", 
    "patches in throat", "irregular sugar level", "cough", "high fever", "sunken eyes", "breathlessness", "sweating", 
    "dehydration", "indigestion", "headache", "yellowish skin", "dark urine", "nausea", "loss of appetite", 
    "pain behind the eyes", "back pain", "constipation", "abdominal pain", "diarrhea", "mild fever"
  ];

  const filteredSymptoms = fullSymptomList.filter(s => s.includes(searchTerm.toLowerCase()) && !symptoms.includes(s));

  const addSymptom = (symp) => {
    setSymptoms([...symptoms, symp]);
    setSearchTerm('');
  };

  const removeSymptom = (symp) => {
    setSymptoms(symptoms.filter(s => s !== symp));
  };

  const runAnalysis = async () => {
    if(!patientId || symptoms.length === 0) return alert("Please enter a Patient ID and select at least one symptom.");
    try {
      const response = await axios.post('https://ai-cdss-backend.onrender.com/api/predict', { doctor_id: loggedInDoctor, patient_id: parseInt(patientId), symptoms: symptoms });
      setReport(response.data);
    } catch (err) { alert("Analysis failed. Ensure Patient ID exists."); }
  };

  if (!loggedInDoctor) return <div className="text-center mt-20 text-white">Please log in first.<br/><button onClick={()=>navigate('/doctor')} className="mt-4 text-[#a371f7] underline">Go to Login</button></div>;

  return (
    <div className="mt-8 max-w-6xl mx-auto space-y-6">
      <div className="bg-white/5 border border-white/10 rounded-2xl p-6 flex justify-between items-center shadow-lg">
        <div><h2 className="text-2xl font-bold text-white">Physician Dashboard</h2></div>
        <div className="flex gap-2 items-center text-white"><Users size={20}/> Patient ID: <input type="number" value={patientId} onChange={(e)=>setPatientId(e.target.value)} className="w-20 bg-[#0d1117] border border-[#30363d] rounded p-1 text-center" placeholder="e.g. 1"/></div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
          <h3 className="text-lg font-bold text-white mb-4">Symptom Selector (130+ Supported)</h3>
          
          {/* SEARCH BAR */}
          <div className="relative mb-4">
            <Search className="absolute left-3 top-3 text-[#8b949e]" size={18}/>
            <input type="text" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} placeholder="Search symptoms..." className="w-full bg-[#0d1117] border border-[#30363d] rounded-lg pl-10 pr-4 py-2 text-white focus:border-[#58a6ff] focus:outline-none"/>
            
            {/* SEARCH RESULTS DROPDOWN */}
            {searchTerm && (
              <div className="absolute z-20 w-full mt-1 bg-[#161b22] border border-[#30363d] rounded-lg max-h-40 overflow-y-auto shadow-xl">
                {filteredSymptoms.length > 0 ? filteredSymptoms.map(symp => (
                  <button key={symp} onClick={() => addSymptom(symp)} className="w-full text-left px-4 py-2 text-sm text-[#c9d1d9] hover:bg-[#58a6ff]/20 hover:text-white capitalize">{symp.replace('_', ' ')}</button>
                )) : <div className="px-4 py-2 text-sm text-[#8b949e]">No matching symptoms</div>}
              </div>
            )}
          </div>

          {/* SELECTED CHIPS */}
          <div className="min-h-[100px] bg-[#0d1117] border border-[#30363d] rounded-lg p-3 mb-6 flex flex-wrap gap-2 content-start">
            {symptoms.length === 0 && <span className="text-[#8b949e] text-sm italic">No symptoms selected yet...</span>}
            {symptoms.map(symp => (
              <span key={symp} className="bg-[#58a6ff]/20 text-[#58a6ff] border border-[#58a6ff]/50 px-3 py-1 rounded-full text-sm capitalize flex items-center gap-2">
                {symp.replace('_', ' ')}
                <button onClick={() => removeSymptom(symp)} className="hover:text-white"><X size={14}/></button>
              </span>
            ))}
          </div>

          <button onClick={runAnalysis} className="w-full bg-[#1f6feb] text-white font-bold py-3 rounded-lg hover:bg-[#388bfd]">Generate AI Analysis</button>
        </div>

        <div className="bg-[#050609] border border-white/10 rounded-2xl p-6">
          <h3 className="text-lg font-bold text-white mb-4">AI Assistance Panel</h3>
          {!report ? <div className="text-[#8b949e] text-center mt-10">Awaiting Data...</div> : (
            <div className="space-y-4">
              <div className={`p-4 rounded-xl border ${report.risk_level === 'High' ? 'bg-[#f85149]/10 border-[#f85149]/30' : report.risk_level === 'Medium' ? 'bg-[#d29922]/10 border-[#d29922]/30' : 'bg-[#2ea043]/10 border-[#2ea043]/30'}`}>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-white font-bold text-xl">{report.predicted_disease}</span>
                  <span className="text-sm font-bold px-2 py-1 rounded bg-black/30">{report.confidence_score}% Match</span>
                </div>
                <p className="text-sm">Risk Level: <strong>{report.risk_level}</strong> | Specialist: {report.recommended_specialist}</p>
              </div>
              <div className="bg-white/5 p-4 rounded-xl">
                <p className="text-sm text-[#8b949e] mb-2">Suggested Precautions:</p>
                <ul className="text-sm text-[#c9d1d9] list-disc pl-5">{report.precautions.map((p,i) => <li key={i}>{p}</li>)}</ul>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

// ==========================================
// 4. PATIENT MODULE
// ==========================================
function PatientPortal({ setLoggedInPatient }) {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({ patient_no: '', dob: '', name: '' });
  const [status, setStatus] = useState({ type: '', message: '' });
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const endpoint = isLogin ? 'https://ai-cdss-backend.onrender.com/api/patient/login' : 'https://ai-cdss-backend.onrender.com/api/patient/signup';
      const response = await axios.post(endpoint, formData);
      setStatus({ type: 'success', message: response.data.message });
      if (isLogin) {
        setLoggedInPatient(response.data.patient_id);
        setTimeout(() => navigate('/patient/dashboard'), 1000);
      } else {
        setTimeout(() => setIsLogin(true), 1500);
      }
    } catch (error) { setStatus({ type: 'error', message: "Login Failed." }); }
  };

  return (
    <div className="flex justify-center items-center mt-12 px-4 animate-fade-in">
      <div className="bg-white/5 backdrop-blur-[20px] border border-white/10 rounded-2xl p-10 w-full max-w-lg shadow-[0_4px_40px_rgba(46,160,67,0.15)]">
        <div className="text-center mb-8"><Lock className="mx-auto mb-4 text-[#2ea043]" size={48} /><h2 className="text-3xl font-semibold text-white">Patient Access</h2></div>
        <div className="flex bg-[#050609] rounded-lg p-1 mb-6 border border-white/10">
          <button type="button" onClick={() => setIsLogin(true)} className={`flex-1 py-2 text-sm font-bold rounded-md ${isLogin ? 'bg-[#2ea043] text-white' : 'text-[#8b949e]'}`}>Login</button>
          <button type="button" onClick={() => setIsLogin(false)} className={`flex-1 py-2 text-sm font-bold rounded-md ${!isLogin ? 'bg-[#2ea043] text-white' : 'text-[#8b949e]'}`}>Register</button>
        </div>
        {status.message && <div className="p-3 rounded-lg mb-6 text-sm bg-black/20 text-white border border-white/10">{status.message}</div>}
        <form onSubmit={handleSubmit} className="space-y-4">
          <input type="text" name="patient_no" placeholder="Patient Number (e.g. PT-1001)" onChange={(e) => setFormData({...formData, patient_no: e.target.value})} required className="w-full bg-[#0d1117] border border-[#30363d] rounded-lg px-4 py-3 text-white focus:border-[#2ea043]" />
          {!isLogin && <input type="text" name="name" placeholder="Full Name" onChange={(e) => setFormData({...formData, name: e.target.value})} className="w-full bg-[#0d1117] border border-[#30363d] rounded-lg px-4 py-3 text-white focus:border-[#2ea043]" />}
          <input type="date" name="dob" onChange={(e) => setFormData({...formData, dob: e.target.value})} required className="w-full bg-[#0d1117] border border-[#30363d] rounded-lg px-4 py-3 text-white focus:border-[#2ea043]" />
          <button type="submit" className="w-full bg-gradient-to-r from-[#2ea043] to-[#3fb950] text-white font-bold py-3 rounded-lg mt-6">{isLogin ? 'View Records' : 'Register'}</button>
        </form>
      </div>
    </div>
  );
}

function PatientDashboard({ loggedInPatient }) {
  const [reports, setReports] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    if(loggedInPatient) {
      axios.get(`https://ai-cdss-backend.onrender.com/api/patient/${loggedInPatient}/reports`)
        .then(res => setReports(res.data.data || []));
    }
  }, [loggedInPatient]);

  if (!loggedInPatient) return <div className="text-center mt-20 text-white">Please log in first.<br/><button onClick={()=>navigate('/patient')} className="mt-4 text-[#2ea043] underline">Go to Login</button></div>;

  return (
    <div className="mt-8 max-w-4xl mx-auto space-y-6">
      <div className="bg-white/5 border border-white/10 rounded-2xl p-6 flex items-center gap-4">
        <User className="text-[#2ea043]" size={36}/>
        <div><h2 className="text-2xl font-bold text-white">My Medical Records</h2><p className="text-[#8b949e]">Patient ID: {loggedInPatient}</p></div>
      </div>
      {reports.length === 0 ? <div className="text-center py-12 text-[#8b949e]">No records found. Visit your doctor for an analysis.</div> : 
        reports.map((r, idx) => (
          <div key={idx} className="bg-[#050609] border border-white/10 rounded-xl p-6">
            <div className="flex justify-between items-center mb-4 border-b border-white/5 pb-4">
              <h3 className="text-xl font-bold text-white">{r.predicted_disease}</h3>
              <span className="text-sm text-[#8b949e]">{r.created_at}</span>
            </div>
            <div className="grid grid-cols-2 gap-4 text-sm text-[#c9d1d9] mb-4">
              <p>Risk Level: <strong className="text-white">{r.risk_level}</strong></p>
              <p>Confidence: <strong className="text-white">{r.confidence_score}%</strong></p>
              <p>Specialist: <strong className="text-white">{r.recommended_specialist}</strong></p>
              <p>Symptoms: <strong className="text-white">{r.symptoms_input}</strong></p>
            </div>
          </div>
        ))
      }
    </div>
  );
}

// ==========================================
// 5. MAIN APP NAVIGATION
// ==========================================
export default function App() {
  const [loggedInDoctor, setLoggedInDoctor] = useState(null);
  const [loggedInPatient, setLoggedInPatient] = useState(null);

  // Helper function to handle logout logic
  const handleLogout = () => {
    setLoggedInDoctor(null);
    setLoggedInPatient(null);
    window.location.href = '/'; // Forces a hard reset to the home page
  };

  return (
    <Router>
      <div className="min-h-screen bg-[#050609] text-[#c9d1d9] font-sans">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#58a6ff] via-[#a371f7] to-[#2ea043]"></div>
        
        <nav className="bg-white/5 backdrop-blur-[15px] border-b border-white/10 p-4 sticky top-0 z-50">
          <div className="max-w-7xl mx-auto flex justify-between items-center px-4">
            <Link to="/" className="flex items-center gap-3">
              <div className="p-1.5 bg-gradient-to-br from-[#238636] to-[#2ea043] rounded-md"><Activity className="text-white" size={24} /></div>
              <span className="text-xl font-extrabold text-white">Vitalis <span className="text-[#a371f7]">AI</span></span>
            </Link>
            
            <div className="flex gap-6 items-center text-sm font-semibold">
              <Link to="/" className="hover:text-[#58a6ff] flex items-center gap-1"><Activity size={16}/> Home</Link>
              <Link to="/about" className="hover:text-[#d2a8ff] flex items-center gap-1"><Info size={16}/> About Us</Link>
              
              {/* If NO ONE is logged in, show normal links */}
              {!loggedInDoctor && !loggedInPatient && (
                <>
                  <Link to="/doctor" className="hover:text-[#a371f7] flex items-center gap-1"><Shield size={16}/> Doctor</Link>
                  <Link to="/patient" className="hover:text-[#3fb950] flex items-center gap-1"><User size={16}/> Patient</Link>
                </>
              )}

              {/* If DOCTOR is logged in, show ID and Logout */}
              {loggedInDoctor && (
                <div className="flex items-center gap-4 border-l border-white/10 pl-4">
                  <span className="text-[#a371f7] bg-[#a371f7]/10 px-3 py-1 rounded-full border border-[#a371f7]/30">Dr. ID: {loggedInDoctor}</span>
                  <button onClick={handleLogout} className="text-[#f85149] hover:text-[#ff7b72] flex items-center gap-1"><LogOut size={16}/> Logout</button>
                </div>
              )}

              {/* If PATIENT is logged in, show ID and Logout */}
              {loggedInPatient && (
                <div className="flex items-center gap-4 border-l border-white/10 pl-4">
                  <span className="text-[#2ea043] bg-[#2ea043]/10 px-3 py-1 rounded-full border border-[#2ea043]/30">Patient ID: {loggedInPatient}</span>
                  <button onClick={handleLogout} className="text-[#f85149] hover:text-[#ff7b72] flex items-center gap-1"><LogOut size={16}/> Logout</button>
                </div>
              )}
            </div>
          </div>
        </nav>

        <main className="max-w-7xl mx-auto px-4 pb-12">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/doctor" element={<DoctorPortal setLoggedInDoctor={setLoggedInDoctor} />} />
            <Route path="/doctor/dashboard" element={<DoctorDashboard loggedInDoctor={loggedInDoctor} />} />
            <Route path="/patient" element={<PatientPortal setLoggedInPatient={setLoggedInPatient} />} />
            <Route path="/patient/dashboard" element={<PatientDashboard loggedInPatient={loggedInPatient} />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}