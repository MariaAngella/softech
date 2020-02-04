class Laptop {
  constructor(
    hddSize,
    ramSize,
    cpuSpeed,
    batteryLife,
    screenSize,
    model,
    manufacturer,
    price,
    os,
    serialNo
  ) {
    this.hddSize = hddSize;
    this.ramSize = ramSize;
    this.cpuSpeed = cpuSpeed;
    this.batteryLife = batteryLife;
    this.screenSize = screenSize;
    this.model = model;
    this.manufacturer = manufacturer;
    this.price = price;
    this.os = os;
    this.serialNo = serialNo;
  }
  toString(){
      return `Laptop Properties :`
  }
}