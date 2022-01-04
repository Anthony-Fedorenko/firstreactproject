import React from "react";
import {create} from "react-test-renderer";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";

describe("ProfileStatus component", () => {
    test("after creation <span> should be displayed", () => {
        const component = create(<ProfileStatusWithHooks status="Anthony-dev" />);
        const root = component.root;
        let span = root.findByType('span')
        expect(span).not.toBeNull();
    });
    test("after creation <input> shouldn't be displayed", () => {
        const component = create(<ProfileStatusWithHooks status="Anthony-dev" />);
        const root = component.root;
        expect(() => {
            let input = root.findByType('input')
        }).toThrow();
    });
    test("after creation <span> should contain correct status", () => {
        const component = create(<ProfileStatusWithHooks status="Anthony-dev" />);
        const root = component.root;
        let span = root.findByType('span')
        expect(span.children[0]).toBe('Anthony-dev');
    });
    test("input should be displayed in edit mode instead of span", () => {
        const component = create(<ProfileStatusWithHooks status="Anthony-dev" />);
        const root = component.root;
        let span = root.findByType('span')
        span.props.onDoubleClick()
        let input = root.findByType('input')
        expect(input.props.value).toBe('Anthony-dev');
    });
});
