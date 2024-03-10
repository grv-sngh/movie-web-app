import { Button } from '@/components/ui/button'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel'
import React from 'react'

const Home = () => {
  return (
    <div>
      {/* <p> Home is here! </p>
      <Button>here</Button> */}
      
      <Carousel>
        <CarouselContent>
          <CarouselItem className="basis-1/3">Home and more</CarouselItem>
          <CarouselItem className="basis-1/3">Home and more</CarouselItem>
          <CarouselItem className="basis-1/3">Home and more</CarouselItem>
          <CarouselItem className="basis-1/3">Home and more</CarouselItem>
          <CarouselItem className="basis-1/3">Home and more</CarouselItem>

        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>

    </div>
  )
}

export default Home