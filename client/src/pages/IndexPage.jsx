import {useEffect, useState} from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import Image from '../Image'

export default function IndexPage() {

  const [places, setPlaces] = useState([])

  useEffect(() => {
     axios.get('/places').then((response) => {
      setPlaces(response.data)
     })
  },[])

  return (
    <div className='mt-8 grid gap-x-6 gap-y-8 grid-cols-3 md:grid-cols-4 lg:grid-cols-5 '>
        {places.length>0 && places.map(place => (
          <Link to={'/place/'+place._id}>
            <div className='bg-gray-500 mb-2 rounded-2xl flex'>
               {place.photos?.[0] && (
                <Image className='rounded-2xl object-cover aspect-square' src={place.photos?.[0]} alt=""/>
               )}
            </div>
            <h2 className='font-bold'>{place.addres}</h2>
            <h3 className='text-sm text-gray-500'>{place.title}</h3>
            <h4 className='font-bold'>${place.price}</h4>
          </Link>
        ))}
    </div>
  )
}