import { useState } from "react";
import {
  Box,
  Typography,
  Container,
  Collapse,
  ListSubheader,
  Divider,
  List,
  ListItemButton,
  ListItem,
  ListItemText,
} from "@mui/material";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import InstagramIcon from "@mui/icons-material/Instagram";
import { useNavigate, Link as RouterLink } from "react-router-dom";
import useIsDesktop from "../../hooks/useIsDesktop";
import { footerLinks, quickLinks } from "./menuData";

function Footer() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [openGroups, setOpenGroups] = useState<Record<number, number | null>>({});
  const [activeGroup, setActiveGroup] = useState<number | null>(null);
  const navigate = useNavigate();
  const toggleItem = (itemIndex: number) => {
    setOpenIndex(openIndex === itemIndex ? null : itemIndex);
  };
  const toggleGroup = (itemIndex: number, groupIndex: number) => {
    setOpenGroups((prev) => ({
      ...prev,
      [itemIndex]: prev[itemIndex] === groupIndex ? null : groupIndex,
    }));
    setActiveGroup((prev) => (prev === groupIndex ? null : groupIndex));
  };
  const [openQuickIndex, setOpenQuickIndex] = useState<number | null>(null);
  const [openQuickGroups] = useState<Record<number, number | null>>({});
  const toggleQuickItem = (itemIndex: number) => {
    setOpenQuickIndex(openQuickIndex === itemIndex ? null : itemIndex);
  };
  const isDesktop = useIsDesktop();
  const year = new Date().getFullYear();
  return (
    <Box
      sx={{
        background: "#A61A2D",
        py: 5,
      }}
    >
      <Container>
        {isDesktop ? (
          <>
            <Container
              sx={{
                marginBottom: 7,
              }}
            >
              <Box display="flex" justifyContent="space-between" alignItems="flex-start">
                <Box>
                  <Box component="img" src="/assets/logos/afcblanco.png" alt="Logo" height={200} />
                  <Box
                    color="#f6f1ea"
                    fontFamily="Inter"
                    display="flex"
                    flexDirection="column"
                    justifyContent="center"
                    alignItems="center"
                    gap={1.7}
                  >
                    <Typography fontWeight={600}> Av. Cra. 68 # 13-80 </Typography>
                    <Typography fontWeight={600}>{" +57 3194187615 "}</Typography>
                    <Typography
                      component="a"
                      href="mailto:afc@avivamiento.com"
                      fontWeight={600}
                      sx={{
                        color: "#f6f1ea",
                        textDecoration: "none",
                        cursor: "pointer",
                        ":hover": {
                          textDecoration: "underline",
                        },
                      }}
                    >
                      afc@avivamiento.com
                    </Typography>
                    <Typography
                      component="a"
                      href="mailto:afcvirtual@avivamiento.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      fontWeight={600}
                      sx={{
                        color: "#f6f1ea",
                        textDecoration: "none",
                        cursor: "pointer",
                        ":hover": {
                          textDecoration: "underline",
                        },
                      }}
                    >
                      afcvirtual@avivamiento.com
                    </Typography>
                  </Box>
                  <Box
                    mt={5}
                    display="flex"
                    flexDirection="column"
                    justifyContent="center"
                    alignItems="center"
                    gap={1}
                    color="#f6f1ea"
                  >
                    <InstagramIcon />
                    <RouterLink
                      to=""
                      style={{
                        color: "#f6f1ea",
                        fontFamily: "Inter",
                        fontWeight: 700,
                        fontSize: "20px",
                      }}
                    >
                      {" "}
                      @afc.avivamiento{" "}
                    </RouterLink>
                  </Box>
                </Box>
                <Box display="flex" gap={10} mt={3}>
                  <List
                    component="nav"
                    sx={{
                      fontFamily: "Inter",
                      fontWeight: 600,
                      color: "#f6f1ea",
                      fontSize: "18px",
                    }}
                    subheader={
                      <ListSubheader
                        component="div"
                        id="nested-list-subheader"
                        disableSticky
                        sx={{
                          background: "transparent",
                          color: "#f6f1ea",
                          fontSize: "25px",
                          fontWeight: "500",
                        }}
                      >
                        Enlaces Institucionales
                      </ListSubheader>
                    }
                  >
                    {footerLinks.map((item, index) => {
                      const isOpen = openIndex === index;
                      return (
                        <Box key={index}>
                          <ListItem
                            disablePadding
                            sx={{
                              padding: 0,
                            }}
                          >
                            <ListItemButton onClick={() => toggleItem(index)}>
                              <ListItemText
                                primary={
                                  <Typography
                                    sx={{
                                      textDecoration: isOpen ? "underline" : "none",
                                      color: "#f6f1ea",
                                      fontSize: "19px",
                                      opacity: openIndex !== null && !isOpen ? 0.7 : 1,
                                      fontWeight: 500,
                                    }}
                                  >
                                    {item.title}
                                  </Typography>
                                }
                              />
                            </ListItemButton>
                          </ListItem>
                          <Collapse in={isOpen} timeout="auto" unmountOnExit>
                            <List
                              component="div"
                              disablePadding
                              sx={{
                                pl: 0,
                              }}
                            >
                              {item.subitems.map((sub, subIndex) => {
                                const isGroup = typeof sub == "object";
                                const isGroupOpen = openGroups[index] === subIndex;
                                return (
                                  <Box key={subIndex}>
                                    <ListItem disablePadding>
                                      <ListItemButton
                                        onClick={() => {
                                          if (isGroup) {
                                            toggleGroup(index, subIndex);
                                          } else {
                                            navigate(`${item.to}#${sub}`);
                                          }
                                        }}
                                        sx={{
                                          pl: 5,
                                        }}
                                      >
                                        <Box
                                          sx={{
                                            display: "flex",
                                            alignItems: "center",
                                          }}
                                        >
                                          <Typography
                                            sx={{
                                              fontFamily: "Inter",
                                              fontWeight: 400,
                                              textDecoration: isGroupOpen ? "underline" : "none",
                                              color: "#f6f1ea",
                                              fontSize: "18px",
                                              opacity: activeGroup === null || activeGroup === subIndex ? 1 : 0.7,
                                            }}
                                          >
                                            {isGroup ? sub.label : sub}
                                          </Typography>
                                          <ChevronRightIcon
                                            sx={{
                                              color: "#f6f1ea",
                                              fontSize: "18px",
                                              ml: "2px",
                                            }}
                                          />
                                        </Box>
                                      </ListItemButton>
                                    </ListItem>
                                    {isGroup && (
                                      <Collapse in={isGroupOpen} timeout="auto" unmountOnExit>
                                        <List
                                          component="div"
                                          disablePadding
                                          sx={{
                                            pl: 1,
                                          }}
                                        >
                                          {sub.children.map((child, childIndex) => (
                                            <ListItem
                                              disablePadding
                                              sx={{
                                                minHeight: "32px",
                                              }}
                                              key={childIndex}
                                            >
                                              <ListItemButton
                                                sx={{
                                                  py: 0.1,
                                                  minHeight: "32px",
                                                }}
                                                onClick={() => {
                                                  navigate(`${item.to}#main=${sub.label}&section=${child}`);
                                                }}
                                              >
                                                <Box
                                                  sx={{
                                                    display: "flex",
                                                    alignItems: "center",
                                                  }}
                                                >
                                                  <Typography
                                                    sx={{
                                                      color: "#f6f1ea",
                                                      fontSize: "18px",
                                                      fontFamily: "Inter",
                                                      fontWeight: 300,
                                                    }}
                                                  >
                                                    {child}
                                                  </Typography>
                                                  <ChevronRightIcon
                                                    sx={{
                                                      color: "#f6f1ea",
                                                      fontSize: "18px",
                                                      ml: "2px",
                                                    }}
                                                  />
                                                </Box>
                                              </ListItemButton>
                                            </ListItem>
                                          ))}
                                        </List>
                                      </Collapse>
                                    )}
                                  </Box>
                                );
                              })}
                            </List>
                          </Collapse>
                        </Box>
                      );
                    })}
                  </List>
                  <List
                    component="nav"
                    sx={{
                      fontFamily: "Inter",
                      fontWeight: 400,
                      color: "#f6f1ea",
                      fontSize: "18px",
                    }}
                    subheader={
                      <ListSubheader
                        component="div"
                        id="nested-list-subheader"
                        disableSticky
                        sx={{
                          background: "transparent",
                          color: "#f6f1ea",
                          fontSize: "20px",
                          fontWeight: "500",
                        }}
                      >
                        Navegación Rápida
                      </ListSubheader>
                    }
                  >
                    {quickLinks.map((item, index) => {
                      const isOpen = openQuickIndex === index;
                      return (
                        <Box key={index}>
                          <ListItem
                            disablePadding
                            sx={{
                              padding: 0,
                            }}
                          >
                            <ListItemButton
                              onClick={() => {
                                if (item.title === "Avivamiento.com") {
                                  window.open("https://avivamiento.com", "_blank");
                                } else {
                                  toggleQuickItem(index);
                                }
                              }}
                            >
                              <ListItemText
                                primary={
                                  <Typography
                                    sx={{
                                      textDecoration: isOpen ? "underline" : "none",
                                      color: "#f6f1ea",
                                      fontSize: "19px",
                                      opacity: openQuickIndex !== null && !isOpen ? 0.7 : 1,
                                      fontWeight: 500,
                                    }}
                                  >
                                    {item.title}
                                  </Typography>
                                }
                              />
                            </ListItemButton>
                          </ListItem>
                          <Collapse in={isOpen} timeout="auto" unmountOnExit>
                            <List
                              component="div"
                              disablePadding
                              sx={{
                                pl: 0,
                              }}
                            >
                              {item.subitems.map((sub, subIndex) => {
                                const isGroup = typeof sub == "object";
                                const isGroupOpen = openQuickGroups[index] === subIndex;
                                return (
                                  <Box key={subIndex}>
                                    <ListItem disablePadding>
                                      <ListItemButton
                                        onClick={() => {
                                          const title = item.title;
                                          const modality =
                                            typeof sub == "object" &&
                                            sub.label.toLowerCase().includes("modalidad virtual")
                                              ? "virtual"
                                              : "presencial";
                                          if (
                                            title === "Preguntas Frecuentes" ||
                                            title === "Formulario de Inscripción"
                                          ) {
                                            navigate(`/admisiones/${modality}#${title}`);
                                          }
                                        }}
                                        sx={{
                                          pl: 5,
                                        }}
                                      >
                                        <Box
                                          sx={{
                                            display: "flex",
                                            alignItems: "center",
                                          }}
                                        >
                                          <Typography
                                            sx={{
                                              fontFamily: "Inter",
                                              fontWeight: 400,
                                              textDecoration: isGroupOpen ? "underline" : "none",
                                              color: "#f6f1ea",
                                              fontSize: "18px",
                                              opacity: 1,
                                            }}
                                          >
                                            {isGroup ? sub.label : sub}
                                          </Typography>
                                          <ChevronRightIcon
                                            sx={{
                                              color: "#f6f1ea",
                                              fontSize: "18px",
                                              ml: "2px",
                                            }}
                                          />
                                        </Box>
                                      </ListItemButton>
                                    </ListItem>
                                  </Box>
                                );
                              })}
                            </List>
                          </Collapse>
                        </Box>
                      );
                    })}
                  </List>
                </Box>
              </Box>
            </Container>
            <Divider
              sx={{
                height: 1,
                background: "#f6f1ea",
              }}
            />
            <Container>
              <Typography
                mt={1}
                color="#f6f1ea"
                fontSize="18px"
                fontFamily="Inter"
                fontWeight="600"
                display="flex"
                alignItems="center"
                gap={1}
              >
                {" "}
                <span
                  style={{
                    fontSize: "35px",
                  }}
                >
                  ©
                </span>{" "}
                {year} Avivamiento Faith College. Todos los derechos reservados.{" "}
              </Typography>
            </Container>
          </>
        ) : (
          <>
            <Box display="flex" gap={4} mt={3} flexDirection="column" justifyContent="center" alignItems="center">
              <List
                component="nav"
                sx={{
                  fontFamily: "Inter",
                  fontWeight: 600,
                  color: "#f6f1ea",
                  fontSize: "18px",
                }}
                subheader={
                  <ListSubheader
                    component="div"
                    id="nested-list-subheader"
                    disableSticky
                    sx={{
                      background: "transparent",
                      color: "#f6f1ea",
                      fontSize: "25px",
                      fontWeight: "500",
                      textAlign: "center",
                    }}
                  >
                    Enlaces Institucionales
                  </ListSubheader>
                }
              >
                {footerLinks.map((item, index) => {
                  const isOpen = openIndex === index;
                  return (
                    <Box key={index}>
                      <ListItem
                        disablePadding
                        sx={{
                          padding: 0,
                        }}
                      >
                        <ListItemButton onClick={() => toggleItem(index)}>
                          <ListItemText
                            primary={
                              <Typography
                                sx={{
                                  textDecoration: isOpen ? "underline" : "none",
                                  color: "#f6f1ea",
                                  fontSize: "19px",
                                  textAlign: "center",
                                  opacity: openIndex !== null && !isOpen ? 0.7 : 1,
                                  fontWeight: 500,
                                }}
                              >
                                {item.title}
                              </Typography>
                            }
                          />
                        </ListItemButton>
                      </ListItem>
                      <Collapse in={isOpen} timeout="auto" unmountOnExit>
                        <List
                          component="div"
                          disablePadding
                          sx={{
                            pl: 0,
                          }}
                        >
                          {item.subitems.map((sub, subIndex) => {
                            const isGroup = typeof sub == "object";
                            const isGroupOpen = openGroups[index] === subIndex;
                            return (
                              <Box key={subIndex}>
                                <ListItem disablePadding>
                                  <ListItemButton
                                    onClick={() => {
                                      if (isGroup) {
                                        toggleGroup(index, subIndex);
                                      } else {
                                        navigate(`${item.to}#${sub}`);
                                      }
                                    }}
                                    sx={{
                                      display: "flex",
                                      justifyContent: "center",
                                      textAlign: "center",
                                      width: "100%",
                                    }}
                                  >
                                    <Box
                                      sx={{
                                        display: "flex",
                                        alignItems: "center",
                                        textAlign: "center",
                                      }}
                                    >
                                      <Typography
                                        sx={{
                                          fontFamily: "Inter",
                                          fontWeight: 400,
                                          textDecoration: isGroupOpen ? "underline" : "none",
                                          color: "#f6f1ea",
                                          fontSize: "18px",
                                          textAlign: "center",
                                          width: "100%",
                                          opacity: activeGroup === null || activeGroup === subIndex ? 1 : 0.7,
                                        }}
                                      >
                                        {isGroup ? sub.label : sub}
                                      </Typography>
                                      <ChevronRightIcon
                                        sx={{
                                          color: "#f6f1ea",
                                          fontSize: "18px",
                                          ml: "2px",
                                        }}
                                      />
                                    </Box>
                                  </ListItemButton>
                                </ListItem>
                                {isGroup && (
                                  <Collapse in={isGroupOpen} timeout="auto" unmountOnExit>
                                    <List
                                      component="div"
                                      disablePadding
                                      sx={{
                                        pl: 1,
                                      }}
                                    >
                                      {sub.children.map((child, childIndex) => (
                                        <ListItem
                                          disablePadding
                                          sx={{
                                            minHeight: "32px",
                                            width: "100%",
                                          }}
                                          key={childIndex}
                                        >
                                          <ListItemButton
                                            sx={{
                                              py: 0.1,
                                              minHeight: "32px",
                                              display: "flex",
                                              justifyContent: "center",
                                              width: "100%",
                                            }}
                                            onClick={() => {
                                              navigate(`${item.to}#main=${sub.label}&section=${child}`);
                                            }}
                                          >
                                            <Box
                                              sx={{
                                                display: "flex",
                                                alignItems: "center",
                                              }}
                                            >
                                              <Typography
                                                sx={{
                                                  color: "#f6f1ea",
                                                  fontSize: "18px",
                                                  fontFamily: "Inter",
                                                  fontWeight: 300,
                                                  textAlign: "center",
                                                  width: "100%",
                                                }}
                                              >
                                                {child}
                                              </Typography>
                                              <ChevronRightIcon
                                                sx={{
                                                  color: "#f6f1ea",
                                                  fontSize: "18px",
                                                  ml: "2px",
                                                }}
                                              />
                                            </Box>
                                          </ListItemButton>
                                        </ListItem>
                                      ))}
                                    </List>
                                  </Collapse>
                                )}
                              </Box>
                            );
                          })}
                        </List>
                      </Collapse>
                    </Box>
                  );
                })}
              </List>
              <List
                component="nav"
                sx={{
                  fontFamily: "Inter",
                  fontWeight: 400,
                  color: "#f6f1ea",
                  fontSize: "18px",
                }}
                subheader={
                  <ListSubheader
                    component="div"
                    id="nested-list-subheader"
                    disableSticky
                    sx={{
                      background: "transparent",
                      color: "#f6f1ea",
                      fontSize: "25px",
                      fontWeight: "700",
                      textAlign: "center",
                    }}
                  >
                    Navegación Rápida
                  </ListSubheader>
                }
              >
                {quickLinks.map((item, index) => {
                  const isOpen = openQuickIndex === index;
                  return (
                    <Box key={index}>
                      <ListItem
                        disablePadding
                        sx={{
                          padding: 0,
                        }}
                      >
                        <ListItemButton
                          onClick={() => {
                            if (item.title === "Avivamiento.com") {
                              window.open("https://avivamiento.com", "_blank");
                            } else {
                              toggleQuickItem(index);
                            }
                          }}
                        >
                          <ListItemText
                            primary={
                              <Typography
                                sx={{
                                  textDecoration: isOpen ? "underline" : "none",
                                  color: "#f6f1ea",
                                  fontSize: "19px",
                                  textAlign: "center",
                                  opacity: openQuickIndex !== null && !isOpen ? 0.7 : 1,
                                  fontWeight: 500,
                                }}
                              >
                                {item.title}
                              </Typography>
                            }
                          />
                        </ListItemButton>
                      </ListItem>
                      <Collapse in={isOpen} timeout="auto" unmountOnExit>
                        <List
                          component="div"
                          disablePadding
                          sx={{
                            pl: 0,
                          }}
                        >
                          {item.subitems.map((sub, subIndex) => {
                            const isGroup = typeof sub == "object";
                            const isGroupOpen = openQuickGroups[index] === subIndex;
                            return (
                              <Box key={subIndex}>
                                <ListItem disablePadding>
                                  <ListItemButton
                                    onClick={() => {
                                      const title = item.title;
                                      const modality =
                                        typeof sub == "object" && sub.label.toLowerCase().includes("modalidad virtual")
                                          ? "virtual"
                                          : "presencial";
                                      if (title === "Preguntas Frecuentes" || title === "Formulario de Inscripción") {
                                        navigate(`/admisiones/${modality}#${title}`);
                                      }
                                    }}
                                    sx={{
                                      pl: 5,
                                    }}
                                  >
                                    <Box
                                      sx={{
                                        display: "flex",
                                        alignItems: "center",
                                      }}
                                    >
                                      <Typography
                                        sx={{
                                          fontFamily: "Inter",
                                          fontWeight: 400,
                                          textDecoration: isGroupOpen ? "underline" : "none",
                                          color: "#f6f1ea",
                                          fontSize: "18px",
                                          opacity: 1,
                                        }}
                                      >
                                        {isGroup ? sub.label : sub}
                                      </Typography>
                                      <ChevronRightIcon
                                        sx={{
                                          color: "#f6f1ea",
                                          fontSize: "18px",
                                          ml: "2px",
                                        }}
                                      />
                                    </Box>
                                  </ListItemButton>
                                </ListItem>
                              </Box>
                            );
                          })}
                        </List>
                      </Collapse>
                    </Box>
                  );
                })}
              </List>
            </Box>
            <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center" mt={5}>
              <Box component="img" src="/assets/logos/afcblanco.png" alt="Logo" height={200} />
              <Box
                color="#f6f1ea"
                fontFamily="Inter"
                display="flex"
                flexDirection="column"
                justifyContent="center"
                alignItems="center"
                gap={1.7}
              >
                <Typography fontWeight={600}>{" Av. Cra. 68 # 13-80 "}</Typography>
                <Typography fontWeight={600}>{" +57 3194187615 "}</Typography>
                <Typography fontWeight={600}>{" afc@avivamiento.com "}</Typography>
                <Typography fontWeight={600}> afcvirtual@avivamiento.com </Typography>
              </Box>
              <Box
                mt={5}
                display="flex"
                flexDirection="column"
                justifyContent="center"
                alignItems="center"
                gap={1}
                color="#f6f1ea"
              >
                <InstagramIcon />
                <RouterLink
                  to=""
                  style={{
                    color: "#f6f1ea",
                    fontFamily: "Inter",
                    fontWeight: 700,
                    fontSize: "20px",
                  }}
                >
                  {" "}
                  @afc.avivamiento{" "}
                </RouterLink>
              </Box>
            </Box>
          </>
        )}
      </Container>
    </Box>
  );
}
export default Footer;
