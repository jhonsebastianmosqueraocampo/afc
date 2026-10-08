import { useState } from "react";
import { Box, Typography, Collapse, List, ListItemButton, ListItem, ListItemText } from "@mui/material";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { useNavigate } from "react-router-dom";
import useIsDesktop from "../../hooks/useIsDesktop";
import type { MenuItem } from "./menuData";
interface MenuListProps {
  data: MenuItem[];
  setOpen: (open: boolean) => void;
}

// Menú del Drawer: en desktop los niveles se despliegan en columnas, en móvil en acordeón.
function MenuList({ data, setOpen }: MenuListProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [openGroups, setOpenGroups] = useState<Record<number, number | null>>({});
  const [activeGroup, setActiveGroup] = useState<number | null>(null);
  const navigate = useNavigate();
  const isDesktop = useIsDesktop();
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
  return (
    <List
      sx={{
        position: "relative",
      }}
    >
      {data.map((item, index) => {
        const isOpen = openIndex === index;
        return isDesktop ? (
          <Box display="flex" justifyContent="flex-start" alignItems="flex-start" px={5} key={index}>
            <ListItem
              disablePadding
              sx={{
                padding: 0,
                width: "22%",
              }}
            >
              <ListItemButton
                onClick={() => toggleItem(index)}
                sx={{
                  pl: 0,
                }}
              >
                <ListItemText
                  primary={
                    <Typography
                      sx={{
                        textDecoration: isOpen ? "underline" : "none",
                        color: "#f6f1ea",
                        fontSize: "28px",
                        opacity: openIndex !== null && !isOpen ? 0.7 : 1,
                        fontFamily: "cinzel",
                        fontWeight: 700,
                      }}
                    >
                      {item.title}
                    </Typography>
                  }
                />
              </ListItemButton>
            </ListItem>
            <Collapse
              in={isOpen}
              timeout="auto"
              unmountOnExit
              sx={{
                position: "absolute",
                top: 0,
                left: "25%",
              }}
            >
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
                    <Box display="flex" justifyContent="flex-start" alignItems="flex-start" key={subIndex}>
                      <ListItem disablePadding>
                        <ListItemButton
                          onClick={() => {
                            if (isGroup) {
                              if (sub.to && sub.children?.length === 0) {
                                window.open(sub.to, "_blank");
                                return;
                              }
                              toggleGroup(index, subIndex);
                            } else {
                              navigate(`${item.to}#${sub}`);
                              setOpen(false);
                            }
                          }}
                          sx={{
                            pl: 0,
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
                        <Collapse
                          in={isGroupOpen}
                          timeout="auto"
                          unmountOnExit
                          sx={{
                            position: "absolute",
                            top: 0,
                            left: "100%",
                            minWidth: "200px",
                          }}
                        >
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
                                    setOpen(false);
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
        ) : (
          <Box key={index}>
            <ListItem
              disablePadding
              sx={{
                padding: 0,
              }}
            >
              <ListItemButton
                onClick={() => toggleItem(index)}
                sx={{
                  pl: 0,
                }}
              >
                <ListItemText
                  primary={
                    <Typography
                      sx={{
                        textDecoration: isOpen ? "underline" : "none",
                        color: "#f6f1ea",
                        fontSize: "28px",
                        opacity: openIndex !== null && !isOpen ? 0.7 : 1,
                        fontFamily: "cinzel",
                        fontWeight: 700,
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
                              if (sub.to && sub.children?.length === 0) {
                                window.open(sub.to, "_blank");
                                return;
                              }
                              toggleGroup(index, subIndex);
                            } else {
                              navigate(`${item.to}#${sub}`);
                              setOpen(false);
                            }
                          }}
                          sx={{
                            pl: 0,
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
                                    setOpen(false);
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
  );
}
export default MenuList;
