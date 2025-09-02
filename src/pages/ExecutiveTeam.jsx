import * as React from 'react';
import 'animate.css';

import './ExecutiveTeam.css'
import {
  Avatar,
  Box,
  Card,
  CardActionArea,
  CardMedia,
  Container,
  Grid,
  Paper,
  Typography,
} from '@mui/material';

const TEAM = [
  { name: 'Matthew Melchoir', role: 'CEO', image: './Matthew.png' },
  { name: 'Niklas Chandrabalan', role: 'Vice President', image: './Nik.png' },
  { name: 'Lisa Davis', role: 'Chief Nursing Officer', image: './Lisa.png' },
  { name: 'Prasanna Patkunarajah', role: 'Environmental Consultant', image: './Pras.png' },
  { name: 'Judith Mansey', role: 'Nurse Consultant', image: './Judy.png' },
  { name: 'Balvinder Kaur, CPA', role: 'Vice President, Finance', image: '' },
  { name: 'Dianne Kelly', role: 'Quality and Risk Consultant', image: '/images/exec/ross.png' },
  { name: 'Carolin Thomas', role: 'Nurse Consultant', image: '/images/exec/ross.png' },
  { name: 'Lisa Armstrong', role: 'Dietary Consultant', image: '/images/exec/ross.png' },
];

const initials = (name) =>
  name.split(' ').map(s => s[0]).join('').slice(0,2).toUpperCase();

function ExecCard({ name, role, image, delay = 0  }) {
  return (
    <Card
      elevation={0}
      sx={{
        borderRadius: 4,
        bgcolor: 'transparent',            // no grey card background
        position: 'relative',
        overflow: 'visible',
        transition: 'transform .2s ease, box-shadow .2s ease',
        '&:hover': {
          transform: 'translateY(-5px)',   // hover raise
          boxShadow: '0 14px 28px rgba(0, 0, 0, 1), 0 10px 10px rgba(0,0,0,.06)',
        },
      }}
      className=""
    >
      <CardActionArea sx={{ borderRadius: 4, overflow: 'hidden' }}>
        
        <Box
          sx={{
            width: '100%',
            height:'320px',           // consistent portrait ratio
            // if your build doesn't support aspect-ratio, replace with height: 320
            overflow: 'hidden',
          }}
        >
          <CardMedia
            component="img"
            src={image || '/default.png'}
            alt={name}
            onError={(e) => (e.currentTarget.src = '/default.png')}
            sx={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              display: 'block',
            }}
          />
        </Box>
      </CardActionArea>

      {/* Bottom pill */}
      <Paper
        elevation={3}
        sx={{
          position: 'absolute',
          left: 20,
          right: 20,
          bottom: -20,
          borderRadius: 999,
          px: 2,
          py: 1,
          display: 'flex',
          alignItems: 'center',
          gap: 1.25,
        }}
      >
        <Avatar sx={{ width: 40, height: 40, fontWeight: 800, bgcolor: '#0b2a5b' }}>
          {initials(name)}
        </Avatar>
        <Box sx={{ overflow: 'hidden', minWidth: 0 }}>
          <Typography sx={{ fontWeight: 800, lineHeight: 1.1, color: '#0b2a5b', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
            {name}
          </Typography>
          <Typography variant="body2" sx={{ color: '#0b2a5b', opacity: 0.9, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
            {role}
          </Typography>
        </Box>
      </Paper>
    </Card>
  );
}

export default function ExecutiveTeam() {
  return (
    <>
    <section class="executiveHero">
      <div class="executiveWrap">
        <p class="executiveKicker animate__animated animate__fadeInLeft">About Us</p>
        <h1 class="executiveDisplay animate__animated animate__fadeInLeft">
          Excellence in long-term care shaped by visionary leadership
        </h1>
      </div>
    </section>
    <Container maxWidth="lg" sx={{ py: { xs: 6, md: 8 } }}>
      {/* <Typography variant="h3" align="center" sx={{ fontWeight: 800, mb: 6, color: '#0f172a' }}>
        Executive Team
      </Typography> */}

      <Grid
        container
        spacing={4}
        justifyContent="center"       // centers the last row
        alignItems="stretch"
      >
        {TEAM.map((m,i) => (
          <Grid key={m.name} item xs={12} sm={6} md={4}>
            <Box sx={{ pb: 3.5 }}>
              <ExecCard {...m} />
            </Box>
          </Grid>
        ))}
      </Grid>
    </Container>
    </>
  );
}
