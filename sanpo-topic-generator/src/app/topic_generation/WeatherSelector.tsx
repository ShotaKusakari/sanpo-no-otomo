import { Box, ToggleButton, Typography, Grid, CircularProgress } from '@mui/material';
import { useEffect, useState, useCallback } from 'react';
import { JSX } from 'react';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import CloudIcon from '@mui/icons-material/Cloud';
import UmbrellaIcon from '@mui/icons-material/Umbrella';
import { Database } from '@/../database.types';

type Weather = Database['public']['Tables']['weather_types']['Row'];

interface WeatherSelectorProps {
  selectedWeatherId: string;
  onWeatherSelect: (weather: string) => void;
}

const SUNNY_ID = 'cc7a0a0d-f3e1-0b59-9f8d-7674ff94ed54';
const CLOUDY_ID = '0f742b2e-e147-ba50-bb44-a42bd083b64e';
const RAIN_ID = 'b47687ca-3bda-2e2f-e1a8-135d9f3d77c6';

const weatherIconMap: { [key: string]: JSX.Element } = {
  [SUNNY_ID]: <WbSunnyIcon />,
  [CLOUDY_ID]: <CloudIcon />,
  [RAIN_ID]: <UmbrellaIcon />,
};

export default function WeatherSelector({ selectedWeatherId, onWeatherSelect }: WeatherSelectorProps) {
  const [weatherOptions, setWeatherOptions] = useState<Weather[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const requestFetchWeatherData = async () => {
      setIsLoading(true);
      try {
        const response = await fetch('/api/serverWeatherData');
        const jsonData = await response.json();

        if (jsonData.error) {
          console.error('API Error:', jsonData.error);
          setWeatherOptions([]);
          return;
        }

        setWeatherOptions(jsonData);
      } catch (error) {
        console.error("Failed to fetch weather data:", error);
        setWeatherOptions([{id: '', name: '天気情報を取得できませんでした'}]);
      } finally {
        setIsLoading(false);
      }
    };

    requestFetchWeatherData();
  }, []);

  const handleWeatherSelect = useCallback((weatherId: string) => {
    onWeatherSelect(weatherId);
  }, [onWeatherSelect]);

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
      {isLoading ? (
        <Box sx={{ display: 'flex', justifyContent: 'center', p: 4 }}>
          <CircularProgress />
        </Box>
      ) : (
        <Grid container spacing={2} justifyContent="center">
          {weatherOptions.map((option) => (
            <Grid size={{xs:12, sm:4}} key={option.id}>
              <ToggleButton
                value={option.id}
                selected={selectedWeatherId === option.id}
                onChange={() => handleWeatherSelect(option.id)}
                disabled={isLoading}
                sx={{
                  width: '100%',
                  borderRadius: 4,
                  p: 2,
                  border: '2px solid #e0e0e0',
                  '&.Mui-selected': {
                    background: 'linear-gradient(45deg, #4CAF50 30%, #81C784 90%) !important',
                    color: 'white !important',
                  },
                  '&:hover': {
                    background: '#f5f5f5',
                  },
                  '@media (hover: none)': {
                    '&.Mui-selected': {
                      background: 'linear-gradient(45deg, #4CAF50 30%, #81C784 90%) !important',
                      color: 'white !important',
                    },
                    '&:hover': {
                      background: 'none',
                    }
                  }
                }}
              >
              <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 1 }}>
                {weatherIconMap[option.id] || null}
                <Typography sx={{
                  fontSize: {
                    xs: '0.9rem',
                    sm: '1rem',
                    md: '1.1rem'
                  }
                }}>
                  {option.name}
                </Typography>
              </Box>
              </ToggleButton>
            </Grid>
          ))}
        </Grid>
      )}
    </Box>
  );
}
