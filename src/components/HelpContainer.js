import React from "react";
import {
    Text,
    View,
    StyleSheet,
    Button,
    Vibration,
    Alert,
    TouchableOpacity
} from "react-native";
import { calcWidth, calcHeight } from "../HelpFunctions";

function HelpContainer(props) {
    return (
        <View
            style={{
                flex: 1,
                backgroundColor: "rgba(248, 245, 245, 0.8)",
                paddingLeft: calcWidth(2),
                paddingRight: calcWidth(2),
                paddingTop: calcHeight(5),
                paddingBottom: calcHeight(5)
            }}
        >
            <View
                style={{
                    flex: 1,
                    backgroundColor: "#e4d8b4",
                    flexDirection: "column",
                    position: "relative",
                    borderRadius: 10
                }}
            >
                <Text
                    style={{
                        ...styles.textCase,
                        paddingTop: calcHeight(1),
                        textAlign: "center",
                        fontSize: 20
                    }}
                >
                    Helping: {props.nombre + " " + props.apellido}
                </Text>
                <View style={styles.caseContainer}>
                    <Text
                        style={{
                            ...styles.textCase,
                            paddingTop: props.button
                                ? calcHeight(5)
                                : calcHeight(2)
                        }}
                    >
                        Code:
                    </Text>
                    <View
                        style={{
                            ...styles.caseBoxes,
                            height: calcHeight(5)
                        }}
                    >
                        <Text
                            style={{
                                ...styles.textCase,
                                paddingTop: calcHeight(1)
                            }}
                        >
                            {props.codigo}
                        </Text>
                    </View>
                    <Text
                        style={{
                            ...styles.textCase,
                            paddingTop: calcHeight(1.5)
                        }}
                    >
                        Place of Emergency:
                    </Text>
                    <View
                        style={{
                            ...styles.caseBoxes,
                            height: calcHeight(5)
                        }}
                    >
                        <Text
                            style={{
                                ...styles.textCase,
                                paddingTop: calcHeight(1)
                            }}
                        >
                            {props.lugar}
                        </Text>
                    </View>
                    <Text
                        style={{
                            ...styles.textCase,
                            paddingTop: calcHeight(1.5)
                        }}
                    >
                        Category:
                    </Text>
                    <View
                        style={{
                            ...styles.caseBoxes,
                            height: calcHeight(5)
                        }}
                    >
                        <Text
                            style={{
                                ...styles.textCase,
                                paddingTop: calcHeight(1)
                            }}
                        >
                            {props.categoria}
                        </Text>
                    </View>
                    <Text
                        style={{
                            ...styles.textCase,
                            paddingTop: calcHeight(1.5)
                        }}
                    >
                        Description:
                    </Text>
                    <View
                        style={{
                            ...styles.caseBoxes,
                            height: calcHeight(30)
                        }}
                    >
                        <Text
                            style={{
                                ...styles.textCase,
                                paddingTop: calcHeight(1),
                                textAlign: "justify"
                            }}
                        >
                            {props.descripcion}
                        </Text>
                    </View>
                </View>

                <View
                    style={{
                        flex: 1,
                        flexDirection: "row",
                        justifyContent: "space-evenly",
                        position: "relative"
                    }}
                >
                    {props.button && (
                        <View
                            style={{
                                display: "flex",
                                flexDirection: "row"
                            }}
                        >
                            <TouchableOpacity
                                style={{
                                    ...styles.touchOpBut,
                                    backgroundColor: "red",
                                    marginRight: 90
                                }}
                                onPress={props.rejectCase}
                            >
                                <Text style={styles.button}>REJECT</Text>
                            </TouchableOpacity>

                            <TouchableOpacity
                                style={{
                                    ...styles.touchOpBut,
                                    backgroundColor: "green"
                                }}
                                onPress={props.acceptCase}
                            >
                                <Text style={styles.button}>ACCEPT</Text>
                            </TouchableOpacity>
                        </View>
                    )}
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        padding: 10,
        backgroundColor: "#ecf0f1"
    },
    paragraph: {
        margin: 24,
        fontSize: 18,
        textAlign: "center"
    },
    button: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center",
        paddingVertical: 13
    },
    touchOpBut: {
        height: calcHeight(6),
        width: calcWidth(30),
        top: calcHeight(3),
        position: "relative",
        borderRadius: 10
    },
    caseBoxes: {
        position: "relative",
        backgroundColor: "rgba(248, 245, 245, 0.8)",
        borderRadius: 10,
        borderColor: "black",
        paddingLeft: calcWidth(1.5),
        paddingRight: calcWidth(1.5)
    },
    caseContainer: {
        flex: 4,
        flexDirection: "column",
        position: "relative",
        paddingLeft: calcWidth(3),
        paddingRight: calcWidth(3)
    },
    textCase: {
        fontWeight: "bold"
    }
});
export default HelpContainer;
