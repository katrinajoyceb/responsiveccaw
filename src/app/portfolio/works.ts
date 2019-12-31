export class Works{
    id: number;
    title: string; 
    about: string;
    problem: string;
    solution: string;
}

export const WORKS: Works[]= [
    {
        id: 1,
        title: 'Not For Sale, But...', 
        about: "Not For Sale... But is a project that the owners of Caprock Custom Applications created. With their passion for classic vehicles they sought out to create an application that would help other car enthusiasts with their hobby. The idea is that the owner of the vehicle would place a QR Code sticker on their vehicle for others to scan. The owner wouldn't have intentions to sell the vehicle unless the person who scanned the QR Code gave an above the market offer.",
        problem: "Interested buyers would offer low ball prices for classic vehicles. Owners of the vehicle were wasting their time talking to people who wanted to give them a very low price for the classic car.",
        solution: "Interested buyers would have to scan the vehicles QR code that's located on the vehicle somewhere. The idea is that there would be in person contact so that people on the internet couldn't spam vehicle owners with ridiculously low prices."
    },
    {
        id: 2,
        title: 'Llano Waste', 
        about: "We were approached by a local client, Llano Waste, to see how we could come in and help them create a web application to help the Admin staff with tedious paper and pen processes. Llano Waste is a business that sends out containers to business/private parties for waste management. Llano Waste's drivers drive these containers out to locations so designing an iOS app to track these containers was imperative for success.",
        problem: "Designing a system to track these containers was tricky. The client didn't want to have a device on every container (This would be extremely costly). How were we going to track the containers if we didn't have a device to tell us where they were at any given point in time?",
        solution: "The solution was to utilize Google Maps and the Drivers that would drop off these containers. We designed a button on the driver's iOS app for them to 'drop a pin'. The driver would click this button and it would drop a pin on the exact latitude and longitude of the iOS device. Training the drivers to click this button after a drop off was very important in order to reflect the true location of the container."
    },
    {
        id: 3,
        title: 'Farming App', 
        about: "We were approached by a local Lubbock farmer to meet about his idea to create a mobile app communication tool for farmers. Farmers spray their fields with Pesticides, Insecticides and Herbicides to help protect their crops. Gabe indicated to us that communicating to the other local farmers in the area was crucial to avoid crop failure.",
        problem: "The problem with spraying these chemicals is that they could potentially be very harmful to other crops for farmers in the surrounding area. In rare occurrences the chemicals would ruin another crop which would lead to frustration and lawsuits resulting in the 100s of thousands.",
        solution: "The solution was creating a mobile application that farmers could use to communicate to each other which chemicals they are using on their crops. The different colors on the map interface would show farmers if their chemicals were potentially harmful for particular crops. Using this tool allowed for clear and concise communication for farmers instead of crop failure."
    }
];