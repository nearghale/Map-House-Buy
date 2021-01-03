import React, { Component } from "react";

import {
    Animated,
    Dimensions,
    Text,
    Image,
    View,
    TouchableWithoutFeedback,
    ScrollView
} from "react-native";

const exit = require("../../../assets/Images/exit.png")
import styles from './Styles'
import house1 from '../../../assets/Images/Houses/House/house1.jpg'
import house2 from '../../../assets/Images/Houses/House/house2.jpg'
import house3 from '../../../assets/Images/Houses/House/house3.jpg'



const ELEMENT_HEIGHT = 200;
export default class ExpandedCard extends Component {
    state = { animatedValue: new Animated.Value(0) };
    render() {
        const { height: windowHeight } = Dimensions.get("window");
        const topTranslate = this.getTranslate([this.props.yOffset, 0]);
        const leftTranslate = this.getTranslate([this.props.xOffset, 0]);
        const rightTranslate = this.getTranslate([this.props.xOffset, 0]);
        const bottomTranslate = this.getTranslate([
            windowHeight - this.props.yOffset - ELEMENT_HEIGHT,
            0
        ]);
        return (
            <Animated.View
                style={[
                    {
                        position: "absolute",
                        top: topTranslate,
                        left: leftTranslate,
                        right: rightTranslate,
                        bottom: bottomTranslate,
                        backgroundColor: 'rgba(0,0,0,0.6)',
                        justifyContent: 'center',
                        alignItems: 'center'
                    }
                ]}
            >
                <TouchableWithoutFeedback onPress={this.unselectCard}>
                    <Animated.Text
                        style={{
                            position: "absolute",
                            top: 40,
                            right: 12,
                            zIndex: 200,

                            color: '#FFF',
                            fontSize: 30,
                            opacity: this.getTranslate([0, 1])
                        }}

                    >
                        X
                    </Animated.Text>
                </TouchableWithoutFeedback>

                <View style={styles.container}>
                    <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ paddingHorizontal: 15, alignContent: "center" }}>


                        <Image source={house1} style={{ width: 300, height: "100%", marginHorizontal: 10, alignSelf: "center" }} />
                        <Image source={house2} style={{ width: 300, height: "100%", marginHorizontal: 10, alignSelf: "center" }} />
                        <Image source={house3} style={{ width: 300, height: "100%", marginHorizontal: 10, alignSelf: "center" }} />


                    </ScrollView>

                    <Text style={styles.description}>

                        Lindo sobrado, inteiro reformado
                        Sala ampla em porcelanato, cozinha americana , lavabo, mais um cômodo nos fundos
                        3 dormitórios com armários, sendo 1 suíte, com varanda, quintal e entrada lateral, área de serviço, vaga para 2 carros
                    </Text>
                </View>


            </Animated.View>
        );
    }
    componentDidMount() {
        Animated.timing(this.state.animatedValue, {
            toValue: 1,
            duration: 500,
            useNativeDriver: false
        }).start();
    }
    unselectCard = () => {
        Animated.timing(this.state.animatedValue, {
            toValue: 0,
            duration: 500,
            useNativeDriver: false
        }).start(() => this.props.unselectCard());
    };
    getTranslate = outputRange => {
        return this.state.animatedValue.interpolate({
            inputRange: [0, 1],
            outputRange
        });
    };
}
