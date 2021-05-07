import styled, { ThemeProvider } from 'styled-components';
import React, { forwardRef, useState } from 'react';
import { UilEyeSlash, UilEye, UilTimes, UilCheck } from '@iconscout/react-unicons';

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

var StyledButton = styled.button(templateObject_1$a || (templateObject_1$a = __makeTemplateObject(["\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  flex-flow: row wrap;\n  cursor: pointer;\n  border: ", "px solid\n    ", ";\n  background: ", ";\n  color: ", ";\n  padding: ", ";\n  border-radius: 5px;\n  transition: 300ms;\n  font-size: 13px;\n  width: ", ";\n  flex-grow: ", ";\n\n  svg {\n    margin: 0 10px;\n    height: 13px;\n    width: auto;\n  }\n\n  & > :first-child {\n    margin-left: 0;\n  }\n\n  & > :last-child {\n    margin-right: 0;\n  }\n\n  &:hover {\n    border-color: ", ";\n    opacity: 0.9;\n  }\n\n  &:disabled {\n    cursor: not-allowed;\n    opacity: 0.6;\n  }\n"], ["\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  flex-flow: row wrap;\n  cursor: pointer;\n  border: ", "px solid\n    ", ";\n  background: ", ";\n  color: ", ";\n  padding: ", ";\n  border-radius: 5px;\n  transition: 300ms;\n  font-size: 13px;\n  width: ", ";\n  flex-grow: ", ";\n\n  svg {\n    margin: 0 10px;\n    height: 13px;\n    width: auto;\n  }\n\n  & > :first-child {\n    margin-left: 0;\n  }\n\n  & > :last-child {\n    margin-right: 0;\n  }\n\n  &:hover {\n    border-color: ", ";\n    opacity: 0.9;\n  }\n\n  &:disabled {\n    cursor: not-allowed;\n    opacity: 0.6;\n  }\n"])), function (p) { return ((p.primary || p.destructive) ? "0" : "1"); }, function (p) { return (p.primary ? "transparent" : p.theme.accent_2); }, function (p) { return (p.primary ? p.theme.primary : (p.destructive ? p.theme.col_red : "transparent")); }, function (p) { return (p.primary ? p.theme.on_primary : (p.destructive ? "#ffffff" : p.theme.fg)); }, function (p) { return ((p.primary || p.destructive) ? "9px 17px" : "8px 16px"); }, function (p) { return (p.wide ? "100%" : "initial"); }, function (p) { return (p.wide ? "1" : "initial"); }, function (p) { return (p.primary ? "transparent" : p.theme.accent_3); });
function Button(props) {
    return (React.createElement(StyledButton, __assign({}, __assign(__assign({}, props), { className: (props.className || "") +
            (" button" + (props.primary
                ? " button--primary"
                : props.destructive
                    ? " button--destructive"
                    : "")) }))));
}
var templateObject_1$a;

var StyledInputContainer = styled.div(templateObject_1$9 || (templateObject_1$9 = __makeTemplateObject(["\n  width: 100%;\n  position: relative;\n"], ["\n  width: 100%;\n  position: relative;\n"])));
var StyledInputLabel = styled.label(templateObject_2$7 || (templateObject_2$7 = __makeTemplateObject(["\n  font-size: 13px;\n  color: ", ";\n  display: block;\n  margin-top: ", ";\n  margin-bottom: 8px;\n"], ["\n  font-size: 13px;\n  color: ", ";\n  display: block;\n  margin-top: ", ";\n  margin-bottom: 8px;\n"])), function (p) { return (p.error ? p.theme.col_red : p.theme.accent_1); }, function (p) { return (p.error ? "8px" : "24px"); });
var StyledInput = styled.input(templateObject_3$5 || (templateObject_3$5 = __makeTemplateObject(["\n  width: 100%;\n  background-color: transparent;\n  font-size: 15px;\n  color: ", ";\n  padding: 10px 18px;\n  border-radius: 5px;\n  border: 1px solid ", ";\n  box-sizing: border-box;\n  transition: 300ms;\n  box-shadow: 0px 0px 0px 0px ", ";\n\n  &::placeholder {\n    color: ", ";\n  }\n\n  &:focus {\n    outline: none;\n    border-color: ", ";\n    box-shadow: 0px 0px 4px 0px ", ";\n  }\n\n  &:disabled {\n    cursor: not-allowed;\n  }\n"], ["\n  width: 100%;\n  background-color: transparent;\n  font-size: 15px;\n  color: ", ";\n  padding: 10px 18px;\n  border-radius: 5px;\n  border: 1px solid ", ";\n  box-sizing: border-box;\n  transition: 300ms;\n  box-shadow: 0px 0px 0px 0px ", ";\n\n  &::placeholder {\n    color: ", ";\n  }\n\n  &:focus {\n    outline: none;\n    border-color: ", ";\n    box-shadow: 0px 0px 4px 0px ", ";\n  }\n\n  &:disabled {\n    cursor: not-allowed;\n  }\n"])), function (p) { return p.theme.fg; }, function (p) { return (p.error ? p.theme.col_red : p.theme.accent_2); }, function (p) { return p.theme.primary + "a0"; }, function (p) { return p.theme.accent_2; }, function (p) { return p.theme.primary; }, function (p) { return p.theme.primary + "a0"; });
var TogglePasswordButton = styled.a(templateObject_4$2 || (templateObject_4$2 = __makeTemplateObject(["\n  text-decoration: none;\n  border: none;\n  background-color: transparent;\n  position: absolute;\n  top: 50%;\n  left: calc(100% - 40px);\n  transform: translateY(-50%);\n  cursor: pointer;\n\n  svg {\n    width: 15px;\n    color: ", ";\n  }\n\n  &:hover {\n    svg {\n      color: ", ";\n    }\n  }\n\n  &:focus {\n    outline: none;\n  }\n"], ["\n  text-decoration: none;\n  border: none;\n  background-color: transparent;\n  position: absolute;\n  top: 50%;\n  left: calc(100% - 40px);\n  transform: translateY(-50%);\n  cursor: pointer;\n\n  svg {\n    width: 15px;\n    color: ", ";\n  }\n\n  &:hover {\n    svg {\n      color: ", ";\n    }\n  }\n\n  &:focus {\n    outline: none;\n  }\n"])), function (p) { return p.theme.accent_1; }, function (p) { return p.theme.accent_2; });
var StyledInputInner = styled.div(templateObject_5$1 || (templateObject_5$1 = __makeTemplateObject(["\n  position: relative;\n"], ["\n  position: relative;\n"])));
var index$2 = forwardRef(function (_a, ref) {
    var value = _a.value, update = _a.update, label = _a.label, placeholder = _a.placeholder, type = _a.type, error = _a.error, onFocus = _a.onFocus, onKeyDown = _a.onKeyDown, onClick = _a.onClick, disabled = _a.disabled, errorOutline = _a.errorOutline;
    var _b = useState(false), passwordShown = _b[0], setPasswordShown = _b[1];
    return (React.createElement(StyledInputContainer, { className: "input-container" },
        label && React.createElement(StyledInputLabel, null, label),
        React.createElement(StyledInputInner, null,
            React.createElement(StyledInput, { class: "input-container_input", onFocus: onFocus, ref: ref, error: error ? true : errorOutline, type: type === "password" ? (passwordShown ? "text" : "password") : type, placeholder: placeholder, value: value, onChange: function (e) { return update === null || update === void 0 ? void 0 : update(e.target.value); }, onKeyDown: onKeyDown, disabled: disabled, onClick: onClick }),
            type === "password" && (React.createElement(TogglePasswordButton, { onClick: function () { return setPasswordShown(!passwordShown); } }, passwordShown ? React.createElement(UilEyeSlash, null) : React.createElement(UilEye, null)))),
        error && React.createElement(StyledInputLabel, { error: true }, error)));
});
var templateObject_1$9, templateObject_2$7, templateObject_3$5, templateObject_4$2, templateObject_5$1;

var StyledStepBar = styled.div(templateObject_1$8 || (templateObject_1$8 = __makeTemplateObject(["\n  height: 24px;\n  width: ", ";\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  flex-flow: row nowrap;\n  margin-bottom: 40px;\n  position: relative;\n  transition: 300ms;\n\n  &::before {\n    content: \"\";\n    position: absolute;\n    left: 0;\n    top: 50%;\n    width: 100%;\n    height: 0px;\n    border-top: 1px solid ", ";\n  }\n\n  &::after {\n    transition: 300ms;\n    content: \"\";\n    position: absolute;\n    left: 0;\n    top: 50%;\n    height: 0px;\n    width: ", "%;\n    border-top: 1px solid ", ";\n  }\n"], ["\n  height: 24px;\n  width: ", ";\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  flex-flow: row nowrap;\n  margin-bottom: 40px;\n  position: relative;\n  transition: 300ms;\n\n  &::before {\n    content: \"\";\n    position: absolute;\n    left: 0;\n    top: 50%;\n    width: 100%;\n    height: 0px;\n    border-top: 1px solid ", ";\n  }\n\n  &::after {\n    transition: 300ms;\n    content: \"\";\n    position: absolute;\n    left: 0;\n    top: 50%;\n    height: 0px;\n    width: ", "%;\n    border-top: 1px solid ", ";\n  }\n"])), function (p) { return p.width ? (typeof p.width === "number" ? (p.width + "px") : p.width) : 'initial'; }, function (p) { return p.theme.accent_2; }, function (p) { return ((p.current - 1) / (p.steps - 1)) * 100; }, function (p) { return p.theme.primary; });
var StyledStep = styled.div(templateObject_2$6 || (templateObject_2$6 = __makeTemplateObject(["\n  width: 24px;\n  height: 24px;\n  border-radius: 24px;\n  padding: 0;\n  font-size: 13px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background-color: ", ";\n  color: ", ";\n  border: 1px solid ", ";\n  z-index: 10;\n"], ["\n  width: 24px;\n  height: 24px;\n  border-radius: 24px;\n  padding: 0;\n  font-size: 13px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background-color: ", ";\n  color: ", ";\n  border: 1px solid ", ";\n  z-index: 10;\n"])), function (p) { return p.current ? p.theme.primary : p.theme.accent_4; }, function (p) { return p.current ? p.theme.on_primary : p.theme.fg; }, function (p) { return p.current ? p.theme.primary : p.theme.accent_2; });
function StepBar(_a) {
    var steps = _a.steps, current = _a.current, width = _a.width;
    return (React.createElement(StyledStepBar, { width: width, steps: steps, current: current }, new Array(steps).fill(0).map(function (_step, i) { return (React.createElement(StyledStep, { key: i, current: i + 1 <= current }, i + 1)); })));
}
var templateObject_1$8, templateObject_2$6;

var StyledIconButton = styled.button(templateObject_1$7 || (templateObject_1$7 = __makeTemplateObject(["\n  width: 36px;\n  height: 36px;\n  border-radius: 5px;\n  background: ", ";\n  color: ", ";\n  box-shadow: 0px 5px 10px\n    ", ";\n  transition: 300ms;\n  border: none;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  position: relative;\n\n  svg {\n    width: 16px;\n    height: 16px;\n  }\n\n  &:hover {\n    opacity: 0.9;\n    box-shadow: 0px 6px 15px\n      ", ";\n  }\n"], ["\n  width: 36px;\n  height: 36px;\n  border-radius: 5px;\n  background: ", ";\n  color: ", ";\n  box-shadow: 0px 5px 10px\n    ", ";\n  transition: 300ms;\n  border: none;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  position: relative;\n\n  svg {\n    width: 16px;\n    height: 16px;\n  }\n\n  &:hover {\n    opacity: 0.9;\n    box-shadow: 0px 6px 15px\n      ", ";\n  }\n"])), function (p) { return (p.primary ? p.theme.primary : (p.light ? p.theme.accent_4 : p.theme.accent_3)); }, function (p) { return (p.primary ? p.theme.on_primary : p.theme.fg); }, function (p) { return (p.primary ? p.theme.primary + "40" : p.theme.accent_2 + (p.light ? "80" : "40")); }, function (p) { return (p.primary ? p.theme.primary : p.theme.accent_2) + "9c"; });
var StyledIconButtonBadge = styled.span(templateObject_2$5 || (templateObject_2$5 = __makeTemplateObject(["\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  flex-flow: row wrap;\n  height: 16px;\n  width: auto;\n  font-size: 10px;\n  padding: 0px 8px;\n  border-radius: 16px;\n  color: ", ";\n  background: ", ";\n  position: absolute;\n  left: 100%;\n  top: -8px;\n  transform: translateX(-50%);\n"], ["\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  flex-flow: row wrap;\n  height: 16px;\n  width: auto;\n  font-size: 10px;\n  padding: 0px 8px;\n  border-radius: 16px;\n  color: ", ";\n  background: ", ";\n  position: absolute;\n  left: 100%;\n  top: -8px;\n  transform: translateX(-50%);\n"])), function (p) { return p.badgeTextColor ? (p.theme[p.badgeTextColor] || p.badgeTextColor) : p.theme.on_primary; }, function (p) { return p.badgeColor ? (p.theme[p.badgeColor] || p.badgeColor) : p.theme.primary; });
function IconButton(props) {
    return (React.createElement(StyledIconButton, __assign({}, __assign(__assign({}, props), { className: (props.className || '') + (" icon-button" + (props.primary ? ' icon-button--primary' : '')), children: undefined })),
        props.badge && (React.createElement(StyledIconButtonBadge, { badgeTextColor: props.badgeTextColor, badgeColor: props.badgeColor }, props.badge)),
        props.children));
}
var templateObject_1$7, templateObject_2$5;

var StyledCard = styled.div(templateObject_1$6 || (templateObject_1$6 = __makeTemplateObject(["\n  box-sizing: border-box;\n  padding: 0;\n  margin: 0;\n  width: ", ";\n  background: ", ";\n  box-shadow: 0px 5px 10px ", ";\n  border-radius: 10px;\n  position: relative;\n  font-size: 13px;\n  overflow: initial;\n\n  h1 {\n    font-size: 16px;\n    font-weight: 500;\n    color: ", ";\n  }\n\n  h2 {\n    font-size: 13px;\n    font-weight: 500;\n    color: ", ";\n  }\n"], ["\n  box-sizing: border-box;\n  padding: 0;\n  margin: 0;\n  width: ",
    ";\n  background: ", ";\n  box-shadow: 0px 5px 10px ", ";\n  border-radius: 10px;\n  position: relative;\n  font-size: 13px;\n  overflow: initial;\n\n  h1 {\n    font-size: 16px;\n    font-weight: 500;\n    color: ", ";\n  }\n\n  h2 {\n    font-size: 13px;\n    font-weight: 500;\n    color: ", ";\n  }\n"])), function (p) {
    return (p.width && (typeof p.width === "number" ? p.width + "px" : p.width)) ||
        "initial";
}, function (p) { return p.theme.accent_4; }, function (p) { return p.theme.accent_3 + "80"; }, function (p) { return p.theme.fg; }, function (p) { return p.theme.fg; });
var StyledCardBody = styled.div(templateObject_2$4 || (templateObject_2$4 = __makeTemplateObject(["\n  box-sizing: border-box;\n  width: 100%;\n  padding: ", ";\n  padding-bottom: ", ";\n\n  p {\n    color: ", ";\n  }\n\n  & > :first-child {\n    margin-top: 0;\n  }\n\n  & > :last-child {\n    margin-bottom: 0;\n  }\n  position: relative;\n  /* padding-top: ", "; */\n"], ["\n  box-sizing: border-box;\n  width: 100%;\n  padding: ", ";\n  padding-bottom: ",
    ";\n\n  p {\n    color: ", ";\n  }\n\n  & > :first-child {\n    margin-top: 0;\n  }\n\n  & > :last-child {\n    margin-bottom: 0;\n  }\n  position: relative;\n  /* padding-top: ", "; */\n"])), function (p) { return (p.compact ? "24px" : "40px"); }, function (p) {
    return p.hasFooter ? "0px" : p.compact ? "24px" : "40px";
}, function (p) { return p.theme.accent_1; }, function (p) { return (p.hasHeader ? "0px" : "40px"); });
var StyledCardFooter = styled.div(templateObject_3$4 || (templateObject_3$4 = __makeTemplateObject(["\n  background: ", ";\n  border-radius: 0;\n  border-bottom-left-radius: 10px;\n  border-bottom-right-radius: 10px;\n  margin-top: ", ";\n  border-top: 1px solid\n    ", ";\n  width: 100%;\n  box-sizing: border-box;\n  padding: 16px ", ";\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  flex-flow: row nowrap;\n  position: relative;\n  gap: 20px;\n"], ["\n  background: ", ";\n  border-radius: 0;\n  border-bottom-left-radius: 10px;\n  border-bottom-right-radius: 10px;\n  margin-top: ", ";\n  border-top: 1px solid\n    ", ";\n  width: 100%;\n  box-sizing: border-box;\n  padding: 16px ", ";\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  flex-flow: row nowrap;\n  position: relative;\n  gap: 20px;\n"])), function (p) { return (p.compact ? "transparent" : p.theme.bg); }, function (p) { return (p.compact ? "0px" : "40px"); }, function (p) { return (p.compact ? "transparent" : p.theme.accent_3); }, function (p) { return (p.compact ? "24px" : "40px"); });
var StyledCardDismiss = styled.button(templateObject_4$1 || (templateObject_4$1 = __makeTemplateObject(["\n  width: 16px;\n  height: 16px;\n  border: none;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: ", ";\n  color: ", ";\n  padding: 3px;\n\n  position: absolute;\n  top: -8px;\n  left: calc(100% - 8px);\n\n  transition: 300ms;\n\n  svg {\n    width: 10px;\n    height: 10px;\n    transition: 300ms;\n  }\n\n  &:hover {\n    top: -7px;\n    left: calc(100% - 7px);\n    width: 14px;\n    height: 14px;\n    cursor: pointer;\n  }\n"], ["\n  width: 16px;\n  height: 16px;\n  border: none;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: ", ";\n  color: ", ";\n  padding: 3px;\n\n  position: absolute;\n  top: -8px;\n  left: calc(100% - 8px);\n\n  transition: 300ms;\n\n  svg {\n    width: 10px;\n    height: 10px;\n    transition: 300ms;\n  }\n\n  &:hover {\n    top: -7px;\n    left: calc(100% - 7px);\n    width: 14px;\n    height: 14px;\n    cursor: pointer;\n  }\n"])), function (p) { return p.theme.accent_3; }, function (p) { return p.theme.fg; });
function Card(props) {
    return (React.createElement(StyledCard, __assign({}, __assign(__assign({}, props), { children: undefined })),
        props.dismiss && (React.createElement(StyledCardDismiss, { onClick: props.dismiss },
            React.createElement(UilTimes, null))),
        React.createElement(StyledCardBody, { compact: props.compact, hasFooter: props.footer ? true : false }, props.children),
        props.footer && (React.createElement(StyledCardFooter, { compact: props.compact, style: props.footerStyle }, props.footer))));
}
var CardForm = styled.form(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  width: 100%;\n  margin: 0;\n  padding: 0;\n\n  & > :first-child {\n    margin-top: 0;\n  }\n"], ["\n  width: 100%;\n  margin: 0;\n  padding: 0;\n\n  & > :first-child {\n    margin-top: 0;\n  }\n"])));
var templateObject_1$6, templateObject_2$4, templateObject_3$4, templateObject_4$1, templateObject_5;

var StyledOceanRoot = styled.div(templateObject_1$5 || (templateObject_1$5 = __makeTemplateObject(["\n  width: 100%;\n  background: ", ";\n  box-sizing: border-box;\n\n  .button + .button,\n  .icon-button + .button {\n    margin-left: 16px;\n  }\n\n  * + .checkbox,\n  * + .separator,\n  * + .radio,\n  * + .div,\n  * + .toggle,\n  * + .option-switch {\n    margin-top: 16px;\n  }\n\n  * {\n    font-family: \"Roboto\", -apple-system, BlinkMacSystemFont, \"Segoe UI\",\n      \"Roboto\", \"Oxygen\", \"Ubuntu\", \"Cantarell\", \"Fira Sans\", \"Droid Sans\",\n      \"Helvetica Neue\", sans-serif;\n\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n  }\n"], ["\n  width: 100%;\n  background: ", ";\n  box-sizing: border-box;\n\n  .button + .button,\n  .icon-button + .button {\n    margin-left: 16px;\n  }\n\n  * + .checkbox,\n  * + .separator,\n  * + .radio,\n  * + .div,\n  * + .toggle,\n  * + .option-switch {\n    margin-top: 16px;\n  }\n\n  * {\n    font-family: \"Roboto\", -apple-system, BlinkMacSystemFont, \"Segoe UI\",\n      \"Roboto\", \"Oxygen\", \"Ubuntu\", \"Cantarell\", \"Fira Sans\", \"Droid Sans\",\n      \"Helvetica Neue\", sans-serif;\n\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n  }\n"])), function (p) { return p.theme.bg; });
function OceanRoot(_a) {
    var theme = _a.theme, children = _a.children;
    return (React.createElement(ThemeProvider, { theme: theme },
        React.createElement(StyledOceanRoot, null, children)));
}
var templateObject_1$5;

var StyledCheckboxContainer = styled.label(templateObject_1$4 || (templateObject_1$4 = __makeTemplateObject(["\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: flex-start;\n  flex-flow: row;\n  cursor: pointer;\n"], ["\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: flex-start;\n  flex-flow: row;\n  cursor: pointer;\n"])));
var StyledCheckbox = styled.button(templateObject_2$3 || (templateObject_2$3 = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 2px;\n\n  background: transparent;\n  width: 16px;\n  height: 16px;\n  border-radius: 3px;\n  border: 1px solid ", ";\n  transition: 300ms;\n\n  svg {\n    color: ", ";\n    opacity: 0;\n    width: 5px;\n    height: 5px;\n    transition: 300ms;\n  }\n\n  &:hover {\n    cursor: pointer;\n    border-color: ", ";\n  }\n\n  &.checkbox__checkbox--checked {\n    border-color: ", ";\n    background: ", ";\n\n    svg {\n      width: 14px;\n      height: 14px;\n      opacity: 1;\n    }\n  }\n"], ["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 2px;\n\n  background: transparent;\n  width: 16px;\n  height: 16px;\n  border-radius: 3px;\n  border: 1px solid ", ";\n  transition: 300ms;\n\n  svg {\n    color: ", ";\n    opacity: 0;\n    width: 5px;\n    height: 5px;\n    transition: 300ms;\n  }\n\n  &:hover {\n    cursor: pointer;\n    border-color: ", ";\n  }\n\n  &.checkbox__checkbox--checked {\n    border-color: ", ";\n    background: ", ";\n\n    svg {\n      width: 14px;\n      height: 14px;\n      opacity: 1;\n    }\n  }\n"])), function (p) { return p.theme.accent_2; }, function (p) { return p.theme.on_primary; }, function (p) { return p.theme.accent_1; }, function (p) { return p.theme.primary; }, function (p) { return p.theme.primary; });
var StyledCheckboxLabel = styled.span(templateObject_3$3 || (templateObject_3$3 = __makeTemplateObject(["\n  margin-left: 12px;\n  font-size: 13px;\n  padding-bottom: 1px;\n  color: ", ";\n  transition: 300ms;\n\n  &.checkbox__label--checked {\n    color: ", ";\n  }\n"], ["\n  margin-left: 12px;\n  font-size: 13px;\n  padding-bottom: 1px;\n  color: ", ";\n  transition: 300ms;\n\n  &.checkbox__label--checked {\n    color: ", ";\n  }\n"])), function (p) { return p.theme.accent_1; }, function (p) { return p.theme.fg; });
function index$1 (props) {
    var _a, _b;
    var _c = useState(props.defaultChecked || false), checked = _c[0], setChecked = _c[1];
    return (React.createElement(StyledCheckboxContainer, { className: "checkbox" },
        React.createElement(StyledCheckbox, { onClick: function () {
                var _a;
                setChecked(!checked);
                return !((_a = props.checked) !== null && _a !== void 0 ? _a : checked);
            }, className: ((_a = props.checked) !== null && _a !== void 0 ? _a : checked) ? "checkbox__checkbox--checked" : "" },
            React.createElement(UilCheck, { size: "13" })),
        React.createElement(StyledCheckboxLabel, { className: ((_b = props.checked) !== null && _b !== void 0 ? _b : checked) ? "checkbox__label--checked" : "" }, props.children)));
}
var templateObject_1$4, templateObject_2$3, templateObject_3$3;

var StyledToggleContainer = styled.label(templateObject_1$3 || (templateObject_1$3 = __makeTemplateObject(["\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  flex-flow: row;\n  cursor: pointer;\n\n  * {\n    transition: 300ms;\n  }\n"], ["\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  flex-flow: row;\n  cursor: pointer;\n\n  * {\n    transition: 300ms;\n  }\n"])));
var StyledToggleLabel = styled.span(templateObject_2$2 || (templateObject_2$2 = __makeTemplateObject(["\n  font-size: 13px;\n  padding-bottom: 1px;\n  color: ", ";\n  transition: 300ms;\n\n  &.toggle__label--checked {\n    color: ", ";\n  }\n"], ["\n  font-size: 13px;\n  padding-bottom: 1px;\n  color: ", ";\n  transition: 300ms;\n\n  &.toggle__label--checked {\n    color: ", ";\n  }\n"])), function (p) { return p.theme.accent_1; }, function (p) { return p.theme.fg; });
var StyledToggle = styled.button(templateObject_3$2 || (templateObject_3$2 = __makeTemplateObject(["\n  border: 1px solid ", ";\n  border-radius: 16px;\n  height: 16px;\n  width: 32px;\n  background: transparent;\n  cursor: pointer;\n  transition: 300ms;\n  position: relative;\n  transition: 300ms;\n\n  &:before {\n    content: \"\";\n    border-radius: 50%;\n    width: 10px;\n    height: 10px;\n    background: ", ";\n    transition: 300ms;\n    position: absolute;\n    top: 2px;\n    left: 2px;\n  }\n\n  &:hover {\n    border-color: ", ";\n\n    &:before {\n      background: ", ";\n    }\n  }\n\n  &.toggle__toggle--checked {\n    border-color: ", ";\n    background: ", ";\n\n    &::before {\n      left: 18px;\n      background: ", ";\n    }\n  }\n"], ["\n  border: 1px solid ", ";\n  border-radius: 16px;\n  height: 16px;\n  width: 32px;\n  background: transparent;\n  cursor: pointer;\n  transition: 300ms;\n  position: relative;\n  transition: 300ms;\n\n  &:before {\n    content: \"\";\n    border-radius: 50%;\n    width: 10px;\n    height: 10px;\n    background: ", ";\n    transition: 300ms;\n    position: absolute;\n    top: 2px;\n    left: 2px;\n  }\n\n  &:hover {\n    border-color: ", ";\n\n    &:before {\n      background: ", ";\n    }\n  }\n\n  &.toggle__toggle--checked {\n    border-color: ", ";\n    background: ", ";\n\n    &::before {\n      left: 18px;\n      background: ", ";\n    }\n  }\n"])), function (p) { return p.theme.accent_2; }, function (p) { return p.theme.accent_2; }, function (p) { return p.theme.accent_1; }, function (p) { return p.theme.accent_1; }, function (p) { return p.theme.primary; }, function (p) { return p.theme.primary; }, function (p) { return p.theme.on_primary; });
function ToggleSwitch(props) {
    return (React.createElement(StyledToggleContainer, { className: "toggle" },
        React.createElement(StyledToggleLabel, { className: "toggle__label" + (props.checked ? ' toggle__label--checked' : '') }, props.children),
        React.createElement(StyledToggle, { onClick: function () { return props.onToggle(!props.checked); }, className: "toggle__toggle" + (props.checked ? ' toggle__toggle--checked' : '') })));
}
var templateObject_1$3, templateObject_2$2, templateObject_3$2;

var StyledOptionSwitchContainer = styled.div(templateObject_1$2 || (templateObject_1$2 = __makeTemplateObject(["\n  padding: 4px;\n  border-radius: 5px;\n  background-color: ", ";\n  box-shadow: 0px 5px 10px ", ";\n  display: inline-block;\n"], ["\n  padding: 4px;\n  border-radius: 5px;\n  background-color: ", ";\n  box-shadow: 0px 5px 10px ", ";\n  display: inline-block;\n"])), function (p) { return p.theme.accent_3; }, function (p) { return p.theme.accent_3 + "80"; });
var StyledOptionSwitchWrapper = styled.label(templateObject_2$1 || (templateObject_2$1 = __makeTemplateObject(["\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: ", ";\n  flex-flow: row;\n"], ["\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: ", ";\n  flex-flow: row;\n"])), function (p) { return p.centered ? 'center' : 'space-between'; });
var StyledOptionSwitchLabel = styled.span(templateObject_3$1 || (templateObject_3$1 = __makeTemplateObject(["\n  font-size: 13px;\n  padding-bottom: 1px;\n  color: ", ";\n"], ["\n  font-size: 13px;\n  padding-bottom: 1px;\n  color: ", ";\n"])), function (p) { return p.theme.accent_1; });
function OptionSwitch(props) {
    return (React.createElement(StyledOptionSwitchWrapper, __assign({ className: "option-switch" }, __assign(__assign({}, props), { children: undefined, label: undefined })),
        props.label && React.createElement(StyledOptionSwitchLabel, null, props.label),
        React.createElement(StyledOptionSwitchContainer, __assign({}, props))));
}
var StyledSwitchOption = styled.button(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  border: none;\n  background-color: ", ";\n  color: ", ";\n  border-radius: 5px;\n  padding: 8px 16px;\n  font-size: 13px;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  margin: 0;\n  transition: 300ms;\n\n  cursor: pointer;\n"], ["\n  border: none;\n  background-color: ",
    ";\n  color: ", ";\n  border-radius: 5px;\n  padding: 8px 16px;\n  font-size: 13px;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  margin: 0;\n  transition: 300ms;\n\n  cursor: pointer;\n"])), function (p) {
    return p.selected ? p.theme.accent_2 : p.theme.accent_3;
}, function (p) { return (p.selected ? p.theme.fg : p.theme.accent_1); });
function SwitchOption(props) {
    return React.createElement(StyledSwitchOption, __assign({}, props));
}
var templateObject_1$2, templateObject_2$1, templateObject_3$1, templateObject_4;

var StyledSeparator = styled.hr(templateObject_1$1 || (templateObject_1$1 = __makeTemplateObject(["\n  width: 100%;\n  border: none;\n  height: 1px;\n  border-top: 1px solid ", ";\n  margin: 0;\n  padding: 0;\n"], ["\n  width: 100%;\n  border: none;\n  height: 1px;\n  border-top: 1px solid ", ";\n  margin: 0;\n  padding: 0;\n"])), function (p) { return p.theme.accent_2; });
function Separator(props) {
    return (React.createElement(StyledSeparator, { className: "separator" }));
}
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
    bg: '#161822',
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

var index = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  height: 100vh;\n  width: ", ";\n  background-color: ", ";\n  border-right: 1px solid ", ";\n  padding: 20px;\n  box-sizing: border-box;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  flex-flow: column;\n  img, svg {\n    width: 100%;\n    height: auto;\n  }\n"], ["\n  height: 100vh;\n  width: ", ";\n  background-color: ", ";\n  border-right: 1px solid ", ";\n  padding: 20px;\n  box-sizing: border-box;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  flex-flow: column;\n  img, svg {\n    width: 100%;\n    height: auto;\n  }\n"])), function (p) { return (p.small ? "60px" : "250px"); }, function (p) { return p.theme.accent_4; }, function (p) { return p.theme.accent_2; });
var SidebarLink = styled.a(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  display: block;\n  padding: 10px 20px;\n  font-size: 14px;\n  text-decoration: regular;\n  color: ", ";\n  background-color: ", ";\n  border-radius: 7px;\n"], ["\n  display: block;\n  padding: 10px 20px;\n  font-size: 14px;\n  text-decoration: regular;\n  color: ", ";\n  background-color: ", ";\n  border-radius: 7px;\n"])), function (p) { return (p.current ? p.theme.on_primary : p.theme.accent_1); }, function (p) { return (p.current ? p.theme.primary : "transparent"); });
var SidebarButton = styled.button(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  border: none;\n  display: block;\n  padding: 10px 20px;\n  font-size: 14px;\n  text-decoration: regular;\n  color: ", ";\n  background-color: ", ";\n  border-radius: 7px;\n"], ["\n  border: none;\n  display: block;\n  padding: 10px 20px;\n  font-size: 14px;\n  text-decoration: regular;\n  color: ", ";\n  background-color: ", ";\n  border-radius: 7px;\n"])), function (p) { return (p.current ? p.theme.on_primary : p.theme.accent_1); }, function (p) { return (p.current ? p.theme.primary : "transparent"); });
var templateObject_1, templateObject_2, templateObject_3;

export { Button, Card, CardForm, index$1 as Checkbox, IconButton, index$2 as Input, OceanRoot, OptionSwitch, Separator, index as Sidebar, SidebarButton, SidebarLink, StepBar, SwitchOption, ToggleSwitch, dark as defaultDarkTheme, light as defaultLightTheme };
//# sourceMappingURL=index.esm.js.map
