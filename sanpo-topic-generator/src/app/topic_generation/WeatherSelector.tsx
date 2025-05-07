import { Box, ToggleButton, Typography, Grid } from '@mui/material';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import CloudIcon from '@mui/icons-material/Cloud';
import UmbrellaIcon from '@mui/icons-material/Umbrella';

interface WeatherSelectorProps {
  selectedWeather: string;
  onWeatherSelect: (weather: string) => void;
}

export default function WeatherSelector({ selectedWeather, onWeatherSelect }: WeatherSelectorProps) {
  const weatherOptions = [
    { value: 'sunny', label: '晴れ', icon: <WbSunnyIcon /> },
    { value: 'cloudy', label: '曇り', icon: <CloudIcon /> },
    { value: 'rainy', label: '雨', icon: <UmbrellaIcon /> },
  ];

  return (
    <Box sx={{ textAlign: 'center', width: '100%' }}>
      <Typography
        variant="h6"
        sx={{
          mb: 2,
          color: '#34495e',
          fontWeight: 'bold',
          fontSize: {
            xs: '1.0rem',
            sm: '1.5rem',
            md: '1.8rem'
          }
        }}
      >
        今日の天気は？
      </Typography>
      <Grid container spacing={2} justifyContent="center">
        {weatherOptions.map((option) => (
          <Grid size={{xs:12, sm:4}} key={option.value}>
            <ToggleButton
              value={option.value}
              selected={selectedWeather === option.value}
              onChange={() => onWeatherSelect(option.value)}
              sx={{
                width: '100%',
                borderRadius: 4,
                p: 2,
                border: '2px solid #e0e0e0',
                '&.Mui-selected': {
                  background: 'linear-gradient(45deg, #4CAF50 30%, #81C784 90%)',
                  color: 'white',
                },
                '&:hover': {
                  background: '#f5f5f5',
                }
              }}
            >
              <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 1 }}>
                {option.icon}
                <Typography sx={{
                  fontSize: {
                    xs: '0.9rem',
                    sm: '1rem',
                    md: '1.1rem'
                  }
                }}>
                  {option.label}
                </Typography>
              </Box>
            </ToggleButton>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
