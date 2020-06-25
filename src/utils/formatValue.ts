const formatValue = (value: string): string => {
  const cleanValue = value
    .trim()
    .replace('.', '')
    .replace(',', '')
    .replace(/(\d{2})$/, '.$1');

  return Intl.NumberFormat('pt-BR', {
    minimumIntegerDigits: 1,
    minimumFractionDigits: 2,
  }).format(Number(cleanValue));
};

export default formatValue;
