import { Identifier, Record } from '../../types';
import { UPDATE } from '../../dataFetchActions';
import { FETCH_END, FETCH_ERROR } from '../fetchActions';
import { NotificationSideEffect, RedirectionSideEffect, RefreshSideEffect } from '../../sideEffect';
export declare const crudUpdate: (resource: string, id: string | number, data: any, previousData: any, basePath: string, redirectTo?: RedirectionSideEffect, refresh?: boolean) => CrudUpdateAction;
interface RequestPayload {
    id: Identifier;
    data: any;
    previousData?: any;
}
export declare const CRUD_UPDATE = "RA/CRUD_UPDATE";
export interface CrudUpdateAction {
    readonly type: typeof CRUD_UPDATE;
    readonly payload: RequestPayload;
    readonly meta: {
        resource: string;
        fetch: typeof UPDATE;
        onSuccess: {
            notification: NotificationSideEffect;
            redirectTo: RedirectionSideEffect;
            refresh: RefreshSideEffect;
            basePath: string;
        };
        onFailure: {
            notification: NotificationSideEffect;
        };
    };
}
export declare const CRUD_UPDATE_LOADING = "RA/CRUD_UPDATE_LOADING";
export interface CrudUpdateLoadingAction {
    readonly type: typeof CRUD_UPDATE_LOADING;
    readonly payload: RequestPayload;
    readonly meta: {
        resource: string;
    };
}
export declare const CRUD_UPDATE_FAILURE = "RA/CRUD_UPDATE_FAILURE";
export interface CrudUpdateFailureAction {
    readonly type: typeof CRUD_UPDATE_FAILURE;
    readonly error: string | object;
    readonly payload: string;
    readonly requestPayload: RequestPayload;
    readonly meta: {
        resource: string;
        notification: NotificationSideEffect;
        fetchResponse: typeof UPDATE;
        fetchStatus: typeof FETCH_ERROR;
    };
}
export declare const CRUD_UPDATE_SUCCESS = "RA/CRUD_UPDATE_SUCCESS";
export interface CrudUpdateSuccessAction {
    readonly type: typeof CRUD_UPDATE_SUCCESS;
    readonly payload: {
        data: Record;
    };
    readonly requestPayload: RequestPayload;
    readonly meta: {
        resource: string;
        notification: NotificationSideEffect;
        redirectTo: RedirectionSideEffect;
        refresh: RefreshSideEffect;
        basePath: string;
        fetchResponse: typeof UPDATE;
        fetchStatus: typeof FETCH_END;
    };
}
export {};
