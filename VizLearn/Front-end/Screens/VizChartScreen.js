import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { AreaChart, Grid } from 'react-native-svg-charts';
import { Line, G, Circle, Text as SVGText } from 'react-native-svg';
import Geolocation from 'react-native-geolocation-service';

const VideoAnalyticsScreen = () => {
  const [videoStarted, setVideoStarted] = useState(false);
  const [startTime, setStartTime] = useState(0);
  const [endTime, setEndTime] = useState(0);
  const [userCountry, setUserCountry] = useState(null);
  const [user1ActivityData, setUser1ActivityData] = useState([]);
  const [user2ActivityData, setUser2ActivityData] = useState([]);

  const onVideoStart = () => {
    setVideoStarted(true);
    setStartTime(new Date().getTime());
  };

  const onVideoEnd = () => {
    setEndTime(new Date().getTime());
    setVideoStarted(false);
  };

  useEffect(() => {
    Geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        // You can use a geocoding API to get the country from latitude and longitude.
        setUserCountry('Country'); // Replace 'Country' with the fetched country.
      },
      (error) => console.log('Error getting user location:', error),
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
    );

    // Generate random user activity data for user1 and user2
    const generateRandomActivityData = () => {
      const data = [];
      for (let i = 0; i < 12; i++) {
        // Generate random user activity for each month (12 months)
        data.push(Math.floor(Math.random() * 100));
      }
      return data;
    };

    setUser1ActivityData(generateRandomActivityData());
    setUser2ActivityData(generateRandomActivityData());
  }, []);

  const axesSvg = { fontSize: 10, fill: 'grey' };
  const verticalContentInset = { top: 10, bottom: 10 };
  const xAxisHeight = 30;

  return (
    <View style={{ flex: 1 }}>
      {/* ... (existing code remains the same) */}
      {userCountry && (
        <View style={{ height: 250 }}>
          <AreaChart
            style={{ flex: 1 }}
            data={user1ActivityData}
            svg={{ fill: 'rgba(134, 65, 244, 0.5)' }}
            contentInset={{ ...verticalContentInset, left: 20, right: 20 }}
            yMin={0}
            yMax={100}
          >
            <Grid />
            <Line />
             </AreaChart>
          <AreaChart
            style={{ flex: 1, marginTop: -250 }}
            data={user2ActivityData}
            svg={{ fill: 'rgba(255, 0, 0, 0.5)' }}
            contentInset={{ ...verticalContentInset, left: 20, right: 20 }}
            yMin={0}
            yMax={100}
          >
            <Grid />
            <Line />
          </AreaChart>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            {user1ActivityData.map((value, index) => (
              <SVGText
                key={index}
                x={index * 20}
                y={225}
                fontSize={10}
                fill="grey"
                textAnchor="middle"
              >
                {`Month ${index + 1}`}
              </SVGText>
            ))}
          </View>
          <View style={{ position: 'absolute', left: 0, right: 0, bottom: 0 }}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
              <SVGText x={10} y={225} fontSize={10} fill="grey" textAnchor="middle">
                0
              </SVGText>
              <SVGText x={10} y={25} fontSize={10} fill="grey" textAnchor="middle">
                100
              </SVGText>
            </View>
            <SVGText
              x={80}
              y={240}
              fontSize={10}
              fill="grey"
              textAnchor="middle"
            >{`User Activity`}</SVGText>
          </View>
          {/* Legend */}
          <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
            <View style={{ flexDirection: 'row', alignItems: 'center', marginRight: 10 }}>
              <View style={{ width: 10, height: 10, backgroundColor: 'rgba(134, 65, 244, 0.5)', marginRight: 5 }} />
              <Text>User 1</Text>
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <View style={{ width: 10, height: 10, backgroundColor: 'rgba(255, 0, 0, 0.5)', marginRight: 5 }} />
              <Text>User 2</Text>
            </View>
          </View>
        </View>
      )}
    </View>
  );
};

export default VideoAnalyticsScreen;
