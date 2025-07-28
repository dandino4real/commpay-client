/**
 *
 * @param input e.g CONVERT_FORMAT
 * @param separator e.g "-"
 * @returns string e.g Convert Format
 */

export const convertToSentenceCase = (input: string, separator?: string): string => {
    return input
        .toLowerCase() // Convert the entire string to lowercase
        .split(separator ?? '_') // Split by underscores
        .map(word => word.charAt(0).toUpperCase() + word.slice(1)) // Capitalize the first letter of each word
        .join(' '); // Join the words with a space
};
