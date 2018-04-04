import React from 'react';
import { StyleSheet, Text, View, PanResponder, Image, Animated, TextInput, Dimensions, ImageBackground } from 'react-native';




const dimention = Dimensions.get('window');
const dayName = ['MO', 'DI', 'MI', 'DO', 'FR', 'SA', 'SO'];
const monthName = ['Jan', 'feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
const monthDays = ['31', '28', '31', '30', '31', '30', '31', '31', '30', '31', '30', '31'];
let noOfWeeks = 1;


class Date extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render() {

        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text style={{ fontFamily: 'DINPro-Medium', fontSize: 12, color: '#454545' }}>{this.props.date}</Text>
            </View>
        );
    }
}

class Week extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            week: [],

        };
        this.updateWeek = this.updateWeek.bind(this);

    }


    componentDidMount() {
        this.updateWeek();
    }

    updateWeek() {
        let date = new Date();
        console.log('date & day are>>>>>', date);
        let currentDate = date.getDate();
        let currentDay = date.getDay();
        console.log('date & day are>>>>>', currentDate, currentDay);
        let week = [0, 0, 0, 0, 0, 0, 0];
        let j = 1;
        for (let i = currentDay - 2; i >= 0; i--) {
            date[i] = currentDate - j;
            j--;
        }
        j = 1;
        for (let i = currentDay; i <= 6; i++) {
            week[i] = currentDate + j;
            j++;
        }
        week[currentDay - 1] = currentDate;
        this.setState({ week: week })
    }


    render() {

        return (
            <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                {
                    this.state.week.map((item, i) => {
                        return <Date date={item} key={i} />
                    })
                }
            </View>
        );
    }
}

export default class Example extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            // currentMonth: new Date().getMonth(),
            // currentYear: new Date().getFullYear(),
            // pan: new Animated.ValueXY(),
        };
        this.show = this.show.bind(this);
        this.hide = this.hide.bind(this);
        // this.updateMonth = this.updateMonth.bind(this);
        // this.calculateWeek = this.calculateWeek.bind(this);

        this.open = new Animated.Value(0);

    }

    componentWillMount() {
        this._panResponder = PanResponder.create({

            onMoveShouldSetResponderCapture: () => true,

            onMoveShouldSetPanResponderCapture: () => true,

            // Initially, set the value of x and y to 0 (the center of the screen)
            onPanResponderGrant: (e, gestureState) => {
                // this.state.pan.setOffset({x: this.state.pan.x._value, y: this.state.pan.y._value});
                // this.state.pan.setValue({x: 0, y: 0});
            },

            // When we drag/pan the object, set the delate to the states pan position
            onPanResponderMove: () => {
                //code during Move
            },

            onPanResponderRelease: (e, { dx, dy }) => {
                // this.state.pan.flattenOffset();
                console.log('in Pan responder');
                if (dy > dx && dy > 0) {
                    console.log('in condition', dy, dx);
                    this.show()
                }
                if (-(dy) > dx && dy < 0) {
                    console.log('in else', dy, dx);
                    this.hide()
                }
            }
        });
    }




    show() {
        // this.setState({ open: true})
        // console.log('in move function');
        Animated.timing(this.open, {
            toValue: 1,
            duration: 100,
        }).start(() => this.updateMonth());
    }

    hide() {
        // this.setState({ open: true})
        Animated.timing(this.open, {
            toValue: 0,
            duration: 100,
        }).start(() => this.updateCelendar());
    }

    render() {

        const height = this.open.interpolate({
            inputRange: [0, 1],
            outputRange: [55, 275]
        });

        let calendar = [];

        for (let i = 0; i < noOfWeeks; i++) {
            calendar.push(<Week key={i} />);
        }

        return (
            <View style={{ flex: 1 }}>
                <View {...this._panResponder.panHandlers} style={{ position: 'absolute', top: 0, left: 0, width: dimention.width, alignItems: 'center', justifyContent: 'center' }}>
                    <View style={{ margin: 20, height: 45, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', width: dimention.width }}>
                        {
                            dayName.map((item, i) => {
                                return <View key={i} style={{ flex: 1, alignItems: 'center', justifyContent: 'center', }}>
                                    <Text style={{ fontFamily: 'DINPro-Medium', fontSize: 12, color: '#454545' }}>{item}</Text>
                                </View>
                            })
                        }
                    </View>
                    <Animated.View style={[{ alignItems: 'center', justifyContent: 'center', backgroundColor: '#FFFFFF80', width: dimention.width }, { height }]}>
                        {calendar}
                    </Animated.View>


                </View>
            </View>
        );
    }
}
