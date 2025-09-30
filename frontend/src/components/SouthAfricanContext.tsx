import React, { useState, useEffect } from 'react';
import { southAfricanContextService } from '../services/southAfricanContextService';
import { localMarketService } from '../services/localMarketService';
import Icon from './Icon';

interface SouthAfricanContextProps {
  children: React.ReactNode;
}

interface ContextData {
  currentLocation: string;
  province: string;
  language: string;
  currency: string;
  timezone: string;
  weather: {
    temperature: number;
    condition: string;
    season: string;
  };
  loadshedding: {
    stage: number;
    nextOutage?: string;
    affected: boolean;
  };
  events: Array<{
    name: string;
    date: string;
    impact: string;
  }>;
}

const SouthAfricanContext: React.FC<SouthAfricanContextProps> = ({ children }) => {
  const [contextData, setContextData] = useState<ContextData | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const initializeSouthAfricanContext = async () => {
      try {
        // Get user's location (in a real app, this would be from GPS or user selection)
        const userLocation = 'Cape Town'; // Default to Cape Town
        const userProvince = 'Western Cape';
        const userLanguage = 'en'; // Default to English
        const userCurrency = 'ZAR';

        // Get local market data
        const weatherData = await localMarketService.getWeatherData(userLocation);
        const loadsheddingData = await localMarketService.getLoadsheddingSchedule(userLocation);
        const events = await localMarketService.getLocalEvents(userLocation, new Date().toISOString(), new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString());

        // Get South African context
        const saContext = southAfricanContextService.getSouthAfricanBusinessInfo();
        const saWeather = southAfricanContextService.getSouthAfricanWeather();

        // Determine current season
        const currentMonth = new Date().getMonth();
        let currentSeason = 'summer';
        if (currentMonth >= 2 && currentMonth <= 4) currentSeason = 'autumn';
        else if (currentMonth >= 5 && currentMonth <= 7) currentSeason = 'winter';
        else if (currentMonth >= 8 && currentMonth <= 10) currentSeason = 'spring';

        const seasonData = saWeather.find(w => w.season === currentSeason);

        setContextData({
          currentLocation: userLocation,
          province: userProvince,
          language: userLanguage,
          currency: userCurrency,
          timezone: saContext.timezone,
          weather: {
            temperature: weatherData?.current?.temperature || seasonData?.averageTemperature.max || 25,
            condition: weatherData?.current?.condition || 'sunny',
            season: currentSeason
          },
          loadshedding: {
            stage: loadsheddingData?.stage || 0,
            nextOutage: loadsheddingData?.nextOutage?.startTime,
            affected: loadsheddingData?.schedule?.some(s => 
              new Date(s.date) >= new Date() && 
              new Date(s.date) <= new Date(Date.now() + 24 * 60 * 60 * 1000)
            ) || false
          },
          events: events.slice(0, 3).map(event => ({
            name: event.name,
            date: event.startDate,
            impact: event.impact
          }))
        });

        setIsLoading(false);
      } catch (error) {
        console.error('Error initializing South African context:', error);
        setIsLoading(false);
      }
    };

    initializeSouthAfricanContext();
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading South African context...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="south-african-context">
      {/* South African Context Banner */}
      {contextData && (
        <div className="bg-gradient-to-r from-green-600 to-yellow-500 text-white py-2 px-4 text-center text-sm">
          <div className="flex items-center justify-center space-x-4">
            <span>🇿🇦</span>
            <span>Location: {contextData.currentLocation}, {contextData.province}</span>
            <span>•</span>
            <span>Weather: {contextData.weather.temperature}°C, {contextData.weather.condition}</span>
            <span>•</span>
            <span>Season: {contextData.weather.season}</span>
            {contextData.loadshedding.affected && (
              <>
                <span>•</span>
                <span className="bg-red-600 px-2 py-1 rounded text-xs">
                  ⚡ Loadshedding Stage {contextData.loadshedding.stage}
                </span>
              </>
            )}
            {contextData.events.length > 0 && (
              <>
                <span>•</span>
                <span className="bg-blue-600 px-2 py-1 rounded text-xs">
                  🎉 {contextData.events[0].name}
                </span>
              </>
            )}
          </div>
        </div>
      )}

      {/* Main Content */}
      {children}

      {/* South African Footer Context */}
      <div className="bg-gray-900 text-white py-4">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* South African Information */}
            <div>
              <h3 className="font-bold text-lg mb-3">🇿🇦 South Africa</h3>
              <div className="space-y-2 text-sm">
                <p><strong>Capital:</strong> Cape Town (Legislative), Pretoria (Executive), Bloemfontein (Judicial)</p>
                <p><strong>Population:</strong> 60.6 million</p>
                <p><strong>Languages:</strong> 11 official languages</p>
                <p><strong>Currency:</strong> South African Rand (ZAR)</p>
                <p><strong>Timezone:</strong> SAST (UTC+2)</p>
              </div>
            </div>

            {/* Local Information */}
            <div>
              <h3 className="font-bold text-lg mb-3">📍 Local Context</h3>
              <div className="space-y-2 text-sm">
                <p><strong>Current Location:</strong> {contextData?.currentLocation || 'Cape Town'}</p>
                <p><strong>Province:</strong> {contextData?.province || 'Western Cape'}</p>
                <p><strong>Weather:</strong> {contextData?.weather.temperature}°C, {contextData?.weather.condition}</p>
                <p><strong>Season:</strong> {contextData?.weather.season}</p>
                {contextData?.loadshedding.affected && (
                  <p><strong>Loadshedding:</strong> Stage {contextData.loadshedding.stage}</p>
                )}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-bold text-lg mb-3 flex items-center">
                <Icon name="Link" size="sm" className="mr-2" />
                Quick Links
              </h3>
              <div className="space-y-2 text-sm">
                <a href="#" className="block hover:text-blue-400">Emergency Services: 10111</a>
                <a href="#" className="block hover:text-blue-400">Tourist Information</a>
                <a href="#" className="block hover:text-blue-400">Local Events</a>
                <a href="#" className="block hover:text-blue-400">Weather Updates</a>
                <a href="#" className="block hover:text-blue-400">Loadshedding Schedule</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SouthAfricanContext;
