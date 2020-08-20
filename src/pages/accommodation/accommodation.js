import { AccommodationVenue } from './accommodation-venue'

// import styles from './accommodation.css'
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
