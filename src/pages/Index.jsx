import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

const CatBreed = ({ name, description, image }) => (
  <Card className="mb-4 overflow-hidden">
    <img src={image} alt={name} className="w-full h-48 object-cover" />
    <CardHeader>
      <CardTitle>{name}</CardTitle>
    </CardHeader>
    <CardContent>
      <CardDescription>{description}</CardDescription>
    </CardContent>
  </Card>
);

const Index = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const catBreeds = [
    { name: "Siamese", description: "Known for their distinctive color points and blue eyes.", image: "https://upload.wikimedia.org/wikipedia/commons/2/25/Siam_lilacpoint.jpg" },
    { name: "Maine Coon", description: "One of the largest domestic cat breeds, known for their intelligence and playful personality.", image: "https://upload.wikimedia.org/wikipedia/commons/5/5f/Maine_Coon_cat_by_Tomitheos.JPG" },
    { name: "Persian", description: "Recognized for their long fur and flat faces.", image: "https://upload.wikimedia.org/wikipedia/commons/1/15/White_Persian_Cat.jpg" },
    { name: "Bengal", description: "Known for their wild appearance and energetic personality.", image: "https://upload.wikimedia.org/wikipedia/commons/b/ba/Paintedcats_Red_Star_standing.jpg" },
    { name: "Sphynx", description: "Distinctive for their lack of fur and wrinkled skin.", image: "https://upload.wikimedia.org/wikipedia/commons/e/e8/Sphinx2_July_2006.jpg" },
  ];

  const carouselImages = [
    "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Cat03.jpg/1200px-Cat03.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/4/4d/Cat_November_2010-1a.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/6/68/Orange_tabby_cat_sitting_on_fallen_leaves-Hisashi-01A.jpg",
  ];

  const filteredBreeds = catBreeds.filter(breed =>
    breed.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-100 to-pink-100 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl font-bold mb-6 text-center text-purple-800">Fantastic Felines</h1>
        
        <Carousel className="mb-8">
          <CarouselContent>
            {carouselImages.map((src, index) => (
              <CarouselItem key={index}>
                <img src={src} alt={`Cat ${index + 1}`} className="mx-auto object-cover w-full h-[400px] rounded-lg" />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>

        <p className="text-xl text-gray-700 mb-8 text-center">
          Cats are fascinating creatures that have been domesticated for thousands of years. They are known for their
          independence, agility, and affectionate nature. Cats come in various breeds, each with its unique
          characteristics and personalities.
        </p>

        <div className="relative mb-6">
          <Input
            type="text"
            placeholder="Search cat breeds..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10"
          />
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
        </div>

        <h2 className="text-3xl font-semibold mb-6 text-center text-purple-800">Popular Cat Breeds</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredBreeds.map((breed, index) => (
            <CatBreed key={index} name={breed.name} description={breed.description} image={breed.image} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Index;
