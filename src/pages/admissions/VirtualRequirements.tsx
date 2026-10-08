import { useState } from "react";
import { Box, ButtonBase, Typography, styled } from "@mui/material";

interface RequirementSection {
  title: string;
  items: string[];
}

const techRequirements: RequirementSection = {
  title: "Requisitos de formación tecnológica:",
  items: [
    "Contar con un computador.",
    "Tener acceso a Internet mínimo de 10 Megas para tener un óptimo rendimiento de la plataforma.",
    "Tener un navegador, preferiblemente: Chrome, Firefox o Safari.",
    "Contar con una diadema o audífonos que incluya micrófono.",
  ],
};

const requirementGroups: { label: string; sections: RequirementSection[] }[] = [
  {
    label: "Ovejitas del Avivamiento",
    sections: [
      { title: "Requisitos básicos:", items: ["Ser bachiller y contar con el diploma o acta de grado."] },
      {
        title: "Requisitos de formación cristiana:",
        items: [
          "Ser miembro bautizado y activo del Avivamiento.",
          "Haber cursado hasta una especialización: Consejería, Adoración y/o Intercesión.",
          "Estar activo en el servicio de un ministerio o área de la iglesia.",
        ],
      },
      techRequirements,
    ],
  },
  {
    label: "De otra congregación",
    sections: [
      { title: "Requisitos básicos:", items: ["Ser bachiller y contar con el diploma o acta de grado."] },
      {
        title: "Requisitos de formación cristiana:",
        items: [
          "Ser miembro bautizado y activo de una congregación.",
          "Haber cursado el proceso de formación cristiana educativa de su iglesia.",
          "Estar activo en el servicio de un ministerio o área de la iglesia.",
          "Contar con el apoyo de sus pastores, quienes durante el proceso deberán diligenciar la recomendación pastoral.",
        ],
      },
      techRequirements,
    ],
  },
];

const RequirementItem = styled(Typography)({
  "::first-letter": {
    marginLeft: "7px",
    fontFamily: "SourceSerif4",
    fontWeight: 400,
  },
});

// Requisitos de admisión virtual en dos ventanas (pestañas): miembros del Avivamiento y de otra congregación.
function VirtualRequirements({ height }: { height?: string }) {
  const [selected, setSelected] = useState(0);
  const group = requirementGroups[selected];

  return (
    <Box>
      <Box role="tablist" aria-label="Tipo de aspirante" sx={{ display: "flex", gap: 1, mb: 2 }}>
        {requirementGroups.map((g, index) => {
          const active = index === selected;
          return (
            <ButtonBase
              key={g.label}
              role="tab"
              aria-selected={active}
              onClick={() => setSelected(index)}
              sx={{
                flex: 1,
                minHeight: 48,
                px: 1.5,
                borderRadius: "23px 0px 23px 0px",
                border: "1px solid #a7192d",
                background: active ? "#a7192d" : "transparent",
                color: active ? "#f5f1eb" : "#a7192d",
                fontFamily: "Inter",
                fontWeight: 600,
                fontSize: "14px",
                textTransform: "uppercase",
                lineHeight: 1.2,
                transition: "background-color 0.2s ease, color 0.2s ease",
                "&:hover": { background: active ? "#6e101c" : "#f5f1eb" },
                "&.Mui-focusVisible": { outline: "2px solid #64141f", outlineOffset: 2 },
              }}
            >
              {g.label}
            </ButtonBase>
          );
        })}
      </Box>
      <Box role="tabpanel" sx={{ overflowY: height ? "auto" : "visible", height }}>
        {group.sections.map((section) => (
          <Box key={section.title}>
            <Typography
              sx={{
                zIndex: 1,
                fontSize: "16px",
                textAlign: "left",
                color: "#A61A2D",
                lineHeight: 1,
                my: 1,
                textTransform: "uppercase",
                fontFamily: "SourceSerif4",
                fontWeight: 400,
              }}
            >
              {section.title}
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 2, mb: 2 }}>
              {section.items.map((item) => (
                <Box sx={{ position: "relative" }} key={item}>
                  <Box
                    component="span"
                    sx={{
                      position: "absolute",
                      left: 0,
                      top: 0,
                      width: "2px",
                      height: "16px",
                      backgroundColor: "#A61A2D",
                      borderRadius: 1,
                    }}
                  />
                  <RequirementItem
                    sx={{
                      fontSize: "16px",
                      textAlign: "left",
                      color: "#090a0a",
                      lineHeight: 1,
                      fontFamily: "SourceSerif4",
                      fontWeight: 400,
                    }}
                  >
                    {item}
                  </RequirementItem>
                </Box>
              ))}
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
}

export default VirtualRequirements;
