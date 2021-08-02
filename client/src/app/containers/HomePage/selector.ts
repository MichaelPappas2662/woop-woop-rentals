import { createSelector } from "reselect";

const selectHomePage = (state: any) => state.homePage;

export const makeSelectTopCars = createSelector(selectHomePage, (homePage) => homePage.topCars)