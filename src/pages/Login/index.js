import React from 'react'
import { Image, Text, TextInput, TouchableOpacity, View, Button} from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import styles from './styles';

export default function index({navigation, setUser}) {

    const onRegisterClick = async () => {
        setUser("test");
    }

    return (
        <View style={styles.container}>
            <KeyboardAwareScrollView
                style={{ flex: 1, width: '100%' }}
                keyboardShouldPersistTaps="always">
                <TouchableOpacity style={styles.loginButton} onPress={onRegisterClick}>
                    <Image
                        style={styles.buttonLogo}
                        source={require('../../../assets/google_icon1.png')}
                    />
                    <Text style={styles.buttonTitle}>Sign up with Google</Text>
                    {/* <Button /> */}
                </TouchableOpacity>
            </KeyboardAwareScrollView>
        </View>
    )
}
