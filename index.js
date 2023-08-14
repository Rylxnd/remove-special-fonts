import CharacterMap from "./map.js";

const regex = new RegExp(Object.keys(CharacterMap).join('|'), 'g');

/**
 * Checks if the provided string has special font characters.
 * @param {string} string the string to check
 * @returns {boolean} a boolean representing if the string contains special font characters
 */
export function HasSpecialFontCharacters(string)
{
    return string.match(regex) != null;
}

/**
 * Replaces special font characters in a string.
 * @param {string} string The string to parse
 * @param {string | null} replace What to replace the specaial fonts with. If left null or ignored it will replace with latin charcters.
 * @returns {string} The original string where special font characters are replaced.
 */
export function ReplaceSpecialFontCharacters(string, replace = null)
{
    return string.replace(regex, function(match) {
        return replace == null ? CharacterMap[match] : replace;
    });
}