// Import essential modules
import { config } from "dotenv";
import express from "express";
import cors from "cors";
import serveIndex from "serve-index";

// Initialize app
const app = express();

// Config dotenv
config();

// Enable cors
app.use(cors());

// Serve ftp
app.use(
  "/",
  express.static(process.env.SERVE_ROOT),
  serveIndex(process.env.SERVE_ROOT, { icons: true })
);

// Listening to app
app.listen(process.env.PORT, (err) => {
  if (!err) console.log(`Server running at port ${process.env.PORT}`);
});
