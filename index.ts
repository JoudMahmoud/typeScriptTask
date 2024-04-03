let nums: number[] = [3, 2, 4, 5];
//----------------------------------------------------------------
let arr2: (string | number)[] = ["s", 4, 3];
console.log(arr2);
//----------------------------------------------------------------
let var1: number | boolean;
var1 = 3;
var1 = true;
//----------------------------------------------------------------
function fun1(par1?: number, par2?: number): number | "empty" {
  if (par1 !== undefined && par2 !== undefined) {
    return par1 + par2;
  } else if (par1 !== undefined) {
    return par1;
  } else {
    return "empty";
  }
}
let var2 = fun1(3, 5);
let var3 = fun1(5);
let var4 = fun1();
console.log(var2);
console.log(var3);
console.log(var4);
//----------------------------------------------------------------

interface IEmployee {
  id: number;
  name: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zepcode: number;
    geo: {
      lat: number;
      lng: number;
    };
  };
}
class Employee implements IEmployee {
  id: number;
  name: string;
  protected userName: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zepcode: number;
    geo: {
      lat: number;
      lng: number;
    };
  };
}

class Manager extends Employee {
  constructor(
    id: number,
    name: string,
    userName: string,
    email: string,
    address: {
      street: string;
      suite: string;
      city: string;
      zepcode: number;
      geo: {
        lat: number;
        lng: number;
      };
    }
  ) {
    super();
    this.id = id;
    this.name = name;
    this.userName = userName;
    this.email = email;
    this.address = address;
  }
  viewAddress(): void {
    console.log(this.address);
  }
}

let Manager1 = new Manager(1, "Joud", "Adjo", "Joud@gmail.com", {
  street: "mohamed Nagib st.",
  suite: "block1",
  city: "Alex",
  zepcode: 22,
  geo: {
    lat: 12,
    lng: 334,
  },
});
Manager1.viewAddress();
