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
import InformationHouseExpanded from '../../InformationHouseExpanded/Index'


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
                            right: 7,
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
                    <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ alignContent: "flex-start" }}>


                        <Image source={house1} style={{ width: 380, height: "100%", }} />
                        <Image source={house2} style={{ width: 380, height: "100%", }} />
                        <Image source={house3} style={{ width: 380, height: "100%", }} />


                    </ScrollView>
                    <InformationHouseExpanded 
                    Adress={this.props.Adress} 
                    Price={this.props.Price} 
                    Meters={this.props.Meters}
                    Bedrooms={this.props.Bedrooms}
                    Vacancy={this.props.Vacancy}
                    Bathroom={this.props.Bathrooms}
                    />


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
