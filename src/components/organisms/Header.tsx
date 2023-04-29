import React, { useEffect, useRef } from 'react'
import { Animated, Easing, Image, StyleSheet, Text, View } from 'react-native';
import { styles } from '../../styles/styles';

function Header() {
    const animation = new Animated.Value(0)
    // const fade = new Animated.Value(0)
    const fadeAnim = useRef(new Animated.Value(0)).current;
    const rotateAnim = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        Animated.timing(animation, {
            toValue: -70,
            duration: 1000,
            useNativeDriver: false
        }).start()
        Animated.timing(fadeAnim, {
            toValue: 1,
            duration: 2000,
            useNativeDriver: true,
        }).start();
        Animated.timing(rotateAnim, {
            toValue: 1,
            duration: 3000,
            easing: Easing.linear,
            useNativeDriver: true,
        }).start();
    })
    const animatedStyle = {
        transform: [{ translateX: animation }]
    }
    const spin = rotateAnim.interpolate({
        inputRange: [0, 1],
        outputRange: ['0deg', '65deg']
    })
    const spinStyle = { transform: [{ rotate: spin }] }
    return (
        <>
            <View style={styles.header}>
                <Image
                    source={require("../../../assets/imgs/user.png")}
                    style={styles.userImg}
                />
                <Image
                    source={require("../../../assets/icons/search.png")}
                    style={styles.searchImg}
                />
            </View>
            <View style={styles.header}>
                <View style={{ flexDirection: "column" }}>
                    <Image
                        source={require("../../../assets/imgs/logo.png")}
                        style={styles.logoImg}
                    />
                    <Text style={{ fontFamily: "Gotham-Bold" }}>DELIVER APP</Text>
                </View>
                <View style={{ flexDirection: "row", marginBottom: -16 }}>
                    <Animated.View style={[stylesB.star1, { opacity: fadeAnim }, spinStyle]}>
                        <Image
                            source={require("../../../assets/icons/starCross.png")}
                            style={{ width: 12, height: 12 }}
                        />
                    </Animated.View>
                    <Animated.View style={[stylesB.star2, { opacity: fadeAnim }]}>
                        <Image
                            source={require("../../../assets/icons/starCross.png")}
                            style={{ width: 12, height: 12 }}
                        />
                    </Animated.View>
                    <Image
                        source={require("../../../assets/imgs/hand.png")}
                        style={styles.handImg}
                    />
                    <Animated.View style={[stylesB.star3, { opacity: fadeAnim }, spinStyle]}>
                        <Image
                            source={require("../../../assets/icons/starCross.png")}
                            style={{ width: 12, height: 12 }}
                        />
                    </Animated.View>
                    <Animated.View style={[stylesB.star4, { opacity: fadeAnim }, spinStyle]}>
                        <Image
                            source={require("../../../assets/icons/starCross.png")}
                            style={{ width: 12, height: 12 }}
                        />
                    </Animated.View>
                    <Animated.View style={[stylesB.box, animatedStyle]}>
                        <Image
                            source={require("../../../assets/imgs/moto.png")}
                            style={{ width: 106, height: 130 }}
                        />
                    </Animated.View>
                    <View style={{ top: "100%", height: 6 }}>

                        <Image
                            source={require("../../../assets/icons/ellipse.png")}
                            style={styles.ellipseImg}
                        />
                    </View>
                </View>
            </View>
        </>
    );
}
const stylesB = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    box: {
        position: "absolute",
        zIndex: -1
    },
    star1: {
        position: "absolute",
        left: -30,
        top: -40
    },
    star2: {
        position: "absolute",
        left: 10,
        top: -70
    },
    star3: {
        position: "absolute",
        right: 20,
        top: -40
    },
    star4: {
        position: "absolute",
        right: 5,
        top: 2
    }
});
export default Header