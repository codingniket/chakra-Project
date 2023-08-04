import React from 'react';
import {
  Box,
  Button,
  HStack,
  Heading,
  Input,
  Stack,
  VStack,
  Text,
} from '@chakra-ui/react';

import {
  AiOutlineSend,
  AiFillInstagram,
  AiFillGithub,
  AiOutlineTwitter,
} from 'react-icons/ai';

const Footer = () => {
  return (
    <Box bgColor={'blackAlpha.900'} minH={'40'} p="16" color={'white'}>
      <Stack direction={['column', 'row']}>
        <VStack w={'full'} px={'4'}>
          <Heading size="md" textAlign={['center', 'left']}>
            Follow for Updates
          </Heading>
          <HStack>
            <Input
              placeholder="Email Here"
              color={'white'}
              //   border={'none'}
              //   borderRadius="none"
              variant="outline"
              outline={'2px solid'}
              isInvalid
              errorBorderColor="blue"
            />

            <Button
              colorScheme={'whatsapp'}
              p={'0'}
              borderRadius={'0 20px 20px 0'}
            >
              <AiOutlineSend size={20} />
            </Button>
          </HStack>
        </VStack>

        <VStack w={'full'}>
          <Heading textTransform={'uppercase'} textAlign={'center'}>
            GameZone
          </Heading>
          <Text> &#169; All rights received</Text>
        </VStack>

        <VStack w={'full'}>
          <Heading size={'md'} textTransform={'uppercase'}>
            Social Media
          </Heading>
          <HStack>
            <Button variant={'link'} size={5} colorScheme={'whatsapp'}>
              <a target={'black'} href="/">
                <AiFillInstagram />
              </a>
            </Button>
            <Button variant={'link'} size={5} colorScheme={'whatsapp'}>
              <a target={'black'} href="/">
                <AiFillGithub />
              </a>
            </Button>

            <Button variant={'link'} size={5} colorScheme={'whatsapp'}>
              <a target={'black'} href="/">
                <AiOutlineTwitter />
              </a>
            </Button>
          </HStack>
        </VStack>
      </Stack>
    </Box>
  );
};

export default Footer;
