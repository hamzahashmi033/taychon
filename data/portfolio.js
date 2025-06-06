import { ShoppingBag, Layout, Search, Users, Globe, Code, Database, Shield, Zap, Award, Target, Sparkles } from 'lucide-react';
import BigBorky from '@/public/assets/imgs/portfolio/BigBorky.png';

export const commonFeatures = [
  {
    icon: "ShoppingBag",
    title: "Shopify",
    description: "Custom Design"
  },
  {
    icon: "Layout",
    title: "Architecture", 
    description: "Scalable"
  },
  {
    icon: "Search",
    title: "SEO",
    description: "Optimized"
  },
  {
    icon: "Users",
    title: "UX/UI",
    description: "Responsive"
  }
];

export const portfolioData = [
  {
    id: "big-borky",
    name: "Big Borky",
    description: "A growing pet eCommerce brand selling cozy dog beds, redesigned and redeveloped to support their growing product line.",
    image: BigBorky,
    category: "ecommerce",
    features: commonFeatures,
    caseStudy: {
      subtitle: "Revolutionizing the Pet Care Industry",
      heroImage: "/assets/imgs/portfolio/BigBorky.png",
      overview: "A comprehensive e-commerce solution for a premium pet care brand, focusing on user experience and scalable architecture.",
      challenge: "Transform a basic online store into a sophisticated e-commerce platform capable of handling complex inventory management, multiple payment gateways, and personalized shopping experiences.",
      solution: "Implemented a modern tech stack with Next.js and Shopify, creating a seamless shopping experience with advanced features like AI-powered recommendations and real-time inventory tracking.",
      results: [
        { metric: "150%", description: "Increase in conversion rate" },
        { metric: "3x", description: "Growth in monthly revenue" },
        { metric: "65%", description: "Reduction in cart abandonment" },
        { metric: "99.9%", description: "System uptime" }
      ],
      features: [
        { icon: "Globe", title: "Global Reach", description: "Multi-currency support with localized content" },
        { icon: "Code", title: "Modern Stack", description: "Next.js, React, Node.js architecture" },
        { icon: "Database", title: "Scalable Backend", description: "Cloud-native infrastructure" },
        { icon: "Shield", title: "Security", description: "Enterprise-grade protection" }
      ],
      techStack: [
        { icon: "Zap", name: "Next.js", description: "Frontend Framework" },
        { icon: "ShoppingBag", name: "Shopify", description: "E-commerce Platform" },
        { icon: "Layout", name: "Tailwind CSS", description: "Styling Framework" },
        { icon: "Database", name: "MongoDB", description: "Database" }
      ],
      screenshots: [
        { url: "/assets/imgs/portfolio/BigBorky.png", caption: "Homepage Design" },
        { url: "/assets/imgs/portfolio/BigBorky.png", caption: "Product Catalog" },
        { url: "/assets/imgs/portfolio/BigBorky.png", caption: "Checkout Flow" }
      ],
      testimonial: {
        quote: "The new platform has transformed our business, enabling us to scale globally while maintaining a personal touch with our customers.",
        author: "John Smith",
        position: "CEO, Big Borky"
      }
    }
  },
  {
    id: "pawsome-pets",
    name: "Pawsome Pets",
    description: "Premium pet accessories marketplace with modern design and seamless user experience.",
    image: BigBorky,
    category: "marketplace",
    features: commonFeatures,
    caseStudy: {
      subtitle: "Transforming Pet Accessories Shopping",
      heroImage: "/assets/imgs/portfolio/BigBorky.png",
      overview: "A modern marketplace for premium pet accessories with focus on user experience.",
      challenge: "Create an intuitive marketplace platform for pet accessories.",
      solution: "Built a scalable marketplace with React and Node.js.",
      results: [
        { metric: "200%", description: "Increase in sales" },
        { metric: "4x", description: "Vendor satisfaction" },
        { metric: "50%", description: "Reduced return rate" },
        { metric: "98%", description: "Customer satisfaction" }
      ],
      features: [
        { icon: "Globe", title: "Global Marketplace", description: "Multi-vendor support" },
        { icon: "Code", title: "Modern Stack", description: "React, Node.js architecture" },
        { icon: "Database", title: "Cloud Infrastructure", description: "AWS powered" },
        { icon: "Shield", title: "Security", description: "Enterprise security" }
      ],
      techStack: [
        { icon: "Zap", name: "React", description: "Frontend Framework" },
        { icon: "Code", name: "Node.js", description: "Backend Platform" },
        { icon: "Layout", name: "Material UI", description: "UI Framework" },
        { icon: "Database", name: "PostgreSQL", description: "Database" }
      ],
      screenshots: [
        { url: "/assets/imgs/portfolio/BigBorky.png", caption: "Marketplace" },
        { url: "/assets/imgs/portfolio/BigBorky.png", caption: "Vendor Dashboard" },
        { url: "/assets/imgs/portfolio/BigBorky.png", caption: "Shopping Experience" }
      ],
      testimonial: {
        quote: "The marketplace has transformed how we connect pet owners with quality accessories.",
        author: "Sarah Johnson",
        position: "Founder, Pawsome Pets"
      }
    }
  }
];

// Helper function to get case study by ID
export const getCaseStudyById = (id) => {
  const project = portfolioData.find(item => item.id === id);
  return project ? project.caseStudy : null;
};

// Get all portfolio items
export const getPortfolioItems = () => {
  return portfolioData;
};

// Helper function to get icon component
export const iconMap = {
  ShoppingBag,
  Layout,
  Search,
  Users,
  Globe,
  Code,
  Database,
  Shield,
  Zap,
  Award,
  Target,
  Sparkles
}; 