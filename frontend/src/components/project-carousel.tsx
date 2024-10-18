import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

interface ProjectCarouselProps {
  images: string[] | undefined;
}

export default function ProjectCarousel({ images }: ProjectCarouselProps) {
  return (
    <Carousel className="w-full max-w-xl hover:cursor-grab">
      <CarouselContent>
        {images?.map((image, index) => (
          <CarouselItem key={index}>
            <div className="p-1">
              <Card>
                <CardContent className="flex aspect-auto items-center justify-center p-4">
                  <img src={image} alt="portfolio project screenshot" />
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="text-dark-brown" />
      <CarouselNext className="text-dark-brown" />
    </Carousel>
  );
}
