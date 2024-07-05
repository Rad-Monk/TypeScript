type enum_body_form = "fat" | "skinny" | "muscular"
type enum_stamina = "low" | "medium" | "high"

class body extends human implements body_interface{
    _body_form: enum_body_form
    _stamina: enum_stamina

    constructor(gender: enum_gender, age: number, horny: enum_bool, virgin: enum_bool, gf: enum_bool, body_form: enum_body_form, stamina: enum_stamina){
        super(gender, age, horny, virgin, gf)
        this._body_form = body_form
        this._stamina = stamina
    }

    get body_form(): enum_body_form{
        return this._body_form
    }

    get stamina(): enum_stamina{
        return this._stamina
    }   

    set body_form(body_form: enum_body_form){
        this._body_form = body_form
    }

    set stamina(stamina: enum_stamina){
        this._stamina = stamina
    }

    good_in_bed(): string{
        if(this._stamina == "high" && this._body_form == "muscular"){
            return "Yes, he's very very good, he's a beast"
        }else if(this._stamina == "medium" && this._body_form == "muscular"){
            return "Yes, he's pretty good"
        }
        else{
            return "he's okay"
        }
    }

    is_athletic(): string{
        if(this._stamina == "high" ){
            return "Yes, he's very athletic"
        }else if(this._stamina == "medium"){
            return "he's average"
        }
        else{
            return "he's not athletic"
        }
    }
}