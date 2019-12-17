import { ComponentType, SFC } from 'react';
import { Validator } from './validate';
import { InputProps } from './types';
export declare const isRequired: (validate: any) => boolean;
interface Props {
    component: ComponentType<InputProps>;
    defaultValue: any;
    input?: any;
    source: string;
    validate: Validator | Validator[];
}
export declare const FormFieldView: SFC<Props>;
declare const FormField: any;
export default FormField;
