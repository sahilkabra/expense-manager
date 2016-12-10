import React from 'react';
import HelloWorld from './container';
import ReactTestUtils from 'react-addons-test-utils';
import {shallow, mount, render} from 'enzyme';

describe('Hello World Container', function() {
    it('exists', function() {
        const wrapper = shallow(<HelloWorld name='Sahil'/>);
        expect(wrapper.is('h1')).to.equal(true);
        expect(wrapper.text()).to.equal('Hello, Sahil');
    });
});
