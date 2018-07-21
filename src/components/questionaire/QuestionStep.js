import React from 'react';
import { StyleSheet, Text, View, Dimensions, TouchableOpacity, ImageBackground, FlatList, Image, ScrollView } from 'react-native';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
const { height, width } = Dimensions.get('window');

import Header from '../Header';

import { createIconSetFromIcoMoon } from 'react-native-vector-icons';
import icoMoonConfig from '../../selection.json';
const Icon = createIconSetFromIcoMoon(icoMoonConfig);

import { getQuestionGroup, getQuestionaire, answerQuestion } from '../../actions/index';
import IconFontAwesome from 'react-native-vector-icons/FontAwesome';

import HTML from 'react-native-render-html';
import LoaderWait from '../LoaderWait';
import StatusItem from './StatusItem';
import Option from '../shared/Option';
class QuestionStep extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            questionCategory: this.props.navigation.state.params.data,
            step: -1,
            questionaire: [],
            loader: true,

            selectedAnswers: [],
        };
        this.nextStep = this.nextStep.bind(this);
        this.prevStep = this.prevStep.bind(this);
        this.answerSelected = this.answerSelected.bind(this);
    }


    componentDidMount() {
    
        this.props.getQuestionaire(this.state.questionCategory.id_question_category).then(result=>{
            console.log(result);
            this.setState({ questionaire: result.result, loader: false });
        })
    }

    answerSelected(question, answer) {
        // if (this.state.selectedAnswers.indexOf(answer.id_answer) == -1)
        //     this.setState({selectedAnswers: this.state.selectedAnswers.concat([answer.id_answer])});
        this.setState({selectedAnswers: [answer.id_answer] });
    }

    nextStep(skip) {
        if (((this.state.questionaire.length ) > this.state.step)) {
            if (this.state.step == -1)
                this.setState({step: this.state.step + 1, selectedAnswers: []});  
            else {

                this.props.answerQuestion(this.state.questionCategory.id_question_category,  this.state.questionaire[this.state.step].id_question, this.state.selectedAnswers.join(','))
                .then(res=>{
                    if (this.state.questionaire.length -1 != this.state.step)
                        this.setState({step: this.state.step + 1, selectedAnswers:  this.state.questionaire[this.state.step + 1].selected_answers ? this.state.questionaire[this.state.step + 1].selected_answers.split(',') : []});  
                    
                })   
            }
        } 
    }

    prevStep() {
        if (this.state.step > 0)
            this.setState({step: this.state.step - 1});
    }

    renderStep0() {
        const {questionCategory, questionaire} = this.state;
        return <View style={{flex: 1, backgroundColor: '#ffffff'}}>
                            

            <Text style={{ height: 26, fontFamily: 'DINPro-Light', fontSize: 22, color: '#454545', marginTop: 20, alignItems: 'center', textAlign: 'center'}}>Thema Personal</Text>

            <View style={{ flex: 1, alignItems: 'center'}}>
                <View style={[styles.textBlock, { marginTop: 0 }]}>
                    <Text style={styles.textContent}>Lorem ipsum dolor amet yOLO hexagon pok pok cardigan lomo biodiesel, normcore deep v snackwave ugh. 
                    </Text>
                    <HTML html={"<div style='font-family: DINPro-Light !important'>" + questionCategory.description + "</div>"} />

                    <Text style={styles.textContent}> Zunächst benötigen wir ein paar allgemeine Angaben von Dir:</Text>
                </View>

                <View style={{ flex: 1, alignItems: 'flex-start', justifyContent: 'flex-start', margin: 10 }}>
                    <TouchableOpacity style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }} onPress={()=> this.nextStep()}>
                        <View style={{ backgroundColor: '#FFFFFF', alignItems: 'center', justifyContent: 'center', width: 220, height: 52, borderRadius: 52, borderColor: questionCategory.color, borderWidth: 1 }}>
                            <Text style={{ fontFamily: 'DINPro-Light', fontSize: 17, color: questionCategory.color }}>Weiter</Text>
                        </View>
                    </TouchableOpacity>
                </View>

            </View>
        </View>
    }

    renderStep() {
        const {questionCategory, questionaire, step} = this.state;
        let question = questionaire[step];
        return <View style={{flex: 1, backgroundColor: '#ffffff', width: width - 20 }}>
            <Text style={{ height: 26, fontFamily: 'DINPro-Light', fontSize: 22, color: questionCategory.color, margin: 20, alignItems: 'center', textAlign: 'left'}}>Frage {step + 1}</Text>

            <View style={{ flex: 1 }}>
                <View style={[styles.textBlock, { marginTop: 0 }]}>

                    <Text style={styles.textContent}>
                        {question.name}
                    </Text>
                </View>

                <ScrollView style={{ flex: 1, margin: 10}}>
                    <View  style={{ flexDirection: 'column', margin: 10}}>

                        {question.answers.map((answer, index)=>{
                            return (
                                <View style={{ flexDirection: 'row', marginBottom: 10 }} key={index}>
                                    <TouchableOpacity style={{ flexDirection: 'row' }} onPress={()=>this.answerSelected(question, answer)}>
                                        <Option selected={this.state.selectedAnswers.indexOf(answer.id_answer) != -1} style={{}} color={questionCategory.color}/>
                                        <Text style={{color: questionCategory.color, marginLeft: 10}}>{answer.name}</Text>
                                    </TouchableOpacity>
                                </View>
                            )
                        })}

                    </View>
                </ScrollView>

                {/*<View style={{ flex: 1, margin: 10}}>
                    <View  style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', margin: 10}}>

                        <View style={{ flexDirection: 'column', justifyContent: 'center', alignItems: 'center', margin: 10 }}>
                            <Text style={{color: questionCategory.color, marginBottom: 10}}>1</Text>
                            <Option selected={true} style={{}} color={questionCategory.color}/>
                        </View>
                        <View style={{ flexDirection: 'column', justifyContent: 'center', alignItems: 'center', margin: 10 }}>
                            <Text style={{color: questionCategory.color, marginBottom: 10}}>2</Text>
                            <Option selected={true} style={{}} color={questionCategory.color}/>
                        </View>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-start', margin: 10}}>
                        <Text style={{width: 100}}>Stimme überhaupt nicht zu</Text>
                        <Text style={{width: 100, textAlign: 'right'}}>Stimme voll und ganz zu</Text>
                    </View>
                </View>*/}

                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', margin: 10 }}>
                    <TouchableOpacity style={{ flex: 1, alignItems: 'center', justifyContent: 'flex-start', flexDirection: 'row'  }} onPress={()=> this.prevStep()}>
                        <IconFontAwesome name="angle-left" style={{marginRight: 5}} size={15} color='#000000' />
                        <Text style={{ fontFamily: 'DINPro-Light', fontSize: 17, color: '#000000' }}>Back</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }} onPress={()=> this.nextStep(true)}>
                        <Text style={{ fontFamily: 'DINPro-Light', fontSize: 17, color: '#838383' }}>Skip</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={{ flex: 1, alignItems: 'center', justifyContent: 'flex-end', flexDirection: 'row' }} onPress={()=> this.nextStep()}>
                        <Text style={{ fontFamily: 'DINPro-Light', fontSize: 17, color: questionCategory.color }}>Next</Text>
                        <IconFontAwesome name="angle-right"  style={{marginLeft: 5}} size={15} color={questionCategory.color} />
                    </TouchableOpacity>
                        

                </View>
            </View>
        </View>
    }

    render() {
        const {questionCategory, questionaire, step} = this.state;

        return (
            <View style={styles.container}>
                <View style={{ flex: 1 }}>
                    <Header goBack={() => this.props.navigation.navigate('OverviewStatus')} backgroundcolor={questionCategory.color} headerTitle={'FRAGEBOGEN'} leftButton={true} leftButtonName={'arrow'} leftButtonColor={'#ffffff'} showNext={false} rightButton={true} headColor={'#ffffff'} navigation={this.props.navigation} />
                </View>
                <View style={{ flex: 9,  alignItems: 'center', justifyContent: 'center', backgroundColor: questionCategory.color}}>
                
                    {this.state.loader ?
                        <View style={{ flex: 1, backgroundColor: '#FFFFFF', width: width }}><LoaderWait /></View> :
                        <View style={styles.intro}> 
                            <View style={{height: 80, marginBottom: 10}}> 
                                <StatusItem item={questionCategory} asHeader={true} navigation={this.props.navigation}/>
                            </View>
                            {step == -1 ?
                                this.renderStep0()
                                :
                                this.renderStep()  
                            }
                        </View>
                    }
                </View>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

    intro: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        margin: 10,
    },

    textBlock: {
        alignItems: 'flex-start',
        flexDirection: 'column',
        margin: 20,
    },

    textContent: {
        fontFamily: 'DINPro-Light',
        fontSize: 16,
        color: '#838383',
        textAlign: 'center'
    },
});

export default connect(state => {
    const user_id = state.validUser.user.id || '';
    return {
        user_id,
    }
}, dispatch => {
    return bindActionCreators({  getQuestionGroup, getQuestionaire, answerQuestion  }, dispatch)
})(QuestionStep);