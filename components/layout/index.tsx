import Footer from "./footer";
import Navbar from "./navbar";

export default function Container({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className='main-font w-screen overflow-x-hidden min-h-screen'>
      <Navbar />
      <div className='flex flex-col justify-between min-h-screen bg-background'>
        <div>{children}</div>
        {/* <LandingFooter /> */}
        <Footer />
      </div>
    </div>
  )
};