/**
 * Every piece of copy on the site lives here.
 * Edit this file to update the portfolio — no component changes needed.
 */

export const profile = {
  name: 'Mohammad Azeem',
  role: 'React Native Mobile App & Backend Engineer',
  location: 'Lucknow, India',
  timezone: 'IST · UTC+5:30',
  available: true,
  availabilityNote: 'Open to part-time mobile app & backend roles',
  email: 'azeemmohammad377@gmail.com',
  phone: '+91 85738 67986',
  phoneHref: 'tel:+918573867986',
  whatsapp: 'https://wa.me/918573867986',
  /**
   * Paste your Cal.com or Calendly link here (see README) to make the
   * "Book a 15-min call" buttons open a real scheduler.
   * While this is empty they fall back to a pre-filled booking email, so the
   * buttons always work.
   */
  booking: '',
  github: 'https://github.com/Azeem00786',
  githubHandle: 'Azeem00786',
  linkedin: 'https://www.linkedin.com/in/mohammad-azeem-69b056217',
  linkedinHandle: 'mohammad-azeem',
  resume: 'AzeemResume.pdf',
  intro:
    'I build and maintain React Native apps for iOS and Android, and the backend services that support them. I own the mobile lifecycle end to end: UI, native integrations, performance, bug fixes, CI/CD and store deployment. I have also built deployment automation on top of App Store Connect and Google Play Developer APIs for multi-tenant apps, and use agentic AI to automate repetitive development work.',
  since: 2021,
}

/**
 * Where "Book a 15-min call" points. Uses the real scheduler once
 * `profile.booking` is set; until then it opens a pre-filled booking email so
 * the button is never a dead end.
 */
export const bookingHref =
  profile.booking ||
  `mailto:${profile.email}?subject=${encodeURIComponent(
    'Book a 15-minute call',
  )}&body=${encodeURIComponent(
    "Hi Azeem,\n\nI'd like to book a 15-minute call.\n\nWhat I need help with:\nPreferred day/time (with your timezone):\n\n",
  )}`

export const bookingIsScheduler = Boolean(profile.booking)

export const stats = [
  { value: '5+', label: 'Years shipping' },
  { value: 'iOS + Android', label: 'React Native delivery' },
  { value: '90%', label: 'Less manual release time' },
  { value: 'API + App', label: 'Mobile and backend ownership' },
]

export type Project = {
  id: string
  index: string
  title: string
  kind: string
  year: string
  summary: string
  detail: string[]
  stack: string[]
  link?: { href: string; label: string }
  note?: string
  featured?: boolean
}

export const projects: Project[] = [
  {
    id: 'whitelabel',
    index: '01',
    title: 'White-labeled SaaS Mobile App',
    kind: 'Multi-tenant framework',
    year: '2023 — Present',
    summary:
      'A reusable mobile app framework powering many client apps from one codebase: dynamic branding, theming and per-tenant configuration through environment-based build variants.',
    detail: [
      'Augmented Reality experiences integrated into the product flow.',
      'Printer support across multiple hardware types via React Native libraries and custom native modules.',
      'Live location tracking with native modules and geolocation APIs.',
      'iOS Live Activities — order tracking on the Lock Screen and Dynamic Island.',
      'Rich push and local notifications with custom channels, plus deep linking into specific screens.',
      'In-app updates, responsive UI and UX, bug fixing and memory and runtime performance optimisation across iOS and Android.',
      'Facebook SDK event tracking for ad attribution, and WebView-embedded CMS content.',
    ],
    stack: ['React Native', 'Java', 'Swift', 'Native modules', 'ARKit / ARCore', 'REST APIs'],
    note: 'Hyperzod Technology — flagship product',
  },
  {
    id: 'quick-commerce',
    index: '02',
    title: 'Quick Commerce Suite',
    kind: 'Three apps · iOS & Android',
    year: 'Production',
    summary:
      'A complete quick-commerce system delivered as three connected apps — customer, driver and merchant — shipped to both the App Store and Play Store.',
    detail: [
      'Customer app: browsing, cart, checkout, live order tracking and notifications.',
      'Driver app: task assignment, real-time location broadcasting, route and delivery state machine.',
      'Merchant app: order intake, preparation status, thermal printer support and store controls.',
      'One shared codebase and design system across all three, with per-role builds and store listings.',
    ],
    stack: ['React Native', 'Native modules', 'Geolocation', 'Push notifications', 'REST APIs'],
    note: 'Client product — screens available on request',
    featured: true,
  },
  {
    id: 'doctor-app',
    index: '03',
    title: 'Doctor Appointment App',
    kind: 'Mobile booking & scheduling',
    year: 'Production',
    summary:
      'An appointment booking app connecting patients with doctors — scheduling, availability and appointment management, served by a microservices backend.',
    detail: [
      'Patient-side booking: find a doctor, see real availability, book and manage appointments.',
      'Doctor-side schedule and appointment management.',
      'Microservices backend — separate services behind APIs rather than one monolith, so scheduling and user management scale independently.',
    ],
    stack: ['Microservices', 'System design', 'REST APIs'],
    note: 'Client product — architecture walkthrough on request',
  },
  {
    id: 'quiz',
    index: '04',
    title: 'Engilo: Spoken English & Exams',
    kind: 'Consumer mobile app',
    year: 'Live',
    summary:
      'A quiz app for English learners with a modern UI, Google sign-in and ad monetisation built in.',
    detail: [
      'React Navigation flows with push notifications driving retention.',
      'Firebase Authentication with Google Sign-In.',
      'Google AdMob integration for monetisation.',
      'Quiz content and user progress served over secure REST APIs.',
    ],
    stack: ['React Native', 'Firebase', 'Google Auth', 'AdMob', 'REST APIs'],
    link: {
      href: 'https://play.google.com/store/apps/details?id=com.customer.englishapp',
      label: 'View on Google Play',
    },
  },
  {
    id: 'cicd',
    index: '05',
    title: 'CI/CD Automation Pipeline',
    kind: 'Release engineering',
    year: '2023 — Present',
    summary:
      'Build, signing and release workflows automated end-to-end for white-labeled mobile apps — cutting manual deployment time by 90%.',
    detail: [
      'Fastlane, Jenkins, GitHub Actions and Codemagic used for repeatable mobile builds and releases.',
      'Automated code signing, versioning and store submission, backed by a deployment service using App Store Connect and Google Play Developer APIs.',
      'Consistent staging and production environments, with release notes and build provenance tracked.',
    ],
    stack: ['Fastlane', 'Jenkins', 'Codemagic', 'GitHub Actions', 'App Store Connect API', 'Google Play Developer API'],
  },
  {
    id: 'microservices',
    index: '06',
    title: 'Laravel Microservices',
    kind: 'Backend platform services',
    year: 'Production',
    summary:
      'A set of independent Laravel services the wider product runs on — deployment, logging, printing and notifications — each owning its job and deployable on its own.',
    detail: [
      'Deployment service: automated app releases through App Store Connect and Google Play Developer APIs, replacing a manual multi-step process.',
      'Logging service: centralised log ingestion and search built on Redis, a message queue and MongoDB — writes stay fast under load, history stays queryable.',
      'Printer service: cloud and thermal printer management across hardware types, with dynamic receipt generation.',
      'Notification service: a single dispatch point for notifications across the platform.',
    ],
    stack: ['Laravel', 'PHP', 'Redis', 'MongoDB', 'Message queues', 'Microservices'],
    note: 'Internal platform services',
  },
  {
    id: 'nahid',
    index: '07',
    title: 'Nahid Group',
    kind: 'Tour & travel platform',
    year: 'Live',
    summary:
      'A fully dynamic travel booking website with a custom admin panel behind it. Every package, itinerary, price and page block is editable by the client — no developer in the loop.',
    detail: [
      'Content-driven front end: tour packages, destinations, galleries and enquiry flows all render from the database.',
      'Admin panel for the operations team — create and price packages, manage bookings, publish content and handle incoming enquiries.',
      'Built for a non-technical team to run daily without touching code.',
    ],
    stack: ['Next.js', 'React', 'Node.js', 'REST APIs', 'Admin panel'],
    link: { href: 'https://www.nahidgroup.in/', label: 'nahidgroup.in' },
    featured: true,
  },
  {
    id: 'poweroflearning',
    index: '08',
    title: 'Power of AI Learning',
    kind: 'Learning platform',
    year: 'Live',
    summary:
      'An AI learning hub where courses, modules and learner content are managed end-to-end from an admin backend.',
    detail: [
      'Course and module management with structured content publishing.',
      'Admin panel controlling curriculum, media and learner-facing pages.',
      'Public site tuned for enrolment — fast pages, clear funnels, mobile-first.',
    ],
    stack: ['Next.js', 'React', 'Node.js', 'REST APIs', 'Admin CMS'],
    link: { href: 'https://www.powerofailearning.in/', label: 'powerofailearning.in' },
    featured: true,
  },
]

export const services = [
  {
    title: 'React Native app development',
    body: 'I build and improve production React Native apps for iOS and Android, from smooth user flows and polished interfaces to reliable native integrations. I can take ownership of new features or an existing app and keep it moving toward a stable release.',
    tags: ['React Native', 'iOS', 'Android', 'Native modules'],
  },
  {
    title: 'Mobile CI/CD & store releases',
    body: 'Build, sign, test and publish apps with Fastlane, Jenkins and Codemagic. I built a deployment service using App Store Connect and Google Play Developer APIs to automate releases across branded apps.',
    tags: ['Fastlane', 'Jenkins', 'Codemagic', 'Store APIs'],
  },
  {
    title: 'Backend services & APIs',
    body: 'Maintain the services behind mobile products: deployment, logging, notifications and printing, with Laravel, Node.js, Redis, queues and MongoDB.',
    tags: ['Laravel', 'Node.js', 'REST APIs', 'Redis'],
  },
  {
    title: 'White-label & multi-tenant delivery',
    body: 'One mobile product, many branded clients. Per-client theming, configuration, build variants and release automation across iOS and Android.',
    tags: ['Multi-tenant', 'Theming', 'Build variants'],
  },
  {
    title: 'Full-stack web development',
    body: 'Next.js and React platforms with Node.js backends, admin panels and CMS tools for content, bookings and operations.',
    tags: ['Next.js', 'React', 'Node.js', 'Admin panels'],
  },
  {
    title: 'App performance & quality',
    body: 'Trace and fix production bugs, optimise memory and runtime behaviour, and refine mobile UI and UX across devices and OS versions.',
    tags: ['Performance', 'Memory', 'Bug fixing', 'UI / UX'],
  },
]

export const skills = [
  { group: 'Mobile', items: ['React Native', 'iOS', 'Android', 'Swift', 'Java', 'Native modules', 'Push and local notifications', 'Deep linking', 'In-app updates', 'Live Activities', 'AR', 'Geolocation', 'Memory optimisation', 'Mobile UI / UX'] },
  { group: 'Mobile CI/CD', items: ['Fastlane', 'Jenkins', 'Codemagic', 'GitHub Actions', 'App Store Connect API', 'Google Play Developer API', 'Code signing', 'Store deployment'] },
  { group: 'Backend & data', items: ['Node.js', 'Laravel', 'PHP', 'REST APIs', 'Microservices', 'System design', 'PostgreSQL', 'MongoDB', 'Redis', 'Message queues', 'SQL', 'Firebase'] },
  { group: 'Frontend', items: ['Next.js', 'React', 'Vue.js', 'JavaScript', 'HTML / CSS', 'Responsive UI'] },
  { group: 'DevOps & hosting', items: ['YAML', 'Cloudflare', 'Google Cloud Platform'] },
  { group: 'Tools', items: ['Git', 'VS Code', 'Xcode', 'Android Studio'] },
]

export const experience = [
  {
    role: 'React Native Mobile App & Backend Engineer',
    org: 'Hyperzod Technology Pvt. Ltd.',
    period: '2023 — Present',
    place: 'Lucknow, India',
    points: [
      'Develop and maintain React Native apps for iOS and Android, from UI and native integrations through bug fixes and performance optimisation.',
      'Build and manage CI/CD pipelines with Fastlane, Jenkins and Codemagic for automated builds, signing and store releases.',
      'Built a deployment service on App Store Connect and Google Play Developer APIs to automate app publishing.',
      'Scaled the deployment strategy for a multi-tenant SaaS architecture supporting white-labeled apps.',
      'Maintain backend services and APIs for deployment, notifications, logging and printing.',
      'Deliver notifications, location tracking, deep links and in-app updates while improving UI, UX and memory use.',
      'Use agentic AI workflows to automate repetitive development tasks and speed up feature delivery.',
    ],
  },
  {
    role: 'Mobile App QA & Deployment Engineer',
    org: 'Hyperzod Technology Pvt. Ltd.',
    period: '2022 — 2023',
    place: 'Lucknow, India',
    points: [
      'Owned end-to-end testing of mobile applications.',
      'Managed deployment and publishing for Android and iOS across both stores.',
      'Maintained release notes and version control for production builds.',
    ],
  },
  {
    role: 'Intern — Manual App Tester',
    org: 'Hyperzod Technology Pvt. Ltd.',
    period: 'Aug 2021 — Jan 2022',
    place: 'Lucknow, India',
    points: [
      'Manual testing of mobile applications for quality and bug-free releases.',
      'Reported and tracked bugs, collaborating with developers on resolutions.',
    ],
  },
]

export const sections = [
  { id: 'work', num: '01', label: 'Work' },
  { id: 'services', num: '02', label: 'Services' },
  { id: 'stack', num: '03', label: 'Stack' },
  { id: 'experience', num: '04', label: 'Background' },
  { id: 'contact', num: '05', label: 'Contact' },
]
