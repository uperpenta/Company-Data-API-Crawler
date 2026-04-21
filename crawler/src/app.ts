import * as cheerio from "cheerio";

const url: string = "https://dreamservicesoftware.com/";

async function getPhoneNumbers(url: string) {
  try {
    const response = await fetch(url);
    const data = await response.text(); 

    const $ = cheerio.load(data);

    const text = $("body").text();
    const phoneNumbers = text.match(
      /(\+?\d{1,3}[-.\s]?)?\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{4}/g,
    );

    return phoneNumbers || [];
  } catch (error) {
    console.log(error);
    return [];
  }
}

const phoneNumbers = await getPhoneNumbers(url);
console.log(phoneNumbers);