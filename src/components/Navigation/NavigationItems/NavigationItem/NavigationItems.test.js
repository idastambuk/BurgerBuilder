import React from 'react';
import { configure, shallow } from 'enzyme'; //shallow renders component, but shallowly, not nested components
import Adapter from 'enzyme-adapter-react-16';
import NavigationItems from "../NavigationItems";
import NavigationItem from "./NavigationItem";

configure({adapter: new Adapter()}); //configuration for enzyme

describe('<NavigationItems />', () => {
    let wrapper;
    //helper method if we render one component multiple times
    beforeEach(() => {
        wrapper = shallow(<NavigationItems />);
    });
    it('should render two <NavigationItem />els if not authenticated', () => {
        expect(wrapper.find(NavigationItem)).toHaveLength(2); //not a jsx element
    });
    it('should render three <NavigationItem />els if authenticated', () => {
        //wrapper = shallow(<NavigationItems isAuthenticated/>);
        wrapper.setProps({isAuthenticated: true});
        expect(wrapper.find(NavigationItem)).toHaveLength(3); //not a jsx element
    });
    it('should render three <NavigationItem />els if authenticated', () => {
        //wrapper = shallow(<NavigationItems isAuthenticated/>);
        wrapper.setProps({isAuthenticated: true});//every test independent of the other, if we want the props to be authenticated, we have to repeat this line
        expect(wrapper.contains(<NavigationItem link='/logout'>Logout</NavigationItem>)).toEqual(true); //not a jsx element
    })
});