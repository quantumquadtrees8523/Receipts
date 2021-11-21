import React, { useState } from 'react';
import { Button, View, Keyboard, Text } from 'react-native';
import { ValueType } from 'react-native-dropdown-picker';
import { addDigitalReceipt } from '../api/AirtableApi';

import { CategoryTag } from "../types/AirtableTypes";
import { CategoryDropdown } from "./CategoryDropown";
import { DescriptionBox } from './DescriptionBox';
import { PriceSetter } from './PriceSetter';

export const DigtalReciept = (DigitalReceiptProps: {
    categoryTags: CategoryTag[],
}) => {
    // TODO fix the typing below this is a hack - CMD-F addDigitalReceipt in this file
    const [category, setCategory] = useState<string | number | boolean | ValueType[] | null>(null);
    const [price, setPrice] = useState<number>(0);
    const [description, setDescription] = useState<string | null>(null);

    const submitReceipt = async () => {
        Keyboard.dismiss();
        if (category !== null && category !== "select" && description !== null && price !== 0) { 
            const successfullyUploadedDigitalReceiptToAirtableMessage = await addDigitalReceipt(price, category.toString() /* TODO this is a hack, make it more strongly typed */, description);
            alert(successfullyUploadedDigitalReceiptToAirtableMessage ? "successfully uploaded digital receipt" : "error in uploading digital receipt");
            clearReceipt();
        } else {
            alert("Not all required fields have been provided");
        }
    }

    const clearReceipt = () => {
        setCategory(null);
        setPrice(0);
        setDescription(null);
    }

    const displayDigitalReceiptStateIfIncomplete = () => {
        let dangerDisplay = "";
        if (category === null || category === 'select') {
            dangerDisplay = dangerDisplay.concat("no category chosen, \n");
        }
        if (price === 0) {
            dangerDisplay = dangerDisplay.concat("price is set to 0, \n");
        }
        if (description === null) {
            dangerDisplay = dangerDisplay.concat("description is empty, \n");
        }
        return dangerDisplay;
    }

    return (
        <View
            style={{
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >   
            <View style={{backgroundColor: 'navy', marginBottom: 10}}>
                <Text style={{fontWeight: 'bold', color: 'yellow'}}>
                    {displayDigitalReceiptStateIfIncomplete()}
                </Text>
            </View>
            <View>
                <PriceSetter setDigitalReceiptPrice={setPrice} />
                <CategoryDropdown categoryTags={DigitalReceiptProps.categoryTags} setDigitalReceiptCategory={setCategory} />
                <DescriptionBox setDigitalReceiptDescription={setDescription} />
            </View>
            <View
                style={{
                    margin: 20,
                    backgroundColor: "white",
                    width: 300,
                }}
            >
                <Button 
                    title={"Submit Receipt"} 
                    onPress={submitReceipt} 
                    color="black"
                />
            </View>
            <View
                style={{
                    margin: 20,
                    backgroundColor: "white",
                    width: 300,
                }}
            >
                <Button 
                    title={"Clear Receipt Without Submitting"} 
                    onPress={clearReceipt}
                    color="black"
                />
            </View>
        </View>
    )
}