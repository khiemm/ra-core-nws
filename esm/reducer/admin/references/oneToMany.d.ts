import { Reducer } from 'redux';
import { Identifier, ReduxState } from '../../../types';
interface State {
    [relatedTo: string]: {
        ids: Identifier[];
        total: number;
    };
}
declare const oneToManyReducer: Reducer<State>;
export declare const getIds: (state: ReduxState, relatedTo: string) => (string | number)[];
export declare const getTotal: (state: ReduxState, relatedTo: string) => number;
export declare const getReferences: (state: ReduxState, reference: any, relatedTo: any) => any;
export declare const getReferencesByIds: (state: ReduxState, reference: string, ids: (string | number)[]) => any;
export declare const nameRelatedTo: (reference: string, id: string | number, resource: string, target: string, filter?: object) => string;
export default oneToManyReducer;
