import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView, ImageBackground, Dimensions, TextInput, TouchableOpacity, Picker } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { createIconSetFromIcoMoon } from 'react-native-vector-icons';
import icoMoonConfig from '../../selection.json';
const Icon = createIconSetFromIcoMoon(icoMoonConfig);

const { height, width } = Dimensions.get('window');
import Header from '../Header';
    
import LoaderWait from '../LoaderWait';

import IconFontAwesome from 'react-native-vector-icons/FontAwesome';
import { getLangs, getGenders, updateProfileInfo, updateProfileimage, getCountries } from '../../actions';
import RNPickerSelect from 'react-native-picker-select';
import DateTimePicker from 'react-native-modal-datetime-picker';
import moment from 'moment';

import PhotoUpload from 'react-native-photo-upload'

class ProfileInformation extends React.Component { 
    constructor(props) {
        super(props);
        this.state = {
            mode: 'view',
            userEditData: Object.assign({}, this.props.user),
            GENDERS: [],
            LANGS: [],
            COUNTRIES: [],
            loader: true,

            isBirthdayPickerVisible: false
        };
        this.changeMode = this.changeMode.bind(this);
        this.saveProfile = this.saveProfile.bind(this);
        this.uploadPhoto = this.uploadPhoto.bind(this);
    }

    componentDidMount() {
        Promise.all([this.props.getGenders(), this.props.getLangs(), this.props.getCountries()]).then((res)=>{
            let countries = [];
            for (let key in res[2].countries)
                countries.push(res[2].countries[key])
            this.setState({GENDERS: res[0].genders, LANGS: res[1].languages, COUNTRIES: countries, loader: false});

        });
    }

    uploadPhoto(avatar) {
        this.setState({loader: true});
        this.props.updateProfileimage(avatar).then(res=>{
            console.log(res);

            setTimeout(()=>{
                this.setState({loader: false});
            }, 100);
        }).catch(err=>{
            console.log(err);
        })
    }

    changeMode(mode) {
        this.setState({mode});
    }

    saveProfile() {
        let {firstname, lastname, id_gender, id_lang, email, weight, goal, birthday, id_country, id_state, address1, address2, postcode} = this.state.userEditData;
        this.setState({loader: true});
        this.props.updateProfileInfo({firstname, lastname, id_gender, id_lang, email, weight, goal, birthday})
        .then(res=>{
            this.setState({
                mode: 'view',
                loader: false
            })
        });
    }
    
    render() {
        if (this.state.loader) {
            return (<View style={{ flex: 1 }}>
                        <View style={{ flex: 1, opacity: 0.8 }}><LoaderWait /></View>
                    </View>);
        }
        let {mode, userEditData, GENDERS, LANGS, COUNTRIES} = this.state;

        let user = (mode == 'edit' ? userEditData : this.props.user);

        let currentLang = {name: ''};
        let currentGender = {name: ''};
        let currentCountry = null;
        let currentState = null;
        console.log(user);
        GENDERS.map(g=>{ if (g.id+'' == user.id_gender+'') currentGender = g; });
        LANGS.map(g=>{ if (g.id_lang+'' == user.id_lang+'') currentLang = g; });
        COUNTRIES.map(g=>{ if (g.id_country+'' == user.id_country+'') currentCountry = g; });
        if (!currentCountry) {
            currentCountry = COUNTRIES[0];
        }
        console.log(currentCountry);
        currentCountry.states.map(g=>{ if (g.id_state+'' == user.id_state+'') currentState = g; });
        if (!currentState)
            currentState = currentCountry.states[0];
        return (
            <View style={{ flex: 1 }}>
                <View style={{ flex: 1 }}>
                    <Header goBack={()=>{mode == 'edit' ? this.setState({mode: 'view'}) : this.props.navigation.goBack()} } backgroundcolor={'#FFFFFF'} headerTitle={'MY PROFILE'} leftButton={true} leftButtonName={'arrow'} leftButtonColor={'#454545'} showNext={false} rightButton={true} headColor={'#454545'} navigation={this.props.navigation} />
                </View>
                <View style={styles.container}>
                    {!this.state.loader && <View style={styles.profilePicture}>
                        <ImageBackground style={styles.profilePictureBlur} source={this.props.user.img_dir ? { uri: this.props.user.img_dir, cache: 'reload' } : require('../../../assets/images/profilePicture.png')} blurRadius={15}>
                            <View style={{ width: 133, height: 133, borderWidth: 0.5, borderColor: '#FFFFFF', borderRadius: 133, overflow: 'hidden', marginBottom: 20 }}>
                                <Image source={this.props.user.img_dir ? { uri: this.props.user.img_dir, cache: 'reload' } : require('../../../assets/images/profilePicture.png')} style={{ width: 133, height: 133, }} />
                            </View>
                            
                             <PhotoUpload
                                onPhotoSelect={(avatar,data) => {
                                    console.log(data);
                                    this.uploadPhoto(avatar);
                                }}
                             >
                                <Text style={{ fontFamily: 'DINPro-Light', fontSize: 18, color: '#4AB3E2' , textAlign: 'center'}}>Change Profile</Text>
                                <Text style={{ fontFamily: 'DINPro-Light', fontSize: 18, color: '#4AB3E2'  , textAlign: 'center'}}>Picture</Text>
                            </PhotoUpload>
                        </ImageBackground>
                    </View>}

                    <ScrollView style={styles.profileInformaton}>

                        <View style={styles.myAccount}>
                            <View style={styles.myAccountHeader}>
                                <View style={{}}>
                                    <Text style={{ fontFamily: 'DINPro-Light', fontSize: 22, color: '#454545', marginTop: 10, textAlign: 'center' }}>My</Text>
                                    <Text style={{ fontFamily: 'DINPro-Light', fontSize: 22, color: '#454545', marginBottom: 10, textAlign: 'center' }}>Account</Text>
                                </View>
                                <View style={{marginLeft: 10}}>
                                    {mode == 'view' && <TouchableOpacity onPress={()=>this.changeMode('edit')}>
                                        <IconFontAwesome name='pencil' size={20} color='#4AB3E2' />
                                    </TouchableOpacity>}
                                    {mode == 'edit' && <TouchableOpacity onPress={()=>this.saveProfile()}>
                                        <IconFontAwesome name='save' size={20} color='#4AB3E2' />
                                    </TouchableOpacity>}
                                </View>
                            </View>
                            
                            <View  style={styles.informationContainer}>
                                <View style={{ flex: 1, alignItems: 'flex-start' }}>
                                    <Text style={{ fontFamily: 'DINPro-Bold', fontSize: 16, color: '#838383' }}>First Name</Text>
                                </View>
                                <View style={{ flex: 1, alignItems: 'flex-end' }}>
                                    {mode == 'view' &&
                                        <Text style={{ fontFamily: 'DINPro-Bold', fontSize: 16, color: '#838383' }}>{user.firstname}</Text>
                                    }
                                    {mode == 'edit' &&
                                        <TextInput style={{ fontFamily: 'DINPro-Bold', fontSize: 16, backgroundColor: '#FFFFFF', color: '#838383', width: '100%' }} placeholder='' autoCapitalize='none' autoCorrect={false} value={user.firstname} onChangeText={
                                            (text)=>this.setState({userEditData: {...user, firstname: text}}) } />
                                    }
                                </View>
                            </View>

                            <View style={styles.informationContainer}>
                                <View style={{ flex: 1, alignItems: 'flex-start' }}>
                                    <Text style={{ fontFamily: 'DINPro-Bold', fontSize: 16, color: '#838383' }}>Last Name</Text>
                                </View>
                                <View style={{ flex: 1, alignItems: 'flex-end' }}>
                                    {mode == 'view' &&
                                        <Text style={{ fontFamily: 'DINPro-Bold', fontSize: 16, color: '#838383' }}>{user.lastname}</Text>
                                    }
                                    {mode == 'edit' &&
                                        <TextInput style={{ fontFamily: 'DINPro-Bold', fontSize: 16, backgroundColor: '#FFFFFF', color: '#838383', width: '100%' }} placeholder='' autoCapitalize='none' autoCorrect={false} value={user.lastname} onChangeText={
                                            (text)=>this.setState({userEditData: {...user, lastname: text}}) } />
                                    }
                                </View>
                            </View>

                            <View  style={styles.informationContainer}>
                                <View style={{ flex: 1, alignItems: 'flex-start' }}>
                                    <Text style={{ fontFamily: 'DINPro-Bold', fontSize: 16, color: '#838383' }}>Email Address</Text>
                                </View>
                                <View style={{ flex: 1, alignItems: 'flex-end' }}>
                                    {mode == 'view' &&
                                        <Text style={{ fontFamily: 'DINPro-Bold', fontSize: 16, color: '#838383' }}>{user.email}</Text>
                                    }
                                    {mode == 'edit' &&
                                        <TextInput style={{ fontFamily: 'DINPro-Bold', fontSize: 16, backgroundColor: '#FFFFFF', color: '#838383', width: '100%' }} placeholder='' autoCapitalize='none' autoCorrect={false} value={user.email} onChangeText={
                                            (text)=>this.setState({userEditData: {...user, email: text}}) } />
                                    }
                                </View>
                            </View>


                            <View  style={styles.informationContainer}>
                                <View style={{ flex: 1, alignItems: 'flex-start' }}>
                                    <Text style={{ fontFamily: 'DINPro-Bold', fontSize: 16, color: '#838383' }}>Language</Text>
                                </View>
                                <View style={{ flex: 1, alignItems: 'flex-end' }}>
                                    {mode == 'view' &&
                                        <Text style={{ fontFamily: 'DINPro-Bold', fontSize: 16, color: '#838383' }}>{currentLang.name}</Text>
                                    }
                                    {mode == 'edit' &&
                                        // <Picker
                                        //     selectedValue={user.id_lang+''}
                                        //     style={{ width: 100}}
                                        //     onValueChange={(itemValue, itemIndex) => this.setState({language: itemValue})}>
                                        //         {LANGS.map(lang=>(
                                        //             <Picker.Item key={lang.id_lang} label={lang.name} value={lang.id_lang+''} />
                                        //         ) )}
                                        // </Picker>
                                        <RNPickerSelect
                                            placeholder={{
                                            //     label: '',
                                            //     value: 0,
                                            }}
                                            items={LANGS.map(item=>({value: item.id_lang, label: item.name}) ) }
                                            onValueChange={(value) => {
                                                this.setState({
                                                    userEditData: {...user, id_lang : value},
                                                });
                                            }}
                                            style={{ ...pickerSelectStyles }}
                                            value={user.id_lang}
                                            ref={(el) => {
                                                
                                            }}
                                        />
                                    }
                                </View>
                            </View>


                            <View  style={styles.informationContainer}>
                                <View style={{ flex: 1, alignItems: 'flex-start' }}>
                                    <Text style={{ fontFamily: 'DINPro-Bold', fontSize: 16, color: '#838383' }}>Gender</Text>
                                </View>
                                <View style={{ flex: 1, alignItems: 'flex-end' }}>
                                    {mode == 'view' &&
                                        <Text style={{ fontFamily: 'DINPro-Bold', fontSize: 16, color: '#838383' }}>{currentGender.name}</Text>
                                    }
                                    {mode == 'edit' && 

                                        <RNPickerSelect
                                            placeholder={{
                                            //     label: '',
                                            //     value: 0,
                                            }}
                                            items={GENDERS.map(item=>({value: item.id, label: item.name}) ) }
                                            onValueChange={(value) => {
                                                this.setState({
                                                    userEditData: {...user, id_gender : value},
                                                });
                                            }}
                                            style={{ ...pickerSelectStyles }}
                                            value={user.id_gender}
                                            ref={(el) => {
                                                
                                            }}
                                        />
                                    }
                                </View>
                            </View>

                            <View style={styles.informationContainer}>
                                <View style={{ flex: 1, alignItems: 'flex-start' }}>
                                    <Text style={{ fontFamily: 'DINPro-Bold', fontSize: 16, color: '#838383' }}>Address1</Text>
                                </View>
                                <View style={{ flex: 1, alignItems: 'flex-end' }}>
                                    {mode == 'view' &&
                                        <Text style={{ fontFamily: 'DINPro-Bold', fontSize: 16, color: '#838383' }}>{user.address1}</Text>
                                    }
                                    {mode == 'edit' &&
                                        <TextInput style={{ fontFamily: 'DINPro-Bold', fontSize: 16, backgroundColor: '#FFFFFF', color: '#838383', width: '100%' }} placeholder='' autoCapitalize='none' autoCorrect={false} value={user.address1} onChangeText={
                                            (text)=>this.setState({userEditData: {...user, address1: text}}) } />
                                    }
                                </View>
                            </View>

                            <View  style={styles.informationContainer}>
                                <View style={{ flex: 1, alignItems: 'flex-start' }}>
                                    <Text style={{ fontFamily: 'DINPro-Bold', fontSize: 16, color: '#838383' }}>Address2</Text>
                                </View>
                                <View style={{ flex: 1, alignItems: 'flex-end' }}>
                                    {mode == 'view' &&
                                        <Text style={{ fontFamily: 'DINPro-Bold', fontSize: 16, color: '#838383' }}>{user.address2}</Text>
                                    }
                                    {mode == 'edit' &&
                                        <TextInput style={{ fontFamily: 'DINPro-Bold', fontSize: 16, backgroundColor: '#FFFFFF', color: '#838383', width: '100%' }} placeholder='' autoCapitalize='none' autoCorrect={false} value={user.address2} onChangeText={
                                            (text)=>this.setState({userEditData: {...user, address2: text}}) } />
                                    }
                                </View>
                            </View>

                            <View  style={styles.informationContainer}>
                                <View style={{ flex: 1, alignItems: 'flex-start' }}>
                                    <Text style={{ fontFamily: 'DINPro-Bold', fontSize: 16, color: '#838383' }}>Country</Text>
                                </View>
                                <View style={{ flex: 1, alignItems: 'flex-end' }}>
                                    {mode == 'view' &&
                                        <Text style={{ fontFamily: 'DINPro-Bold', fontSize: 16, color: '#838383' }}>{currentCountry.name}</Text>
                                    }
                                    {mode == 'edit' && 

                                        <RNPickerSelect
                                            placeholder={{
                                            //     label: '',
                                            //     value: 0,
                                            }}
                                            items={COUNTRIES.map(item=>({value: item.id_country, label: item.name}) ) }
                                            onValueChange={(value) => {
                                                this.setState({
                                                    userEditData: {...user, id_country : value},
                                                });
                                            }}
                                            style={{ ...pickerSelectStyles }}
                                            value={user.id_country}
                                            ref={(el) => {
                                                
                                            }}
                                        />
                                    }
                                </View>
                            </View>

                            <View  style={styles.informationContainer}>
                                <View style={{ flex: 1, alignItems: 'flex-start' }}>
                                    <Text style={{ fontFamily: 'DINPro-Bold', fontSize: 16, color: '#838383' }}>State</Text>
                                </View>
                                <View style={{ flex: 1, alignItems: 'flex-end' }}>
                                    {mode == 'view' &&
                                        <Text style={{ fontFamily: 'DINPro-Bold', fontSize: 16, color: '#838383' }}>{currentState.name}</Text>
                                    }
                                    {mode == 'edit' && 

                                        <RNPickerSelect
                                            placeholder={{
                                            //     label: '',
                                            //     value: 0,
                                            }}
                                            items={currentCountry.states.map(item=>({value: item.id_state, label: item.name}) ) }
                                            onValueChange={(value) => {
                                                this.setState({
                                                    userEditData: {...user, id_state : value},
                                                });
                                            }}
                                            style={{ ...pickerSelectStyles }}
                                            value={user.id_state}
                                            ref={(el) => {
                                                
                                            }}
                                        />
                                    }
                                </View>
                            </View>



                            <View  style={styles.informationContainer}>
                                <View style={{ flex: 1, alignItems: 'flex-start' }}>
                                    <Text style={{ fontFamily: 'DINPro-Bold', fontSize: 16, color: '#838383' }}>Postal Code</Text>
                                </View>
                                <View style={{ flex: 1, alignItems: 'flex-end' }}>
                                    {mode == 'view' &&
                                        <Text style={{ fontFamily: 'DINPro-Bold', fontSize: 16, color: '#838383' }}>{user.postcode}</Text>
                                    }
                                    {mode == 'edit' &&
                                        <TextInput style={{ fontFamily: 'DINPro-Bold', fontSize: 16, backgroundColor: '#FFFFFF', color: '#838383', width: '100%' }} placeholder='' autoCapitalize='none' autoCorrect={false} value={user.postcode} onChangeText={
                                            (text)=>this.setState({userEditData: {...user, postcode: text}}) } />
                                    }
                                </View>
                            </View>
                        </View>
                        <View style={styles.personelDetails}>
                            <Text style={{ fontFamily: 'DINPro-Light', fontSize: 22, color: '#454545', marginBottom: 10, marginTop: 10 }}>Personal details</Text>
                            <View  style={styles.informationContainer}>
                                <View style={{ flex: 1, alignItems: 'flex-start', justifyContent: 'center' }}>
                                    <Text style={{ fontFamily: 'DINPro-Bold', fontSize: 16, color: '#838383' }}>Goal</Text>
                                </View>
                                <View style={{ flex: 1, alignItems: 'flex-end', justifyContent: 'center' }}>
                                    {mode == 'view' &&
                                        <Text style={{ fontFamily: 'DINPro-Bold', fontSize: 16, color: '#838383' }}>{user.goal ? user.goal :''}</Text>
                                    }
                                    {mode == 'edit' &&
                                        <TextInput style={{ fontFamily: 'DINPro-Bold', fontSize: 16, backgroundColor: '#FFFFFF', color: '#838383', width: '100%' }} placeholder='' autoCapitalize='none' autoCorrect={false} value={user.goal} onChangeText={
                                            (text)=>this.setState({userEditData: {...user, goal: text}}) } />
                                    }
                                </View>
                            </View>


                            <View  style={styles.informationContainer}>
                                <View style={{ flex: 1, alignItems: 'flex-start', justifyContent: 'center' }}>
                                    <Text style={{ fontFamily: 'DINPro-Bold', fontSize: 16, color: '#838383' }}>Birthday</Text>
                                </View>
                                <View style={{ flex: 1, alignItems: 'flex-end', justifyContent: 'center' }}>
                                    {mode == 'view' &&
                                        <Text style={{ fontFamily: 'DINPro-Bold', fontSize: 16, color: '#838383' }}>{user.birthday ? user.birthday : ''}</Text>
                                    }
                                    {mode == 'edit' &&
                                        <Text style={{ fontFamily: 'DINPro-Bold', fontSize: 16, color: '#4AB3E2' }} onPress={()=>this.setState({isBirthdayPickerVisible: true}) }>{user.birthday ? user.birthday : ''}</Text>
                                    }
                                    {mode == 'edit' &&
                                        <DateTimePicker
                                            date={new Date(user.birthday)}
                                            mode={'date'}
                                            isVisible={this.state.isBirthdayPickerVisible}
                                            onConfirm={(value)=>{console.log(value); this.setState({userEditData: {...user, birthday: moment(value).format('YYYY-MM-DD')}, isBirthdayPickerVisible: false})}}
                                            onCancel={()=>this.setState({isBirthdayPickerVisible: false})}
                                        />
                                    }
                                </View>
                            </View>


                            <View  style={styles.informationContainer}>
                                <View style={{ flex: 1, alignItems: 'flex-start', justifyContent: 'center' }}>
                                    <Text style={{ fontFamily: 'DINPro-Bold', fontSize: 16, color: '#838383' }}>Weight</Text>
                                </View>
                                <View style={{ flex: 1, alignItems: 'flex-end', justifyContent: 'center' }}>
                                    {mode == 'view' &&
                                        <Text style={{ fontFamily: 'DINPro-Bold', fontSize: 16, color: '#838383' }}>{user.weight ? user.weight : ''}</Text>
                                    }
                                    {mode == 'edit' &&
                                        <TextInput style={{ fontFamily: 'DINPro-Bold', fontSize: 16, backgroundColor: '#FFFFFF', color: '#838383', width: '100%' }} placeholder='' autoCapitalize='none' autoCorrect={false} value={user.weight} onChangeText={
                                            (text)=>this.setState({userEditData: {...user, weight: text}}) } />
                                    }
                                </View>
                            </View>
                        </View>

                    </ScrollView>

                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 9,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#F5F5F5',
    },
    profilePicture: {
        height: 254,
        alignItems: 'center',
        justifyContent: 'center',
    },
    profilePictureBlur: {
        width: width,
        height: 254,
        alignItems: 'center',
        justifyContent: 'space-around',
    },
    profileInformaton: {
        flex: 1,
        marginTop: 10,
        marginBottom: 10
    },
    myAccount: {
        flex: 1,
        width: width - 20,
        backgroundColor: '#FFFFFF',
        margin: 10,
        marginTop: 0,
        alignItems: 'center',
        justifyContent: 'center',
    },
    myAccountHeader: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    personelDetails: {
        flex: 1,
        width: width - 20,
        backgroundColor: '#FFFFFF',
        margin: 10,
        marginTop: 0,
        marginBottom: 0,
        alignItems: 'center',
        justifyContent: 'center',
    },
    informationContainer: {
        flex: 1,
        borderBottomWidth: 0.5,
        borderBottomColor: '#838383',
        height: 55,
        marginLeft: 10,
        marginRight: 10,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
    },


});

const pickerSelectStyles = StyleSheet.create({
    inputIOS: {
        fontSize: 16,
        paddingTop: 13,
        backgroundColor: 'white',
        color: '#838383',
        fontFamily: 'DINPro-Bold', 
        fontSize: 16
    },
});

export default connect(state => {
    const user = state.validUser.user || {};
    return {
        user,
    }
}, dispatch => {
    return bindActionCreators({ getLangs, getGenders, updateProfileInfo, updateProfileimage, getCountries }, dispatch)
})(ProfileInformation)