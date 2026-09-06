import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Calendar,
  MapPin,
  X,
  Check,
  History,
  ArrowRight,
  ArrowUpRight,
  ChevronDown,
  User,
  Mail,
  Smartphone,
  CreditCard,
  Sparkles,
  ClipboardCheck,
  ChevronLeft,
  Plus,
  Minus,
  BookOpen,
  Lock,
  ShieldCheck,
  QrCode,
  Trash2,
  Loader2,
  Download,
  Building,
  AlertCircle,
  Users,
  Clock,
  RefreshCw
} from "lucide-react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import Plasters from "../assets/NaturalPlastersWorkshop.webp";
import Sensory from "../assets/SensoryWorkshop.webp";
import LearnDemo from "../assets/LearningBuildConnectingDomes.webp";
import MovementSli from "../assets/MovementStillness.webp";

// Secret studio passkey for creator & deletion authorization
const STUDIO_SECRET_KEY = "STUDIO_ARC_2026";

// Dedicated Google Apps Script Web App URL acting as your live Sheet Database
const WORKSHOPS_APPS_SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbzQnE1fpZv_BMYBzQNbePE5aNQ3Zmuy6BV6xJXh3Xv6qD8hUsxV9vqVpXdM8nDj-Og/exec";

const INITIAL_FALLBACK_WORKSHOPS = [
  {
    id: "WS-2026-01",
    title: "Earth & Cob Masterclass: Monolithic Architecture",
    level: "Comprehensive",
    dates: "Nov 14 - Nov 20, 2026",
    duration: "7 Days Intensive",
    location: "Auroville Earth Institute, Tamil Nadu",
    fee: 24500,
    feeFormatted: "₹24,500",
    seatsTotal: 14,
    seatsLeft: 3,
    image: "https://images.unsplash.com/photo-1541888071855-6b45a6669b3d?q=80&w=2070",
    intro: "Hands-on exploration of cob construction, soil testing, subsoil stabilizers, and sculpting organic load-bearing forms.",
    syllabus: [
      "Site soil analysis, jar test, and silt-sand-clay ratios",
      "Cob mixing techniques with organic fibers and lime stabilizers",
      "Sculpting monolithic arches, alcoves, and integrated seating",
      "Bio-climatic thermal envelope calculations",
    ],
  },
  {
    id: "WS-2026-02",
    title: "Rammed Earth & Formwork Engineering",
    level: "Intermediate to Advanced",
    dates: "Dec 02 - Dec 06, 2026",
    duration: "5 Days Studio",
    location: "Western Ghats Field Station, Kerala",
    fee: 19800,
    feeFormatted: "₹19,800",
    seatsTotal: 12,
    seatsLeft: 5,
    image: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?q=80&w=2070",
    intro: "Precision pneumatics, modular timber formwork design, and high-strength layered earth aesthetics.",
    syllabus: [
      "Modular formwork fabrication using FSC-certified teak ply",
      "Pneumatic vs. hand tamping compaction pressure metrics",
      "Natural mineral oxide pigmentation techniques",
      "Damp-proofing and subterranean moisture barriers",
    ],
  },
  {
    id: "WS-2026-03",
    title: "Himalayan Koti Banal & Timber Framing",
    level: "All Levels",
    dates: "Jan 10 - Jan 16, 2027",
    duration: "6 Days Retreat",
    location: "Harshil Valley, Dharali, Uttarakhand",
    fee: 28000,
    feeFormatted: "₹28,000",
    seatsTotal: 10,
    seatsLeft: 2,
    image: "https://images.unsplash.com/photo-1434725039720-aaad6dd32faa?q=80&w=2067",
    intro: "Study of 1,000-year-old earthquake-resistant vernacular craft using interlocked timber caging and stone masonry.",
    syllabus: [
      "Koti Banal seismic joint interlocking principles",
      "Dry-stone slate dressing and Pataal roofing traditions",
      "Subterranean natural ventilation and stepwell physics",
      "Documentation, community stewardship, and live restoration",
    ],
  },
  {
    id: "WS-2026-04",
    title: "Earthbag Dome Architecture & Emergency Shelters",
    level: "Foundational",
    dates: "Feb 05 - Feb 09, 2027",
    duration: "4 Days Field Camp",
    location: "Pauri Garhwal Eco-Station",
    fee: 16500,
    feeFormatted: "₹16,500",
    seatsTotal: 16,
    seatsLeft: 8,
    image: "https://images.unsplash.com/photo-1544984243-ec57ea16fe25?q=80&w=2067",
    intro: "Rapid zero-concrete construction using polypropylene earth tubes and corbeled arch self-supporting vaults.",
    syllabus: [
      "Barbed-wire tensile reinforcement placement",
      "Compass-arm radius tracking for parabolic dome curves",
      "Buttressing openings and arched entrance lintels",
      "Waterproof lime-casein plaster formulations",
    ],
  },
];

const PREVIOUS_WORKSHOPS = [
  {
    id: "PWS-01",
    title: "Earthbag Dome Hands-On Program",
    year: "DEC-2025",
    intro:
      "An immersive 5-day workshop focused on sustainable construction using earthbag dome techniques.",
    details:
      "Organized with NASA India in December 2025, this hands-on program brought together 30 students to collaboratively build a functional earthbag dome. Participants engaged in technical dome construction, site exploration and analysis, and nature-inspired design thinking. The workshop emphasized collaborative problem-solving and cross-disciplinary learning, encouraging students to actively shape the change they envision. Beyond construction, the experience fostered deep connections—with each other, the environment, and the architectural process itself.",
    image:
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: "PWS-02",
    title: "Natural Plasters Workshop",
    year: "JUNE-2025",
    intro:
      "A hands-on introduction to the craft of natural earthen plasters for healthier, breathable spaces.",
    details:
      "Conducted in June 2025, this workshop explored the timeless practice of natural plastering—used for centuries to protect and enhance traditional buildings. Participants learned how earthen plasters offer a sustainable, non-toxic alternative to modern materials, supporting both environmental and human well-being. The session covered practical application techniques suitable for exposed brick and mud walls, enabling attendees to confidently create durable, breathable finishes. Emphasis was placed on the long-lasting nature of these materials, which require minimal maintenance and remain gentle on the Earth throughout their lifecycle.",
    image: Plasters,
  },
  {
    id: "PWS-03",
    title: "Sensory Workshop",
    year: "SEMP-2025",
    intro:
      "A creative, multi-sensory workshop designed to foster self-expression and confidence among children.",
    details:
      "Held in September 2025 in Tehri Garhwal, this workshop engaged 60 children from 17 villages through music, storytelling, and zine-making. Participants explored poetry and creative expression, transforming initial hesitation into confidence and joy.",
    image: Sensory,
  },
  {
    id: "PWS-04",
    title: "Learning to Build Connecting Earthbag Domes",
    year: "MAY-2024",
    intro:
      "An advanced workshop exploring the structural physics and organic geometry of interconnected earthbag domes.",
    details:
      "Held in May 2024, this workshop focused on mastering the “connecting spiral” technique to link multiple domes into a cohesive structure. Participants gained hands-on experience in corbelling, load transfer, and dome geometry while collaborating with skilled laborers. The outcome demonstrated how simple materials can create structurally sound, fluid spaces suitable for living or studio use.",
    image: LearnDemo,
  },
  {
    id: "PWS-05",
    title: "Building an Earthbag Open Air Theatre (OAT)",
    year: "MAY-2024",
    intro:
      "A 2-day hands-on workshop exploring natural building through the construction of an open-air theatre.",
    details:
      "Held in May 2024 at Vaishnavi School of Architecture, Hyderabad, this workshop guided students in building an OAT using earth, cob, and repurposed cement bags. Emphasizing process over perfection, participants learned sustainable construction techniques while gaining confidence in creating functional, human-centered spaces with simple materials.",
    image:
      "https://cdn.prod.website-files.com/63763e28f5fadf06cd812964/64952cd8fede8ce97d01651f_Dissemination1.jpg",
  },
  {
    id: "PWS-06",
    title: "Movement in Stillness",
    year: "JUNE-2023",
    intro:
      "An intimate retreat blending yoga, movement, and natural building in the Himalayas.",
    details:
      "Held in June 2023 in Harshil Valley, Uttarakhand, this retreat combined yoga, contact improvisation, and hands-on natural building sessions. With a small group of 12 participants, it fostered deep connection, creativity, and immersion in nature through shared experiences and mountain living.",
    image: MovementSli,
  },
  {
    id: "PWS-07",
    title: "Introduction to Natural Building",
    year: "NOV-2023",
    intro:
      "A hands-on workshop introducing students to fundamental natural building techniques and materials.",
    details:
      "Conducted in November 2023 with NASA India, this workshop covered dry stone masonry, earthbag construction, cob plastering, and lime plastering. Participants gained practical experience in building and finishing techniques, exploring sustainable methods rooted in traditional practices.",
    image:
      "https://images.squarespace-cdn.com/content/v1/59ed57a58c56a88ac98afc1e/9f30cc6f-b529-4cd8-a70f-5af7594394e6/IMG_1595.jpg",
  },
];

const Workshops = () => {
  // Live Active Workshops State (synchronized with Google Sheets DB)
  const [activeWorkshops, setActiveWorkshops] = useState(INITIAL_FALLBACK_WORKSHOPS);
  const [selectedWorkshop, setSelectedWorkshop] = useState(INITIAL_FALLBACK_WORKSHOPS[0]);
  const [isLoadingWorkshops, setIsLoadingWorkshops] = useState(false);
  const [expandedCurriculumId, setExpandedCurriculumId] = useState(null);

  // Admin Creator Modal States
  const [showAdminModal, setShowAdminModal] = useState(false);
  const [adminAuthCode, setAdminAuthCode] = useState("");
  const [authError, setAuthError] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [adminSuccessMsg, setAdminSuccessMsg] = useState("");
  const [isSubmittingWorkshop, setIsSubmittingWorkshop] = useState(false);

  const [newWorkshopData, setNewWorkshopData] = useState({
    title: "",
    level: "Foundational",
    dates: "",
    duration: "5 Days Intensive",
    location: "Studio Arc Field Station",
    fee: "",
    seatsTotal: 14,
    image: "",
    intro: "",
    syllabusRaw: "",
  });

  // Authenticated Deletion Modal States
  const [deleteModal, setDeleteModal] = useState({
    isOpen: false,
    workshopId: null,
    workshopTitle: "",
    authCode: "",
    error: "",
    successMsg: "",
    isDeleting: false
  });

  // Registration Form States
  const [bookingStatus, setBookingStatus] = useState("idle"); // idle, sending, success
  const [randomRef, setRandomRef] = useState("");
  const [formDataState, setFormDataState] = useState({
    workshopTitle: INITIAL_FALLBACK_WORKSHOPS[0].title,
    fullName: "",
    email: "",
    mobile: "",
    date: "2026-11-14",
    paymentMode: "Digital Transaction (Online)",
  });

  // Payment Mode Modal States
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const [paymentRail, setPaymentRail] = useState("upi"); // 'upi' | 'card' | 'bank'
  const [isProcessingPayment, setIsProcessingPayment] = useState(false);
  const [paymentCompleted, setPaymentCompleted] = useState(false);
  const [transactionReceipt, setTransactionReceipt] = useState(null);

  const scrollRef = useRef(null);
  const registrationSectionRef = useRef(null);

  const generateID = () => `WS-${Math.floor(100 + Math.random() * 900)}`;

  useEffect(() => {
    setRandomRef(generateID());
    fetchLiveWorkshops();
  }, []);

  const fetchLiveWorkshops = async () => {
    setIsLoadingWorkshops(true);
    try {
      const response = await fetch(`${WORKSHOPS_APPS_SCRIPT_URL}?action=get_workshops`);
      if (response.ok) {
        const data = await response.json();
        if (Array.isArray(data) && data.length > 0) {
          const parsed = data.map((item) => ({
            ...item,
            fee: Number(item.fee) || 20000,
            feeFormatted: item.feeFormatted || `₹${Number(item.fee || 20000).toLocaleString("en-IN")}`,
            seatsTotal: Number(item.seatsTotal) || 14,
            seatsLeft: Number(item.seatsLeft) || 14,
            syllabus: Array.isArray(item.syllabus)
              ? item.syllabus
              : typeof item.syllabus === "string"
              ? item.syllabus.split("||").map((s) => s.trim()).filter(Boolean)
              : ["Soil testing & analysis", "Structural building", "Protective earthen plasters"]
          }));
          setActiveWorkshops(parsed);
          setSelectedWorkshop(parsed[0]);
          setFormDataState((prev) => ({
            ...prev,
            workshopTitle: parsed[0]?.title || prev.workshopTitle,
          }));
        }
      }
    } catch (err) {
      console.warn("Could not fetch remote sheet workshops, using local active repository:", err);
    } finally {
      setIsLoadingWorkshops(false);
    }
  };

  const handleSelectWorkshop = (workshop) => {
    setSelectedWorkshop(workshop);
    setFormDataState((prev) => ({
      ...prev,
      workshopTitle: workshop.title,
    }));

    if (registrationSectionRef.current) {
      registrationSectionRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const handleVerifyAdmin = (e) => {
    e.preventDefault();
    if (adminAuthCode === STUDIO_SECRET_KEY) {
      setIsAuthenticated(true);
      setAuthError("");
    } else {
      setAuthError("Invalid Studio Secret Code. Access denied.");
    }
  };

  const handleCreateWorkshop = async (e) => {
    e.preventDefault();
    if (!newWorkshopData.title || !newWorkshopData.dates || !newWorkshopData.fee) return;

    setIsSubmittingWorkshop(true);
    const numericFee = parseInt(newWorkshopData.fee, 10) || 18000;
    const formattedFee = `₹${numericFee.toLocaleString("en-IN")}`;
    const syllabusList = newWorkshopData.syllabusRaw
      ? newWorkshopData.syllabusRaw.split("\n").filter((line) => line.trim().length > 0)
      : ["Site preparation and soil analysis", "Hands-on structural building", "Protective plaster finishes"];

    const newId = `WS-${new Date().getFullYear()}-${String(activeWorkshops.length + 1).padStart(2, "0")}`;

    const createdWorkshop = {
      id: newId,
      title: newWorkshopData.title,
      level: newWorkshopData.level,
      dates: newWorkshopData.dates,
      duration: newWorkshopData.duration || "5 Days Intensive",
      location: newWorkshopData.location || "Studio Arc Field Station",
      fee: numericFee,
      feeFormatted: formattedFee,
      seatsTotal: parseInt(newWorkshopData.seatsTotal, 10) || 12,
      seatsLeft: parseInt(newWorkshopData.seatsTotal, 10) || 12,
      image:
        newWorkshopData.image ||
        "https://images.unsplash.com/photo-1510627489930-0c1b0bfb6785?q=80&w=2070",
      intro:
        newWorkshopData.intro ||
        "Specialized hands-on workshop focused on bio-climatic construction and natural materials.",
      syllabus: syllabusList,
    };

    // Optimistic local state update
    const updated = [createdWorkshop, ...activeWorkshops];
    setActiveWorkshops(updated);
    setSelectedWorkshop(createdWorkshop);
    setFormDataState((prev) => ({
      ...prev,
      workshopTitle: createdWorkshop.title,
    }));

    // Post to Google Sheet database asynchronously
    try {
      await fetch(WORKSHOPS_APPS_SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "text/plain;charset=utf-8" },
        body: JSON.stringify({
          action: "create_workshop",
          authCode: adminAuthCode,
          ...createdWorkshop,
          syllabusRaw: syllabusList.join("||")
        })
      });
    } catch (err) {
      console.warn("Sheet write queued/logged:", err);
    }

    setIsSubmittingWorkshop(false);
    setAdminSuccessMsg(`Masterclass "${createdWorkshop.title}" published & recorded!`);

    setTimeout(() => {
      setAdminSuccessMsg("");
      setShowAdminModal(false);
      setNewWorkshopData({
        title: "",
        level: "Foundational",
        dates: "",
        duration: "5 Days Intensive",
        location: "Studio Arc Field Station",
        fee: "",
        seatsTotal: 14,
        image: "",
        intro: "",
        syllabusRaw: "",
      });
    }, 1500);
  };

  const handleConfirmDelete = async (e) => {
    e.preventDefault();
    if (deleteModal.authCode !== STUDIO_SECRET_KEY) {
      setDeleteModal((prev) => ({
        ...prev,
        error: "Invalid Studio Secret Code. Deletion denied.",
      }));
      return;
    }

    setDeleteModal((prev) => ({ ...prev, isDeleting: true, error: "" }));

    // Send delete action to Google Sheet database
    try {
      await fetch(WORKSHOPS_APPS_SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "text/plain;charset=utf-8" },
        body: JSON.stringify({
          action: "delete_workshop",
          authCode: deleteModal.authCode,
          id: deleteModal.workshopId
        })
      });
    } catch (err) {
      console.warn("Sheet delete sent:", err);
    }

    const updated = activeWorkshops.filter((w) => w.id !== deleteModal.workshopId);
    setActiveWorkshops(updated);

    if (selectedWorkshop?.id === deleteModal.workshopId) {
      const fallback = updated[0] || null;
      setSelectedWorkshop(fallback);
      if (fallback) {
        setFormDataState((prev) => ({ ...prev, workshopTitle: fallback.title }));
      }
    }

    setDeleteModal((prev) => ({
      ...prev,
      isDeleting: false,
      successMsg: `"${deleteModal.workshopTitle}" deleted successfully.`,
      error: "",
    }));

    setTimeout(() => {
      setDeleteModal({
        isOpen: false,
        workshopId: null,
        workshopTitle: "",
        authCode: "",
        error: "",
        successMsg: "",
        isDeleting: false
      });
    }, 1300);
  };

  const handleBookingSubmit = async (e) => {
    e.preventDefault();
    setBookingStatus("sending");

    const data = {
      action: "booking",
      timestamp: new Date().toLocaleString(),
      workshopTitle: formDataState.workshopTitle || selectedWorkshop?.title,
      bookingReference: randomRef,
      fullName: formDataState.fullName,
      email: formDataState.email,
      mobile: formDataState.mobile,
      date: formDataState.date,
      paymentMode: formDataState.paymentMode,
      fee: selectedWorkshop?.feeFormatted || "₹24,500",
    };

    try {
      await fetch(WORKSHOPS_APPS_SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "text/plain;charset=utf-8" },
        body: JSON.stringify(data),
      });

      setBookingStatus("idle");
      setPaymentCompleted(false);
      setShowPaymentModal(true);
    } catch (error) {
      console.error("Storage Error:", error);
      setBookingStatus("idle");
      setPaymentCompleted(false);
      setShowPaymentModal(true);
    }
  };

  const executePayment = () => {
    setIsProcessingPayment(true);
    setTimeout(() => {
      setIsProcessingPayment(false);
      const generatedReceipt = {
        txnId: `TXN-${Math.floor(100000 + Math.random() * 900000)}`,
        bookingId: randomRef,
        date: new Date().toLocaleDateString("en-IN", {
          month: "short",
          day: "numeric",
          year: "numeric",
        }),
        workshop: selectedWorkshop,
        applicant: formDataState,
        totalPaid: selectedWorkshop?.feeFormatted || "₹24,500",
        method: paymentRail.toUpperCase(),
      };
      setTransactionReceipt(generatedReceipt);
      setPaymentCompleted(true);
      setRandomRef(generateID());
    }, 1700);
  };

  const scrollArchive = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = 500;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="bg-[#F5F2ED] dark:bg-[#0a0a0a] transition-colors duration-700 font-sans text-stone-900 dark:text-stone-100 min-h-screen overflow-x-hidden selection:bg-orange-600 selection:text-white pt-24">
      <Navbar />

      {/* --- SECTION 1: CINEMATIC COVER HERO --- */}
      <header className="relative h-[85vh] min-h-[650px] flex items-end pb-32 overflow-hidden bg-zinc-900">
        <div className="absolute inset-0 z-0">
          <motion.img
            initial={{ scale: 1.15 }}
            animate={{ scale: 1 }}
            transition={{ duration: 25, ease: "linear" }}
            src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=2071&auto=format&fit=crop"
            className="w-full h-full object-cover grayscale-[20%]"
            alt="Laboratory Cover"
          />
          <div className="absolute inset-0 bg-stone-950/60 mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/20 to-transparent" />
        </div>

        <div className="max-w-[1400px] mx-auto w-full px-6 md:px-12 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.4 }}
            >
              <div className="flex items-center gap-6 mb-12">
                <span className="w-20 h-[1px] bg-orange-600"></span>
                <p className="text-[10px] uppercase tracking-[0.6em] font-black text-white/80">
                  Studio Pedagogy
                </p>
              </div>

              <h1 className="text-[14vw] md:text-[8rem] lg:text-[11rem] font-serif leading-[0.8] tracking-tighter mb-12 text-white">
                Tactile <br />{" "}
                <span className="italic text-stone-400 font-light">Wisdom.</span>
              </h1>

              <p className="text-xl md:text-3xl font-serif text-stone-300 leading-tight max-w-2xl italic border-l border-white/20 pl-8">
                "A unified approach to hands-on architectural education and material research."
              </p>
            </motion.div>

            {/* Admin Workshop Creation Trigger Button (Secret code is fully private and not displayed) */}
            <div className="flex items-center gap-3 pb-2">
              <button
                type="button"
                onClick={fetchLiveWorkshops}
                className="w-12 h-12 rounded-full border border-white/20 hover:border-orange-500 text-white/70 hover:text-white flex items-center justify-center transition-colors"
                title="Refresh Workshops Database"
              >
                <RefreshCw size={16} className={isLoadingWorkshops ? "animate-spin text-orange-500" : ""} />
              </button>

              <button
                type="button"
                onClick={() => {
                  setShowAdminModal(true);
                  setIsAuthenticated(false);
                  setAdminAuthCode("");
                  setAuthError("");
                }}
                className="group flex items-center gap-3 px-7 py-4 rounded-full bg-stone-900 dark:bg-white text-white dark:text-stone-950 text-[10px] uppercase font-black tracking-widest hover:bg-orange-600 dark:hover:bg-orange-600 dark:hover:text-white transition-all shadow-xl hover:scale-105"
              >
                <Lock size={14} className="text-orange-500 group-hover:text-white transition-colors" />
                <span>Admin: Create Workshop</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* --- SECTION 1.5: ACTIVE WORKSHOP COHORTS LISTING (DYNAMIC DB) --- */}
      <section className="py-28 px-6 md:px-12 border-b border-stone-200 dark:border-stone-800">
        <div className="max-w-[1400px] mx-auto">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-12 pb-4 border-b border-stone-200 dark:border-stone-800 gap-4">
            <div>
              <span className="text-[11px] uppercase tracking-[0.4em] font-black text-orange-600 block mb-1">
                Upcoming Masterclasses
              </span>
              <h2 className="text-2xl md:text-4xl font-serif">
                Active Cohorts ({activeWorkshops.length})
              </h2>
            </div>
            <span className="text-xs font-mono text-stone-400 flex items-center gap-2">
              <Sparkles size={14} className="text-orange-600" /> Click any session to auto-fill registration
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {activeWorkshops.map((ws) => {
              const isSelected = selectedWorkshop?.id === ws.id;
              const isExpanded = expandedCurriculumId === ws.id;

              return (
                <motion.div
                  key={ws.id}
                  layout
                  className={`relative rounded-[2.5rem] p-8 md:p-10 border transition-all duration-500 flex flex-col justify-between ${
                    isSelected
                      ? "bg-white dark:bg-stone-900 border-orange-600 shadow-2xl ring-2 ring-orange-600/30"
                      : "bg-white/60 dark:bg-stone-900/40 border-stone-200 dark:border-stone-800 hover:border-stone-400"
                  }`}
                >
                  <div>
                    {/* Frame Image Container with Authenticated Delete Button */}
                    <div className="relative aspect-[16/9] rounded-[2rem] overflow-hidden mb-6 bg-stone-200 dark:bg-stone-800 shadow-inner">
                      <img
                        src={ws.image}
                        alt={ws.title}
                        className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                      />
                      <div className="absolute top-4 left-4 bg-stone-950/80 backdrop-blur-md px-4 py-1.5 rounded-full text-white font-mono text-[9px] uppercase tracking-widest border border-white/10">
                        {ws.level}
                      </div>

                      {/* Authenticated Delete Button */}
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          setDeleteModal({
                            isOpen: true,
                            workshopId: ws.id,
                            workshopTitle: ws.title,
                            authCode: "",
                            error: "",
                            successMsg: "",
                            isDeleting: false
                          });
                        }}
                        className="absolute top-4 right-4 w-9 h-9 rounded-full bg-stone-950/80 hover:bg-red-600 text-stone-300 hover:text-white backdrop-blur-md border border-white/10 flex items-center justify-center transition-all shadow-md z-10 group/del"
                        title="Delete Workshop (Requires Studio Passkey)"
                      >
                        <Trash2 size={14} className="group-hover/del:scale-110 transition-transform" />
                      </button>

                      <div className="absolute bottom-4 right-4 bg-orange-600 text-white px-4 py-1.5 rounded-full font-serif text-sm font-bold shadow-lg">
                        {ws.feeFormatted}
                      </div>
                    </div>

                    {/* Metadata Badges */}
                    <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-stone-500 dark:text-stone-400 mb-3">
                      <span className="flex items-center gap-1.5 text-stone-900 dark:text-white font-bold">
                        <Calendar size={13} className="text-orange-600" /> {ws.dates}
                      </span>
                      <span>•</span>
                      <span className="flex items-center gap-1.5">
                        <Clock size={13} /> {ws.duration}
                      </span>
                      <span>•</span>
                      <span className="text-orange-600 font-bold flex items-center gap-1.5">
                        <Users size={13} /> {ws.seatsLeft} seats left
                      </span>
                    </div>

                    <h3 className="text-2xl md:text-3xl font-serif text-stone-900 dark:text-white mb-2 leading-tight">
                      {ws.title}
                    </h3>

                    <p className="flex items-center gap-2 text-xs font-mono text-stone-400 mb-4 uppercase tracking-wider">
                      <MapPin size={12} className="text-orange-500" /> {ws.location}
                    </p>

                    <p className="text-stone-600 dark:text-stone-300 font-serif italic text-sm leading-relaxed mb-6">
                      "{ws.intro}"
                    </p>

                    {/* Syllabus Accordion */}
                    <AnimatePresence>
                      {isExpanded && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          className="overflow-hidden border-t border-stone-200 dark:border-stone-800 pt-4 mb-4"
                        >
                          <h4 className="text-[10px] uppercase font-mono tracking-widest text-orange-600 font-bold mb-2">
                            Curriculum & Practicals
                          </h4>
                          <ul className="space-y-1.5">
                            {ws.syllabus.map((item, idx) => (
                              <li key={idx} className="flex items-start gap-2 text-xs text-stone-600 dark:text-stone-300">
                                <span className="w-1.5 h-1.5 rounded-full bg-orange-600 mt-1.5 shrink-0" />
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  {/* Card Action Controls */}
                  <div className="flex items-center justify-between pt-5 border-t border-stone-200 dark:border-stone-800 mt-2">
                    <button
                      type="button"
                      onClick={() => setExpandedCurriculumId(isExpanded ? null : ws.id)}
                      className="text-[10px] uppercase tracking-widest font-black text-stone-400 hover:text-stone-900 dark:hover:text-white flex items-center gap-2 transition-colors"
                    >
                      {isExpanded ? <Minus size={13} /> : <Plus size={13} />}
                      <span>{isExpanded ? "Hide Syllabus" : "View Syllabus"}</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => handleSelectWorkshop(ws)}
                      className={`px-7 py-3 rounded-full text-[10px] uppercase tracking-[0.2em] font-black flex items-center gap-2 transition-all shadow-md ${
                        isSelected
                          ? "bg-orange-600 text-white ring-2 ring-orange-400 scale-105"
                          : "bg-stone-900 text-white dark:bg-white dark:text-stone-950 hover:bg-orange-600 dark:hover:bg-orange-600 dark:hover:text-white"
                      }`}
                    >
                      <span>{isSelected ? "Cohort Selected" : "Apply for Cohort"}</span>
                      <ArrowUpRight size={13} />
                    </button>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* --- SECTION 2: REGISTRATION SUITE (AUTO-SYNCS WITH ACTIVE WORKSHOP) --- */}
      <section
        ref={registrationSectionRef}
        className="py-40 px-6 md:px-12 bg-white dark:bg-[#0c0c0c] transition-colors duration-700 relative"
      >
        <div className="absolute top-20 right-0 pointer-events-none opacity-[0.03] dark:opacity-[0.05]">
          <span className="text-[25vw] font-serif leading-none uppercase">
            Studio
          </span>
        </div>

        <div className="max-w-[1400px] mx-auto relative z-10">
          <div className="grid lg:grid-cols-12 gap-24 items-start">
            <div className="lg:col-span-5">
              <div className="sticky top-32">
                <h2 className="text-[11px] uppercase tracking-[0.5em] font-black text-orange-600 mb-10">
                  01 / REGISTRATION
                </h2>
                <h3 className="text-5xl md:text-7xl font-serif mb-12 tracking-tight text-stone-900 dark:text-stone-100 leading-[1.1]">
                  Apply for a <br />{" "}
                  <span className="italic text-stone-400">Masterclass.</span>
                </h3>

                <div className="space-y-12">
                  <div className="relative rounded-[3rem] overflow-hidden shadow-2xl border border-stone-200 dark:border-white/5 bg-stone-900 text-white p-8 md:p-10 group">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-[9px] uppercase font-mono font-bold tracking-widest bg-white/10 px-3.5 py-1 rounded-full text-orange-400">
                        Selected Masterclass
                      </span>
                      <span className="text-[10px] font-mono text-stone-400">
                        Ref ID: {randomRef}
                      </span>
                    </div>

                    <h4 className="text-2xl md:text-3xl font-serif leading-snug mb-4">
                      {selectedWorkshop?.title || formDataState.workshopTitle}
                    </h4>

                    <div className="space-y-2.5 font-mono text-xs text-stone-300 border-y border-white/10 py-5 my-5">
                      <p className="flex justify-between">
                        <span className="text-stone-400">Schedule:</span>
                        <span className="text-white font-bold">{selectedWorkshop?.dates}</span>
                      </p>
                      <p className="flex justify-between">
                        <span className="text-stone-400">Duration:</span>
                        <span>{selectedWorkshop?.duration}</span>
                      </p>
                      <p className="flex justify-between">
                        <span className="text-stone-400">Location:</span>
                        <span className="text-right truncate max-w-[200px]">{selectedWorkshop?.location}</span>
                      </p>
                      <p className="flex justify-between pt-2 border-t border-white/10 text-sm">
                        <span className="text-orange-400 font-bold">Tuition Fee:</span>
                        <span className="text-xl font-serif text-white font-bold">
                          {selectedWorkshop?.feeFormatted || "₹24,500"}
                        </span>
                      </p>
                    </div>

                    <div className="w-12 h-[1px] bg-white/30 mt-4 group-hover:w-full transition-all duration-1000" />
                    
                    <div className="absolute top-8 right-8">
                      <Sparkles size={22} className="text-orange-500 animate-pulse" />
                    </div>
                  </div>

                  <div className="flex flex-col gap-6 text-stone-400 text-sm font-medium border-t border-stone-100 dark:border-stone-800 pt-10">
                    <p className="flex items-center gap-4">
                      <ClipboardCheck size={16} className="text-orange-600" />{" "}
                      Tuition includes raw materials, specialized tools, and certificate.
                    </p>
                    <p className="flex items-center gap-4">
                      <MapPin size={16} className="text-orange-600" /> Direct hands-on mentorship with natural builders.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7">
              <div className="bg-[#F5F2ED] dark:bg-[#111] p-10 md:p-20 rounded-[4rem] shadow-2xl relative overflow-hidden border border-white/5">
                <form onSubmit={handleBookingSubmit} className="space-y-12">
                  <div className="flex flex-col border-b border-stone-200 dark:border-stone-800 pb-6 focus-within:border-orange-600 transition-colors group">
                    <div className="flex items-center gap-4 mb-4">
                      <BookOpen
                        size={14}
                        className="text-stone-400 group-focus-within:text-orange-600"
                      />
                      <label className="text-[10px] uppercase font-black text-stone-400 tracking-widest group-focus-within:text-orange-600">
                        01. Workshop Subject (Auto-Reflected)
                      </label>
                    </div>
                    <input
                      name="workshopTitle"
                      type="text"
                      required
                      value={formDataState.workshopTitle}
                      onChange={(e) =>
                        setFormDataState({ ...formDataState, workshopTitle: e.target.value })
                      }
                      placeholder="e.g., Rammed Earth Masterclass"
                      className="bg-transparent text-2xl md:text-3xl font-serif outline-none text-stone-900 dark:text-stone-100 placeholder:text-stone-300 dark:placeholder:text-stone-800"
                    />
                  </div>

                  <div className="flex flex-col border-b border-stone-200 dark:border-stone-800 pb-6 focus-within:border-orange-600 transition-colors group">
                    <div className="flex items-center gap-4 mb-4">
                      <User
                        size={14}
                        className="text-stone-400 group-focus-within:text-orange-600"
                      />
                      <label className="text-[10px] uppercase font-black text-stone-400 tracking-widest group-focus-within:text-orange-600">
                        02. Full Identity *
                      </label>
                    </div>
                    <input
                      name="fullName"
                      type="text"
                      required
                      value={formDataState.fullName}
                      onChange={(e) =>
                        setFormDataState({ ...formDataState, fullName: e.target.value })
                      }
                      placeholder="e.g., Ananya Deshmukh"
                      className="bg-transparent text-2xl md:text-3xl font-serif outline-none text-stone-900 dark:text-stone-100 placeholder:text-stone-300 dark:placeholder:text-stone-800"
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-12">
                    <div className="flex flex-col border-b border-stone-200 dark:border-stone-800 pb-6 focus-within:border-orange-600 transition-colors group">
                      <div className="flex items-center gap-4 mb-4">
                        <Mail
                          size={14}
                          className="text-stone-400 group-focus-within:text-orange-600"
                        />
                        <label className="text-[10px] uppercase font-black text-stone-400 tracking-widest group-focus-within:text-orange-600">
                          03. Email Handle *
                        </label>
                      </div>
                      <input
                        name="email"
                        type="email"
                        required
                        value={formDataState.email}
                        onChange={(e) =>
                          setFormDataState({ ...formDataState, email: e.target.value })
                        }
                        placeholder="contact@domain.com"
                        className="bg-transparent text-xl font-serif outline-none text-stone-900 dark:text-stone-100 placeholder:text-stone-300"
                      />
                    </div>
                    <div className="flex flex-col border-b border-stone-200 dark:border-stone-800 pb-6 focus-within:border-orange-600 transition-colors group">
                      <div className="flex items-center gap-4 mb-4">
                        <Smartphone
                          size={14}
                          className="text-stone-400 group-focus-within:text-orange-600"
                        />
                        <label className="text-[10px] uppercase font-black text-stone-400 tracking-widest group-focus-within:text-orange-600">
                          04. Mobile Contact *
                        </label>
                      </div>
                      <input
                        name="mobile"
                        type="tel"
                        required
                        value={formDataState.mobile}
                        onChange={(e) =>
                          setFormDataState({ ...formDataState, mobile: e.target.value })
                        }
                        placeholder="+91 98765 43210"
                        className="bg-transparent text-xl font-serif outline-none text-stone-900 dark:text-stone-100 placeholder:text-stone-300"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-12">
                    <div className="flex flex-col border-b border-stone-200 dark:border-stone-800 pb-6 focus-within:border-orange-600 transition-colors group">
                      <div className="flex items-center gap-4 mb-4">
                        <Calendar
                          size={14}
                          className="text-stone-400 group-focus-within:text-orange-600"
                        />
                        <label className="text-[10px] uppercase font-black text-stone-400 tracking-widest group-focus-within:text-orange-600">
                          05. Preferred Start Date
                        </label>
                      </div>
                      <input
                        name="date"
                        type="date"
                        required
                        value={formDataState.date}
                        onChange={(e) =>
                          setFormDataState({ ...formDataState, date: e.target.value })
                        }
                        className="bg-transparent text-xl font-serif outline-none text-stone-900 dark:text-stone-100 cursor-pointer"
                      />
                    </div>
                    <div className="flex flex-col border-b border-stone-200 dark:border-stone-800 pb-6 focus-within:border-orange-600 transition-colors group relative">
                      <div className="flex items-center gap-4 mb-4">
                        <CreditCard size={14} className="text-stone-300" />
                        <label className="text-[10px] uppercase font-black text-stone-400 tracking-widest group-focus-within:text-orange-600">
                          06. Payment Protocol
                        </label>
                      </div>
                      <select
                        name="paymentMode"
                        value={formDataState.paymentMode}
                        onChange={(e) =>
                          setFormDataState({ ...formDataState, paymentMode: e.target.value })
                        }
                        className="bg-transparent text-xl font-serif outline-none text-stone-900 dark:text-stone-100 appearance-none cursor-pointer pr-10"
                      >
                        <option className="bg-[#F5F2ED] dark:bg-stone-900">
                          Digital Transaction (Online)
                        </option>
                        <option className="bg-[#F5F2ED] dark:bg-stone-900">
                          On-Site Payment (Offline)
                        </option>
                      </select>
                      <ChevronDown
                        className="absolute right-0 bottom-8 text-stone-400 pointer-events-none"
                        size={16}
                      />
                    </div>
                  </div>

                  <div className="pt-12">
                    <button
                      type="submit"
                      disabled={bookingStatus === "sending"}
                      className="group flex items-center gap-14 text-stone-900 dark:text-white disabled:opacity-50"
                    >
                      <div className="flex flex-col items-end">
                        <span className="text-[11px] uppercase tracking-[0.6em] font-black group-hover:text-orange-600 transition-colors">
                          {bookingStatus === "sending"
                            ? "Transmitting..."
                            : "Proceed to Payment Mode"}
                        </span>
                        <span className="text-[9px] uppercase tracking-widest text-stone-400 font-mono mt-1">
                          Ref ID: {randomRef}
                        </span>
                      </div>
                      <div className="relative w-24 h-24 rounded-full border border-stone-300 dark:border-stone-700 flex items-center justify-center overflow-hidden group-hover:border-orange-600 transition-all duration-700 shadow-xl">
                        <div className="absolute inset-0 bg-orange-600 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                        <ArrowUpRight
                          size={32}
                          className="relative z-10 group-hover:text-white transition-colors"
                        />
                      </div>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- SECTION 3: STUDY ARCHIVES (ORIGINAL SNAP SCROLL) --- */}
      <section className="py-40 px-6 md:px-12 bg-stone-100 dark:bg-stone-950 transition-colors duration-700">
        <div className="max-w-[1400px] mx-auto">
          <div className="flex flex-col md:flex-row items-end justify-between mb-24 gap-12">
            <div className="flex items-center gap-8">
              <History size={24} className="text-orange-600" />
              <h2 className="text-[11px] uppercase tracking-[0.5em] font-black text-stone-400">
                02 / STUDY ARCHIVES
              </h2>
            </div>
            <div className="flex gap-4">
              <button
                type="button"
                onClick={() => scrollArchive("left")}
                className="w-16 h-16 rounded-full border border-stone-200 dark:border-stone-800 flex items-center justify-center hover:bg-stone-900 hover:text-white dark:hover:bg-white dark:hover:text-black transition-all"
                aria-label="Scroll left"
              >
                <ChevronLeft size={24} />
              </button>
              <button
                type="button"
                onClick={() => scrollArchive("right")}
                className="w-16 h-16 rounded-full border border-stone-200 dark:border-stone-800 flex items-center justify-center hover:bg-stone-900 hover:text-white dark:hover:bg-white dark:hover:text-black transition-all"
                aria-label="Scroll right"
              >
                <ArrowRight size={24} />
              </button>
            </div>
          </div>

          <div
            ref={scrollRef}
            className="flex gap-12 overflow-x-auto no-scrollbar snap-x snap-mandatory pb-20 scroll-smooth px-2"
          >
            {PREVIOUS_WORKSHOPS.map((pws) => (
              <ArchiveCard key={pws.id} pws={pws} />
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* MODAL 1: ADMIN WORKSHOP CREATOR (SECRET PASSWORD PROTECTED) */}
      {/* ========================================================================= */}
      <AnimatePresence>
        {showAdminModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[250] bg-stone-950/85 backdrop-blur-xl flex items-center justify-center p-4 md:p-8"
          >
            <motion.div
              initial={{ scale: 0.95, y: 30 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 30 }}
              className="bg-[#F5F2ED] dark:bg-[#111] text-stone-900 dark:text-white w-full max-w-3xl rounded-[3rem] border border-stone-200 dark:border-white/10 shadow-2xl overflow-hidden relative max-h-[90vh] flex flex-col"
            >
              {/* Header */}
              <div className="p-6 md:p-8 border-b border-stone-200 dark:border-stone-800 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-orange-600 text-white flex items-center justify-center">
                    <Lock size={15} />
                  </div>
                  <div>
                    <h3 className="text-xl font-serif">Studio Workshop Admin Portal</h3>
                    <p className="text-[10px] font-mono text-stone-400 uppercase tracking-widest">
                      Authenticated Session Publishing
                    </p>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => setShowAdminModal(false)}
                  className="w-9 h-9 rounded-full border border-stone-300 dark:border-stone-700 flex items-center justify-center text-stone-400 hover:text-orange-600 transition-colors"
                >
                  <X size={16} />
                </button>
              </div>

              {/* Body */}
              <div className="p-6 md:p-10 overflow-y-auto">
                {!isAuthenticated ? (
                  <form onSubmit={handleVerifyAdmin} className="max-w-md mx-auto py-8 text-center space-y-5">
                    <div className="w-16 h-16 rounded-full bg-orange-500/10 text-orange-600 border border-orange-500/20 flex items-center justify-center mx-auto mb-2">
                      <ShieldCheck size={32} />
                    </div>
                    <h4 className="text-2xl font-serif">Enter Studio Secret Code</h4>
                    <p className="text-xs text-stone-500 font-mono">
                      Verification required to deploy new workshop cohorts to the public registry.
                    </p>

                    <div>
                      <input
                        type="password"
                        placeholder="••••••••••••"
                        value={adminAuthCode}
                        onChange={(e) => setAdminAuthCode(e.target.value)}
                        className="w-full bg-white dark:bg-stone-900 border border-stone-300 dark:border-stone-700 rounded-2xl py-3.5 text-center font-mono text-lg tracking-widest outline-none focus:border-orange-600 shadow-sm"
                      />
                      {authError && (
                        <p className="text-xs text-red-500 font-mono mt-2 flex items-center justify-center gap-1">
                          <AlertCircle size={13} /> {authError}
                        </p>
                      )}
                    </div>

                    <button
                      type="submit"
                      className="w-full py-3.5 rounded-full bg-stone-900 dark:bg-white text-white dark:text-stone-900 text-xs font-black uppercase tracking-[0.25em] hover:bg-orange-600 dark:hover:bg-orange-600 dark:hover:text-white transition-all shadow-md"
                    >
                      Authenticate Access
                    </button>
                  </form>
                ) : (
                  <form onSubmit={handleCreateWorkshop} className="space-y-5">
                    {adminSuccessMsg && (
                      <div className="p-4 bg-green-500/10 border border-green-500/20 rounded-2xl text-green-600 text-xs font-mono flex items-center gap-2">
                        <Check size={16} />
                        <span>{adminSuccessMsg}</span>
                      </div>
                    )}

                    <div className="grid md:grid-cols-2 gap-5">
                      <div>
                        <label className="text-[10px] uppercase font-mono tracking-widest text-stone-400 block mb-1.5 font-bold">
                          Workshop Title *
                        </label>
                        <input
                          required
                          type="text"
                          placeholder="e.g., Earthen Lime Plaster Studio"
                          value={newWorkshopData.title}
                          onChange={(e) =>
                            setNewWorkshopData({ ...newWorkshopData, title: e.target.value })
                          }
                          className="w-full bg-white dark:bg-stone-900 border border-stone-300 dark:border-stone-700 rounded-xl p-3 text-sm font-serif outline-none focus:border-orange-600"
                        />
                      </div>
                      <div>
                        <label className="text-[10px] uppercase font-mono tracking-widest text-stone-400 block mb-1.5 font-bold">
                          Cohort Level
                        </label>
                        <select
                          value={newWorkshopData.level}
                          onChange={(e) =>
                            setNewWorkshopData({ ...newWorkshopData, level: e.target.value })
                          }
                          className="w-full bg-white dark:bg-stone-900 border border-stone-300 dark:border-stone-700 rounded-xl p-3 text-sm font-serif outline-none focus:border-orange-600 cursor-pointer"
                        >
                          <option value="Foundational">Foundational</option>
                          <option value="Comprehensive">Comprehensive</option>
                          <option value="Intermediate to Advanced">Intermediate to Advanced</option>
                        </select>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-3 gap-5">
                      <div>
                        <label className="text-[10px] uppercase font-mono tracking-widest text-stone-400 block mb-1.5 font-bold">
                          Dates Window *
                        </label>
                        <input
                          required
                          type="text"
                          placeholder="Mar 14 - Mar 20, 2027"
                          value={newWorkshopData.dates}
                          onChange={(e) =>
                            setNewWorkshopData({ ...newWorkshopData, dates: e.target.value })
                          }
                          className="w-full bg-white dark:bg-stone-900 border border-stone-300 dark:border-stone-700 rounded-xl p-3 text-xs font-mono outline-none focus:border-orange-600"
                        />
                      </div>
                      <div>
                        <label className="text-[10px] uppercase font-mono tracking-widest text-stone-400 block mb-1.5 font-bold">
                          Duration
                        </label>
                        <input
                          type="text"
                          placeholder="6 Days Intensive"
                          value={newWorkshopData.duration}
                          onChange={(e) =>
                            setNewWorkshopData({ ...newWorkshopData, duration: e.target.value })
                          }
                          className="w-full bg-white dark:bg-stone-900 border border-stone-300 dark:border-stone-700 rounded-xl p-3 text-xs font-mono outline-none focus:border-orange-600"
                        />
                      </div>
                      <div>
                        <label className="text-[10px] uppercase font-mono tracking-widest text-stone-400 block mb-1.5 font-bold">
                          Tuition Fee (₹) *
                        </label>
                        <input
                          required
                          type="number"
                          placeholder="22000"
                          value={newWorkshopData.fee}
                          onChange={(e) =>
                            setNewWorkshopData({ ...newWorkshopData, fee: e.target.value })
                          }
                          className="w-full bg-white dark:bg-stone-900 border border-stone-300 dark:border-stone-700 rounded-xl p-3 text-xs font-mono outline-none focus:border-orange-600"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-5">
                      <div>
                        <label className="text-[10px] uppercase font-mono tracking-widest text-stone-400 block mb-1.5 font-bold">
                          Location
                        </label>
                        <input
                          type="text"
                          placeholder="Kangra Valley, Himachal Pradesh"
                          value={newWorkshopData.location}
                          onChange={(e) =>
                            setNewWorkshopData({ ...newWorkshopData, location: e.target.value })
                          }
                          className="w-full bg-white dark:bg-stone-900 border border-stone-300 dark:border-stone-700 rounded-xl p-3 text-xs font-mono outline-none focus:border-orange-600"
                        />
                      </div>
                      <div>
                        <label className="text-[10px] uppercase font-mono tracking-widest text-stone-400 block mb-1.5 font-bold">
                          Banner Image URL (Unsplash)
                        </label>
                        <input
                          type="url"
                          placeholder="https://images.unsplash.com/..."
                          value={newWorkshopData.image}
                          onChange={(e) =>
                            setNewWorkshopData({ ...newWorkshopData, image: e.target.value })
                          }
                          className="w-full bg-white dark:bg-stone-900 border border-stone-300 dark:border-stone-700 rounded-xl p-3 text-xs font-mono outline-none focus:border-orange-600"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="text-[10px] uppercase font-mono tracking-widest text-stone-400 block mb-1.5 font-bold">
                        Intro Summary
                      </label>
                      <textarea
                        rows={2}
                        placeholder="Atmospheric summary of the masterclass..."
                        value={newWorkshopData.intro}
                        onChange={(e) =>
                          setNewWorkshopData({ ...newWorkshopData, intro: e.target.value })
                        }
                        className="w-full bg-white dark:bg-stone-900 border border-stone-300 dark:border-stone-700 rounded-xl p-3 text-xs font-mono outline-none focus:border-orange-600 resize-none"
                      />
                    </div>

                    <div>
                      <label className="text-[10px] uppercase font-mono tracking-widest text-stone-400 block mb-1.5 font-bold">
                        Syllabus Items (1 per line)
                      </label>
                      <textarea
                        rows={3}
                        placeholder="Soil testing & stabilization&#10;Cob construction practice&#10;Arches and finishings"
                        value={newWorkshopData.syllabusRaw}
                        onChange={(e) =>
                          setNewWorkshopData({ ...newWorkshopData, syllabusRaw: e.target.value })
                        }
                        className="w-full bg-white dark:bg-stone-900 border border-stone-300 dark:border-stone-700 rounded-xl p-3 text-xs font-mono outline-none focus:border-orange-600 resize-none"
                      />
                    </div>

                    <div className="pt-3 flex items-center justify-end gap-3 border-t border-stone-200 dark:border-stone-800">
                      <button
                        type="button"
                        onClick={() => setIsAuthenticated(false)}
                        className="px-5 py-2.5 text-xs font-mono uppercase text-stone-500 hover:text-stone-900"
                      >
                        Lock
                      </button>
                      <button
                        type="submit"
                        disabled={isSubmittingWorkshop}
                        className="px-6 py-3 rounded-full bg-orange-600 text-white text-xs uppercase font-black tracking-widest hover:bg-stone-900 transition-all shadow-md flex items-center gap-2 disabled:opacity-50"
                      >
                        {isSubmittingWorkshop ? <Loader2 size={14} className="animate-spin" /> : <Sparkles size={14} />}
                        <span>{isSubmittingWorkshop ? "Recording..." : "Publish Cohort"}</span>
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ========================================================================= */}
      {/* MODAL 2: AUTHENTICATED DELETE WORKSHOP DIALOG */}
      {/* ========================================================================= */}
      <AnimatePresence>
        {deleteModal.isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[270] bg-stone-950/85 backdrop-blur-xl flex items-center justify-center p-4 md:p-8"
          >
            <motion.div
              initial={{ scale: 0.95, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 20 }}
              className="bg-[#F5F2ED] dark:bg-[#111] text-stone-900 dark:text-white w-full max-w-md rounded-[2.5rem] border border-stone-200 dark:border-white/10 shadow-2xl p-6 md:p-8 relative overflow-hidden"
            >
              <button
                type="button"
                onClick={() =>
                  setDeleteModal({
                    isOpen: false,
                    workshopId: null,
                    workshopTitle: "",
                    authCode: "",
                    error: "",
                    successMsg: "",
                    isDeleting: false
                  })
                }
                className="absolute top-6 right-6 w-8 h-8 rounded-full border border-stone-300 dark:border-stone-700 flex items-center justify-center text-stone-400 hover:text-red-500 transition-colors"
              >
                <X size={15} />
              </button>

              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-red-500/10 text-red-600 border border-red-500/20 flex items-center justify-center">
                  <Trash2 size={18} />
                </div>
                <div>
                  <h4 className="text-lg font-serif">Delete Cohort</h4>
                  <p className="text-[9px] font-mono text-stone-400 uppercase tracking-widest">
                    Authentication Required
                  </p>
                </div>
              </div>

              {deleteModal.successMsg ? (
                <div className="py-6 text-center space-y-3">
                  <div className="w-12 h-12 rounded-full bg-green-500/10 text-green-600 border border-green-500/20 flex items-center justify-center mx-auto">
                    <Check size={24} />
                  </div>
                  <p className="text-sm font-serif">{deleteModal.successMsg}</p>
                </div>
              ) : (
                <form onSubmit={handleConfirmDelete} className="space-y-4">
                  <div className="bg-white dark:bg-stone-900 p-4 rounded-2xl border border-stone-200 dark:border-stone-800 text-xs font-mono space-y-1">
                    <span className="text-stone-400 block text-[9px] uppercase tracking-widest">
                      Target Masterclass:
                    </span>
                    <strong className="text-stone-900 dark:text-white line-clamp-2">
                      {deleteModal.workshopTitle}
                    </strong>
                  </div>

                  <div>
                    <label className="text-[10px] uppercase font-mono tracking-widest text-stone-400 block mb-1.5 font-bold">
                      Studio Secret Passkey
                    </label>
                    <input
                      required
                      type="password"
                      placeholder="••••••••••••"
                      value={deleteModal.authCode}
                      onChange={(e) =>
                        setDeleteModal((prev) => ({
                          ...prev,
                          authCode: e.target.value,
                          error: "",
                        }))
                      }
                      className="w-full bg-white dark:bg-stone-900 border border-stone-300 dark:border-stone-700 rounded-xl py-3 px-4 text-center font-mono text-sm tracking-widest outline-none focus:border-red-500"
                    />
                    {deleteModal.error && (
                      <p className="text-xs text-red-500 font-mono mt-2 flex items-center justify-center gap-1">
                        <AlertCircle size={13} /> {deleteModal.error}
                      </p>
                    )}
                  </div>

                  <div className="pt-2 flex items-center gap-3">
                    <button
                      type="button"
                      onClick={() =>
                        setDeleteModal({
                          isOpen: false,
                          workshopId: null,
                          workshopTitle: "",
                          authCode: "",
                          error: "",
                          successMsg: "",
                          isDeleting: false
                        })
                      }
                      className="w-1/2 py-3 rounded-full border border-stone-300 dark:border-stone-700 text-stone-500 text-xs font-mono uppercase tracking-wider hover:border-stone-500 transition-colors"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      disabled={deleteModal.isDeleting}
                      className="w-1/2 py-3 rounded-full bg-red-600 hover:bg-red-700 text-white text-xs font-mono font-bold uppercase tracking-wider transition-all shadow-md flex items-center justify-center gap-2 disabled:opacity-50"
                    >
                      {deleteModal.isDeleting ? <Loader2 size={13} className="animate-spin" /> : <Trash2 size={13} />}
                      <span>{deleteModal.isDeleting ? "Deleting..." : "Confirm Delete"}</span>
                    </button>
                  </div>
                </form>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ========================================================================= */}
      {/* MODAL 3: PAYMENT MODE DRAWER & RECEIPT VOUCHER */}
      {/* ========================================================================= */}
      <AnimatePresence>
        {showPaymentModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[280] bg-stone-950/85 backdrop-blur-xl flex items-center justify-center p-4 md:p-8"
          >
            <motion.div
              initial={{ scale: 0.95, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 20 }}
              className="bg-[#F5F2ED] dark:bg-[#111] text-stone-900 dark:text-white w-full max-w-xl rounded-[3rem] border border-stone-200 dark:border-white/10 shadow-2xl overflow-hidden relative"
            >
              <button
                type="button"
                onClick={() => setShowPaymentModal(false)}
                className="absolute top-6 right-6 w-9 h-9 rounded-full border border-stone-300 dark:border-stone-700 flex items-center justify-center text-stone-500 hover:text-orange-600 transition-colors z-20"
              >
                <X size={16} />
              </button>

              {!paymentCompleted ? (
                <div className="p-6 md:p-10">
                  <div className="flex items-center gap-2.5 mb-3">
                    <CreditCard size={18} className="text-orange-600" />
                    <span className="text-[10px] uppercase font-mono tracking-widest text-orange-600 font-bold">
                      Payment Mode // Encrypted Checkout
                    </span>
                  </div>

                  <h3 className="text-2xl md:text-3xl font-serif mb-1">Confirm Cohort Admission</h3>
                  <p className="text-xs text-stone-500 font-mono mb-6">
                    Applicant: <strong className="text-stone-900 dark:text-white">{formDataState.fullName || "Candidate"}</strong>
                  </p>

                  {/* Summary Box */}
                  <div className="bg-white dark:bg-stone-900 rounded-2xl p-5 border border-stone-200 dark:border-stone-800 mb-6 font-mono text-xs space-y-2">
                    <div className="flex justify-between">
                      <span className="text-stone-500">Workshop:</span>
                      <strong className="text-right truncate max-w-[220px]">
                        {selectedWorkshop?.title || formDataState.workshopTitle}
                      </strong>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-stone-500">Dates:</span>
                      <span>{selectedWorkshop?.dates}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-stone-500">Material Kit:</span>
                      <span className="text-green-600 font-bold">Included</span>
                    </div>
                    <div className="border-t border-stone-200 dark:border-stone-800 pt-2 flex justify-between items-center text-sm font-bold">
                      <span>Total Payable:</span>
                      <span className="text-xl font-serif text-orange-600">
                        {selectedWorkshop?.feeFormatted || "₹24,500"}
                      </span>
                    </div>
                  </div>

                  {/* Rails Selector */}
                  <div className="mb-6">
                    <label className="text-[10px] uppercase font-mono tracking-widest text-stone-400 block mb-2 font-bold">
                      Select Payment Rails
                    </label>
                    <div className="grid grid-cols-3 gap-3">
                      {[
                        { id: "upi", name: "UPI / QR", icon: <QrCode size={15} /> },
                        { id: "card", name: "Card", icon: <CreditCard size={15} /> },
                        { id: "bank", name: "NetBanking", icon: <Building size={15} /> },
                      ].map((item) => (
                        <button
                          key={item.id}
                          type="button"
                          onClick={() => setPaymentRail(item.id)}
                          className={`p-3 rounded-2xl border flex flex-col items-center gap-1.5 text-xs font-mono transition-all ${
                            paymentRail === item.id
                              ? "border-orange-600 bg-orange-50 dark:bg-orange-950/30 text-orange-600 font-bold"
                              : "border-stone-200 dark:border-stone-800 text-stone-500"
                          }`}
                        >
                          {item.icon}
                          <span>{item.name}</span>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Rail Views */}
                  {paymentRail === "upi" && (
                    <div className="p-5 bg-white dark:bg-stone-900 rounded-2xl border border-stone-200 dark:border-stone-800 text-center mb-6">
                      <div className="w-32 h-32 mx-auto mb-3 bg-stone-100 dark:bg-white rounded-xl p-2 flex items-center justify-center">
                        <QrCode size={95} className="text-stone-900" />
                      </div>
                      <p className="text-xs font-mono text-stone-500">Scan via GPay, PhonePe, Paytm, or BHIM</p>
                      <p className="text-xs font-mono font-bold text-orange-600 mt-1">
                        VPA: studioarc.architecture@okhdfcbank
                      </p>
                    </div>
                  )}

                  {paymentRail === "card" && (
                    <div className="space-y-3 mb-6 bg-white dark:bg-stone-900 p-5 rounded-2xl border border-stone-200 dark:border-stone-800 font-mono text-xs">
                      <input
                        type="text"
                        placeholder="Card Number"
                        defaultValue="4111 •••• •••• 9021"
                        className="w-full bg-transparent border-b border-stone-200 dark:border-stone-800 py-2 outline-none focus:border-orange-600"
                      />
                      <div className="grid grid-cols-2 gap-4">
                        <input
                          type="text"
                          placeholder="MM/YY"
                          defaultValue="12/28"
                          className="w-full bg-transparent border-b border-stone-200 dark:border-stone-800 py-2 outline-none focus:border-orange-600"
                        />
                        <input
                          type="password"
                          placeholder="CVV"
                          defaultValue="•••"
                          className="w-full bg-transparent border-b border-stone-200 dark:border-stone-800 py-2 outline-none focus:border-orange-600"
                        />
                      </div>
                    </div>
                  )}

                  {paymentRail === "bank" && (
                    <div className="p-5 bg-white dark:bg-stone-900 rounded-2xl border border-stone-200 dark:border-stone-800 font-mono text-xs space-y-1.5 mb-6 text-stone-600 dark:text-stone-300">
                      <p className="flex justify-between">
                        <span>Bank:</span> <strong className="text-stone-900 dark:text-white">HDFC Bank Ltd</strong>
                      </p>
                      <p className="flex justify-between">
                        <span>Beneficiary:</span>{" "}
                        <strong className="text-stone-900 dark:text-white">Studio Arc Architecture Lab</strong>
                      </p>
                      <p className="flex justify-between">
                        <span>Account No:</span> <strong>50200084920192</strong>
                      </p>
                      <p className="flex justify-between">
                        <span>IFSC:</span> <strong>HDFC0001402</strong>
                      </p>
                    </div>
                  )}

                  <button
                    type="button"
                    onClick={executePayment}
                    disabled={isProcessingPayment}
                    className="w-full py-4 rounded-full bg-orange-600 text-white text-xs uppercase tracking-widest font-black hover:bg-stone-900 transition-all flex items-center justify-center gap-2 shadow-xl disabled:opacity-50"
                  >
                    {isProcessingPayment ? (
                      <>
                        <Loader2 size={16} className="animate-spin" />
                        <span>Verifying Bank Rails...</span>
                      </>
                    ) : (
                      <>
                        <Check size={16} />
                        <span>Authorize Payment of {selectedWorkshop?.feeFormatted || "₹24,500"}</span>
                      </>
                    )}
                  </button>
                </div>
              ) : (
                /* Confirmed Admission Pass */
                <div className="p-8 md:p-10 text-center">
                  <div className="w-16 h-16 rounded-full bg-green-500/10 text-green-600 border border-green-500/20 flex items-center justify-center mx-auto mb-4">
                    <Check size={32} strokeWidth={3} />
                  </div>

                  <span className="text-[10px] uppercase font-mono tracking-widest text-green-600 font-bold bg-green-500/10 px-3 py-1 rounded-full">
                    Payment Successful • Seat Secured
                  </span>

                  <h3 className="text-3xl font-serif mt-3 mb-1">Welcome to the Cohort</h3>
                  <p className="text-xs font-mono text-stone-500 mb-6">
                    Transaction ID:{" "}
                    <span className="font-bold text-stone-900 dark:text-white">
                      {transactionReceipt?.txnId}
                    </span>
                  </p>

                  <div className="bg-white dark:bg-stone-900 p-5 rounded-2xl border border-stone-200 dark:border-stone-800 text-left font-mono text-xs space-y-2 mb-6">
                    <p className="flex justify-between">
                      <span className="text-stone-400">Masterclass:</span>
                      <strong className="text-stone-900 dark:text-white truncate max-w-[220px]">
                        {transactionReceipt?.workshop?.title}
                      </strong>
                    </p>
                    <p className="flex justify-between">
                      <span className="text-stone-400">Candidate:</span>
                      <strong className="text-stone-900 dark:text-white">
                        {transactionReceipt?.applicant?.fullName}
                      </strong>
                    </p>
                    <p className="flex justify-between">
                      <span className="text-stone-400">Admit Pass ID:</span>
                      <strong className="text-orange-600">{transactionReceipt?.bookingId}</strong>
                    </p>
                    <p className="flex justify-between">
                      <span className="text-stone-400">Total Paid:</span>
                      <strong className="text-green-600">{transactionReceipt?.totalPaid}</strong>
                    </p>
                  </div>

                  <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                    <button
                      type="button"
                      onClick={() => setShowPaymentModal(false)}
                      className="w-full sm:w-auto px-6 py-3 rounded-full bg-stone-900 dark:bg-white text-white dark:text-stone-900 text-xs font-black uppercase tracking-widest"
                    >
                      Close Voucher
                    </button>
                    <button
                      type="button"
                      onClick={() => window.print()}
                      className="w-full sm:w-auto px-6 py-3 rounded-full border border-stone-300 dark:border-stone-700 text-xs font-black uppercase tracking-widest hover:border-orange-600 flex items-center justify-center gap-2"
                    >
                      <Download size={14} />
                      <span>Print Admission Pass</span>
                    </button>
                  </div>
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="mt-32">
        <Footer />
      </div>
    </div>
  );
};

function ArchiveCard({ pws }) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="min-w-[85vw] md:min-w-[500px] snap-center">
      <div className="bg-white dark:bg-[#111] rounded-[4rem] overflow-hidden border border-stone-200 dark:border-white/5 flex flex-col h-full shadow-lg group">
        <div className="aspect-[16/10] relative overflow-hidden">
          <img
            src={pws.image}
            className="w-full h-full object-cover grayscale transition-all duration-1000 group-hover:grayscale-0 group-hover:scale-110"
            alt={pws.title}
          />
          <div className="absolute top-8 left-8">
            <span className="text-[10px] font-mono bg-white/90 dark:bg-black/90 px-4 py-1.5 rounded-full text-orange-600 uppercase tracking-widest font-black">
              {pws.year} Session
            </span>
          </div>
        </div>

        <div className="p-10 md:p-14 flex flex-col flex-grow">
          <h4 className="text-3xl md:text-4xl font-serif mb-8 text-stone-900 dark:text-stone-100 leading-tight">
            {pws.title}
          </h4>
          <p className="text-stone-500 dark:text-stone-400 leading-relaxed font-serif italic text-lg mb-8">
            "{pws.intro}"
          </p>
          <AnimatePresence>
            {isExpanded && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.6, ease: [0.25, 1, 0.5, 1] }}
                className="overflow-hidden"
              >
                <p className="text-base text-stone-600 dark:text-stone-300 leading-relaxed mb-10 border-l-2 border-orange-600/30 pl-8 pt-4">
                  {pws.details}
                </p>
              </motion.div>
            )}
          </AnimatePresence>

          <div className="mt-auto pt-6 flex items-center justify-between">
            <button
              type="button"
              onClick={() => setIsExpanded(!isExpanded)}
              className="flex items-center gap-4 group/btn"
            >
              <div className="w-12 h-12 rounded-full border border-stone-200 dark:border-stone-800 flex items-center justify-center group-hover/btn:border-orange-600 transition-colors">
                {isExpanded ? (
                  <Minus size={20} className="text-orange-600" />
                ) : (
                  <Plus
                    size={20}
                    className="text-stone-400 group-hover/btn:text-orange-600"
                  />
                )}
              </div>
              <span className="text-[10px] uppercase font-black tracking-widest text-stone-400 group-hover/btn:text-stone-900 dark:group-hover/btn:text-white transition-colors">
                {isExpanded ? "Fold Narrative" : "Read Narrative"}
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Workshops;