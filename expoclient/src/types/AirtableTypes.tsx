/** 
 * Default this to just a string type because we'll dynamically retrieve viable
 * types from Airtable using a GET request. That way we don't have to maintain two 
 * sources of truths wrt to what a valid CategoryTag is + it allows for customization
 * between different money bases.
 */
export type CategoryTag = string;