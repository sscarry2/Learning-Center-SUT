import React from 'react'
import Button from './Button'
import moment from 'moment'
import { formatTime, startTimeSelectOptions, endTimeSelectOptions } from '../helpers/bookingForm'

function FilterElement({
  onSetBuildingParam,
  onToggleFeature,
  onToggleCapacity,
  onSetAvailabilityParam,
  buildingParam,
  filterParams,
  capacityParams,
  availabilityParam,
  date
}) {

  return (
    <div className="sidebar__box--filter filter">
      <h3 className="header__heading header__heading--sidebar">Filter</h3>
      <form className="form form--filter">
        <h4 className="form__heading form__heading--filter">Building</h4>
        <div className="form__group" onChange={(event) => onSetBuildingParam(event.target.value)}>
          <div className="form_group">
            <input type="radio" value="Suranivet 5" name="building-select" className="form__input--radio" checked={buildingParam === 'Suranivet 5' ? true : false}/>
            <label for="Suranivet 5" className="form__label form__label--inline">Suranivet 5</label>
          </div>
          <div className="form_group">
            <input type="radio" value="Suranivet 6" name="building-select" className="form__input--radio" checked={buildingParam === 'Suranivet 6' ? true : false}/>
            <label for="Suranivet 6" className="form__label form__label--inline">Suranivet 6</label>
          </div>
          <div className="form_group">
            <input type="radio" value="All building" name="building-select" className="form__input--radio" checked={buildingParam === 'All building' ? true : false}/>
            <label for="All building" className="form__label form__label--inline">All building</label>
          </div>
        </div>

        
       
          
      </form>
    </div>
  )
}

export default FilterElement