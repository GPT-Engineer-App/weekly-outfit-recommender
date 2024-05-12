import React, { useState } from "react";
import { Box, Text, Input, VStack, Heading, List, ListItem } from "@chakra-ui/react";

function CreateOutfit() {
  const [tops, setTops] = useState([]);
  const [bottoms, setBottoms] = useState([]);
  const [accessories, setAccessories] = useState([]);

  const handleFileUpload = (event, category) => {
    const files = Array.from(event.target.files).map((file) => URL.createObjectURL(file));
    if (category === "tops") {
      setTops((prev) => [...prev, ...files]);
    } else if (category === "bottoms") {
      setBottoms((prev) => [...prev, ...files]);
    } else if (category === "accessories") {
      setAccessories((prev) => [...prev, ...files]);
    }
  };

  return (
    <VStack spacing={4} align="stretch">
      <Heading>Create Your Outfit</Heading>
      <Box>
        <Text fontSize="lg">Upload Tops</Text>
        <Input type="file" multiple onChange={(e) => handleFileUpload(e, "tops")} />
        <List>
          {tops.map((src, index) => (
            <ListItem key={index}>
              <img src={src} alt="Top" />
            </ListItem>
          ))}
        </List>
      </Box>
      <Box>
        <Text fontSize="lg">Upload Bottoms</Text>
        <Input type="file" multiple onChange={(e) => handleFileUpload(e, "bottoms")} />
        <List>
          {bottoms.map((src, index) => (
            <ListItem key={index}>
              <img src={src} alt="Bottom" />
            </ListItem>
          ))}
        </List>
      </Box>
      <Box>
        <Text fontSize="lg">Upload Accessories</Text>
        <Input type="file" multiple onChange={(e) => handleFileUpload(e, "accessories")} />
        <List>
          {accessories.map((src, index) => (
            <ListItem key={index}>
              <img src={src} alt="Accessory" />
            </ListItem>
          ))}
        </List>
      </Box>
    </VStack>
  );
}

export default CreateOutfit;
