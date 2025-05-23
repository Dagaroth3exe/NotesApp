import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import NoteCard from '../../Components/Cards/NoteCard'


const HomePage = () => {
  return (
    <>
    <Navbar/> 

    <div className="container mx-auto">

      <NoteCard 
      title="Meeting on 7th April" 
      date="3rd April 2024" 
      content="Meeting on 7th April"
      tags="#Meeting"
      isPinned={true}
      onEdit={() => {}}
      onDelete={() => {}}
      onPinNote={() => {}}
      
      />
    </div>
    </>
  )
}

export default HomePage
