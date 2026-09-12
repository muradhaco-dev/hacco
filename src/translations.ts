import { Language } from './types';

export interface TranslationSchema {
  nav: {
    home: string;
    services: string;
    portfolio: string;
    whyUs: string;
    reviews: string;
    contact: string;
    getInTouch: string;
    quoteBtn: string;
  };
  hero: {
    badge: string;
    headlinePart1: string;
    headlineHighlight: string;
    headlinePart2: string;
    subtitle: string;
    exploreServices: string;
    contactUs: string;
    stats: {
      projects: string;
      projectsLabel: string;
      uptime: string;
      uptimeLabel: string;
      speed: string;
      speedLabel: string;
      satisfaction: string;
      satisfactionLabel: string;
    };
    techStackTitle: string;
  };
  services: {
    badge: string;
    title: string;
    subtitle: string;
    webDev: {
      title: string;
      subtitle: string;
      description: string;
      features: string[];
    };
    mobileDev: {
      title: string;
      subtitle: string;
      description: string;
      features: string[];
    };
    cloudDevOps: {
      title: string;
      subtitle: string;
      description: string;
      features: string[];
    };
    uiux: {
      title: string;
      subtitle: string;
      description: string;
      features: string[];
    };
    ctaPrompt: string;
    ctaButton: string;
  };
  whyUs: {
    badge: string;
    title: string;
    subtitle: string;
    values: {
      highSpeed: {
        title: string;
        desc: string;
        metric: string;
      };
      cleanCode: {
        title: string;
        desc: string;
        metric: string;
      };
      scalable: {
        title: string;
        desc: string;
        metric: string;
      };
      support247: {
        title: string;
        desc: string;
        metric: string;
      };
    };
  };
  portfolio: {
    badge: string;
    title: string;
    subtitle: string;
    filters: {
      all: string;
      web: string;
      mobile: string;
      fullstack: string;
    };
    viewProject: string;
    viewDetails: string;
    closeModal: string;
    client: string;
    year: string;
    techStack: string;
    keyDeliverables: string;
  };
  reviews: {
    badge: string;
    title: string;
    subtitle: string;
    reviewsTab: string;
    resultsTab: string;
    reviewsHeading: string;
    reviewsSubheading: string;
    resultsHeading: string;
    resultsSubheading: string;
    whatClientRequested: string;
    whatHaccoDelivered: string;
    metricsTitle: string;
    clientFeedbackQuote: string;
    verifiedClientBadge: string;
    satisfactionScore: string;
    onTimeRate: string;
    guaranteeTitle: string;
    guaranteeDesc: string;
    ctaReviewPrompt: string;
    ctaReviewBtn: string;
  };
  contact: {
    badge: string;
    title: string;
    subtitle: string;
    infoTitle: string;
    infoDesc: string;
    emailLabel: string;
    phoneLabel: string;
    whatsappLabel: string;
    locationLabel: string;
    locationValue: string;
    copyEmail: string;
    copied: string;
    openGmail: string;
    chatWhatsapp: string;
    callNow: string;
    form: {
      nameLabel: string;
      namePlaceholder: string;
      emailLabel: string;
      emailPlaceholder: string;
      phoneLabel: string;
      phonePlaceholder: string;
      serviceLabel: string;
      serviceSelectPlaceholder: string;
      servicesList: {
        web: string;
        mobile: string;
        fullstack: string;
        consulting: string;
      };
      budgetLabel: string;
      budgetPlaceholder: string;
      messageLabel: string;
      messagePlaceholder: string;
      submitBtn: string;
      submitting: string;
      successTitle: string;
      successMsg: string;
      sendViaEmail: string;
      sendViaWhatsapp: string;
      resetBtn: string;
    };
  };
  footer: {
    tagline: string;
    quickLinks: string;
    servicesTitle: string;
    contactInfoTitle: string;
    rightsReserved: string;
    securityBadge: string;
  };
}

export const translations: Record<Language, TranslationSchema> = {
  en: {
    nav: {
      home: "Home",
      services: "Services",
      portfolio: "Work & Portfolio",
      whyUs: "Why hacco",
      reviews: "Reviews & Results",
      contact: "Contact Us",
      getInTouch: "Get In Touch",
      quoteBtn: "Start a Project",
    },
    hero: {
      badge: "Software Engineering & Digital Studio",
      headlinePart1: "Transforming Ideas into ",
      headlineHighlight: "Cutting-Edge",
      headlinePart2: " Digital Solutions.",
      subtitle: "We engineer high-performance custom web applications, scalable enterprise platforms, and native mobile experiences that drive substantial business growth.",
      exploreServices: "Explore Services",
      contactUs: "Contact Us",
      stats: {
        projects: "50+",
        projectsLabel: "Engineered Projects",
        uptime: "99.9%",
        uptimeLabel: "System Reliability",
        speed: "<100ms",
        speedLabel: "Average Latency",
        satisfaction: "100%",
        satisfactionLabel: "Client Satisfaction",
      },
      techStackTitle: "POWERING ENTERPRISE ARCHITECTURES WITH MODERN STACKS",
    },
    services: {
      badge: "Core Engineering Capabilities",
      title: "Engineered for Speed, Scale & Precision",
      subtitle: "From responsive web applications to robust cross-platform mobile ecosystems, we turn complex technical challenges into competitive advantages.",
      webDev: {
        title: "Web Development",
        subtitle: "Custom Web Apps & High-Converting Platforms",
        description: "Modern, secure web applications built with React, Next.js, Node.js, and enterprise-grade cloud backends.",
        features: [
          "Custom Web Applications & SaaS Solutions",
          "High-Conversion Corporate Portals",
          "Next-Gen Headless E-Commerce Engines",
          "Pixel-Perfect Responsive UI/UX Systems",
          "RESTful & GraphQL Scalable APIs",
        ],
      },
      mobileDev: {
        title: "Mobile App Development",
        subtitle: "Native & Cross-Platform Mobile Apps",
        description: "Exceptional iOS and Android applications developed for fluid performance, native device integration, and delightful ergonomics.",
        features: [
          "Native iOS (Swift) & Android (Kotlin) Development",
          "Cross-Platform Flutter & React Native Solutions",
          "Offline-First Architecture & Real-Time Sync",
          "Hardware Sensors, Biometrics & BLE Integration",
          "App Store & Google Play Launch Optimization",
        ],
      },
      cloudDevOps: {
        title: "Cloud & Scalable Architecture",
        subtitle: "High-Availability Infrastructure",
        description: "Robust containerized microservices, CI/CD automation pipelines, and enterprise-level database design.",
        features: [
          "Cloud Migration & Infrastructure-as-Code",
          "Microservices, Docker & Kubernetes Clusters",
          "Distributed Databases & Low-Latency Caching",
          "Automated Testing & Security Hardening",
        ],
      },
      uiux: {
        title: "UI/UX & Product Design",
        subtitle: "User-Centered Digital Experiences",
        description: "Deep design research, interactive wireframing, design systems, and rapid prototyping that captivate users.",
        features: [
          "Comprehensive User Research & Journeys",
          "Interactive Prototypes & Design Systems",
          "Figma Component Libraries & Tokens",
          "Accessibility (WCAG AA) & Usability Audits",
        ],
      },
      ctaPrompt: "Have an ambitious software project in mind?",
      ctaButton: "Discuss Your Architecture With Us",
    },
    whyUs: {
      badge: "The hacco Difference",
      title: "Why High-Growth Businesses Choose hacco",
      subtitle: "We combine rigorous engineering standards with rapid delivery to build products that outperform expectations.",
      values: {
        highSpeed: {
          title: "High Speed & Performance",
          desc: "Lightning-fast page loads, sub-second API roundtrips, and optimized bundle sizes that boost conversion and SEO scores.",
          metric: "<0.8s LCP",
        },
        cleanCode: {
          title: "Clean & Maintainable Code",
          desc: "Strict type-safety, documented architecture, and modular patterns ensuring your codebase is future-proof and developer-friendly.",
          metric: "100% Typed",
        },
        scalable: {
          title: "Scalable Architecture",
          desc: "Built to effortlessly handle 10x to 100x traffic spikes with automated elasticity, caching tiers, and resilient failovers.",
          metric: "Zero Downtime",
        },
        support247: {
          title: "24/7 Dedicated Support",
          desc: "Continuous automated monitoring, proactive security updates, and direct developer communication channels whenever you need us.",
          metric: "24/7 Monitoring",
        },
      },
    },
    portfolio: {
      badge: "Selected Case Studies",
      title: "Real Projects. Tangible Business Impact.",
      subtitle: "Explore our recent software engineering works across web platforms and mobile applications.",
      filters: {
        all: "All Projects",
        web: "Web Applications",
        mobile: "Mobile Apps",
        fullstack: "Enterprise & Cloud",
      },
      viewProject: "View Project",
      viewDetails: "View Case Study",
      closeModal: "Close Details",
      client: "Client / Industry",
      year: "Delivered",
      techStack: "Tech Stack",
      keyDeliverables: "Key Architecture Deliverables",
    },
    reviews: {
      badge: "Verified Client Trust & Case Metrics",
      title: "Client Testimonials & Delivered Results",
      subtitle: "See real reviews from founders and engineering leaders side-by-side with the tangible metrics achieved for their requests.",
      reviewsTab: "Client Reviews",
      resultsTab: "Delivered Project Outcomes",
      reviewsHeading: "What Our Partners Say",
      reviewsSubheading: "Verified feedback from founders, CTOs, and product directors who partnered with hacco.",
      resultsHeading: "Client Request vs. hacco Delivery",
      resultsSubheading: "Transparent case-by-case comparison showing exact business requests, our engineering solution, and measurable ROI.",
      whatClientRequested: "What the Client Requested",
      whatHaccoDelivered: "What hacco Engineered & Delivered",
      metricsTitle: "Tangible Performance Gains",
      clientFeedbackQuote: "Client Verdict on Outcome",
      verifiedClientBadge: "Verified Enterprise Client",
      satisfactionScore: "100% Client Satisfaction",
      onTimeRate: "99.4% On-Time Deployment",
      guaranteeTitle: "Direct Architectural Warranty",
      guaranteeDesc: "All software engineered by Murad Haco is backed by 100% bug-free delivery assurance and post-launch maintenance.",
      ctaReviewPrompt: "Ready to achieve measurable technical results for your company?",
      ctaReviewBtn: "Start Your Project Consultation",
    },
    contact: {
      badge: "Let's Build Together",
      title: "Connect With Our Engineering Team",
      subtitle: "Direct access to our lead engineers. Tell us about your technical goals, timeline, and vision.",
      infoTitle: "Direct Contact Information",
      infoDesc: "Feel free to reach out directly via Gmail or WhatsApp for fast, technical consultations.",
      emailLabel: "Official Gmail",
      phoneLabel: "Phone / Direct Line",
      whatsappLabel: "WhatsApp Quick Chat",
      locationLabel: "Office / Operations",
      locationValue: "Istanbul, Turkey & Global Remote",
      copyEmail: "Copy Email",
      copied: "Copied to clipboard!",
      openGmail: "Send via Gmail",
      chatWhatsapp: "Message on WhatsApp",
      callNow: "Call Directly",
      form: {
        nameLabel: "Your Name",
        namePlaceholder: "e.g. Alexander Wright",
        emailLabel: "Work Email",
        emailPlaceholder: "name@company.com",
        phoneLabel: "Phone Number (Optional)",
        phonePlaceholder: "+1 (555) 000-0000",
        serviceLabel: "Service Requested",
        serviceSelectPlaceholder: "Select primary engineering need",
        servicesList: {
          web: "Web Application Development",
          mobile: "Mobile App (iOS / Android)",
          fullstack: "Full-Stack Enterprise Platform",
          consulting: "Architecture & Code Audit",
        },
        budgetLabel: "Estimated Scope / Timeline",
        budgetPlaceholder: "e.g., MVP in 6-8 weeks",
        messageLabel: "Project Overview",
        messagePlaceholder: "Describe your project requirements, target users, and key features...",
        submitBtn: "Send Engineering Inquiry",
        submitting: "Preparing Transmission...",
        successTitle: "Inquiry Ready to Send!",
        successMsg: "Your message has been formatted. Click below to deliver it directly to Murad Haco via Gmail or WhatsApp.",
        sendViaEmail: "Open in Gmail / Email Client",
        sendViaWhatsapp: "Send directly via WhatsApp",
        resetBtn: "Send Another Message",
      },
    },
    footer: {
      tagline: "Engineering premium digital experiences, web apps, and native mobile software designed for limitless scale.",
      quickLinks: "Navigation",
      servicesTitle: "Capabilities",
      contactInfoTitle: "Direct Channels",
      rightsReserved: "© 2026 hacco. All rights reserved.",
      securityBadge: "ISO 27001 & GDPR Compliant Development Practices",
    },
  },

  ar: {
    nav: {
      home: "الرئيسية",
      services: "خدماتنا",
      portfolio: "أعمالنا ومشاريعنا",
      whyUs: "لماذا هاكو؟",
      reviews: "آراء ونتائج العملاء",
      contact: "تواصل معنا",
      getInTouch: "ابدأ مشروعك",
      quoteBtn: "طلب استشارة",
    },
    hero: {
      badge: "استوديو هندسة البرمجيات والحلول الرقمية",
      headlinePart1: "نحوّل الأفكار إلى ",
      headlineHighlight: "حلول رقمية متطورة",
      headlinePart2: " فائقة الدقة والسرعة.",
      subtitle: "نبتكر ونطوّر تطبيقات الويب المتقدمة، المنصات السحابية المتكاملة، وتطبيقات الهواتف الذكية بنظم هندسية قابلة للتوسع لتحقيق أقصى نمو لأعمالك.",
      exploreServices: "استكشف خدماتنا",
      contactUs: "تواصل معنا الآن",
      stats: {
        projects: "+50",
        projectsLabel: "مشروع منجز بنجاح",
        uptime: "99.9%",
        uptimeLabel: "موثوقية الأنظمة",
        speed: "<100ms",
        speedLabel: "سرعة الاستجابة",
        satisfaction: "100%",
        satisfactionLabel: "رضا العملاء والشركاء",
      },
      techStackTitle: "نبني الأنظمة بأحدث التقنيات البرمجية العالمية",
    },
    services: {
      badge: "قدراتنا الهندسية المتخصصة",
      title: "هندسة برمجية صُممت للسرعة، القابلية للتوسع والدقة",
      subtitle: "من تطبيقات الويب المتجاوبة إلى منظومات الهواتف الذكية الشاملة، نحوّل التحديات التقنية المعقدة إلى ميزات تنافسية فارقة.",
      webDev: {
        title: "تطوير تطبيقات ومواقع الويب",
        subtitle: "منصات ويب مخصصة وسريعة التحويل",
        description: "تطبيقات ويب فائقة الأمان والأداء تعتمد على React و Next.js و Node.js مع بنية تحتية سحابية متقدمة.",
        features: [
          "تطبيقات ويب مخصصة ومنصات SaaS سحابية",
          "بوابات رقمية ومواقع شركات عالية التحويل",
          "متاجر إلكترونية حديثة بنظام Headless E-Commerce",
          "واجهات مستخدم دقيقة UI/UX متجاوبة بالكامل",
          "واجهات برمجة تطبيقات RESTful & GraphQL سريعة",
        ],
      },
      mobileDev: {
        title: "تطوير تطبيقات الهواتف الذكية",
        subtitle: "تطبيقات أصلية ومتعددة المنصات (iOS & Android)",
        description: "تطبيقات سلسة وعالية الكفاءة لنظامي iOS و Android، متوافقة مع عتاد الأجهزة ومصممة بأعلى معايير تجربة المستخدم.",
        features: [
          "تطوير أصيل Native لنظام iOS (Swift) و Android (Kotlin)",
          "حلول متعددة المنصات عبر Flutter و React Native",
          "بنية تدعم العمل دون إنترنت مع مزامنة لحظية Offline-first",
          "ربط عتاد الأجهزة، البصمة، وتحديد المواقع BLE",
          "نشر وإدارة التطبيقات على App Store و Google Play",
        ],
      },
      cloudDevOps: {
        title: "الحلول السحابية وهندسة البنية التحتية",
        subtitle: "بنية تحتية عالية التوافر والأمان",
        description: "حاويات برمجية دقيقة، خطوط أتمتة مستمرة CI/CD، وقواعد بيانات موزعة تتحمل أضخم أعباء العمل.",
        features: [
          "النقل السحابي وإدارة البنية عبر الأكواد (IaC)",
          "أنظمة Microservices وحاويات Docker & Kubernetes",
          "قواعد بيانات موزعة مع تقنيات تخزين مؤقت فائق السرعة",
          "اختبارات أتمتة شاملة وتعزيز الأمان السيبراني",
        ],
      },
      uiux: {
        title: "تصميم واجهات وتجربة المستخدم (UI/UX)",
        subtitle: "تجارب تفاعلية تخطف الأنظار",
        description: "أبحاث تجربة مستخدم معمقة، نماذج أولية تفاعلية، وأنظمة تصميم موحدة تبهر العملاء وتزيد الولاء.",
        features: [
          "دراسات سلوك المستخدم ورسم رحلات العميل الكاملة",
          "نماذج تفاعلية ونظم تصميم متطورة Design Systems",
          "مكتبات مكونات Figma احترافية وموحدة",
          "تدقيق سهولة الوصول WCAG ومعايير الاستخدام القياسية",
        ],
      },
      ctaPrompt: "هل لديك فكرة مشروع برمجية طموحة تبحث عن شريك لتنفيذها؟",
      ctaButton: "ناقش البنية الهندسية لمشروعك معنا",
    },
    whyUs: {
      badge: "معيار هاكو الهندسي",
      title: "لماذا تختار الشركات الرائدة التعاون مع هاكو؟",
      subtitle: "نجمع بين أعلى المعايير الهندسية والسرعة الفائقة في التسليم لنبني برمجيات تتجاوز التوقعات.",
      values: {
        highSpeed: {
          title: "سرعة وأداء استثنائي",
          desc: "تحميل فائق اللحظة للصفحات، استجابة برمجية في أجزاء من الثانية، وأكواد محسنة ترفع معدلات التحويل وظهور محركات البحث.",
          metric: "أقل من 0.8 ثانية",
        },
        cleanCode: {
          title: "كود نظيف وقابل للصيانة",
          desc: "أنظمة برمجية صارمة مطابقة للمواصفات، توثيق هندسي دقيق، وهيكل برمجي منظم يسهل التطوير المستقبلي بثقة.",
          metric: "100% كود مدقق",
        },
        scalable: {
          title: "بنية معمارية قابلة للتوسع",
          desc: "صُممت الأنظمة لتحمل تضاعف أعداد المستخدمين عشرات ومئات المرات دون أي تأثر في الأداء أو انقطاع.",
          metric: "استقرار بلا توقف",
        },
        support247: {
          title: "دعم فني واستجابة 24/7",
          desc: "مراقبة آلية مستمرة على مدار الساعة، تحديثات أمان استباقية، وقنوات اتصال مباشرة مع المهندسين في أي وقت.",
          metric: "متابعة دائمة 24/7",
        },
      },
    },
    portfolio: {
      badge: "أبرز أعمالنا وقصص النجاح",
      title: "مشاريع حقيقية. نتائج ملموسة وأثر رقمي.",
      subtitle: "تصفح نخبة من مشاريعنا الهندسية المنجزة لتطبيقات الويب وحلول الهواتف الذكية.",
      filters: {
        all: "جميع المشاريع",
        web: "تطبيقات الويب",
        mobile: "تطبيقات الهواتف",
        fullstack: "منصات ومشاريع سحابية",
      },
      viewProject: "تفاصيل المشروع",
      viewDetails: "عرض دراسة الحالة",
      closeModal: "إغلاق التفاصيل",
      client: "العميل / القطاع",
      year: "سنة الإنجاز",
      techStack: "التقنيات المستخدمة",
      keyDeliverables: "أبرز المخرجات الهندسية",
    },
    reviews: {
      badge: "شهادات موثقة ونتائج واقعية بالأرقام",
      title: "آراء العملاء ونتائج المشاريع المنفذة",
      subtitle: "شاهد التقييمات الصريحة من شركائنا جنباً إلى جنب مع النتائج والمؤشرات الحقيقية لما طلبوه وتم إنجازه لمشاريعهم.",
      reviewsTab: "آراء وتقييمات العملاء",
      resultsTab: "نتائج المشاريع المنفذة",
      reviewsHeading: "ماذا يقول عملاؤنا وشركاؤنا؟",
      reviewsSubheading: "تقييمات موثقة من مدراء تنفيذيين، قادة تقنيين، ومؤسسي شركات تعاونوا مع استوديو هاكو.",
      resultsHeading: "مقارنة: ما طلبه العميل مقابل النتيجة المحققة",
      resultsSubheading: "استعراض شفاف وواضح للمتطلبات التقنية، الحل الهندسي المنفذ، والأثر الرقمي والمالي الملموس بالأرقام.",
      whatClientRequested: "ما طلبه العميل والمشكلة التقنية",
      whatHaccoDelivered: "ما بنته هاكو والحل الهندسي المُسلَّم",
      metricsTitle: "المؤشرات والنتائج الرقمية المُحققة",
      clientFeedbackQuote: "رأي العميل في النتيجة النهائية",
      verifiedClientBadge: "عميل مؤسسي موثق",
      satisfactionScore: "100% نسبة رضا العملاء",
      onTimeRate: "99.4% التزام بالمواعيد المحددة",
      guaranteeTitle: "ضمان الجودة الهندسية المباشر",
      guaranteeDesc: "كافة المشاريع والحلول التي يطورها مراد هاكو مشمولة بضمان هندسي كامل، كود نظيف 100%، ودعم مستمر بعد الإطلاق.",
      ctaReviewPrompt: "هل ترغب في تحقيق نتائج هندسية وتجارية مماثلة لمشروعك؟",
      ctaReviewBtn: "ابدأ استشارتك الهندسية الآن",
    },
    contact: {
      badge: "لنبدأ العمل معاً",
      title: "تواصل مباشرة مع فريقنا الهندسي",
      subtitle: "اتصال مباشر بالمهندس المسؤول. شاركنا أهدافك ومتطلبات مشروعك للحصول على استشارة متخصصة.",
      infoTitle: "بيانات التواصل المباشرة",
      infoDesc: "يمكنك التواصل معنا فوراً عبر حساب الجيميل أو رسائل الواتساب للحصول على استجابة سريعة.",
      emailLabel: "البريد الإلكتروني (جيميل)",
      phoneLabel: "رقم الهاتف / الاتصال المباشر",
      whatsappLabel: "محادثة فورية عبر واتساب",
      locationLabel: "المقر والعمليات",
      locationValue: "إسطنبول، تركيا & خدمات عن بعد عالمياً",
      copyEmail: "نسخ البريد",
      copied: "تم النسخ إلى الحافظة بنجاح!",
      openGmail: "إرسال عبر جيميل مباشرة",
      chatWhatsapp: "محادثة عبر واتساب",
      callNow: "اتصال هاتفي مباشر",
      form: {
        nameLabel: "الاسم الكامل",
        namePlaceholder: "مثال: مراد هاكو",
        emailLabel: "البريد الإلكتروني للعمل",
        emailPlaceholder: "name@company.com",
        phoneLabel: "رقم الهاتف (اختياري)",
        phonePlaceholder: "+90 531 966 6195",
        serviceLabel: "الخدمة المطلوبة",
        serviceSelectPlaceholder: "اختر الخدمة البرمجية الأساسية",
        servicesList: {
          web: "تطوير تطبيقات ومواقع الويب",
          mobile: "تطوير تطبيقات الهواتف (iOS / Android)",
          fullstack: "منصة برمجية متكاملة Full-Stack",
          consulting: "استشارات وتدقيق معماري للأكواد",
        },
        budgetLabel: "النطاق التقديري / الإطار الزمني",
        budgetPlaceholder: "مثال: إطلاق النسخة الأولى خلال 6-8 أسابيع",
        messageLabel: "تفاصيل المشروع",
        messagePlaceholder: "اشرح لنا متطلبات مشروعك، الجمهور المستهدف، وأهم الميزات المطلوبة...",
        submitBtn: "إرسال الاستفسار الهندسي",
        submitting: "جاري تجهيز البيانات...",
        successTitle: "جاهز للإرسال الفوري!",
        successMsg: "تم تنسيق تفاصيل طلبك بنجاح. اضغط أدناه لإرسال الرسالة مباشرة إلى مراد هاكو عبر جيميل أو واتساب.",
        sendViaEmail: "فتح في جيميل / بريدك المفضل",
        sendViaWhatsapp: "إرسال مباشرة عبر واتساب",
        resetBtn: "كتابة رسالة أخرى",
      },
    },
    footer: {
      tagline: "نبتكر حلولاً رقمية وتطبيقات ويب وهواتف متطورة بهندسة برمجية رفيعة صُممت لتواكب النمو اللامحدود.",
      quickLinks: "روابط سريعة",
      servicesTitle: "الخدمات",
      contactInfoTitle: "قنوات التواصل",
      rightsReserved: "© 2026 شركة هاكو (hacco). جميع الحقوق محفوظة.",
      securityBadge: "ممارسات برمجية مطابقة لأعلى معايير الأمان ISO و GDPR",
    },
  },

  tr: {
    nav: {
      home: "Ana Sayfa",
      services: "Hizmetler",
      portfolio: "Projeler & Portföy",
      whyUs: "Neden hacco?",
      reviews: "Yorumlar ve Sonuçlar",
      contact: "İletişim",
      getInTouch: "Teklif Alın",
      quoteBtn: "Proje Başlat",
    },
    hero: {
      badge: "Yazılım Mühendisliği & Dijital Ajans",
      headlinePart1: "Fikirleri ",
      headlineHighlight: "Yenilikçi",
      headlinePart2: " Dijital Çözümlere Dönüştürüyoruz.",
      subtitle: "İşletmenizin büyümesini hızlandıran yüksek performanslı özel web uygulamaları, ölçeklenebilir bulut sistemleri ve kusursuz mobil deneyimler geliştiriyoruz.",
      exploreServices: "Hizmetleri Keşfet",
      contactUs: "Bize Ulaşın",
      stats: {
        projects: "50+",
        projectsLabel: "Tamamlanan Proje",
        uptime: "%99.9",
        uptimeLabel: "Sistem Kararlılığı",
        speed: "<100ms",
        speedLabel: "Ortalama Yanıt Süresi",
        satisfaction: "%100",
        satisfactionLabel: "Müşteri Memnuniyeti",
      },
      techStackTitle: "MODERN YAZILIM TEKNOLOJİLERİYLE GÜÇLENDİRİLMİŞ MİMARİLER",
    },
    services: {
      badge: "Mühendislik Yetkinliklerimiz",
      title: "Hız, Ölçek ve Kusursuzluk İçin Tasarlandı",
      subtitle: "Hızlı yanıt veren web platformlarından kapsamlı mobil ekosistemlere kadar, karmaşık teknik zorlukları rekabet avantajına dönüştürüyoruz.",
      webDev: {
        title: "Web Geliştirme",
        subtitle: "Özel Web Uygulamaları & Yüksek Dönüşümlü Siteler",
        description: "React, Next.js, Node.js ve kurumsal bulut mimarileri ile oluşturulmuş modern, güvenli ve hızlı web uygulamaları.",
        features: [
          "Özel Web Uygulamaları ve SaaS Platformları",
          "Yüksek Dönüşüm Odaklı Kurumsal Web Siteleri",
          "Yeni Nesil Headless E-Ticaret Altyapıları",
          "Piksel Hassasiyetinde UI/UX Tasarım Sistemleri",
          "Ölçeklenebilir RESTful ve GraphQL API'leri",
        ],
      },
      mobileDev: {
        title: "Mobil Uygulama Geliştirme",
        subtitle: "Yerel ve Çapraz Platform Mobil Çözümler",
        description: "Akıcı performans, yerel cihaz entegrasyonu ve üstün ergonomi için geliştirilmiş iOS ve Android uygulamaları.",
        features: [
          "Yerel iOS (Swift) ve Android (Kotlin) Geliştirme",
          "Flutter ve React Native Çapraz Platform Çözümleri",
          "Çevrimdışı Çalışma (Offline-first) ve Anlık Senkronizasyon",
          "Donanım Sensörleri, Biyometrik Giriş ve BLE Entegrasyonu",
          "App Store ve Google Play Yayın Optimizasyonu",
        ],
      },
      cloudDevOps: {
        title: "Bulut ve Ölçeklenebilir Mimari",
        subtitle: "Yüksek Erişilebilirlikli Altyapılar",
        description: "Konteyner tabanlı mikroservisler, CI/CD otomasyonu ve yüksek verimli veritabanı tasarımları.",
        features: [
          "Bulut Geçişi ve Kod Olarak Altyapı (IaC)",
          "Mikroservis Mimarisi, Docker ve Kubernetes Kümeleri",
          "Dağıtık Veritabanları ve Düşük Gecikmeli Önbellekleme",
          "Otomatik Test ve Güvenlik Sıkılaştırma",
        ],
      },
      uiux: {
        title: "UI/UX ve Ürün Tasarımı",
        subtitle: "Kullanıcı Odaklı Dijital Deneyimler",
        description: "Derinlemesine kullanıcı araştırması, etkileşimli tel kafesler ve kullanıcıları büyüleyen modern tasarım sistemleri.",
        features: [
          "Kapsamlı Kullanıcı Araştırmaları ve Deneyim Haritaları",
          "Etkileşimli Prototipler ve Tasarım Sistemleri",
          "Figma Bileşen Kütüphaneleri ve Tasarım Standartları",
          "Erişilebilirlik (WCAG AA) ve Kullanılabilirlik Denetimleri",
        ],
      },
      ctaPrompt: "Hayalinizde iddialı bir yazılım projesi mi var?",
      ctaButton: "Teknik Mimarimizi Birlikte Konuşalım",
    },
    whyUs: {
      badge: "hacco Standartları",
      title: "Lider Şirketler Neden hacco'yu Tercih Ediyor?",
      subtitle: "Beklentileri aşan ürünler inşa etmek için titiz mühendislik standartlarını hızlı teslimatla birleştiriyoruz.",
      values: {
        highSpeed: {
          title: "Yüksek Hız ve Performans",
          desc: "Işık hızında sayfa yüklemeleri, milisaniyelik API döngüleri ve dönüşüm oranlarını artıran optimize kod yapıları.",
          metric: "<0.8sn LCP",
        },
        cleanCode: {
          title: "Temiz ve Sürdürülebilir Kod",
          desc: "Geleceğe hazır, dökümante edilmiş ve modüler yazılım mimarisiyle kod tabanınız her zaman geliştirilebilir kalır.",
          metric: "%100 Tipli Kod",
        },
        scalable: {
          title: "Ölçeklenebilir Mimari",
          desc: "Trafik artışlarında otomatik esneklik, önbellek katmanları ve kesintisiz yedekleme sistemleri ile 10x-100x büyüme gücü.",
          metric: "Sıfır Kesinti",
        },
        support247: {
          title: "7/24 Kesintisiz Destek",
          desc: "Sürekli otomatik izleme, proaktif güvenlik güncellemeleri ve ihtiyaç duyduğunuz her an doğrudan mühendis desteği.",
          metric: "7/24 İzleme",
        },
      },
    },
    portfolio: {
      badge: "Seçilmiş Başarı Hikayeleri",
      title: "Gerçek Projeler. Somut İş Çıktıları.",
      subtitle: "Web platformları ve mobil uygulamalarda hayata geçirdiğimiz yenilikçi yazılım projelerimizi inceleyin.",
      filters: {
        all: "Tüm Projeler",
        web: "Web Uygulamaları",
        mobile: "Mobil Uygulamalar",
        fullstack: "Kurumsal & Bulut",
      },
      viewProject: "Projeyi İncele",
      viewDetails: "Vaka Analizi",
      closeModal: "Detayları Kapat",
      client: "Müşteri / Sektör",
      year: "Teslim Yılı",
      techStack: "Kullanılan Teknolojiler",
      keyDeliverables: "Mühendislik Çıktıları",
    },
    reviews: {
      badge: "Doğrulanmış Müşteri Güveni & Veriler",
      title: "Müşteri Yorumları ve Gerçekleşen Sonuçlar",
      subtitle: "Şirket kurucuları ve teknoloji liderlerinin samimi yorumlarını, talep ettikleri projelerde elde edilen somut başarı rakamlarıyla yan yana inceleyin.",
      reviewsTab: "Müşteri Yorumları",
      resultsTab: "Teslim Edilen Proje Çıktıları",
      reviewsHeading: "İş Ortaklarımız Ne Diyor?",
      reviewsSubheading: "hacco ile çalışan kurucular, CTO'lar ve ürün yöneticilerinden onaylanmış geri bildirimler.",
      resultsHeading: "Karşılaştırma: Müşteri Talebi ve hacco Çıktısı",
      resultsSubheading: "Talep edilen teknik gereksinimler, uyguladığımız mühendislik çözümü ve ölçülebilir iş kazanımları.",
      whatClientRequested: "Müşterinin Talep Ettiği İhtiyaç",
      whatHaccoDelivered: "hacco'nun Geliştirdiği ve Teslim Ettiği Çözüm",
      metricsTitle: "Elde Edilen Somut Performans Verileri",
      clientFeedbackQuote: "Müşterinin Sonuç Değerlendirmesi",
      verifiedClientBadge: "Doğrulanmış Kurumsal Müşteri",
      satisfactionScore: "%100 Müşteri Memnuniyeti",
      onTimeRate: "%99.4 Zamanında Teslimat Oranı",
      guaranteeTitle: "Doğrudan Mühendislik Garantisi",
      guaranteeDesc: "Murad Haco tarafından geliştirilen tüm yazılımlar %100 hatasız teslimat güvencesi ve canlı sonrasındaki teknik destekle korunur.",
      ctaReviewPrompt: "Şirketiniz için ölçülebilir teknik ve ticari sonuçlar almaya hazır mısınız?",
      ctaReviewBtn: "Projeniz İçin Görüşme Başlatın",
    },
    contact: {
      badge: "Birlikte Üretelim",
      title: "Mühendislik Ekibimizle İletişime Geçin",
      subtitle: "Teknik liderlerimizle doğrudan görüşün. Projenizin hedeflerini, takvimini ve vizyonunu paylaşın.",
      infoTitle: "Doğrudan İletişim Bilgileri",
      infoDesc: "Hızlı teknik danışmanlık ve teklif için Gmail veya WhatsApp üzerinden doğrudan ulaşabilirsiniz.",
      emailLabel: "Resmi Gmail",
      phoneLabel: "Telefon / Doğrudan Hat",
      whatsappLabel: "WhatsApp Hızlı Mesaj",
      locationLabel: "Ofis & Operasyon",
      locationValue: "İstanbul, Türkiye & Global Uzaktan Hizmet",
      copyEmail: "E-postayı Kopyala",
      copied: "Panoya kopyalandı!",
      openGmail: "Gmail ile Gönder",
      chatWhatsapp: "WhatsApp'ta Mesaj At",
      callNow: "Hemen Ara",
      form: {
        nameLabel: "Adınız Soyadınız",
        namePlaceholder: "Örn: Murad Haco",
        emailLabel: "İş E-postanız",
        emailPlaceholder: "ad@sirket.com",
        phoneLabel: "Telefon Numaranız (İsteğe bağlı)",
        phonePlaceholder: "+90 531 966 6195",
        serviceLabel: "Talep Edilen Hizmet",
        serviceSelectPlaceholder: "Ana mühendislik ihtiyacını seçin",
        servicesList: {
          web: "Web Uygulaması Geliştirme",
          mobile: "Mobil Uygulama (iOS / Android)",
          fullstack: "Full-Stack Kurumsal Platform",
          consulting: "Teknik Mimari & Kod Denetimi",
        },
        budgetLabel: "Tahmini Kapsam / Zaman Çizelgesi",
        budgetPlaceholder: "Örn: 6-8 hafta içinde MVP",
        messageLabel: "Proje Özeti",
        messagePlaceholder: "Proje gereksinimlerinizi, hedef kullanıcı kitlenizi ve temel özellikleri açıklayın...",
        submitBtn: "Teknik Talebi Gönder",
        submitting: "Hazırlanıyor...",
        successTitle: "Gönderilmeye Hazır!",
        successMsg: "Mesajınız başarıyla biçimlendirildi. Murad Haco'ya Gmail veya WhatsApp ile doğrudan iletmek için aşağıdaki düğmeleri kullanın.",
        sendViaEmail: "Gmail / E-posta ile İlet",
        sendViaWhatsapp: "Doğrudan WhatsApp ile Gönder",
        resetBtn: "Yeni Mesaj Yaz",
      },
    },
    footer: {
      tagline: "Sınırsız ölçeklenebilirlik için tasarlanmış yüksek standartlı dijital deneyimler, web sistemleri ve yerel mobil yazılımlar.",
      quickLinks: "Gezinme",
      servicesTitle: "Hizmetlerimiz",
      contactInfoTitle: "Doğrudan Kanallar",
      rightsReserved: "© 2026 hacco. Tüm hakları saklıdır.",
      securityBadge: "ISO 27001 & GDPR Uyumlu Yazılım Mühendisliği Standartları",
    },
  },
};
