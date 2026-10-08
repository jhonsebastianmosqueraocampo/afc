// Un subitem es una sección de la página (string) o un grupo con sus propias secciones.
export interface MenuGroup {
  label: string;
  children: string[];
  /** Enlace externo: si el grupo no tiene children se abre en otra pestaña. */
  to?: string;
}
export type MenuSubitem = string | MenuGroup;
export interface MenuItem {
  title: string;
  to: string;
  subitems: MenuSubitem[];
}
const menuItems: MenuItem[] = [
  {
    title: "SOBRE NOSOTROS",
    to: "/sobre-nosotros",
    subitems: [
      "Misión",
      "Visión",
      "Valores",
      "En qué creemos",
      "Historia",
      "Equipo Docente",
      "Testimonios",
      "Conoce el Avivamiento",
    ],
  },
  {
    title: "OFERTA ACADÉMICA",
    to: "/oferta-academica",
    subitems: [
      "Énfasis Académico",
      "Perfil de Egresado",
      "Equipo Docente",
      {
        label: "Modalidad Presencial",
        children: ["Metodología", "Plan de Estudios", "Costos"],
      },
      {
        label: "Modalidad Virtual",
        children: ["Metodología", "Plan de Estudios", "Costos"],
      },
    ],
  },
  {
    title: "ADMISIONES",
    to: "/admisiones",
    subitems: [
      {
        label: "Modalidad Presencial",
        children: [
          "Tutorial Proceso Inscripción",
          "Requisitos de Admisión",
          "Formulario de Inscripción",
          "Costos",
          "Preguntas Frecuentes",
        ],
      },
      {
        label: "Modalidad Virtual",
        children: [
          "Tutorial Proceso Inscripción",
          "Requisitos de Admisión",
          "Formulario de Inscripción",
          "Costos",
          "Preguntas Frecuentes",
        ],
      },
    ],
  },
  {
    title: "INICIAR SESIÓN",
    to: "/",
    subitems: [
      {
        label: "Modalidad Presencial",
        children: [],
        to: "https://seminariopresencial-avivamiento.com/login/index.php",
      },
      {
        label: "Modalidad Virtual",
        children: [],
        to: "https://web.afc.education/login/index.php ",
      },
    ],
  },
];
const footerLinks: MenuItem[] = [
  {
    title: "Sobre Nosotros",
    to: "/sobre-nosotros",
    subitems: [
      "Misión",
      "Visión",
      "Valores",
      "En qué creemos",
      "Historia",
      "Equipo Docente",
      "Testimonios",
      "Conoce el Avivamiento",
    ],
  },
  {
    title: "Oferta Académica",
    to: "/oferta-academica",
    subitems: [
      "Énfasis Académico",
      "Perfil de Egresado",
      "Equipo Docente",
      {
        label: "Modalidad Presencial",
        children: ["Metodología", "Plan de Estudios", "Costos"],
      },
      {
        label: "Modalidad Virtual",
        children: ["Metodología", "Plan de Estudios", "Costos"],
      },
    ],
  },
  {
    title: "Admisiones",
    to: "/admisiones",
    subitems: [],
  },
  {
    title: "Modalidad Presencial",
    to: "/admisiones/presencial",
    subitems: [
      "Tutorial Proceso Inscripción",
      "Requisitos de Admisión",
      "Formulario de Inscripción",
      "Costos",
      "Preguntas Frecuentes",
    ],
  },
  {
    title: "Modalidad Virtual",
    to: "/admisiones/virtual",
    subitems: [
      "Tutorial Proceso Inscripción",
      "Requisitos de Admisión",
      "Formulario de Inscripción",
      "Costos",
      "Preguntas Frecuentes",
    ],
  },
];
const quickLinks: MenuItem[] = [
  {
    title: "Preguntas Frecuentes",
    to: "/admisiones",
    subitems: [
      {
        label: "Modalidad Presencial",
        children: [],
      },
      {
        label: "Modalidad Virtual",
        children: [],
      },
    ],
  },
  {
    title: "Formulario de Inscripción",
    to: "/admisiones",
    subitems: [
      {
        label: "Modalidad Presencial",
        children: [],
      },
      {
        label: "Modalidad Virtual",
        children: [],
      },
    ],
  },
  {
    title: "Avivamiento.com",
    to: "https://avivamiento.com",
    subitems: [],
  },
];
export { menuItems, footerLinks, quickLinks };
