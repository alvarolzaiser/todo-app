import { Todo } from "./index"

export class TodoList {

    constructor () {

        // Comentamos la línea de que "this.todos" es un arreglo vacío y la reemplazamos por la de abajo, la cual basicamente hace o dice que si "this.todos" o, hay en localStorage un "todo", entonces "this.todos" va a ser igual a todos esos "todos" que estén en "localStorage", sino "this.todos" va a ser igual a un arreglo vacío (tal cual lo es en la linea de abajo que estoy comentando => "this.todos = [];")
        // this.todos = [];

        this.cargarLocalStorage();

    }


    // Métodos:

    // Método para nuevo Tarea o "To Do":
    nuevoTodo( todo ) {

        this.todos.push( todo );
        // Método que recibe como argumento una "tarea" o "todo", la cual se inserta mediante el método "push", al arreglo "todos". Es decir, cuando nosotros le pasamos un argumento al método, ese argumento se está insertando en el array "todos", ¿Por qué? Porque pusimos ".push(todo)", de esa manera, indicamos que el argumento que se reciba el método "nuevoTodo" (el cuál es: "todo"), se tiene que insertar en el array de "todos" (todos.push > push indica que se va a insertar un nuevo elemento a mi array, ¿cuál array? el array "todos", es decir, el array al que se va a insertar se coloca antes del método "push" ... de esa manera, estamos indicando que: quiero que en mi array ("todos") se inserte (".push") lo que reciba el método ("nuevoTodo( todo )") como argumento (".push(todo)"), siendo "todo" el argumento que va a recibir el método y a su vez, es lo que se va a insertar al array de "todos" mediante el método "push"). En otras palabras, el argumento que recibe mi método, se utiliza como valor para insertar al array de "todos" mediante un ".push", es decir, cuando haga referencia al método "nuevoTodo" y le envíe un valor para el argumento "todo", ese valor que reciba el argumento "todo" cuando haga referencia a mi método, es lo que se va a insertar mediante un ".push" al arreglo de "todos".

        // Guardamos en Local Storage el array que contiene los "todos" o instancias de mi clase "Todo". Cuando modificamos un "todo" nosotros deberíamos llamar al método "guardarLocalStorage" ¿Por qué? porque cuando hacemos una modificación (en este caso, añadimos o insertamos un "todo" o instancia de mi clase "Todo" a nuestro arreglo "this.todos" mediante el método "push") a nuestro arreglo que contiene todos mis "todos" o instancias de mi clase "Todo", o cuando hacemos una modificación a un "todo" de manera independiente o aisalada, debemos guardar esas modificaciones en "localStorage". En este caso, la modificacion es, la suma de un nuevo "todo" o la suma de una instancia de mi clase "Todo" a mi arreglo "this.todos", entonces, estamos modificando nuestro arreglo "this.todos", y como dijimos, cuando nuestro arreglo sufre una modificación (borrado, agregado, cambiado, etc), debemos guardar esa modificación en localStorage
        this.guardarLocalStorage();

    }

    // Método para borrar Tarea o "To Do":
    borrarTodo( id ) {

        this.todos = this.todos.filter( todo => todo.id != id ); // parecido al método "estadoTodo", o al ciclo "for of", lo que hace es barrer cada uno de los elementos del array "this.todos" y cada uno de esos elementos del arreglo, se almacena en una constante "todo" (acá no es una constante, como si lo es en el ciclo "for of"). El array "this.todos" contiene dentro: instancias de mi clase "Todo", dichas instancias tienen propiedades como por ejemplo "ID", entonces, lo que está haciendo acá esté "filter" en su "callback" (lo que está entre paréntesis) es barrer cada uno de los elementos de mi arreglo (que son instancias de mi clase "Todo") y comparar el valor de la propiedad "ID" que tiene gracias a ser una instancia de mi clase "Todo", compara el valor de esa propiedad "ID" con el ID que le paso como argumento al método, si el ID del todo (o del elemento de mi arreglo, o de la instancia de mi clase "Todo", que es lo que contiene dentro el arreglo "this.todos") que está escaneando o barriendo es diferente al ID que le pasé como argumento al método, entonces, lo que hace este método es CONSERVAR todos aquellos elementos que tengan un ID (propiedad de mi clase "Todo") diferente (!=) al ID que le envío como argumento al método, es decir, solo va a borrar aquellos o aquel elemento que tengan el mismo ID que le envío como argumento al método... va a comparar el ID que le envío como argumento con el valor de la propiedad "ID" que tiene cada instancia de mi clase "Todo" que esté dentro del arreglo "this.todos" y si el valor de la propiedad ID es diferente al ID que se envió como argumento, entonces conserva el "todo", pero si coincide, elimina el "todo" del arreglo, peeeeeeeero aún se sigue viendo en el HTML aquel "todo" que tiene como valor de la propiedad "ID" el mismo "ID" que envié como argumento del método... a posterior se verá como eliminar ese elemento del HTML (que hasta este momento, o a través de este método, solo se elimina del array "this.todos", pero sigue presente en el HTML)
        // toda esta instrucción va a devolver un nuevo arreglo EXCLUYENDO o BORRANDO aquellos "todos" que tengan el mismo ID que el ID que yo le envíe como argumento al método, es decir, solo va a dejar aquellos "To Dos" que tengan un ID diferente (!=) al ID que le pasé como argumento 
        // basicamente le estoy diciendo que el arreglo "this.todos" va a ser igual al arreglo "this.todos" MENOS aquel "todo" que tuvo el mismo valor para su propiedad "ID" que el "ID" que le envié como argumento

        // Guardamos en Local Storage el array que contiene los "todos" o instancias de mi clase "Todo". Cuando eliminamos un "todo" nosotros deberíamos llamar al método "guardarLocalStorage" ¿Por qué? porque cuando hacemos una modificación (en el caso de este método, borramos un "todo" o instancia de mi clase "Todo") a nuestro arreglo que contiene todos mis "todos" o instancias de mi clase "Todo", debemos guardar esas modificaciones en "localStorage". En este caso, la modificacion que va a sufrir nuestro array "this.todos" en este método es, borrar un "todo" o instancia de mi clase "Todo", entonces, estamos quitando un elemento o "todo" a nuestro arreglo, y como dijimos, cuando nuestro arreglo sufre una modificación (borrado, agregado, cambiamos su estado, etc), debemos guardar esa modificación en localStorage
        this.guardarLocalStorage();

    }

    // Método para pasar Tarea o "To Do" de incompleta a completada y viceversa:
    estadoTodo( id ) {

        for ( const todo of this.todos ) {

            if ( todo.id == id ) {

                todo.completado = !todo.completado; // si es true, pasa a falso, y si es falso, pasa a true, siempre invierte los valores, o pone los opuestos/contrarios
                
                // Guardamos en Local Storage el array que contiene los "todos" o instancias de mi clase "Todo". Cuando modificamos un "todo" nosotros deberíamos llamar al método "guardarLocalStorage" ¿Por qué? porque cuando hacemos una modificación (en este caso, cambiamos el estado de un "todo") a nuestro arreglo que contiene todos mis "todos" o instancias de mi clase "Todo", o cuando hacemos una modificación a un "todo" de manera independiente o aisalada, debemos guardar esas modificaciones en "localStorage". En este caso, la modificacion es el cambio de estado de un "todo", cada "todo" es una instancia de mi clase "Todo" la cual tiene propiedades como "completado", en este caso, cambiamos el valor de dicha propiedad "completado", donde el valor de esta propiedad "completado" pasa de "false" a "true" o viceversa, entonces, estamos modificando un "todo" o una propiedad de mi "todo", y como dijimos, cuando nuestro arreglo o un "todo" sufre una modificación (borrado, agregado, cambiamos su estado, etc), debemos guardar esa modificación en localStorage
                this.guardarLocalStorage();
                
                break;

            }

        }

    }

    // Método para borrar Tarea/s o "To Do" completados únicamente:
    borrarCompletados() {

        this.todos = this.todos.filter( todo => !todo.completado );
        // devuleve un nuevo arrelgo "this.todos" con los "todos" completados, es decir, le estoy diciendo que filtre (mediante el filter) aquellos "todos" que tienen la propiedad "completado" siendo igual a "true". Como  el array "this.todos" contiene dentro instancias de mi clase "Todo", esas instancias tienen la propiedad "completado", la cual por defecto es "false", es decir, cuando creo una nueva instancia de mi clase, la propiedad "completado" es igual a "false". Entonces, lo que hago en este método, es filtrar aquellos todos, que tengan la propiedad "completado" igual a "true"... de esa manera, digo que el array "this.todos" va a ser igual al array "this.todos" descontando o filtrando aquellas instancias de mi clase "Todo" que tengan la propiedad "completado" como "true", o, en otras palabras, que el array "this.todos" será igual a ese mismo arreglo incluyendo en dicho arreglo solamente los "todos" o instancias de mi clase "Todo" que tengan la propiedad "completado" como "false"
        // si yo dejara "todo => todo.completado", es decir sin "!" lo que ocurriría es que el array "this.todos" sería igual a los "todos" completados, lo que me interesa que devuelva ese filtro, es los "todos" que no están completados, por eso se coloca "!todos.completados", buscando que me devuelva del array "this.todos" todos los elementos o instancias de mi clase "Todo" que tengan la propiedad "completado" como "false" 
        // necesito que el arreglo "this.todos" sea igual a ese mismo arreglo, pero que solo incluya (es decir, que filtre) los "todos" o instancia de mi clase "Todo" que tengan la propiedad "competado" igual a "false", y el array "this.todos" solo contenga esos "todos" que tienen la propiedad "completado" igual a "false"
    

        // Guardamos en Local Storage el array que contiene los "todos" o instancias de mi clase "Todo". Cuando eliminamos un "todo" nosotros deberíamos llamar al método "guardarLocalStorage" ¿Por qué? porque cuando hacemos una modificación (en el caso de este método, filtramos los "todos" o instancias de mi clase "Todo" que tengan la propiedad "completado" de mi clase "Todo" con valor "true") a nuestro arreglo que contiene todos mis "todos" o instancias de mi clase "Todo", debemos guardar esas modificaciones en "localStorage". En este caso, la modificacion que va a sufrir nuestro array "this.todos" en este método es, el filtro de los "todos" o instancias de mi clase "Todo" que tengan el valor "true" en la propiedad "completado", es decir, voy a recibir un array de "todos" o instancias de mi clase "Todo" que tengan la propiedad "completado" como "false", entonces, estamos quitando elementos o "todos" a nuestro arreglo, y como dijimos, cuando nuestro arreglo sufre una modificación (borrado, agregado, cambiamos su estado, etc), debemos guardar esa modificación en localStorage
        this.guardarLocalStorage();

    }

    guardarLocalStorage() {

        localStorage.setItem('todo', JSON.stringify( this.todos ));
        // la línea `JSON.stringify( this.todos )` transforma mi "array" de un "array" a un objeto JSON. El almacenamiento local (localStorage) solo puede almacenar datos como cadenas de texto. Si intentas almacenar un objeto JavaScript directamente en localStorage como "this.todos" (que es un array que dentro contiene objetos o instancias de mi clase "Todo"), se almacenará como [object Object], volviendo cada elemento de tu array o cada "todo" o instancia de tu clase "Todo" en una cadena de texto "[object Object]", perdiendo así los valores y datos que almacenaba y contenía dentro cada "todo" o instancia de tu clase "Todo". Al convertir el objeto en una cadena JSON, preservas su estructura y datos de una manera que puede ser reconstruida más tarde. En este caso, lo que pasamos a una cadena JSON para preservar su estructura y los datos que contiene dentro (instancias de mi clase "Todo"), es lo que ponemos entre paréntesis (this.todos), es decir, lo que pasamos a una cadena JSON es el array "this.todos" que dentro contiene todas las instancias de mi clase "Todo" o todos mis "todos", para que de esa manera podamos conservar su estructura y los datos que contiene dentro el array "this.todos" que bien sabemos que dentro contiene instancias de mi clase "Todo" o lo que es igual, contiene mis "todos"
        // basicamente estoy diciendo que me convierta mi arreglo de "todos" llamado "this.todos" aun JSON perfecto. Lo que hace JSON.stringify es convertir mi arreglo "this.todos" en un objeto JSON, pasa el formato de arreglo a objeto JSON.

    }

    cargarLocalStorage() {

        this.todos = ( localStorage.getItem('todo') ) 
                   ? JSON.parse( localStorage.getItem('todo') )
                   : [];
        // A lo que sea igual "this.todos" va a depender si en localStorage hay 'todo' o no (localStorage.getItem('todo')), si en localStorage hay 'todo' entonces, this.todos va a ser igual a esos 'todo' que están almacenados en localStorage, es decir, "this.todos = JSON.parse(localStorage.getItem('todo'))", de esa manera, en caso de que haya "todos" almacenados en localStorage, this.todos va a ser igual a la conversión de mi objeto JSON (que contiene mis "todos" almcenados en localStorage) en un array nuevamente gracias al JSON.parse, es decir, yo a través de JSON.stringify convertí mi array en un objeto JSON, y ahora a través de JSON.parse hago lo inverso, convierto mi objeto JSON nuevamente en lo que era antes (un array que contenía mis "todos" o instancias de mi clase "Todo") ..... Y, en caso de que no haya 'todo' almacenados en localStorage, "this.todos" va a ser igual a un arreglo vacío, eso significa que si no hay "todos" o instancias de mi clase "Todo" almacenadas en mi localStorage, quiere decir que "this.todos" debe ser igual a un arreglo vacío... en otras palabras, si no hay nada almacenado en localStorage, no hay "todos", por ende "this.todos" debe ser igual a un arreglo vacío 
        // operador ternario, si se cumple lo que hay entre paréntesis (localStorage.getItem('todo')), this.todos va a ser igual a: "JSON.parse(localStorage.getItem('todo'))", y en caso de que la condición entre paréntesis de "false" porque en mi localStorage no existe 'todo', entonces "this.todos" va a ser igual a: "[]" (un arreglo vacío), es decir, en caso que la condición entre paréntesis de "false", lo que significaría que en mi localStorage no existe "todo", entonces "this.todos" va a ser igual a un arreglo vacío
    
        this.todos = this.todos.map( obj => Todo.fromJson( obj ) );

        // lo que hice acá basicamente es decirle a "this.todos" a través del método "map", que agarre cada uno de los elementos que tiene dentro, siendo cada elemento u objeto dentro de "this.todos" un "obj", y aplicándole a cada "obj" el método "fromJson" de la clase "Todo" (por eso coloco Todo.fromJson, porque le digo que utilice de la clase "Todo" el método "fromJson"). Como definí en el método "fromJson", lo que recibe este método como argumento es un objeto desestructurado, entonces le envío como argumento un objeto, en este caso, el objeto que le estoy enviando como argumento es: "this.todos" que en este momento es un objeto, y ahora, a través del método "fromJson" de la clase "Todo", convierto esos objetos que tiene dentro "this.todos" en instancias de mi clase "Todo", tomando las propiedades de esos objeto que le envío como argumento al método "fromJson", y convirtiéndolas en propiedades de una instancia de mi clase "Todo".
        // De esta manera logro convertir los "todos" de ser objetos a volver a ser instancias de mi clase "Todo". Es decir, cada "todo" vuelve a ser una instancia de mi clase "Todo"

    }

}
