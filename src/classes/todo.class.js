

export class Todo {

    // Método estático que convierte los "todos" o instancia de mi clase "Todo" de un Objeto a lo que son originalmente (instancias de mi clase Todo, dentro de un arreglo). Los "todos" dejan de ser instancias de mi clase "Todo" para poder ser almacenados en LocalStorage, para lograr eso, debemos convertir esas instancias de mi clase "Todo" a strings (es lo único que recibe el método "setItem", el cual me permite almacenar "strings" en localStorage) mediante el JSON.stringify, y luego, para cargar esos "todos" que eran instancias de mi clase "Todo" y ahora son un "string", debemos hacer el proceso inverso a través de JSON.parse, convirtiendo cada "todo" de un "string" a un "objeto", si yo quiero que ese "todo" vuelva a ser una instancia de mi clase "Todo" dentro de un arreglo, debo llamar a este método estático justo después de que lo convertí en un objeto mediante el JSON.parse. Debajo del código que convierte mis "todos" de "strings" a "objetos", debo convertir nuevamente ese objeto en un array que dentro contiene instancias de mi clase "Todo", para eso, luego de la conversión de "string" a "objeto", debo decirle a "this.todos" (objeto con más obejetos dentro), que haga un "map" de cada objeto que tiene dentro y le aplique el método estático "fromJson", de esa forma transforma el objeto en instancias de mi clase "Todo", gracias al código que tiene dentro el método fromJson (el cual recibe como argumento un objeto y lo desestructura, toma ese objeto desestructurado que recibe como argumento, y transforma las propiedades de ese objeto desestructurado en propiedades de una nueva instancia de mi clase "Todo", la cual está siendo almacenada por la constante "tempTodo", es decir, la constante "tempTodo" almacena la creación de una nueva instancia de mi clase, y el argumento que va a recibir la creación de esa nueva instancia de mi clase es obtenido del objeto que recibe como argumento el método "fromJson"... entonces, la nueva instancia de mi clase, toma y se nutre de las propiedades del objeto que recibe el método estático como argumento, y usa esas propiedades del objeto que recibe el método "fromJson" para definir el valor que van a tener las propiedades de esta nueva instancia cuya creación está siendo almacenando en la constante "tempTodo")

    static fromJson ({ id, tarea, completado, fecha }) {

        const tempTodo = new Todo( tarea );

        tempTodo.id         = id; 
        tempTodo.fecha      = fecha;
        tempTodo.completado = completado;

        return tempTodo;

        // el "ID", "fecha", "completado" de "tempTodo" que es una nueva instancia de mi clase "Todo" (o una constante que almacena eso), va a ser lo que guarde esa nueva instancia de mi clase como "ID", "fecha" o "completado". Por ejemplo el ID de la instancia nueva que se almacena en la constante "tempTodo" va a ser igual a la fecha de creación de la instancia pasado a timestamp, de esa manera se genera un código único e irrepetible
        // pongo "tempTodo.id" porque le indico que el "id" de la instancia nueva que se está almacenando en la constante "tempTodo" va a ser igual a lo que esa instancia guarde como id.
        // Todas las constantes, funciones o métodos que creen nuevas instancias de mi clase "Todo", reciben como argumento la "tarea" o el contenido del "todo", por ende, lo que yo le mande como argumento a esa función, método, etc, va a ser el valor que adopte la propiedad "tarea" de mi clase "Todo". En este caso, la constante "tempTodo" está almacenando la creacion de una nueva instancia de mi clase "Todo" y el argumento que recibe es el valor que quiero que tenga la propiedad "tarea" para esa instancia que estoy creando. De esa manera, cuando cree una nueva instancia de mi clase "Todo", el valor que va tener la propiedad "tarea" va a ser igual a lo que le mande como argumento, la creación de esa nueva instancia va a ejecutar el constructor, y el constructor va a tomar ese argumento que le estoy enviando y lo va a asignar como el valor que va a tener la propiedad "tarea" 

    }

    constructor ( tarea ) {

        this.tarea = tarea;

        // "new Date()" = obtiene la fecha actual y mediante el método ".getTime()" pasamos esa fecha a una número o valor equivalente a la hora, minutos, segundos y milisegundos (timestamp) en el que se creó la tarea en este caso, ese valor me sirve como ID, ya que cada tarea se va a crear en milisegundos o segundos diferentes, por ende, cada vez que cree una tarea, el valor va a ser diferente al anterior o al siguiente, por lo cual, me sirve para identificar cada tarea con un valor único
        this.id         = new Date().getTime();
        this.completado = false; // a través de este valor booleano, indicamos si la tarea está completada o no, o, el estado de la misma
        this.fecha      = new Date(); // aca simplemente obtenemos la fecha, sin pasarla a timestamp o convertirla en un valor único equivalente a la hora, minutos, segundos y milisegundos de esa fecha específica, mediante el método ".getTime()". Es decir, no utilizamos el método mencionado, el cual nos permite convertir esa fecha a un valor único, porque lo que nos interesa es simplemente obtener la fecha en la que se creó la nota, no nos interesa convertir esa fecha en un número único basado en la hora, minutos, segundos y milisegundos de esa fecha, para utilizar ese valor como identificador único de la tarea. Unicamente nos interesa recuperar la fecha en la que se creó la tarea, por ende, no utilizamos el método ".getTime()" que la convertiría en timestamp o en ese valor único, porque no nos interesa eso, sino conocer la fecha de creación de la tarea

    }

}
