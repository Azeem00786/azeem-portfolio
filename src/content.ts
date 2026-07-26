/**
 * Every piece of copy on the site lives here.
 * Edit this file to update the portfolio — no component changes needed.
 */

export const profile = {
  name: 'Mohammad Azeem',
  role: 'React Native Developer & Mobility DevOps',
  location: 'Lucknow, India',
  timezone: 'IST · UTC+5:30',
  available: true,
  availabilityNote: 'Open to contract & project work',
  email: 'azeemmohammad377@gmail.com',
  github: 'https://github.com/Azeem00786',
  githubHandle: 'Azeem00786',
  linkedin: 'https://www.linkedin.com/in/mohammad-azeem-69b056217',
  linkedinHandle: 'mohammad-azeem',
  resume: 'AzeemResume.pdf',
  intro:
    'I build cross-platform mobile apps and the release pipelines that ship them. Four years inside a multi-tenant SaaS product — writing native modules when React Native runs out of road, automating App Store and Play Store releases, and taking features from a sales call to production.',
  since: 2021,
}

export const stats = [
  { value: '4+', label: 'Years shipping' },
  { value: '2', label: 'App stores, automated' },
  { value: '90%', label: 'Less manual release time' },
  { value: 'Multi', label: 'Tenant white-label SaaS' },
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
    id: 'nahid',
    index: '01',
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
    stack: ['PHP', 'Laravel', 'MySQL', 'JavaScript', 'Responsive UI'],
    link: { href: 'https://www.nahidgroup.in/', label: 'nahidgroup.in' },
    featured: true,
  },
  {
    id: 'poweroflearning',
    index: '02',
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
    stack: ['PHP', 'Laravel', 'MySQL', 'REST APIs', 'Admin CMS'],
    link: { href: 'https://www.powerofailearning.in/', label: 'powerofailearning.in' },
    featured: true,
  },
  {
    id: 'quick-commerce',
    index: '03',
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
    id: 'whitelabel',
    index: '04',
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
      'Facebook SDK event tracking for ad attribution, and WebView-embedded CMS content.',
    ],
    stack: ['React Native', 'Java', 'Swift', 'Native modules', 'ARKit / ARCore', 'REST APIs'],
    note: 'Hyperzod Technology — flagship product',
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
      'Fastlane integrated with GitHub Actions and Codemagic for repeatable releases.',
      'Automated code signing, versioning and store submission for Play Store and App Store.',
      'Consistent staging and production environments, with release notes and build provenance tracked.',
    ],
    stack: ['Fastlane', 'GitHub Actions', 'Codemagic', 'YAML', 'Firebase', 'Jenkins'],
  },
  {
    id: 'quiz',
    index: '06',
    title: 'English Quiz App',
    kind: 'Consumer mobile app',
    year: 'Shipped',
    summary:
      'A quiz app for English learners with a modern UI, Google sign-in and ad monetisation built in.',
    detail: [
      'React Navigation flows with push notifications driving retention.',
      'Firebase Authentication with Google Sign-In.',
      'Google AdMob integration for monetisation.',
      'Quiz content and user progress served over secure REST APIs.',
    ],
    stack: ['React Native', 'Firebase', 'Google Auth', 'AdMob', 'REST APIs'],
  },
]

export const services = [
  {
    title: 'Cross-platform mobile apps',
    body: 'React Native apps for iOS and Android from one codebase — built to be maintained, not just launched. Native modules in Java and Swift when the platform demands it.',
    tags: ['React Native', 'iOS', 'Android', 'Native modules'],
  },
  {
    title: 'Release automation & DevOps',
    body: 'Fastlane, GitHub Actions and Codemagic pipelines that build, sign and publish to both stores. Store submission stops being a person and becomes a process.',
    tags: ['Fastlane', 'GitHub Actions', 'Codemagic', 'CI/CD'],
  },
  {
    title: 'Web platforms with admin panels',
    body: 'Dynamic websites backed by a control panel your team actually runs — content, catalogues, bookings and enquiries editable without a developer.',
    tags: ['Laravel', 'PHP', 'PostgreSQL', 'MySQL'],
  },
  {
    title: 'White-label & multi-tenant delivery',
    body: 'One product, many branded apps. Per-client theming, configuration and build variants, with a deployment strategy that scales past the first ten tenants.',
    tags: ['Multi-tenant', 'Theming', 'Build variants'],
  },
  {
    title: 'QA & store deployment',
    body: 'End-to-end manual testing, release notes, versioning and the store paperwork — review rejections, provisioning profiles, signing. Handled.',
    tags: ['QA', 'App Store', 'Play Store', 'Release mgmt'],
  },
  {
    title: 'Feature discovery to delivery',
    body: 'Regular work with sales and business teams to turn a requirement into a scoped, shipped feature — including the parts nobody wrote down.',
    tags: ['Scoping', 'Requirements', 'Delivery'],
  },
]

export const skills = [
  { group: 'Languages', items: ['JavaScript', 'Java', 'Swift', 'PHP', 'SQL / PostgreSQL', 'HTML / CSS'] },
  { group: 'Frameworks', items: ['React Native', 'React', 'Node.js', 'Laravel'] },
  { group: 'Automation & CI/CD', items: ['Fastlane', 'GitHub Actions', 'Codemagic', 'Jenkins', 'YAML'] },
  { group: 'Platform & tools', items: ['Git', 'Google Cloud Platform', 'Firebase', 'Xcode', 'Android Studio', 'VS Code'] },
  { group: 'Mobile capabilities', items: ['Native modules', 'Push notifications', 'Deep linking', 'Live Activities', 'AR', 'Geolocation', 'Printer SDKs'] },
]

export const experience = [
  {
    role: 'React Native Developer & Mobility DevOps',
    org: 'Hyperzod Technology Pvt. Ltd.',
    period: '2023 — Present',
    place: 'Lucknow, India',
    points: [
      'Develop and maintain cross-platform mobile applications in React Native.',
      'Built and manage CI/CD pipelines automating build and deployment.',
      'Scaled the deployment strategy for a multi-tenant SaaS architecture supporting white-labeled apps.',
      'Work directly with sales and business teams to gather requirements and lead features from scratch.',
      'Focus on app performance, scalability and maintainability.',
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

export const education = {
  degree: 'B.Tech, Electrical Engineering',
  org: 'AKTU, Lucknow',
  period: 'Aug 2017 — May 2021',
}

export const sections = [
  { id: 'work', num: '01', label: 'Work' },
  { id: 'services', num: '02', label: 'Services' },
  { id: 'stack', num: '03', label: 'Stack' },
  { id: 'experience', num: '04', label: 'Experience' },
  { id: 'contact', num: '05', label: 'Contact' },
]
