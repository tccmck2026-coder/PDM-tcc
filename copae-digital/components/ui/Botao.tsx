import { Pressable, StyleSheet, Text } from "react-native";

export default (props: { title: string; onPress: any; color: string; fontSize?: number, textColor?: string; style?: any; }) => {
    let title = props.title || "Título";
    let onPress = props.onPress;
    let color = props.color || '#73b05f';
    let textColor = props.textColor || '#000000';
    let fontSize = props.fontSize || 20;
    let style = props.style;

    return(
        <Pressable
            onPress={onPress}
            style={{
                ...styles.buttonWrapper,
                ...style,
                backgroundColor: color,                
            }}
        >
            <Text style={{color: textColor, fontSize, fontWeight: 'bold'}}>{title}</Text>
        </Pressable>
    )
};

const styles = StyleSheet.create({
    buttonWrapper: {
    width: '90%',
    borderRadius: 25,
    overflow: 'hidden',
    alignItems: "center",
    justifyContent: "center",
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    paddingVertical: 15,
  }
});