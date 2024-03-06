import promptGeneric from "react-native-prompt-android";
import promptIOS from '@powerdesigninc/react-native-prompt';
interface Options {
    title: string;
    message: string;
    placeholder?: string;
    defaultValue?: string;
    type: 'default' | 'plain-text' | 'secure-text' 
    textCancel: string;
    textConfirm: string;
    cancelable?: boolean;
    onConfirm: (value?: string) => void
    onCancel?: () => void
}
interface OptionsIOS {
    title: string;
    message: string;
    placeholder?: string;
    defaultValue?: string;
    type: 'default'   |  'numeric'  | 'phone-pad' | 'number-pad',
    textCancel: string;
    textConfirm: string;
    cancelable?: boolean;
    onConfirm: (value?: string) => void
    onCancel?: () => void
}

export const promtAdapter = ({ title, message, placeholder = '', type = 'default', defaultValue, onCancel, onConfirm, textCancel, textConfirm, cancelable = false }: Options) => {
    promptGeneric(
        title,
        message,
        [
            { text: textCancel, onPress: onCancel, style: 'cancel' },
            { text: textConfirm, onPress: onConfirm },
        ],
        {
            type,        
            cancelable,
            placeholder,
            defaultValue,
        }
    );
}


export const promtAsIOS = ({ title, message, placeholder = '', type = 'default', defaultValue, onCancel, onConfirm, textCancel, textConfirm, cancelable = false }: Options) => {
    promptIOS(
        title,
        message,
        [
            { text: textCancel, onPress: onCancel, style: 'cancel' },
            { text: textConfirm, onPress: onConfirm },
        ],
        type,
        defaultValue,
        
                
    );
}
