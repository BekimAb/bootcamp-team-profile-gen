class emplyee{
    constructor(name,id,email){
        this.name=name,
        this.id=id,
        this.email=email
    }
    getName(){
        return this.name
    }
    getId(){
        return this.id
    }
    getEmail(){
        return this.email
    }
    getRole(){
        return "employee"
    }
}
class Engineer extends Emplyee {
    constructor(name,id,email,github){
        super(name,id,email)
        this.github=github
    }
    getGithub(){
        return this.github
    }
    getRole(){
        return 'Engineer'
    }
}
class Intern extends Emplyee{
    constructor(name,id,email,school){
        super(name,id,email)
        this.school=school
    }
    getSchool(){
        return this.school
    }
    getRole(){
        return 'Intern'
    }
}