import * as Clipboard from 'expo-clipboard';

async function CopyPassword(string: string) {
    await Clipboard.setStringAsync(string);
    console.log(`Password copied to clipboard: ${string}`);
}

export default CopyPassword;