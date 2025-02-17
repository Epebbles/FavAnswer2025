import { StyleSheet, View, Animated } from 'react-native';
import React, { useState, useRef, useEffect } from 'react';

// To view how this is done, here is the video: https://www.youtube.com/watch?v=J95MC2Koymc

interface StatusProps {
    height: number;
    backColor: string;
    statusColor: string;
    current: number;
    total: number;
  }

const Status: React.FC<StatusProps> = ({height, backColor, statusColor, current, total}) => {
    const [width, setWidth] = useState<number>(0);
    const animatedValue = useRef(new Animated.Value(-1000)).current;
    const reactive = useRef(new Animated.Value(-1000)).current;

    useEffect(()=> {
        Animated.timing(animatedValue, {
            toValue: reactive,
            duration: 300,
            useNativeDriver: true,
        }).start();
    }, []);

    useEffect(()=> {
        reactive.setValue(-width + (width * current) / total);
    },[current, width, total]);

    return (
            <View
                onLayout={e => setWidth(e.nativeEvent.layout.width)}
                style={[
                    styles.bar,
                    {
                        height: height,
                        backgroundColor: backColor,
                    },
                ]}
            >
                <Animated.View style={[
                    styles.animation,
                    {
                        height: height,
                        backgroundColor: statusColor,
                    },
                    {transform: [{translateX: animatedValue}]},
                ]}/>
            </View>
    );
};

export default Status;

const styles = StyleSheet.create({
    bar : {
        borderRadius: 10,
        overflow: 'hidden',
    },
    animation : {
        width: '100%',
        borderRadius: 10,
        position: 'absolute',
        left: 0,
        top: 0,
    },
});
