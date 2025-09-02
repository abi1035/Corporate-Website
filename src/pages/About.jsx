import * as React from 'react';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import MediaCard from '../component/MediaCard';
import { Link } from "react-router-dom";
import './AboutUsNav.css';

const QUALITY_CARDS = [
  { title: 'High Standards', description: 'We ensure quality through strict protocols and continuous improvement.', image: '/images/quality1.jpg' },
  { title: 'Resident Safety', description: 'Safety-first environment with staff always available to help.', image: '/images/quality2.jpg' },
  { title: 'Accreditation', description: 'Recognized by healthcare organizations for excellence in care.', image: '/images/quality3.jpg' },
];

const SERVICES_CARDS = [
  { title: 'Personal Care', description: '24/7 support including nursing, meals, and daily living assistance.', image: '/images/service1.jpg' },
  { title: 'Recreational Programs', description: 'Daily activities like music, games, and therapy programs.', image: '/images/service2.jpg' },
  { title: 'Specialized Care', description: 'Tailored services for dementia, respite, and palliative care.', image: '/images/service3.jpg' },
];

function SectionBlock({ title, cards }) {
  return (
    <Box sx={{ mb: 6 }}>
      <Typography variant="h4" align="left" sx={{ mb: 3 }}>{title}</Typography>
      <Grid container spacing={4} className="fade-grid">
        {cards.map(card => (
          <Grid key={card.title} item xs={12} sm={6} md={4}>
            <MediaCard {...card} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default function About() {
  const [section, setSection] = React.useState('all'); // default = show both sections

  const handleChange = (_e, val) => {
    if (val) setSection(val);
  };

  const showQuality  = section === 'all' || section === 'quality';
  const showServices = section === 'all' || section === 'services';

  return (
    <>
      {/* Hero */}
      <div className="AboutUsSection">
        <section className="aboutFeature">
          <div className="aboutContent">
            <h2>Our Executive Team</h2>
            <p>
              At Primacare, you’ll find more than just a workplace you’ll meet the executive team whose leadership inspires excellence across our homes. Together, we create a compassionate, supportive environment where your career can truly make a difference.
            </p>

            <Link to="/executive"><button className='aboutBtn' ><strong>Meet our Executives</strong></button></Link>
          </div>
          <div className="aboutImage">
            <img src="/corporateTeam.png" alt="about the executive team" />
          </div>
        </section>
      </div>

      {/* Horizontal filters + sections */}
      <Container maxWidth="lg" sx={{ py: 6 }}>
        {/* Horizontal pills (desktop + mobile) */}
        <Box sx={{ display: 'flex', justifyContent: 'center', mb: 4 }}>
          <Paper elevation={0} sx={{ p: 1, bgcolor: 'transparent' }}>
            <ToggleButtonGroup
              value={section}
              exclusive
              onChange={handleChange}
              color="standard"
              sx={{
                flexWrap: 'wrap',
                gap: 1.25,
                '& .MuiToggleButton-root': {
                  border: 'none',
                  borderRadius: 999,
                  textTransform: 'none',
                  fontWeight: 600,
                  color: '#354d68',
                  px: 2,
                  py: 0.9,
                  transition: 'background .2s ease, color .2s ease',
                  '&:hover': { background: '#edf3f8' },
                },
                '& .Mui-selected': {
                  color: '#1f3b5b',
                  background: '#e9f1fb',
                  boxShadow: 'inset 0 0 0 1px #d6e4ff',
                  '&:hover': { background: '#e3eefc' },
                },
              }}
            >
              <ToggleButton value="all">All categories</ToggleButton>
              <ToggleButton value="quality">Quality</ToggleButton>
              <ToggleButton value="services">Services</ToggleButton>
            </ToggleButtonGroup>
          </Paper>
        </Box>

        {/* Always render headings; filter just hides sections */}
        {showQuality && <SectionBlock title="Quality" cards={QUALITY_CARDS} />}
        {showServices && <SectionBlock title="Services" cards={SERVICES_CARDS} />}
      </Container>
    </>
  );
}
