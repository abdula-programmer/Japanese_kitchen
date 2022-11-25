import React from 'react'

const СartContext =  React.createContext({
   items: [],
   totalAmount: 0,
   addItem: (item) => {},
   removeItem: (id) => {},
})


export default СartContext;