import { createSelector } from "@reduxjs/toolkit";

export const getContacts = (state) => state.items.data;
export const getFilter = (state) => state.filter;

export const getVisibleContacts = createSelector(
    [getContacts, getFilter],
    (contactsArray, filterCont) => {
    let normFilter = filterCont?.toLowerCase().trim();
    return contactsArray?.filter(contact => contact.name.toLowerCase().trim().includes(normFilter));
})
    
    
    
