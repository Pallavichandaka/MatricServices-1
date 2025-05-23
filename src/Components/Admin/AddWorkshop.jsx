import React, { useState } from "react";
import {
  Box,
  Input,
  Button,
  FormControl,
  FormLabel,
  Textarea,
  HStack,
  VStack,
  Text,
  InputGroup,
  useColorModeValue,
  useDisclosure,
  IconButton,
  Stack,
  Image,
} from "@chakra-ui/react";
import { AiOutlineCloudUpload } from "react-icons/ai";
import theme from "../../theme";
import { useDispatch } from "react-redux";
import { postWorkshop } from "../../Redux/app/action";
import { CloseIcon } from "@chakra-ui/icons";
import { useNavigate } from "react-router-dom";

const AddWorkshop = () => {
  const dispatch = useDispatch();
  const Navigate = useNavigate();
  const [isSubmit, setIsSubmit] = useState(false);
  const init = {
    topic: "",
    desc: "",
    venue: "",
    fromdate: "",
    todate: "",
    criteria: "",
    contact: "",
    email: "",
    img: [],
  };
  const [formData, setFormData] = useState(init);



  const handleInputChange = (e) => {
    const { name, value, type, files } = e.target;
    if (type === "file") {
      const fileArray = Array.from(files);
      console.log(fileArray);
      setFormData((prev) => ({
        ...prev,
        [name]: prev[name] ? [...prev[name], ...fileArray] : [...fileArray],
      }));
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleimageInput = () => {
    const input = document.createElement("input");
    input.type = "file";
    input.multiple = true;
    input.name = "img";
    input.addEventListener("change", handleInputChange);
    input.click();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      !formData.topic ||
      !formData.desc ||
      !formData.venue ||
      !formData.fromdate ||
      !formData.todate ||
      !formData.criteria ||
      !formData.contact ||
      !formData.email
    ) {
      alert("Please Fill all the Input Fields");
    } else {
      setIsSubmit(true);
      dispatch(postWorkshop(formData))
        .then((res) => {
          alert("successfully submitted");
          setIsSubmit(false);
          console.log(res);
          setFormData(init);
          Navigate("/admin/workshoptable");
        })
        .catch((err) => {
          console.log("error", err.message);
        });
    }
  };

  const inputStyles = {
    borderRadius: "md",
    borderStyle: "solid",
    borderWidth: "2px",
    borderColor: `${theme.colors.thirty}`,
    width: "100%",
    p: "10px",
  };

  return (
    <Box
      bgGradient={useColorModeValue(
        "linear(to-r, #f7fafc, #edf2f7)",
        "linear(to-r, gray.700, gray.900)"
      )}
      p={8}
      mx="auto"
      width="100%"
      borderRadius="lg"
      boxShadow="2xl"
      border="none"
      transition="all 0.3s ease"
      _hover={{
        boxShadow: "3xl",
        transform: "translateY(-4px)",
      }}
    >
      <Text
        fontSize="4xl"
        fontWeight="xl"
        mb={6}
        textAlign="center"
        color="black"
        
      >
        ADD A WORKSHOP
      </Text>

      <form onSubmit={handleSubmit}>
        <VStack spacing={8} align="stretch">
          <FormControl isRequired>
            <FormLabel fontSize="lg" fontWeight="medium">
              Workshop Name
            </FormLabel>
            <Input
              name="topic"
              value={formData.topic}
              onChange={handleInputChange}
              placeholder="Enter your workshop name"
              size="lg"
              {...inputStyles}
            />
          </FormControl>

          <FormControl isRequired>
            <FormLabel fontSize="lg" fontWeight="medium">
              workshop Description
            </FormLabel>
            <Textarea
              name="desc"
              value={formData.desc}
              onChange={handleInputChange}
              placeholder="Describe the workshop"
              size="lg"
              {...inputStyles}
            />
          </FormControl>

          <FormControl>
            <FormLabel fontSize="lg" fontWeight="medium">
              Location
            </FormLabel>
            <Input
              name="venue"
              value={formData.venue}
              onChange={handleInputChange}
              placeholder="City, Country"
              size="lg"
              {...inputStyles}
            />
          </FormControl>

          <HStack spacing={6} width="100%">
            <FormControl width="100%">
              <FormLabel fontSize="lg" fontWeight="medium" w="100%">
                Criteria
              </FormLabel>
              <Input
                name="criteria"
                value={formData.criteria}
                onChange={handleInputChange}
                placeholder="Selection criteria"
                size="lg"
                {...inputStyles}
                w="100%"
              />
            </FormControl>
          </HStack>

          <HStack spacing={6} width="100%">
            <FormControl width="50%">
              <FormLabel fontSize="lg" fontWeight="medium">
                From-date
              </FormLabel>
              <InputGroup size="lg">
                <Input
                  type="date"
                  name="fromdate"
                  value={formData.fromdate}
                  onChange={handleInputChange}
                  {...inputStyles}
                />
              </InputGroup>
            </FormControl>

            <FormControl width="50%">
              <FormLabel fontSize="lg" fontWeight="medium">
                To-date
              </FormLabel>
              <InputGroup size="lg">
                <Input
                  type="date"
                  name="todate"
                  value={formData.todate}
                  onChange={handleInputChange}
                  {...inputStyles}
                />
              </InputGroup>
            </FormControl>
          </HStack>

          <HStack spacing={6} width="100%">
            <FormControl isRequired width="50%">
              <FormLabel fontSize="lg" fontWeight="medium">
                Phone Number
              </FormLabel>
              <Input
                type="phoneNumber"
                name="contact"
                value={formData.contact}
                onChange={handleInputChange}
                placeholder="Your contact number"
                size="lg"
                {...inputStyles}
              />
            </FormControl>

            <FormControl isRequired width="50%">
              <FormLabel fontSize="lg" fontWeight="medium">
                Email
              </FormLabel>
              <Input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Your email address"
                size="lg"
                {...inputStyles}
              />
            </FormControl>
          </HStack>

          <FormControl>
            <Stack w={"100%"}>
              <Box
                display={"flex"}
                justifyContent={"left"}
                flexDirection={'column'}
                gap='10px'
              >
                <Box>
                  <FormLabel fontSize="lg" fontWeight="medium">
                    Upload image
                  </FormLabel>
                </Box>
                <Box display={"flex"} alignItems={"center"}  gap='10px'>
                  <input
                    type="file"
                    multiple
                    name="img"
                    onChange={handleInputChange}
                    style={{ display: "none" }}
                  />
                  <Button
                    onClick={handleimageInput}
                    bg='#1A202C'
                    color='white'
                    p='5px 10px'
                    borderRadius={'5px'}
                  >
                    Add Images
                  </Button>

                  {formData.img?.length > 0 && (
                    <HStack gap={"1rem"}>
                      {formData?.img?.map((image, index) => (
                        <Box key={index} display={"flex"} alignItems={"start"} gap='2px'>
                          <IconButton
                            aria-label="Remove Image"
                            fontSize={'0.8rem'}
                            icon={<CloseIcon />}
                            onClick={() => {
                              setFormData((prev) => ({
                                ...prev,
                                img: prev.img.filter((_, i) => i !== index),
                              }));
                            }}
                          />
                          <Box>{image.name}</Box>
                        </Box>
                      ))}
                    </HStack>
                  )}
                </Box>
              </Box>
            </Stack>
          </FormControl>
          {!isSubmit && (
            <>
              <Box display="flex" justifyContent="center" mt={6}>
                <Button
                  type="submit"
                  size="lg"
                  width="max-content"
                  borderRadius="10px"
                  bgColor="blue.200"
                  padding="10px"
                  display="inline-block"
                  textAlign="center"
                  fontSize="lg"
                  fontWeight="bold"
                  _hover={{
                    transform: "scale(1.05)",
                    transition: "all 0.5s ease",
                  }}
                >
                  Add Workshop
                </Button>
              </Box>
            </>
          )}
          {isSubmit && (
            <>
              <Box display="flex" justifyContent="center" mt={6}>
                <Button
                  size="lg"
                  width="max-content"
                  borderRadius="10px"
                  bgColor="blue.200"
                  padding="10px"
                  display="inline-block"
                  textAlign="center"
                  fontSize="lg"
                  fontWeight="bold"
                  _hover={{
                    transform: "scale(1.05)",
                    transition: "all 0.5s ease",
                  }}
                >
                  adding...
                </Button>
              </Box>
            </>
          )}
          
        </VStack>
      </form>

      
    </Box>
  );
};

export default AddWorkshop;
