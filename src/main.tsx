import { createRoot } from "react-dom/client";
import "@fontsource/epilogue/400.css";
import "@fontsource/epilogue/500.css";
import "@fontsource/epilogue/600.css";
import "swiper/css";
import "react-lite-youtube-embed/dist/LiteYouTubeEmbed.css";
import "./index.css";
import App from "./App";

createRoot(document.getElementById("root")!).render(<App />);
