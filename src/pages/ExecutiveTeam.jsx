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
import ExecDialog from './ExecDialog';

const TEAM = [
  { name: 'Matthew Melchoir', role: 'CEO', image: './Matthew.png', 
    description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ut tortor lacinia, consectetur ipsum imperdiet, sodales sem. Quisque efficitur pellentesque ipsum congue fringilla. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed placerat venenatis elit, sit amet tempor arcu mollis feugiat."  },
  { name: 'Niklas Chandrabalan', role: 'Vice President', image: './Nik.png', description: "Niklas oversees strategic growth and partnerships..." },
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

function ExecCard({ name, role, image, delay = 0, onClick }) {
  return (
    <Box
      sx={{
        display: 'inline-block',
        borderRadius: '50%',
        transition: 'transform .3s ease, box-shadow .3s ease',
        '&:hover': {
          transform: 'translateY(-25px)',
          boxShadow: '0 15px 30px rgba(0, 119, 255, 0.73)',
        },
      }}
      onClick={onClick} // 👈 make the whole card clickable
    >
      <Card
        elevation={0}
        className="animate__animated animate__backInUp"
        style={{
          animationDelay: `${delay}s`,
          animationDuration: '700ms',
          animationFillMode: 'both',
        }}
        sx={{
          bgcolor: 'transparent',
          position: 'relative',
          overflow: 'visible',
          borderRadius: '50%',
        }}
      >
        <CardActionArea sx={{ overflow: 'hidden', borderRadius: '50%' }}>
          <Box
            sx={{
              width: '100%',
              height: 320,
              borderRadius: '50%',
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

        {/* Bottom pill unchanged */}
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
          <Avatar
            sx={{ width: 40, height: 40, fontWeight: 800, bgcolor: '#0b2a5b' }}
          >
            {initials(name)}
          </Avatar>
          <Box sx={{ overflow: 'hidden', minWidth: 0 }}>
            <Typography
              sx={{
                fontWeight: 800,
                lineHeight: 1.1,
                color: '#0b2a5b',
                whiteSpace: 'nowrap',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
              }}
            >
              {name}
            </Typography>
            <Typography
              variant="body2"
              sx={{
                color: '#0b2a5b',
                opacity: 0.9,
                whiteSpace: 'nowrap',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
              }}
            >
              {role}
            </Typography>
          </Box>
        </Paper>
      </Card>
    </Box>
  );
}

export default function ExecutiveTeam() {
  const [selected, setSelected] = React.useState(null);
  return (
    <>
    <section className="executiveHero">
      <div className="executiveWrap">
        <p className="executiveKicker animate__animated animate__fadeInLeft">About Us</p>
        <h1 className="executiveDisplay animate__animated animate__fadeInLeft">
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
              <ExecCard {...m} delay={i * 0.12} onClick={() => setSelected(m)}/>
            </Box>
          </Grid>
        ))}
      </Grid>
      <ExecDialog
        open={!!selected}
        onClose={() => setSelected(null)}
        exec={selected}
      />
    </Container>
    </>
  );
}
