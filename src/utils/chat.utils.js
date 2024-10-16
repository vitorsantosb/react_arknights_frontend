function FormatMessageWithLineBreaks(message) {
  const lines = [];
  const maxLength = 40
  for (let i = 0; i < message.length; i += maxLength) {
    lines.push(message.slice(i, i + maxLength));
  }
  return lines.join('\n');
}

export{
  FormatMessageWithLineBreaks
}
