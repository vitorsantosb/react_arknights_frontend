import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { Avatar, Box, Button, Collapse, Divider, Flex, Group, Stack, Text, Tooltip } from '@mantine/core';
import {
  IconChevronLeft,
  IconChevronRight,
  IconChevronUp,
  IconChevronDown,
  IconDoorEnter,
  IconMessage,
} from '@tabler/icons-react';
import { getMenuTree } from '@/models/models';
import { userRoutes } from '@/models/models';
import IconCustomHome from '@/assets/menu/IconCustomHome';
import IconCustomHelp from '@/assets/menu/IconCustomHelp';
import IconCustomSchedule from '@/assets/menu/IconCustomSchedule';
import IconCustomLogout from '@/assets/menu/IconCoustomLogout';
import IconRPGSpace from '@/assets/menu/IconRPGSpace';
import IconCustomPlans from '@/assets/menu/IconCustomPlans';
import IconCustomUpdates from '@/assets/menu/IconCustomUpdates';
import IconCustomSettings from '@/assets/menu/IconCustomSettings';
import { useLayoutContext } from '@/components/Layouts/LayoutProvider';
import IconCustomDoorEnter from '@/assets/menu/IconCustomDoorEnter.jsx';
import { useDisclosure } from '@mantine/hooks';
import Login from '@/components/Login/Login.jsx';
import { closeModal } from '@mantine/modals';

const getMantineIcons = (icon) => {
  switch (icon) {
    case 'IconCustomHome':
      return <IconCustomHome size={{ width: 24, height: 24 }}
                             style={{ strokeWidth: 2.5, fill: '#FFFFFF', cursor: 'pointer' }} />;
    case 'IconCustomHelp':
      return <IconCustomHelp size={{ width: 24, height: 24 }}
                             style={{ strokeWidth: 2.5, fill: '#FFFFFF', cursor: 'pointer' }} />;
    case 'IconCustomSchedule':
      return <IconCustomSchedule size={{ width: 24, height: 24 }}
                                 style={{ strokeWidth: 2.5, fill: '#FFFFFF', cursor: 'pointer' }} />;
    case 'IconCustomLogout':
      return <IconCustomLogout size={{ width: 24, height: 24 }}
                               style={{ strokeWidth: 2.5, fill: '#FFFFFF', cursor: 'pointer' }} />;
    case 'IconRPGSpace':
      return <IconRPGSpace size={{ width: 24, height: 24 }}
                           style={{ strokeWidth: 2.5, fill: '#FFFFFF', cursor: 'pointer' }} />;
    case 'IconCustomPlans':
      return <IconCustomPlans size={{ width: 24, height: 24 }}
                              style={{ strokeWidth: 2.5, fill: '#FFFFFF', cursor: 'pointer' }} />;
    case 'IconCustomUpdates':
      return <IconCustomUpdates size={{ width: 24, height: 24 }}
                                style={{ strokeWidth: 2.5, fill: '#FFFFFF', cursor: 'pointer' }} />;
    case 'IconCustomSettings':
      return <IconCustomSettings size={{ width: 24, height: 24 }}
                                 style={{ strokeWidth: 2.5, fill: '#FFFFFF', cursor: 'pointer' }} />;
    case 'IconCustomDoorEnter':
      return <IconCustomDoorEnter size={{ width: 24, height: 24 }}
                                  style={{ strokeWidth: 2.5, fill: '#FFFFFF', cursor: 'pointer' }} />;
    case 'IconMessages':
      return <IconMessage size={24} style={{strokeWidth: 2.5, cursor: 'pointer', opacity: 0.5}} />;
    default:
      return '';
  }
};

const renderNavLink = (menuItem, index, navigate) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const {
    currentUser,
    toggleMobile,
    mobileOpened,
    desktopOpened,
    active,
    setActive,
    activeChild,
    setActiveChild,
    open,
  } = useLayoutContext();
  const { label, children, leftSection, ...rest } = menuItem;
  const [toggleChildren, setToggleChildren] = useState(false);
  
  function redirectToUserRoute(userRoute) {
    navigate(userRoute.link);
  }
  
  function redirectionToInitialPage() {
    navigate(userRoutes.HOMEPAGE);
  }
  
  function handleClickMenuItem(userRoute) {
    if (rest.childrenOffset && !mobileOpened && !desktopOpened) {
      toggleMobile(true);
    }
    if (userRoute.openModal) {
      open();
    }
    if (userRoute.link) {
      currentUser ? (currentUser?.role?.slug ? redirectToUserRoute(userRoute) : redirectionToInitialPage()) : navigate(userRoutes.HOMEPAGE);
    }
  }
  
  return (
    <Tooltip key={index} label={label} position="right" withArrow disabled={mobileOpened || desktopOpened}>
      <Box
        key={index}
        onClick={() => {
          rest.active &&
          setActive((prev) => {
            return rest.active;
          });
          rest.activeChild && setActiveChild(rest.activeChild);
          toggleChildren === false && setToggleChildren(!toggleChildren);
          handleClickMenuItem(rest);
        }}
        c={'var(--mantine-color-white)'}
      >
        {mobileOpened || desktopOpened ? (
          <Group w={'100%'} style={{
            position: 'relative',
            color: 'var(--mantine-color-white)',
            display: 'flex',
            gap: '0.5rem',
            borderRadius: '0.5rem',
            padding: '0.2rem  0.5rem',
            cursor: 'pointer',
          }} bg={active === rest.active || activeChild === rest.activeChild ? '#2D2F39' : 'transparent'}>
            {leftSection && getMantineIcons(leftSection)}
            {label}
            {children && (toggleChildren ?
              <IconChevronUp size={14} baselineShift={2} style={{ position: 'absolute', left: '100%' }}
                             onClick={() => setToggleChildren(false)} /> :
              <IconChevronDown size={14} style={{ position: 'absolute', left: '100%' }}
                               onClick={() => setToggleChildren(true)} />)}
          </Group>
        ) : (
          getMantineIcons(leftSection)
        )}
        {children && (
          <Collapse in={toggleChildren} active={index === active ? index : null} style={{
            paddingLeft: mobileOpened || desktopOpened ? rest.childrenOffset || 0 : 0,
            fillOpacity: 0.75,
            fontSize: '1rem',
          }}>
            {children.map((child, childIndex) => renderNavLink(child, childIndex, navigate))}
          </Collapse>
        )}
      </Box>
    </Tooltip>
  );
};

const renderMenu = (menuObject, navigate) => {
  return Object.keys(menuObject).map((key, index) => {
    const menuItem = menuObject[key];
    return renderNavLink({ label: key, ...menuItem }, index, navigate);
  });
};

function MenuLayout() {
  const { currentUser, mobileOpened, desktopOpened, toggleMobile, openedModal, close } = useLayoutContext();
  console.log('openedModal: ', openedModal);
  console.log('closeModal: ', closeModal);
  const modifiedMenuTree = getMenuTree(currentUser?.role?.permissions);
  const navigate = useNavigate();
  
  return (
    <Flex style={{ position: 'relative' }} w={'100%'} h={'100svh'} pt={'1rem'} pb={'1rem'} pl={'1rem'} pr={'1.1rem'}
          justify={'space-between'} direction={'column'} bg={'#161A23'}>
      <Stack h={'100%'}>
        <Flex
          style={{
            position: 'sticky',
            bottom: 0,
            left: 0,
            background: '#161A23',
            border: 'none',
            width: '100%',
          }}
        >
          <Group w={'auto'} justify={'space-between'}>
            <Group align={'center'} position={'relative'}>
              <Avatar
                src={currentUser.avatarURL ? currentUser.avatarURL : 'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-8.png'}
                radius="xl" />
              
              {(
                <div style={{ flex: 1 }}>
                  <Text c="dimmed" size="sm" fw={500}>
                    {currentUser.username}
                  </Text>
                  
                  <Text c="dimmed" size="xs">
                    {currentUser.role.name}
                  </Text>
                </div>
              )}
            </Group>
          </Group>
        </Flex>
        <Divider
          styles={{
            root: {
              background: '#2D2F39',
              opacity: 0.5,
            },
          }}
        />
        <Stack align={mobileOpened || desktopOpened ? 'left' : 'center'} justify={'space-between'} h={'100%'}
               pos={'relative'}>
          <Flex direction={'column'} h={'100%'} gap={'1rem'}>
            {/* Menu sessão inicial Dashboard e afins */}
            {renderMenu(modifiedMenuTree.main, navigate)}
          </Flex>
          <Divider
            styles={{
              root: {
                background: '#2D2F39',
                opacity: 0.5,
              },
            }}
            my={10}
          />
          <Flex direction={'column'} h={'100%'} gap={'1rem'}>
            {/* Menu de configurações */}
            {renderMenu(modifiedMenuTree.options, navigate)}
          </Flex>
          <Flex direction={'column'} style={{ position: 'absolute', top: '90%' }} gap={'1rem'}>
            {/*Footer data - logout and help*/}
            {
              renderMenu(modifiedMenuTree.footer, navigate)
            }
          </Flex>
        </Stack>
      </Stack>
      <Login opened={openedModal} closed={close} />
    </Flex>
  );
}

export default MenuLayout;
