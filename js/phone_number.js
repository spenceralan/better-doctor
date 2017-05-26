class PhoneNumber {
  constructor(number) {
    this.phone_number = number;
  }

  area_code() {
    return this.phone_number.slice(0,3);
  }

  first_three() {
    return this.phone_number.slice(3,6);
  }

  last_four() {
    return this.phone_number.slice(6);
  }

  standard() {
    return `(${this.area_code()}) ${this.first_three()}-${this.last_four()}`;
  }

  dotted() {
    return `${this.area_code()}.${this.first_three()}.${this.last_four()}`;
  }
}

exports.phoneNumberModule = PhoneNumber;