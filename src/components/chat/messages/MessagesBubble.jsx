import PropTypes from 'prop-types';
import { Box, Flex, Group, Text, Stack, Avatar } from '@mantine/core';

import config from '@/config/projectConfig.json';
import { FormatDateForChat } from '@/utils/timestamp.js';
import { FormatMessageWithLineBreaks } from '@/utils/chat.utils.js';


function MessagesBubble({ target = 'listener',username, message, timestamp, locale, userImage = null}) {
  return (
    <Group align="start" noWrap spacing="sm" style={{ marginBottom: '1rem' }}>
      {userImage && (
        <Avatar
          src={userImage}
          width={50}
          height={50}
          radius="xl"
          alt="Foto do usuário"
        />
      )}
      <Stack spacing={20}>
        <Flex align="center">
          <Text size="1.2rem" c="white">
            {username}
          </Text>
        </Flex>
        <Box
          bg={config.colors.chat.bubble.backgroundColor}
          p="sm"
          style={{
            color: 'white',
            maxWidth: '100%',
            display: 'inline-block',
            borderRadius: '15px 15px 0 15px',
            overflowWrap: 'break-word', // Para quebrar palavras longas
            wordWrap: 'break-word', // Compatibilidade com navegadores mais antigos
          }}
        >
          <Stack>
            <Text style={{ whiteSpace: 'pre-line' }} mw={'60%'} c={config.colors.chat.bubble.text_color} fz={'0.9rem'} lh={'0.9rem'}>
              {FormatMessageWithLineBreaks(message)}
            </Text>
            <Text size="xs" c={config.colors.chat.bubble.text_color} align="right">
              {FormatDateForChat(timestamp)}
            </Text>
          </Stack>
        </Box>
      </Stack>
    </Group>
  );
}

MessagesBubble.propTypes = {
  username: PropTypes.object,
  message: PropTypes.string.isRequired,
  timestamp: PropTypes.number.isRequired,
  locale: PropTypes.string,
};

export default MessagesBubble;