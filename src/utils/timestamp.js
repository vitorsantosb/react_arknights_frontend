function FormatDateWithLocale(date, locale) {
  const options = {
    weekday: 'long',
    day: 'numeric',
    month: 'long'
  };
  
  const formattedDate = new Date(date).toLocaleDateString(locale, options);
  
  if (locale === 'pt-BR') {
    const [weekday, day, month] = formattedDate.match(/(\D+), (\d+) de (\D+)/).slice(1, 4);
    return `${weekday}, Dia ${day} de ${month}`;
  } else if (locale === 'en-US') {
    const [weekday, month, day] = formattedDate.match(/(\D+), (\D+) (\d+)/).slice(1, 4);
    return `${weekday}, ${month} ${day}`;
  } else {
    return formattedDate; // Retorna a string no formato padrão da localidade se não for pt-BR ou en-US
  }
}

function FormatDateForChat(date, locale = 'pt-BR') {
  const currentDate = new Date();
  const givenDate = new Date(date);
  
  const isToday = currentDate.toDateString() === givenDate.toDateString();
  const isYesterday = new Date(currentDate.setDate(currentDate.getDate() - 1)).toDateString() === givenDate.toDateString();
  
  const timeOptions = { hour: '2-digit', minute: '2-digit' };
  const timeString = givenDate.toLocaleTimeString(locale, timeOptions);
  
  if (isToday) {
    return `Hoje, ${timeString}`;
  } else if (isYesterday) {
    return `Ontem, ${timeString}`;
  } else {
    const dateOptions = {
      day: 'numeric',
      month: 'short'
    };
    const dateString = givenDate.toLocaleDateString(locale, dateOptions).replace('.', ''); // Remove pontos em pt-BR
    return `${dateString}, ${timeString}`;
  }
}




export {
  FormatDateWithLocale,
  FormatDateForChat
}