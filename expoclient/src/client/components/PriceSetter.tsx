import React, { useState } from 'react';
import { Button, View, TextInput } from 'react-native';

import CurrencyInput from 'react-native-currency-input';

export const PriceSetter = (PriceSetterProps: {
    setDigitalReceiptPrice: (price: number) => void,
}) => {

    const [price, setPrice] = useState<number | null>(0);
    const setParentPrice = (updatedPrice: number) => {
        setPrice(updatedPrice);
        PriceSetterProps.setDigitalReceiptPrice(updatedPrice);
    }
    return <View style={{width: 300}}>
        <CurrencyInput
            placeholder="price"
            value={price} 
            onChangeValue={setParentPrice}
            prefix="$"
            separator="."
            minValue={0}
            maxValue={100000}
            precision={2}
            style={{
                marginBottom: 20,
                width: 300,
                height: 45,
                backgroundColor: "white"
            }}
        />
    </View>
}