import { CameraView, CameraType, useCameraPermissions } from 'expo-camera';
import { useState, useRef } from 'react';
import { Button, StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import * as Sharing from 'expo-sharing';

export default function App(){
    const [flipCam, setFlipcam] = useState<CameraType>('back');
    const [permission, requestPermission] = useCameraPermissions();
    const cameraRef = useRef<CameraView>(null);
    const [foto, setFoto] = useState<string | null>(null);

    if(!permission){
        return <View/>;
    }

    if(!permission.granted){
        return(
            <View style={styles.container}>
                <Text style={styles.message}>Precisamos da sua permissão para mostrar a câmera</Text>
                <Button onPress={requestPermission} title="Conceder permissão"/>
            </View>
        );
    }
    function trocarCamera(){
        setFlipcam(current => (current === 'back' ? 'front' : 'back'));
    }
}