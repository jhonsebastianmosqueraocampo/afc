import { useState, type KeyboardEvent } from "react";
import {
  Box,
  Dialog,
  IconButton,
  InputBase,
  List,
  ListItemButton,
  ListItemText,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";
import { useNavigate } from "react-router-dom";
import { searchSections, type SearchEntry } from "./searchData";

interface SearchDialogProps {
  open: boolean;
  onClose: () => void;
}

function SearchDialog({ open, onClose }: SearchDialogProps) {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const results = searchSections(query);

  const close = () => {
    setQuery("");
    onClose();
  };

  const go = (entry: SearchEntry) => {
    close();
    navigate(entry.to);
    if (entry.to === "/") window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleKeyDown = (event: KeyboardEvent) => {
    if (event.key === "Enter" && results.length) {
      event.preventDefault();
      go(results[0]);
    }
  };

  return (
    <Dialog
      open={open}
      onClose={close}
      disableRestoreFocus
      fullScreen={fullScreen}
      fullWidth
      maxWidth="sm"
      slotProps={{
        paper: { sx: { background: "#f5f1eb", borderRadius: fullScreen ? 0 : "0px 0px 28px 0px", alignSelf: "flex-start", mt: { sm: 10 } } },
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center", gap: 1, px: 2, py: 1.5, borderBottom: "2px solid #a7192d" }}>
        <SearchIcon sx={{ color: "#a7192d" }} />
        <InputBase
          autoFocus
          fullWidth
          placeholder="Buscar: costos, requisitos, misión…"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          onKeyDown={handleKeyDown}
          inputProps={{ "aria-label": "Buscar en el sitio" }}
          sx={{ fontFamily: "Inter", fontSize: "18px" }}
        />
        <IconButton onClick={close} aria-label="Cerrar buscador">
          <CloseIcon />
        </IconButton>
      </Box>
      <List sx={{ maxHeight: fullScreen ? "none" : "60vh", overflowY: "auto", py: 0 }}>
        {results.map((entry) => (
          <ListItemButton key={entry.to} onClick={() => go(entry)} sx={{ borderBottom: "1px solid #e4ddd2" }}>
            <ListItemText
              primary={entry.title}
              secondary={entry.page}
              slotProps={{
                primary: { sx: { fontFamily: "Inter", fontWeight: 600, color: "#090a0a" } },
                secondary: { sx: { fontFamily: "Inter", color: "#a7192d", fontSize: "13px", textTransform: "uppercase" } },
              }}
            />
          </ListItemButton>
        ))}
        {!results.length && (
          <Typography sx={{ p: 3, fontFamily: "Inter", color: "#555" }}>
            No encontramos secciones para “{query}”.
          </Typography>
        )}
      </List>
    </Dialog>
  );
}

export default SearchDialog;
