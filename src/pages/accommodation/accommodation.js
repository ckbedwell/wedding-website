import { AccommodationVenue } from './accommodation-venue'

import data from 'data/accommodation.json'

export const Accommodation = () => {
  return (
    <div>
      {data.map(venue => (
        <AccommodationVenue
          key={venue.name}
          {...venue}
        />
      ))}
    </div>
  )
}
