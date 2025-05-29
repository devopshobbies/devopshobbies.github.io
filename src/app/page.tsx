import { BellIcon, CalendarIcon, FileTextIcon, GlobeIcon, InputIcon } from '@radix-ui/react-icons'
import { FaMobileAlt, FaNodeJs, FaPython, FaReact, FaServer, FaVuejs } from 'react-icons/fa'

import { BentoCard, BentoGrid } from '@/components/magicui/bento-grid'
import RepositorySlider from '@/components/ui/repository-slider'

export default function Home() {
  const repositories = [
    {
      id: '1',
      name: 'React Dashboard',
      author: 'by devuser',
      description: 'A beautiful admin dashboard built with React, featuring multiple widgets, charts, and a responsive layout.',
      stars: 1200,
      forks: 45,
      watchers: 5700,
      language: 'JavaScript',
      languageColor: '#61DAFB',
      icon: <FaReact />,
      updated: 'Updated 2 days ago',
    },
    {
      id: '2',
      name: 'AI Chatbot',
      author: 'by mlengineer',
      description: 'An intelligent chatbot using natural language processing and machine learning to provide human-like responses.',
      stars: 3400,
      forks: 128,
      watchers: 12500,
      language: 'Python',
      languageColor: '#3572A5',
      icon: <FaPython />,
      updated: 'Updated 1 week ago',
    },
    {
      id: '3',
      name: 'Vue E-commerce',
      author: 'by frontenddev',
      description: 'Complete e-commerce solution with Vue.js, featuring product listings, cart functionality, and secure checkout.',
      stars: 876,
      forks: 32,
      watchers: 4200,
      language: 'Vue',
      languageColor: '#41B883',
      icon: <FaVuejs />,
      updated: 'Updated 3 days ago',
    },
    {
      id: '4',
      name: 'API Gateway',
      author: 'by backenddev',
      description: 'A high-performance API gateway built with Node.js and Express, featuring rate limiting, authentication, and caching.',
      stars: 2100,
      forks: 87,
      watchers: 8900,
      language: 'Node.js',
      languageColor: '#339933',
      icon: <FaNodeJs />,
      updated: 'Updated 5 days ago',
    },
    {
      id: '5',
      name: 'Flutter App',
      author: 'by mobiledev',
      description: 'A cross-platform mobile application with Flutter featuring beautiful UI components and smooth animations.',
      stars: 1500,
      forks: 56,
      watchers: 6300,
      language: 'Dart',
      languageColor: '#02569B',
      icon: <FaMobileAlt />,
      updated: 'Updated yesterday',
    },
    {
      id: '6',
      name: 'Microservices',
      author: 'by architect',
      description: 'A complete microservices architecture with Docker, Kubernetes, and service discovery implemented.',
      stars: 3800,
      forks: 142,
      watchers: 15200,
      language: 'Go',
      languageColor: '#007396',
      icon: <FaServer />,
      updated: 'Updated 2 weeks ago',
    },
  ]
  const features = [
    {
      Icon: FileTextIcon,
      name: 'Save your files',
      description: 'We automatically save your files as you type.',
      href: '/',
      cta: 'Learn more',
      background: <img className="absolute -right-20 -top-20 opacity-60" />,
      className: 'lg:row-start-1 lg:row-end-4 lg:col-start-2 lg:col-end-3',
    },
    {
      Icon: InputIcon,
      name: 'Full text search',
      description: 'Search through all your files in one place.',
      href: '/',
      cta: 'Learn more',
      background: <img className="absolute -right-20 -top-20 opacity-60" />,
      className: 'lg:col-start-1 lg:col-end-2 lg:row-start-1 lg:row-end-3',
    },
    {
      Icon: GlobeIcon,
      name: 'Multilingual',
      description: 'Supports 100+ languages and counting.',
      href: '/',
      cta: 'Learn more',
      background: <img className="absolute -right-20 -top-20 opacity-60" />,
      className: 'lg:col-start-1 lg:col-end-2 lg:row-start-3 lg:row-end-4',
    },
    {
      Icon: CalendarIcon,
      name: 'Calendar',
      description: 'Use the calendar to filter your files by date.',
      href: '/',
      cta: 'Learn more',
      background: <img className="absolute -right-20 -top-20 opacity-60" />,
      className: 'lg:col-start-3 lg:col-end-3 lg:row-start-1 lg:row-end-2',
    },
    {
      Icon: BellIcon,
      name: 'Notifications',
      description:
        'Get notified when someone shares a file or mentions you in a comment.',
      href: '/',
      cta: 'Learn more',
      background: <img className="absolute -right-20 -top-20 opacity-60" />,
      className: 'lg:col-start-3 lg:col-end-3 lg:row-start-2 lg:row-end-4',
    },
  ]
  return (
    <div id="content">
      <BentoGrid className="lg:grid-rows-3">
        {features.map((feature) => (
          <BentoCard key={feature.name} {...feature} />
        ))}
      </BentoGrid>
      <RepositorySlider
        repositories={repositories}
        cardWidth={320}
        autoScrollInterval={5000}
        showNavigationDots={true}
        showNavigationArrows={true}
      />
    </div>
  )
}
