//DROPDOWN MENU
$( document ).ready(function() {
    $(".dropdown-trigger").dropdown();
});


/*SE OBTUVIERON LAS ESTUDIANTES*/

//var obtenerEstudiantes = function(e){
 //var estudiantes = e.target;
   //console.log(estudiantes);
    
    var students = (data["students"]);
    console.log(students);
    for (var i = 0; i<students.length; i++){ 
        var name = students[i]["name"];
        console.log(name);
        var foto = students[i]["photo"];
        console.log(foto);
        var skills = students[i]["skills"];
        console.log(skills);

        //***creacion de elementos en el DOM para imprimir a las de estudiantes por nombre, foto y skills***
    var totalEstudiantes = document.getElementById("estudiantes");
    //totalEstudiantes.innerHTML= "";
    
    var option = document.createElement("p");
    var divText= document.createTextNode(name);
    option.appendChild(divText);
    totalEstudiantes.appendChild(option);
    console.log(totalEstudiantes);  
    
    var imagen = document.createElement("img");
    //imagen =  "<img src='poster'>";   
    imagen.setAttribute("src", foto);   
    totalEstudiantes.appendChild(imagen); 
    console.log(totalEstudiantes);  

    var skill = document.createElement("p");
    var text = document.createTextNode(skills);
    skill.appendChild(text);
    totalEstudiantes.appendChild(skill);
    console.log(totalEstudiantes);

    //CREAR TEMPLATE
var template = `

    <div class="col s12 m8 offset-m2 l6 offset-l3">
            <div class="card-panel grey lighten-5 z-depth-1">
                <div class="row valign-wrapper">
                    <div class="col s2">
                        <img src="${foto}" alt="" class="circle responsive-img"> <!-- notice the "circle" class -->
                    </div>
                    <div class="col s10">
                        <span class="black-text"> ${name}</span>
                    </div>
                    <div class="col s10">
                        <span class="black-text">
                         SKILLS
                        </span>
                    </div>    
                </div>
                <div class="row">
                    <div class="col s6 right">
                        <div class="chip">
                        ${skills}<i class="close material-icons">close</i>
                        </div>
                        <!-- Customizable input  -->
                        <div class="chips">
                            <input class="custom-class">
                        </div>
                    </div>
                </div>  
            </div>  
        </div>    
        `;
        
        //agregar skills
        $('.chips').chips();

        $('#students').append(template);

    }

    