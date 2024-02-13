$(document).ready(function () {
    const destinations = [
        {
            name: 'Paris, France',
            image: 'paris.jpg',
            description: 'The City of Love, known for its art, fashion, and culture.'
        },
        {
            name: 'Tokyo, Japan',
            image: 'tokyo.jpg',
            description: 'Experience the blend of modern and traditional in this vibrant metropolis.'
        },
        {
            name: 'Rio de Janeiro, Brazil',
            image: 'rio.jpg',
            description: 'Enjoy the beaches, music, and carnival atmosphere in this lively city.'
        }
    ];

    const destinationList = $('#destinationList');

    destinations.forEach(destination => {
        const destinationElement = $('<div class="destination"></div>');
        destinationElement.append(`<img src="${destination.image}" alt="${destination.name}">`);
        destinationElement.append(`<h2>${destination.name}</h2>`);
        destinationElement.append(`<p>${destination.description}</p>`);

        destinationElement.click(function () {
            alert(`You selected ${destination.name}`);
        });

        destinationList.append(destinationElement);
    });
});
