import { Component, ComponentType } from 'react';
import PropTypes from 'prop-types';
import { initializeForm as initializeFormAction } from '../actions/formActions';
import { InputProps } from './types';
export interface DefaultValueProps extends InputProps {
    decoratedComponent: ComponentType<InputProps>;
    initializeForm: typeof initializeFormAction;
}
export declare class DefaultValueView extends Component<DefaultValueProps> {
    static propTypes: {
        decoratedComponent: PropTypes.Requireable<PropTypes.ReactElementLike | ((...args: any[]) => any)>;
        defaultValue: PropTypes.Requireable<any>;
        initializeForm: PropTypes.Validator<(...args: any[]) => any>;
        input: PropTypes.Requireable<object>;
        source: PropTypes.Requireable<string>;
        validate: PropTypes.Requireable<any[] | ((...args: any[]) => any)>;
    };
    componentDidMount(): void;
    componentDidUpdate(prevProps: any): void;
    render(): import("react").ReactElement<InputProps, string | ((props: any) => import("react").ReactElement<any, string | any | (new (props: any) => Component<any, any, any>)>) | (new (props: any) => Component<any, any, any>)>;
}
declare const DefaultValue: (DecoratedComponent: ComponentType<InputProps>) => any;
export default DefaultValue;
