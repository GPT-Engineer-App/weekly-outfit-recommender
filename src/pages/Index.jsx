import { useState } from "react";
import { Box, Button, Container, Heading, Image, SimpleGrid, Text, VStack } from "@chakra-ui/react";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

// Sample data for outfits
const outfits = [
  { day: "Monday", image: "https://images.unsplash.com/photo-1491975474562-1f4e30bc9468?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGNhc3VhbCUyMG91dGZpdHxlbnwwfHx8fDE3MTU1MzcyNjZ8MA&ixlib=rb-4.0.3&q=80&w=1080", description: "Business casual look for the start of the week." },
  { day: "Tuesday", image: "https://images.unsplash.com/photo-1578100584776-fdf3ff0b367f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxjYXN1YWwlMjBvdXRmaXR8ZW58MHx8fHwxNzE1NTM3MjY5fDA&ixlib=rb-4.0.3&q=80&w=1080", description: "Relaxed fit for a casual Tuesday." },
  { day: "Wednesday", image: "https://images.unsplash.com/photo-1605538514871-7b8d1bd23718?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxzcG9ydHklMjBvdXRmaXR8ZW58MHx8fHwxNzE1NTM3Mjc4fDA&ixlib=rb-4.0.3&q=80&w=1080", description: "Sporty gear for midweek activities." },
  { day: "Thursday", image: "https://images.unsplash.com/photo-1529025530948-67e8a5c69b58?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxmb3JtYWwlMjBvdXRmaXR8ZW58MHx8fHwxNzE1NTM3MjgzfDA&ixlib=rb-4.0.3&q=80&w=1080", description: "Sharp formal attire for important meetings." },
  { day: "Friday", image: "https://images.unsplash.com/photo-1603633382334-a3b87d3695ad?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxwYXJ0eSUyMG91dGZpdHxlbnwwfHx8fDE3MTU1MzcyODZ8MA&ixlib=rb-4.0.3&q=80&w=1080", description: "Fun and vibrant outfit to welcome the weekend." },
  { day: "Saturday", image: "https://images.unsplash.com/photo-1632083344463-0cc4dfa0c810?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHx3ZWVrZW5kJTIwY2FzdWFsJTIwb3V0Zml0fGVufDB8fHx8MTcxNTUzNzI4OHww&ixlib=rb-4.0.3&q=80&w=1080", description: "Comfortable attire for a relaxing weekend." },
  { day: "Sunday", image: "https://images.unsplash.com/photo-1482433504097-a3cde62f7882?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxvdXRkb29yJTIwb3V0Zml0fGVufDB8fHx8MTcxNTUzNzI5MHww&ixlib=rb-4.0.3&q=80&w=1080", description: "Perfect outfit for outdoor activities." },
];

const Index = () => {
  const [currentDayIndex, setCurrentDayIndex] = useState(0);

  const handleNext = () => {
    setCurrentDayIndex((prevIndex) => (prevIndex + 1) % outfits.length);
  };

  const handlePrevious = () => {
    setCurrentDayIndex((prevIndex) => (prevIndex - 1 + outfits.length) % outfits.length);
  };

  const { day, image, description } = outfits[currentDayIndex];

  return (
    <Container centerContent maxW="container.md" py={8}>
      <VStack spacing={8}>
        <Heading>Weekly Wardrobe Planner</Heading>
        <Box position="relative" width="100%">
          <Button position="absolute" left={0} top="50%" transform="translateY(-50%)" onClick={handlePrevious}>
            <FaArrowLeft />
          </Button>
          <VStack>
            <Text fontSize="xl" fontWeight="bold">
              {day}
            </Text>
            <Image src={image} boxSize="300px" objectFit="cover" borderRadius="lg" />
            <Text>{description}</Text>
          </VStack>
          <Button position="absolute" right={0} top="50%" transform="translateY(-50%)" onClick={handleNext}>
            <FaArrowRight />
          </Button>
        </Box>
        <SimpleGrid columns={2} spacing={10} width="100%">
          {outfits.map((outfit, index) => (
            <Box key={index} p={4} borderWidth="1px" borderRadius="lg" boxShadow="md">
              <Text fontSize="md" fontWeight="bold">
                {outfit.day}
              </Text>
              <Image src={outfit.image} boxSize="100px" objectFit="cover" borderRadius="md" />
            </Box>
          ))}
        </SimpleGrid>
      </VStack>
    </Container>
  );
};

export default Index;
