import {LayoutAnimation, UIManager} from 'react-native';

UIManager.setLayoutAnimationEnabledExperimental
  && UIManager.setLayoutAnimationEnabledExperimental(true);

export function safeLayoutAnimation(): void {
	LayoutAnimation.linear();
}