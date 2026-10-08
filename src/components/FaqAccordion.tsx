import { useState, type SyntheticEvent } from "react";
import { Box, Typography, Accordion, AccordionDetails, AccordionSummary } from "@mui/material";
import useIsDesktop from "../hooks/useIsDesktop";
export interface Faq {
  question: string;
  answer: string;
}

function FaqAccordion({ faqs }: { faqs: Faq[] }) {
  const [expanded, setExpanded] = useState<string | false>(false);
  const handleChange = (panelId: string) => (_event: SyntheticEvent, isExpanded: boolean) => {
    setExpanded(isExpanded ? panelId : false);
  };
  const isDesktop = useIsDesktop();
  return (
    <Box
      sx={{
        borderRadius: "28px 0px 28px 0px",
        overflowX: "hidden",
        height: "auto",
        width: isDesktop ? "873px" : "unset",
      }}
    >
      {faqs.map((item, index) => {
        const panel = `panel-${index}`;
        const isEven = index % 2 === 0;
        return (
          <Accordion
            expanded={expanded === panel}
            onChange={handleChange(panel)}
            disableGutters
            square
            sx={{
              backgroundColor: isEven ? "#a61a2d" : "#f5f1eb",
              boxShadow: "none",
              borderBottom: "1px solid #ddd",
              margin: 0,
              "&:before": {
                display: "none",
              },
            }}
            key={panel}
          >
            <AccordionSummary
              sx={{
                padding: 0,
                margin: 0,
                minHeight: "unset",
                ":hover": {
                  textDecoration: "underline",
                  textDecorationColor: isEven ? "#f5f1eb" : "#a61a2d",
                },
                "& .MuiAccordionSummary-content": {
                  margin: 0,
                  padding: 1.5,
                },
                "&.Mui-focused": {
                  outline: "none",
                },
                "&:focus": {
                  outline: "none",
                },
              }}
            >
              <Typography
                sx={{
                  fontFamily: "Inter",
                  fontWeight: 500,
                  color: isEven ? "#f5f1eb" : "#a61a2d",
                }}
              >
                {item.question}
              </Typography>
            </AccordionSummary>
            <AccordionDetails
              sx={{
                backgroundColor: "#ffffff",
                padding: 0,
                margin: 0,
                border: "1px solid #a61a2d",
                borderRadius: index === faqs.length - 1 ? "0px 0px 28px 0px" : "0px",
              }}
            >
              <Typography
                sx={{
                  color: "#a61a2d",
                  p: 1.5,
                  m: 0,
                  fontFamily: "SourceSerif4",
                  fontWeight: 500,
                  whiteSpace: "pre-line", // respeta los saltos de línea de las respuestas con viñetas
                }}
              >
                {item.answer}
              </Typography>
            </AccordionDetails>
          </Accordion>
        );
      })}
    </Box>
  );
}
export default FaqAccordion;
