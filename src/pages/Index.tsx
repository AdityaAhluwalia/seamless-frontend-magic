
import React from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import IntroductionSection from '@/components/IntroductionSection';
import AboutSection from '@/components/AboutSection';
import ObjectivesSection from '@/components/ObjectivesSection';
import MarketingStrategySection from '@/components/MarketingStrategySection';
import CommunityStatsSection from '@/components/CommunityStatsSection';
import HighlightsSection from '@/components/HighlightsSection';
import PartnershipsSection from '@/components/PartnershipsSection';
import ConversationsSection from '@/components/ConversationsSection';
import WorkingTogetherSection from '@/components/WorkingTogetherSection';
import CaseStudiesSection from '@/components/CaseStudiesSection';
import StatsSection from '@/components/StatsSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <HeroSection />
      <IntroductionSection />
      <AboutSection />
      <ObjectivesSection />
      <MarketingStrategySection />
      <CommunityStatsSection />
      <HighlightsSection />
      <PartnershipsSection />
      <ConversationsSection />
      <WorkingTogetherSection />
      <CaseStudiesSection />
      <StatsSection />
      <Footer />
    </div>
  );
};

export default Index;
