import { useNavigate } from "react-router-dom";
import NotFoundActions from "../components/notFoundPage_components/NotFoundActions";
import NotFoundBackground from "../components/notFoundPage_components/NotFoundBackground";
import NotFoundBrand from "../components/notFoundPage_components/NotFoundBrand";
import NotFoundContent from "../components/notFoundPage_components/NotFoundContent";
import NotFoundFace from "../components/notFoundPage_components/NotFoundFace";

export default function NotFoundPage() {
  const navigate = useNavigate();

  return (
    <div className="relative min-h-screen overflow-hidden">
      <NotFoundBackground />

      <main className="relative mx-auto flex min-h-screen w-full items-center justify-center p-6 backdrop-blur-sm sm:p-12">
        <section className="w-full text-center">
          <NotFoundBrand />
          <NotFoundFace />
          <NotFoundContent />
          <NotFoundActions onBack={() => navigate(-1)} onHome={() => navigate("/")} />
        </section>
      </main>
    </div>
  );
}
