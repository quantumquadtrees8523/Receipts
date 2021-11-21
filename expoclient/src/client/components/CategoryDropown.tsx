import React, { useState } from 'react';
import { View } from 'react-native';

import DropDownPicker, { ValueType } from 'react-native-dropdown-picker';
import { CategoryTag } from '../types/AirtableTypes';

/**
 * Built on this tutorial: // single-item-select https://hossein-zare.github.io/react-native-dropdown-picker-website/docs/usage
 * 
 * @param CategoryDropdownProps 
 */
export const CategoryDropdown = (CategoryDropdownProps: {
    categoryTags: CategoryTag[],
    // TODO(Surya) narrow the typedef of this function signature to only strings - this is just to make sure that there are no type issues moving forward
    setDigitalReceiptCategory: (value: string | number | boolean | ValueType[] | null) => void,
}) => {
    // these state variables and setter functions are only used to interface with the DropDownPicker's state not with the parent component
    const [open, setOpen] = useState(false);
    // TODO see if you can combine this setter with setDigitalReceiptCategory
    const [selectedCategory, setSelectedCategory] = useState<string | number | boolean | ValueType[] | null>(null);

    // create {label, value} objects and then sort alphabetically
    // the value that is set is not capitalized. only the label shown in the dropdown is. 
    // assume that any values used by any other components will get the lowercase version of what is provided - maintains parity with the airtable base
    const [categoryTags, setCategoryTags] = useState(CategoryDropdownProps.categoryTags.map(tag => {
        return {label: tag, value: tag}
    }));

    return (
        <View style={{zIndex: 999}}>
            <DropDownPicker 
                placeholder="select"
                placeholderStyle={{
                    color: "black",
                    paddingLeft: 5,
                    paddingTop: 12,
                }}
                labelStyle={{
                    paddingLeft: 5,
                    paddingTop: 12,
                }}
                searchContainerStyle={{
                    width: 300,
                }}
                dropDownContainerStyle={{
                    width: 300,
                }}
                style={{ backgroundColor: '#D3D3D3', borderRadius: 5, height: 45, width: 300, zIndex: 999}}
                open={open}
                value={selectedCategory}
                items={categoryTags}
                setOpen={setOpen}
                setValue={setSelectedCategory}
                setItems={setCategoryTags}
                listMode="FLATLIST"
                closeAfterSelecting={true}
                itemSeparator={true}
                onChangeValue={CategoryDropdownProps.setDigitalReceiptCategory}
            />
        </View>
    )   
}