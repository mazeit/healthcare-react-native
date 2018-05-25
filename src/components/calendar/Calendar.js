import React from 'react';
import { StyleSheet, Text, View, PanResponder, Animated, Dimensions, Image } from 'react-native';




const dimention = Dimensions.get('window');
const dayName = ['SO', 'MO', 'DI', 'MI', 'DO', 'FR', 'SA'];
const monthName = ['Jan', 'feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
const monthDays = ['31', '28', '31', '30', '31', '30', '31', '31', '30', '31', '30', '31'];


class DateContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            dateColor: (new Date().getDate() == this.props.date ) ? '#4AB3E2' : this.props.defaultColor,
        };
    }

    componentWillReceiveProps (nextProps) {
        this.setState({ dateColor: (new Date().getDate() == nextProps.date ) ? '#4AB3E2' : nextProps.defaultColor})
    }

    render() {
        let date = this.props.date;
        
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', margin: 5, marginBottom: 10 }}>
                <Text style={{ fontFamily: 'DINPro-Medium', fontSize: 18, color: this.state.dateColor }}>{date}</Text>
                {/* <View style={{ width: 5, height: 5, borderRadius: 5, borderWidth: 0.5, borderColor: "#AE0069"}}></View> */}
            </View>
        );
    }
}

class Week extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            defaultColor: '#838383',
        };

    }

    render() {
        let prevMonth = false;
        let currentDate = this.props.today.getDate();
        let currentDay = this.props.today.getDay();
        let currentMonth = this.props.today.getMonth();
        let startDate = currentDate;
        let startDay = currentDay;
        if (this.props.monthView) {

            startDate = this.props.firstDate;
            startDay = this.props.firstDay;
        }

        let week = [{date: 0, color: '#838383'}, {date: 0, color: '#838383'}, {date: 0, color: '#838383'}, {date: 0, color: '#838383'}, {date: 0, color: '#838383'}, {date: 0, color: '#838383'}, {date: 0, color: '#838383'}];
        let j = 0;
        prevMonth = false;
        for (let i = startDay; i >= 0; i--) {
            
            if (startDate - j <= 0) {
                prevMonth = true;
                j = 0;
                startDate = monthDays[currentMonth];
            }
            week[i].date = startDate - j;
            week[i].color = prevMonth ? '#83838370' : '#838383';
            j++;

        }
        j = 1;
        startDate = currentDate;
        startDay = currentDay;
        if (this.props.monthView) {

            startDate = this.props.firstDate;
            startDay = this.props.firstDay;
        }
        prevMonth = false;
        for (let i = startDay + 1; i < 7; i++) {
            
            if (startDate + j > monthDays[currentMonth]) {
                prevMonth = true;
                j = 1;
                startDate = 0;
            }
            week[i].date = startDate + j;
            week[i].color = prevMonth ? '#83838370' : '#838383';
            j++;
        }

        // console.log('....../////',week)
        return (
            <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', }}>
                {
                    week.map((item, i) => {
                        return <DateContainer date={item.date} key={i} defaultColor={ item.color}/>
                    })
                }
            </View>
        );
    }
}

export default class Calendar extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            weekView: '180deg',
            monthView: true,
        };
        this.monthlyView = this.monthlyView.bind(this);
        this.weeklyView = this.weeklyView.bind(this);
        this.calculateWeek = this.calculateWeek.bind(this);

        this.animated = new Animated.Value(0);

    }

    componentWillMount() {
        this._panResponder = PanResponder.create({

            onMoveShouldSetResponderCapture: () => true,

            onMoveShouldSetPanResponderCapture: () => true,

            onPanResponderGrant: (e, gestureState) => {

            },

            onPanResponderMove: () => {
                //code during Move
            },

            onPanResponderRelease: (e, { dx, dy }) => {

                if (dy > dx && dy > 0) {

                    this.monthlyView()
                }
                if (-(dy) > dx && dy < 0) {

                    this.weeklyView()
                }
            }
        });
    }


    calculateWeek(year, month_number) {

        var firstOfMonth = new Date(year, month_number - 1, 1);
        var lastOfMonth = new Date(year, month_number, 0);

        var used = firstOfMonth.getDay() + 6 + lastOfMonth.getDate();

        return Math.ceil(used / 7);
    }
    monthlyView() {

        Animated.timing(this.animated, {
            toValue: 0,
            duration: 100,
        }).start(() => {

            this.setState({ weekView: '180deg', monthView: true })

        });

    }

    weeklyView() {
        Animated.timing(this.animated, {
            toValue: 1,
            duration: 100,
        }).start(() => {

            this.setState({ weekView: '0deg', monthView: false })

        });

    }

    render() {

        let calendar = [];
        const height = this.animated.interpolate({
            inputRange: [0, 1],
            outputRange: [270, 118]
        });

        let noOfWeeks = 1;
        let date = this.props.today.getDate();

        if (this.state.monthView) {
            let year = this.props.today.getFullYear();
            let month_number = this.props.today.getMonth() + 1;
            noOfWeeks = this.calculateWeek(year, month_number) - 1;
            date = 1;

        };
        for (let i = 0; i < noOfWeeks; i++) {

            calendar.push(<Week today={this.props.today} firstDay={this.props.firstDay} firstDate={date} monthView={this.state.monthView} key={i} />);

            date = date + 7;


        }


        return (
            <Animated.View {...this._panResponder.panHandlers} style={[{ backgroundColor: '#F5F5F5', opacity: 0.8, marginBottom: 10 }, { height }]}>
                <View style={{ position: 'absolute', top: 0, left: 0, width: dimention.width, alignItems: 'center', justifyContent: 'center' }}>
                    <View style={{ margin: 20, marginBottom: 10, height: 45, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', width: dimention.width }}>
                        {
                            dayName.map((item, i) => {
                                return <View key={i} style={{ flex: 1, alignItems: 'center', justifyContent: 'center', }}>
                                    <Text style={{ fontFamily: 'DINPro-Medium', fontSize: 12, color: '#454545' }}>{item}</Text>
                                </View>
                            })
                        }
                    </View>
                    <View style={{ alignItems: 'center', justifyContent: 'center', width: dimention.width, marginTop: -10 }}>
                        {
                            calendar.map((item, i) => {
                                return item
                            })}
                    </View>
                    <View style={{ alignItems: 'center', justifyContent: 'center', width: 20, height: 20, borderRadius: 20, backgroundColor: '#F5F5F5', opacity: 0.8, marginTop: 4 }}>
                        <Image style={{ width: 15, height: 15, transform: [{ rotateX: this.state.weekView }] }} source={require('../../../assets/icons/little_arrow_grey.png')} />
                    </View>


                </View>
            </Animated.View>
        );
    }
}
