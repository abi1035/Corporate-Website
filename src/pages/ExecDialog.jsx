// ExecDialog.jsx
import * as React from "react";
import {
  Dialog,
  DialogContent,
  IconButton,
  Typography,
  Box,
  Button
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

export default function ExecDialog({ open, onClose, exec }) {
  if (!exec) return null;

  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="md"
      fullWidth
      PaperProps={{
        sx: {
          overflow: "hidden",
          borderRadius: 2,
        },
      }}
    >
      {/* Close */}
      <IconButton
        onClick={onClose}
        aria-label="close"
        sx={{
          position: "absolute",
          right: 8,
          top: 8,
          zIndex: 2,
          bgcolor: "rgba(0,0,0,.08)",
          "&:hover": { bgcolor: "rgba(0,0,0,.16)" },
        }}
      >
        <CloseIcon />
      </IconButton>

      <DialogContent sx={{ p: 0 }}>
        {/* Two-column layout */}
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            height: { xs: "auto", md: "70vh" },   // overall height
          }}
        >
          {/* LEFT: fixed image panel */}
          <Box
            sx={{
              width: { xs: "100%", md: "40%" },
              flexShrink: 0,
              position: "relative",
              borderRight: { md: "1px solid", xs: "none" },
              borderColor: "divider",
              
              bgcolor: "black",
            }}
          >
            <Box
              component="img"
              src={exec.image || "/default.png"}
              alt={exec.name}
              onError={(e) => (e.currentTarget.src = "/default.png")}
              sx={{
                display: "block",
                width: "120%",
                height: "100%",
                objectFit: "cover",
                opacity: 0.95,
                 transform: "translateX(-55px)",
              }}
            />

            {/* Optional CTA overlay like the example */}
            <Box
              sx={{
                position: "absolute",
                left: 16,
                bottom: 16,
                right: 16,
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Button
                size="small"
                variant="contained"
                disableElevation
                sx={{
                  borderRadius: 999,
                  px: 2.5,
                  textTransform: "none",
                }}
              >
                Follow on LinkedIn
              </Button>
            </Box>
          </Box>

          {/* RIGHT: scrollable content */}
          <Box
            sx={{
              width: { xs: "100%", md: "60%" },
              p: { xs: 3, md: 4 },
              overflowY: "auto",               // scrolls like the gif
            }}
          >
            {/* Header */}
            <Typography
              variant="h4"
              sx={{ fontWeight: 800, mb: 0.5, letterSpacing: "-.01em" }}
            >
              {exec.name}
            </Typography>
            <Typography
              variant="subtitle1"
              sx={{ color: "text.secondary", mb: 3 }}
            >
              {exec.role}
            </Typography>

            {/* Body (long bio scrolls) */}
            <Typography variant="body1" sx={{ lineHeight: 1.7 }}>
              {exec.description ||
                `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                 Praesent rhoncus, lacus in euismod consequat, velit nisl 
                 mattis odio, vitae vulputate neque augue ac ex. Sed a magna 
                 sed justo volutpat congue. Pellentesque habitant morbi 
                 tristique senectus et netus et malesuada fames ac turpis egestas. 

                 Integer sodales, nisl eget congue cursus, risus enim faucibus 
                 nibh, quis malesuada mi risus non felis. Suspendisse potenti. 
                 Donec at venenatis lorem. Duis malesuada maximus nunc, sit 
                 amet interdum lorem blandit non.`}
            </Typography>
          </Box>
        </Box>
      </DialogContent>
    </Dialog>
  );
}
