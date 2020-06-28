import React from 'react';
import {
    View,
} from 'react-native';

import { EnthuTest } from './EnthusiasmTest'
import { Enthu } from './Enthusiasm'
import EnterMyName from './EnterMyName'


export default function () {
    return (
        <View>
            <EnthuTest name="mads" enthusiasmLevel={1} />
            <Enthu name="test" enthusiasmLevel={1} />
            <EnterMyName name="tsm" favoriteNumber={1} />
        </View>
    )

}