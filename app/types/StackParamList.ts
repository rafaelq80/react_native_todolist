import { NavigatorScreenParams } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { TabParamList } from "./TabParamList";

export type StackParamList = {
    Main: NavigatorScreenParams<TabParamList>;
    Home: undefined;
};

export type propsStack = NativeStackNavigationProp<StackParamList>