export const convertHexToRGBA = (hex: any, opacity: number): string => {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return `rgba(${r}, ${g}, ${b}, ${opacity})`;
};


export const downloadFile = (filePath:string): void => {
  const fileName = filePath.split('/').pop();
  const link = document.createElement('a');
  link.href = filePath;
  link.download = fileName || '';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

export const circularSafeStringify = (obj: any) => {
  const cache = new Set();
  return JSON.stringify(obj, (key, value) => {
    if (typeof value === "object" && value !== null) {
      if (cache.has(value)) {
        // Circular reference found, discard key
        return;
      }
      // Add value to set
      cache.add(value);
    }
    return value;
  });
};

export const truncateText = (text: string, maxLength: number): string => {
  if (text?.length > maxLength) {
    return text?.substring(0, maxLength - 3) + "...";
  }
  return text;
}
