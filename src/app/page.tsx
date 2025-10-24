"use client"
import { ThemeProvider } from "@/providers/ThemeProvider";
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import HeroSplit from '@/components/sections/hero/HeroSplit';
import TextSplitAbout from '@/components/sections/about/TextSplitAbout';
import FeatureCardThree from '@/components/sections/feature/featureCardThree/FeatureCardThree';
import MetricCardOne from '@/components/sections/metrics/MetricCardOne';
import TeamCardTwo from '@/components/sections/team/TeamCardTwo';
import TestimonialCardOne from '@/components/sections/testimonial/TestimonialCardOne';
import ContactSplitForm from '@/components/sections/contact/ContactSplitForm';
import FooterBase from '@/components/sections/footer/FooterBase';
import { Award, Target, Trophy, GraduationCap, Users, MessageCircle } from "lucide-react";

export default function Home() {
  return (
    <ThemeProvider
      defaultButtonVariant="shift-hover"
      defaultTextAnimation="reveal-blur"
      borderRadius="rounded"
    >
      <div id="nav" data-section="nav">
        <NavbarStyleApple
          navItems={[
            { name: "Home", id: "hero" },
            { name: "About", id: "about" },
            { name: "Team", id: "team" },
            { name: "Events", id: "feature" },
            { name: "Results", id: "metric" },
            { name: "Contact", id: "contact" }
          ]}
          brandName="TrackField Pro"
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroSplit
          title="Elite Track & Field Training"
          description="Develop your athletic potential with professional coaching, state-of-the-art facilities, and proven training methods. Join champions who excel on and off the track."
          tag="Performance Excellence"
          tagIcon={Award}
          buttons={[
            { text: "Join Our Program", href: "contact" },
            { text: "View Results", href: "metric" }
          ]}
          imageSrc="https://images.pexels.com/photos/163444/sport-treadmill-tor-route-163444.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          imageAlt="Professional track and field stadium with running lanes"
          imagePosition="right"
        />
      </div>

      <div id="about" data-section="about">
        <TextSplitAbout
          title="About TrackField Pro"
          description={[
            "We are dedicated to developing world-class track and field athletes through innovative training methods, expert coaching, and comprehensive support systems.",
            "Our program has produced national champions, Olympic qualifiers, and collegiate scholarship recipients who continue to excel at the highest levels of competition."
          ]}
          buttons={[
            { text: "Our Story", href: "team" }
          ]}
          showBorder={true}
        />
      </div>

      <div id="feature" data-section="feature">
        <FeatureCardThree
          title="Training Programs"
          description="Comprehensive athletic development across all track and field disciplines with specialized coaching for each event category."
          tag="Excellence"
          tagIcon={Target}
          features={[
            {
              id: "01",
              title: "Sprint Events",
              description: "Professional coaching for 100m, 200m, 400m sprints with focus on technique, speed development, and race strategy.",
              imageSrc: "https://images.pexels.com/photos/12698200/pexels-photo-12698200.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Sprint training on professional track"
            },
            {
              id: "02",
              title: "Field Events",
              description: "Expert instruction in jumping and throwing events including high jump, long jump, pole vault, shot put, and discus.",
              imageSrc: "https://images.pexels.com/photos/2310500/pexels-photo-2310500.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "High jump training session"
            },
            {
              id: "03",
              title: "Distance Training",
              description: "Endurance coaching for 800m through marathon distances with personalized training plans and nutrition guidance.",
              imageSrc: "https://images.pexels.com/photos/8084812/pexels-photo-8084812.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Distance running training group"
            }
          ]}
          layout="default"
        />
      </div>

      <div id="metric" data-section="metric">
        <MetricCardOne
          title="Championship Results"
          description="Our athletes consistently achieve excellence at regional, national, and international competitions."
          tag="Achievements"
          tagIcon={Trophy}
          metrics={[
            {
              id: "1",
              value: "47",
              title: "State Titles",
              description: "Individual and team championships won by our athletes",
              icon: Trophy
            },
            {
              id: "2",
              value: "150+",
              title: "College Scholarships",
              description: "Full and partial scholarships earned by program graduates",
              icon: GraduationCap
            },
            {
              id: "3",
              value: "12",
              title: "National Records",
              description: "Age group and open records set by our athletes",
              icon: Award
            }
          ]}
        />
      </div>

      <div id="team" data-section="team">
        <TeamCardTwo
          title="Coaching Staff"
          description="Meet our experienced team of coaches who bring decades of expertise in developing championship athletes."
          tag="Leadership"
          tagIcon={Users}
          members={[
            {
              id: "1",
              name: "Coach Sarah Martinez",
              role: "Head Coach & Director",
              description: "Former Olympic sprinter with 15 years coaching experience. Specializes in speed development and race strategy for elite athletes.",
              imageSrc: "https://images.pexels.com/photos/7207556/pexels-photo-7207556.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Coach Sarah Martinez",
              socialLinks: [
                { icon: "Mail", url: "mailto:sarah@trackfieldpro.com" },
                { icon: "Linkedin", url: "https://linkedin.com/in/sarahmartinez" }
              ]
            },
            {
              id: "2",
              name: "Emma Thompson",
              role: "Distance Coach",
              description: "NCAA Division I All-American in cross country. Expertise in endurance training, nutrition planning, and mental preparation.",
              imageSrc: "https://images.pexels.com/photos/8455354/pexels-photo-8455354.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Emma Thompson",
              socialLinks: [
                { icon: "Mail", url: "mailto:emma@trackfieldpro.com" },
                { icon: "Instagram", url: "https://instagram.com/emmathompsonrunning" }
              ]
            },
            {
              id: "3",
              name: "Marcus Johnson",
              role: "Field Events Coach",
              description: "Former professional shot putter and discus thrower. Specialized training in throwing mechanics and strength conditioning.",
              imageSrc: "https://images.pexels.com/photos/3764011/pexels-photo-3764011.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Marcus Johnson",
              socialLinks: [
                { icon: "Mail", url: "mailto:marcus@trackfieldpro.com" },
                { icon: "Twitter", url: "https://twitter.com/marcusfieldevents" }
              ]
            },
            {
              id: "4",
              name: "Alex Rodriguez",
              role: "Assistant Coach",
              description: "Rising coaching talent with expertise in youth development and technique refinement across multiple track events.",
              imageSrc: "https://images.pexels.com/photos/17484571/pexels-photo-17484571.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Alex Rodriguez",
              socialLinks: [
                { icon: "Mail", url: "mailto:alex@trackfieldpro.com" },
                { icon: "Linkedin", url: "https://linkedin.com/in/alexrodriguezcoach" }
              ]
            }
          ]}
        />
      </div>

      <div id="testimonial" data-section="testimonial">
        <TestimonialCardOne
          title="Success Stories"
          description="Hear from athletes who have achieved their personal best and beyond through our training programs."
          tag="Reviews"
          tagIcon={MessageCircle}
          testimonials={[
            {
              id: "1",
              name: "Jessica Chen",
              role: "State Champion",
              company: "Division I Scholarship Recipient",
              rating: 5,
              imageSrc: "https://images.pexels.com/photos/1089164/pexels-photo-1089164.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Jessica Chen portrait"
            },
            {
              id: "2",
              name: "Coach Robert Williams",
              role: "High School Coach",
              company: "Regional Athletic Director",
              rating: 5,
              imageSrc: "https://images.pexels.com/photos/7447247/pexels-photo-7447247.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Coach Robert Williams portrait"
            },
            {
              id: "3",
              name: "Michael Torres",
              role: "National Qualifier",
              company: "Olympic Development Program",
              rating: 5,
              imageSrc: "https://images.pexels.com/photos/7005247/pexels-photo-7005247.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Michael Torres portrait"
            },
            {
              id: "4",
              name: "Amanda Davis",
              role: "Record Holder",
              company: "Professional Athlete",
              rating: 5,
              imageSrc: "https://images.pexels.com/photos/6620546/pexels-photo-6620546.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Amanda Davis portrait"
            }
          ]}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactSplitForm
          title="Ready to Start Training?"
          description="Join our elite track and field program and take your athletic performance to the next level. Contact us today to schedule a consultation."
          inputs={[
            { name: "name", type: "text", placeholder: "Full Name", required: true },
            { name: "email", type: "email", placeholder: "Email Address", required: true },
            { name: "age", type: "text", placeholder: "Age", required: true },
            { name: "events", type: "text", placeholder: "Event(s) of Interest", required: true }
          ]}
          textarea={{
            name: "message",
            placeholder: "Tell us about your athletic background and goals...",
            rows: 5,
            required: true
          }}
          buttonText="Submit Application"
          imageSrc="https://images.pexels.com/photos/163444/sport-treadmill-tor-route-163444.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          imageAlt="Track and field facility"
          mediaPosition="right"
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterBase
          columns={[
            {
              title: "Programs",
              items: [
                { label: "Sprint Training", href: "feature" },
                { label: "Distance Training", href: "feature" },
                { label: "Field Events", href: "feature" },
                { label: "Youth Development", href: "contact" }
              ]
            },
            {
              title: "About",
              items: [
                { label: "Our Story", href: "about" },
                { label: "Coaching Staff", href: "team" },
                { label: "Facilities", href: "contact" },
                { label: "Success Stories", href: "testimonial" }
              ]
            },
            {
              title: "Results",
              items: [
                { label: "Championships", href: "metric" },
                { label: "Records", href: "metric" },
                { label: "Scholarships", href: "metric" },
                { label: "Alumni", href: "testimonial" }
              ]
            },
            {
              title: "Contact",
              items: [
                { label: "Get Started", href: "contact" },
                { label: "Schedule Visit", href: "contact" },
                { label: "Camp Info", href: "contact" }
              ]
            }
          ]}
          copyrightText="© 2025 TrackField Pro. All rights reserved."
        />
      </div>
    </ThemeProvider>
  );
}