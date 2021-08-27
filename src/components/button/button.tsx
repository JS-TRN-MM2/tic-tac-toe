import React, { ReactElement } from "react";
import { TouchableOpacity, TouchableOpacityProps } from "react-native";
import Text from "../text/text";
import styles from "./button.styles";

type ButtonProps = {
    title: string;
} & TouchableOpacityProps;

export default function Button({ title, style, ...props }: ButtonProps): ReactElement {
    return (
        <TouchableOpacity {...props} style={[styles.button, style]}>
            <Text style={{ fontSize: 18, color: "#221a36" }}>{title}</Text>
        </TouchableOpacity>
    );
}
