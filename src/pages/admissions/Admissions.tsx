import { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

// /admisiones no tiene contenido propio: redirige a la modalidad indicada en el hash
// (#main=Modalidad Virtual&section=Costos) o a presencial por defecto.
function Admissions() {
  const navigate = useNavigate();
  const { hash } = useLocation();

  useEffect(() => {
    const params = new URLSearchParams(decodeURIComponent(hash).replace(/^#/, ""));
    const section = params.get("section");
    switch (params.get("main")) {
      case "Modalidad Presencial":
        navigate(`/admisiones/presencial#${section}`);
        break;
      case "Modalidad Virtual":
        navigate(`/admisiones/virtual#${section}`);
        break;
      default:
        navigate("/admisiones/presencial#");
        break;
    }
  }, [hash, navigate]);

  return null;
}

export default Admissions;
