'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var styled = require('styled-components');
var React = require('react');
var reactUnicons = require('@iconscout/react-unicons');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var styled__default = /*#__PURE__*/_interopDefaultLegacy(styled);
var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
}

var StyledButton = styled__default['default'].button(templateObject_1$c || (templateObject_1$c = __makeTemplateObject(["\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  flex-flow: row wrap;\n  cursor: pointer;\n  border: ", "px solid\n    ", ";\n  background: ", ";\n  color: ", ";\n  padding: ", ";\n  border-radius: 5px;\n  transition: 300ms;\n  font-size: 13px;\n  width: ", ";\n  flex-grow: ", ";\n\n  svg {\n    margin: 0 10px;\n    height: 13px;\n    width: auto;\n  }\n\n  & > :first-child {\n    margin-left: 0;\n  }\n\n  & > :last-child {\n    margin-right: 0;\n  }\n\n  &:hover, &:focus {\n    border-color: ", ";\n    opacity: 0.9;\n  }\n\n  &:focus {\n    outline: none;\n  }\n\n  &:disabled {\n    cursor: not-allowed;\n    opacity: 0.6;\n  }\n"], ["\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  flex-flow: row wrap;\n  cursor: pointer;\n  border: ", "px solid\n    ", ";\n  background: ", ";\n  color: ", ";\n  padding: ", ";\n  border-radius: 5px;\n  transition: 300ms;\n  font-size: 13px;\n  width: ", ";\n  flex-grow: ", ";\n\n  svg {\n    margin: 0 10px;\n    height: 13px;\n    width: auto;\n  }\n\n  & > :first-child {\n    margin-left: 0;\n  }\n\n  & > :last-child {\n    margin-right: 0;\n  }\n\n  &:hover, &:focus {\n    border-color: ", ";\n    opacity: 0.9;\n  }\n\n  &:focus {\n    outline: none;\n  }\n\n  &:disabled {\n    cursor: not-allowed;\n    opacity: 0.6;\n  }\n"])), function (p) { return ((p.primary || p.destructive) ? "0" : "1"); }, function (p) { return (p.primary ? "transparent" : p.theme.accent_2); }, function (p) { return (p.primary ? p.theme.primary : (p.destructive ? p.theme.col_red : "transparent")); }, function (p) { return (p.primary ? p.theme.on_primary : (p.destructive ? "#ffffff" : p.theme.fg)); }, function (p) { return ((p.primary || p.destructive) ? "9px 17px" : "8px 16px"); }, function (p) { return (p.wide ? "100%" : "initial"); }, function (p) { return (p.wide ? "1" : "initial"); }, function (p) { return (p.primary ? "transparent" : p.theme.accent_3); });
function Button(props) {
    return (React__default['default'].createElement(StyledButton, __assign({}, __assign(__assign({}, props), { className: (props.className || "") +
            (" button" + (props.primary
                ? " button--primary"
                : props.destructive
                    ? " button--destructive"
                    : "")) }))));
}
var templateObject_1$c;

var StyledInputContainer = styled__default['default'].div(templateObject_1$b || (templateObject_1$b = __makeTemplateObject(["\n  width: 100%;\n  position: relative;\n"], ["\n  width: 100%;\n  position: relative;\n"])));
var StyledInputLabel = styled__default['default'].label(templateObject_2$7 || (templateObject_2$7 = __makeTemplateObject(["\n  font-size: 13px;\n  color: ", ";\n  display: block;\n  margin-top: ", ";\n  margin-bottom: 8px;\n"], ["\n  font-size: 13px;\n  color: ", ";\n  display: block;\n  margin-top: ", ";\n  margin-bottom: 8px;\n"])), function (p) { return (p.error ? p.theme.col_red : p.theme.accent_1); }, function (p) { return (p.error ? "8px" : "24px"); });
var StyledInput = styled__default['default'].input(templateObject_3$5 || (templateObject_3$5 = __makeTemplateObject(["\n  width: 100%;\n  background-color: transparent;\n  font-size: 15px;\n  color: ", ";\n  padding: 10px 18px;\n  border-radius: 5px;\n  border: 1px solid ", ";\n  box-sizing: border-box;\n  transition: 300ms;\n  box-shadow: 0px 0px 0px 0px ", ";\n\n  &::placeholder {\n    color: ", ";\n  }\n\n  &:focus {\n    outline: none;\n    border-color: ", ";\n    box-shadow: 0px 0px 4px 0px ", ";\n  }\n\n  &:disabled {\n    cursor: not-allowed;\n  }\n"], ["\n  width: 100%;\n  background-color: transparent;\n  font-size: 15px;\n  color: ", ";\n  padding: 10px 18px;\n  border-radius: 5px;\n  border: 1px solid ", ";\n  box-sizing: border-box;\n  transition: 300ms;\n  box-shadow: 0px 0px 0px 0px ", ";\n\n  &::placeholder {\n    color: ", ";\n  }\n\n  &:focus {\n    outline: none;\n    border-color: ", ";\n    box-shadow: 0px 0px 4px 0px ", ";\n  }\n\n  &:disabled {\n    cursor: not-allowed;\n  }\n"])), function (p) { return p.theme.fg; }, function (p) { return (p.error ? p.theme.col_red : p.theme.accent_2); }, function (p) { return p.theme.primary + "a0"; }, function (p) { return p.theme.accent_2; }, function (p) { return p.theme.primary; }, function (p) { return p.theme.primary + "a0"; });
var TogglePasswordButton = styled__default['default'].a(templateObject_4$2 || (templateObject_4$2 = __makeTemplateObject(["\n  text-decoration: none;\n  border: none;\n  background-color: transparent;\n  position: absolute;\n  top: 50%;\n  left: calc(100% - 40px);\n  transform: translateY(-50%);\n  cursor: pointer;\n\n  svg {\n    width: 15px;\n    color: ", ";\n  }\n\n  &:hover {\n    svg {\n      color: ", ";\n    }\n  }\n\n  &:focus {\n    outline: none;\n  }\n"], ["\n  text-decoration: none;\n  border: none;\n  background-color: transparent;\n  position: absolute;\n  top: 50%;\n  left: calc(100% - 40px);\n  transform: translateY(-50%);\n  cursor: pointer;\n\n  svg {\n    width: 15px;\n    color: ", ";\n  }\n\n  &:hover {\n    svg {\n      color: ", ";\n    }\n  }\n\n  &:focus {\n    outline: none;\n  }\n"])), function (p) { return p.theme.accent_1; }, function (p) { return p.theme.accent_2; });
var StyledInputInner = styled__default['default'].div(templateObject_5$1 || (templateObject_5$1 = __makeTemplateObject(["\n  position: relative;\n"], ["\n  position: relative;\n"])));
var index$2 = React.forwardRef(function (_a, ref) {
    var value = _a.value, update = _a.update, label = _a.label, placeholder = _a.placeholder, type = _a.type, error = _a.error, onFocus = _a.onFocus, onKeyDown = _a.onKeyDown, onClick = _a.onClick, disabled = _a.disabled, errorOutline = _a.errorOutline;
    var _b = React.useState(false), passwordShown = _b[0], setPasswordShown = _b[1];
    return (React__default['default'].createElement(StyledInputContainer, { className: "input-container" },
        label && React__default['default'].createElement(StyledInputLabel, null, label),
        React__default['default'].createElement(StyledInputInner, null,
            React__default['default'].createElement(StyledInput, { class: "input-container_input", onFocus: onFocus, ref: ref, error: error ? true : errorOutline, type: type === "password" ? (passwordShown ? "text" : "password") : type, placeholder: placeholder, value: value, onChange: function (e) { return update === null || update === void 0 ? void 0 : update(e.target.value); }, onKeyDown: onKeyDown, disabled: disabled, onClick: onClick }),
            type === "password" && (React__default['default'].createElement(TogglePasswordButton, { onClick: function () { return setPasswordShown(!passwordShown); } }, passwordShown ? React__default['default'].createElement(reactUnicons.UilEyeSlash, null) : React__default['default'].createElement(reactUnicons.UilEye, null)))),
        error && React__default['default'].createElement(StyledInputLabel, { error: true }, error)));
});
var templateObject_1$b, templateObject_2$7, templateObject_3$5, templateObject_4$2, templateObject_5$1;

var StyledStepBar = styled__default['default'].div(templateObject_1$a || (templateObject_1$a = __makeTemplateObject(["\n  height: 24px;\n  width: ", ";\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  flex-flow: row nowrap;\n  margin-bottom: 40px;\n  position: relative;\n  transition: 300ms;\n\n  &::before {\n    content: \"\";\n    position: absolute;\n    left: 0;\n    top: 50%;\n    width: 100%;\n    height: 0px;\n    border-top: 1px solid ", ";\n  }\n\n  &::after {\n    transition: 300ms;\n    content: \"\";\n    position: absolute;\n    left: 0;\n    top: 50%;\n    height: 0px;\n    width: ", "%;\n    border-top: 1px solid ", ";\n  }\n"], ["\n  height: 24px;\n  width: ", ";\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  flex-flow: row nowrap;\n  margin-bottom: 40px;\n  position: relative;\n  transition: 300ms;\n\n  &::before {\n    content: \"\";\n    position: absolute;\n    left: 0;\n    top: 50%;\n    width: 100%;\n    height: 0px;\n    border-top: 1px solid ", ";\n  }\n\n  &::after {\n    transition: 300ms;\n    content: \"\";\n    position: absolute;\n    left: 0;\n    top: 50%;\n    height: 0px;\n    width: ", "%;\n    border-top: 1px solid ", ";\n  }\n"])), function (p) { return p.width ? (typeof p.width === "number" ? (p.width + "px") : p.width) : 'initial'; }, function (p) { return p.theme.accent_2; }, function (p) { return ((p.current - 1) / (p.steps - 1)) * 100; }, function (p) { return p.theme.primary; });
var StyledStep = styled__default['default'].div(templateObject_2$6 || (templateObject_2$6 = __makeTemplateObject(["\n  width: 24px;\n  height: 24px;\n  border-radius: 24px;\n  padding: 0;\n  font-size: 13px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background-color: ", ";\n  color: ", ";\n  border: 1px solid ", ";\n  z-index: 10;\n"], ["\n  width: 24px;\n  height: 24px;\n  border-radius: 24px;\n  padding: 0;\n  font-size: 13px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background-color: ", ";\n  color: ", ";\n  border: 1px solid ", ";\n  z-index: 10;\n"])), function (p) { return p.current ? p.theme.primary : p.theme.accent_4; }, function (p) { return p.current ? p.theme.on_primary : p.theme.fg; }, function (p) { return p.current ? p.theme.primary : p.theme.accent_2; });
function StepBar(_a) {
    var steps = _a.steps, current = _a.current, width = _a.width;
    return (React__default['default'].createElement(StyledStepBar, { width: width, steps: steps, current: current }, new Array(steps).fill(0).map(function (_step, i) { return (React__default['default'].createElement(StyledStep, { key: i, current: i + 1 <= current }, i + 1)); })));
}
var templateObject_1$a, templateObject_2$6;

var StyledIconButton = styled__default['default'].button(templateObject_1$9 || (templateObject_1$9 = __makeTemplateObject(["\n  width: 36px;\n  height: 36px;\n  border-radius: 5px;\n  background: ", ";\n  color: ", ";\n  box-shadow: 0px 5px 10px\n    ", ";\n  transition: 300ms;\n  border: none;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  position: relative;\n\n  svg {\n    width: 16px;\n    height: 16px;\n  }\n\n  &:hover, &:focus {\n    opacity: 0.9;\n    box-shadow: 0px 6px 15px\n      ", ";\n  }\n\n  &:focus {\n    outline: none;\n  }\n"], ["\n  width: 36px;\n  height: 36px;\n  border-radius: 5px;\n  background: ", ";\n  color: ", ";\n  box-shadow: 0px 5px 10px\n    ", ";\n  transition: 300ms;\n  border: none;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  position: relative;\n\n  svg {\n    width: 16px;\n    height: 16px;\n  }\n\n  &:hover, &:focus {\n    opacity: 0.9;\n    box-shadow: 0px 6px 15px\n      ", ";\n  }\n\n  &:focus {\n    outline: none;\n  }\n"])), function (p) { return (p.primary ? p.theme.primary : (p.light ? p.theme.accent_4 : p.theme.accent_3)); }, function (p) { return (p.primary ? p.theme.on_primary : p.theme.fg); }, function (p) { return (p.primary ? p.theme.primary + "40" : p.theme.accent_2 + (p.light ? "80" : "40")); }, function (p) { return (p.primary ? p.theme.primary : p.theme.accent_2) + "9c"; });
var StyledIconButtonBadge = styled__default['default'].span(templateObject_2$5 || (templateObject_2$5 = __makeTemplateObject(["\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  flex-flow: row wrap;\n  height: 16px;\n  width: auto;\n  font-size: 10px;\n  padding: 0px 8px;\n  border-radius: 16px;\n  color: ", ";\n  background: ", ";\n  position: absolute;\n  left: 100%;\n  top: -8px;\n  transform: translateX(-50%);\n"], ["\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  flex-flow: row wrap;\n  height: 16px;\n  width: auto;\n  font-size: 10px;\n  padding: 0px 8px;\n  border-radius: 16px;\n  color: ", ";\n  background: ", ";\n  position: absolute;\n  left: 100%;\n  top: -8px;\n  transform: translateX(-50%);\n"])), function (p) { return p.badgeTextColor ? (p.theme[p.badgeTextColor] || p.badgeTextColor) : p.theme.on_primary; }, function (p) { return p.badgeColor ? (p.theme[p.badgeColor] || p.badgeColor) : p.theme.primary; });
function IconButton(props) {
    return (React__default['default'].createElement(StyledIconButton, __assign({}, __assign(__assign({}, props), { className: (props.className || '') + (" icon-button" + (props.primary ? ' icon-button--primary' : '')), children: undefined })),
        props.badge && (React__default['default'].createElement(StyledIconButtonBadge, { badgeTextColor: props.badgeTextColor, badgeColor: props.badgeColor }, props.badge)),
        props.children));
}
var templateObject_1$9, templateObject_2$5;

var StyledCard = styled__default['default'].div(templateObject_1$8 || (templateObject_1$8 = __makeTemplateObject(["\n  box-sizing: border-box;\n  padding: 0;\n  margin: 0;\n  width: ", ";\n  background: ", ";\n  box-shadow: 0px 5px 10px ", ";\n  ", ";\n  ", ";\n  border-radius: 10px;\n  position: relative;\n  font-size: 13px;\n  overflow: initial;\n\n  h1 {\n    font-size: 16px;\n    font-weight: 500;\n    color: ", ";\n  }\n\n  h2 {\n    font-size: 13px;\n    font-weight: 500;\n    color: ", ";\n  }\n"], ["\n  box-sizing: border-box;\n  padding: 0;\n  margin: 0;\n  width: ",
    ";\n  background: ", ";\n  box-shadow: 0px 5px 10px ", ";\n  ", ";\n  ", ";\n  border-radius: 10px;\n  position: relative;\n  font-size: 13px;\n  overflow: initial;\n\n  h1 {\n    font-size: 16px;\n    font-weight: 500;\n    color: ", ";\n  }\n\n  h2 {\n    font-size: 13px;\n    font-weight: 500;\n    color: ", ";\n  }\n"])), function (p) {
    return (p.width && (typeof p.width === "number" ? p.width + "px" : p.width)) ||
        "initial";
}, function (p) { return p.theme.accent_4; }, function (p) { return p.theme.accent_3 + "80"; }, function (p) { return p.subcard && 'box-shadow: none'; }, function (p) { return p.subcard && 'border: 1px solid ' + p.theme.accent_3; }, function (p) { return p.theme.fg; }, function (p) { return p.theme.fg; });
var StyledCardBody = styled__default['default'].div(templateObject_2$4 || (templateObject_2$4 = __makeTemplateObject(["\n  box-sizing: border-box;\n  width: 100%;\n  padding: ", ";\n  padding-bottom: ", ";\n\n  ", ";\n\n  p {\n    color: ", ";\n  }\n\n  & > :first-child {\n    margin-top: 0;\n  }\n\n  & > :last-child {\n    margin-bottom: 0;\n  }\n  position: relative;\n  /* padding-top: ", "; */\n"], ["\n  box-sizing: border-box;\n  width: 100%;\n  padding: ", ";\n  padding-bottom: ",
    ";\n\n  ", ";\n\n  p {\n    color: ", ";\n  }\n\n  & > :first-child {\n    margin-top: 0;\n  }\n\n  & > :last-child {\n    margin-bottom: 0;\n  }\n  position: relative;\n  /* padding-top: ", "; */\n"])), function (p) { return (p.compact ? "24px" : "40px"); }, function (p) {
    return p.hasFooter ? "0px" : p.compact ? "24px" : "40px";
}, function (p) { return p.subcard && 'padding: 24px'; }, function (p) { return p.theme.accent_1; }, function (p) { return (p.hasHeader ? "0px" : "40px"); });
var StyledCardFooter = styled__default['default'].div(templateObject_3$4 || (templateObject_3$4 = __makeTemplateObject(["\n  background: ", ";\n  border-radius: 0;\n  border-bottom-left-radius: 10px;\n  border-bottom-right-radius: 10px;\n  margin-top: ", ";\n  border-top: 1px solid\n    ", ";\n  width: 100%;\n  box-sizing: border-box;\n  padding: 16px ", ";\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  flex-flow: row nowrap;\n  position: relative;\n  gap: 20px;\n"], ["\n  background: ", ";\n  border-radius: 0;\n  border-bottom-left-radius: 10px;\n  border-bottom-right-radius: 10px;\n  margin-top: ", ";\n  border-top: 1px solid\n    ", ";\n  width: 100%;\n  box-sizing: border-box;\n  padding: 16px ", ";\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  flex-flow: row nowrap;\n  position: relative;\n  gap: 20px;\n"])), function (p) { return (p.compact ? "transparent" : p.theme.bg); }, function (p) { return (p.compact ? "0px" : "40px"); }, function (p) { return (p.compact ? "transparent" : p.theme.accent_3); }, function (p) { return (p.compact ? "24px" : "40px"); });
var StyledCardDismiss = styled__default['default'].button(templateObject_4$1 || (templateObject_4$1 = __makeTemplateObject(["\n  width: 16px;\n  height: 16px;\n  border: none;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: ", ";\n  color: ", ";\n  padding: 3px;\n\n  position: absolute;\n  top: -8px;\n  left: calc(100% - 8px);\n\n  transition: 300ms;\n\n  svg {\n    width: 10px;\n    height: 10px;\n    transition: 300ms;\n  }\n\n  &:hover {\n    top: -7px;\n    left: calc(100% - 7px);\n    width: 14px;\n    height: 14px;\n    cursor: pointer;\n  }\n"], ["\n  width: 16px;\n  height: 16px;\n  border: none;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: ", ";\n  color: ", ";\n  padding: 3px;\n\n  position: absolute;\n  top: -8px;\n  left: calc(100% - 8px);\n\n  transition: 300ms;\n\n  svg {\n    width: 10px;\n    height: 10px;\n    transition: 300ms;\n  }\n\n  &:hover {\n    top: -7px;\n    left: calc(100% - 7px);\n    width: 14px;\n    height: 14px;\n    cursor: pointer;\n  }\n"])), function (p) { return p.theme.accent_3; }, function (p) { return p.theme.fg; });
function Card(props) {
    return (React__default['default'].createElement(StyledCard, __assign({}, __assign(__assign({}, props), { children: undefined })),
        props.dismiss && (React__default['default'].createElement(StyledCardDismiss, { onClick: props.dismiss },
            React__default['default'].createElement(reactUnicons.UilTimes, null))),
        React__default['default'].createElement(StyledCardBody, { subcard: props.subcard, compact: props.compact, hasFooter: props.footer ? true : false }, props.children),
        props.footer && (React__default['default'].createElement(StyledCardFooter, { compact: props.compact, style: props.footerStyle }, props.footer))));
}
var CardForm = styled__default['default'].form(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  width: 100%;\n  margin: 0;\n  padding: 0;\n\n  & > :first-child {\n    margin-top: 0;\n  }\n"], ["\n  width: 100%;\n  margin: 0;\n  padding: 0;\n\n  & > :first-child {\n    margin-top: 0;\n  }\n"])));
var templateObject_1$8, templateObject_2$4, templateObject_3$4, templateObject_4$1, templateObject_5;

var StyledOceanRoot = styled__default['default'].div(templateObject_1$7 || (templateObject_1$7 = __makeTemplateObject(["\n  width: 100%;\n  background: ", ";\n  box-sizing: border-box;\n\n  .button + .button,\n  .icon-button + .button {\n    margin-left: 16px;\n  }\n\n  * + .checkbox,\n  * + .separator,\n  * + .radio,\n  * + .div,\n  * + .toggle,\n  * + .option-switch {\n    margin-top: 16px;\n  }\n\n  * {\n    font-family: \"Roboto\", -apple-system, BlinkMacSystemFont, \"Segoe UI\",\n      \"Roboto\", \"Oxygen\", \"Ubuntu\", \"Cantarell\", \"Fira Sans\", \"Droid Sans\",\n      \"Helvetica Neue\", sans-serif;\n\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n  }\n"], ["\n  width: 100%;\n  background: ", ";\n  box-sizing: border-box;\n\n  .button + .button,\n  .icon-button + .button {\n    margin-left: 16px;\n  }\n\n  * + .checkbox,\n  * + .separator,\n  * + .radio,\n  * + .div,\n  * + .toggle,\n  * + .option-switch {\n    margin-top: 16px;\n  }\n\n  * {\n    font-family: \"Roboto\", -apple-system, BlinkMacSystemFont, \"Segoe UI\",\n      \"Roboto\", \"Oxygen\", \"Ubuntu\", \"Cantarell\", \"Fira Sans\", \"Droid Sans\",\n      \"Helvetica Neue\", sans-serif;\n\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n  }\n"])), function (p) { return p.theme.bg; });
function OceanRoot(_a) {
    var theme = _a.theme, children = _a.children;
    return (React__default['default'].createElement(styled.ThemeProvider, { theme: theme },
        React__default['default'].createElement(StyledOceanRoot, null, children)));
}
var templateObject_1$7;

var StyledCheckboxContainer = styled__default['default'].label(templateObject_1$6 || (templateObject_1$6 = __makeTemplateObject(["\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: flex-start;\n  flex-flow: row;\n  cursor: pointer;\n"], ["\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: flex-start;\n  flex-flow: row;\n  cursor: pointer;\n"])));
var StyledCheckbox = styled__default['default'].button(templateObject_2$3 || (templateObject_2$3 = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 2px;\n\n  background: transparent;\n  width: 16px;\n  height: 16px;\n  border-radius: 3px;\n  border: 1px solid ", ";\n  transition: 300ms;\n\n  svg {\n    color: ", ";\n    opacity: 0;\n    width: 5px;\n    height: 5px;\n    transition: 300ms;\n  }\n\n  &:hover, &:focus {\n    cursor: pointer;\n    border-color: ", ";\n  }\n\n  &:focus {\n    outline: none;\n  }\n\n  &.checkbox__checkbox--checked {\n    border-color: ", ";\n    background: ", ";\n\n    svg {\n      width: 14px;\n      height: 14px;\n      opacity: 1;\n    }\n  }\n"], ["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 2px;\n\n  background: transparent;\n  width: 16px;\n  height: 16px;\n  border-radius: 3px;\n  border: 1px solid ", ";\n  transition: 300ms;\n\n  svg {\n    color: ", ";\n    opacity: 0;\n    width: 5px;\n    height: 5px;\n    transition: 300ms;\n  }\n\n  &:hover, &:focus {\n    cursor: pointer;\n    border-color: ", ";\n  }\n\n  &:focus {\n    outline: none;\n  }\n\n  &.checkbox__checkbox--checked {\n    border-color: ", ";\n    background: ", ";\n\n    svg {\n      width: 14px;\n      height: 14px;\n      opacity: 1;\n    }\n  }\n"])), function (p) { return p.theme.accent_2; }, function (p) { return p.theme.on_primary; }, function (p) { return p.theme.accent_1; }, function (p) { return p.theme.primary; }, function (p) { return p.theme.primary; });
var StyledCheckboxLabel = styled__default['default'].span(templateObject_3$3 || (templateObject_3$3 = __makeTemplateObject(["\n  margin-left: 12px;\n  font-size: 13px;\n  padding-bottom: 1px;\n  color: ", ";\n  transition: 300ms;\n\n  &.checkbox__label--checked {\n    color: ", ";\n  }\n"], ["\n  margin-left: 12px;\n  font-size: 13px;\n  padding-bottom: 1px;\n  color: ", ";\n  transition: 300ms;\n\n  &.checkbox__label--checked {\n    color: ", ";\n  }\n"])), function (p) { return p.theme.accent_1; }, function (p) { return p.theme.fg; });
function index$1 (props) {
    var _a, _b;
    var _c = React.useState(props.defaultChecked || false), checked = _c[0], setChecked = _c[1];
    return (React__default['default'].createElement(StyledCheckboxContainer, { className: "checkbox" },
        React__default['default'].createElement(StyledCheckbox, { onClick: function () {
                var _a;
                setChecked(!checked);
                return !((_a = props.checked) !== null && _a !== void 0 ? _a : checked);
            }, className: ((_a = props.checked) !== null && _a !== void 0 ? _a : checked) ? "checkbox__checkbox--checked" : "" },
            React__default['default'].createElement(reactUnicons.UilCheck, { size: "13" })),
        React__default['default'].createElement(StyledCheckboxLabel, { className: ((_b = props.checked) !== null && _b !== void 0 ? _b : checked) ? "checkbox__label--checked" : "" }, props.children)));
}
var templateObject_1$6, templateObject_2$3, templateObject_3$3;

var StyledToggleContainer = styled__default['default'].label(templateObject_1$5 || (templateObject_1$5 = __makeTemplateObject(["\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  flex-flow: row;\n  cursor: pointer;\n\n  * {\n    transition: 300ms;\n  }\n"], ["\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  flex-flow: row;\n  cursor: pointer;\n\n  * {\n    transition: 300ms;\n  }\n"])));
var StyledToggleLabel = styled__default['default'].span(templateObject_2$2 || (templateObject_2$2 = __makeTemplateObject(["\n  font-size: 13px;\n  padding-bottom: 1px;\n  color: ", ";\n  transition: 300ms;\n\n  &.toggle__label--checked {\n    color: ", ";\n  }\n"], ["\n  font-size: 13px;\n  padding-bottom: 1px;\n  color: ", ";\n  transition: 300ms;\n\n  &.toggle__label--checked {\n    color: ", ";\n  }\n"])), function (p) { return p.theme.accent_1; }, function (p) { return p.theme.fg; });
var StyledToggle = styled__default['default'].button(templateObject_3$2 || (templateObject_3$2 = __makeTemplateObject(["\n  border: 1px solid ", ";\n  border-radius: 16px;\n  height: 16px;\n  width: 32px;\n  background: transparent;\n  cursor: pointer;\n  transition: 300ms;\n  position: relative;\n  transition: 300ms;\n\n  &:before {\n    content: \"\";\n    border-radius: 50%;\n    width: 10px;\n    height: 10px;\n    background: ", ";\n    transition: 300ms;\n    position: absolute;\n    top: 2px;\n    left: 2px;\n  }\n\n  &:hover, &:focus {\n    border-color: ", ";\n\n    &:before {\n      background: ", ";\n    }\n  }\n\n  &:focus {\n    outline: none;\n  }\n\n  &.toggle__toggle--checked {\n    border-color: ", ";\n    background: ", ";\n\n    &::before {\n      left: 18px;\n      background: ", ";\n    }\n  }\n"], ["\n  border: 1px solid ", ";\n  border-radius: 16px;\n  height: 16px;\n  width: 32px;\n  background: transparent;\n  cursor: pointer;\n  transition: 300ms;\n  position: relative;\n  transition: 300ms;\n\n  &:before {\n    content: \"\";\n    border-radius: 50%;\n    width: 10px;\n    height: 10px;\n    background: ", ";\n    transition: 300ms;\n    position: absolute;\n    top: 2px;\n    left: 2px;\n  }\n\n  &:hover, &:focus {\n    border-color: ", ";\n\n    &:before {\n      background: ", ";\n    }\n  }\n\n  &:focus {\n    outline: none;\n  }\n\n  &.toggle__toggle--checked {\n    border-color: ", ";\n    background: ", ";\n\n    &::before {\n      left: 18px;\n      background: ", ";\n    }\n  }\n"])), function (p) { return p.theme.accent_2; }, function (p) { return p.theme.accent_2; }, function (p) { return p.theme.accent_1; }, function (p) { return p.theme.accent_1; }, function (p) { return p.theme.primary; }, function (p) { return p.theme.primary; }, function (p) { return p.theme.on_primary; });
function ToggleSwitch(props) {
    return (React__default['default'].createElement(StyledToggleContainer, { className: "toggle" },
        React__default['default'].createElement(StyledToggleLabel, { className: "toggle__label" + (props.checked ? ' toggle__label--checked' : '') }, props.children),
        React__default['default'].createElement(StyledToggle, { onClick: function () { return props.onToggle(!props.checked); }, className: "toggle__toggle" + (props.checked ? ' toggle__toggle--checked' : '') })));
}
var templateObject_1$5, templateObject_2$2, templateObject_3$2;

function createCommonjsModule(fn) {
  var module = { exports: {} };
	return fn(module, module.exports), module.exports;
}

var colorName$1 = {
	"aliceblue": [240, 248, 255],
	"antiquewhite": [250, 235, 215],
	"aqua": [0, 255, 255],
	"aquamarine": [127, 255, 212],
	"azure": [240, 255, 255],
	"beige": [245, 245, 220],
	"bisque": [255, 228, 196],
	"black": [0, 0, 0],
	"blanchedalmond": [255, 235, 205],
	"blue": [0, 0, 255],
	"blueviolet": [138, 43, 226],
	"brown": [165, 42, 42],
	"burlywood": [222, 184, 135],
	"cadetblue": [95, 158, 160],
	"chartreuse": [127, 255, 0],
	"chocolate": [210, 105, 30],
	"coral": [255, 127, 80],
	"cornflowerblue": [100, 149, 237],
	"cornsilk": [255, 248, 220],
	"crimson": [220, 20, 60],
	"cyan": [0, 255, 255],
	"darkblue": [0, 0, 139],
	"darkcyan": [0, 139, 139],
	"darkgoldenrod": [184, 134, 11],
	"darkgray": [169, 169, 169],
	"darkgreen": [0, 100, 0],
	"darkgrey": [169, 169, 169],
	"darkkhaki": [189, 183, 107],
	"darkmagenta": [139, 0, 139],
	"darkolivegreen": [85, 107, 47],
	"darkorange": [255, 140, 0],
	"darkorchid": [153, 50, 204],
	"darkred": [139, 0, 0],
	"darksalmon": [233, 150, 122],
	"darkseagreen": [143, 188, 143],
	"darkslateblue": [72, 61, 139],
	"darkslategray": [47, 79, 79],
	"darkslategrey": [47, 79, 79],
	"darkturquoise": [0, 206, 209],
	"darkviolet": [148, 0, 211],
	"deeppink": [255, 20, 147],
	"deepskyblue": [0, 191, 255],
	"dimgray": [105, 105, 105],
	"dimgrey": [105, 105, 105],
	"dodgerblue": [30, 144, 255],
	"firebrick": [178, 34, 34],
	"floralwhite": [255, 250, 240],
	"forestgreen": [34, 139, 34],
	"fuchsia": [255, 0, 255],
	"gainsboro": [220, 220, 220],
	"ghostwhite": [248, 248, 255],
	"gold": [255, 215, 0],
	"goldenrod": [218, 165, 32],
	"gray": [128, 128, 128],
	"green": [0, 128, 0],
	"greenyellow": [173, 255, 47],
	"grey": [128, 128, 128],
	"honeydew": [240, 255, 240],
	"hotpink": [255, 105, 180],
	"indianred": [205, 92, 92],
	"indigo": [75, 0, 130],
	"ivory": [255, 255, 240],
	"khaki": [240, 230, 140],
	"lavender": [230, 230, 250],
	"lavenderblush": [255, 240, 245],
	"lawngreen": [124, 252, 0],
	"lemonchiffon": [255, 250, 205],
	"lightblue": [173, 216, 230],
	"lightcoral": [240, 128, 128],
	"lightcyan": [224, 255, 255],
	"lightgoldenrodyellow": [250, 250, 210],
	"lightgray": [211, 211, 211],
	"lightgreen": [144, 238, 144],
	"lightgrey": [211, 211, 211],
	"lightpink": [255, 182, 193],
	"lightsalmon": [255, 160, 122],
	"lightseagreen": [32, 178, 170],
	"lightskyblue": [135, 206, 250],
	"lightslategray": [119, 136, 153],
	"lightslategrey": [119, 136, 153],
	"lightsteelblue": [176, 196, 222],
	"lightyellow": [255, 255, 224],
	"lime": [0, 255, 0],
	"limegreen": [50, 205, 50],
	"linen": [250, 240, 230],
	"magenta": [255, 0, 255],
	"maroon": [128, 0, 0],
	"mediumaquamarine": [102, 205, 170],
	"mediumblue": [0, 0, 205],
	"mediumorchid": [186, 85, 211],
	"mediumpurple": [147, 112, 219],
	"mediumseagreen": [60, 179, 113],
	"mediumslateblue": [123, 104, 238],
	"mediumspringgreen": [0, 250, 154],
	"mediumturquoise": [72, 209, 204],
	"mediumvioletred": [199, 21, 133],
	"midnightblue": [25, 25, 112],
	"mintcream": [245, 255, 250],
	"mistyrose": [255, 228, 225],
	"moccasin": [255, 228, 181],
	"navajowhite": [255, 222, 173],
	"navy": [0, 0, 128],
	"oldlace": [253, 245, 230],
	"olive": [128, 128, 0],
	"olivedrab": [107, 142, 35],
	"orange": [255, 165, 0],
	"orangered": [255, 69, 0],
	"orchid": [218, 112, 214],
	"palegoldenrod": [238, 232, 170],
	"palegreen": [152, 251, 152],
	"paleturquoise": [175, 238, 238],
	"palevioletred": [219, 112, 147],
	"papayawhip": [255, 239, 213],
	"peachpuff": [255, 218, 185],
	"peru": [205, 133, 63],
	"pink": [255, 192, 203],
	"plum": [221, 160, 221],
	"powderblue": [176, 224, 230],
	"purple": [128, 0, 128],
	"rebeccapurple": [102, 51, 153],
	"red": [255, 0, 0],
	"rosybrown": [188, 143, 143],
	"royalblue": [65, 105, 225],
	"saddlebrown": [139, 69, 19],
	"salmon": [250, 128, 114],
	"sandybrown": [244, 164, 96],
	"seagreen": [46, 139, 87],
	"seashell": [255, 245, 238],
	"sienna": [160, 82, 45],
	"silver": [192, 192, 192],
	"skyblue": [135, 206, 235],
	"slateblue": [106, 90, 205],
	"slategray": [112, 128, 144],
	"slategrey": [112, 128, 144],
	"snow": [255, 250, 250],
	"springgreen": [0, 255, 127],
	"steelblue": [70, 130, 180],
	"tan": [210, 180, 140],
	"teal": [0, 128, 128],
	"thistle": [216, 191, 216],
	"tomato": [255, 99, 71],
	"turquoise": [64, 224, 208],
	"violet": [238, 130, 238],
	"wheat": [245, 222, 179],
	"white": [255, 255, 255],
	"whitesmoke": [245, 245, 245],
	"yellow": [255, 255, 0],
	"yellowgreen": [154, 205, 50]
};

var isArrayish = function isArrayish(obj) {
	if (!obj || typeof obj === 'string') {
		return false;
	}

	return obj instanceof Array || Array.isArray(obj) ||
		(obj.length >= 0 && (obj.splice instanceof Function ||
			(Object.getOwnPropertyDescriptor(obj, (obj.length - 1)) && obj.constructor.name !== 'String')));
};

var simpleSwizzle = createCommonjsModule(function (module) {



var concat = Array.prototype.concat;
var slice = Array.prototype.slice;

var swizzle = module.exports = function swizzle(args) {
	var results = [];

	for (var i = 0, len = args.length; i < len; i++) {
		var arg = args[i];

		if (isArrayish(arg)) {
			// http://jsperf.com/javascript-array-concat-vs-push/98
			results = concat.call(results, slice.call(arg));
		} else {
			results.push(arg);
		}
	}

	return results;
};

swizzle.wrap = function (fn) {
	return function () {
		return fn(swizzle(arguments));
	};
};
});

/* MIT license */

var colorString = createCommonjsModule(function (module) {
var reverseNames = {};

// create a list of reverse color names
for (var name in colorName$1) {
	if (colorName$1.hasOwnProperty(name)) {
		reverseNames[colorName$1[name]] = name;
	}
}

var cs = module.exports = {
	to: {},
	get: {}
};

cs.get = function (string) {
	var prefix = string.substring(0, 3).toLowerCase();
	var val;
	var model;
	switch (prefix) {
		case 'hsl':
			val = cs.get.hsl(string);
			model = 'hsl';
			break;
		case 'hwb':
			val = cs.get.hwb(string);
			model = 'hwb';
			break;
		default:
			val = cs.get.rgb(string);
			model = 'rgb';
			break;
	}

	if (!val) {
		return null;
	}

	return {model: model, value: val};
};

cs.get.rgb = function (string) {
	if (!string) {
		return null;
	}

	var abbr = /^#([a-f0-9]{3,4})$/i;
	var hex = /^#([a-f0-9]{6})([a-f0-9]{2})?$/i;
	var rgba = /^rgba?\(\s*([+-]?\d+)\s*,\s*([+-]?\d+)\s*,\s*([+-]?\d+)\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/;
	var per = /^rgba?\(\s*([+-]?[\d\.]+)\%\s*,\s*([+-]?[\d\.]+)\%\s*,\s*([+-]?[\d\.]+)\%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/;
	var keyword = /(\D+)/;

	var rgb = [0, 0, 0, 1];
	var match;
	var i;
	var hexAlpha;

	if (match = string.match(hex)) {
		hexAlpha = match[2];
		match = match[1];

		for (i = 0; i < 3; i++) {
			// https://jsperf.com/slice-vs-substr-vs-substring-methods-long-string/19
			var i2 = i * 2;
			rgb[i] = parseInt(match.slice(i2, i2 + 2), 16);
		}

		if (hexAlpha) {
			rgb[3] = parseInt(hexAlpha, 16) / 255;
		}
	} else if (match = string.match(abbr)) {
		match = match[1];
		hexAlpha = match[3];

		for (i = 0; i < 3; i++) {
			rgb[i] = parseInt(match[i] + match[i], 16);
		}

		if (hexAlpha) {
			rgb[3] = parseInt(hexAlpha + hexAlpha, 16) / 255;
		}
	} else if (match = string.match(rgba)) {
		for (i = 0; i < 3; i++) {
			rgb[i] = parseInt(match[i + 1], 0);
		}

		if (match[4]) {
			rgb[3] = parseFloat(match[4]);
		}
	} else if (match = string.match(per)) {
		for (i = 0; i < 3; i++) {
			rgb[i] = Math.round(parseFloat(match[i + 1]) * 2.55);
		}

		if (match[4]) {
			rgb[3] = parseFloat(match[4]);
		}
	} else if (match = string.match(keyword)) {
		if (match[1] === 'transparent') {
			return [0, 0, 0, 0];
		}

		rgb = colorName$1[match[1]];

		if (!rgb) {
			return null;
		}

		rgb[3] = 1;

		return rgb;
	} else {
		return null;
	}

	for (i = 0; i < 3; i++) {
		rgb[i] = clamp(rgb[i], 0, 255);
	}
	rgb[3] = clamp(rgb[3], 0, 1);

	return rgb;
};

cs.get.hsl = function (string) {
	if (!string) {
		return null;
	}

	var hsl = /^hsla?\(\s*([+-]?(?:\d{0,3}\.)?\d+)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/;
	var match = string.match(hsl);

	if (match) {
		var alpha = parseFloat(match[4]);
		var h = (parseFloat(match[1]) + 360) % 360;
		var s = clamp(parseFloat(match[2]), 0, 100);
		var l = clamp(parseFloat(match[3]), 0, 100);
		var a = clamp(isNaN(alpha) ? 1 : alpha, 0, 1);

		return [h, s, l, a];
	}

	return null;
};

cs.get.hwb = function (string) {
	if (!string) {
		return null;
	}

	var hwb = /^hwb\(\s*([+-]?\d{0,3}(?:\.\d+)?)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/;
	var match = string.match(hwb);

	if (match) {
		var alpha = parseFloat(match[4]);
		var h = ((parseFloat(match[1]) % 360) + 360) % 360;
		var w = clamp(parseFloat(match[2]), 0, 100);
		var b = clamp(parseFloat(match[3]), 0, 100);
		var a = clamp(isNaN(alpha) ? 1 : alpha, 0, 1);
		return [h, w, b, a];
	}

	return null;
};

cs.to.hex = function () {
	var rgba = simpleSwizzle(arguments);

	return (
		'#' +
		hexDouble(rgba[0]) +
		hexDouble(rgba[1]) +
		hexDouble(rgba[2]) +
		(rgba[3] < 1
			? (hexDouble(Math.round(rgba[3] * 255)))
			: '')
	);
};

cs.to.rgb = function () {
	var rgba = simpleSwizzle(arguments);

	return rgba.length < 4 || rgba[3] === 1
		? 'rgb(' + Math.round(rgba[0]) + ', ' + Math.round(rgba[1]) + ', ' + Math.round(rgba[2]) + ')'
		: 'rgba(' + Math.round(rgba[0]) + ', ' + Math.round(rgba[1]) + ', ' + Math.round(rgba[2]) + ', ' + rgba[3] + ')';
};

cs.to.rgb.percent = function () {
	var rgba = simpleSwizzle(arguments);

	var r = Math.round(rgba[0] / 255 * 100);
	var g = Math.round(rgba[1] / 255 * 100);
	var b = Math.round(rgba[2] / 255 * 100);

	return rgba.length < 4 || rgba[3] === 1
		? 'rgb(' + r + '%, ' + g + '%, ' + b + '%)'
		: 'rgba(' + r + '%, ' + g + '%, ' + b + '%, ' + rgba[3] + ')';
};

cs.to.hsl = function () {
	var hsla = simpleSwizzle(arguments);
	return hsla.length < 4 || hsla[3] === 1
		? 'hsl(' + hsla[0] + ', ' + hsla[1] + '%, ' + hsla[2] + '%)'
		: 'hsla(' + hsla[0] + ', ' + hsla[1] + '%, ' + hsla[2] + '%, ' + hsla[3] + ')';
};

// hwb is a bit different than rgb(a) & hsl(a) since there is no alpha specific syntax
// (hwb have alpha optional & 1 is default value)
cs.to.hwb = function () {
	var hwba = simpleSwizzle(arguments);

	var a = '';
	if (hwba.length >= 4 && hwba[3] !== 1) {
		a = ', ' + hwba[3];
	}

	return 'hwb(' + hwba[0] + ', ' + hwba[1] + '%, ' + hwba[2] + '%' + a + ')';
};

cs.to.keyword = function (rgb) {
	return reverseNames[rgb.slice(0, 3)];
};

// helpers
function clamp(num, min, max) {
	return Math.min(Math.max(min, num), max);
}

function hexDouble(num) {
	var str = num.toString(16).toUpperCase();
	return (str.length < 2) ? '0' + str : str;
}
});

var colorName = {
	"aliceblue": [240, 248, 255],
	"antiquewhite": [250, 235, 215],
	"aqua": [0, 255, 255],
	"aquamarine": [127, 255, 212],
	"azure": [240, 255, 255],
	"beige": [245, 245, 220],
	"bisque": [255, 228, 196],
	"black": [0, 0, 0],
	"blanchedalmond": [255, 235, 205],
	"blue": [0, 0, 255],
	"blueviolet": [138, 43, 226],
	"brown": [165, 42, 42],
	"burlywood": [222, 184, 135],
	"cadetblue": [95, 158, 160],
	"chartreuse": [127, 255, 0],
	"chocolate": [210, 105, 30],
	"coral": [255, 127, 80],
	"cornflowerblue": [100, 149, 237],
	"cornsilk": [255, 248, 220],
	"crimson": [220, 20, 60],
	"cyan": [0, 255, 255],
	"darkblue": [0, 0, 139],
	"darkcyan": [0, 139, 139],
	"darkgoldenrod": [184, 134, 11],
	"darkgray": [169, 169, 169],
	"darkgreen": [0, 100, 0],
	"darkgrey": [169, 169, 169],
	"darkkhaki": [189, 183, 107],
	"darkmagenta": [139, 0, 139],
	"darkolivegreen": [85, 107, 47],
	"darkorange": [255, 140, 0],
	"darkorchid": [153, 50, 204],
	"darkred": [139, 0, 0],
	"darksalmon": [233, 150, 122],
	"darkseagreen": [143, 188, 143],
	"darkslateblue": [72, 61, 139],
	"darkslategray": [47, 79, 79],
	"darkslategrey": [47, 79, 79],
	"darkturquoise": [0, 206, 209],
	"darkviolet": [148, 0, 211],
	"deeppink": [255, 20, 147],
	"deepskyblue": [0, 191, 255],
	"dimgray": [105, 105, 105],
	"dimgrey": [105, 105, 105],
	"dodgerblue": [30, 144, 255],
	"firebrick": [178, 34, 34],
	"floralwhite": [255, 250, 240],
	"forestgreen": [34, 139, 34],
	"fuchsia": [255, 0, 255],
	"gainsboro": [220, 220, 220],
	"ghostwhite": [248, 248, 255],
	"gold": [255, 215, 0],
	"goldenrod": [218, 165, 32],
	"gray": [128, 128, 128],
	"green": [0, 128, 0],
	"greenyellow": [173, 255, 47],
	"grey": [128, 128, 128],
	"honeydew": [240, 255, 240],
	"hotpink": [255, 105, 180],
	"indianred": [205, 92, 92],
	"indigo": [75, 0, 130],
	"ivory": [255, 255, 240],
	"khaki": [240, 230, 140],
	"lavender": [230, 230, 250],
	"lavenderblush": [255, 240, 245],
	"lawngreen": [124, 252, 0],
	"lemonchiffon": [255, 250, 205],
	"lightblue": [173, 216, 230],
	"lightcoral": [240, 128, 128],
	"lightcyan": [224, 255, 255],
	"lightgoldenrodyellow": [250, 250, 210],
	"lightgray": [211, 211, 211],
	"lightgreen": [144, 238, 144],
	"lightgrey": [211, 211, 211],
	"lightpink": [255, 182, 193],
	"lightsalmon": [255, 160, 122],
	"lightseagreen": [32, 178, 170],
	"lightskyblue": [135, 206, 250],
	"lightslategray": [119, 136, 153],
	"lightslategrey": [119, 136, 153],
	"lightsteelblue": [176, 196, 222],
	"lightyellow": [255, 255, 224],
	"lime": [0, 255, 0],
	"limegreen": [50, 205, 50],
	"linen": [250, 240, 230],
	"magenta": [255, 0, 255],
	"maroon": [128, 0, 0],
	"mediumaquamarine": [102, 205, 170],
	"mediumblue": [0, 0, 205],
	"mediumorchid": [186, 85, 211],
	"mediumpurple": [147, 112, 219],
	"mediumseagreen": [60, 179, 113],
	"mediumslateblue": [123, 104, 238],
	"mediumspringgreen": [0, 250, 154],
	"mediumturquoise": [72, 209, 204],
	"mediumvioletred": [199, 21, 133],
	"midnightblue": [25, 25, 112],
	"mintcream": [245, 255, 250],
	"mistyrose": [255, 228, 225],
	"moccasin": [255, 228, 181],
	"navajowhite": [255, 222, 173],
	"navy": [0, 0, 128],
	"oldlace": [253, 245, 230],
	"olive": [128, 128, 0],
	"olivedrab": [107, 142, 35],
	"orange": [255, 165, 0],
	"orangered": [255, 69, 0],
	"orchid": [218, 112, 214],
	"palegoldenrod": [238, 232, 170],
	"palegreen": [152, 251, 152],
	"paleturquoise": [175, 238, 238],
	"palevioletred": [219, 112, 147],
	"papayawhip": [255, 239, 213],
	"peachpuff": [255, 218, 185],
	"peru": [205, 133, 63],
	"pink": [255, 192, 203],
	"plum": [221, 160, 221],
	"powderblue": [176, 224, 230],
	"purple": [128, 0, 128],
	"rebeccapurple": [102, 51, 153],
	"red": [255, 0, 0],
	"rosybrown": [188, 143, 143],
	"royalblue": [65, 105, 225],
	"saddlebrown": [139, 69, 19],
	"salmon": [250, 128, 114],
	"sandybrown": [244, 164, 96],
	"seagreen": [46, 139, 87],
	"seashell": [255, 245, 238],
	"sienna": [160, 82, 45],
	"silver": [192, 192, 192],
	"skyblue": [135, 206, 235],
	"slateblue": [106, 90, 205],
	"slategray": [112, 128, 144],
	"slategrey": [112, 128, 144],
	"snow": [255, 250, 250],
	"springgreen": [0, 255, 127],
	"steelblue": [70, 130, 180],
	"tan": [210, 180, 140],
	"teal": [0, 128, 128],
	"thistle": [216, 191, 216],
	"tomato": [255, 99, 71],
	"turquoise": [64, 224, 208],
	"violet": [238, 130, 238],
	"wheat": [245, 222, 179],
	"white": [255, 255, 255],
	"whitesmoke": [245, 245, 245],
	"yellow": [255, 255, 0],
	"yellowgreen": [154, 205, 50]
};

/* MIT license */

var conversions = createCommonjsModule(function (module) {
// NOTE: conversions should only return primitive values (i.e. arrays, or
//       values that give correct `typeof` results).
//       do not use box values types (i.e. Number(), String(), etc.)

var reverseKeywords = {};
for (var key in colorName) {
	if (colorName.hasOwnProperty(key)) {
		reverseKeywords[colorName[key]] = key;
	}
}

var convert = module.exports = {
	rgb: {channels: 3, labels: 'rgb'},
	hsl: {channels: 3, labels: 'hsl'},
	hsv: {channels: 3, labels: 'hsv'},
	hwb: {channels: 3, labels: 'hwb'},
	cmyk: {channels: 4, labels: 'cmyk'},
	xyz: {channels: 3, labels: 'xyz'},
	lab: {channels: 3, labels: 'lab'},
	lch: {channels: 3, labels: 'lch'},
	hex: {channels: 1, labels: ['hex']},
	keyword: {channels: 1, labels: ['keyword']},
	ansi16: {channels: 1, labels: ['ansi16']},
	ansi256: {channels: 1, labels: ['ansi256']},
	hcg: {channels: 3, labels: ['h', 'c', 'g']},
	apple: {channels: 3, labels: ['r16', 'g16', 'b16']},
	gray: {channels: 1, labels: ['gray']}
};

// hide .channels and .labels properties
for (var model in convert) {
	if (convert.hasOwnProperty(model)) {
		if (!('channels' in convert[model])) {
			throw new Error('missing channels property: ' + model);
		}

		if (!('labels' in convert[model])) {
			throw new Error('missing channel labels property: ' + model);
		}

		if (convert[model].labels.length !== convert[model].channels) {
			throw new Error('channel and label counts mismatch: ' + model);
		}

		var channels = convert[model].channels;
		var labels = convert[model].labels;
		delete convert[model].channels;
		delete convert[model].labels;
		Object.defineProperty(convert[model], 'channels', {value: channels});
		Object.defineProperty(convert[model], 'labels', {value: labels});
	}
}

convert.rgb.hsl = function (rgb) {
	var r = rgb[0] / 255;
	var g = rgb[1] / 255;
	var b = rgb[2] / 255;
	var min = Math.min(r, g, b);
	var max = Math.max(r, g, b);
	var delta = max - min;
	var h;
	var s;
	var l;

	if (max === min) {
		h = 0;
	} else if (r === max) {
		h = (g - b) / delta;
	} else if (g === max) {
		h = 2 + (b - r) / delta;
	} else if (b === max) {
		h = 4 + (r - g) / delta;
	}

	h = Math.min(h * 60, 360);

	if (h < 0) {
		h += 360;
	}

	l = (min + max) / 2;

	if (max === min) {
		s = 0;
	} else if (l <= 0.5) {
		s = delta / (max + min);
	} else {
		s = delta / (2 - max - min);
	}

	return [h, s * 100, l * 100];
};

convert.rgb.hsv = function (rgb) {
	var rdif;
	var gdif;
	var bdif;
	var h;
	var s;

	var r = rgb[0] / 255;
	var g = rgb[1] / 255;
	var b = rgb[2] / 255;
	var v = Math.max(r, g, b);
	var diff = v - Math.min(r, g, b);
	var diffc = function (c) {
		return (v - c) / 6 / diff + 1 / 2;
	};

	if (diff === 0) {
		h = s = 0;
	} else {
		s = diff / v;
		rdif = diffc(r);
		gdif = diffc(g);
		bdif = diffc(b);

		if (r === v) {
			h = bdif - gdif;
		} else if (g === v) {
			h = (1 / 3) + rdif - bdif;
		} else if (b === v) {
			h = (2 / 3) + gdif - rdif;
		}
		if (h < 0) {
			h += 1;
		} else if (h > 1) {
			h -= 1;
		}
	}

	return [
		h * 360,
		s * 100,
		v * 100
	];
};

convert.rgb.hwb = function (rgb) {
	var r = rgb[0];
	var g = rgb[1];
	var b = rgb[2];
	var h = convert.rgb.hsl(rgb)[0];
	var w = 1 / 255 * Math.min(r, Math.min(g, b));

	b = 1 - 1 / 255 * Math.max(r, Math.max(g, b));

	return [h, w * 100, b * 100];
};

convert.rgb.cmyk = function (rgb) {
	var r = rgb[0] / 255;
	var g = rgb[1] / 255;
	var b = rgb[2] / 255;
	var c;
	var m;
	var y;
	var k;

	k = Math.min(1 - r, 1 - g, 1 - b);
	c = (1 - r - k) / (1 - k) || 0;
	m = (1 - g - k) / (1 - k) || 0;
	y = (1 - b - k) / (1 - k) || 0;

	return [c * 100, m * 100, y * 100, k * 100];
};

/**
 * See https://en.m.wikipedia.org/wiki/Euclidean_distance#Squared_Euclidean_distance
 * */
function comparativeDistance(x, y) {
	return (
		Math.pow(x[0] - y[0], 2) +
		Math.pow(x[1] - y[1], 2) +
		Math.pow(x[2] - y[2], 2)
	);
}

convert.rgb.keyword = function (rgb) {
	var reversed = reverseKeywords[rgb];
	if (reversed) {
		return reversed;
	}

	var currentClosestDistance = Infinity;
	var currentClosestKeyword;

	for (var keyword in colorName) {
		if (colorName.hasOwnProperty(keyword)) {
			var value = colorName[keyword];

			// Compute comparative distance
			var distance = comparativeDistance(rgb, value);

			// Check if its less, if so set as closest
			if (distance < currentClosestDistance) {
				currentClosestDistance = distance;
				currentClosestKeyword = keyword;
			}
		}
	}

	return currentClosestKeyword;
};

convert.keyword.rgb = function (keyword) {
	return colorName[keyword];
};

convert.rgb.xyz = function (rgb) {
	var r = rgb[0] / 255;
	var g = rgb[1] / 255;
	var b = rgb[2] / 255;

	// assume sRGB
	r = r > 0.04045 ? Math.pow(((r + 0.055) / 1.055), 2.4) : (r / 12.92);
	g = g > 0.04045 ? Math.pow(((g + 0.055) / 1.055), 2.4) : (g / 12.92);
	b = b > 0.04045 ? Math.pow(((b + 0.055) / 1.055), 2.4) : (b / 12.92);

	var x = (r * 0.4124) + (g * 0.3576) + (b * 0.1805);
	var y = (r * 0.2126) + (g * 0.7152) + (b * 0.0722);
	var z = (r * 0.0193) + (g * 0.1192) + (b * 0.9505);

	return [x * 100, y * 100, z * 100];
};

convert.rgb.lab = function (rgb) {
	var xyz = convert.rgb.xyz(rgb);
	var x = xyz[0];
	var y = xyz[1];
	var z = xyz[2];
	var l;
	var a;
	var b;

	x /= 95.047;
	y /= 100;
	z /= 108.883;

	x = x > 0.008856 ? Math.pow(x, 1 / 3) : (7.787 * x) + (16 / 116);
	y = y > 0.008856 ? Math.pow(y, 1 / 3) : (7.787 * y) + (16 / 116);
	z = z > 0.008856 ? Math.pow(z, 1 / 3) : (7.787 * z) + (16 / 116);

	l = (116 * y) - 16;
	a = 500 * (x - y);
	b = 200 * (y - z);

	return [l, a, b];
};

convert.hsl.rgb = function (hsl) {
	var h = hsl[0] / 360;
	var s = hsl[1] / 100;
	var l = hsl[2] / 100;
	var t1;
	var t2;
	var t3;
	var rgb;
	var val;

	if (s === 0) {
		val = l * 255;
		return [val, val, val];
	}

	if (l < 0.5) {
		t2 = l * (1 + s);
	} else {
		t2 = l + s - l * s;
	}

	t1 = 2 * l - t2;

	rgb = [0, 0, 0];
	for (var i = 0; i < 3; i++) {
		t3 = h + 1 / 3 * -(i - 1);
		if (t3 < 0) {
			t3++;
		}
		if (t3 > 1) {
			t3--;
		}

		if (6 * t3 < 1) {
			val = t1 + (t2 - t1) * 6 * t3;
		} else if (2 * t3 < 1) {
			val = t2;
		} else if (3 * t3 < 2) {
			val = t1 + (t2 - t1) * (2 / 3 - t3) * 6;
		} else {
			val = t1;
		}

		rgb[i] = val * 255;
	}

	return rgb;
};

convert.hsl.hsv = function (hsl) {
	var h = hsl[0];
	var s = hsl[1] / 100;
	var l = hsl[2] / 100;
	var smin = s;
	var lmin = Math.max(l, 0.01);
	var sv;
	var v;

	l *= 2;
	s *= (l <= 1) ? l : 2 - l;
	smin *= lmin <= 1 ? lmin : 2 - lmin;
	v = (l + s) / 2;
	sv = l === 0 ? (2 * smin) / (lmin + smin) : (2 * s) / (l + s);

	return [h, sv * 100, v * 100];
};

convert.hsv.rgb = function (hsv) {
	var h = hsv[0] / 60;
	var s = hsv[1] / 100;
	var v = hsv[2] / 100;
	var hi = Math.floor(h) % 6;

	var f = h - Math.floor(h);
	var p = 255 * v * (1 - s);
	var q = 255 * v * (1 - (s * f));
	var t = 255 * v * (1 - (s * (1 - f)));
	v *= 255;

	switch (hi) {
		case 0:
			return [v, t, p];
		case 1:
			return [q, v, p];
		case 2:
			return [p, v, t];
		case 3:
			return [p, q, v];
		case 4:
			return [t, p, v];
		case 5:
			return [v, p, q];
	}
};

convert.hsv.hsl = function (hsv) {
	var h = hsv[0];
	var s = hsv[1] / 100;
	var v = hsv[2] / 100;
	var vmin = Math.max(v, 0.01);
	var lmin;
	var sl;
	var l;

	l = (2 - s) * v;
	lmin = (2 - s) * vmin;
	sl = s * vmin;
	sl /= (lmin <= 1) ? lmin : 2 - lmin;
	sl = sl || 0;
	l /= 2;

	return [h, sl * 100, l * 100];
};

// http://dev.w3.org/csswg/css-color/#hwb-to-rgb
convert.hwb.rgb = function (hwb) {
	var h = hwb[0] / 360;
	var wh = hwb[1] / 100;
	var bl = hwb[2] / 100;
	var ratio = wh + bl;
	var i;
	var v;
	var f;
	var n;

	// wh + bl cant be > 1
	if (ratio > 1) {
		wh /= ratio;
		bl /= ratio;
	}

	i = Math.floor(6 * h);
	v = 1 - bl;
	f = 6 * h - i;

	if ((i & 0x01) !== 0) {
		f = 1 - f;
	}

	n = wh + f * (v - wh); // linear interpolation

	var r;
	var g;
	var b;
	switch (i) {
		default:
		case 6:
		case 0: r = v; g = n; b = wh; break;
		case 1: r = n; g = v; b = wh; break;
		case 2: r = wh; g = v; b = n; break;
		case 3: r = wh; g = n; b = v; break;
		case 4: r = n; g = wh; b = v; break;
		case 5: r = v; g = wh; b = n; break;
	}

	return [r * 255, g * 255, b * 255];
};

convert.cmyk.rgb = function (cmyk) {
	var c = cmyk[0] / 100;
	var m = cmyk[1] / 100;
	var y = cmyk[2] / 100;
	var k = cmyk[3] / 100;
	var r;
	var g;
	var b;

	r = 1 - Math.min(1, c * (1 - k) + k);
	g = 1 - Math.min(1, m * (1 - k) + k);
	b = 1 - Math.min(1, y * (1 - k) + k);

	return [r * 255, g * 255, b * 255];
};

convert.xyz.rgb = function (xyz) {
	var x = xyz[0] / 100;
	var y = xyz[1] / 100;
	var z = xyz[2] / 100;
	var r;
	var g;
	var b;

	r = (x * 3.2406) + (y * -1.5372) + (z * -0.4986);
	g = (x * -0.9689) + (y * 1.8758) + (z * 0.0415);
	b = (x * 0.0557) + (y * -0.2040) + (z * 1.0570);

	// assume sRGB
	r = r > 0.0031308
		? ((1.055 * Math.pow(r, 1.0 / 2.4)) - 0.055)
		: r * 12.92;

	g = g > 0.0031308
		? ((1.055 * Math.pow(g, 1.0 / 2.4)) - 0.055)
		: g * 12.92;

	b = b > 0.0031308
		? ((1.055 * Math.pow(b, 1.0 / 2.4)) - 0.055)
		: b * 12.92;

	r = Math.min(Math.max(0, r), 1);
	g = Math.min(Math.max(0, g), 1);
	b = Math.min(Math.max(0, b), 1);

	return [r * 255, g * 255, b * 255];
};

convert.xyz.lab = function (xyz) {
	var x = xyz[0];
	var y = xyz[1];
	var z = xyz[2];
	var l;
	var a;
	var b;

	x /= 95.047;
	y /= 100;
	z /= 108.883;

	x = x > 0.008856 ? Math.pow(x, 1 / 3) : (7.787 * x) + (16 / 116);
	y = y > 0.008856 ? Math.pow(y, 1 / 3) : (7.787 * y) + (16 / 116);
	z = z > 0.008856 ? Math.pow(z, 1 / 3) : (7.787 * z) + (16 / 116);

	l = (116 * y) - 16;
	a = 500 * (x - y);
	b = 200 * (y - z);

	return [l, a, b];
};

convert.lab.xyz = function (lab) {
	var l = lab[0];
	var a = lab[1];
	var b = lab[2];
	var x;
	var y;
	var z;

	y = (l + 16) / 116;
	x = a / 500 + y;
	z = y - b / 200;

	var y2 = Math.pow(y, 3);
	var x2 = Math.pow(x, 3);
	var z2 = Math.pow(z, 3);
	y = y2 > 0.008856 ? y2 : (y - 16 / 116) / 7.787;
	x = x2 > 0.008856 ? x2 : (x - 16 / 116) / 7.787;
	z = z2 > 0.008856 ? z2 : (z - 16 / 116) / 7.787;

	x *= 95.047;
	y *= 100;
	z *= 108.883;

	return [x, y, z];
};

convert.lab.lch = function (lab) {
	var l = lab[0];
	var a = lab[1];
	var b = lab[2];
	var hr;
	var h;
	var c;

	hr = Math.atan2(b, a);
	h = hr * 360 / 2 / Math.PI;

	if (h < 0) {
		h += 360;
	}

	c = Math.sqrt(a * a + b * b);

	return [l, c, h];
};

convert.lch.lab = function (lch) {
	var l = lch[0];
	var c = lch[1];
	var h = lch[2];
	var a;
	var b;
	var hr;

	hr = h / 360 * 2 * Math.PI;
	a = c * Math.cos(hr);
	b = c * Math.sin(hr);

	return [l, a, b];
};

convert.rgb.ansi16 = function (args) {
	var r = args[0];
	var g = args[1];
	var b = args[2];
	var value = 1 in arguments ? arguments[1] : convert.rgb.hsv(args)[2]; // hsv -> ansi16 optimization

	value = Math.round(value / 50);

	if (value === 0) {
		return 30;
	}

	var ansi = 30
		+ ((Math.round(b / 255) << 2)
		| (Math.round(g / 255) << 1)
		| Math.round(r / 255));

	if (value === 2) {
		ansi += 60;
	}

	return ansi;
};

convert.hsv.ansi16 = function (args) {
	// optimization here; we already know the value and don't need to get
	// it converted for us.
	return convert.rgb.ansi16(convert.hsv.rgb(args), args[2]);
};

convert.rgb.ansi256 = function (args) {
	var r = args[0];
	var g = args[1];
	var b = args[2];

	// we use the extended greyscale palette here, with the exception of
	// black and white. normal palette only has 4 greyscale shades.
	if (r === g && g === b) {
		if (r < 8) {
			return 16;
		}

		if (r > 248) {
			return 231;
		}

		return Math.round(((r - 8) / 247) * 24) + 232;
	}

	var ansi = 16
		+ (36 * Math.round(r / 255 * 5))
		+ (6 * Math.round(g / 255 * 5))
		+ Math.round(b / 255 * 5);

	return ansi;
};

convert.ansi16.rgb = function (args) {
	var color = args % 10;

	// handle greyscale
	if (color === 0 || color === 7) {
		if (args > 50) {
			color += 3.5;
		}

		color = color / 10.5 * 255;

		return [color, color, color];
	}

	var mult = (~~(args > 50) + 1) * 0.5;
	var r = ((color & 1) * mult) * 255;
	var g = (((color >> 1) & 1) * mult) * 255;
	var b = (((color >> 2) & 1) * mult) * 255;

	return [r, g, b];
};

convert.ansi256.rgb = function (args) {
	// handle greyscale
	if (args >= 232) {
		var c = (args - 232) * 10 + 8;
		return [c, c, c];
	}

	args -= 16;

	var rem;
	var r = Math.floor(args / 36) / 5 * 255;
	var g = Math.floor((rem = args % 36) / 6) / 5 * 255;
	var b = (rem % 6) / 5 * 255;

	return [r, g, b];
};

convert.rgb.hex = function (args) {
	var integer = ((Math.round(args[0]) & 0xFF) << 16)
		+ ((Math.round(args[1]) & 0xFF) << 8)
		+ (Math.round(args[2]) & 0xFF);

	var string = integer.toString(16).toUpperCase();
	return '000000'.substring(string.length) + string;
};

convert.hex.rgb = function (args) {
	var match = args.toString(16).match(/[a-f0-9]{6}|[a-f0-9]{3}/i);
	if (!match) {
		return [0, 0, 0];
	}

	var colorString = match[0];

	if (match[0].length === 3) {
		colorString = colorString.split('').map(function (char) {
			return char + char;
		}).join('');
	}

	var integer = parseInt(colorString, 16);
	var r = (integer >> 16) & 0xFF;
	var g = (integer >> 8) & 0xFF;
	var b = integer & 0xFF;

	return [r, g, b];
};

convert.rgb.hcg = function (rgb) {
	var r = rgb[0] / 255;
	var g = rgb[1] / 255;
	var b = rgb[2] / 255;
	var max = Math.max(Math.max(r, g), b);
	var min = Math.min(Math.min(r, g), b);
	var chroma = (max - min);
	var grayscale;
	var hue;

	if (chroma < 1) {
		grayscale = min / (1 - chroma);
	} else {
		grayscale = 0;
	}

	if (chroma <= 0) {
		hue = 0;
	} else
	if (max === r) {
		hue = ((g - b) / chroma) % 6;
	} else
	if (max === g) {
		hue = 2 + (b - r) / chroma;
	} else {
		hue = 4 + (r - g) / chroma + 4;
	}

	hue /= 6;
	hue %= 1;

	return [hue * 360, chroma * 100, grayscale * 100];
};

convert.hsl.hcg = function (hsl) {
	var s = hsl[1] / 100;
	var l = hsl[2] / 100;
	var c = 1;
	var f = 0;

	if (l < 0.5) {
		c = 2.0 * s * l;
	} else {
		c = 2.0 * s * (1.0 - l);
	}

	if (c < 1.0) {
		f = (l - 0.5 * c) / (1.0 - c);
	}

	return [hsl[0], c * 100, f * 100];
};

convert.hsv.hcg = function (hsv) {
	var s = hsv[1] / 100;
	var v = hsv[2] / 100;

	var c = s * v;
	var f = 0;

	if (c < 1.0) {
		f = (v - c) / (1 - c);
	}

	return [hsv[0], c * 100, f * 100];
};

convert.hcg.rgb = function (hcg) {
	var h = hcg[0] / 360;
	var c = hcg[1] / 100;
	var g = hcg[2] / 100;

	if (c === 0.0) {
		return [g * 255, g * 255, g * 255];
	}

	var pure = [0, 0, 0];
	var hi = (h % 1) * 6;
	var v = hi % 1;
	var w = 1 - v;
	var mg = 0;

	switch (Math.floor(hi)) {
		case 0:
			pure[0] = 1; pure[1] = v; pure[2] = 0; break;
		case 1:
			pure[0] = w; pure[1] = 1; pure[2] = 0; break;
		case 2:
			pure[0] = 0; pure[1] = 1; pure[2] = v; break;
		case 3:
			pure[0] = 0; pure[1] = w; pure[2] = 1; break;
		case 4:
			pure[0] = v; pure[1] = 0; pure[2] = 1; break;
		default:
			pure[0] = 1; pure[1] = 0; pure[2] = w;
	}

	mg = (1.0 - c) * g;

	return [
		(c * pure[0] + mg) * 255,
		(c * pure[1] + mg) * 255,
		(c * pure[2] + mg) * 255
	];
};

convert.hcg.hsv = function (hcg) {
	var c = hcg[1] / 100;
	var g = hcg[2] / 100;

	var v = c + g * (1.0 - c);
	var f = 0;

	if (v > 0.0) {
		f = c / v;
	}

	return [hcg[0], f * 100, v * 100];
};

convert.hcg.hsl = function (hcg) {
	var c = hcg[1] / 100;
	var g = hcg[2] / 100;

	var l = g * (1.0 - c) + 0.5 * c;
	var s = 0;

	if (l > 0.0 && l < 0.5) {
		s = c / (2 * l);
	} else
	if (l >= 0.5 && l < 1.0) {
		s = c / (2 * (1 - l));
	}

	return [hcg[0], s * 100, l * 100];
};

convert.hcg.hwb = function (hcg) {
	var c = hcg[1] / 100;
	var g = hcg[2] / 100;
	var v = c + g * (1.0 - c);
	return [hcg[0], (v - c) * 100, (1 - v) * 100];
};

convert.hwb.hcg = function (hwb) {
	var w = hwb[1] / 100;
	var b = hwb[2] / 100;
	var v = 1 - b;
	var c = v - w;
	var g = 0;

	if (c < 1) {
		g = (v - c) / (1 - c);
	}

	return [hwb[0], c * 100, g * 100];
};

convert.apple.rgb = function (apple) {
	return [(apple[0] / 65535) * 255, (apple[1] / 65535) * 255, (apple[2] / 65535) * 255];
};

convert.rgb.apple = function (rgb) {
	return [(rgb[0] / 255) * 65535, (rgb[1] / 255) * 65535, (rgb[2] / 255) * 65535];
};

convert.gray.rgb = function (args) {
	return [args[0] / 100 * 255, args[0] / 100 * 255, args[0] / 100 * 255];
};

convert.gray.hsl = convert.gray.hsv = function (args) {
	return [0, 0, args[0]];
};

convert.gray.hwb = function (gray) {
	return [0, 100, gray[0]];
};

convert.gray.cmyk = function (gray) {
	return [0, 0, 0, gray[0]];
};

convert.gray.lab = function (gray) {
	return [gray[0], 0, 0];
};

convert.gray.hex = function (gray) {
	var val = Math.round(gray[0] / 100 * 255) & 0xFF;
	var integer = (val << 16) + (val << 8) + val;

	var string = integer.toString(16).toUpperCase();
	return '000000'.substring(string.length) + string;
};

convert.rgb.gray = function (rgb) {
	var val = (rgb[0] + rgb[1] + rgb[2]) / 3;
	return [val / 255 * 100];
};
});

/*
	this function routes a model to all other models.

	all functions that are routed have a property `.conversion` attached
	to the returned synthetic function. This property is an array
	of strings, each with the steps in between the 'from' and 'to'
	color models (inclusive).

	conversions that are not possible simply are not included.
*/

function buildGraph() {
	var graph = {};
	// https://jsperf.com/object-keys-vs-for-in-with-closure/3
	var models = Object.keys(conversions);

	for (var len = models.length, i = 0; i < len; i++) {
		graph[models[i]] = {
			// http://jsperf.com/1-vs-infinity
			// micro-opt, but this is simple.
			distance: -1,
			parent: null
		};
	}

	return graph;
}

// https://en.wikipedia.org/wiki/Breadth-first_search
function deriveBFS(fromModel) {
	var graph = buildGraph();
	var queue = [fromModel]; // unshift -> queue -> pop

	graph[fromModel].distance = 0;

	while (queue.length) {
		var current = queue.pop();
		var adjacents = Object.keys(conversions[current]);

		for (var len = adjacents.length, i = 0; i < len; i++) {
			var adjacent = adjacents[i];
			var node = graph[adjacent];

			if (node.distance === -1) {
				node.distance = graph[current].distance + 1;
				node.parent = current;
				queue.unshift(adjacent);
			}
		}
	}

	return graph;
}

function link(from, to) {
	return function (args) {
		return to(from(args));
	};
}

function wrapConversion(toModel, graph) {
	var path = [graph[toModel].parent, toModel];
	var fn = conversions[graph[toModel].parent][toModel];

	var cur = graph[toModel].parent;
	while (graph[cur].parent) {
		path.unshift(graph[cur].parent);
		fn = link(conversions[graph[cur].parent][cur], fn);
		cur = graph[cur].parent;
	}

	fn.conversion = path;
	return fn;
}

var route = function (fromModel) {
	var graph = deriveBFS(fromModel);
	var conversion = {};

	var models = Object.keys(graph);
	for (var len = models.length, i = 0; i < len; i++) {
		var toModel = models[i];
		var node = graph[toModel];

		if (node.parent === null) {
			// no possible conversion, or this node is the source model.
			continue;
		}

		conversion[toModel] = wrapConversion(toModel, graph);
	}

	return conversion;
};

var convert = {};

var models = Object.keys(conversions);

function wrapRaw(fn) {
	var wrappedFn = function (args) {
		if (args === undefined || args === null) {
			return args;
		}

		if (arguments.length > 1) {
			args = Array.prototype.slice.call(arguments);
		}

		return fn(args);
	};

	// preserve .conversion property if there is one
	if ('conversion' in fn) {
		wrappedFn.conversion = fn.conversion;
	}

	return wrappedFn;
}

function wrapRounded(fn) {
	var wrappedFn = function (args) {
		if (args === undefined || args === null) {
			return args;
		}

		if (arguments.length > 1) {
			args = Array.prototype.slice.call(arguments);
		}

		var result = fn(args);

		// we're assuming the result is an array here.
		// see notice in conversions.js; don't use box types
		// in conversion functions.
		if (typeof result === 'object') {
			for (var len = result.length, i = 0; i < len; i++) {
				result[i] = Math.round(result[i]);
			}
		}

		return result;
	};

	// preserve .conversion property if there is one
	if ('conversion' in fn) {
		wrappedFn.conversion = fn.conversion;
	}

	return wrappedFn;
}

models.forEach(function (fromModel) {
	convert[fromModel] = {};

	Object.defineProperty(convert[fromModel], 'channels', {value: conversions[fromModel].channels});
	Object.defineProperty(convert[fromModel], 'labels', {value: conversions[fromModel].labels});

	var routes = route(fromModel);
	var routeModels = Object.keys(routes);

	routeModels.forEach(function (toModel) {
		var fn = routes[toModel];

		convert[fromModel][toModel] = wrapRounded(fn);
		convert[fromModel][toModel].raw = wrapRaw(fn);
	});
});

var colorConvert = convert;

var _slice = [].slice;

var skippedModels = [
	// to be honest, I don't really feel like keyword belongs in color convert, but eh.
	'keyword',

	// gray conflicts with some method names, and has its own method defined.
	'gray',

	// shouldn't really be in color-convert either...
	'hex'
];

var hashedModelKeys = {};
Object.keys(colorConvert).forEach(function (model) {
	hashedModelKeys[_slice.call(colorConvert[model].labels).sort().join('')] = model;
});

var limiters = {};

function Color(obj, model) {
	if (!(this instanceof Color)) {
		return new Color(obj, model);
	}

	if (model && model in skippedModels) {
		model = null;
	}

	if (model && !(model in colorConvert)) {
		throw new Error('Unknown model: ' + model);
	}

	var i;
	var channels;

	if (obj == null) { // eslint-disable-line no-eq-null,eqeqeq
		this.model = 'rgb';
		this.color = [0, 0, 0];
		this.valpha = 1;
	} else if (obj instanceof Color) {
		this.model = obj.model;
		this.color = obj.color.slice();
		this.valpha = obj.valpha;
	} else if (typeof obj === 'string') {
		var result = colorString.get(obj);
		if (result === null) {
			throw new Error('Unable to parse color from string: ' + obj);
		}

		this.model = result.model;
		channels = colorConvert[this.model].channels;
		this.color = result.value.slice(0, channels);
		this.valpha = typeof result.value[channels] === 'number' ? result.value[channels] : 1;
	} else if (obj.length) {
		this.model = model || 'rgb';
		channels = colorConvert[this.model].channels;
		var newArr = _slice.call(obj, 0, channels);
		this.color = zeroArray(newArr, channels);
		this.valpha = typeof obj[channels] === 'number' ? obj[channels] : 1;
	} else if (typeof obj === 'number') {
		// this is always RGB - can be converted later on.
		obj &= 0xFFFFFF;
		this.model = 'rgb';
		this.color = [
			(obj >> 16) & 0xFF,
			(obj >> 8) & 0xFF,
			obj & 0xFF
		];
		this.valpha = 1;
	} else {
		this.valpha = 1;

		var keys = Object.keys(obj);
		if ('alpha' in obj) {
			keys.splice(keys.indexOf('alpha'), 1);
			this.valpha = typeof obj.alpha === 'number' ? obj.alpha : 0;
		}

		var hashedKeys = keys.sort().join('');
		if (!(hashedKeys in hashedModelKeys)) {
			throw new Error('Unable to parse color from object: ' + JSON.stringify(obj));
		}

		this.model = hashedModelKeys[hashedKeys];

		var labels = colorConvert[this.model].labels;
		var color = [];
		for (i = 0; i < labels.length; i++) {
			color.push(obj[labels[i]]);
		}

		this.color = zeroArray(color);
	}

	// perform limitations (clamping, etc.)
	if (limiters[this.model]) {
		channels = colorConvert[this.model].channels;
		for (i = 0; i < channels; i++) {
			var limit = limiters[this.model][i];
			if (limit) {
				this.color[i] = limit(this.color[i]);
			}
		}
	}

	this.valpha = Math.max(0, Math.min(1, this.valpha));

	if (Object.freeze) {
		Object.freeze(this);
	}
}

Color.prototype = {
	toString: function () {
		return this.string();
	},

	toJSON: function () {
		return this[this.model]();
	},

	string: function (places) {
		var self = this.model in colorString.to ? this : this.rgb();
		self = self.round(typeof places === 'number' ? places : 1);
		var args = self.valpha === 1 ? self.color : self.color.concat(this.valpha);
		return colorString.to[self.model](args);
	},

	percentString: function (places) {
		var self = this.rgb().round(typeof places === 'number' ? places : 1);
		var args = self.valpha === 1 ? self.color : self.color.concat(this.valpha);
		return colorString.to.rgb.percent(args);
	},

	array: function () {
		return this.valpha === 1 ? this.color.slice() : this.color.concat(this.valpha);
	},

	object: function () {
		var result = {};
		var channels = colorConvert[this.model].channels;
		var labels = colorConvert[this.model].labels;

		for (var i = 0; i < channels; i++) {
			result[labels[i]] = this.color[i];
		}

		if (this.valpha !== 1) {
			result.alpha = this.valpha;
		}

		return result;
	},

	unitArray: function () {
		var rgb = this.rgb().color;
		rgb[0] /= 255;
		rgb[1] /= 255;
		rgb[2] /= 255;

		if (this.valpha !== 1) {
			rgb.push(this.valpha);
		}

		return rgb;
	},

	unitObject: function () {
		var rgb = this.rgb().object();
		rgb.r /= 255;
		rgb.g /= 255;
		rgb.b /= 255;

		if (this.valpha !== 1) {
			rgb.alpha = this.valpha;
		}

		return rgb;
	},

	round: function (places) {
		places = Math.max(places || 0, 0);
		return new Color(this.color.map(roundToPlace(places)).concat(this.valpha), this.model);
	},

	alpha: function (val) {
		if (arguments.length) {
			return new Color(this.color.concat(Math.max(0, Math.min(1, val))), this.model);
		}

		return this.valpha;
	},

	// rgb
	red: getset('rgb', 0, maxfn(255)),
	green: getset('rgb', 1, maxfn(255)),
	blue: getset('rgb', 2, maxfn(255)),

	hue: getset(['hsl', 'hsv', 'hsl', 'hwb', 'hcg'], 0, function (val) { return ((val % 360) + 360) % 360; }), // eslint-disable-line brace-style

	saturationl: getset('hsl', 1, maxfn(100)),
	lightness: getset('hsl', 2, maxfn(100)),

	saturationv: getset('hsv', 1, maxfn(100)),
	value: getset('hsv', 2, maxfn(100)),

	chroma: getset('hcg', 1, maxfn(100)),
	gray: getset('hcg', 2, maxfn(100)),

	white: getset('hwb', 1, maxfn(100)),
	wblack: getset('hwb', 2, maxfn(100)),

	cyan: getset('cmyk', 0, maxfn(100)),
	magenta: getset('cmyk', 1, maxfn(100)),
	yellow: getset('cmyk', 2, maxfn(100)),
	black: getset('cmyk', 3, maxfn(100)),

	x: getset('xyz', 0, maxfn(100)),
	y: getset('xyz', 1, maxfn(100)),
	z: getset('xyz', 2, maxfn(100)),

	l: getset('lab', 0, maxfn(100)),
	a: getset('lab', 1),
	b: getset('lab', 2),

	keyword: function (val) {
		if (arguments.length) {
			return new Color(val);
		}

		return colorConvert[this.model].keyword(this.color);
	},

	hex: function (val) {
		if (arguments.length) {
			return new Color(val);
		}

		return colorString.to.hex(this.rgb().round().color);
	},

	rgbNumber: function () {
		var rgb = this.rgb().color;
		return ((rgb[0] & 0xFF) << 16) | ((rgb[1] & 0xFF) << 8) | (rgb[2] & 0xFF);
	},

	luminosity: function () {
		// http://www.w3.org/TR/WCAG20/#relativeluminancedef
		var rgb = this.rgb().color;

		var lum = [];
		for (var i = 0; i < rgb.length; i++) {
			var chan = rgb[i] / 255;
			lum[i] = (chan <= 0.03928) ? chan / 12.92 : Math.pow(((chan + 0.055) / 1.055), 2.4);
		}

		return 0.2126 * lum[0] + 0.7152 * lum[1] + 0.0722 * lum[2];
	},

	contrast: function (color2) {
		// http://www.w3.org/TR/WCAG20/#contrast-ratiodef
		var lum1 = this.luminosity();
		var lum2 = color2.luminosity();

		if (lum1 > lum2) {
			return (lum1 + 0.05) / (lum2 + 0.05);
		}

		return (lum2 + 0.05) / (lum1 + 0.05);
	},

	level: function (color2) {
		var contrastRatio = this.contrast(color2);
		if (contrastRatio >= 7.1) {
			return 'AAA';
		}

		return (contrastRatio >= 4.5) ? 'AA' : '';
	},

	isDark: function () {
		// YIQ equation from http://24ways.org/2010/calculating-color-contrast
		var rgb = this.rgb().color;
		var yiq = (rgb[0] * 299 + rgb[1] * 587 + rgb[2] * 114) / 1000;
		return yiq < 128;
	},

	isLight: function () {
		return !this.isDark();
	},

	negate: function () {
		var rgb = this.rgb();
		for (var i = 0; i < 3; i++) {
			rgb.color[i] = 255 - rgb.color[i];
		}
		return rgb;
	},

	lighten: function (ratio) {
		var hsl = this.hsl();
		hsl.color[2] += hsl.color[2] * ratio;
		return hsl;
	},

	darken: function (ratio) {
		var hsl = this.hsl();
		hsl.color[2] -= hsl.color[2] * ratio;
		return hsl;
	},

	saturate: function (ratio) {
		var hsl = this.hsl();
		hsl.color[1] += hsl.color[1] * ratio;
		return hsl;
	},

	desaturate: function (ratio) {
		var hsl = this.hsl();
		hsl.color[1] -= hsl.color[1] * ratio;
		return hsl;
	},

	whiten: function (ratio) {
		var hwb = this.hwb();
		hwb.color[1] += hwb.color[1] * ratio;
		return hwb;
	},

	blacken: function (ratio) {
		var hwb = this.hwb();
		hwb.color[2] += hwb.color[2] * ratio;
		return hwb;
	},

	grayscale: function () {
		// http://en.wikipedia.org/wiki/Grayscale#Converting_color_to_grayscale
		var rgb = this.rgb().color;
		var val = rgb[0] * 0.3 + rgb[1] * 0.59 + rgb[2] * 0.11;
		return Color.rgb(val, val, val);
	},

	fade: function (ratio) {
		return this.alpha(this.valpha - (this.valpha * ratio));
	},

	opaquer: function (ratio) {
		return this.alpha(this.valpha + (this.valpha * ratio));
	},

	rotate: function (degrees) {
		var hsl = this.hsl();
		var hue = hsl.color[0];
		hue = (hue + degrees) % 360;
		hue = hue < 0 ? 360 + hue : hue;
		hsl.color[0] = hue;
		return hsl;
	},

	mix: function (mixinColor, weight) {
		// ported from sass implementation in C
		// https://github.com/sass/libsass/blob/0e6b4a2850092356aa3ece07c6b249f0221caced/functions.cpp#L209
		if (!mixinColor || !mixinColor.rgb) {
			throw new Error('Argument to "mix" was not a Color instance, but rather an instance of ' + typeof mixinColor);
		}
		var color1 = mixinColor.rgb();
		var color2 = this.rgb();
		var p = weight === undefined ? 0.5 : weight;

		var w = 2 * p - 1;
		var a = color1.alpha() - color2.alpha();

		var w1 = (((w * a === -1) ? w : (w + a) / (1 + w * a)) + 1) / 2.0;
		var w2 = 1 - w1;

		return Color.rgb(
				w1 * color1.red() + w2 * color2.red(),
				w1 * color1.green() + w2 * color2.green(),
				w1 * color1.blue() + w2 * color2.blue(),
				color1.alpha() * p + color2.alpha() * (1 - p));
	}
};

// model conversion methods and static constructors
Object.keys(colorConvert).forEach(function (model) {
	if (skippedModels.indexOf(model) !== -1) {
		return;
	}

	var channels = colorConvert[model].channels;

	// conversion methods
	Color.prototype[model] = function () {
		if (this.model === model) {
			return new Color(this);
		}

		if (arguments.length) {
			return new Color(arguments, model);
		}

		var newAlpha = typeof arguments[channels] === 'number' ? channels : this.valpha;
		return new Color(assertArray(colorConvert[this.model][model].raw(this.color)).concat(newAlpha), model);
	};

	// 'static' construction methods
	Color[model] = function (color) {
		if (typeof color === 'number') {
			color = zeroArray(_slice.call(arguments), channels);
		}
		return new Color(color, model);
	};
});

function roundTo(num, places) {
	return Number(num.toFixed(places));
}

function roundToPlace(places) {
	return function (num) {
		return roundTo(num, places);
	};
}

function getset(model, channel, modifier) {
	model = Array.isArray(model) ? model : [model];

	model.forEach(function (m) {
		(limiters[m] || (limiters[m] = []))[channel] = modifier;
	});

	model = model[0];

	return function (val) {
		var result;

		if (arguments.length) {
			if (modifier) {
				val = modifier(val);
			}

			result = this[model]();
			result.color[channel] = val;
			return result;
		}

		result = this[model]().color[channel];
		if (modifier) {
			result = modifier(result);
		}

		return result;
	};
}

function maxfn(max) {
	return function (v) {
		return Math.max(0, Math.min(max, v));
	};
}

function assertArray(val) {
	return Array.isArray(val) ? val : [val];
}

function zeroArray(arr, length) {
	for (var i = 0; i < length; i++) {
		if (typeof arr[i] !== 'number') {
			arr[i] = 0;
		}
	}

	return arr;
}

var color = Color;

var StyledOptionSwitchContainer = styled__default['default'].div(templateObject_1$4 || (templateObject_1$4 = __makeTemplateObject(["\n  padding: 4px;\n  border-radius: 5px;\n  background-color: ", ";\n  box-shadow: 0px 5px 10px ", ";\n  display: inline-block;\n"], ["\n  padding: 4px;\n  border-radius: 5px;\n  background-color: ", ";\n  box-shadow: 0px 5px 10px ", ";\n  display: inline-block;\n"])), function (p) { return p.theme.accent_3; }, function (p) { return p.theme.accent_3 + "80"; });
var StyledOptionSwitchWrapper = styled__default['default'].label(templateObject_2$1 || (templateObject_2$1 = __makeTemplateObject(["\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: ", ";\n  flex-flow: row;\n"], ["\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: ", ";\n  flex-flow: row;\n"])), function (p) { return p.centered ? 'center' : 'space-between'; });
var StyledOptionSwitchLabel = styled__default['default'].span(templateObject_3$1 || (templateObject_3$1 = __makeTemplateObject(["\n  font-size: 13px;\n  padding-bottom: 1px;\n  color: ", ";\n"], ["\n  font-size: 13px;\n  padding-bottom: 1px;\n  color: ", ";\n"])), function (p) { return p.theme.accent_1; });
function OptionSwitch(props) {
    return (React__default['default'].createElement(StyledOptionSwitchWrapper, __assign({ className: "option-switch" }, __assign(__assign({}, props), { children: undefined, label: undefined })),
        props.label && React__default['default'].createElement(StyledOptionSwitchLabel, null, props.label),
        React__default['default'].createElement(StyledOptionSwitchContainer, __assign({}, props))));
}
var StyledSwitchOption = styled__default['default'].button(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  border: none;\n  background-color: ", ";\n  color: ", ";\n  border-radius: 5px;\n  padding: 8px 16px;\n  font-size: 13px;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  margin: 0;\n  transition: 300ms;\n\n  &:hover, &:focus {\n    background-color: ", ";\n  }\n\n  &:focus {\n    outline: none;\n  }\n\n  cursor: pointer;\n"], ["\n  border: none;\n  background-color: ",
    ";\n  color: ", ";\n  border-radius: 5px;\n  padding: 8px 16px;\n  font-size: 13px;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  margin: 0;\n  transition: 300ms;\n\n  &:hover, &:focus {\n    background-color: ", ";\n  }\n\n  &:focus {\n    outline: none;\n  }\n\n  cursor: pointer;\n"])), function (p) {
    return p.selected ? p.theme.accent_2 : p.theme.accent_3;
}, function (p) { return (p.selected ? p.theme.fg : p.theme.accent_1); }, function (p) { return color(p.theme.accent_2).alpha(0.2).rgb().toString(); });
function SwitchOption(props) {
    return React__default['default'].createElement(StyledSwitchOption, __assign({}, props));
}
var templateObject_1$4, templateObject_2$1, templateObject_3$1, templateObject_4;

var StyledSeparator = styled__default['default'].hr(templateObject_1$3 || (templateObject_1$3 = __makeTemplateObject(["\n  width: 100%;\n  border: none;\n  height: 1px;\n  border-top: 1px solid ", ";\n  margin: 0;\n  padding: 0;\n"], ["\n  width: 100%;\n  border: none;\n  height: 1px;\n  border-top: 1px solid ", ";\n  margin: 0;\n  padding: 0;\n"])), function (p) { return p.theme.accent_2; });
function Separator(props) {
    return (React__default['default'].createElement(StyledSeparator, { className: "separator" }));
}
var templateObject_1$3;

var StyledTable = styled__default['default'].table(templateObject_1$2 || (templateObject_1$2 = __makeTemplateObject(["\n  width: 100%;\n  margin: 0;\n  margin-top: 25px;\n\n  tr {\n    border-bottom: 1px solid ", ";\n    padding: 0;\n\n    &:nth-child(odd)\u00A0 {\n      td {\n        background: ", ";\n      }\n    }\n\n    &:nth-child(1) {\n      border-top-left-radius: 5px;\n      border-top-right-radius: 5px;\n\n      th {\n        &:first-child {\n          border-top-left-radius: 5px;\n        }\n        &:last-child {\n          border-top-right-radius: 5px;\n        }\n      }\n    }\n\n    &:last-child {\n      border-bottom-left-radius: 5px;\n      border-bottom-right-radius: 5px;\n\n      td {\n        &:first-child {\n          border-bottom-left-radius: 5px;\n        }\n        &:last-child {\n          border-bottom-right-radius: 5px;\n        }\n      }\n    }\n\n    th {\n      text-align: left;\n    }\n\n    th,\n    td {\n      padding: 15px 20px;\n      border: none;\n      margin: 0;\n      color: ", " !important;\n    }\n\n    &.header {\n      background: ", ";\n    }\n\n    &.hoverable {\n      transition: 300ms;\n      cursor: pointer;\n\n      &:hover {\n        background: ", ";\n      }\n    }\n  }\n"], ["\n  width: 100%;\n  margin: 0;\n  margin-top: 25px;\n\n  tr {\n    border-bottom: 1px solid ", ";\n    padding: 0;\n\n    &:nth-child(odd)\u00A0 {\n      td {\n        background: ", ";\n      }\n    }\n\n    &:nth-child(1) {\n      border-top-left-radius: 5px;\n      border-top-right-radius: 5px;\n\n      th {\n        &:first-child {\n          border-top-left-radius: 5px;\n        }\n        &:last-child {\n          border-top-right-radius: 5px;\n        }\n      }\n    }\n\n    &:last-child {\n      border-bottom-left-radius: 5px;\n      border-bottom-right-radius: 5px;\n\n      td {\n        &:first-child {\n          border-bottom-left-radius: 5px;\n        }\n        &:last-child {\n          border-bottom-right-radius: 5px;\n        }\n      }\n    }\n\n    th {\n      text-align: left;\n    }\n\n    th,\n    td {\n      padding: 15px 20px;\n      border: none;\n      margin: 0;\n      color: ", " !important;\n    }\n\n    &.header {\n      background: ", ";\n    }\n\n    &.hoverable {\n      transition: 300ms;\n      cursor: pointer;\n\n      &:hover {\n        background: ", ";\n      }\n    }\n  }\n"])), function (p) { return p.theme.accent_1; }, function (p) { return color(p.theme.bg).alpha(0.7).rgb().toString(); }, function (p) { return p.theme.fg; }, function (p) { return p.theme.accent_3; }, function (p) { return p.theme.bg; });
function Table(props) {
    return React__default['default'].createElement(StyledTable, __assign({}, props));
}
var templateObject_1$2;

var Chip = styled__default['default'].span(templateObject_1$1 || (templateObject_1$1 = __makeTemplateObject(["\n  font-size: 13px;\n  color: ", ";\n  background-color: ", ";\n  border: 1px solid ", ";\n  border-radius: 15px;\n  display: inline-block;\n  padding: 5px 20px;\n"], ["\n  font-size: 13px;\n  color: ", ";\n  background-color: ",
    ";\n  border: 1px solid ",
    ";\n  border-radius: 15px;\n  display: inline-block;\n  padding: 5px 20px;\n"])), function (props) { return props.theme[props.color || ""] || props.color; }, function (props) {
    return color(props.theme[props.color || ""] || props.color)
        .alpha(0.1)
        .rgb()
        .toString();
}, function (props) {
    return color(props.theme[props.color || ""] || props.color)
        .alpha(0.3)
        .rgb()
        .toString();
});
var templateObject_1$1;

// eslint-disable-next-line
var light = {
    name: 'default_light',
    /**
     * Primary Color
     */
    primary: '#4440ed',
    /**
     * Text/icons on primary color
     */
    on_primary: '#ffffff',
    /**
     * Foreground color
     */
    fg: '#232633',
    /**
     * Accents
     */
    accent_1: '#9194a4',
    accent_2: '#d7dcec',
    accent_3: '#e4e7f0',
    accent_4: '#ffffff',
    /**
     * Backround
     */
    bg: '#f9fafc',
    /**
     * Colors
     */
    col_red: '#fe2657',
    col_orange: '#f69726',
    col_yellow: '#e8e11c',
    col_green: '#3bc51c',
    col_cyan: '#23c3d8',
    col_blue: '#4440ed',
    col_purple: '#912fe1',
    col_pink: '#f21ea4',
};

// eslint-disable-next-line
var dark = {
    name: 'default_dark',
    /**
     * Primary Color
     */
    primary: '#4440ed',
    /**
     * Text/icons on primary color
     */
    on_primary: '#ffffff',
    /**
     * Foreground color
     */
    fg: '#e2e2e2',
    /**
     * Accents
     */
    accent_1: '#9194a4',
    accent_2: '#5d6270',
    accent_3: '#4b4d55',
    accent_4: '#232633',
    /**
     * Backround
     */
    bg: '#202231',
    /**
     * Colors
     */
    col_red: '#fe2657',
    col_orange: '#f69726',
    col_yellow: '#e8e11c',
    col_green: '#3bc51c',
    col_cyan: '#23c3d8',
    col_blue: '#4440ed',
    col_purple: '#912fe1',
    col_pink: '#f21ea4',
};

var index = styled__default['default'].div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  height: 100vh;\n  width: ", ";\n  background-color: ", ";\n  border-right: 1px solid ", ";\n  padding: 20px;\n  box-sizing: border-box;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  flex-flow: column;\n  img,\n  svg {\n    width: 100%;\n    height: auto;\n  }\n"], ["\n  height: 100vh;\n  width: ", ";\n  background-color: ", ";\n  border-right: 1px solid ", ";\n  padding: 20px;\n  box-sizing: border-box;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  flex-flow: column;\n  img,\n  svg {\n    width: 100%;\n    height: auto;\n  }\n"])), function (p) { return (p.small ? "60px" : "250px"); }, function (p) { return p.theme.accent_4; }, function (p) { return p.theme.accent_2; });
var SidebarLink = styled__default['default'].a(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  display: block;\n  padding: 15px 30px;\n  font-size: 14px;\n  cursor: pointer;\n  width: 100%;\n  box-sizing: border-box;\n  text-decoration: none;\n  color: ", ";\n  background-color: ", ";\n  border-radius: 7px;\n  transition: 300ms;\n  margin: 20px 0;\n\n  &:first-child {\n    margin-top: 0;\n  }\n\n  &:last-child {\n    margin-bottom: 0;\n  }\n\n  &:hover {\n    color: ", ";\n    background: ", ";\n  }\n"], ["\n  display: block;\n  padding: 15px 30px;\n  font-size: 14px;\n  cursor: pointer;\n  width: 100%;\n  box-sizing: border-box;\n  text-decoration: none;\n  color: ", ";\n  background-color: ", ";\n  border-radius: 7px;\n  transition: 300ms;\n  margin: 20px 0;\n\n  &:first-child {\n    margin-top: 0;\n  }\n\n  &:last-child {\n    margin-bottom: 0;\n  }\n\n  &:hover {\n    color: ", ";\n    background: ",
    ";\n  }\n"])), function (p) { return (p.current ? p.theme.on_primary : p.theme.accent_1); }, function (p) { return (p.current ? p.theme.primary : "transparent"); }, function (p) { return (p.current ? p.theme.on_primary : p.theme.primary); }, function (p) {
    return p.current
        ? p.theme.primary
        : color(p.theme.primary).alpha(0.03).rgb().toString();
});
var SidebarButton = styled__default['default'].button(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  border: none;\n  display: block;\n  padding: 15px 30px;\n  font-size: 14px;\n  cursor: pointer;\n  width: 100%;\n  box-sizing: border-box;\n  text-decoration: none;\n  color: ", ";\n  background-color: ", ";\n  border-radius: 7px;\n  transition: 300ms;\n\n  &:hover {\n    color: ", ";\n    background: ", ";\n  }\n"], ["\n  border: none;\n  display: block;\n  padding: 15px 30px;\n  font-size: 14px;\n  cursor: pointer;\n  width: 100%;\n  box-sizing: border-box;\n  text-decoration: none;\n  color: ", ";\n  background-color: ", ";\n  border-radius: 7px;\n  transition: 300ms;\n\n  &:hover {\n    color: ", ";\n    background: ",
    ";\n  }\n"])), function (p) { return (p.current ? p.theme.on_primary : p.theme.accent_1); }, function (p) { return (p.current ? p.theme.primary : "transparent"); }, function (p) { return (p.current ? p.theme.on_primary : p.theme.primary); }, function (p) {
    return p.current
        ? p.theme.primary
        : color(p.theme.primary).alpha(0.03).rgb().toString();
});
var templateObject_1, templateObject_2, templateObject_3;

exports.Button = Button;
exports.Card = Card;
exports.CardForm = CardForm;
exports.Checkbox = index$1;
exports.Chip = Chip;
exports.IconButton = IconButton;
exports.Input = index$2;
exports.OceanRoot = OceanRoot;
exports.OptionSwitch = OptionSwitch;
exports.Separator = Separator;
exports.Sidebar = index;
exports.SidebarButton = SidebarButton;
exports.SidebarLink = SidebarLink;
exports.StepBar = StepBar;
exports.SwitchOption = SwitchOption;
exports.Table = Table;
exports.ToggleSwitch = ToggleSwitch;
exports.defaultDarkTheme = dark;
exports.defaultLightTheme = light;
//# sourceMappingURL=index.js.map
