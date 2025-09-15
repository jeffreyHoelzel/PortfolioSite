export const copyToClipboard = async (text: string): Promise<boolean> => {
  try {
      await navigator.clipboard.writeText(text);
      return true;
  } catch (error) {
    console.log(`Error: ${error}`);
    return false;
  }
}
