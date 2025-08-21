'use client';

import './globals.css';
import HeroComp from '@/components/home/HeroComp';
import AboutComp from '@/components/home/AboutComp';
import CategoryComp from '@/components/home/CategoryComp';
import AfterEventComp from '@/components/home/AfterEventComp';
import ContactComp from '@/components/home/ContactComp';
import NewsletterComp from '@/components/home/NewsletterComp'
import LogoComp from '@/components/home/LogoComp';
// import NewsComp from '@/components/home/NewsComp';

export default function HomePage() {
  return (
    <>
      <br />
      <br />
      <br />
      <HeroComp/>
      <AboutComp/>
      <CategoryComp/>
      <AfterEventComp/>
      <ContactComp/>
      <LogoComp/>
      {/* <NewsComp></NewsComp> */}
      <NewsletterComp/>
    </>
  );
}
