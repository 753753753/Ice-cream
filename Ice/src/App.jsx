import AboutSection from "./component/Aboutsection/AboutSection";
import AnnouncementBar from "./component/Header/AnnouncementBar";
import Navbar from "./component/Header/Navbar";
import HeroSection from "./component/Herosection/HeroSection"
import DocumentSection from "./component/DocumentSection/DocumentSection";
import CategorySection from "./component/CategorySection/CategorySection";
import EventSection from "./component/EventSection/EventSection";
import SubscribeSection from "./component/SubscribeSection/SubscribeSection";
import FooterSection from "./component/FooterSection/FooterSection";

export default function App() {
  return (
    <div>
      <AnnouncementBar />
      <Navbar />
      <HeroSection />
      <AboutSection/>
      <DocumentSection/>
      <CategorySection/>
      <EventSection/>
      <SubscribeSection/>
      <FooterSection/>
      {/* Rest of your app */}
    </div>
  );
}
