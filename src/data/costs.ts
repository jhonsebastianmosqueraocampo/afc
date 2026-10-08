// Costos vigentes. Se usan en Oferta Académica y en Admisiones; actualizar solo aquí.

export const presencialCosts = [
  "Inscripción: $80.000 (exento para egresados del Gimnasio Campestre Cristiano)",
  "Matrícula anual: $300.000",
  "Papelería anual: $60.000",
  "Carné estudiantil: $20.000",
  "Pensión bimestral: $740.000",
];

export const virtualInternationalCosts = ["Inscripción: 30 USD", "Periodo: 480 USD"];

export const virtualNationalCosts = ["Inscripción: 80.000 COP", "Periodo: 1’200.000 COP"];

export const virtualCostsNote =
  "Nota aclaratoria: si algún estudiante internacional solicita pagar en pesos, se realizará la conversión del valor en dólares del costo internacional a pesos según la TRM del día.";

// PDFs del plan de curso (versión horizontal para computador y vertical para celular).
export const coursePlanPdf = {
  presencial: {
    desktop: "/assets/files/PLANDECURSODESKTOPPRESENCIAL.pdf",
    mobile: "/assets/files/PLANDECURSOMOBLEPRESENCIAL.pdf",
  },
  virtual: {
    desktop: "/assets/files/PLANDECURSOVIRTUALDESKTOP.pdf",
    mobile: "/assets/files/PLANDECURSOVIRTUALMOBILE.pdf",
  },
};
