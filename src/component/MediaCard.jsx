import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { Link } from "react-router-dom";

// Map special Quality cards -> dropdown links
const QUALITY_LINKS = {
  "WORKPLAN": [
    { label: "Burton Manor", to: "/docs/workplanBurton" },
    { label: "Henley House", to: "/docs/workplan-2023" },
    { label: "Henley Place", to: "/docs/workplan-archive" },
  ],
  "NARRATIVE": [
    { label: "Burton Manor", to: "/docs/narrativeBurton" },
    { label: "Henley House", to: "/docs/narrative-2023" },
    { label: "Henley Place", to: "/docs/narrative-archive" },
  ],
  "CQI REPORTS": [
    { label: "Burton Manor", to: "/docs/cqiReportsBurton" },
    { label: "Henley House", to: "/docs/cqi-2023" },
    { label: "Henley Place", to: "/docs/cqi-archive" },
  ],
  "PROGRESS REPORT": [
    { label: "Burton Manor", to: "/docs/progressBurton" },
    { label: "Henley House", to: "/docs/progress-2023" },
    { label: "Henley Place", to: "/docs/progress-archive" },
  ],
};

export default function MediaCard({ title, description, image }) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const normalized = title?.toUpperCase();
  const links = QUALITY_LINKS[normalized] || null;

  const handleOpen = (e) => setAnchorEl(e.currentTarget);
  const handleClose = () => setAnchorEl(null);

  return (
    <Card
      sx={{
        maxWidth: 345,
        transition: "transform 0.3s ease, box-shadow 0.3s ease",
        '&:hover': {
          transform: "translateY(-8px)",
          boxShadow: "0 12px 24px rgba(0,0,0,0.2)"
        }
      }}
    >
      <CardMedia
        sx={{ height: 180 }}
        image={image}
        title={title}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          {description}
        </Typography>
      </CardContent>
      <CardActions>
        {links ? (
          <>
            <Button size="small" onClick={handleOpen}>
              Learn More ▾
            </Button>
            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              {links.map((link) => (
                <MenuItem
                  key={link.to}
                  component={Link}
                  to={link.to}
                  onClick={handleClose}
                >
                  {link.label}
                </MenuItem>
              ))}
            </Menu>
          </>
        ) : (
          <Button size="small">Learn More</Button>
        )}
      </CardActions>
    </Card>
  );
}
