import {StyleProp, TextStyle, ViewStyle} from 'react-native';

export interface TextInputIconProps {
  icon: string;
  size: number;
  onPress: () => void;
  securityPassword?: boolean;
  onChange: (value: string) => void;
  value: string;
}

export interface BtnComponentProps {
  style?: StyleProp<ViewStyle>;
  styleText?: StyleProp<TextStyle>;
  title: string;
  onPress: () => void;
}

export interface LoadingComponentProps {
  style?: StyleProp<ViewStyle>;
}

export interface FabComponentProps {
  icon: string;
  onPress: () => void;
  color: string;
  style?: StyleProp<ViewStyle>;
}

export interface BtnsComponentProps {
  title: string;
  onPress: () => void;
  style?: StyleProp<ViewStyle>;
}

export interface BtnsProps {
  btns: BtnsComponentProps[];
}

export interface FabGroupProps {
  icons: IconComponentProps[];
}

export interface IconComponentProps {
  icon: string;
  onPress: () => void;
  size?: number;
  style?: StyleProp<ViewStyle>;
}
