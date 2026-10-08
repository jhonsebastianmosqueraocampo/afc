import { Box, Typography } from "@mui/material";
import type { ReactNode } from "react";

const FORM_URL = "https://plataforma.afc.education/inscripcion";

const linkSx = { color: "#a7192d", textDecoration: "underline", fontFamily: "inherit", fontWeight: "inherit" };

const steps: ReactNode[] = [
  <>
    Diligencia el formulario de inscripción{" "}
    <Box component="a" href={FORM_URL} target="_blank" rel="noopener noreferrer" sx={linkSx}>
      aquí
    </Box>{" "}
    y realiza el pago al final del mismo
  </>,
  <>
    Enviar el comprobante de pago a{" "}
    <Box component="a" href="mailto:Contabilidadafc@avivamiento.com" sx={linkSx}>
      Contabilidadafc@avivamiento.com
    </Box>{" "}
    con los siguientes datos: Nombre completo, celular, correo, dirección, país, ciudad, Tipo de identificación y
    número.
  </>,
  <>El aspirante deberá notificar de su inscripción al WhatsApp: +573194187615.</>,
  <>
    El aspirante deberá entrar a la plataforma (link enviado a su correo) para iniciar su proceso de admisión. Allí
    deberá cargar la siguiente documentación
    <br />| Formulario de inscripción
    <br />| Recomendaciones, documento de identificación y certificados de estudio
    <br />| Tres textos escritos por el aspirante con las indicaciones dadas en la plataforma
  </>,
  <>Realizar la prueba de conocimiento básico bíblico en el tiempo establecido</>,
  <>
    Programar su entrevista. Recibirá la confirmación vía WhatsApp. *Recordar que el medio de comunicación principal es
    WhatsApp.
  </>,
];

interface RegistrationStepsProps {
  titleId?: string;
  titleSize?: string;
}

// Recuadro "Paso a paso del proceso de inscripción" (igual en presencial y virtual).
// Todos los pasos usan SourceSerif4: etiqueta en rojo/negrita y texto en negro.
function RegistrationSteps({ titleId, titleSize = "20px" }: RegistrationStepsProps) {
  return (
    <Box sx={{ borderRadius: "23px 0px 23px 0px", border: "1px solid #a7192d", width: "100%", height: "auto", pb: 2 }}>
      <Typography
        id={titleId}
        sx={{
          p: 1,
          zIndex: 1,
          fontSize: titleSize,
          fontFamily: "Inter",
          fontWeight: 500,
          textAlign: "left",
          color: "#a61a2d",
          textTransform: "uppercase",
        }}
      >
        Paso a paso del proceso de inscripción:
      </Typography>
      <Box
        display="flex"
        flexDirection="column"
        gap={1}
        sx={{ p: 1, boxSizing: "border-box", width: "100%", height: "400px", overflowY: "auto" }}
      >
        {steps.map((step, index) => (
          <Typography key={index} sx={{ color: "#a7192d", fontFamily: "SourceSerif4", fontWeight: 700 }}>
            Paso {index + 1}:{" "}
            <Box component="span" sx={{ color: "#090a0a", display: "inline", fontWeight: 400 }}>
              {step}
            </Box>
          </Typography>
        ))}
      </Box>
    </Box>
  );
}

export default RegistrationSteps;
