export const environment={
  production:false,
  adminmail:"evadmin2023@gmail.com",
  adminpassword:"EVadmin@2023"
}

export const url={
  production:false,
  getVehicleDetails:"http://localhost:3000/vehicleBrands",
  customerDetails:"http://localhost:3000/Register",
  serviceData:"http://localhost:3000/Servicedata",
  exchangeOffers:"http://localhost:3000/exchangeoffers",
  oldvehilcle:"http://localhost:3000/oldvehicle",
  yearOfmanufacture:"http://localhost:3000/yearofmanufacture",
  kilometers:"http://localhost:3000/kilometerrange",
  offers:"http://localhost:3000/offers",
  states:"http://localhost:3000/states",
  serviceDone:"http://localhost:3000/servicedone"
}

export const nodemailer={
  production:false,
  mailURL:"http://localhost:4000/sendmail"
}

export const logger={
  production:false,
  loggerurl:"http://localhost:4000/api/logs"
}
