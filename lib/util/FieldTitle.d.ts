import React, { SFC } from 'react';
import { Translate } from '../types';
interface Props {
    isRequired?: boolean;
    resource?: string;
    source?: string;
    label?: string;
    translate?: Translate;
}
export declare const FieldTitle: SFC<Props>;
declare const _default: React.ComponentClass<unknown, any>;
export default _default;
