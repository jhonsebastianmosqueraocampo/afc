import { useEffect, type MouseEvent } from "react";
import { useLocation, useNavigate } from "react-router-dom";

function scrollToId(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}

// Las secciones de cada página usan su título como id (ej. "#Formulario de Inscripción").
// Al cambiar el hash de la URL se hace scroll suave hasta esa sección.
export function useScrollToHash() {
  const { hash } = useLocation();
  useEffect(() => {
    if (hash) scrollToId(decodeURIComponent(hash).replace(/^#/, ""));
  }, [hash]);
}

// onClick para los <Link> de los breadcrumbs: navega con el router (sin recargar la página)
// o, si el enlace apunta a la página actual, hace scroll a la sección.
export function useBreadcrumbClick() {
  const navigate = useNavigate();
  const location = useLocation();

  return (event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    const href = event.currentTarget.getAttribute("href");
    if (!href) return;
    if (!href.includes("#")) {
      navigate(href);
      return;
    }
    const [path, target] = href.split("#");
    if (path && path !== location.pathname) {
      navigate(href);
      return;
    }
    scrollToId(target || decodeURIComponent(location.hash).replace(/^#/, ""));
  };
}
