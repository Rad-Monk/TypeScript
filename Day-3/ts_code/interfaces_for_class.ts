interface human_interface{
    gender: enum_gender
    age: number
    horny: enum_bool
    virgin: enum_bool
    gf: enum_bool
    happy(): string
    sex(gf_mood: "yes" | "no"): string
}

interface body_interface{
    body_form: enum_body_form
    stamina: enum_stamina
    good_in_bed(): string
    is_athletic(): string
}