const controller = {};
const NU ="";
controller.list = (req , res) =>{
  
  req.getConnection((err,conn)=>{
     conn.query('SELECT * FROM usuarios1',(err,usuarios)=>{
         if (err){
             res.json(err);
         }
         var us =""
         for(var i = 0 ; i < usuarios.length;i++){
          if (usuarios[i].NoUsuario == this.NU){
            us = usuarios[i]
          }
         }
         res.json(us)
     });

  });

};

controller.guardar = (req, res) => {
  const data = req.body;
  this.NU = data.NoUsuario;

  req.getConnection((err, conn) => {
    conn.query('INSERT INTO usuarios1 set ?', [data], (err, customer) => {
      res.redirect('http://localhost:4200/perfil');
    })
  })
};

controller.entrar = (req , res) =>{
  const data = req.body;

  req.getConnection((err,conn)=>{
     conn.query('SELECT * FROM usuarios1',(err,usuarios)=>{
         if (err){
             res.json(err);
         }
         var us =""
         for(var i = 0 ; i < usuarios.length;i++){
          
        
          if (usuarios[i].NoUsuario == data.NoUsuario){
            
            
            if(usuarios[i].Contra == data.Contra){
              
              res.redirect('http://localhost:4200/perfil');
            }else{
              
              res.redirect('http://localhost:4200/login');
            }
           
          }else{
            res.redirect('http://localhost:4200/login');
          }

         }
         res.redirect('http://localhost:4200/login');
     });

  });

};

module.exports = controller