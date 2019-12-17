import { DataProvider, AuthProvider, I18nProvider } from '../types';
declare const _default: (dataProvider: DataProvider, authProvider: AuthProvider, i18nProvider: I18nProvider) => () => Generator<import("redux-saga/effects").GenericAllEffect<any>, void, unknown>;
/**
 * @param {Object} dataProvider A Data Provider function
 */
export default _default;
