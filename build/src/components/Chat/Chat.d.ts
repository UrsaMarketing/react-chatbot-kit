import React, { SetStateAction, ReactElement } from 'react';
import './Chat.css';
import { ICustomComponents, ICustomMessage, ICustomStyles } from '../../interfaces/IConfig';
import { IMessage } from '../../interfaces/IMessages';
interface IChatProps {
    setState: React.Dispatch<SetStateAction<any>>;
    CustomInput?: (props?: any) => ReactElement;
    widgetRegistry: any;
    messageParser: any;
    actionProvider: any;
    customComponents: ICustomComponents;
    botName: string;
    customStyles: ICustomStyles;
    headerText: string;
    customMessages: ICustomMessage;
    placeholderText: string;
    validator: (input: string) => Boolean;
    state: any;
    disableScrollToBottom: boolean;
    messageHistory: IMessage[] | string;
    parse?: (message: string) => void;
    actions?: object;
    messageContainerRef: React.MutableRefObject<HTMLDivElement>;
}
declare const Chat: ({ state, setState, widgetRegistry, messageParser, parse, customComponents, actionProvider, botName, customStyles, headerText, customMessages, placeholderText, validator, disableScrollToBottom, messageHistory, actions, messageContainerRef, }: IChatProps) => React.JSX.Element;
export default Chat;
