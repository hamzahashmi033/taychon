import React from 'react';
import { useParams } from 'next/navigation';
import Image from 'next/image';
import { ShoppingBag, Layout, Search, Users, Globe, Code, Database, Shield, Zap, Award, Target, Sparkles } from 'lucide-react';
import Navbar from '@/components/common/Navbar';
import Footer from '@/components/common/Footer';
import Lines from '@/components/common/Lines';
import Cursor from '@/components/common/cusor';
import generateStylesheetObject from '@/common/generateStylesheetsObject';
import CaseStudy from './CaseStudy';

export const metadata = {
  title: 'Case Study | Portfolio',
  icons: {
    icon: "/assets/imgs/logo/logo.ico",
    shortcut: "/assets/imgs/favicon.ico",
    other: generateStylesheetObject([
      '/assets/css/plugins.css',
      '/assets/css/style.css',
      'https://fonts.googleapis.com/css?family=Poppins:100,200,300,400,500,600,700,800,900&display=swap',
      'https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@200;300;400;500;600;700&display=swap',
    ]),
  },
};

export default function Page() {
  return <CaseStudy />;
} 