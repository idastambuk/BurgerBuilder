import { BurgerBuilder } from "./BurgerBuilder";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";

import React from 'react';
import { configure, shallow } from 'enzyme'; //shallow renders component, but shallowly, not nested components
import Adapter from 'enzyme-adapter-react-16';

configure({adapter: new Adapter()}); //configuration for enzyme

describe('<BurgerBuilder />', () => {
    let wrapper;
    beforeEach(()=> {
        wrapper = shallow(<BurgerBuilder onInitIngredients={()=> {}}/>);//onInitIngredients isnt a function error otherwise, since we dont set onInitIngredients in the setProps below
    });
    it('should render BuildControls when receiving ings', () => {
        wrapper.setProps({ings: {salad: 0}});
        expect(wrapper.find(BuildControls)).toHaveLength(1);
    })
});