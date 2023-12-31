import React from 'react'
import { Juice } from '../utils/Juice';
const MenuSection = () => {
  return (
    <div>
      {Juice.map((item)=> {
        return(
            <div>
                {item.name} & it's calorie is {item.calorie}
            </div>
        );
      })}
    </div>
  )
}

export default MenuSection
