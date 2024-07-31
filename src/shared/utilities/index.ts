export const formatCurrency = (number: string | number) => {
    // Check if the number is greater than or equal to 1000
    if (Number(number) >= 1000) {
      // Format the number with commas
      return number.toLocaleString();
    }
    // If the number is less than 1000, keep the formatting unchanged
    return number.toString();
  };
  


export const objectToQueryString = (obj: any): string => {
  const queryString = Object.keys(obj)
    .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(obj[key])}`)
    .join('&');
  return `?${queryString}`;
}



export const serviceProviders = [
  { name: "mtn", prefixes: ["0803", "0806", "0703", "0706", "0813", "0816", "0810", "0814", "0903", "0906"] },
  { name: "glo", prefixes: ["0805", "0807", "0705", "0815", "0811", "0905","0915"] },
  { name: "airtel", prefixes: ["0802", "0808", "0708", "0812", "0701", "0902", "0907", "0901"] },
  { name: "9mobile", prefixes: ["0809", "0817", "0818", "0909"] }
];


export const detectServiceProvider = (phoneNumber:string) => {
  for (let provider of serviceProviders) {
      for (let prefix of provider.prefixes) {
          if (phoneNumber.startsWith(prefix)) {
              return provider.name;
          }
      }
  }
  return "Unknown Provider";
};
