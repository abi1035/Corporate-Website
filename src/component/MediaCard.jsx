import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function MediaCard({ title, description, image }) {
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
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}
