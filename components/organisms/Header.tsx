import React from 'react'
import { Image, Text, View } from 'react-native';
import { styles } from '../../styles/styles';

function Header() {
    return (
        <>
            <View style={styles.header}>
                <Image
                    source={require("../../assets/imgs/user.png")}
                    style={styles.userImg}
                />
                <Image
                    source={require("../../assets/icons/search.png")}
                    style={styles.searchImg}
                />
            </View>
            <View style={styles.header}>
                <View style={{ flexDirection: "column" }}>
                    <Image
                        source={require("../../assets/imgs/logo.png")}
                        style={styles.logoImg}
                    />
                    <Text>DELIVER APP</Text>
                </View>
                <View style={{ flexDirection: "row", marginBottom: -16 }}>
                    <Image
                        source={require("../../assets/imgs/hand.png")}
                        style={styles.handImg}
                    />
                    <View style={{ top: "100%", height: 6 }}>

                        <Image
                            source={require("../../assets/icons/ellipse.png")}
                            style={styles.ellipseImg}
                        />
                    </View>
                </View>
            </View>
        </>
    );
}

export default Header