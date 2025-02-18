var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import React from 'react';
import { connect } from 'react-redux';
import { getFormValues, FormName } from 'redux-form';
import get from 'lodash/get';
import warning from '../util/warning';
/**
 * Get the current (edited) value of the record from the form and pass it
 * to child function
 *
 * @example
 *
 * const PostEdit = (props) => (
 *     <Edit {...props}>
 *         <SimpleForm>
 *             <BooleanInput source="hasEmail" />
 *             <FormDataConsumer>
 *                 {({ formData, ...rest }) => formData.hasEmail &&
 *                      <TextInput source="email" {...rest} />
 *                 }
 *             </FormDataConsumer>
 *         </SimpleForm>
 *     </Edit>
 * );
 *
 * @example
 *
 * const OrderEdit = (props) => (
 *     <Edit {...props}>
 *         <SimpleForm>
 *             <SelectInput source="country" choices={countries} />
 *             <FormDataConsumer>
 *                 {({ formData, ...rest }) =>
 *                      <SelectInput
 *                          source="city"
 *                          choices={getCitiesFor(formData.country)}
 *                          {...rest}
 *                      />
 *                 }
 *             </FormDataConsumer>
 *         </SimpleForm>
 *     </Edit>
 * );
 */
export var FormDataConsumerView = function (_a) {
    var children = _a.children, form = _a.form, formData = _a.formData, source = _a.source, index = _a.index, rest = __rest(_a, ["children", "form", "formData", "source", "index"]);
    var scopedFormData = formData;
    var getSource;
    var getSourceHasBeenCalled = false;
    var ret;
    // If we have an index, we are in an iterator like component (such as the SimpleFormIterator)
    if (typeof index !== 'undefined') {
        scopedFormData = get(formData, source);
        getSource = function (scopedSource) {
            getSourceHasBeenCalled = true;
            return source + "." + scopedSource;
        };
        ret = children(__assign({ formData: formData, scopedFormData: scopedFormData, getSource: getSource }, rest));
    }
    else {
        ret = children(__assign({ formData: formData }, rest));
    }
    warning(typeof index !== 'undefined' && ret && !getSourceHasBeenCalled, "You're using a FormDataConsumer inside an ArrayInput and you did not called the getSource function supplied by the FormDataConsumer component. This is required for your inputs to get the proper source.\n\n<ArrayInput source=\"users\">\n    <SimpleFormIterator>\n        <TextInput source=\"name\" />\n\n        <FormDataConsumer>\n            {({\n                formData, // The whole form data\n                scopedFormData, // The data for this item of the ArrayInput\n                getSource, // A function to get the valid source inside an ArrayInput\n                ...rest,\n            }) =>\n                scopedFormData.name ? (\n                    <SelectInput\n                        source={getSource('role')} // Will translate to \"users[0].role\"\n                        choices={['admin', 'user']}\n                        {...rest}\n                    />\n                ) : null\n            }\n        </FormDataConsumer>\n    </SimpleFormIterator>\n</ArrayInput>");
    return ret === undefined ? null : ret;
};
var mapStateToProps = function (state, _a) {
    var form = _a.form, record = _a.record;
    return ({
        formData: getFormValues(form)(state) || record
    });
};
var ConnectedFormDataConsumerView = connect(mapStateToProps)(FormDataConsumerView);
var FormDataConsumer = function (props) { return (React.createElement(FormName, null, function (_a) {
    var form = _a.form;
    return React.createElement(ConnectedFormDataConsumerView, __assign({ form: form }, props));
})); };
export default FormDataConsumer;
