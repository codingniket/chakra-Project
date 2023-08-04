import React from 'react';
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  useDisclosure,
  VStack,
  HStack,
} from '@chakra-ui/react';

import { Link } from 'react-router-dom';
import { BiMenu } from 'react-icons/bi';

const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [placement, setPlacement] = React.useState('left');

  return (
    <>
      <Button
        pos={'fixed'}
        colorScheme="whatsapp"
        top={'4'}
        left={'4'}
        zIndex={'overlay'}
        onClick={onOpen}
      >
        <BiMenu size={'20'} />
      </Button>

      <Drawer placement={placement} onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader borderBottomWidth="3px" colorScheme="purple">
            GAME ZONE
          </DrawerHeader>
          <DrawerBody>
            <VStack alignItems={'flex-start'}>
              <Button onClick={onClose} variant={'ghost'} colorScheme="twitter">
                <Link to={'/'}>Home</Link>
              </Button>

              <Button
                onClick={onClose}
                variant={'ghost'}
                colorScheme="facebook"
              >
                <Link to={'/videos'}>Videos</Link>
              </Button>

              <Button onClick={onClose} variant={'ghost'} colorScheme="yellow">
                <Link to={'/videos?category=free'}>Free Videos</Link>
              </Button>

              <Button onClick={onClose} variant={'ghost'} colorScheme="purple">
                <Link to={'/upload'}>Upload Videos</Link>
              </Button>

              <Button onClick={onClose} variant={'ghost'} colorScheme="red">
                <Link to={'/contact'}>Contact</Link>
              </Button>
            </VStack>

            <HStack
              pos={'absolute'}
              bottom={'10'}
              justifyContent={'normal'}
              w={'full'}
            >
              <Button onClick={onClose} colorScheme="messenger">
                <Link to={'/login'}>Log IN</Link>
              </Button>
              <Button onClick={onClose} colorScheme="whatsapp">
                <Link to={'/signup'}>Sign-UP</Link>
              </Button>
            </HStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default Header;
