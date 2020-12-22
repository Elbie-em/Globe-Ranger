import React from 'react'

const Regions = ['All Countries','Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];

const RegionFilter = ({handleChange}) => {
   return (
    <div className="region-area">
      <label className="region-label" htmlFor="region">
        Filter By Region:&nbsp;&nbsp;
      </label>
      <select className="region-filter" type="text" id="region" name="region" defaultValue="DEFAULT" onChange={e => {
          handleChange(e.target.value);
        }}>
        <option value="DEFAULT" disabled> -- select an option -- </option>
        {Regions.map(region => (
          <option key={region} value={region}>
            {region}
          </option>
        ))}
      </select>
    </div>
  )
}

export default RegionFilter

