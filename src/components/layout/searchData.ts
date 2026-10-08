// Secciones principales que aparecen en el buscador del header.
// `to` usa el id de la sección como hash; las páginas hacen scroll hasta él.
export interface SearchEntry {
  title: string;
  page: string;
  to: string;
  keywords?: string;
}

export const searchEntries: SearchEntry[] = [
  { title: "Inicio", page: "Home", to: "/", keywords: "home escuela del espiritu video" },

  { title: "Misión", page: "Sobre nosotros", to: "/sobre-nosotros#Misión", keywords: "quienes somos" },
  { title: "Visión", page: "Sobre nosotros", to: "/sobre-nosotros#Visión" },
  { title: "Valores y pilares", page: "Sobre nosotros", to: "/sobre-nosotros#Valores", keywords: "humildad rendicion fe" },
  { title: "Confesión de fe", page: "Sobre nosotros", to: "/sobre-nosotros#En qué creemos", keywords: "en que creemos" },
  { title: "Nuestra historia", page: "Sobre nosotros", to: "/sobre-nosotros#Historia" },
  { title: "Equipo docente", page: "Sobre nosotros", to: "/sobre-nosotros#Equipo Docente", keywords: "pastores profesores maestros" },
  { title: "Testimonios", page: "Sobre nosotros", to: "/sobre-nosotros#Testimonios", keywords: "egresados" },
  { title: "Conoce el Avivamiento", page: "Sobre nosotros", to: "/sobre-nosotros#Conoce el Avivamiento", keywords: "iglesia" },

  { title: "Énfasis académico", page: "Oferta académica", to: "/oferta-academica#Énfasis Académico", keywords: "programa asignaturas teologia consejeria" },
  { title: "Perfil del egresado", page: "Oferta académica", to: "/oferta-academica#Perfil de Egresado", keywords: "avivadores" },
  { title: "Modalidades", page: "Oferta académica", to: "/oferta-academica#Modalidades" },

  { title: "Metodología presencial", page: "Modalidad presencial", to: "/oferta-academica/modalidad-presencial#Metodología", keywords: "horario bimestres plan de curso pdf" },
  { title: "Costos presencial", page: "Modalidad presencial", to: "/oferta-academica/modalidad-presencial#Costos", keywords: "precio pension matricula valor" },
  { title: "Metodología virtual", page: "Modalidad virtual", to: "/oferta-academica/modalidad-virtual#Metodología", keywords: "periodos semanas plan de curso pdf" },
  { title: "Costos virtual", page: "Modalidad virtual", to: "/oferta-academica/modalidad-virtual#Costos", keywords: "precio dolares usd cop valor" },

  { title: "Proceso de inscripción presencial", page: "Admisiones presencial", to: "/admisiones/presencial#Tutorial Proceso Inscripción", keywords: "tutorial paso a paso video" },
  { title: "Requisitos presencial", page: "Admisiones presencial", to: "/admisiones/presencial#Requisitos de Admisión" },
  { title: "Formulario de inscripción presencial", page: "Admisiones presencial", to: "/admisiones/presencial#Formulario de Inscripción", keywords: "inscribirme inscribete" },
  { title: "Preguntas frecuentes presencial", page: "Admisiones presencial", to: "/admisiones/presencial#Preguntas Frecuentes", keywords: "faq dudas" },

  { title: "Proceso de inscripción virtual", page: "Admisiones virtual", to: "/admisiones/virtual#Tutorial Proceso Inscripción", keywords: "tutorial paso a paso video" },
  { title: "Requisitos virtual", page: "Admisiones virtual", to: "/admisiones/virtual#Requisitos de Admisión", keywords: "ovejitas otra congregacion" },
  { title: "Formulario de inscripción virtual", page: "Admisiones virtual", to: "/admisiones/virtual#Formulario de Inscripción", keywords: "inscribirme inscribete" },
  { title: "Preguntas frecuentes virtual", page: "Admisiones virtual", to: "/admisiones/virtual#Preguntas Frecuentes", keywords: "faq dudas creditos horas" },
];

// Minúsculas y sin tildes, para que "metodologia" encuentre "Metodología".
export function normalize(text: string) {
  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "");
}

export function searchSections(query: string) {
  const words = normalize(query).split(/\s+/).filter(Boolean);
  if (!words.length) return searchEntries;
  return searchEntries.filter((entry) => {
    const haystack = normalize(`${entry.title} ${entry.page} ${entry.keywords ?? ""}`);
    return words.every((word) => haystack.includes(word));
  });
}
