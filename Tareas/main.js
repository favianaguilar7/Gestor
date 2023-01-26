
    const input = document.getElementById("input");
    const bus = document.getElementById("bus");
    const titulot = document.getElementById("titulo");
    const fechaf = document.getElementById("fecha");
    const horah = document.getElementById("hora");
    const numeron = document.getElementById("numero");
    const ti = document.getElementById("ti");
    const fl = document.getElementById("fl");
    const tit = document.getElementById("tit");
    const pr = document.getElementById("pr");
    const btn_todo = document.getElementById("btn_todo");
    const btn_bus = document.getElementById("btn_bus");
    const container_todo = document.querySelector(".container_todo");
    const date = new Date();
    let fecha = date.toLocaleDateString();
    
    if(fecha - fechaf == 1){
        window.alert("Tu tarea expira mañana");
    }

    const guardarTareas = () => {
        let asd =  ".Titulo: ." + titulot.value + ".- Se publico en: " + fecha + " <br>" + "Descripcion: ." + input.value + ".<br>" + "Fecha de vencimiento: ." + fechaf.value + ".- Tiempo estimado: ." + horah.value + ". - Prioridad: ." + numeron.value; 
        const tarea = {
            input_tarea: asd
        }
        if (localStorage.getItem("tareas") === null) {
            let arreglo = [];
            arreglo.push(tarea);
            localStorage.setItem("tareas", JSON.stringify(arreglo));
        } else {
            let obtener = JSON.parse(localStorage.getItem("tareas"));
            obtener.push(tarea);
            localStorage.setItem("tareas", JSON.stringify(obtener));
        }
        mostrarTareas();
        input.value = "";
        titulot.value = "";
        fechaf.value = "";
        horah.value = "";
        numeron.value = 5;
    }

    const buscar2 = (n) => {
        try{
            let arr = [];
            arr = order();
            let asd = [];
            n0 = arr[n]
            acom(n0);
             let tareas_obtenidas = JSON.parse(localStorage.getItem("tareas"));
             container_todo.innerHTML = "";
             for (let i = 0; i < tareas_obtenidas.length; i++) {
                 let input = tareas_obtenidas[i].input_tarea;
                 container_todo.innerHTML += `
                 <div class="container_list">
                     <div class="container_list-1">
                         <input type="checkbox" class="casilla">
                         <p class="actividad">${input}</p>
                     </div>
                     <div class="container_list-btn">
                         <button class="btn-eliminar" onclick="eliminarTareas('${input}')" ><i class="fas fa-trash-alt"></i></button>
                         <button class="btn-eliminar" onclick="actTareas('${input}')" ><i class="oso fa-trash-alt"></i></button>
                     </div>
                 </div>
                 `;
             }
         }
         catch{
         }
    }

    

    const order = () => {
        const one = [];
        const two = [];
        const tree = [];
        const ford = [];
        const five = [];
        let cosas = JSON.parse(localStorage.getItem("tareas"));
        for(let i = 0; i < cosas.length; i++){
            let input = cosas[i].input_tarea;
            if(1 == input[input.length-1]){
                one.push(input)
            }
            if(2 == input[input.length-1]){
                two.push(input)
            }
            if(3 == input[input.length-1]){
                tree.push(input)
            }
            if(4 == input[input.length-1]){
                ford.push(input)
            }
            if(5 == input[input.length-1]){
                five.push(input)
            }
        }
        localStorage.clear();
        return [one,two,tree,ford,five];
    }
    const Ordenar = () => {
        let arr = [];
        arr = order();
        let asd = [];
        n0 = arr[0]
        n1 = arr[1]
        n2 = arr[2]
        n3 = arr[3]
        n4 = arr[4]
        acom(n0);
        acom(n1);
        acom(n2);
        acom(n3);
        acom(n4);

    }
    const acom = (n) =>{
        for(let i = 0; i < n.length; i++){
            let tarea2 = {
                input_tarea: n[i]
            }
            if (localStorage.getItem("tareas") === null) {
                let arreglo = [];
                arreglo.push(tarea2);
                localStorage.setItem("tareas", JSON.stringify(arreglo));
            }else {
                let obtener = JSON.parse(localStorage.getItem("tareas"));
                obtener.push(tarea2);
                localStorage.setItem("tareas", JSON.stringify(obtener));
            }
        }
    }

    const mostrarTareas = () => {
        try{
           Ordenar();
            let tareas_obtenidas = JSON.parse(localStorage.getItem("tareas"));
            container_todo.innerHTML = "";
            for (let i = 0; i < tareas_obtenidas.length; i++) {
                let input = tareas_obtenidas[i].input_tarea;
                container_todo.innerHTML += `
                <div class="container_list">
                    <div class="container_list-1">
                        <input type="checkbox" class="casilla">
                        <p class="actividad">${input}</p>
                    </div>
                    <div class="container_list-btn">
                        <button class="btn-eliminar" onclick="eliminarTareas('${input}')" ><i class="fas fa-trash-alt"></i></button>
                        <button class="btn-eliminar" onclick="actTareas('${input}')" ><i class="oso fa-trash-alt"></i></button>
                    </div>
                </div>
                `;
            }
        }
        catch{
        }
    }
    window.onload = mostrarTareas();

    const eliminarTareas = (tarea) => {
        let tareas = JSON.parse(localStorage.getItem("tareas"));
        for (let i = 0; i < tareas.length; i++) {
            if (tarea === tareas[i].input_tarea) {
                tareas.splice(i, 1);
            }
        }
        localStorage.setItem("tareas", JSON.stringify(tareas));
        mostrarTareas();
    }

    const actTareas = (tarea) => {
        let tareas = JSON.parse(localStorage.getItem("tareas"));
        for (let i = 0; i < tareas.length; i++) {
            if (tarea === tareas[i].input_tarea) {
                tareas.splice(i, 1);
                let sep = tarea.split(".");
                input.value = sep[4];
                titulot.value = sep[2];
                fechaf.value = sep[6];
                horah.value = sep[8];
                numeron.value = sep[10];
            }
        }
        localStorage.setItem("tareas", JSON.stringify(tareas));
        mostrarTareas();
    }

    // funcionalidad de agregar tarea
    btn_todo.addEventListener("click", () => {
        if (input.value === "" || input.value.trim() === "") {
            window.alert("Input vacío");
        } else {
            guardarTareas();
        }
    });

    btn_bus.addEventListener("click", () => {
        if (bus.value === "" || bus.value.trim() === "") {
            window.alert("Input vacío");
        } else {
            buscar2(pr.value);
        }
    });

