export declare type CallbackSideEffect = (args: {
    payload: any;
    requestPayload?: any;
    error?: string | {
        message: string;
    };
}) => any;
export default function (): Generator<import("redux-saga/effects").ForkEffect, void, unknown>;
