import {View, Text, Image} from 'react-native';
import Icon from "react-native-vector-icons/FontAwesome6";

const Boat = ({ header, description, icon_name, poster}) => {
    return (
        <View>


            <Text>
                <Icon name={icon_name} size={20} color="#808080"/>
                {header}
            </Text>

            <Text>
                {description}
            </Text>
            <Image source={poster} style={{width:400, height:300}}/>


        </View>
    );
};

export default Boat;
