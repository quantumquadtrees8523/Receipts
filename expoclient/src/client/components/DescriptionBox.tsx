import React, { useState } from 'react';
import { Button, View, Keyboard, TextInput } from 'react-native'

export const DescriptionBox = (DescriptionBoxProps: {
    setDigitalReceiptDescription: (description: string) => void,
}) => {
    const [description, setDescription] = useState("");
    const updateDescription = (updatedDescription: string) => {
        setDescription(updatedDescription);
        DescriptionBoxProps.setDigitalReceiptDescription(updatedDescription);
    }
    return <View>
        <TextInput 
            placeholder="description"
            value={description}
            onChangeText={(updatedDescription) => updateDescription(updatedDescription)}
            multiline={true}
            style={{
                marginTop: 20,
                height: 200,
                width: 300,
                backgroundColor: "white"
            }}
        />
    </View>
}