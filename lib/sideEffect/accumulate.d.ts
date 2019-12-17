export declare const finalizeFactory: (tasks: any, accumulations: any) => (key: any, actionCreator: any) => Generator<import("redux-saga/effects").PutEffect<any> | import("redux-saga/effects").CallEffect, void, unknown>;
export declare const accumulateFactory: (tasks: any, accumulations: any, finalize: any) => (action: any) => Generator<import("redux-saga/effects").ForkEffect | import("redux-saga/effects").CancelEffect, void, any>;
export default function (): Generator<import("redux-saga/effects").ForkEffect, void, unknown>;
