class Usuario{
    validate() {
        if (!this.nombre || this.nombre.trim() === '') {
            throw new Error('El nombre es requerido');
        }
        if (!this.usuario || this.usuario.trim() === '') {
            throw new Error('El usuario es requerido');
        }
        if (!this.password || this.password.trim() === '') {
            throw new Error('La contraseña es requerida');
        }
    }    
    constructor(data){
        //console.log(data);
        
        this.id=data.id;
        this.nombre=data.nombre;
        this.usuario=data.usuario;
        this.password=data.password;
        this.salt=data.salt;
        this.tipoUsuario=data.tipoUsuario;
    }
    set id(id){
        this._id=id;
    }
    set nombre(nombre){
        const nombreRegex=/^[A-ZÁÉÍÓÚÑ'][a-záéíóúñ']{1,}([ ][A-ZÁÉÍÓÚÑ'][a-záéíóúñ']{1,}){0,}$/;
        if (nombreRegex.test(nombre)){
            this._nombre=nombre;
        }
    }
    set usuario(usuario=""){
        if (usuario.length>0){
            this._usuario=usuario;
        }
    }
    set password(password){
        this._password=password;
    }
    set salt(salt){
        this.salt=salt;
    }
    set tipoUsuario(tipoUsuario){
        this.tipoUsuario=tipoUsuario;
    }

    get id(){
        return this._id;
    }
    get nombre(){
        return this._nombre;
    }
    get usuario(){
        return this._usuario;
    }
    get password(){
        return this._password;
    }
    get salt(){
        return this._salt;
    }
    get tipoUsuario(){
        return this._tipoUsuario;
    }
    
    get datos(){
        if(this.id!=undefined){
            return {
                id:this.id,
                nombre:this.nombre,
                usuario:this.usuario,
                password:this.password,
                salt:this.salt,
                tipoUsuario:this.tipoUsuario
            }
        }
        else{
            return {
                nombre:this.nombre,
                usuario:this.usuario,
                password:this.password,
                salt:this.salt,
                tipoUsuario:this.tipoUsuario
            }
        }
    }
}

module.exports=Usuario;

/*data={
    id:"fsfs",
    nombre:"Miguel Hidalgo",
    usuario:"hidalgo",
    password:"abc"
}

const usuario1=new Usuario(data);
try {
    usuario1.validate();
    console.log('Datos válidos!');
} catch (error) {
    console.error(`Error: ${error.message}`);
}
console.log(usuario1);*/
