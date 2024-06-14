const prompt = require("prompt-sync")();
const { generatePositiveVector } = require("./utils/generatePositiveVector.js");

function promptForValidString(promptQuestion) {
  console.log(promptQuestion);
  let value = prompt('> ');

  while(typeof value !== 'string') {
    console.log('Valor inválido!');
    value = prompt('Tente novamente: ');
  }

  return value;
}

function promptForValidNumber(promptQuestion) {
  console.log(promptQuestion);
  let value = prompt('> ');

  while(isNaN(value) || value < 0) {
    console.log('Valor inválido!');
    value = prompt('Tente novamente: ');
  }

  return parseInt(value);
}

function getHotelRegistry() {
  let hotels = [
    { id: parseInt(generatePositiveVector(2).join('')), name: 'BA RA Hotel', city: 'João Pessoa', state: 'Paraiba', rooms:100, availableRooms: 35 },
    { id: parseInt(generatePositiveVector(2).join('')), name: 'Vogal Luxury Hotel', city: 'Natal', state: 'Rio Grande do Norte', rooms:100, availableRooms: 38 },
    { id: parseInt(generatePositiveVector(2).join('')), name: 'Hotel Laghetto', city: 'Gramado', state: 'Rio Grande do Sul', rooms:100, availableRooms: 34 }
  ];
  return hotels;
}

function addHotelRegistry(hotels) {
  const hotel = {
    id: parseInt(generatePositiveVector(2).join('')),
    name: promptForValidString('Insira o nome do hotel: '),
    city: promptForValidString('Insira a cidade: '),
    state: promptForValidString('Insira o estado: '),
    rooms: promptForValidNumber('Insira o número total de quartos disponibilizados no hotel: '),
    availableRooms: promptForValidNumber('Insira o número total de quartos disponíveis no hotel: '),
  };
  hotels.push(hotel);
  console.log('Hotel adicionado com sucesso!');
  return hotels;
}

function setReservations(hotels) {
  console.log(hotels);
  let reservations = [
    {idBooking: parseInt(generatePositiveVector(2).join('')), idHotel: hotels[0].id, client: 'Fulana'},
    {idBooking: parseInt(generatePositiveVector(2).join('')), idHotel: hotels[0].id, client: 'Ciclana'}
  ];
  return reservations;
}

function getReservations(reservations) {
  console.log('Lista de reservas: ');
  console.log(reservations);
}

function searchHotelsInCity(hotels) {
  const city = promptForValidString('Insira a cidade onde deseja buscar hotéis: ');
  const locatedHotels = hotels.filter(hotel => hotel.city.toLowerCase() === city.toLowerCase());

  if (locatedHotels.length > 0) {
    console.log("Resultado da busca na cidade ", city, ":", locatedHotels);
    return;
  } else {
    console.log("Nenhum hotel encontrado na cidade: ", city);
    return;
  }
}

function bookReservation(hotels, reservations) {
  console.log('Lista de IDs e respectivos hotéis: ');
  console.log(hotels.map(hotel => `${hotel.id} : ${hotel.name} em ${hotel.city}`));
  const selectedHotel = promptForValidNumber('Insira o ID do hotel que deseja efetuar a reserva: ');
  const hotel = hotels.find(hotels => hotels.id === selectedHotel);

  if(!hotel) {
    console.log('Código de ID inválido.');
    return;
  }

  if(hotels.availableRooms <= 0) {
    console.log('Hotel informado não tem quartos disponíveis.');
    return;
  }

  const booking = {
    idBooking: parseInt(generatePositiveVector(2).join('')),
    idHotel: hotel.id,
    client: promptForValidString('Insira o nome do cliente: '),
  };

  reservations.push(booking);

  hotel.availableRooms -= 1;
  console.log('Reserva feita com sucesso');
  return reservations;
}

function cancelReservation(hotels, reservations) {
  console.log('Lista de IDs e respectivos hotéis: ');
  console.log(hotels.map(hotel => `${hotel.id} : ${hotel.name} em ${hotel.city}`));
  const selectedHotel = promptForValidNumber('\nInsira o ID do hotel onde deseja cancelar sua reserva: ');
  const hotel = hotels.find(hotels => hotels.id === selectedHotel);

  console.log(reservations.map(booking => `${booking.idBooking} do cliente ${booking.client} `))
  const selectedReservation = promptForValidNumber('\nInsira o ID da reserva que deseja cancelar: ');
  const canceledBooking = reservations.indexOf(reservations.find(booking => booking.idBooking === selectedReservation));
  reservations[canceledBooking] = reservations[reservations.length - 1];
  reservations.pop();
  
  hotel.availableRooms += 1;
  console.log('Reserva cancelada com sucesso');
}


function menu() {
  const hotels = getHotelRegistry();
  const reservations = setReservations(hotels);
  let stop = false;
  
  while (stop === false) {
    const option = promptForValidNumber('Informe quais das opções deseja efetuar: \n1 - Adicionar hotéis \n2 - Buscar hotéis por cidade \n3 - Fazer reserva \n4 - Cancelar reserva \n5 - Listar reservas \n6 - Listar hotéis já cadastrados \n7 - Sair');
    switch (option) {
      case 1:
        addHotelRegistry(hotels);
        break;
      case 2:
        searchHotelsInCity(hotels);
        break;
      case 3:
        bookReservation(hotels,reservations);
        break;
      case 4:
        cancelReservation(hotels,reservations);
        break;
      case 5:
        getReservations(reservations);
        break;
      case 6:
        getHotelRegistry();
        console.log('Hoteis já cadastrados:');
        hotels.forEach(hotel => console.log(hotel));
        break;
      case 7:
        stop = true;
        break;
      default:
        break;
    }
    console.log('Deseja continuar? \ns - sim \nn - não');
    const shouldContinue = prompt('> ');
    if (shouldContinue.toLowerCase() !== "s") {
      stop = true;
    }
  }
}

menu();