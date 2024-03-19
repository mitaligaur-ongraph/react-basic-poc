import React from "react";
import { usersData } from '../ChatData'

const currentUser = usersData.find(datum => datum.name === 'Current User')
export const SelectedUserContext = React.createContext(currentUser)
export const SelectedUserContextProvider = SelectedUserContext.Provider
