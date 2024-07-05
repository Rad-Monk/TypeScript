

type enum_gender = "male" | "female"
type enum_bool = "yes" | "no"

class human implements human_interface{

  //properties
  private static _population: number = 0
  private _gender
  private _age
  private _horny
  private _virgin
  private _gf

  //constructor
  constructor(gender: enum_gender, age: number, horny: enum_bool, virgin: enum_bool, gf: enum_bool ){
    this._gender = gender
    this._age = age
    this._horny = horny
    this._virgin = virgin
    this._gf = gf
    human._population++
  }

  //getters and setters
  get horny(){
    return this._horny
  }

  get virgin(){
    return this._virgin
  }

  get gf(){
    return this._gf
  }

  get gender(){
    return this._gender
  }

  get age(){
    return this._age
  }

  set horny(horny){
    this._horny = horny
  }

  set virgin(virgin){
    this._virgin = virgin
  }

  set gf(gf){
    this._gf = gf
  }

  set age(age){
    this._age = age
  }

  //methods

  public static get_population(){
    return human._population
  } 

  happy(){
    if(this._gf == "yes"){
      return "Happy"
    }else{
      return "Not Happy"
    }
  }

  sex(gf_mood: enum_bool){
    if(this._horny == "yes" && this._gf == "yes" && gf_mood == "yes"){
      return "make her happy and buy her good food"
    }
    else{
      return "CONTROLLLLLLLLLLLL"
    }
  }

}