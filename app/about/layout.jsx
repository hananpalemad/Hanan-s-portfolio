import Footer from "@/components/Footer";

export const metadata = {
  title: "Hanan's | About"
};
export default function Layout({ children }) {
  return (
    <>
      {children}
      <Footer />
    </>
  );
}
